import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../../../components/Common/Footer";
import { useRouter } from "next/navigation";

const Branch = () => {
  const router = useRouter();
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
      
     `https://dummyjson.com/todos?limit=10&skip=0`

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

      <section className="content-section" style={{ backgroundColor: "#FEFCF3" }}>
        <div className="container"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="100"
        >

          <h2 style={{ textAlign: "center", color: "#B06161" }}> Profil</h2>
          <div className="container ">
            <div class="row">
              <div class="col">
                <img width={260} style={{ borderRadius: "25px" }} src="/images/hoshii.jpg"></img>
              </div>
              <div className="col">
                <div class="border border-success p-2 mb-2 border-opacity-50" style={{ backgroundColor: "#FFFF" }}>

                  <b style={{ color: "#EF9C66" }}>
                    <dt>Id: {userData.id}</dt>
                    <dt>
                      Name: {userData.firstName} {userData.lastName}
                    </dt>
                    <dt>Email: {userData.email}</dt>
                    <dt>Phone: {userData.phone}</dt>
                    <dt>birthDate: {userData.birthDate}</dt>
                  </b>

                  <button class="btn btn-warning" onClick={() => getData()} style={{ color: "#FFFF" }}>Profil</button>
                </div>
              </div>
            </div>
          </div>


          <h2 style={{ textAlign: "center", color: "#B06161" }}>Daftar Tugas Saya</h2>
          <div class="container">
            <div class="row ">
              <div class="col">
                <button class="btn btn-warning" onClick={() => getAllData()} style={{ color: "#FFFF" }}>Show All</button>
              </div>
              <div class="col">
                <table className="border border-success p-2 mb-2 border-opacity-50" >
                  {todosData.map((item) => {
                    return (
                      <tr key={item}>
                        <td>{item.todo} </td>
                        <td>
                      <button
                        className="btn btn-warning" style={{color: "white"}}
                        onClick={() =>
                          router.push("/august-week-3/ToDo/" + item.id)
                        }
                      >
                        detail
                      </button>
                    </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Branch;