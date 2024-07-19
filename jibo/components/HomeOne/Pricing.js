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
            <h2 style={{ color: '#FF8000' }}>FESS Cake & Bakery</h2>
            <p className="mt-4 justify-content-center" style={{ color: '#ea6b2e' }}> 
              Di FESS Cake & Bakery, Kami menyajikan berbagai kue dan roti lezat
              dengan kualitas premium, serta harga yang sangat terjangkau,
              Karena kami percaya kelezatan sejati tidak harus menguras kantong anda!
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
                  <h3 style={{ color: '#FF8000' }}>Ukuran Kecil</h3>
                  <h4 className="price-value">
                    <sup className="text-bottom">Rp</sup> &nbsp;
                    <span className="text-large">10.000</span> &nbsp;
                  </h4>
                </div>

                <div className="d-flex mt-4">
                  <div className="col-md-4">
                    <Image
                      src="/images/pricing/cookies.png"
                      alt="Faq Image"
                      className="rounded-5"
                      width={200}
                      height={500}
                    />
                    <li>Cookies</li>
                  </div>

                  <div className="col-md-4">
                    <Image
                      src="/images/pricing/croissantt.jpg"
                      alt="Faq Image"
                      className="rounded-5"
                      width={200}
                      height={500}
                    />
                    <li>croissant</li>
                  </div>

                  <div className="col-md-4">
                    <Image
                      src="/images/pricing/muffin.jpg"
                      alt="Faq Image"
                      className="rounded-5"
                      width={200}
                      height={400}
                    />
                    <li>Muffin</li>
                  </div>
                </div>

                  <div className="d-flex">
                  <div className="col-md-4">
                    <Image
                      src="/images/pricing/Briochebuns.jpg"
                      alt="Faq Image"
                      className="rounded-5"
                      width={200}
                      height={1083}
                    />
                    <li>Brioche Buns</li>
                  </div>

                  <div className="col-md-4">
                    <Image
                      src="/images/pricing/Cupcakes.jpg"
                      alt="Faq Image"
                      className="rounded-5"
                      width={200}
                      height={1200}
                    />
                    <li>Cupcakes</li>
                  </div>

                  <div className="col-md-4">
                    <Image
                      src="/images/pricing/Minicheesecake.jpg"
                      alt="Faq Image"
                      width={200}
                      className="rounded-5"
                      height={1083}
                    />
                    <li>Mini Cheesecake</li>
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
                  <div classname="gradient-color">
                  <h3 >Ukuran Menengah</h3>
                  <h4 className="price-value">
                    <sup className="text-bottom">Rp</sup>&nbsp;
                    <span className="text-large">25.000</span>&nbsp;
                  </h4>
                  </div>
                </div>

                <div className="d-flex mt-4">
                <div className="col-md-4">
                  <Image
                    src="/images/pricing/rotigandum.jpg"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>Roti gandum</li>
                  </div>

                  <div className="col-md-4">
                  <Image
                    src="/images/pricing/danishpastry.jpg"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>Danish Pastry</li>
                  </div>

                  <div className="col-md-4">
                  <Image
                    src="/images/pricing/tartitalian.jpg"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>Tart italian</li>
                  </div>
                  </div>

                  <div className="d-flex">
                  <div className="col-md-4">
                  <Image
                    src="/images/pricing/Cheesecakeplain.jpg"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>Cheesecake plain</li>
                  </div>

                  <div className="col-md-4">
                  <Image
                    src="/images/pricing/lapislegit.jpg"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>Lapis legit</li>
                  </div>

                  <div className="col-md-4">
                  <Image
                    src="/images/pricing/Baguette.jpg"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={300}
                  />
                  <li>Roti Baguette</li>
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
                  <h3 style={{ color: '#FF8000' }}>Ukuran Besar</h3>
                  <h4 className="price-value">
                    <sup>Rp</sup> &nbsp;
                    <span className="text-large">50.000</span>
                  </h4>
                </div>

                <div className="d-flex mt-4">
                <div className="col-md-4">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                  <li>Roti Ciabatta</li>
                  </div>

                  <div className="col-md-4">
                  <Image
                    src="/images/pricing/tartmousse.jpg"
                    alt="Faq Image"
                    className="rounded-5"

                    width={200}
                    height={1083}
                  />
                  <li>Tart mousse</li>
                  </div>

                  <div className="col-md-4">
                  <Image
                    src="/images/pricing/natalcake.jpg"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>Christmas Cake</li>
                  </div>
                  </div>

                  <div className="d-flex">
                  <div className="col-md-4">
                  <Image
                    src="/images/pricing/kuehias.jpg"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>Kue Hias (seperti cake topper tema, kue berbentuk khusus)</li>
                  </div>

                  <div className="col-md-4">
                  <Image
                    src="/images/pricing/kueultah.jpg"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>Kue Ulang Tahun (dengan berbagai tema dan dekorasi)</li>
                  </div>

                  <div className="col-md-4">
                  <Image
                    src="/images/pricing/donatbox.jpg"
                    alt="Faq Image"
                    className="rounded-5"
                    width={200}
                    height={1083}
                  />
                  <li>Donut Box</li>
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
        </div>
      </section>
    </>
  );
};

export default Pricing;
