import React, {useEffect, useState} from "react";
import './Clock.css'

type PropsType = {}

const get2digitsStrings = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            // эта штука нужна, чтобы компонента умерла и перестала работать
            // это функция зачистки
            clearInterval(intervalID)
        }
    }, [])

    return <div>
        <span>{get2digitsStrings(date.getHours())}</span>
        :
        <span>{get2digitsStrings(date.getMinutes())}</span>
        :
        <span>{get2digitsStrings(date.getSeconds())}</span>
    </div>
}

export const ClockWithArrows: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourAngle = (hours % 12) * 30 + minutes / 2;
    const minuteAngle = minutes * 6;
    const secondAngle = seconds * 6;

    return <div className="clock">
        <div className="clock-face">
            <div className='dot'/>
            <div className='arrows'>
                <div className="hour-hand" style={{transform: `rotate(${hourAngle}deg)`}}/>
                <div className="minute-hand" style={{transform: `rotate(${minuteAngle}deg)`}}/>
                <div className="second-hand" style={{transform: `rotate(${secondAngle}deg)`}}/>
            </div>
        </div>
    </div>
}