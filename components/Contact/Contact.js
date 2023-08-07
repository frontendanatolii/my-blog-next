import { useEffect, useRef, useState } from 'react';
import Notification from '../ui/Notification';
import classes from './Contact.module.css';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
}

export const ContactForm = () => {
  const emailInput = useRef();
  const nameInput = useRef();
  const messageInput = useRef();
  const [requestStatus, setRequestStatus] = useState();

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: emailInput.current.value,
        name: nameInput.current.value,
        message: messageInput.current.value,
      })

      setRequestStatus('success');
    } catch {
      setRequestStatus('error');
    }

    emailInput.current.value = '';
    nameInput.current.value = '';
    messageInput.current.value = '';


  };

  let notificationData;

  if (requestStatus === 'pending') {
    notificationData = {
      title: 'Trying to send a message',
      message: 'Please, wait a minute',
      status: 'pending',
    }
  }

  if (requestStatus === 'success') {
    notificationData = {
      title: 'Successfully send a message',
      message: 'I will text you soon',
      status: 'success',
    }
  }
  
  if (requestStatus === 'error') {
    notificationData = {
      title: 'Error',
      message: 'Please, check your internet connection and try again',
      status: 'error',
    }
  }

  useEffect(() => {
    if (requestStatus !== 'pending') {
      const timer = setTimeout(() => {setRequestStatus(null)}, 3000);

      return () => {
        clearTimeout(timer);
      }
    }
  }, [notificationData])

  return (
    <section className={classes.contact}>
      <h1>
        How can I help you?
      </h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input id="email" type="email" required ref={emailInput} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input id="name" type="text" required ref={nameInput} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your message</label>
          <textarea id='message' rows="5" ref={messageInput}></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
      {notificationData
        ? <Notification status={notificationData.status} title={notificationData.title} message={notificationData.message} />
        : null
      }
    </section>
  )
}