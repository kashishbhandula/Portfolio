import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div className='contact-form'>
        <div className='w-left'>
            <div className='awesome'>
                <span>Get in touch</span>
                <span>Contact me</span>
                <div 
                    className='blur s-blur'
                    style={{background:"#Abf1FF94"}}>


                </div>
            </div>
        </div>
        <div className='c-right'>
            <form>
                <input 
                    type="text"
                    name='user_name'
                    className='user'
                    placeholder='Name'
                />
                <input 
                    type="email"
                    name='user_email'
                    className='user'
                    placeholder='Email'
                />
                <textarea
                    
                    name='message'
                    className='user'
                    placeholder='Message'
                />
                <input 
                    type="submit"
                    value='Send'
                    className='button'
                    
                />
            </form>

        </div>
    </div>
  )
}

export default Contact