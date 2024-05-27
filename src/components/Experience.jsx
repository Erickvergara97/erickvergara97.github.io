import React from 'react'
import {ReactComponent as Globant} from "../assets/img/globant-logo.svg"
import {ReactComponent as Evalueserve} from "../assets/img/Evalueserve-logo.svg"
// import Monomeros from "../assets/img/monomeros.png"
// import MonomerosDark from "../assets/img/LOGO-BLANCO-MONOMEROS.png"
import styled from 'styled-components'
import ExperienceTimeline from './experience/ExperienceTimeline'

export default function Experience({isDarkMode}) {
  return (
    <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column nowrap'}}>
        {/* <ExperienceCard isDarkMode={isDarkMode}>
        <div style={{width: '24rem', height: 'auto', display:'flex', justifyContent: 'center'}}>
        <img src={isDarkMode ? MonomerosDark : Monomeros}  alt="" />
        </div>
        </ExperienceCard> */}
        <div style={{display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
          <ExperienceCard isDarkMode={isDarkMode}>
              <Globant width='24rem' fill={isDarkMode ? '#ffff' : ''}/>
          </ExperienceCard>
          <ExperienceCard isDarkMode={isDarkMode}>
              <Evalueserve width='24rem' fill={isDarkMode ? '#ffff' : '#4C4C4D'}/>
          </ExperienceCard>
        </div>
        <ExperienceTimeline/>
    </section>
  )
}

const ExperienceCard = styled.article`
    background-color: ${props => props.isDarkMode ? '':'white'};
    padding: 20px;
    border-radius: 10px;
    height: 150px;
    display: flex;
    justify-content: center;
`
