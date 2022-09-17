import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

import { ButtonStyleProps } from "./Button";

export const CustomButtonStyle = styled.TouchableOpacity<{ style: ButtonStyleProps }>`
    padding: ${props => (
        (props.style.paddingTop !== undefined ? props.style.paddingTop + 'px' : 3 + 'px') + ' ' +
        (props.style.paddingRight !== undefined ? props.style.paddingRight + 'px' : 4 + 'px') + ' ' +
        (props.style.paddingBottom !== undefined ? props.style.paddingBottom + 'px' : 5 + 'px') + ' ' +
        (props.style.paddingLeft !== undefined ? props.style.paddingLeft + 'px' : 6 + 'px')
    )};
    background-color: ${({ style, theme }) => ((theme.palette !== undefined) ? theme.palette.primary.main : style.backgroundColor)};
    font-size: ${props => props.style.fontSize};
`;

