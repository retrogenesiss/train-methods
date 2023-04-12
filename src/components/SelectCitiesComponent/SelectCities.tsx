import React, {useState} from 'react';
import styles from './SelectCities.module.css'

export type CitiesType = {
    countryId: number
    title: string
    population: number
}

export type SelectType = {
    name: string
    onChange: (value: any) => void
    value: any
    cities: CitiesType[]
}

const SelectCities = (props: SelectType) => {
    const [active, setActive] = useState(false)

    const selectedCity = props.cities.find(el => el.countryId === props.value)
    const toggleItems = () => setActive(!active)
    const onCityClick = (value: any) => {
        props.onChange(value);
            toggleItems()
    }
    return (
        <>
            <div className={styles.select}>
                <span className={styles.main}
                      onClick={toggleItems}>
                    {selectedCity && selectedCity.title + selectedCity.population}
                </span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.cities.map(el =>
                            <div
                                key={el.countryId}
                                onClick={() => {onCityClick(el.countryId)}}
                            >{el.title}
                                <span>{el.population}</span>
                            </div>)}
                    </div>
                }
            </div>
        </>
    );
};

export default SelectCities;
