import React, { useEffect, useState } from "react";
import Link from "next/link";
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
    await fetch("https://dummyjson.com/posts")
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
                  Post
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
        <div className="container">
          <button onClick={() => getData()}>PROFILE</button>
          {userData && (
            <ul>
              <li>Id: {userData.id}</li>
              <li>
                Name:{userData.firstName} {userData.lastName}
              </li>
              <li>Email: {userData.email}</li>
              
            </ul>
          )}
          <button onClick={() => getAllData()}>Posts</button>
          <table>
            {posts.map((item) => {
              return (
                <tr key={item}>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              )
            })}
          </table>
          {/* <li
            style={{
            cursor: "pointer",
            textDecoration:
            item.title === "title" ? "line-through" : "body",
            color: item.title === "title" ? "green" : "red",
            userSelect: "body",
           }}
              >
                {item.title}
               </li> */}
         </div>
      </section>


      <Footer />
    </>
  );
};

export default Branch;