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
      "https://dummyjson.com/products?limit=30&skip=80&select=title,price"
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
          <button onClick={() => getData()}>PROFILE</button>
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
              <li>Address: {userData.address.address}</li>
              <li>City: {userData.address.city}</li>
              <li>State: {userData.address.state}</li>
            </ul>
          )}

          <button onClick={() => getAllData()}>Products</button>
          <table>
            <tr>
              <th>Id</th>
              <th>Produk</th>
              <th>Harga</th>
            </tr>
            {produkData.map((produk, index) => (
              <tr key={index}>
                <td>{produk.id}</td> <td>{produk.title}</td>
                <th>${produk.price}</th>
              </tr>
            ))}
          </table>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Branch;
