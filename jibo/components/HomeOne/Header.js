import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import VisibilitySensor from "react-visibility-sensor";

const sliderData = [
  {
    heading: "Solusi Go Digital Untuk Nasabah institusi",
    text: "Layanan Perbankan saat ini bukan hanya Funding - Lending saja, akan tetapi perlu layanan solusi teknologi yang terintegrasi dengan Open Banking Technology.",
    image: "/images/mobiles.png",
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
              <div className="single-slider-item" style={{ backgroundColor : "#D9EDBF"}}>
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

                        <div className="col-md-6 ">
                          <div className="welcome-phone">
                            <img src={value.image} alt="" style={{height : "90%", width : "200%"}} />
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
