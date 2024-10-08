import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../../../../components/Common/Footer";
import { useParams, useRouter } from "next/navigation";

const DetailCart = () => {
  const router = useRouter();
  const params = useParams();
  const [data, setData] = useState();
  // console.log(params);

  const getById = () => {
    fetch(`https://dummyjson.com/cart/${params?.id}`)
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        console.log(val);
        setData(val);
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
                  Detail Product
                </Link>
                <h2 className="banner-title">Detail Product page</h2>
              </div>

              <div className="col-6 text-end">
                <Link href="/blog/branch/" className="nav-text">
                  Detail Product
                </Link>
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/august-week-3/example/">Product</Link>
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
            className="btn btn-secondary"
            onClick={() => router.push("/august-week-3/example")}
          >
            Back
          </button>
          <div class="row col">
            <h1>Detail Cart</h1>
            <hr />
            <table className="table table-bordered table-hover">
              <tr>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Harga</th>
                <th>Diskon</th>
                <th>Harga Total</th>
              </tr>
              {data &&
                data.products &&
                data.products.map((data) => (
                  <tr>
                    <td>
                      <img
                        className=""
                        style={{
                          width: "100px",
                          height: "100px",
                          background: "gray",
                        }}
                        src={data.thumbnail}
                        alt="Card image cap"
                      ></img>
                    </td>
                    <td>{data.title}</td>
                    <td>
                      {new Intl.NumberFormat("en-IN", {
                        maximumSignificantDigits: 3,
                        style: "currency",
                        currency: "USD",
                      }).format(data.price)}
                    </td>
                    <td>{data.quantity}</td>
                    <td>
                      {new Intl.NumberFormat("en-IN", {
                        maximumSignificantDigits: 3,
                        style: "currency",
                        currency: "USD",
                      }).format(data.total)}
                    </td>
                    <td>{data.discountPercentage}%</td>
                    <td>
                      {new Intl.NumberFormat("en-IN", {
                        maximumSignificantDigits: 3,
                        style: "currency",
                        currency: "USD",
                      }).format(data.discountedTotal)}
                    </td>
                  </tr>
                ))}
              <tr>
                <th colSpan={6} className="text-end">
                  Harga Total
                </th>
                <th>
                  {new Intl.NumberFormat("en-IN", {
                    maximumSignificantDigits: 3,
                    style: "currency",
                    currency: "USD",
                  }).format(data?.discountedTotal)}
                </th>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DetailCart;
