import React, { useState } from 'react'
import styled from 'styled-components'

import {ReactComponent as PlusIcon} from "../Assets/plus_ic.svg"
import {ReactComponent as MinusIcon} from "../Assets/minus_ic.svg"

const OneTime = () => {
    const [countPrice, setCountPrice] = useState(18)
    const [count, setCount] = useState(1)
  
    function minusFunc() {
        if (countPrice > 18) {
            setCountPrice(countPrice - 18)
            setCount(count - 1)
        }
    }

    function plusFunc() {
        setCountPrice(countPrice + 18)
        setCount(count + 1)
    }

    return (
    <Wrapper>
        <div className="count-button">
            <MinusIcon className='button-count' onClick={() => minusFunc()} /> 
            <span>{count}</span>
            <PlusIcon className='button-count' onClick={() => plusFunc()}></PlusIcon> 
        </div>
        <div className="add-button">
            <p>ADD TO CART</p>
            <div className='line'></div>
            <p>${countPrice.toFixed(2)}</p> 
        </div>
    </Wrapper>
  )
}

export default OneTime

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    .count-button {
        width: 139px;
        height: 49px;
        padding: 0 18px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        border: 1px solid #953300;
        background-color: transparent;
        user-select: none;
        
        .button-count {
            cursor: pointer;
        }

        span {
            font-size: 16px;
            cursor: pointer;
            font-weight: 700;
        }
    }

    .add-button {
        width: 100%;
        font-family: 'Antonio', sans-serif;
        background: #953300;
        border: 1px solid #953300;
        height: 49px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        transition: 0.3s;

        p {
            font-size: 22px;
            color: white;
            font-weight: bold;
        }

        .line {
            height: 18px;
            background-color: white;
            width: 2px;
        }
    }

    .add-button:hover {
        background-color: transparent;
        border: 1px solid #953300;
        
        p {
            color: #953300;
        }
        .line {
            background-color: #953300;
        }
    }
`