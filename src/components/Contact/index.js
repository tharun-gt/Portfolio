import React from 'react'
// import { GrMail } from 'react-icons/gr'
import emailjs from 'emailjs-com';

import {ContactCantainer,ContactRow,
        Column1,ContactWrapper,TextWrapper
        ,TopLine,Heading,Subtitle,BtnWarp,Button,Column2,
         Form,Label,Input,TextArea,ImgWrap} from './ContactElements'
const Contact = () => {
     function sendEmail(e) {
            e.preventDefault();

            emailjs.sendForm('gmail', 'template_vf7plbz', e.target, 'user_CqNqcfqgm0DyL9NToFAQG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
        }
    return (
        <>
             <ContactCantainer id='contact' >
             <ContactWrapper>
                 <ContactRow >  
                    <Column1>
                     <TextWrapper>
                         <TopLine>Contact Me</TopLine>
                         <Heading >Can mail me, and i will get you back with-in a day</Heading>
                         <Subtitle>(Waiting for your Feedbacks and message)</Subtitle>
                          <BtnWarp>
                                             
                         </BtnWarp> 
                     </TextWrapper>
                     </Column1>
                     <Column2>
                     <ImgWrap>
                     <Form onSubmit={sendEmail}>
                         
                         <Label>Name</Label>
                         <Input placeholder="Name" name="name" type="text"/>
                         <Label>Email</Label>
                         <Input placeholder="Email" name="email" type="email"/>
                         <Label>Message</Label>
                         <TextArea placeholder="Message" name="message"></TextArea>
                         <Button type="submit">submit</Button>
                     </Form>
                     </ImgWrap>
                     </Column2>
               </ContactRow>
             </ContactWrapper>
             </ContactCantainer> 
        </>
    )
}

export default Contact
