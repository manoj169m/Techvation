import React from 'react'
import { assets } from '../../assests/assest'
import './Client.css'

const Client = () => {
  return (
    <>
    
<br/><br/><br/><br/>
<section className="abouts" id="client" style={{backgroundImage:`url(${assets.clientpng})`}}>

    <div className="content" data-aos="fade-right">
        <h3>Client OnBoarding</h3>
        <p>At Hyk Capital, we engage with clients after conducting thorough due diligence on their businesses and promoters. We guide our clients from the initial due diligence stage through to disbursement, and continue to support both the bank and the client throughout the entire loan tenure.</p>
       
    </div>

</section>
      
    </>
  )
}

export default Client
