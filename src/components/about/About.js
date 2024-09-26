import React from 'react'
import './About.css'
import { assets } from '../../assests/assest'


const About = () => {
  return (
    <>
    
<section className="about" id="about" style={{backgroundImage:`url(${assets.aboutbg})`}}>

<div className="content" data-aos="fade-right">
    <h3>About us</h3>
    <p>Hyk Capital, a boutique advisory firm, specializes in collaborating with Emerging & Mid-Corporates and NBFCs, 
        streamlining financial operations for enhanced profitability and goal achievement. Our tailored solutions include
         optimizing debt and equity capital raising in alignment with business objectives and cash flows.</p>
    <a href="#" className="btn">read more</a>
</div>

</section>
      
    </>
  )
}

export default About
