import React from "react";
import styled from 'styled-components'
import myPicture from '../assets/img/profile-picture.jpeg'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'


function Home() {
    return (
        <Me>
            <div className="introContainer">
                <h2>Erick Vergara</h2>
                <p>Frontend developer <span>|</span> Nice to meet you <span>!</span></p>
            </div>
            <img src={myPicture} alt="Profile-pic" />
        </Me>
    )
}


export default Home

const Me = styled.section `
    background-color: ${colorBone};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6rem;
    padding-bottom: 6rem;

    img{
        padding: 2rem;
        right: 0;
        height: auto;
        width: 20rem;
        border-radius: 700px;
    }

    h2{
        margin: 1rem;
        color: ${colorPurple};
        padding: .4rem;
    }
    p{
        margin: 1rem;
        color: ${colorBlack};
        span{
            color: ${colorPurple};
        }
    }

    @media(min-width: 768px){
        flex-direction: row;
        justify-content: center;

        img{
            width: 30rem;
        }
    }
`