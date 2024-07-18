import React from "react";
import Image from "next/image";

const teamMemberData = [
  {
    image: "/images/team/5.jpeg",
    name: "Fauzi Saputra",
    designation: "Pembuat Roti",
    shortText:
      "Semua Butuh Proses untuk mendapatkan kesuksesan,Buat Mie Instan aja butuh proses.",
    socialLinks: [
      {
        icon: "icofont-instagram",
        link: "https://www.instagram.com/that_verix?igsh=ejIxYnViYnlhazdq",
      },
    ],
    duration: "800",
    delay: "100",
  },
  {
    image: "/images/team/6.jpg",
    name: "Salwa Aulia Azzahra",
    designation: "Pengembang Rasa",
    shortText:
      "Hidup itu kayak es krim, nikmatilah sebelum meleleh.",
    socialLinks: [
      {
        icon: "icofont-instagram",
        link: "https://www.instagram.com/slwazhrrrr?utm_source=qr&igsh=MTgxMmdsbW5oam5rNw==",
      },
    ],
    duration: "800",
    delay: "200",
  },
  {
    image: "/images/team/8.png",
    name: "Elisa Ambarwati",
    designation: "Chef",
    shortText:
      "Hidup ini seperti naik sepeda. Untuk menjaga keseimbangan, Anda harus terus bergerak maju..",
    socialLinks: [
      {
        icon: "icofont-instagram",
        link: "https://www.instagram.com/thvllla?igsh=MTh4bnhlY205bDM4NQ==",
      },
    ],
    duration: "800",
    delay: "100",
  },
];

const Team = () => {
  return (
    <>
      <section id="team" className="team-section">
        <div className="container">
          <div
            className="section-title"
          >
            <h2 style={{color : "#c19a6b"}}>Rekan Kerja</h2>
            <p style={{color : "#c19a6b"}}>
            Toko Roti Fess, didirikan pada tahun 2024, menghadirkan pengalaman luas dalam memenuhi pesanan roti dengan kapasitas yang fleksibel, siap menghadapi tantangan dalam skala apapun. Kami berkomitmen untuk menjaga kualitas produk dan layanan demi kepuasan pelanggan setia kami. Dengan berbagai pilihan produk yang lezat dan inovatif, Toko Roti Fess tidak hanya menawarkan kepuasan rasa, tetapi juga jaminan garansi uang kembali hingga 100% jika Anda tidak sepenuhnya puas dengan pengalaman berbelanja bersama kami.
            </p>
          </div>

          <div className="row justify-content-center">
            {teamMemberData &&
              teamMemberData.map((value, i) => (
                <div className="col-md-3" key={i}>
                  <div
                    className="single-member"
                   
                  >
                    <div className="member-img">
                      <Image
                        src={value.image}
                        alt="Team Member Image"
                        width={370}
                        height={450}
                      />

                      <div className="overlay">
                        <div className="member-info">
                          <p>{value.shortText}</p>

                          <div className="social-links">
                            {value.socialLinks.map((value, i) => (
                              <a href={value.link} target="_blank" key={i}>
                                <i className={value.icon}></i>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 className="member-name" style={{color : "#c19a6b"}}>{value.name}</h4>
                    <p className="designation">{value.designation}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
