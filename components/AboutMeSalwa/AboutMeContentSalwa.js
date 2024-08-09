import React from "react";
import Image from "next/image";
import Link from "next/link";

const App = () => {
  const dataSalwa = {
    name: "Salwa Aulia Azzahra",
    age: 17,
    address: {
      kota: "Salatiga",
      negara: "Indonesia",
    },
    Image: "/images/salwa2.jpeg",
    hobby: ["Membaca", "Menonton Drama", "Bernyanyi", "Makan"],
    pendidikan: [
      {
        name: " MI Sudirman Kemetul",
        year: 2013,
      },
      {
        name: " MTS N Salatiga",
        year: 2019,
      },
      {
        name: " SMK TELEKOMUNIKASI TUNAS HARAPAN",
        year: 2022,
      },
    ],
  };

  return (
    <>
      <section className="">
        <div className="container">
          <div class="row col-md-12">
            <div class="col-6">
              <div className="data-content">
                <div className="content">
                  <h1 style={{ color: "#c19a6b" }}>{dataSalwa.name}</h1>
                  <h2>Tentang Saya</h2>
                  <h3>nama</h3>
                  <p>{dataSalwa.name}</p>
                  <h3>umur</h3>
                  <p>{dataSalwa.age}</p>
                  <h3>alamat</h3>
                  <p>
                    {dataSalwa.address.kota},{dataSalwa.address.negara}
                  </p>
                  <h3>hobby</h3>
                  <ul>
                    {dataSalwa.hobby.map((hobby, index) => (
                      <li key={index}>{hobby}</li>
                    ))}
                  </ul>
                  <h3>pendidikan</h3>
                  <ul>
                    {dataSalwa.pendidikan.map((pendidikan, index) => (
                      <li key={index}>
                        {pendidikan.name}-{pendidikan.year}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="foto-img">
                <Image src={dataSalwa.Image} width={370} height={450} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
