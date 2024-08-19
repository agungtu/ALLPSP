import React from "react";
import Link from "next/link";
import Footer from "../../../components/Common/Footer";


const branch = () => {
  let data = {
    product: {
      availabilityStatus: "In Stock",
      brand: "FESS Bakery | Croissant Klasik | Croissant Mentega",
      category: "Makanan",
      description: {
        pertama: " Croissant ini adalah perpaduan sempurna antara tekstur berlapis dan renyah, dengan aroma mentega yang menggoda dan rasa mewah di setiap gigitannya",
        kedua: "Dibalut dalam lapisan yang keemasan, croissant ini memiliki tekstur lumer di mulut dan rasa bermentega yang memanjakan",
        ketiga: "Setiap croissant dipanggang hingga sempurna, menghasilkan lapisan berlapis yang menggoda dengan sentuhan kerenyahan yang istimewa."
      },
      dimensions: {
        depth: 29.13,
        height: 8.63,
        width: 12.42,
      },
      date: "2024-08-02",
      masa: "5 hari",
      discountPercentage: 5.5,
      berat: "150 gram",
      id: 2,
      photo: {
        satu: "/images/butter-croissant (1).jpg",
        dua: "/images/butter-croissant.jpg ",
        tiga: "/images/studio-background-drink-brown-golden.jpg",
        empat: "/images/fresh-butter-whole-wheat-croissant.jpg",
      },

      meta: {
        barcode: "2817839095220",
        createdAt: "2024-05-23T08:56:21.618Z",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
        updatedAt: "2024-05-23T08:56:21.618Z",
      },
      minimumOrderQuantity: 32,
      size: "Sedang",
      price: "Rp.50.000",
      rating: 3.28,
      returnPolicy: "30 days return policy",
      reviews: [
        {
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          rating: 4,
          reviewerEmail: "liam.garcia@x.dummyjson.com",
          reviewerName: "Liam Garcia",
        },
        {
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.618Z",
          rating: 1,
          reviewerEmail: "nora.russell@x.dummyjson.com",
          reviewerName: "Nora Russell",
        },
        {
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          rating: 5,
          reviewerEmail: "elena.baker@x.dummyjson.com",
          reviewerName: "Elena Baker",
        },
      ],
      shippingInformation: "Ships in 2 weeks",
      sku: "MVCFH27F",
      stock: 44,
      tags: ["beauty", "eyeshadow"],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
      title: "Eyeshadow Palette with Mirror",
      warrantyInformation: "1 year warranty",
      weight: 3,
    },
    user: {
      address: {
        address: "626 Main Street",
        city: "Phoenix",
        country: "United States",
        postalCode: "29112",
        state: "Mississippi",
        stateCode: "MS",
      },
      age: 28,
      bank: {
        cardExpire: "03/26",
        cardNumber: "9289760655481815",
        cardType: "Elo",
        currency: "CNY",
        iban: "YPUXISOBI7TTHPK2BR3HAIXL",
      },
      birthDate: "1996-5-30",
      bloodGroup: "O-",
      company: {
        department: "Engineering",
        name: "Dooley, Kozey and Cronin",
        title: "Sales Manager",
      },
      crypto: {
        coin: "Bitcoin",
        network: "Ethereum (ERC20)",
        wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
      },
      ein: "977-175",
      email: "emily.johnson@x.dummyjson.com",
      eyeColor: "Green",
      firstName: "Emily",
      gender: "female",
      hair: { color: "Brown", type: "Curly" },
      height: 193.24,
      id: 1,
      image: "https://dummyjson.com/icon/emilys/128",
      ip: "42.48.100.32",
      lastName: "Johnson",
      macAddress: "47:fa:41:18:ec:eb",
      maidenName: "Smith",
      password: "emilyspass",
      phone: "+81 965-431-3024",
      role: "admin",
      ssn: "900-590-289",
      university: "University of Wisconsin--Madison",
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
      username: "emilys",
      weight: 63.16,
    },
    postComment: {
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      id: 1,
      reactions: { dislikes: 25, likes: 192 },
      tags: ["history", "american", "crime"],
      title: "His mother had always taught him",
      image: "https://dummyjson.com/icon/avahx/128",
      username: "avahx",
      userId: 121,
      views: 305,
      comments: [
        {
          body: "These are fabulous ideas!",
          image: "https://dummyjson.com/icon/emilys/128",
          id: 93,
          likes: 7,
          postId: 1,
          user: { fullName: "Leah Gutierrez", id: 190, username: "leahw" },
        },
        {
          body: "You are a symbol of beauty.",
          image: "https://dummyjson.com/icon/michaelw/128",
          id: 107,
          likes: 7,
          postId: 1,
          user: {
            fullName: "Jackson Morales",
            id: 131,
            username: "jacksonm",
          },
        },
        {
          body: "Your eyes are like stars.",
          image: "https://dummyjson.com/icon/sophiab/128",
          id: 209,
          likes: 10,
          postId: 1,
          user: { fullName: "Miles Stevenson", id: 95, username: "miless" },
        },
      ],
    },
  };
  return (
    <>
      <section className="top-banner-area">

        <div className="container" >
          <div className="header">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <Link href="/" className="logo">
                  Product
                </Link>
                <h2 className="banner-title">Product page</h2>
              </div>

              <div className="col-6 text-end">
                <Link href="/blog/branch/" className="nav-text">
                  Product
                </Link>
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Product</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container" >
          <div class="row col" >
            <div class="col-md-6"  >
              <div id="carouselControls" className="carousel slide" >
                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                      <img src={data.product.photo.satu} class="d-block w-100" alt="item" />
                      <div class="carousel-caption d-none d-md-block">
                        <h5 class="text-muted">Croissant renyah dan lembut</h5>

                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src={data.product.photo.dua} class="d-block w-100" alt="..." />
                      <div class="carousel-caption d-none d-md-block">
                        <h5 class="text-muted">Roti lembut pilihan terbaik.</h5>

                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={data.product.photo.tiga} class="d-block w-100" alt="..." />
                      <div class="carousel-caption d-none d-md-block">
                        <h5 class="text-muted">Kelezatan croissant hangat.</h5>

                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src={data.product.photo.empat} class="d-block w-100" alt="..." />
                      <div class="carousel-caption d-none d-md-block">
                        <h5 class="text-muted">Lezat dan menggugah selera.</h5>

                      </div>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <h2 style={{ color: "#8D493A", marginTop: "40px", marginbottom: "40px" }}>{data.product.brand}</h2>
              <div className="flex flex-column">

                <div style={{ backgroundColor: "#FFF7FC", padding: "1rem" }}>
                  <h2 style={{ color: "#a11e0a" }}>{data.product.price}</h2>
                  <p></p>
                  <div class="d-flex">
                    <div class="flex-shrink-0">
                      <span><img src="/images/- informasi garansi.png" alt="Return" style={{ width: "40px", height: "40px", marginRight: "20px" }} /> </span>

                    </div>
                    <div class="flex-grow-1 ms-3">
                      <p>Garansi 100% jika produk tidak sesuai .</p>
                      Garansi uang kembali jika produk tidak sesuai
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-nowrap">
                  <div class="order-1 p-2">Pengiriman : </div>
                  <div class="order-2 p-2"><img src="/images/download.png" alt="Return" style={{ marginRight: "10px", width: "40px", height: "40px", marginRight: "5px" }} /></div>
                  <div class="order-3 p-2">
                    Gratis Ongkir di Kab. Semarang
                  </div>
                </div>

                <div class="d-flex" style={{ textAlign: "left" }} >
                  <div class="p-2 flex-fill">Stock</div>

                  <div class="p-2 flex-fill">Tersisa {data.product.stock} buah</div>
                </div>







              </div>
            </div>

            {/* <section class="page-product-shop">
              <h2>huu</h2>
            </section> */}
            <section className="page-product">

              <div className="page-product-content">
                <div className="page-detail page-product-detail">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-delay="100"
                  >
                    <h3 style={{ color: "#333", backgroundColor: "#FBF6E2", fontSize: "1.25rem", fontWeight: "500", padding: "1rem", textTransform: "capitalize", margin: "0 0 1rem 0", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                      Spesifikasi Produk
                    </h3>
                    <div  >
                      {[
                        { label: "Merek", value: data.product.brand },
                        { label: "Stok", value: data.product.stock },
                        { label: "Kategori", value: data.product.category },
                        { label: "Ukuran", value: data.product.size },
                        { label: "Masa Penyimpanan", value: data.product.masa },
                        { label: "Berat", value: data.product.berat },
                        { label: "Tanggal Kadaluarsa", value: data.product.date }
                      ].map((item, index) => (
                        <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "1rem" }} key={index}>
                          <label style={{ paddingRight: "0.75rem", fontWeight: "bold", color: "#555" }}>{item.label}:</label>
                          <div style={{ color: "#777" }}>{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="100"
                  >
                    <h3 style={{ color: "#333", backgroundColor: "#FBF6E2", fontSize: "1.25rem", fontWeight: "500", padding: "1rem", textTransform: "capitalize", margin: "0 0 1rem 0", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                      Deskripsi Produk
                    </h3>
                    <div style={{ margin: "1.5rem 0", color: "#555" }}>

                      {[
                        data.product.description.pertama,
                        data.product.description.kedua,
                        data.product.description.ketiga
                      ].map((desc, index) => (
                        <p class="text-muted" key={index} >{desc}</p>
                      ))}
                    </div>
                  </div>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-delay="200"
                  >
                    <h3 style={{ color: "#333", backgroundColor: "#fcf3cf", fontSize: "1.25rem", fontWeight: "500", padding: "1rem", textTransform: "capitalize", margin: "0 0 1rem 0", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                      Penilaian Produk
                    </h3>
                    <div class="container text-center">
                      <div class="row">
                        <div class="col-sm-3">
                          <h1>4.9/ 5</h1>
                        
                        </div>

                      </div>
                    </div>


                    {/* <div style={{ margin: "1.5rem 0", color: "#555" }}>
                      {[
                        data.product.description.pertama,
                        data.product.description.kedua,
                        data.product.description.ketiga
                      ].map((desc, index) => (
                        <p class="text-muted" key={index} >{desc}</p>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>

            </section>

          </div>
        </div>


      </section >

      <Footer />
    </>
  );
};

export default branch;
