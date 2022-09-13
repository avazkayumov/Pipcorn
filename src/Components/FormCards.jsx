import React from 'react'
import styled from 'styled-components'

import {ReactComponent as BoxImg} from "../Assets/box-img.svg"
import SnackImg1 from '../Assets/snack-img-1.png'
import SnackImg2 from '../Assets/snack-img-2.png'

const FormCards = () => {
  return (
    <Wrapper>
        <div className="card-bundle">
            <h3 className='card-bundle_title'>ADD TO A BUNDLE</h3>
            <div className='card-bundle_flex'>
                <div className="card-bundle_flex-img-text">
                    <BoxImg />
                    <div className="card-bundle_flex_text">
                        <b>Want to try more flavours?</b>
                        <p>Create your own sampler pack and choose your own adventure!</p>
                    </div>
                </div>
                <button className='card-bundle_btn'>Build your  own bundle</button>
            </div>
        </div>

        <div className="card-bundle">
            <h3 className='card-bundle_title'>Try out our other SNACKS</h3>
            <div className='card-bundle_flex'>
                <div className="card-bundle_flex-img-text">
                    <img src={SnackImg1} alt="" />
                    <div className="card-bundle_flex_text">
                        <b>Cheese Balls Variety Pack</b>
                        <p>4 Bags (4.5oz)</p>
                    </div>
                </div>
                <button className='card-bundle_btn card_add-btn'>Add to cart <div></div> <span>$10.99</span> </button>
            </div>
        </div>

        <div className="card-bundle">
            <div className='card-bundle_flex'>
                <div className="card-bundle_flex-img-text">
                    <img src={SnackImg2} alt="" />
                    <div className="card-bundle_flex_text">
                        <b>Cheddar Cheese Balls</b>
                        <p>4 Bags (4.5oz)</p>
                    </div>
                </div>
                <button className='card-bundle_btn card_add-btn'>Add to cart <div></div> <span> $10.99</span> </button>
            </div>
        </div>
    </Wrapper>
  )
}

export default FormCards

const Wrapper = styled.div`

    @media (max-width: 450px) {
        .card-bundle {
            width: 100%;
            padding: 14px 7px;

            .card-bundle_btn {
                span {
                    display: none;
                }
                div {
                    display: none;
                }
            }

            .card-bundle_flex-img-text {
                width: 220px;
            }
        }
    }

    .card-bundle {
        margin-bottom: 20px;
        .card-bundle_title {
            /* font-family: 'SS Nickson Six'; */
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 18px;
            color: #3F3C38;
            margin-bottom: 10px;
        }

        .card-bundle_flex {
            display: flex;
            justify-content: space-between;
            padding: 20px 15px 20px 12px;
            background-color: #E5D1B3;
        }

        .card-bundle_flex-img-text {
            display: flex;
            gap: 15px;
            align-items: center;
        }

        .card-bundle_flex_text {
            width: 236px;
            b {
                /* font-family: 'Pluto'; */
                font-style: normal;
                font-weight: 800;
                font-size: 14px;
                line-height: 13px;
                color: #3F3C38;
            }
            p {
                /* font-family: 'Pluto'; */
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 15px;
                color: #3F3C38;
                margin-top: 6px;
            }
        }

        .card-bundle_btn {
            padding: 15px 8px;
            max-width: 106px;

            font-family: 'Antonio', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;

            line-height: 18px;
            text-align: center;
            color: #FFFFFF;
            background-color: #953300;
            border: none;
            text-transform: uppercase;
            cursor: pointer;
        }

        .card_add-btn {
            padding: 11px 15px;
            display: flex;
            gap: 5px;
            align-items: center;
            max-width: 138px;

            div {
                height: 15px;
                width: 2px;
                background-color: white;
            }
        }

    }
`