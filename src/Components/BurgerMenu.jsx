import styled from 'styled-components'

const BurgerMenu = () => {
  return (
    <Wrapper>
      <div className='link'>
        <h2>SHOP</h2>
        <img src="https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/arrow-right.svg?v=145687116542380365141657294265" alt="" />
      </div>
      <div className='link'>
        <h2>BUILD A BUNDLE</h2>
        <img src="https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/arrow-right.svg?v=145687116542380365141657294265" alt="" />
      </div>
      <div className='link'>
        <h2>ABOUT US</h2>
        <img src="https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/arrow-right.svg?v=145687116542380365141657294265" alt="" />
      </div>
      <div className='link'>
        <h2>STORE LOCATOR</h2>
        <img src="https://cdn.shopify.com/s/files/1/0162/2468/t/172/assets/arrow-right.svg?v=145687116542380365141657294265" alt="" />
      </div>
    </Wrapper>
  )
}

export default BurgerMenu

const Wrapper = styled.div `
  display: none;
  height: 100vh;
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
  }
`