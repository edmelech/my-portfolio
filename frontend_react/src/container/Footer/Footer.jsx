import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setformData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setisFormSubmitted] = useState(false)
  const [loading, setloading] = useState(false)

  return (
    <>
      <h2 className='head-text'>Take a coffee and chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto: mike_jiro@hotmail.com' className='p-text'>info@goodhustledev.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +44 1234 567890' className='p-text'>+44 1234 567890</a>
        </div>
      </div>

      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name={name} value={name} onChange={handleChangeInput}/>
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your E-mail' name={email} value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name={message}
            onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'SENDING' : 'Send Message'}</button>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)