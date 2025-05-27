import React from 'react'
import { RotateLoader } from 'react-spinners'
import styled from 'styled-components';

export const Spinner1 = () => {
    return (<Container>
        <RotateLoader color='#1778f2' size={15} />
    </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    `;