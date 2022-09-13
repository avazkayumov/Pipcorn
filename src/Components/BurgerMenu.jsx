import styled from 'styled-components'
import ArrowRight from "../Assets/right-arrow.png"
import { AiOutlineArrowRight } from 'react-icons/ai'

const BurgerMenu = () => {

  return (
    <Wrapper>
      <div className='link'>
        <h2>SHOP</h2>
        <AiOutlineArrowRight className='arrow-right' />
      </div>
      <div className='link'>
        <h2>BUILD A BUNDLE</h2>
        <AiOutlineArrowRight className='arrow-right' />
      </div>
      <div className='link'>
        <h2>ABOUT US</h2>
        <AiOutlineArrowRight className='arrow-right' />
      </div>
      <div className='link'>
        <h2>STORE LOCATOR</h2>
        <AiOutlineArrowRight className='arrow-right' />
      </div>
    </Wrapper>
  )
}

export default BurgerMenu

const Wrapper = styled.div `
  display: none;
  width: 100%;
  position: absolute;
  top: 76px;
  left: 0;
  
  @media (max-width: 990px) {
    display: block;
  }

  .link {
    width: 100%;
    padding: 40px 20px;
    background-color: #cfab8a;
    border-bottom: 2px solid #953300;

    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    
    h2 {
      font-size: 35px;
      font-family: 'Antonio', sans-serif;
      color: #953300;
    }
    .arrow-right {
      width: 24px;
      height: 24px;
      color: #953300;
    }
  }
`