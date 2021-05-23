import styled from 'styled-components'
import {Link} from 'react-scroll'



export const FooterContainer=styled.footer`
background-color: #000;

`
export const FooterWrap=styled.div`
padding:48px 24px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;

`
export const FooterLinkContainer = styled.div`
display: flex;
justify-content:center;
@media screen and (max-width:820px){
    padding-top: 32px;
}
`
export const FooterLinkWrapper=styled.div`
display: flex;
@media screen and (max-width:820px){
    flex-direction: column;
}
`
export const FooterLinkItems=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
text-align:left;
width:160px;
box-sizing: border-box;
color:#fff;

@media screen and (max-width:420px){
    margin: 0;
    padding: 10px;
    width: 100%;
}
`
export const FootLinkTitle=styled.h1`
font-size:14px;
margin-bottom: 10px;
color: #01bf71;
`
export const FooterH3=styled.h3`
color:#fff;
text-decoration:none;
margin-bottom: 0.5rem;
font-size:14px;


    
    

`
export const SocialMedia = styled.section`
max-width: 1000px;
width:100%;
`
export const SocialMediaWrap=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin:40px auto 0 auto;
flex-direction: column;

@media screen and (max-width:820px){
    flex-direction: column;
}
`
export const SocialLogo = styled(Link)`
color: #01bf71;
justify-self:start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display:flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
`
export const WebsiteRIght=styled.small`
color:#fff;
margin-bottom: 16px;
`
export const SocialIconLink=styled.a`
color:#fff;
font-size: 24px;

&:hover{
color:#01bf71;
}
`
export const SocialIcons=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:240px;
`
// export const Facebook = styled(FaFacebook)`
// margin-left:8px;
// font-size:20px;

// `
// export const ChevronDown= styled(HiChevronDown)`
// margin-left:8px;
// font-size:20px;

// `
// export const Button=styled.button`
// border-radius:50px;
// background:#fff;
// white-space:nowrap;
// padding:12px 30px;
// color:#000;
// font-size:16px;
// outline:none;
// border:none;
// cursor:pointer;
// display:flex;
// justify-content:center;
// align-items:center;
// transition:all 0.2s ease-in-out;
// text-decoration: none;
// font-weight: bold;


// &:hover{
//     transition:all 0.2s ease-in-out;
//     background:${({primary})=>(primary ? '#fff':'#01Bf71')};
     
// }
// `