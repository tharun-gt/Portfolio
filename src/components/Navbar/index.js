import React,{useEffect,useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,
    NavbarContainer,
    NavLogo,MobileIcon,
    Navmenu,NavLink,
    NavItem} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll'
 

const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav]= useState(false)
    const changeNav=()=>{
        if(window.scrollY>=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    };
    useEffect(()=>{
        window.addEventListener('scroll', changeNav);
    },[]);
    const toggleHome=()=>{
        scroll.scrollToTop();
    }

    return (
        <>
          <Nav scrollNav={scrollNav} >
              <NavbarContainer>
                  <NavLogo to='/' onClick={toggleHome}>
                      Tharun G Kumar
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <Navmenu>
                      <NavItem>
                          <NavLink to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Project</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLink>
                      </NavItem>
                  </Navmenu>
                  
              </NavbarContainer>
         </Nav>   
        </>
    )
}

export default Navbar
