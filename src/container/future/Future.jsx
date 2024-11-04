import React from 'react'
import './future.css'
import Info from '../../component/info/Info'

const future = () => {
  return (
   <div className="future section__padding " id='caseStudy' >
        <div className="future__today">
            <h5 className='text__headings'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h5>
            <p className='spacing'>Request Early Access to Get Started</p>
        </div>

        <div className="future__uses">
            <Info title='Improving end distrusts instantly ' subtitle='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.' />
            <Info title='Become the tended active' subtitle='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.' />
            <Info title='Message or am nothing' subtitle='Message or am nothing' />
            <Info title='Really boy law county' subtitle='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.' />
        </div>
   </div>
  )
}

export default future