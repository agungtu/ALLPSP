import React from "react";
import Link from "next/link";
import Image from "next/image";

const App = () => {
  const dataElisa = {
    nama: "ELISA AMBARWATI",
    age: "15 Tahun",
    addres: {
      city: "Salatiga",
      country: "Indonesia",
    },
    photoUrl: "/images/hoshii.jpg",
    hobby: ['Menonton Film', 'Membaca Novel', 'Menyanyi Sendiri', 'Shopping'],
    pendidikan: [

      {
        name: "SD Reksosari 01",
        year: 2013,
      },
      {
        name: "SMP 3 Suruh",
        year: 2019,
      },
      {
        name: "SMK Telekomunikasi Tunas Harapan",
        year: 2022,
      },
    ],
  }
  return (
    <>
      <section className="aboutMe">
        <div className="container">
          <div class="row">
            <div class="col">
              <div className="header">
                <h1 style={{ color: "#C19a6B" }}>{dataElisa.nama} </h1>
                <h2>Tentang Saya</h2>
                <h3 style={{ color: "#C19a6B" }}>Nama</h3> <p>{dataElisa.nama}</p>
                <h3 style={{ color: "#C19a6B" }}>Umur</h3> <p>{dataElisa.age}</p>
                <h3 style={{ color: "#C19a6B" }}>Alamat</h3>
                <p>{dataElisa.addres.city}, {dataElisa.addres.country}</p>
                <h3 style={{ color: "#C19a6B" }}>Hobby</h3>
                {dataElisa.hobby.map((hobby, index) => (
                  <p key={index}>{hobby}</p>
                ))}
                <h3 style={{ color: "#C19a6B" }}>Pendidikan</h3>
                {dataElisa.pendidikan.map((pendidikan, index) => (
                  <p key={index}>
                    {pendidikan.name}-{pendidikan.year}
                  </p>
                ))}
              </div>

            </div>
            <div class="col-md-auto">
              <div className="foto-img">
                <Image
                  src={dataElisa.photoUrl}
                  width={370}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default App;