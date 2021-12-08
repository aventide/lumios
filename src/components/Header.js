import React from 'react';
import styled from 'styled-components';

import { octWidth, gutter, OCTAGON_DEFAULT_COLOR } from '../constants';

export default function Header(){
    return <Container>
        <p>hi</p>
    </Container>
}

const Container = styled.div`
    height: ${(octWidth + gutter) * 2}px;
    width: 100%;
    border-bottom: ${gutter}px solid #4f4f4f;
    text-align: center;
    margin-bottom: ${2 * gutter}px;
`;