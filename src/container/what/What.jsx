import React from 'react'
import './what.css'
import Info from '../../component/info/Info'

const What = () => {
  return (
    <div className="what  section__padding " id='whatGpt3'>
        <Info title='What is GPT-3' subtitle='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
        <div className="what__explore spacing">
            <h5 className='text__headings'>
            The possibilities are beyond  your imagination
            </h5>
            <p>Explore The Library</p>
        </div>
        <div className="what__uses  spacing">
            <Info title ='Chatbots' subtitle='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'/>
            <Info title ='Knowledgebase' subtitle='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As  put impossible own apartments b'/>
            <Info title ='Education' subtitle='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As  put impossible own apartments b'/>
        </div>
    </div>
  )
}

export default What