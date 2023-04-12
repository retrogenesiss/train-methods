import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    //если зависимости нет, useEffect будет срабатывать при каждом действии
    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect every counter change')
        document.title = counter.toString()
    }, [counter])


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter+ 1)}>x</button>

    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {

        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)

    }, [counter])


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter+ 1)}>x</button>

    </>
}

export const SetInterval = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetInterval')

    useEffect(() => {

        setInterval(() => {
            setCounter(state => state + 1)
           }, 1000)

    }, [])


    return <>
        Hello, {counter}
        {/*<button onClick={() => setCounter(counter+ 1)}>x</button>*/}
    </>
}