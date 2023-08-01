'use client'

import useContactForm from '../../hooks/useContactForm';
import styles from './contact.module.css'
import sendEmail from '../../lib/sendEmail';
import { Input, InputGroup,InputLeftElement,Icon } from '@chakra-ui/react'
import { PhoneIcon,EmailIcon, QuestionIcon} from '@chakra-ui/icons' 
import {useState} from 'react';
import { ChakraProvider, FormControl ,Textarea, Button} from '@chakra-ui/react'

const ContactForm = () => {

  const {values, handleChange} = useContactForm();
  const [responseMessage, setResponseMessage] = useState(
      {isSuccessful: false, message: ''});

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const req = await sendEmail(values.email, values.subject, values.message);
      if (req.status === 250) {
        setResponseMessage(
            {isSuccessful: true, message: 'Thank you for your message.'});
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: 'Oops something went wrong. Please try again.',
      });
    }
  };

  return (
    <ChakraProvider>
    <div  className={styles.container}>
      <h1>Contato</h1>
      <form onSubmit={handleSubmit} className={styles.contactForm}>          
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <EmailIcon color='gray.300' />
            </InputLeftElement>
            <Input type='email' id='email' value={values.email}
              onChange={handleChange}
               placeholder='Email' />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <QuestionIcon color='gray.300' />
            </InputLeftElement>
            <Input id='subject'
              value={values.subject}
              onChange={handleChange}
              type='text'
               placeholder='Assunto' />
          </InputGroup>
          </FormControl>
          <FormControl> 
          <Textarea placeholder='Mensagem' value={values.message}
              onChange={handleChange}
              id='message'
              rows={8}/> 
           </FormControl>
           <Button type='submit' value='Submit' colorScheme='blue'>Enviar</Button>        
      </form>
      </div>
    </ChakraProvider>
  );
};

export default ContactForm;