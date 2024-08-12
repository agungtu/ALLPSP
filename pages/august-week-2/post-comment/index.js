import React from "react";
import Link from "next/link";
import Footer from "../../../components/Branch/Footer";
import BranchContent from "../../../components/Branch/BranchContent";

const branch = () => {
  return (
    <>
      <section className="top-banner-area">
        <div className="container">
          <div className="header">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <Link href="/" className="logo">
                  Post Comment
                </Link>
                <h2 className="banner-title">Post & comment page</h2>
              </div>

              <div className="col-6 text-end">
                <Link href="/blog/branch/" className="nav-text">
                  Post Comment
                </Link>
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Post Comment</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">post comment</div>
      </section>

      <Footer />
    </>
  );
};

export default branch;
