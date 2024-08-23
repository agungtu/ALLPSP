import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../../../../components/Common/Footer";
import { useParams, useRouter } from "next/navigation";

const DetailCart = () => {
  const router = useRouter();
  const params = useParams();
  // const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  // console.log(params);

  const getById = () => {
    fetch(`https://dummyjson.com/posts/${params?.id}`)
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        console.log(val);
        setPosts(val);
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
                    <Link href="/august-week-3/post/">Product</Link>
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
            onClick={() => router.push("/august-week-3/post")}
          >
            Back
          </button>
          <div class="row col">
            <h1>Detail Post</h1>
            <hr />
            <table className="table table-bordered table-hover">
              <tr>
                <th>Title</th>
                <th>Body</th>
              </tr>
              {posts && (
              <tr>
                  <td style={{ color: "green" }}>{posts.title}</td>
                  <td style={{ color: "red" }}>{posts.body}</td>
                  </tr>
                //  ))
              )};
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DetailCart;
