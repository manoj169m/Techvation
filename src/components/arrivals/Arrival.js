import React from 'react'
import { assets } from '../../assests/assest'
import './Arrival.css'

const Arrival = () => {
  return (
    <>
        <br/><br/><br/><br/>
<section className="arrivals" id="arrivals">

    <h1 className="heading"> We would like to highlight<span> <br/>few of our following transactions for your reference:</span>  </h1>
<br/><br/><br/>
    <div className="box-container">

        <div className="box" data-aos="fade-right">

            <div className="image">
                <img src={assets.ref3} alt=""/>
            </div>
           
        </div>

        <div className="box" data-aos="fade-down">
           
            <div className="image">
                <img src={assets.ref2} alt=""/>
            </div>
           
        </div>

        <div className="box" data-aos="fade-left">
            
            <div className="image">
                <img src={assets.ref1} alt=""/>
            </div>
        </div>

    </div>

</section>
      


    </>
  )
}

export default Arrival
