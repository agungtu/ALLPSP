import React from "react";
import Link from "next/link";
import Image from "next/image";

const App = () => {
  const dataFauzi = {
    Nama: "Fauzi Saputra",
    Umur: 17,
    alamat: {
      kota: "Salatiga",
      negara: "Indonessia",
    },
    text: "Lulus Pada Tahun",
    photo: "/images/team/5.jpeg",
    hobby: ["Main Game", "Nonton Anime", "Baca Komik"],
    pendidikan: [
      {
        tingkat: "SDN 1 Kedungharjo",
        tahun: 2019,
      },
      {
        tingkat: "SMPN 1 Mantingan",
        tahun: 2022,
      },
      {
        tingkat: "SMK Telekomunikasi Tunas Harapan",
        tahun: 2025,
      },
    ],
  };

  return (
    <>
    <section>
      <div className="row col-12">
        <div className="col-6">
          <div className="biodata-content">
            <div className="content">
              <h1 style={{ color: "#c19a6b" }}>{dataFauzi.Nama}</h1>
              <h2>Tentang Fauzi</h2>
              <h3>Nama</h3>
              <p>{dataFauzi.Nama}</p>
              <h3>Umur</h3>
              <p>Umur {dataFauzi.Umur} Tahun</p>
              <h3>Alamat</h3>
              <p>
                {dataFauzi.alamat.kota},{dataFauzi.alamat.negara}
              </p>
              <h3>Hobby</h3>
              <ul>
                {dataFauzi.hobby.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
              <h3>Pendidikan</h3>
              <ul>
                {dataFauzi.pendidikan.map((pendidikan, index) => (
                  <li key={index}>
                    {pendidikan.tingkat} Lulus Pada Tahun {pendidikan.tahun}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="img">
            <Image src={dataFauzi.photo} width={450} height={450} />
          </div>
        </div>
      </div>
      </section>
      <style jsx>{`
  .biodata-content {
          display: flex;
          flex-direction: column;
          align-items: left;
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
         }
  .content ul {
          list-style-type: none;
          padding: 0;
         }
    .content h3 {
     color: #c19a6b;
     font-weight: bold; 
          }
       @media (max-width: 768px) {
          .content {
            flex-direction: column;
          }
             @media (max-width: 480px) {
          .content {
            width: 100%;
          }
 `}</style>
    </>
  );
};
export default App;
