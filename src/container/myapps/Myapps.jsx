import React from 'react'
import './Myapps.css'
import { Possibility } from '../../assets'

const Myapps = () => {
  return (
    <div className="Myapps section__padding" id='library'>
        <div className="myapps__left">
            <img src={Possibility} alt="" />
        </div>
        <div className="myapps__right">
            <h5 className='s'>Request Early Access to Get Started</h5>
            <h2 className='text__headings spacing'>The possibilities are beyond your imagination</h2>
            <p className='spacing'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <h5 className='spacing'>Request Early Access to Get Started</h5>
        </div>
    </div>
  )
}

export default Myapps