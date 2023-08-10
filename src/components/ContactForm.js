

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './ContactForm.css'

export default function ContactForm() {

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userMessage, setUserMessage] = useState('')

  const nameChangeHandler = (e) => {
    setUserName(e.target.value)
  }

  const emailChangeHandler = (e) => {
    setUserEmail(e.target.value)
  }

  const messageChangeHandler = (e) => {
    setUserMessage(e.target.value)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!e.target[0].value || !e.target[1].value || !e.target[2].value) {
      alert('Please enter a valid name, email address and message.')
      return
    }
    // emailjs.sendForm(
    //   'service_aqhtixu',
    //   'template_rknlaw7',
    //   form.current,
    //   'P1Gaj8G4O0kTvydw3')
    //   .then((result) => {
    //     console.log(result.text);
    //     console.log('message sent')
    //   }, (error) => {
    //     console.log(error.text);
    //   });
    setUserName('')
    setUserEmail('')
    setUserMessage('')
  };

  return (

    <form id='contact' className='contact-form' ref={form} onSubmit={sendEmail}>
      <h1>Let's Connect!</h1>
      <label>Name</label>
      <input
        onChange={nameChangeHandler}
        value={userName}
        type="text"
        name="user_name"
      />

      <label>Email</label>
      <input
        onChange={emailChangeHandler}
        value={userEmail}
        type="email"
        name="user_email"
      />

      <label>Message</label>
      <textarea
        onChange={messageChangeHandler}
        value={userMessage}
        name="message"
        rows="5"
      />

      <button type="submit">Send</button>
    </form>

  );
};