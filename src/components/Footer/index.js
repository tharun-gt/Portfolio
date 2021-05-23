import React from 'react'
import {FaLinkedin,FaBehance, FaGithub} from 'react-icons/fa'
import {FooterContainer,FooterWrap,FooterLinkWrapper
,FooterLinkItems,FooterLinkContainer,FootLinkTitle,FooterH3,
SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,WebsiteRIght}from './FooterElements.js'
// import {GrMail} from 'react-icons/gr'
import {animateScroll as scroll} from 'react-scroll'
const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer >
            <FooterWrap>
            <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FootLinkTitle>
                                Contact Me
                            </FootLinkTitle>
                            <FooterH3>Gutamtharunkumar@gmail.com</FooterH3>
                            <FooterH3>7092289656</FooterH3> 
                            {/* <Button onClick={'//www.google.com'} >
                             <GrMail fontSize='24px'/>  Contact 
                            </Button> */}
                            </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Tharun G Kumar</SocialLogo>
                        <WebsiteRIght>Connect with me on:</WebsiteRIght>
                       
                    
                    <SocialIcons>
                    <SocialIconLink href="//www.linkedin.com/in/tharun-kumar-gk-a14678200" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                    <SocialIconLink href="https://www.behance.net/tharunkumar16" target="_blank" aria-label="Behance"><FaBehance/></SocialIconLink>
                    <SocialIconLink href="https://github.com/tharun-gt" target="_blank" aria-label="GitHub"><FaGithub/></SocialIconLink>
                   
                    {/* <SocialIconLink href="//www.instagram.com/__.tharun._/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                     <SocialIconLink href="//facebook.com/gutam.tharun" target="_blank" aria-label="facebook"><FaFacebook /></SocialIconLink> */}
                    </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
