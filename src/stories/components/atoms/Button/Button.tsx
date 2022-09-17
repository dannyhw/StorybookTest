import React from "react";
import { Text } from "react-native";
import { CustomButtonStyle } from './ButtonStyle'
import { DefaultTheme, withTheme } from 'styled-components'


interface ButtonProps {
  onPress: () => void;
  text: string;
  style: ButtonStyleProps
  theme: DefaultTheme
}

export interface ButtonStyleProps {
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  backgroundColor?: string;
  fontSize?: number;
}

const Button: React.FC<ButtonProps> = ({ onPress, style, theme, ...props }: ButtonProps) => {
  return (
    <CustomButtonStyle style={style} onPress={onPress}>
      <Text style={style}>{props.text}</Text>
    </CustomButtonStyle>
  );
};

export default withTheme(Button);