import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Common/Footer";

const Branch = () => {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);

  const getData = async () => {

    await fetch("https://dummyjson.com/users/3")
      .then((res) => res.json())
      .then((val) => {
        setUserData(val);
      });
  };

  const getAllData = async () => {
    await fetch("https://dummyjson.com/posts?limit=10&skip=10&select=title,body")
      .then((res) => res.json())
      .then((val) => {
        setPosts(val.posts);
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
                  To Do List
                </Link>
                <h2 className="banner-title">Post page</h2>
              </div>

              <div className="col-6 text-end">
                <Link href="/august-week-3/cart" className="nav-text">
                  Post
                </Link>
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Post</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div class="container ">
          <div class="row">
            <div class="col-4">
              <img src="/images/team/6.jpg" alt="salwa" width="300" height="300" style={{ borderRadius: "8px" }}></img>
            </div>
            <div class="col">
              <h3>Profil Saya</h3>
              <div className="border border-success p-2 mb-2 border-opacity-50 " style={{ backgroundColor: "#fdf5e6" }}>
                <button onClick={() => getData()} style={{ backgroundColor: "#ffefd5" }}>PROFIL</button>
                  <ul>
                    <li>Id: {userData.id}</li>
                    <li>
                      Name:{userData.firstName} {userData.lastName}
                    </li>
                    <li>Email: {userData.email}</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div class="container">
            <h3>Daftar Tugas Saya</h3>
            <div class="row">
              <div class="col-5">
                <button onClick={() => getAllData()} style={{ backgroundColor: "#ffefd5" }}>SHOW </button>
              </div>
              <div class="col card">
                <table>
                  {posts.map((item) => {
                    return (
                      <tr key={item}>
                        <td style={{ color: "green" }}>{item.title}</td>
                        <td style={{ color: "red" }}>{item.body}</td>
                      </tr>
                    )
                  })}
                </table>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Branch;