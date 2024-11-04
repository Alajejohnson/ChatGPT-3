import React from 'react'
import './logo.css'
import{Atlassian, Dropbox, Google, Shopify, Slack} from '../../assets'
const Logo = () => {
  return (
    <div className="logo section__padding">
      <div className="companies__logo">
      <img src={Google} alt="" />
    <img src={Slack} alt="" />
    <img src={Atlassian} alt="" />
    <img src={Dropbox} alt="" />
    <img src={Shopify} alt="" />

      </div>
    
  </div>
  )
}

export default Logo