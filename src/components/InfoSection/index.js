import React from 'react'

import { Img,
    ImgWrap,
     InfoCantainer,
     InfoWrapper,
     InfoRow,Column1,
     Column2,TextWrapper,
     TopLine,Heading,
     Subtitle,BtnWarp,ChevronDown,Button } from './InfoElements'
    //  import image from '../../images/about.svg'

    
const InfoSection = ({img,lightbg,id,imgStart,Topline,lightText,darkText,Headline,description,buttonLabel,alt,Url}) => {
    
    return (
        <>
         <InfoCantainer lightbg={lightbg}id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                     <TextWrapper>
                         <TopLine>{Topline}</TopLine>
                         <Heading lightText={lightText}>{Headline}</Heading>
                         <Subtitle darkText={darkText}>{description}</Subtitle>
                          <BtnWarp>
                             <Button href={Url} >
                             {buttonLabel}<ChevronDown/>
                             </Button>                 
                         </BtnWarp> 
                     </TextWrapper>
                     </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}></Img>
                    </ImgWrap>
                    </Column2>
                 </InfoRow>
             </InfoWrapper>
             </InfoCantainer>   
        </>
    )
}

export default InfoSection
