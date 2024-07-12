import React from "react";
import Image from "next/image";

const teamMemberData = [
  {
    image: "/images/team/5.jpeg",
    name: "Fauzi Saputra",
    designation: "",
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
    designation: "",
    shortText:
      "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
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
    image: "/images/team/7.jpg",
    name: "Shintya Bayu Apta Andika",
    designation: "",
    shortText:
      "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    socialLinks: [
      {
        icon: "icofont-instagram",
        link: "https://www.instagram.com/shnt_yyy?igsh=MWFlNmg0bDVoMHYwaA%3D%3D&utm_source=qr",
      },
    ],
    duration: "800",
    delay: "300",
  },
  {
    image: "/images/team/.jpeg",
    name: "Elisa Ambarwati",
    designation: "CEO & Fouder",
    shortText:
      "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
    socialLinks: [
      {
        icon: "icofont-instagram",
        link: "https://www.instagram.com/",
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
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2>TIM KAMI YANG LUAR BIASA</h2>
            <p>
              Tim kami terdiri dari sekelompok profesional berdedikasi yang
              memiliki keahlian dan pengalaman luas di bidang pengembangan web.
              Kami bekerja sama untuk menciptakan situs web yang inovatif,
              fungsional, dan mudah digunakan. Dengan kombinasi keterampilan
              teknis, kreativitas, dan perhatian terhadap detail, kami
              berkomitmen untuk memberikan hasil terbaik bagi setiap proyek yang
              kami tangani.
            </p>
          </div>

          <div className="row justify-content-center">
            {teamMemberData &&
              teamMemberData.map((value, i) => (
                <div className="col-md-3" key={i}>
                  <div
                    className="single-member"
                    data-aos="fade-in"
                    data-aos-duration={value.duration}
                    data-aos-delay={value.delay}
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

                    <h4 className="member-name">{value.name}</h4>
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
