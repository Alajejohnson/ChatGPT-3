import React from 'react'
import './footer.css'
import { Logo } from '../../assets'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <div className="Footer section__padding">
        <div className="upper__footer">
            <div className="upper__footer__left">
                <img src={Logo} alt="" />
                <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            </div>
            <div className="upper__footer__right">
                <div className="upper__footer__col">
                    <h5>Links</h5>
                    <ul>
                        <li>Overons</li>
                        <li>Social Media</li>
                        <li>Counters</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="upper__footer__col">
                    <h5>Company</h5>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="upper__footer__col">
                    <h5>Get in touch</h5>
                    <ul>
                        <li>Crechterwoord K12 182 DK Alknjkcb</li>
                        <li>085-132567</li>
                        <li>info@payme.net</li>
                    </ul>
                </div>

            </div>
        </div>

            <footer>
        <h5> &copy; {year}  GPT-3. All rights reserved.</h5>
        </footer>

    </div>

  )
}

export default Footer