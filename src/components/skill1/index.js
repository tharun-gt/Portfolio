import React from 'react'
import { FaAndroid, FaCamera,  } from 'react-icons/fa'
import { GoCode  } from 'react-icons/go'
import { MdDonutLarge } from 'react-icons/md'
import {AiOutlineAntDesign} from 'react-icons/ai'

import {ServicesCard,
         ServicesContainer,
        ServicesH1,
         ServicesH2,
        ServicesIcon,
        ServicesP,
        ServicesWrapper,Broader} from './ServicesElements'

const Skill1 = () => {
    
    return (
        <ServicesContainer id="skills">
            <ServicesH1>Skills</ServicesH1>
<ServicesH2>What I like Doing and list of skills, Tools</ServicesH2>
<Broader/>
<ServicesWrapper>
    <ServicesCard>
    <ServicesIcon><MdDonutLarge/></ServicesIcon>
        <ServicesH2> UI/UX Designer</ServicesH2>
        <ServicesP>Prototyping, sketch, wireframing, motion design, Adobexd, Figma</ServicesP>
    </ServicesCard> 
    <ServicesCard>
        <ServicesIcon><GoCode/></ServicesIcon>
        <ServicesH2> Front-End Development</ServicesH2>
        <ServicesP>Html, css, Javascript, Reactjs, Bootstrap, twindcss</ServicesP>      
    </ServicesCard>
    <ServicesCard>
    <ServicesIcon><FaAndroid/></ServicesIcon>
        <ServicesH2>App Development</ServicesH2>
        <ServicesP>Java, Xml, Kotlin(basics), React Native(basics), firebase(database)</ServicesP>
    </ServicesCard>
    <ServicesCard>
    <ServicesIcon><AiOutlineAntDesign/></ServicesIcon>
        <ServicesH2>Designing</ServicesH2>
        <ServicesP>part of be UI designer, the design should be the first perfernce.
                   tools :Figma, AdobeXD, After effect, photoshop 
        </ServicesP>
    </ServicesCard>
    <ServicesCard>
    <ServicesIcon><FaCamera/></ServicesIcon>
        <ServicesH2>Photography</ServicesH2>
        <ServicesP>Photography is much like of a hobby i like doing. 
                   Tools for editing:Affer effects, photoshop </ServicesP>
    </ServicesCard>
    
    
</ServicesWrapper>
        </ServicesContainer>
    )
}

export default Skill1
