import {Clock, ClockWithArrows} from "./Clock";

export default {
    title: 'Clock',
    component: Clock,
}

export const baseExample = () => {
    return <Clock/>
}

export const arrowsClock = () => {
    return <ClockWithArrows/>
}