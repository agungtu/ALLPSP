import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Selamat!",
    text: "Pesan Anda berhasil dikirim dan akan segera menghubungi Anda kembali",
    icon: "berhasil",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  nama: "",
  email: "",
  nomor: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const titlecontact = "Hubungi Kami";
  const textcontact =
    " Kami berkomitmen untuk merespons pesan Anda secepat mungkin dan memastikan bahwa setiap pertanyaan atau masalah yang Anda hadapi ditangani dengan baik. Terima kasih atas dukungan dan kepercayaan Anda kepada kami. Kami sangat menghargai setiap masukan, pertanyaan, dan saran dari Anda. Jangan ragu untuk menghubungi kami melalui cara berikut :";

  const titlecontactinfo = {
    pertama: "Alamat kantor:",
    kedua: "Alamat E-mail:",
    ketiga: "Nomor Telepon:",
  };

  const textcontactinfo = {
    pertama: "Jl. Pamularsih Raya, Bongsari, Semarang Barat, Central Java",
    kedua: "fessbakery@gmail.com",
    ketiga: "+6285787653299",
  };

  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { nama, email, nomor, subject, text } = contact;
      const payload = { nama, email, nomor, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="contact-section"
        style={{ backgroundColor: "#FFFFFF " }}
      >
        <div className="container">
          <div className="section-title">
            <h2>{titlecontact}</h2>
            <p>{textcontact}</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-4 col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="icofont-location-pin"></i>
                <h3>{titlecontactinfo.pertama}</h3>
                <p>{textcontactinfo.pertama}</p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="icofont-envelope"></i>
                <h3>{titlecontactinfo.kedua}</h3>
                <p>{textcontactinfo.kedua}</p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="icofont icofont-phone"></i>
                <h3>{titlecontactinfo.ketiga}</h3>
                <p>{textcontactinfo.ketiga}</p>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Nama"
                          className="form-control"
                          value={contact.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                          value={contact.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="number"
                          placeholder="Nomor telepon"
                          className="form-control"
                          value={contact.number}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          className="form-control"
                          value={contact.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="text"
                          cols="30"
                          rows="6"
                          placeholder="Tulis pesan Anda..."
                          className="form-control"
                          value={contact.text}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-12 text-center">
                      <button type="submit" className="default-button">
                        Kirim Pesan
                        <i className="icofont-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>*/}
        </div>
      </section>
    </>
  );
};

export default ContactForm;
