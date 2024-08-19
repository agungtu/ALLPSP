import React, { useState } from "react";
import Link from "next/link";
import Footer from "../../../components/Common/Footer";

const branch = () => {
  const [storeData, setStoreData] = useState({});
  const [storeDataAll, setStoreDataAll] = useState([]);
  const [todoList, setTodoList] = useState([
    {
      title: "create project",
      status: "done",
    },
    {
      title: "setter getter variable",
      status: "done",
    },
    {
      title: "learn function",
      status: "undone",
    },
    {
      title: "fetch data",
      status: "undone",
    },
  ]);

  const [inputData, setInputData] = useState("");
  const [counter, setcounter] = useState(0);
  const saveTodo = () => {
    if (inputData == "") return;
    let dataTemporary = todoList;
    dataTemporary.push({
      title: inputData,
      status: "undone",
    });
    setTodoList(dataTemporary);
    setInputData("");
    setcounter(counter + 1);
  };

  const editTodo = (index) => {
    let dataTemporary = todoList;
    if (dataTemporary[index].status == "done") {
      dataTemporary[index].status = "undone";
    } else {
      dataTemporary[index].status = "done";
    }
    setTodoList(dataTemporary);
    setcounter(counter + 1);
  };
  function showName(name) {
    document.getElementById("nama").innerHTML = name;
    return name;
  }

  function hitungHarga(harga1, harga2) {
    document.getElementById("nama").innerHTML = harga1 + harga2;
  }

  function getDescription() {
    // document.getElementById("nama").innerHTML = data.product.description.kedua;
    a = 5 + 7;
  }

  const getDescription2 = () => {
    document.getElementById("nama2").innerHTML =
      data.product.description.ketiga;
  };

  const getDescription3 = async () => {
    document.getElementById("nama").innerHTML = data.product.description.kedua;
    setTimeout(() => {
      document.getElementById("nama2").innerHTML =
        data.product.description.ketiga;
    }, 3000);
  };

  const getData = async () => {
    await fetch("https://dummyjson.com/products/1")
      .then((res) => {
        console.log(res, "res");
        return res.json();
      })
      .then((val) => {
        setStoreData(val);
      });
  };

  const getAllData = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => {
        console.log(res, "res");
        return res.json();
      })
      .then((val) => {
        console.log(val, "val");
        setStoreDataAll(val.products);
        // setStoreData(val);
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
                  Example
                </Link>
                <h2 className="banner-title">Example page</h2>
              </div>

              <div className="col-6 text-end">
                <Link href="/blog/branch/" className="nav-text">
                  Example
                </Link>
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Example</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div class="row col">
            <h1>Example</h1>
            <button onClick={() => getDescription()}>description 2</button>
            <button onClick={() => getDescription2()}>description 3</button>
            <button onClick={() => getDescription3()}>
              description asynchronous
            </button>
            <button onClick={() => getData()}>get data</button>
            <h2 id="nama"></h2>
            <h2 id="nama2"></h2>
            <div>
              {storeData.reviews?.map((item) => (
                <>
                  <p>nama : {item.reviewerName}</p>
                  <p>{item.comment}</p>
                </>
              ))}
            </div>
            <button onClick={() => getAllData()}>get all data</button>
            <table>
              {storeDataAll.map((item) => {
                return (
                  <tr key={item.title}>
                    <td>
                      <img width={25} src={item.thumbnail}></img>
                    </td>
                    <td>{item.title}</td>
                  </tr>
                );
              })}
            </table>
            <div>
              <h2>TODO LIST</h2>
              <input
                type="text"
                value={inputData}
                onChange={(event) => {
                  setInputData(event.target.value);
                }}
              ></input>{" "}
              <button onClick={() => saveTodo()}>Save</button>
              <button onClick={saveTodo}>Save 2</button>
              <div>
                <ol>
                  {todoList.map((item, index) => {
                    return (
                      <li
                        key={item.title}
                        onClick={() => editTodo(index)}
                        style={{
                          cursor: "pointer",
                          textDecoration:
                            item.status === "done" ? "line-through" : "none",
                          color: item.status === "done" ? "green" : "red",
                          userSelect: "none",
                        }}
                      >
                        {item.title}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default branch;
