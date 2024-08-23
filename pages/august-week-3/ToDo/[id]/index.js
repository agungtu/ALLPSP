import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../../../../components/Common/Footer";
import { useParams, useRouter } from "next/navigation";

const DetailTodos = () => {
  const router = useRouter();
  const params = useParams();
  const [todosData, setTodosData] = useState([]);
  // console.log(params);

  const getById = () => {

    fetch(`https://dummyjson.com/todos/${params?.id}`)
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        console.log(val);
        setTodosData(val);
      });
  };

  // console.log(getById());

  useEffect(() => {
    if (params?.id) getById();
  }, [params?.id]);
  return (
    <>
      <section className="top-banner-area">
        <div className="container">
          <div className="header">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <Link href="/" className="logo">
                  Detail Tugas
                </Link>
                <h2 className="banner-title">ToDos</h2>
              </div>

              <div className="col-6 text-end">
                <Link href="/blog/branch/" className="nav-text">
                  Detail Tugas
                </Link>
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>

                    <Link href="/august-week-3/ToDo">ToDos</Link>
                  </li>
                  <li className="active">Detail</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <button
            className="btn btn-warning" style={{color: "white"}}
            onClick={() => router.push("/august-week-3/ToDo")}
          >
            Back
          </button>
          <div class="row col">
          <h2 style={{ textAlign: "center", color: "#B06161" }}>Detail ToDos</h2>

            <table className="table table-bordered table-hover">
              <tr>
                <th>id</th>
                <th>UserId</th>
                <th>Todo</th>
              </tr>
              {todosData && (
                <tr>

                  <td>{todosData.id} </td>
                  <td>{todosData.userId}</td>
                  <td
                    style={{
                      textDecoration: todosData.completed ? "line-through" : "none",
                      color: todosData.completed ? "green" : "red",
                    }}>{todosData.todo}</td>
                </tr>
              )}
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailTodos;
