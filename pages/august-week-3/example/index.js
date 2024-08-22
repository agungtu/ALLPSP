import React, { useState } from "react";
import Link from "next/link";
import Footer from "../../../components/Common/Footer";
// import styles from "./Example.module.css";
import { useRouter } from "next/navigation";

const Example = () => {
  const router = useRouter();
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
    await fetch("https://dummyjson.com/users/6/carts")
      .then((res) => {
        console.log(res, "res");
        return res.json();
      })
      .then((val) => {
        console.log(val, "val");
        setStoreDataAll(val.carts);
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
                <Link href="/blog/branch/" className="nav-text">
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
      <section>
        <div className="container">
          <div class="row col">
            <h1>Cart</h1>
            {/* <button className='my-button' onClick={() => getDescription()}>description 2</button>
            <button className='my-button' onClick={() => getDescription2()}>description 3</button>
            <button className='my-button' onClick={() => getDescription3()}>
              description asynchronous
            </button> */}
            {/* <button className='my-button' onClick={() => getData()}>get data</button>
            <h2 id="nama"></h2>
            <h2 id="nama2"></h2>
            <div>
              {storeData.reviews?.map((item) => (
                <>
                  <p>nama : {item.reviewerName}</p>
                  <p>{item.comment}</p>
                </>
              ))}
            </div> */}
            <button className="btn btn-warning" onClick={() => getAllData()}>
              get all data
            </button>
            <table>
              {storeDataAll.map((item, index) => {
                return (
                  <tr key={item.title}>
                    <td>
                      <img width={25} src={item.thumbnail}></img>
                    </td>
                    <td>{index + 1}</td>
                    <td>{item.totalProducts} product</td>
                    <td>
                      {new Intl.NumberFormat("en-IN", {
                        maximumSignificantDigits: 3,
                        style: "currency",
                        currency: "USD",
                      }).format(item.discountedTotal)}
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() =>
                          router.push("/august-week-3/example/" + item.id)
                        }
                      >
                        detail
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
            <div hidden>
              <h2>TODO LIST</h2>
              <input
                type="text"
                value={inputData}
                onChange={(event) => {
                  setInputData(event.target.value);
                }}
              ></input>{" "}
              <button className="btn btn-warning" onClick={() => saveTodo()}>
                Save
              </button>
              <button className="btn btn-warning" onClick={saveTodo}>
                Save 2
              </button>
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

export default Example;
