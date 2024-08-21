import React, { useState } from "react";
import Link from "next/link";
import Footer from "../../../components/Common/Footer";

const Branch = () => {
  const [userData, setUserData] = useState({});
  const [produkData, setProdukData] = useState([]);

  const getData = async () => {
    await fetch("https://dummyjson.com/users/69")
      .then((res) => res.json())
      .then((val) => {
        setUserData(val);
      });
  };

  const getAllData = async () => {
    await fetch(
      "https://dummyjson.com/products?limit=20&skip=80&select=title,price"
    )
      .then((res) => res.json())
      .then((val) => {
        setProdukData(val.products);
      });
  };

  return (
    <>
      <section className="top-banner-area">
        <div className="container">
          <div className="header">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <Link href="/" className="logo">
                  Cart
                </Link>
                <h2 className="banner-title">Cart page</h2>
              </div>

              <div className="col-6 text-end">
                <Link href="/august-week-3/cart" className="nav-text">
                  Cart
                </Link>
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Cart</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img width={260} src={"/images/🐐_.jpg"}></img>
            </div>
            
            <div className="col-md-6 border-cart">
            <h3>Profile</h3>
              <button className="cart-button" onClick={() => getData()}>
                Show Profile
              </button>
              
              {userData && (
                <ul>
                  <li>Id: {userData.id}</li>
                  <li>
                    Name: {userData.firstName} {userData.lastName}
                  </li>
                  <li>Email: {userData.email}</li>
                  <li>Phone: {userData.phone}</li>
                  <li>birthDate: {userData.birthDate}</li>
                  <li>Gender: {userData.gender}</li>
                  <li>Height: {userData.height}</li>
                  <li>Weight: {userData.weight}</li>
                </ul>
              )}
            </div>

            <div className="col-md-4">
              <button className="cart-button" onClick={() => getAllData()}>
                Show Products
              </button>
            </div>
            <div className="col-md-6 border-cart">
              <h3>Produk</h3>
              <table className="table-cart">
                {produkData.map((produk, index) => (
                  <tr key={index}>
                    <td>{produk.id}</td> <td>{produk.title}</td>
                    <td>${produk.price}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Branch;
