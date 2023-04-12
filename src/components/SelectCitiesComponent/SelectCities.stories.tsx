import React, {useMemo, useState} from "react";
import SelectCities from "./SelectCities";

export default {
    title: 'cities select',
    component: SelectCities,
}

export const SelectCitiesStories = () => {
    const [value, setValue] = useState(1)
    const [cities, setCities] = useState([
        {countryId: 1, title: 'Moscow: ', population: 13000000},
        {countryId: 2, title: 'Sevastopol: ', population: 340000},
        {countryId: 3, title: 'Novosibirsk: ', population: 1500000},
        {countryId: 4, title: 'Minsk: ', population: 1900000},
        {countryId: 5, title: 'Brest: ', population: 340000},
        {countryId: 6, title: 'Grodno: ', population: 360000},
        {countryId: 7, title: 'Kiev: ', population: 2800000},
        {countryId: 8, title: 'Harkov: ', population: 1400000},
        {countryId: 9, title: 'Odessa: ', population: 990000}
    ])

    const russiaSelect = useMemo(() => {
        return cities.filter(el => el.countryId < 4)
    }, [cities])

    const onlyILetter = useMemo( () => {
        return cities.filter(el => el.title.indexOf('i') > -1)
    }, [])

    const aboveOneMillion = useMemo( () => {
        return cities.filter(el => el.population > 1000000)
    }, [])

    return <>
        <SelectCities name={'only russia'}
                      onChange={setValue}
                      value={value}
                      cities={russiaSelect}
        />
        <SelectCities name={'only with i letter'}
                      onChange={setValue}
                      value={value}
                      cities={onlyILetter}
        />
        <SelectCities name={'only above 1 mln'}
                      onChange={setValue}
                      value={value}
                      cities={aboveOneMillion}
        />
    </>
};