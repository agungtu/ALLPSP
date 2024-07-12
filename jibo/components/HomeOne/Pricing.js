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
            <h2>FESS Cake & Bakery</h2>
            <h4>
            Di Fess Cake & Bakery, Kami Menyajikan Berbagai Kue dan Roti Lezat 
            dengan Kualitas Premium, Serta Harga yang Sangat Terjangkau,
            Karena Kami Percaya Kelezatan Sejati Tidak Harus Menguras Kantong Anda!
            </h4>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div
                className="single-price-package"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="price-header">
                  <h3 style={{color:'orange'}}>Small</h3>
                  <h4 className="price-value">
                    <sup className="text-bottom">Rp</sup>
                    <span className="text-large">10.000</span>
                    <span className="duration">START FROM</span>
                  </h4>
                </div>

                <ul className="price-list">
                  <Image
                  src="/images/pricing/cookies.png"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Cookies</li>
                  <Image
                  src="/images/pricing/croissantt.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>croissant</li>
                  <Image
                  src="/images/pricing/muffin.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                />
                  <li>Muffin</li>
                  <Image
                  src="/images/pricing/Briochebuns.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Brioche Buns</li>
                  <Image
                  src="/images/pricing/Cupcakes.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Cupcakes</li>
                  <Image
                  src="/images/pricing/Minicheesecake.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Mini Cheesecake</li>
                  <Image
                  src="/images/pricing/macaron.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Macaron</li>
                </ul>

                <div className="price-footer">
                  <Link href="#" className="purchase-btn">
                    Purchase
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="single-price-package"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="price-header">
                <h3 style={{color:'orange'}}>medium</h3>
                  <h4 className="price-value">
                    <sup className="text-bottom">Rp</sup>
                    <span className="text-large">25.000</span>
                    <span className="duration">START FROM</span>
                  </h4>
                </div>

                <ul className="price-list">
                <Image
                  src="/images/pricing/rotigandum.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Roti gandum</li>
                  <Image
                  src="/images/pricing/danishpastry.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Danish Pastry</li>
                  <Image
                  src="/images/pricing/tartitalian.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Tart italian</li>
                  <Image
                  src="/images/pricing/Cheesecakeplain.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Cheesecake plain</li>
                  <Image
                  src="/images/pricing/lapislegit.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Lapis legit</li>
          
                </ul>

                <div className="price-footer">
                  <Link href="#" className="purchase-btn">
                    Purchase
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="single-price-package"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <div className="price-header">
                <h3 style={{color:'orange'}}>large</h3>
                  <h4 className="price-value">
                    <sup>Rp</sup>
                    <span className="text-large">50.000</span>
                    <span className="duration">START FROM</span>
                  </h4>
                </div>

                <ul className="price-list">
                <Image
                  src="/images/pricing/roticiabatta.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Roti Ciabatta</li>
                  <Image
                  src="/images/pricing/tartmousse.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Tart mousse</li>
                  <Image
                  src="/images/pricing/chritsmascake.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Christmas Cake</li>
                  <Image
                  src="/images/pricing/kuehias.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Kue Hias (seperti cake topper tema, kue berbentuk khusus)</li>
                  <Image
                  src="/images/pricing/kueultah.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Kue Ulang Tahun (dengan berbagai tema dan dekorasi)</li>
                  <Image
                  src="/images/pricing/donutbox.jpg"
                  alt="Faq Image"
                  width={957}
                  height={1083}
                  />
                  <li>Donut Box</li>
                 
                </ul>

                <div className="price-footer">
                  <Link href="#" className="purchase-btn">
                    Purchase
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
