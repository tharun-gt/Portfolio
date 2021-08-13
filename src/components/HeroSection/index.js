import React,{useState,useEffect,useRef} from 'react'
import { init } from 'ityped'
import{ HeroContainer,
        HeroH1,HeroContent,
        HeroBtnWrapper,Herop,
        Download,ChevronDown,Button,Move} from './HeroElements'
import Resume from "../../Pdf/Tharun's-Resume"
// import { Button } from '../ButtonElements'


const HeroSection = () => {
    const [hover,setHover]=useState(false)
    const onHover =()=>{
        setHover(!hover)
    }
    const textref =useRef();
    useEffect(() => {
        init(textref.current, 
            { showCursor: false, 
                strings: ['UI/UX Designer', 'Front-end Developer'] })                
          }, [])
    return (

        
        <HeroContainer id={"Home"}>
           
            <HeroContent>
                <HeroH1>Tharun Kumar GK</HeroH1>
                {/* <Herop>UI/UX Designer and Front-end Developer</Herop> */}
               <Herop>I'm <Move ref={textref}></Move></Herop>
                <HeroBtnWrapper>
                    <Button href={Resume} download="Tharun-kumar_Resume" target="_blank" onMouseEnter={onHover} onMouseLeave={onHover} >
                        Resume {hover ? <Download/>:<ChevronDown/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
