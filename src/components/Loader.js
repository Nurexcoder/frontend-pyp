import { CircularProgress } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Loader = () => {
    const Container= styled.div`
        width: 100%;
        height:80vh;
        display: flex;
        align-items: center;
        justify-content: center;
    `
  return (
    <Container>
         <CircularProgress />
    </Container>
  )
}

export default Loader