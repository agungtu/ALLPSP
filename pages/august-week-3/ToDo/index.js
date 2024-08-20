import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../../../components/Common/Footer";

const Branch = () => {
  const [userData, setUserData] = useState({});
  const [todosData, setTodosData] = useState([]);

  const getData = async () => {
    await fetch("https://dummyjson.com/users/4")
      .then((res) => res.json())
      .then((val) => {
        setUserData(val);
      });
  };

  const getAllData = async () => {
    await fetch(
      "https://dummyjson.com/todos"

    )
      .then((res) => res.json())
      .then((val) => {
        setTodosData(val.todos);
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
                <h2 className="banner-title">Todos</h2>
              </div>

              <div className="col-6 text-end">
                <Link href="/august-week-3/cart" className="nav-text">
                  Todos
                </Link>
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">To Do List</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" style={{backgroundColor : "#FEFCF3"}}>
        <div className="container"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="100"
        >
          <h2 style={{ textAlign: "center",  color : "#B06161", backgroundColor: "#FFF5E4"}}> Profil</h2>
          <button onClick={() => getData()}>Profil</button>
          {userData && (
            <ul>
              <li>Id: {userData.id}</li>
              <li>
                Name: {userData.firstName} {userData.lastName}
              </li>
              <li>Email: {userData.email}</li>
              <li>Phone: {userData.phone}</li>
              <li>birthDate: {userData.birthDate}</li>
            </ul>
          )}

          
            <h2 style={{ textAlign: "center",  color : "#B06161" , backgroundColor: "#FFF5E4"}}>My To Do List</h2>
          <div className="content">
            <button onClick={() => getAllData()}>Show All</button>
            <table>
              {todosData.map((item) => {
                return (
                  <tr key={item}>
                    <td style={{
                      textDecoration: item.completed ? 'line-through' : 'none',
                      color: item.completed ? 'green' : 'red'
                    }}>
                      {item.todo}
                    </td>

                  </tr>
                );
              })}
            </table>
          </div>
          </div>
        
      </section>

      <Footer />
    </>
  );
};

export default Branch;