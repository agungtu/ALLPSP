import React from "react";
import Link from "next/link";
import Image from "next/image";

const App = () => {
  return (
    <>
      <section className="branch-content">
        <div className="container">
          <div className="header">
            <h1>FESS BAKERY & PASTRY</h1>
            <h2>CABANG DI TOKO KAMI</h2>
          </div>
          <div className="stores">
            <div className="store">
              <div className="store-icon">
                <img src="/images/kedai.png" alt="Store Icon" />
              </div>
              <h3>CANDI</h3>
              <p>Jl. Sultan Agung No. 127, Semarang.</p>
              <p>Kota Semarang, 50232</p>
              <a
                href="https://maps.app.goo.gl/ToziFxnrpLojYshg8"
                target="_blank"
                style={{ color: "#fff" }}
              >
                <button className="location-button">LOKASI</button>
              </a>
            </div>
            <div className="store">
              <div className="store-icon">
                <img src="/images/kedai.png" alt="Store Icon" />
              </div>
              <h3>BANGKONG</h3>
              <p>Jl. MT. Haryono No. 711, Semarang.</p>
              <p>Kota Semarang, 50242</p>
              <a
                href="https://maps.app.goo.gl/6LKBhjzCZoC7JKGT8"
                target="_blank"
                style={{ color: "#fff" }}
              >
                <button className="location-button">LOKASI</button>
              </a>
            </div>
            <div className="store">
              <div className="store-icon">
                <img src="/images/kedai.png" alt="Store Icon" />
              </div>
              <h3>PANDANARAN</h3>
              <p>Jl. Pandanaran No. 127, Semarang.</p>
              <p>Kota Semarang, 50241</p>
              <a
                href="https://maps.app.goo.gl/7t8UzDqvjvGAGHYp6"
                target="_blank"
                style={{ color: "#fff" }}
              >
                <button className="location-button">LOKASI</button>
              </a>
            </div>
            <div className="store">
              <div className="store-icon">
                <img src="/images/kedai.png" alt="Store Icon" />
              </div>
              <h3>PETERONGAN</h3>
              <p>Jl. MT. Haryono No. 556, Semarang</p>
              <p>Kota Semarang, 50241</p>
              <a
                href="https://maps.app.goo.gl/Kx1ZtAyVUV1J64oX6"
                target="_blank"
                style={{ color: "#fff" }}
              >
                <button className="location-button">LOKASI</button>
              </a>
            </div>
            <div className="store">
              <div className="store-icon">
                <img src="/images/kedai.png" alt="Store Icon" />
              </div>
              <h3>GAJAH MADA</h3>
              <p>Jl. Gajah Mada No. 90, Semarang</p>
              <p>Kota Semarang, 50134</p>
              <a
                href="https://maps.app.goo.gl/UtZzd2kShSahK3jd7"
                target="_blank"
                style={{ color: "#fff" }}
              >
                <button className="location-button">LOKASI</button>
              </a>
            </div>
            <div className="store">
              <div className="store-icon">
                <img src="/images/kedai.png" alt="Store Icon" />
              </div>
              <h3>TLOGOSARI</h3>
              <p>Jl. Tlogosari Raya No. 61, Semarang</p>
              <p>Kota Semarang, 50196</p>
              <a
                href="https://maps.app.goo.gl/bMjAc43yz8n3vN9K8"
                target="_blank"
                style={{ color: "#fff" }}
              >
                <button className="location-button">LOKASI</button>
              </a>
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

        .header h2 {
          font-size: 1.5rem;
          font-weight: normal;
          color: #555;
        }

        .stores {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
        }

        .store {
          background-color: #fff;
          border-radius: 10px;
          padding: 20px;
          width: calc(33.33% - 20px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s;
        }

        .store:hover {
          transform: translateY(-10px);
        }

        .store-icon {
          width: 100px;
          height: 100px;
          margin: 0 auto 20px;
        }

        .store-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .store h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
          color: #333;
        }

        .store p {
          margin-bottom: 10px;
          color: #555;
        }

        
        .location-button {
          background-color: #ff7f50;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .location-button:hover {
          background-color: #ff6347;
        }

        @media (max-width: 768px) {
          .store {
            width: calc(50% - 20px);
          }
        }

        @media (max-width: 480px) {
          .store {
            width: 100%;
          }

          .header h1 {
            font-size: 2rem;
          }

          .header h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
};

export default App;
