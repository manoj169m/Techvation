import React from 'react'
import { assets } from '../../assests/assest'
import './Blogs.css'

const Blogs = () => {
  return (
    <>
    
<br/><br/><br/><br/>
<section className="blogs" id="blogs">
<br/>
    <h1 className="headings"> our <span>Cumulative Strike Rate </span> </h1>
<br/><br/><br/>
    <div className="box-container">

        <div className="box" data-aos="fade-right">
            <div className="image">
                <img src={assets.per95} alt=""/>
                
            </div>
            <div className="content">
                <h3>We have a cumulative strike rate of more than 95%</h3>
                <p>We have achieved a cumulative strike rate exceeding 95%.</p>
               
                
            </div>
        </div>

        <div className="box" data-aos="fade-down">
            <div className="image">
                <img src={assets.per100} alt=""/>
            </div>
            <div className="content">
                <h3>we have successfully closed 100% </h3>
                <p>of our debt mandates we have signed so far.</p>
            </div>
        </div>


    </div>
<br/><br/><br/><br/>
</section>
      
    </>
  )
}

export default Blogs
