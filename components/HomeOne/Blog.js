import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const titleBlog = "TESTIMONI"
  const deskripsi = "FESS Bakery tempat di mana cita rasa dan kelezatan berpadu menjadi satu. Kami adalah toko roti yang berkomitmen untuk menyajikan roti dan kue dengan kualitas terbaik yang dibuat dengan bahan-bahan  pilihan dan resep tradisional"

  const nama = {
    pertama: "Agatha Clarissa",
    kedua: "Anna Putri",
    ketiga: "Banna Putri",
};
  const tanggal = {
    pertama:  " 03 Februari / sabtu / 2024 ",
    kedua:  " 15 April / senin / 2024 ",
    ketiga:  " 25 Mei / sabtu / 2024 ",

  };

  const saran1 = "Sebagai pecinta roti, saya selalu mencari tempat dengan roti yang fresh dan enak, dan saya menemukannya di sini. Roti mereka adalah yang terbaik yang pernah saya coba. Atmosfer tokonya juga sangat nyaman untuk bersantai dan menikmati kopi. Sungguh pengalaman yang menyenangkan!"
  const saran2 = "Toko roti ini benar-benar permata tersembunyi! Roti croissant-nya luar biasa, renyah di luar dan lembut didalam. Saya juga mencoba kue bolu mereka dan rasanya sangat lezat. Harga yang ditawarkan sangat terjangkau untuk kualitas yang didapat. Sangat direkomendasikan!"
  const saran3 = "Roti di sini benar-benar lezat! Teksturnya empuk dan rasanya sangat enak. Favorit saya adalah roti cokelatnya, yang selalu membuat saya kembali lagi untuk membelinya. Pelayanannya juga sangat ramah dan cepat. Pasti akan merekomendasikan toko roti ini kepada teman-teman dan keluarga!"
return (
    <>
      <section id="blog" className="blog-section">
        <div className="container">
          <div className="section-title">
            <h2 className="text-white">{titleBlog}</h2>
            <p className="text-white">{deskripsi}
            </p>
          </div>

          <div className="horizontal-post single-blog-post">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/gambar1.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={500}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">{nama.pertama}</Link>
                  </h6>
                  <ul className="post-admin">{tanggal.pertama}
                  </ul>
                  <p>{saran1}
                  </p>
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
                      src="/images/gambar2.jpg"
                      alt="Blog Post Image"
                      width={100}
                      height={800}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">{nama.kedua}</Link>
                  </h6>

                  <ul className="post-admin">{tanggal.kedua}
                  </ul>

                  <p>{saran2}
                  </p>
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
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="blog-info">
                  <h6 className="blog-title">
                    <Link href="/blog/details">{nama.ketiga}</Link>
                  </h6>

                  <ul className="post-admin">{tanggal.ketiga}
                  </ul>

                  <p>{saran3}
                  </p>
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
