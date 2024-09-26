import React, {  useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Autoplay, EffectFade } from "swiper/modules"; 
import 'swiper/css';  
import 'swiper/css/navigation';  
import 'swiper/css/effect-fade'; 
import "./Home.css";  

const Home = () => {
  const sectionRefs = useRef([]);


  return (
    <>
     

      <section className="home" id="home" ref={(el) => (sectionRefs.current[0] = el)}>
        <Swiper
          spaceBetween={20}
          effect="fade"
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          centeredSlides={true}
          autoplay={{
            delay: 9500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, EffectFade]}  
          className="home-slider"
        >
          <SwiperSlide className="box" >
            <div className="content">
              <h3>Debt Optimisation</h3>
              <p>
                Maximize efficiency by restructuring debts in harmony with your cash flow and business objectives.<br/>
                Achieve financial goals seamlessly with our tailored debt optimization solutions.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="box" >
            <div className="content">
              <h3>Decision Dashboard</h3>
              <p>
                We specialize in streamlining and organizing financial processes, boosting profitability, and aligning with business goals.<br/>
                Our periodic dashboards empower corporates to assess performance and implement strategic corrections effectively.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="box" >
            <div className="content">
              <h3>Auditing</h3>
              <p>
                Ensure financial integrity with our meticulous auditing services. <br/>Trust our expertise to safeguard your assets and maintain compliance effortlessly.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="box" >
            <div className="content">
              <h3>Cloud CFO</h3>
              <p>
                Elevate your financial strategy with our Cloud CFO services. <br/>Harness the power of virtual expertise for agile, data-driven decision-making.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="box" >
            <div className="content">
              <h3>M&A</h3>
              <p>
                Elevate your business through strategic mergers and acquisitions.<br/> Unlock growth potential and maximize value with our expert advisory services.
              </p>
            </div>
          </SwiperSlide>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </section>
    </>
  );
};

export default Home;
