import React from 'react'
import {Sidebarcontainer,
    CloseIcon,Icon,
    SidebarLink,
    
    SidebarWrapper,
    
    SidebarMenu} from './Sidebarelements'
const Sidebar = ({isOpen , toggle}) => {
    return (
        <Sidebarcontainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon >
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                     About
                    </SidebarLink>
                    <SidebarLink to="skills" onClick={toggle}>
                     Skills
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>
                     Projects
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                     Contact
                    </SidebarLink>
                </SidebarMenu>
               
            </SidebarWrapper>
        </Sidebarcontainer>
    )
}

export default Sidebar
