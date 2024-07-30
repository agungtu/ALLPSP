import React from 'react';


const App = () => {
    return (
        <>

            <section className="Footer" style={{ background: "#deb887", padding: "10px 0", color: "#333" }}>

                <div className="container">

                    <div className="row" style={{ display: "flex" }}>
                        <div className="col-md-4">
                            <div className="Image" style={{ maxWidth: '40%', marginBottom: '10px' }}>
                                <img src="/images/Asset.svg" alt="Store Icon" />
                            </div>
                            <div className="contact-info" style={{ textAlign: 'left', marginTop: "40px" }}>
                                <p style={{ color: "#333" }}>
                                    "Fees Bakery Menyediakan Berbagai Macam Roti dan Kue untuk anda setiap hari !"
                                </p>
                                <li>
                                    <i class="icofont-location-pin"></i>
                                    Jl. Pamularsih Raya, Bongsari, Semarang Barat, Central Java
                                </li>
                                <li>
                                    <i className="icofont-phone"></i>

                                    Tlpn: 08111955159
                                </li>
                                <li>
                                    <i class="icofont-ui-email"></i>
                                    Email: pesan@FEES Bakery.com
                                </li>

                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="social-media" style={{ textAlign: 'center', marginTop: "100px" }}>
                                <h3 style={{ marginBottom: "20px", color: "#FCFFE0" }}>SOSIAL MEDIA KAMI</h3>
                                <ul>
                                    <li>
                                        <a href="#">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#">Tiktok</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="order-online" style={{ textAlign: 'center', marginTop: "100px" }}>
                                <h3 style={{ marginBottom: "20px", color: "#FCFFE0" }}>PEMESANAN ONLINE</h3>
                                <ul>
                                    <li>
                                        <a href="#">Shopee Food
                                            
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Grab Food</a>
                                    </li>
                                    <li>
                                        <a href="#">Go Food</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright" style={{ textAlign: 'right' }}>
                                <p>
                                    Copyright 2024 Jibo. all rights by{" "}
                                    <a href="http://envytheme.com/" target="_blank" style={{ color: "#FCFFE0" }}>
                                        EnvyTheme
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <style jsx>{`
    
.footer {
 background-color: #f2f2f2;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.col-md-4 {
  width: 33.33%;
  padding: 0 15px;
}

.social-media,
.order-online,
.contact-info {
  text-align: left;
}

h3 {
  margin-bottom: 20px;
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #007bff;
}

.copyright {
  text-align: center;
}

.fas {
  margin-right: 10px;
  color: #007bff;
}
  

        `}</style>
        </>
    );
};
export default App; 