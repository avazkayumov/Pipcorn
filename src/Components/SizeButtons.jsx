import React from 'react'
import styled from 'styled-components'

const SizeButtons = () => {
  return (
    <Wrapper>
        <p className='size-buttons-title'>Select a size</p>

        <div className='buttons'> 
           <div className='left-button'>
                <p>4 Bags (4.5oz)</p>
                <p>$10.99</p>
           </div>
           <div className='right-button'>
                <p>24 Bags (1oz Snack Size)</p>
                <p>$18.99</p>
           </div>
        </div>
    </Wrapper>
  )
}

export default SizeButtons

const Wrapper = styled.div`
margin-bottom: 15px;

    .size-buttons-title {
        /* font-family: 'Pluto'; */
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 22px;
        text-transform: uppercase;
        color: #2A2A2A;
        margin-bottom: 10px;
    }

    .buttons {
        display: flex;
        align-items: center;
        gap: 20px;

        div {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 12px 16px;
    
            /* font-family: 'Pluto'; */
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.08px;
            color: #953300;
            cursor: pointer;
        }
        
        .left-button {
            background-color: #953300;
            color: white;
            border: 1px solid #953300;
        }  
        
        .right-button {
            border: 1px solid #953300;
            background-color: transparent;
            color: #953300;
            transition: 0.3s;
        }

        .right-button:hover {
            background-color: #953300;
            color: white;
        }
    }
`