import React,{useState} from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne} from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
 import SKills from '../components/Skills'
import Skill1 from '../components/skill1'



const Home = () => {
    const[isOpen,setiIsOpen] =useState(false)
    const toggle =()=>{
        setiIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
          
            <Skill1/>
            <SKills/>
            <Contact/>
           
            
           <Footer/>
        </>
    );
};

export default Home
