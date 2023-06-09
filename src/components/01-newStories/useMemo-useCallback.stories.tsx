import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingEx = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    }, [a])

// сделай вычисления и запомни, до тех пор, пока а не поменяется. Когда а поменяется,
// запускай эту сложную дичь, в противном случае не делай пересчет


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>


    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const HelpsReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Arthur', 'Lena', 'Ivan', 'Kristina'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1);
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Lera' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter +1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const likeUseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])


    const memoizedAddBook = useMemo(() => {
        return () => {
            const newUsers = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }, [books])


    return <>
        <button onClick={() => setCounter(counter +1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook}/>
    </>
}

const BooksSecret = (props: { addBook: () => void }) => {
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}
const Book = React.memo(BooksSecret)