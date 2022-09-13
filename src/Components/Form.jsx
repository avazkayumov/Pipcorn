import React, { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as Stars } from '../Assets/stars.svg'
import OneTime from './OneTime'
import SizeButtons from './SizeButtons'
import Subscribe from './Subscribe'
import downArrow from '../Assets/downward-arrow.png'
import VeganImg from '../Assets/vegan-img.svg'
import HeirloomImg from '../Assets/heirloom-img.svg'
import GlutenImg from '../Assets/gluten-img.svg'
import WholegrainImg from '../Assets/wholegrain-img.svg'
import FormCards from './FormCards'


const Form = () => {

    const [changePurchase, setChangePurchase] = useState(true)

  return (
    <Wrapper>
        <TitleContainer>
            <p>POPCORN</p>
            <h1>SEA SALT POPCORN</h1>
        </TitleContainer>

        <RateContainer>
            <div className="stars">
                <Stars />
                <p>278 reviews</p>
            </div>
            <p className='price'>{changePurchase ? "$18.00" : "$16.20"}</p>
        </RateContainer>

        <SizeButtons />

        <PurchaseButtons>
            <input 
                onClick={() => setChangePurchase(true)}
                name='purchase'
                type="radio"
                id='purchase'
                hidden
                defaultChecked
                />
            <label htmlFor="purchase">One time purchase: $10.99</label>
        
            <input 
                onClick={() => setChangePurchase(false)}
                name='purchase'
                type="radio"
                id='purchase2'
                hidden />
            <label htmlFor="purchase2">Subscribe & save (10%): $9.89</label>
            {!changePurchase ? (
                <div className="delivery">
                    <h3 className='delivery_title'>Deliver Every</h3>
                    <div className='select-week'>
                        <select name="" id="">
                            <option value="">2 Weeks</option>
                            <option value="">4 Weeks</option>
                        </select>
                        <img className='downarrow-ic' src={downArrow} alt="" />
                    </div>
                    <div className='delivery_line'></div>
                </div>
            ) : ""}
        </PurchaseButtons>


        {changePurchase ? (
            <OneTime />
        ) : <Subscribe/>}

        <FormImages>
            <img src={VeganImg} alt="" />
            <img src={HeirloomImg} alt="" />
            <img src={GlutenImg} alt="" />
            <img src={WholegrainImg} alt="" />
        </FormImages>

        <FormCards />
    </Wrapper>
  )
}

export default Form

const Wrapper = styled.div`
    width: 100%;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const TitleContainer = styled.div `
    margin-bottom: 12px;
    p {
        /* font-family: 'SS Nickson Six'; */
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.13em;
        text-transform: uppercase;
        color: #C59259;
    }
    h1 {
        /* font-family: 'SS Nickson Six'; */
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 50px;
        color: #3F3C38;
    }
`

const RateContainer = styled.div`
    margin-bottom: 15px;
    .stars {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 11px;
    }
    .price {
        /* font-family: 'SS Nickson Six'; */
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.5px;
        color: #3F3C38;
    }
`

const PurchaseButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 10px;
    border: 1px solid #953300;
    margin-bottom: 15px;
    
    .delivery {
        .delivery_title {
            /* font-family: PlutoMedium; */
            font-size: 16px;
            line-height: 16px;
            color: #3f3c38;
            margin-top: 13px;
            margin-bottom: 18px;
        }
        
        .select-week {
            display: flex;
        }
        
        select {
            background-color: #F6F3E2;
            border: none;
            width: 384px;
            outline: none;
            font-size: 16px;
            color: #3F3C38;
            font-weight: bold;
            /* font-family: PlutoMedium, sans-serif; */
        }
        select {
            -webkit-appearance: none;
            -moz-appearance: none;
            text-indent: 1px;
            text-overflow: '';
            margin-bottom: 10px;
        }   

        .downarrow-ic {
            width: 16px;
            height: 16px;
        }

        .delivery_line {
            width: 400px;
            height: 3px;
            background-color: #3f3c38;
        }
    }

    label {
        /* font-family: 'Pluto'; */
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-transform: capitalize;
        color: #3F3C38;
        cursor: pointer;
        user-select: none;

        display: flex;
        align-items: center;
        gap: 6px;
    }

    label::before {
        content: " ";
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid black;
    }

    input:checked + label::before {
      background-color: #953300;
      border-color: white;
      outline: 1px solid #953300;
    }
`

const FormImages = styled.div `
    margin-top: 35px;
    margin-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`