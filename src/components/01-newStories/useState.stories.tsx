import {useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    return 1
}

export const Example1 = () => {
    console.log('Example1')

    const [counter, setCounter] = useState<number>(generateData)
    // useState сам защищает функцию, чтобы каждый раз ее не перерисовывать, как useMemo

    // const changer = (state: number) => {
    //     return state + 1
    // }

    return <>
        {/*<button onClick={() => setCounter(changer)}>x</button>*/}
        <button onClick={() => setCounter(state => state + 1)}>x</button>
        {counter}
    </>
}
