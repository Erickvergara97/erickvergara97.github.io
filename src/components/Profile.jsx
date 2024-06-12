import React from "react";
import styled from 'styled-components'
import profilePic from '../assets/img/profilePic.jpeg'

function Profile() {
    return (
        <AboutMe id="about">
            <div className="cardContainer">
                <div className="aboutContainer">
                    <h2>The Story Behind My Career</h2>
                    <p>
                    One day, as my professional internship was coming to an end, I was handed an exciting task: 
                    editing the company's SharePoint. Given my passion for coding and algorithms, I eagerly accepted 
                    the challenge. That moment marked a turning point. After completing my internship, I relocated to a 
                    new city, ready to start a new chapter of my life. It was there that I met a senior developer who became 
                    my mentor, teaching me the fundamentals that have shaped my career.
                    </p>

                    <p>
                    Hello! My name is Erick Vergara, and I am a frontend developer specializing in React. I hope this 
                    brief introduction gives you a glimpse into the person behind this resume.
                    </p>

                    {/* <span>"Fake it till you make it"</span> */}

                    <a href="https://docs.google.com/presentation/d/1Ic23Vg8gmHru4E4j8yrahbeolfO8LFDK/edit#slide=id.p1" target="_blank" rel="noreferrer">
                        <button className="button primaryBtn">
                            Download CV
                        </button>
                    </a>
                </div>
                
                <img src={profilePic} alt="profile" className="profilePic"/>
            </div>
        </AboutMe>
    )
}


export default Profile

const AboutMe = styled.section `
    color: ${({ theme }) => theme.primary };
    padding-bottom: 14rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .cardContainer{
        background-color: ${({ theme }) => theme.cards};
        border-radius: 10px;
        margin: 2rem;
        width: 80%;
        display: flex;
        flex-direction: row;
        height: 500px;

    }

    .aboutContainer{
        padding: 10px;
        line-height: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: fit-content;
        h2{
            margin-bottom: 2rem;
            @media(min-width: 768px){
                font-size: 32px;
            }
        }
    }

    .imageContainer{
        width: 40%;
    }

    .profilePic{
        height: 100%;
        border-radius: 0px 10px 10px 0px;
    }

    @media(min-width: 768px){
        align-items: center;
    }
`