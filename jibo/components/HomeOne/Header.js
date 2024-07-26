import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import VisibilitySensor from "react-visibility-sensor";

const sliderData = [
  {
    
    
    heading: "Roti Segar, Senyum Lebar",
    text: "FESS Bakery adalah surga bagi pecinta roti dan kue, menawarkan berbagai pilihan roti segar, kue tart, dan pastry yang dibuat dengan bahan berkualitas tinggi dan resep rahasia. Setiap produk dibuat dengan cinta dan perhatian terhadap detail, menghadirkan kelezatan yang memanjakan lidah. Dengan suasana toko yang hangat dan ramah, kami berkomitmen untuk memberikan pengalaman belanja yang menyenangkan dan memuaskan bagi setiap pelanggan",
    image: "/images/logo.png",
  },
];
const funFactsData = [
  {
    icon: "icofont-users",
    title: "Pelanggan",
    number: "2900",
    duration: "800",
    delay: "100",
  },
  {
    icon: "icofont-simple-smile",
    title: "Respon Positif",
    number: "2099",
    duration: "800",
    delay: "200",
  },
  {
    icon: "icofont-ui-rating",
    title: "Review",
    number: "1999",
    duration: "800",
    delay: "300",
  },
  {
    icon: "icofont-cloud-download",
    title: "Pengunjung",
    number: "7899",
    duration: "800",
    delay: "400",
  },
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
              <div
                className="single-slider-item"
              >
                <div className="slide-item-table">
                  <div className="slide-item-tablecell">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          <VisibilitySensor>
                            {({ isVisible }) => (
                              <div className="slider-text text-center">
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

                        <div className="col-md-12 ">
                          <div className="welcome-phone">
                            <center>
                              <img src={value.image} alt="" />
                            </center>
                          </div>
                          <div id="counter" className="row justify-content-center ">
                            {funFactsData &&
                              funFactsData.map((value, i) => (
                                <div className="col-sm-6 col-lg-3" key={i}>
                                  <div
                                    className="counter-box rounded-5"
                                    style={{ backgroundColor: "#FFB996" }}
                                    data-aos="fade-in"
                                    data-aos-duration={value.duration}
                                    data-aos-delay={value.delay}
                                  >
                                    {/* <i className={value.icon}></i> */}
                                    <h3 className="text-center" style={{color : "white"}}>{value.title}</h3>
                                    <h4 className="counter-number text-center">
                                      {value.number}
                                    </h4>
                                  </div>
                                </div>
                              ))}
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