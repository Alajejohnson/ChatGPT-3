import React from 'react'
import './header.css'
import { useState } from 'react'

import{Hamburger, Logo, Xbar} from '../../assets'



const Header = () => {
  const [toggle, setToggle] = useState(false);


  return (
        <div className='header section__padding'>
        <div className="header__left">
        <div className="header__logo">
        <img src={Logo} alt="" />
        </div>
               <div className='header__links'>
            <a href="">Home</a>
            <a href="#whatGpt3">What is GPT3?</a>
            <a href="#openAi">OpenAI</a>
            <a href="#caseStudy">Case Studies</a>
            <a href="#library">Library</a>

        </div>
        </div>
        
        <div className="header__sign">
            <a href="">Sign In</a>
            <button>Sign Up</button>
        </div>
       


        {toggle ?  <img src={Xbar} className='but'  onClick={()=>setToggle(false)}></img>  : <img src={Hamburger} className='but' onClick={()=>setToggle(true)}></img> }

        {toggle &&  
          <div className='header__link'>
            <a href="">Home</a>
            <a href="">What is GPT3?</a>
            <a href="">OpenAI</a>
            <a href="">Case Studies</a>
            <a href="">Library</a>

            <div className="header__sign1">
            <a href="">Sign In</a>
            <button>Sign Up</button>
        </div>
          </div> 
          
          
          }

  
    </div>
  
    

  )
}

export default Header