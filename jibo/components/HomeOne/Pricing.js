import React from "react";
import Link from "next/link";
import Image from "next/image";

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="pricing-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 style={{ color: "#c19a6b" }}>FESS Cake & Bakery</h2>
            <p
              className="mt-4 justify-content-center"
              style={{ color: "#c19a6b" }}
            >
              Di FESS Cake & Bakery, Kami menyajikan berbagai kue dan roti lezat
              dengan kualitas premium, serta harga yang sangat terjangkau,
              Karena kami percaya kelezatan sejati tidak harus menguras kantong
              anda!
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-12 ">
              <div
                className="single-price-package"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="price-header">
                  <h3 style={{ color: "#c19a6b" }}>Menu</h3>
                  <h4 className="price-value">
                    <span className="h3">MAKANAN RINGAN</span> &nbsp;
                  </h4>
                </div>

                <div className="d-flex mt-4">
                  <div className="col-md-4">
                    <Image
                      src="/images/pricing/cpcs.png"
                      alt="Faq Image"
                      className="rounded-5"
                      width={200}
                      height={500}
                    />
                    <li>cookies</li>
                  </div>

                  <div className="col-md-4">
                    <Image
                      src="/images/pricing/brwnies.png"
                      alt="Faq Image"
                      className="rounded-5"
                      width={200}
                      height={500}
                    />
                    <li>brownies</li>
                  </div>

                  <div className="col-md-4">
                    <Image
                      src="/images/pricing/mffin.png"
                      alt="Faq Image"
                      className="rounded-5"
                      width={200}
                      height={400}
                    />
                    <li>muffin</li>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="col-md-4">
                    <Image
                      src="/images/pricing/croisant.png"
                      alt="Faq Image"
                      className="rounded-5"
                      width={200}
                      height={1083}
                    />
                    <li>croisant</li>
                  </div>

                  <div className="col-md-4">
                    <Image
                      src="/images/pricing/cupcik.png"
                      alt="Faq Image"
                      className="rounded-5"
                      width={200}
                      height={1200}
                    />
                    <li>cupcakes</li>
                  </div>

                  <div className="col-md-4">
                    <Image
                      src="/images/pricing/crmbln.png"
                      alt="Faq Image"
                      width={200}
                      className="rounded-5"
                      height={1083}
                    />
                    <li>cromboloni</li>
                  </div>
                  {/* <Image
                    src="/images/pricing/macaron.jpg"
                    alt="Faq Image"
                    width={957}
                    height={1083}
                  />
                  <li>Macaron</li> */}
                </div>

                <div className="btn button">
                  <Link href="#" className="purchase-btn">
                    Checkout
                  </Link>
                </div>
                <br></br>
              </div>
            </div>

            <div className="col-md-12 ">
              <div
                className="single-price-package"
                // data-aos="fade-in"
                // data-aos-duration="800"
                // data-aos-delay="200"
              >
                <div className="price-header">
                  <h3 style={{ color: "#c19a6b" }}>MENU</h3>
                  <h4 className="price-value">
                    <span className="h3">CAKE</span>&nbsp;
                  </h4>
                </div>
              </div>

              <div className="d-flex mt-4">
                <div className="col-md-4">
                  <Image
                    src="/images/pricing/berry.png"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>berry</li>
                </div>

                <div className="col-md-4">
                  <Image
                    src="/images/pricing/vanilla.png"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>vanilla</li>
                </div>

                <div className="col-md-4">
                  <Image
                    src="/images/pricing/lotus.png"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>lotus</li>
                </div>
              </div>

              <div className="d-flex">
                <div className="col-md-4">
                  <Image
                    src="/images/pricing/tiramisu.png"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>tiramissu</li>
                </div>

                <div className="col-md-4">
                  <Image
                    src="/images/pricing/cake.png"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>redvelvet</li>
                </div>

                <div className="col-md-4">
                  <Image
                    src="/images/pricing/matchaa.png"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>matcha</li>
                </div>
              </div>

              <div className="btn button">
                <Link href="#" className="purchase-btn">
                  Checkout
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div
              className="single-price-package"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="price-header">
                <h3 style={{ color: "#c19a6b" }}>Menu</h3>
                <h4 className="price-value">
                  <span className="h3">KUE KERING</span>
                </h4>
              </div>

              <div className="d-flex mt-4">
                <div className="col-md-4">
                  <Image
                    src="/images/pricing/Capture.PNG"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>sagu keju</li>
                </div>

                <div className="col-md-4">
                  <Image
                    src="/images/pricing/lebaran1.png"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>nastar</li>
                </div>

                <div className="col-md-4">
                  <Image
                    src="/images/pricing/lebaran2.png"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>kastangel</li>
                </div>
              </div>

              <div className="d-flex">
                <div className="col-md-4">
                  <Image
                    src="/images/pricing/lbrn5.png"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>thumbprint</li>
                </div>

                <div className="col-md-4">
                  <Image
                    src="/images/pricing/kuecoklat.jpg"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>kue semprit</li>
                </div>

                <div className="col-md-4">
                  <Image
                    src="/images/pricing/Soes Kering Mini Isi Coklat.png"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>kue sus kering</li>
                </div>
              </div>

              <div className="btn button">
                <Link href="#" className="purchase-btn">
                  checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
