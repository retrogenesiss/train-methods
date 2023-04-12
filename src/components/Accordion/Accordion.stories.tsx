import React, {useState} from 'react';
import Accordion, {AccordionMemo} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {ComponentMeta, ComponentStory} from "@storybook/react";

const GetCategoryObj = (categoryName: "Color" | "Event" | 'Main') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj("Color")
        },
        onChange: {
            ...GetCategoryObj("Event")
        },
        onClick: {
            ...GetCategoryObj("Event")
        },
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        titleValue: {...GetCategoryObj('Main')},
    }
} as ComponentMeta<typeof Accordion>;


const callback = action('accordion mode change event')
const onClickCallback = action('some item was clicked')

// const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />
// const calbacksProps = {
//     onChange: callback,
//     onClick: onClickCallback
// }

// const MenuCollapsedMode = Template.bind({})
// MenuCollapsedMode.args = {
//     ...calbacksProps,
//     titleValue: 'Menu',
//     collapsed: true,
//     items: []
// }

// const UsersCollapsedMode = Template.bind({})
// UsersCollapsedMode.args = {
//     ...calbacksProps,
//     titleValue: 'Users',
//     collapsed: true,
//     items: [
//         {title: 'Arthur', value: 1},
//         {title: 'Lena', value: 2},
//         {title: 'Ivan', value: 3},
//         {title: 'Kristina', value: 4},
//     ]
// }

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} onChange={callback} collapsed={true}
                                                  items={[]} onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} onChange={callback} collapsed={false}
                                                     items={[{title: 'Arthur', value: 1}, {title: 'Lena', value: 2},
                                                         {title: 'Ivan', value: 3}, {title: 'Kristina', value: 4}]}
                                                     onClick={onClickCallback}/>

const Menu = React.memo(MenuCollapsedMode)
const Users = React.memo(UsersUncollapsedMode)

export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true)
//{...args} collapsed={value} onChange={() => setValue(!value)}
    return <>
        <AccordionMemo titleValue={'Users'}
                       collapsed={value}
                       onChange={() => setValue(!value)}
                       items={[
                           {title: 'Arthur', value: 1},
                           {title: 'Lena', value: 2},
                           {title: 'Ivan', value: 3},
                           {title: 'Kristina', value: 4}
                       ]}
                       onClick={(value) => {
                           alert(`user with ID ${value} should be happy`)
                       }}
        />
        <Users/>
        <Menu/>
    </>
}

// ModeChanging.args = {
//     titleValue: 'Users',
//     items: [
//         {title: 'Arthur', value: 1},
//         {title: 'Lena', value: 2},
//         {title: 'Ivan', value: 3},
//         {title: 'Kristina', value: 4},
//     ],
//     onClick: (value) => {
//         alert(`user with ID ${value} should be happy`)
//     }
// }