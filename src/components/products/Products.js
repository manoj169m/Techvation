import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { assets } from '../../assests/assest';
import './Products.css'



const Products = () => {
   
    SwiperCore.use([Autoplay]);

    return (
        <section className="products" id="products">
            <h1 className="heading">
            We would like to highlight
                <span><br />few of our following transactions for your reference:</span>
            </h1>

            <div className="swiper products-slider" data-aos="zoom-in">
                <Swiper
                    spaceBetween={20}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 9500,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        991: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide className="box">
                        <div className="image">
                            <img src={assets.productimg} alt="Investment Banking" />
                        </div>
                        <div className="content">
                            <h3>Investment Banking</h3>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="box">
                        <div className="icons"></div>
                        <div className="image">
                            <img src={assets.productimg} alt="Corporate Banking" />
                        </div>
                        <div className="content">
                            <h3>Corporate Banking</h3>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="box">
                        <div className="image">
                            <img src={assets.productimg} alt="Corporate Finance" />
                        </div>
                        <div className="content">
                            <h3>Corporate Finance</h3>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="box">
                        <div className="image">
                            <img src={assets.productimg} alt="Credit Rating" />
                        </div>
                        <div className="content">
                            <h3>Credit Rating</h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Products;
