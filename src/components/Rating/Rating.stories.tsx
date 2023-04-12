import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'components/Rating',
    component: Rating
};


export const EmptyRating = () => <Rating value={0} onclick={x => x}/>;
export const Rating1 = () => <Rating value={1} onclick={x => x}/>;
export const Rating2 = () => <Rating value={2} onclick={x => x}/>;
export const Rating3 = () => <Rating value={3} onclick={x => x}/>;
export const Rating4 = () => <Rating value={4} onclick={x => x}/>;
export const Rating5 = () => <Rating value={5} onclick={x => x}/>;
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onclick={setRating}/>
}
