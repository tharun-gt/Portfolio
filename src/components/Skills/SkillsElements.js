
import styled from 'styled-components'


export const SkillsContainer=styled.div`
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
export const SkillsWrapper=styled.div`
max-width: 1000px;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr ;
align-items:center;
grid-gap:16px;
padding: 0 50px;
margin-bottom: 50px;

@media screen and (max-width:1000px){
    grid-template-columns:1fr 1fr ;
}
@media screen and (max-width:768px){
    grid-template-columns:1fr ;
    padding:0 20px;
}
`
export const SkillsCard = styled.div`
background:#fff;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:300px;
padding:50px;
box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
color:#000;

/* &:hover{
    transition:all 0.2s ease-in-out;
    transform:scale(1.02);
    cursor:pointer;
    background:#01bf71;
    color:#fff;
} */

`
export const SkillsIcon = styled.img`
height: 120px;
width:120px;
margin-bottom:10px;


`
export const SkillsH1=styled.h1`
font-size:2.5rem;
color:#000;
margin-bottom:10px;

@media screen and (max-width:480px){
    font-size:2rem;

}

`
export const SkillsH2=styled.h2`
font-size:1rem;
margin-bottom:10px;


`
export const SkillsP = styled.p`
font-size:1rem;
text-align:center;
margin-bottom:10px;
`

export const A=styled.a`
color: #fff;
padding:10px 10px;
font-size: 14px;
background-color:#000 ;
border-radius: 50px;
font-weight: bold;
display:flex;
justify-content:center;
align-items:center;
transition:all 0.2s ease-in-out;
text-decoration:none;
outline:none;
border:none;
white-space:nowrap;
&:hover{
    transition:all 0.2s ease-in-out;
    background:#01bf71;
}
`
export const Broader=styled.div`
background: #01bf71;
  height: 5px;
  width: 200px;
  margin: 30px auto;
  /* margin-bottom:50px; */
  
  /* border-radius:50%; */
`