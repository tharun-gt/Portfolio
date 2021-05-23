
import React from 'react'
import {SkillsCard,
    SkillsContainer,
   SkillsH1,
    SkillsH2,
   SkillsIcon,
   SkillsP,
   SkillsWrapper,
   A,Broader
   } from './SkillsElements'
   import icon1 from '../../images/project1.png'
   import icon2 from '../../images/project2.png'
   import icon3 from '../../images/project3.png'
   import icon4 from '../../images/project4.png'

  
   

const SKills = () => {
    return (
        <SkillsContainer id="projects">
            <SkillsH1>Design Project</SkillsH1>
            <Broader/>
            <SkillsWrapper>
                <SkillsCard>
                <SkillsIcon src={icon1}/>
                <SkillsH2>Tour App Design</SkillsH2>
                <SkillsP> </SkillsP>
                
                <A href='https://www.behance.net/gallery/114648105/Tour-package-Booking-Concept-App'>View Project</A>
                </SkillsCard>
                <SkillsCard>
                <SkillsIcon src={icon2}/>
                <SkillsH2>Web Music Design</SkillsH2>
                <SkillsP></SkillsP>
                
                <A href='https://www.behance.net/gallery/115332967/Web-Music-player'>View Project</A>
                </SkillsCard>
                <SkillsCard>
                <SkillsIcon src={icon3}/>
                <SkillsH2>Food Delivery Design</SkillsH2>
                <SkillsP></SkillsP>
                
                <A href='https://www.behance.net/gallery/115479139/Food-Delivery-App-UIUX-Design'>View Project</A>
                </SkillsCard>
                <SkillsCard>
                <SkillsIcon src={icon4}/>
                <SkillsH2>Courses-Administrator Design</SkillsH2>
                <SkillsP></SkillsP>
                
                <A href='https://www.behance.net/gallery/118680345/Courses-Administrator-Dashboard'>View Project</A>
                </SkillsCard>
                
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default SKills
