import React from 'react'
import './hero.css'
import{Ai, People} from '../../assets'


const Hero = () => {
  return (
    <div className="hero  section__padding" >
      <div className="hero__content">
        <h1 className='text__headings'>Let’s Build Something
          amazing with GPT-3
          OpenAI</h1>
          <p className='spacing'>Yet bed any for travelling assistance indulgence unpleasing.  Not thoughts all exercise blessing. Indulgence way  everything joy alteration boisterous the attachment. Party  we years to order allow asked of.</p>

          <div className="hero__input spacing">
            <input type="email" name='email' placeholder='Your Email Address' /> 
            <button>Get Started</button>
          </div>

          <div className="hero__people spacing">
            <img src={People} alt="" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
      </div>
      <img src={Ai} alt="" />

     
    </div>
  )
}

export default Hero