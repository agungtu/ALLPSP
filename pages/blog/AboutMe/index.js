import React from "react";
import Link from "next/link";
import AboutMeContent from  "../../../components/AboutMe/AboutMeContent";
import Footer from "../../../components/Common/Footer";

const AboutMe = () => {
  return (
  <>
      <section
        className="top-banner-area"
      >
        <div className="container">
          <div className="header">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <Link href="/" className="logo">
                  Tentang Saya
                </Link>
                {/* <h2 className="banner-title">Page Branch</h2> */}
              </div>

              <div className="col-6 text-end">
                <Link href="/blog/About/" className="nav-text">
                  Tentang Saya
                </Link>
                <ol className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="active">Salwa</li>
              </ol>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-8">
              <h2 className="banner-title">Blog Details With Left Sidebar</h2>
            </div>
            <div className="col-lg-4">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="active">Blog Details Left Sidebar</li>
              </ol>
            </div>
          </div>*/}
        </div> 
      </section>

      <AboutMeContent/>

      <Footer/>

    
     </>
  );
};

export default AboutMe;
