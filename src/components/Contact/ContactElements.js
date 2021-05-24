import styled from 'styled-components'

import {HiDownload} from 'react-icons/hi'
import{BsArrowRightShort} from 'react-icons/bs'

export const ContactCantainer=styled.div`
color:#fff;
background:#f9f9f9;

@media screen and (max-width:760px){
    padding:100px 0;
}
`

export const ContactWrapper =styled.div`
display:grid;
z-index:1;
height:800px;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0 24px;
justify-content:center;
`
export const ContactRow =styled.div`
display:grid;
grid-auto-columns:minmax(auto ,1fr);
align-items:center;
grid-template-areas: 'col1 col2';

@media screen and (max-width:760px){
    grid-template-areas:${({imgStart})=>(imgStart ? `'col1''col2'`:`'col1 col1' 'col2 col2'`)};
}
`
export const Column1 = styled.div`
margin-bottom:185px;
padding:0 15px;
grid-area:col1;
align-items: left;
@media screen and (max-width:760px){
    margin-bottom: 5px;
}
`
export const Column2 = styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col2;
`
export const TextWrapper=styled.div`
max-width:540px;
padding-top:0;
padding-bottom:60px;
justify-content:center;
`
export const TopLine=styled.p`
color:#01bf71;
font-size:16px;
line-height:16px;
font-weight:700;
letter-spacing:1.4px;
text-transform:uppercase;
margin-bottom:16px;
`
export const Heading=styled.h4`
margin-bottom:24px;
font-size:34px;
line-height:1.1;
font-weight:600;
color:${({lightText})=>(lightText?'#f7f8fa':'#010606')};

@media screen and (max-width:480px){
    font-size:32px;
}
`
export const Subtitle=styled.p`
max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
color:#000;
`
export const BtnWarp=styled.div`
display:flex;
justify-content:flex-start;

`
export const ImgWrap=styled.div`
max-width:555px;
height:100%;
`
export const Img =styled.img`
width:100%;
margin:0 0 10px 0;
padding-right:0;
`
export const ChevronDown= styled(BsArrowRightShort)`
margin-left:8px;
font-size:20px;

`
export const Download = styled(HiDownload)`
margin-left:8px;
font-size:20px;

`
export const Form=styled.form`
height: fit-content;
display: flex;
flex-direction: column;
justify-content: center;
max-width:540px;
padding-top:0;
padding-bottom:50px;
@media screen and (max-width:480px){
    margin-top: 0;
}

`
export const HeadH1=styled.h1`
margin-bottom: 30px;
color: #000;
`
export const Label=styled.label`
padding-bottom: 10px;
color: rgb(0,0,32);
font-weight: bold;
`
export const TextArea=styled.textarea`
  /* height: 150px; */
  max-width: 540px;
 max-height: 300px;
  padding: 20px;
  border-radius: 3px;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); */
  margin-bottom: 20px;
  border: 1px solid lightgray;
  /* border: none; */
  background: #fff;
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;
  &:focus{
    border: 1px solid rgb(0, 0, 196);
  }
`
export const Input=styled.input`
  padding: 20px;
  border-radius: 3px;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); */
  margin-bottom: 20px;
  border: 1px solid lightgray;
  /* border: none; */
  background: #fff;
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;
   &:focus{
    border: 1px solid rgb(0, 0, 196);
  }
`
export const Button=styled.button`
border-radius:50px;
background:#010606;
white-space:nowrap;
padding:12px 35px;
color:${({dark})=>(dark?'#010606':'#fff')};
font-size:16px;
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