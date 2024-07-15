import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <section id="blog" className="blog-section" style={{backgroundColor:"#deb887 "}}>
        <div className="container">

          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2>TESTIMONI</h2>
            <p>
            FESS Bakery tempat di mana cita rasa dan kelezatan berpadu menjadi satu. Kami adalah toko roti yang berkomitmen untuk menyajikan roti dan kue dengan kualitas terbaik 
            yang dibuat dengan bahan-bahan pilihan dan resep tradisional.
            </p>
          </div>

          <div className="horizontal-post single-blog-post">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/gambar1.jfif"
                      alt="Blog Post Image"
                      width={100}
                      height={500}
                      style={{width:"50%", height:"50%"}}
                    />
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">
                     Agatha Clarissa
                    </Link>
                  </h6>

                  <ul className="post-admin">
                    <li>
                      03 <Link href="#">Februari</Link>
                    </li>
                    <li>Sabtu</li>
                    <li>2024</li>
                  </ul>

                  <p>
                  "Sebagai pecinta roti, saya selalu mencari tempat dengan roti yang fresh dan enak, dan saya menemukannya di sini. Roti mereka adalah yang terbaik yang pernah saya coba. Atmosfer tokonya juga sangat nyaman untuk bersantai dan menikmati kopi. Sungguh pengalaman yang menyenangkan!"
                  </p>

                  {/* <Link href="/blog/details" className="default-button">
                    Read More
                    <i className="icofont-swoosh-right"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          <div className="horizontal-post single-blog-post">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/gambar2.jfif"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                      style={{width:"50%", height:"50%"}}
                    />
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">
                     Anna Putri
                    </Link>
                  </h6>

                  <ul className="post-admin">
                    <li>
                      15 <Link href="#">April</Link>
                    </li>
                    <li>Senin</li>
                    <li>2024</li>
                  </ul>

                  <p>
                  "Toko roti ini benar-benar permata tersembunyi! Roti croissant-nya luar biasa, renyah di luar dan lembut di dalam. Saya juga mencoba kue bolu mereka dan rasanya sangat lezat. Harga yang ditawarkan sangat terjangkau untuk kualitas yang didapat. Sangat direkomendasikan!"
                  </p>
{/* 
                  <Link href="/blog/details" className="default-button">
                    Read More
                    <i className="icofont-swoosh-right"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          <div className="horizontal-post single-blog-post">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/gambar3.jfif"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                    />
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">
                      Nara Risya
                    </Link>
                  </h6>

                  <ul className="post-admin">
                    <li>
                      05 <Link href="#">Juni</Link>
                    </li>
                    <li>Rabu</li>
                    <li>2024</li>
                  </ul>

                  <p>
                  "Saya sangat terkesan dengan kualitas roti di toko ini. Setiap gigitan terasa begitu lembut dan penuh rasa. Roti gandumnya adalah favorit saya karena sangat sehat dan tetap enak. Pelayanan di sini juga sangat ramah dan membantu. Saya pasti akan kembali lagi!"
                  </p>

                  {/* <Link href="/blog/details" className="default-button">
                    Read More
                    <i className="icofont-swoosh-right"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
