import React from "react";
import Link from "next/link";
import Footer from "../../../components/Branch/Footer";
import BranchContent from "../../../components/Branch/BranchContent";

const branch = () => {
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
                  Cabang
                </Link>
                <h2 className="banner-title">Page Branch</h2>
              </div>


              <div className="col-6 text-end">
                <Link href="/blog/branch/" className="nav-text">
                  Cabang
                </Link>
                <ol className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="active">Page Branch</li>
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

      <BranchContent />

      <Footer />
    </>
  );
};

export default branch;
