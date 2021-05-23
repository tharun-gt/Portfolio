import styled from 'styled-components'
import {HiChevronDown,HiDownload} from 'react-icons/hi'


export const HeroContainer=styled.div`
background:#f9f9f9;
display:flex;
justify-content:center;
align-items:center;
padding:0 30px;
height: 860px;
position: relative;
z-index:1;
`

export const HeroBg = styled.div`
position: absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`
export const ImgBg = styled.div`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34;

`

export const HeroContent = styled.div`
z-index:3;
max-width:1200px;
position: absolute;
padding:8px 24px;
display:flex;
flex-direction:column;
align-items:center;
margin-bottom: 75px;
`
export const HeroH1 = styled.h1`
color:#000;
font-size:48px;
text-align:center;

@media screen and (max-width:760px){
    font-size:40px;
}
@media screen and (max-width:480px){
    font-size:32px;
}
`
export const Herop = styled.h3`
margin-top:24px;
color:#000;
font-size:24px;
text-align:center;
max-width:600px;

@media screen and (max-width:760px){
    font-size:24px;
}
@media screen and (max-width:480px){
    font-size:18px;
}
`
export const Move = styled.span`
margin-top:24px;
color:#01Bf71;
font-size:24px;
text-align:center;
max-width:600px;

@media screen and (max-width:760px){
    font-size:24px;
}
@media screen and (max-width:480px){
    font-size:18px;
}
`
export const HeroBtnWrapper =styled.div`
margin-top:32px;
display:flex;
flex-direction:column;
align-items:center;
`
export const Download = styled(HiDownload)`
margin-left:8px;
font-size:20px;

`
export const ChevronDown= styled(HiChevronDown)`
margin-left:8px;
font-size:20px;

`
export const Button=styled.a`
border-radius:50px;
background:${({primary})=>(primary ? '#000':'#010606')};
white-space:nowrap;
padding:12px 25px;
color:${({dark})=>(dark?'#010606':'#fff')};
font-size:${({fontBig})=>(fontBig?'20px':'16px')};
outline:none;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
transition:all 0.2s ease-in-out;
text-decoration:none;



&:hover{
    transition:all 0.2s ease-in-out;
    background:${({primary})=>(primary ? '#fff':'#01Bf71')};
}
`
