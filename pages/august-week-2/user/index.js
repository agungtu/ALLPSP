import React from "react";
import Link from "next/link";
import Footer from "../../../components/Branch/Footer";
import BranchContent from "../../../components/Branch/BranchContent";

const branch = () => {
  let data = {
    product: {
      availabilityStatus: "Low Stock",
      brand: "Essence",
      category: "beauty",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      dimensions: { depth: 28.01, height: 14.43, width: 23.17 },
      discountPercentage: 7.17,
      id: 1,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      meta: {
        barcode: "9164035109868",
        createdAt: "2024-05-23T08:56:21.618Z",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
        updatedAt: "2024-05-23T08:56:21.618Z",
      },
      minimumOrderQuantity: 24,
      price: 9.99,
      rating: 4.94,
      returnPolicy: "30 days return policy",
      reviews: [
        {
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          rating: 2,
          reviewerEmail: "john.doe@x.dummyjson.com",
          reviewerName: "John Doe",
        },
        {
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          rating: 2,
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
          reviewerName: "Nolan Gonzalez",
        },
        {
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          rating: 5,
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
          reviewerName: "Scarlett Wright",
        },
      ],
      shippingInformation: "Ships in 1 month",
      sku: "RCH45Q1A",
      stock: 5,
      tags: ["beauty", "mascara"],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      title: "Essence Mascara Lash Princess",
      warrantyInformation: "1 month warranty",
      weight: 2,
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
      userId: 121,
      views: 305,
      comments: [
        {
          body: "These are fabulous ideas!",
          id: 93,
          likes: 7,
          postId: 1,
          user: { fullName: "Leah Gutierrez", id: 190, username: "leahw" },
        },
        {
          body: "You are a symbol of beauty.",
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
                <Link href="/" className="logo">
                  User
                </Link>
                <h2 className="banner-title">User page</h2>
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
        <div className="container">User</div>
      </section>

      <Footer />
    </>
  );
};

export default branch;
