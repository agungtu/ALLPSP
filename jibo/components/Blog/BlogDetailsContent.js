import React from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";

const BlogDetailsContent = () => {
  return (
    <>
      <section id="blog" className="blog-details-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6  col-lg-9">
              {/* Sidebar */}
              {/* <Sidebar /> */}
            </div>

            <div className="col-md-6">
              <div className="single-blog-details">
                <h3 className="single-blog-title" style={{ color: "#8D493A" }}>
                  Promo
                </h3>
                <div className="single-post-admin">
                  {/* <h3>Promo FEES BAKERY  Juli 2024  </h3> */}
                </div>
                <div className="single-blog-img">
                  <Image
                    src="/images/blog/promo1.jpg"
                    alt="blog"
                    width={500}
                    height={300}
                  />
                  {/* <div className="single-blog-date">10 Feb, 2024</div> */}
                  <h3 style={{ color: "#8D493A" }}>
                    Promo Khusus Member (FEES Voucher): Harga Spesial Untuk
                    Baguette, Croissant, Pain Chocolat{" "}
                  </h3>
                </div>

                <div className="details-text-area">
                  <h4 style={{ color: "#c19a6b" }}>Ketentuan :</h4>

                  <ol style={{ color: "#c19a6b" }}>
                    <li>Promo berlaku mulai tanggal 1 hingga 31 Juli 2024..</li>
                    <li>
                      Produk yang sudah dibeli dengan harga diskon tidak dapat
                      dikembalikan atau ditukar.
                    </li>
                    <li>
                      Satu pelanggan hanya dapat menggunakan promo ini sekali
                      per transaksi.
                    </li>
                    <li>
                      Apabila ditemukan kecurangan dalam penggunaan promo, toko
                      berhak untuk membatalkan transaksi tersebut.
                    </li>
                    <li>
                      Diskon tidak dapat digabungkan dengan promo atau diskon
                      lainnya./
                    </li>
                  </ol>

                  <div className="single-post-admin"></div>
                  <div className="single-blog-img">
                    <Image
                      src="/images/blog/PROMO KE 2.svg"
                      alt="blog"
                      width={1000}
                      height={800}
                    />
                    {/* <div className="single-blog-date">10 Feb, 2024</div> */}
                    <h3 style={{ color: " #8D493A" }}>
                      Spesial Promo Ulang Tahun FESS Bakery Diskon 25%!{" "}
                    </h3>
                  </div>
                  <div className="details-text-area">
                    <h4 style={{ color: "#c19a6b" }}>Ketentuan :</h4>

                    <ol style={{ color: "#c19a6b" }}>
                      <li>
                        Promo berlaku mulai tanggal 5 hingga 10 Agustus 2024..
                      </li>
                      <li>Promo berlaku untuk pembelian langsung di toko </li>
                      <li>
                        Diskon tidak dapat digabungkan dengan promo atau diskon
                        lainnya.
                      </li>
                      <li>
                        Minimum pembelian untuk mendapatkan diskon adalah
                        Rp50.000.
                      </li>
                      <li>
                        Berlaku satu kali per pelanggan selama periode promo.
                      </li>
                      <li>
                        Produk yang sudah dibeli dengan harga diskon tidak dapat
                        dikembalikan atau ditukar.
                      </li>
                    </ol>
                    <h4 style={{ color: "#c19a6b" }}>Bonus Tambahan :</h4>

                    <li style={{ color: "#c19a6b" }}>
                      Pembelian di atas Rp400.000 berhak mendapatkan hadiah
                      spesial dari FESS Bakery.{" "}
                    </li>
                  </div>

                  <div className="single-post-admin">
                    {/* <h3>Promo Beli 2 Gratis 1 di Happy Bread Bakery </h3> */}
                  </div>
                  <div className="single-blog-img">
                    <Image
                      src="/images/blog/PROMO KE 3.svg"
                      alt="blog"
                      width={1000}
                      height={800}
                    />
                    {/* <div className="single-blog-date">10 Feb, 2024</div> */}
                    <h3 style={{ color: "#8D493A" }}>
                      Promo Hingga 25% untuk Pembelian 5 Item Cake
                    </h3>
                  </div>
                  <div className="details-text-area">
                    <h4 style={{ color: "#c19a6b" }}>Ketentuan :</h4>

                    <ol style={{ color: "#c19a6b" }}>
                      <li>
                        Promo berlaku mulai tanggal 28 hingga 30 Juli 2024..
                      </li>
                      <li>
                        Satu pelanggan hanya dapat memanfaatkan promo ini sekali
                        per hari.
                      </li>
                      <li>
                        Roti yang sudah dibeli dengan promo ini tidak dapat
                        dikembalikan atau ditukar.
                      </li>
                      <li>
                        Tidak dapat digabungkan dengan promo atau diskon
                        lainnya.
                      </li>
                      <li>
                        Diskon tidak dapat digabungkan dengan promo atau diskon
                        lainnya./
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <aside className="contact-form-wrapper">
                <h4 className="comment-title">Hubungi Kami</h4>
                <form method="post" action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        required
                      />
                    </div>

                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                      />
                    </div>

                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        id="telepon"
                        name="telepon"
                        placeholder="Telepon"
                        type="text"
                        required
                      />
                    </div>

                    <div className="col-lg-12">
                      <textarea
                        className="form-control"
                        rows="5"
                        id="message"
                        name="message"
                        placeholder="Type Comments..."
                        required
                      />
                    </div>

                    <div className="col-lg-12">
                      <div className="text-center">
                        <button type="submit" className="default-button">
                          Kirimkan Pesan
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .content-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .details-text {
          flex: 1;
          margin-right: 20px;
        }

        .contact-form-wrapper {
          flex: 1;
        }

        .contact-form-wrapper img {
          width: 100%;
          height: auto;
        }

        .form-control {
          margin-bottom: 15px;
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
        }

        .text-center {
          text-align: center;
        }

        .default-button {
          padding: 10px 20px;
          background-color: #007bff;
          border: none;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default BlogDetailsContent;
