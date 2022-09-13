import React from 'react'
import styled from 'styled-components'
import Carousel from '../Components/Carousel'
import Form from '../Components/Form'

const Main = () => {
  return (
    <Wrapper>
      <Carousel />
      <Form />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div `
width: 100%;  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  padding: 100px 111px;

  @media (max-width: 1440px) {
    padding: 100px 20px;
  }
  @media (max-width: 768px) {
    padding: 70px 20px;
  }
  @media (max-width: 375px) {
    padding: 70px 10px; 
  }
  
`