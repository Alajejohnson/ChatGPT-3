import React from 'react'
import './blog.css'
import Explore from '../../component/explore/Explore'
import { blog01, blog02 , blog03, blog04, blog05 } from '../../assets'

const Blog = () => {
  return (
    <div className="Blog section__padding " id='openAi'>
      <div className="blog__header text__headings">
        <h5>A lot is happening, 
We are blogging about it.</h5>
      </div>
    <div className="blog__content spacing__M">
    <div className="blog__left">
      <Explore image={(blog01)} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' subtitle='Read Full Article' />
      </div>
      <div className="blog__right">
        <div>
        <Explore image={(blog02)} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' subtitle='Read Full Article' />
        <Explore image={(blog03)} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' subtitle='Read Full Article' /> 
        </div>
        <div className='' >
        <Explore image={(blog04)} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' subtitle='Read Full Article' />
        <Explore image={(blog05)} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' subtitle='Read Full Article' /> 
         </div>
      </div>
    </div>
        
    </div>
  )
}

export default Blog