import React from "react";
import Link from "next/link";
import Image from "next/image";

const App = () => {
  return (
    <>
      <section
        className="branch-content"
      >

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
              <p> Jl. Sultan Agung No. 127, Semarang.</p>
              <p>Kota Semarang, 50232</p>
              <button className="location-button">LOKASI</button>
            </div>
            <div className="store">
              <div className="store-icon">
                <img src="/images/kedai.png" alt="Store Icon" />
              </div>
              <h3>BANGKONG</h3>
              <p> Jl. MT. Haryono No. 711, Semarang.</p>
              <p>Kota Semarang, 50242</p>
              <button className="location-button">LOKASI</button>
            </div>
            <div className="store">
              <div className="store-icon">
                <img src="/images/kedai.png" alt="Store Icon" />
              </div>
              <h3>PANDANARAN</h3>
              <p>Jl. Pandanaran No. 127, Semarang.</p>
              <p>Kota Semarang,  50241</p>
              <button className="location-button">LOKASI</button>
            </div>
            <div className="store">
              <div className="store-icon">
                <img src="/images/kedai.png" alt="Store Icon" />
              </div>
              <h3>PETERONGAN</h3>
              <p> Jl. MT. Haryono No. 556, Semarang</p>
              <p>Kota Semarang, 50241</p>
              <button className="location-button">LOKASI</button>
            </div>
            <div className="store">
              <div className="store-icon">
                <img src="/images/kedai.png" alt="Store Icon" />
              </div>
              <h3>GAJAH MADA</h3>
              <p>Jl. Gajah Mada No. 90, Semarang</p>
              <p>Kota Semarang, 50134</p>
              <button className="location-button">LOKASI</button>
            </div>
            <div className="store">
              <div className="store-icon">
                <img src="/images/kedai.png" alt="Store Icon" />
              </div>
              <h3>TLOGOSARI</h3>
              <p>Jl. Tlogosari Raya No. 61, Semarang</p>
              <p>Kota Semarang, 50196</p>
              <button className="location-button">LOKASI</button>
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
      }
      
      .header {
        text-align: center;
        margin-bottom: 40px;
      }
      
      .header h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 10px;
      }
      
      .header h2 {
        font-size: 1.5rem;
        font-weight: normal;
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
      }
      
      .store p {
        margin-bottom: 10px;
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
      }
    
    `}</style>
    </>
  );
};

export default App;