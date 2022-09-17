import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import CustomText from "./CustomText";

export default {
    title: "Atoms/CustomText",
    component: CustomText,

} as ComponentMeta<typeof CustomText>;


const Template: ComponentStory<typeof CustomText> = (args) => {
    return <CustomText {...args} />;
};

export const StoryWithControls = Template.bind({});
StoryWithControls.args = {
    customColor: 'red',
    text: 'test this yeah rr',
    size: 13
};

export const Story243WithControls = Template.bind({});
Story243WithControls.args = {
    customColor: 'white',
    text: 'test this asdfsf sadf ',
};


