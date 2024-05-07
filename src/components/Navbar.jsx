import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {colorWhite, colorSilver, colorBlack} from '../assets/styles/abstracts/variables'
import BurgerMenu from "./BurgerMenu";
import logo from "../assets/img/ev-logo.png"
import LanguageDropdown from "./navbar/languageDropdown";
import NavbarButton from "./navbar/navbarButton";
import SwitchButton from "./navbar/switchButton";

function Navbar({ isDarkMode, setIsDarkMode }) {
    const [clicked, setClicked] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(window.scrollY)

    function handleClick () {
        setClicked(!clicked)
    }
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setClicked(false)
        }
    }

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
    
      document.onclick = function (clickEvent) {
          if(clickEvent.target.tagName === 'A'){
            setClicked(false)
        }
      }
      useEffect(() => {
        window.addEventListener("resize", handleResize)
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })

    return (
        <NavContainer scrollPosition={scrollPosition}>
            <img src={logo} alt="logo" className="logo"/>
            <nav className={`links ${clicked ? 'active' : ''}`}>
                <NavbarButton link="#home">Home</NavbarButton>
                <NavbarButton link="#about">About me</NavbarButton>
                <NavbarButton link="#skills">Skills</NavbarButton>
                <NavbarButton link="#projects">Projects</NavbarButton>
                <NavbarButton link="#contact">Contact</NavbarButton>
            </nav>
            <div style={{display: 'flex', gap: 15, alignItems: 'center'}}>
                <LanguageDropdown/>
                <SwitchButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            </div>
            <div className="burger">
                <BurgerMenu clicked={clicked} handleClick={handleClick}/>
            </div>
            <BurgerBg className = {`initial ${clicked ?  'active' : ''}`}></BurgerBg>
        </NavContainer>
    )
}


export default Navbar

const NavContainer = styled.header`
    z-index: 10;
    position: fixed;
    width: 100%;
    padding: 0.4rem;
    ${({scrollPosition}) => (`background-color: ${scrollPosition === 0 ? 'transparent' : '#fff'}`)};
    ${({scrollPosition}) => (`border-bottom: ${scrollPosition === 0 ? '1px solid transparent' : `1px solid ${colorSilver}`}`)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.7s ease;
    .logo{
        width: 2rem;
        height: auto;
        border-radius: 10px;
    }

    .links{
        position: absolute;
        top: -700px;
        left: -1000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        z-index: 2;

        @media(min-width: 768px){
            position: initial;
            a{
                font-size: .7rem;
                display: inline;
            }
        }
    }
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-right: auto;
        margin-left: auto;
        top: 8vh;
        left: 0;
        right: 0;
        line-height: 12vh;

        a{
            font-size: 2rem;
            margin-top: 1rem;
            color: ${colorWhite};
        }
    }


    .burger{
        z-index: 2;
        @media(min-width: 768px){
            display: none;
        }
    }
`

const BurgerBg = styled.div `
    position: fixed;
    background-color: ${colorBlack};
    opacity: 0.7;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: 1;

    transition: all .6s ease;
    &.active{
        border-radius: 0 0 60% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    @media(min-width: 768px){
        display: none;
    }
`