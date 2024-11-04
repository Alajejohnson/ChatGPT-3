import React from 'react'
import './info.css'

const Info = ({title , subtitle}) => {
  return (
    <div className="info">
        <div className="info__title">
            <div/>
            <h5>{title}</h5>
        </div>
        <div className="info__subtitle">
            <p>{subtitle}</p>
        </div>
    </div>
  )
}

export default Info