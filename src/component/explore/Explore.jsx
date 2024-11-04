import React from 'react'
import './explore.css'

const Explore = ({image, date, title, subtitle}) => {
  return (
    <div className="Explore">

            <img src= {image} alt="" />

        <div className="explore__content">
        <div className="explore__date">
            <h5>{date}</h5>
        </div>
        <div className="explore__title">
            <h2>{title}</h2>
        </div>
        <div className="explore__subtitle spacing__M">
            <p>{subtitle}</p>
        </div>
        </div>

    </div>
  )
}

export default Explore