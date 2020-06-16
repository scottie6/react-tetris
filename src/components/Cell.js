import React from 'react';
import styled from 'styled-components';
import { TETROMINOS } from '../tetrominos';

const StyledCell = styled.div`
    width: auto;
    background: rgba(${props => props.color}, 0.8);
`

const Cell = ({ type }) => (
    <StyledCell type={'L'} color={TETROMINOS['L']['color']}>cell</StyledCell>
);

export default Cell;
