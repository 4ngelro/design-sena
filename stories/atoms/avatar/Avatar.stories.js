import React from "react";
import Avatar from "./Avatar"

export default{
    title: "Desing System/Atoms/Avatar",
    component: Avatar,
    argTypes:{
        size:{
            control:{
                type: "select",
                options:["small","medium","large"]
            }
        }
    }
}

const Template = (args) => <Avatar {...args} />
export const SmallPrimary = Template.bind({})
SmallPrimary.args={
    name:"User1",
    imageUrl:"Avatar.jpg",
    size:"small",
}