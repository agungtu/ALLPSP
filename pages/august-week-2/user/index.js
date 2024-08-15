import React from "react";
import Link from "next/link";
import Footer from "../../../components/Common/Footer";
import BranchContent from "../../../components/Branch/BranchContent";

const branch = () => {
  let data = {
    product: {
      availabilityStatus: "In Stock",
      brand: "Glamour Beauty",
      category: "beauty",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      dimensions: {
        depth: 29.13,
        height: 8.63,
        width: 12.42,
      },
      discountPercentage: 5.5,
      id: 2,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
      meta: {
        barcode: "2817839095220",
        createdAt: "2024-05-23T08:56:21.618Z",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
        updatedAt: "2024-05-23T08:56:21.618Z",
      },
      minimumOrderQuantity: 32,
      price: 19.99,
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
        <div className="container">
          <div className="header">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <Link href={`/august-week-2/user`} className="logo">
                  <img
                    src="/images/profilesergi.png"
                    width={100}
                    height={100}
                    alt="Sergi Roberto"
                  />
                </Link>
              </div>

              <div className="col-6 text-end">
                <Link href="/blog/branch/" className="nav-text">
                  User
                </Link>
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">User</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src="/images/SergiRoberto.jpg"
                className="rounded float-start img-fluid"
                alt="Sergi Roberto"
              />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-between">
              <div>
                <h1>Sergi Roberto</h1>
                <a href="https://www.fcbarcelona.com/en/" target="blank_">
                  Pemain Sepak Bola
                </a>
              </div>

              <ul>
                <li>Penampilan: 300+</li>
                <li>Gol: 15</li>
                <li>Assist: 30</li>
                <li>Trofi: 6x La Liga, 2x Liga Champions, 5x Copa del Rey</li>
              </ul>

              <div>
                <h4 style={{ color: "#777f8b" }}>Rankings</h4>
                <h2>9.5 &#127775;&#127775;&#127775;&#127775;&#127775;</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="info-content">
              <p style={{ color: "#a4a8ad" }}>Pekerjaan</p>
              <h4>Pemain Sepak Bola FC Barcelona</h4>
              <p>Les Corts, 08028 Barcelona, Spanyol</p>
              <h4>Perusahaan</h4>
              <p>
                FC Barcelona, atau Barça, adalah klub sepak bola Spanyol yang
                didirikan pada 1899. Terkenal dengan gaya permainan tiki-taka
                dan prestasi internasionalnya, klub ini juga dikenal karena
                akademi La Masia yang melahirkan banyak pemain berbakat.
              </p>
            </div>
            <div className="info-content">
              <p style={{ color: "#a4a8ad" }}>Skills</p>
              <ul>
                <li>Vision</li>
                <li>Dribbling</li>
                <li>Passing</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-content">
              <p style={{ color: "#a4a8ad" }}>Contact Information</p>
              <p>
                Phone: <a href="tel:+34 902 1899 00">+34 902 1899 00</a>
              </p>
              <p>Address: Reus, Spanyol</p>
              <p>
                Email:{" "}
                <a href="mailto:sergiroberto@gmail.com">
                  sergiroberto@gmail.com
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/sergiroberto/"
                  target="_blank"
                >
                  {" "}
                  sergiroberto
                </a>
              </p>
            </div>
            <div className="info-content">
              <p style={{ color: "#a4a8ad" }}>Basic Information</p>
              <p>Tanggal Lahir: 9 February, 1992</p>
              <p>Hobby: Sepak Bola</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default branch;
