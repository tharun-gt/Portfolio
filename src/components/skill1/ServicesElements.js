import styled from 'styled-components'
// import { GoCode  } from 'react-icons/go'

export const ServicesContainer=styled.div`
height: 860px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#f9f9f9;

@media screen and (max-width:768px){
 height: 1400px;
}
@media screen and (max-width:480px){
    height: 1500px;
}
`
export const ServicesWrapper=styled.div`
max-width: 1000px;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr ;
align-items:center;
grid-gap:16px;
padding: 0 50px;
margin-bottom: 40px;


@media screen and (max-width:1000px){
    grid-template-columns:1fr 1fr ;
}
@media screen and (max-width:768px){
    grid-template-columns:1fr ;
    padding:0 20px;
}
`
export const ServicesCard = styled.div`
background:#fff;
display:flex;
flex-direction:column;
justify-content:flex-start;
/* align-items:center; */
border-radius:10px;
max-height:280px;
padding:50px;
box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;

&:hover{
 
    transition:all 0.2s ease-in-out;
    transform:scale(1.02);
    cursor:pointer;
    background:#01bf71;
    color:#fff;
}
`
export const ServicesIcon = styled.div`
font-size:30px;
margin-bottom:2px;
color:#000;

`
export const ServicesH1=styled.h1`
font-size:2.5rem;
color:#000;
margin-bottom:3px;

@media screen and (max-width:480px){
    font-size:2rem;
}
`
export const ServicesH2=styled.h2`
font-size:1rem;
margin-bottom:5px;
`
export const ServicesP = styled.p`
font-size:1rem;
/* text-align:center; */
`
export const Button=styled.a`
border-radius:50px;
background:${({primary})=>(primary ? '#000':'#010606')};
white-space:nowrap;
padding:12px 30px;
color:${({dark})=>(dark?'#010606':'#fff')};
font-size:${({fontBig})=>(fontBig?'20px':'16px')};
outline:none;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
transition:all 0.2s ease-in-out;
margin-top:10px;
&:hover{
    transition:all 0.2s ease-in-out;
    background:${({primary})=>(primary ? '#fff':'#01Bf71')};
}
`
export const Broader=styled.div`
background: #01bf71;
  height: 5px;
  width: 200px;
  margin: 30px auto;
  margin-bottom:50px;
  /* border-radius:50%; */
`
// export const GoCode=styled.i`
// background: #01bf71;
// `