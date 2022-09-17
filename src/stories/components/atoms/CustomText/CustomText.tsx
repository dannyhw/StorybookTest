
import React from "react";
import { CustomTextStyle } from "./CustomTextStyle";

interface CustomTextProps {
    text: string;
    customColor: string;
    size: number;
}

const CustomText: React.FC<CustomTextProps> = (props: CustomTextProps) => {
    return (
        <CustomTextStyle
            color={props.customColor}
            size={props.size}>
            {props.text}
        </CustomTextStyle>
    );
};

export default CustomText