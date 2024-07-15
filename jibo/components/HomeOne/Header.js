import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import VisibilitySensor from "react-visibility-sensor";

const sliderData = [
  {
    
    
    heading: <span style={{ color: '#380f17', fontSize: '70px', fontFamily :"Pacifico"}}>Roti Segar, Senyum Lebar</span>,
    text: <span style={{color: '#380f17' , fontFamily :"Pacifico"}}>"Rasakan Aroma Kelezatan di FESS Bakery Temukan Pilihan Roti dan Kue Segar yang Menggugah Selera."</span>,
    image: "/images/logo.png",
    
  }
];


const Slider = () => {
  return (
    <>
      <Swiper
        id="home"
        navigation={true}
        modules={[Navigation]}
        className="homepage-slides"
      >
        {sliderData &&
          sliderData.map((value, i) => (
            <SwiperSlide key={i}>
              <div className="single-slider-item" style={{ backgroundColor : "#FFA27F"}}>
                <div className="slide-item-table">
                  <div className="slide-item-tablecell">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <VisibilitySensor>
                            {({ isVisible }) => (
                              <div className="slider-text">
                                <h1
                                  className={
                                    isVisible
                                      ? "animated fadeInUp slow opacityOne"
                                      : ""
                                  }
                                >
                                  {value.heading}
                                </h1>

                                <p
                                  className={
                                    isVisible
                                      ? "animated fadeInUp slow opacityOne"
                                      : ""
                                  }
                                >
                                  {value.text}
                                </p>
                                
                                {/* <div className="slide-button">
                                  <a
                                    href="https://play.google.com/store/apps"
                                    target="_blank"
                                    className={`
                                        slide-btn-white mr-10 ${
                                          isVisible
                                            ? "animated fadeInDown slow opacityOne"
                                            : ""
                                        }
                                    `}
                                  >
                                    <i className="icofont-cloud-download"></i>
                                    Download
                                  </a>
                                  <a
                                    href="#"
                                    className={`
                                      slide-btn-bordered ${
                                        isVisible
                                          ? "animated fadeInDown slow opacityOne"
                                          : ""
                                      }
                                    `}
                                  >
                                    Learn More
                                  </a>
                                </div> */}
                              </div>
                            )}
                          </VisibilitySensor>
                        </div>

                        <div className="col-md-6">
                          <div className="welcome-phone">
                            <img src={value.image} alt="logo" style={{height : "200%", width : "400%"}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Slider;
