import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { data } from "../data/HeaderData"

import { ReactComponent as Logo } from "../Assets/logo.svg";
import { ReactComponent as AccountIcon } from "../Assets/account_ic.svg";
import { ReactComponent as SearchIcon } from "../Assets/search_ic.svg";
import { ReactComponent as CartIcon } from "../Assets/shop_ic.svg";
import miniBox from '../Assets/box-img.svg'
import {ReactComponent as MenuIc} from "../Assets/menu_ic.svg"
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [dropDownShop, setDropDownShop] = useState(false)
  const [dropDownAbout, setDropDownAbout] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  function dropDownFunc(index) {
    index === 0 ? setDropDownShop(true) : setDropDownShop(false)
      
    index === 2 ? setDropDownAbout(true) : setDropDownAbout(false)
  }

  function toggleMenu() {
    if (showMenu === false) {
      setShowMenu(true)
    }else {
      setShowMenu(false)
    }
    console.log(setShowMenu);
  }

  return (
    <Wrapper>
      <header>
        <MenuIc onClick={() => toggleMenu()} className="menu_ic"/>
        {showMenu ? <BurgerMenu /> : ""} 
        <Logo className="logo" />
        <nav>
          <ul>
            {data.navLinks.map((navLink, index) => (
              <>
                <li onMouseEnter={() => dropDownFunc(index)}> <a href="#">{navLink.title}</a> </li>
              </>
            ))}
          </ul>
        </nav> 
        <div className="nav_icons">
          <CartIcon />
          <SearchIcon className="search_ic" />
          <AccountIcon />
        </div>
      </header>

      {dropDownShop ? (
        <div className="hidden-shop" onMouseLeave={() => setDropDownShop(false)}>

          <div className="categories-top-container">  
          <div className="category-margin">
            <div className="category-top_title">
              <h2>Categories</h2>
              <p>Shop All</p>
            </div>

            <div className="categories-top-flex">
              {data.shopCategories.map(category => (
                <div className="category-top">
                  <img src={category.img} alt="" />
                  <p>{category.title}</p>
                </div>
              ))}
              <div className="line"></div>
              <div className="categories_bundle">
                <img src={miniBox} alt="" />
                <p>Use our bundle builder <br /> for a customized <br /> selection</p>
                <button>BUILD YOUR OWN BUDLE</button>
              </div>
            </div>
          </div> 
          </div>

          <div className="categories-bottom-container">
          <div className="category-margin">
            <div className="categories-bottom_title">
                <h2>Bestsellers</h2>
            </div>

            <div className="categories-bottom-flex">
              {data.shopBestsellers.map(bestseller => (
                <div className="category-bottom">
                  <img src={bestseller.img} alt="" />
                  <div className="category-bottom_price">
                    <p>{bestseller.title}</p>
                    <p>${bestseller.price}.00</p>
                  </div>
                </div>          
              ))}
              <div className="category-bottom_line"></div>
              <button className="category-bottom_btn">SHOP ALL</button>
            </div>
          </div>
          </div>
        </div>
      ) : ""}

      {dropDownAbout ? (
        <div onMouseLeave={() => setDropDownAbout(false)} className="hidden-about">
          <div className="about_card">
            <h3>OUR STORY</h3>
            <p>It's A Family Affair</p>
          </div>
          <div className="about_card">
            <h3>WHY HEIRLOOM</h3>
            <p>Our Not-So-Secret Ingredient</p>
          </div>
          <div className="about_card">
            <h3>PRESS</h3>
            <p>In The News</p>
          </div>
          <div className="about_card">
            <h3>BLOG</h3>
            <p>Block Founder Spotlights</p>
          </div>
        </div>
      ) : ""}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
position: fixed;
width: 100%;

.menu_ic {
  display: none;
}

@media (max-width: 990px) {
  .menu_ic {
    display: block;
  }

  .search_ic {
    display: none;
  }
  
  header {
    padding: 0 30px;
      nav {
        display: none;
      }
  }
}

@media (max-width: 400px) {
  .logo {
    width: 82px;
    height: 26px;
  }
  header {
    padding: 0 21px;
  }
}

header {
  background: #f6f3e2;
  height: 76px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
  padding: 0 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

    nav {
      ul {
        display: flex;
        align-items: center;
        gap: 20px;
        list-style: none;
        
        li {
          /* font-family: 'Pluto'; */
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          text-align: center;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          height: 77px;

          display: flex;
          align-items: center;
          justify-content: center;
          
          a {
            color: #1C1C1C;
            text-decoration: none;
          }
        }
      }
    }

    .nav_icons {
      display: flex;
      align-items: center;
      gap: 18px;
    }
  }

  .hidden-shop {
    user-select: none;
    .categories-top-container {
      padding: 30px;
      background-color:  #E5D1B3;
      margin: auto;
    }

    .category-margin {
      margin: auto;
      max-width: 1440px;
    } 

    .category-top_title {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;

      h2 {
        font-size: 26px;
        color: #953300;
      }
      p {
        font-size: 16px;
        color: #1c1c1c;
        cursor: pointer;
      }
    }

    .categories-top-flex {
      display: flex;
      gap: 5px;
      align-items: center;
      
      .category-top {
        width: 182px;
        height: 52px;
        margin: auto;

        display: flex;
        align-items: center;
        gap: 8px;
        border-radius: 5px;

        background-color: #f6f3e2;
        border: 1px solid transparent;
        transition: 0.5s;

        p {
          font-size: 16px;
          font-weight: 600;
        }
      }

      .category-top:hover {
        border: 1px solid #953300;
      }

      .line {
        height: 52px;
        width: 2px;
        background-color: #953300;
        margin: auto;
      }

      .categories_bundle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        border: 1px solid #953300;
        border-radius: 5px;
        img {
          width: 37px;
          height: 29px;
        }
        p {
          font-size: 11px;
        }
        button {
          font-family: 'Antonio', sans-serif;
          height: 48px;
          width: 99px;
          border: 3px solid #953300;
          background-color: #953300;
          border: none;
          color: white;
        }
      }
    }

    .categories-bottom-container {
      background-color: #f6f3e2;
      padding: 30px;
      margin: auto;

      .categories-bottom_title {
        color: #953300;
        font-size: 26px;
        margin-bottom: 15px;
      }

      .categories-bottom-flex {
        display: flex;
        align-items: center;
        gap: 5px;
        .category-bottom {
          width: 226px;
          height: 110px;
          margin: auto;

          display: flex;
          align-items: center;

          background-color: #e5d1b3;
          border-radius: 5px;
          padding: 15px;
          border: 1px solid transparent;
          transition: 0.5s;

          img {
            width: 67px;
            height: 100px;
            object-fit: cover;
          }
          .category-bottom_price {
            p {
              font-size: 12px;
              font-weight: 600;
            }
          }
        }     
        .category-bottom:hover {
          border: 1px solid #953300;
        }   

        .category-bottom_line {
          height: 110px;
          width: 2px;
          background-color: #953300;
          margin: auto;
        }

        .category-bottom_btn {
          font-family: 'Antonio', sans-serif;
          width: 75px;
          height: 110px;
          background-color: #953300;
          border-radius: 5px;
          border: none;
          color: white;
        }
      }
    }
  }

  .hidden-about {
    background-color: #E5D1B3;
    padding: 30px;

    display: flex;
    align-items: center;
    gap: 5px;
    
    .about_card {
      margin: auto;
      padding: 22px 10px;
      background-color: #f6f3e2;
      border-radius: 5px;
      width: 298px;
      height: 94px;
      border: 1px solid transparent;
      transition: 0.5s;
      user-select: none;
      h3 {
        font-size: 20px;
        font-weight: 700;
        color: #953300;
      }
      p {
        font-size: 14px;
      }
    }
    .about_card:hover {
      border: 1px solid #953300;
    }
  }
`;
