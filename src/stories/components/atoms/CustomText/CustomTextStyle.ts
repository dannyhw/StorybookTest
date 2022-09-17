import React from 'react';
import styled from 'styled-components/native';


export const CustomTextStyle = styled.Text<{ color: string, size: number }>`
    color: ${props => props.color};
    font-size: ${props => props.size}px;
`;