import React from "react";
import Link from "next/link";
import Image from "next/image";

const App = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="header">
            <h1>Tentang Kami</h1>
          </div>
          <div className="content">
            <div className="description">
              <h3>Toko Roti Terpadu</h3>
              <p>
                Selamat datang di Fess Bakery, tempat di mana setiap roti dan
                kue dipanggang dengan penuh cinta dan dedikasi. Menggunakan
                bahan-bahan terbaik, kami menghadirkan roti yang lembut, harum,
                dan kue-kue inovatif yang memanjakan lidah. Fess Bakery adalah
                perpaduan antara tradisi dan inovasi, menciptakan rasa yang unik
                dan menggugah selera di setiap gigitan. Mari rasakan kehangatan
                dan kualitas terbaik dalam setiap produk kami!
              </p>
            </div>
            <div className="image-container">
              <Image
                src="/images/pict-toko.png"
                width={400}
                height={400}
                alt="Toko Roti"
              />
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="content">
            <div className="image-container">
              <Image
                src="/images/bread-visi.png"
                width={400}
                height={400}
                alt="Bakery Store"
              />
            </div>
            <div className="description">
              <h3>Visi Dan Misi Kami</h3>
              <p>
                Menjadi pilihan utama dalam industri roti dan kue dengan
                menghadirkan produk berkualitas tinggi, inovatif, dan bernutrisi
                yang dapat dinikmati oleh semua kalangan.
              </p>
              <ul>
                <li>
                  Menggunakan bahan-bahan berkualitas tinggi dan segar untuk
                  menghasilkan roti dan kue yang lezat dan sehat.
                </li>
                <li>
                  Mengembangkan resep-resep baru yang inovatif dan mengikuti tren
                  kuliner terkini untuk memenuhi kebutuhan dan selera pelanggan.
                </li>
                <li>
                  Memberikan pelayanan yang ramah, cepat, dan profesional untuk
                  memastikan kepuasan pelanggan.
                </li>
                <li>
                  Menciptakan lingkungan kerja yang positif dan mendukung
                  pengembangan karir karyawan, sehingga mereka dapat memberikan
                  kontribusi terbaik bagi perusahaan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
        }

        .header h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 10px;
          color: #333;
        }

        .content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .description {
          flex: 1;
          margin-right: 20px;
          margin-left: 20px; 
        }

        .description h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .image-container {
          max-width: 100%;
        }

        .mt-5 {
          margin-top: 20px;
        }

        @media (max-width: 768px) {
          .content {
            flex-direction: column;
          }

          .image-container {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 480px) {
          .content {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default App;