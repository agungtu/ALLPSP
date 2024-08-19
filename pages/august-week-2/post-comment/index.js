import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/Common/Footer";
import BranchContent from "../../../components/Branch/BranchContent";

const branch = () => {
  const namaorg = {
    satu: "Salwa Aulia",
    dua: "Fauzi Saputra",
    tiga: "Putri Zalova",
    empat: "Helena Hernandez",
  }
  const judul = "FESS BAKERY"
  const deskripsi = {
    suka: "saya, fauzi, putri dan 1058 lainya",
    comment: "3 comment",
    share: "2 shares",
    likereply: "Like . Reply",
    reply: "Reply",
    likereply2: "Like . Reply",
  }
  const hari = {
    pertama: "5 hari lalu",
    kedua: "4 hari lalu",
    ketiga: "4 hari lalu",
    keempat: "2 hari lalu",
    kelima: "1 hari lalu",
  }
  const text = { 
    komen1: " Setiap kali saya mencoba roti dari sini, saya selalu terkesan dengan kualitas dan rasanya. Teksturnya sempurna dan selalu fresh. Tempat ini benar-benar favorit saya! ❤",
    komen2: "Stafnya sangat ramah dan selalu menyambut dengan senyuman. Mereka juga cepat dalam melayani, sehingga saya tidak pernah perlu menunggu lama 😉🤞",
    komen3: "Roti di sini benar-benar berkualitas tinggi, tapi harganya masih sangat terjangkau. Saya merasa mendapatkan lebih dari yang saya bayar. Pasti akan kembali lagi 🙌",
    komen4: "Saya suka disini ada berbagai macam roti mulai dari roti manis hingga roti gurih. Setiap datang, saya selalu menemukan sesuatu yang baru untuk dicoba. Rekomendasi banget 😊",
    komen5: "Thanks!! 😍",
  }

  let data = {
    product: {
      availabilityStatus: "In Stock",
      brand: "Glamour Beauty",
      category: "beauty",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      dimensions: {
        depth: 29.13,
        height: 8.63,
        width: 12.42,
      },
      discountPercentage: 5.5,
      id: 2,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
      meta: {
        barcode: "2817839095220",
        createdAt: "2024-05-23T08:56:21.618Z",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
        updatedAt: "2024-05-23T08:56:21.618Z",
      },
      minimumOrderQuantity: 32,
      price: 19.99,
      rating: 3.28,
      returnPolicy: "30 days return policy",
      reviews: [
        {
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          rating: 4,
          reviewerEmail: "liam.garcia@x.dummyjson.com",
          reviewerName: "Liam Garcia",
        },
        {
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.618Z",
          rating: 1,
          reviewerEmail: "nora.russell@x.dummyjson.com",
          reviewerName: "Nora Russell",
        },
        {
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          rating: 5,
          reviewerEmail: "elena.baker@x.dummyjson.com",
          reviewerName: "Elena Baker",
        },
      ],
      shippingInformation: "Ships in 2 weeks",
      sku: "MVCFH27F",
      stock: 44,
      tags: ["beauty", "eyeshadow"],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
      title: "Eyeshadow Palette with Mirror",
      warrantyInformation: "1 year warranty",
      weight: 3,
    },
    user: {
      address: {
        address: "626 Main Street",
        city: "Phoenix",
        country: "United States",
        postalCode: "29112",
        state: "Mississippi",
        stateCode: "MS",
      },
      age: 28,
      bank: {
        cardExpire: "03/26",
        cardNumber: "9289760655481815",
        cardType: "Elo",
        currency: "CNY",
        iban: "YPUXISOBI7TTHPK2BR3HAIXL",
      },
      birthDate: "1996-5-30",
      bloodGroup: "O-",
      company: {
        department: "Engineering",
        name: "Dooley, Kozey and Cronin",
        title: "Sales Manager",
      },
      crypto: {
        coin: "Bitcoin",
        network: "Ethereum (ERC20)",
        wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
      },
      ein: "977-175",
      email: "emily.johnson@x.dummyjson.com",
      eyeColor: "Green",
      firstName: "Emily",
      gender: "female",
      hair: { color: "Brown", type: "Curly" },
      height: 193.24,
      id: 1,
      image: "https://dummyjson.com/icon/emilys/128",
      ip: "42.48.100.32",
      lastName: "Johnson",
      macAddress: "47:fa:41:18:ec:eb",
      maidenName: "Smith",
      password: "emilyspass",
      phone: "+81 965-431-3024",
      role: "admin",
      ssn: "900-590-289",
      university: "University of Wisconsin--Madison",
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
      username: "emilys",
      weight: 63.16,
    },
    postComment: {
      body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      id: 1,
      reactions: { dislikes: 25, likes: 192 },
      tags: ["history", "american", "crime"],
      title: "His mother had always taught him",
      image: "https://dummyjson.com/icon/avahx/128",
      username: "avahx",
      userId: 121,
      views: 305,
      comments: [
        {
          body: "These are fabulous ideas!",
          image: "https://dummyjson.com/icon/emilys/128",
          id: 93,
          likes: 7,
          postId: 1,
          user: { fullName: "Leah Gutierrez", id: 190, username: "leahw" },
        },
        {
          body: "You are a symbol of beauty.",
          image: "https://dummyjson.com/icon/michaelw/128",
          id: 107,
          likes: 7,
          postId: 1,
          user: {
            fullName: "Jackson Morales",
            id: 131,
            username: "jacksonm",
          },
        },
        {
          body: "Your eyes are like stars.",
          image: "https://dummyjson.com/icon/sophiab/128",
          id: 209,
          likes: 10,
          postId: 1,
          user: { fullName: "Miles Stevenson", id: 95, username: "miless" },
        },
      ],
    },
  };
  return (
    <>
      <section className="top-banner-area">
        <div className="container">
          <div className="header">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <Link href="/" className="logo">
                  Post Comment
                </Link>
                <h2 className="banner-title">Post & comment page</h2>
              </div>

              <div className="col-6 text-end">
                <Link href="/blog/branch/" className="nav-text">
                  Post Comment
                </Link>
                <ol className="breadcrumb">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Post Comment</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>

        <div className="post-container">
          <div className="post-header">
            <img src="/images/avatar/user.avatar.jfif" alt="User avatar" className="avatar" />
            <div className="post-info">
              <h4>{namaorg.satu}</h4>
              <span>{hari.pertama}</span>
               </div>
          </div>
        <div className="post-content">
          <p>
         {text.komen1}
          </p>
        </div>
        <div className="post-actions">
          <span>&#128077;</span>
          <span>&#128172;</span>
          < span>&#128256;</span>
          <span className="like-count">{deskripsi.suka}</span>
          <span className="comment-count">{deskripsi.comment}</span>
          <span className="share-count">{deskripsi.share}</span>
        </div>
        <div className="comments-section">
          <div className="comment">
            <img src="/images/avatar/fauzi.avatar.jfif" alt="tony avatar" className="comment-avatar" />
            <div className="comment-text">
              <h5>{namaorg.dua}</h5>
              <span>{hari.kedua}</span>
              <p>{text.komen2}</p>
              <button className="comment-reply">{deskripsi.likereply}</button>
            </div>
          </div>
          <div className="comment">
            <img src="/images/avatar/putri.avatar.jfif" alt="leah avatar" className="comment-avatar" />
            <div className="comment-text">
              <h5>{namaorg.tiga}</h5>
              <span>{hari.ketiga}</span>
              <p>{text.komen3}</p>
              <button className="comment-reply">{deskripsi.reply}</button>
            </div>
          </div>
          <div className="comment reply-comment">
            <img src="/images/avatar/helena.avatar.jfif" alt="Helena Avatar" className="comment-avatar" />
            <div className="comment-text">
              <h5>{namaorg.empat}</h5>
              <span>{hari.keempat}</span>
              <p>{text.komen4}</p>
              <button className="comment-reply">{deskripsi.likereply2}</button>
              <div className="reply">
                <h6>{judul}</h6>
                <span>{hari.kelima}</span>
                <p>{text.komen5}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="comment-input">
          <img src="/images/avatar/simple.avatar.jfif" alt="User Avatar" className="comment-avatar" />
          <input type="text" placeholder="Write a comment...                                                                                                                          😀   📷"/>
        </div>
        </div>
      </section>

      <style jsx>{`
      .post-container {
        width: 100%;
        max-width: 800px; 
        margin: 100px auto;
        padding: 30px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
      
      .post-header {
        display: flex;
        align-items: center;
      }
      
      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 15px;        
      }
      
      .post-info h4 {
        margin: 0;
        font-size: 20px; 
      }
      
      .post-info span {
        font-size: 14px;
        color: #888;
      }
      
      .post-content {
        margin: 15px 0; 
      }
      
      .post-content p {
        margin: 0;
        font-size: 16px; 
      }
      
      .hastag {
        color: #007bff;
      }
      
      .post-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 15px;
        font-size: 14px;
        flex-wrap: wrap;
      }
      
      .action-button {
        font-size: 14px; 
        margin-right: 15px; 
        margin-bottom: 10px;
      }
      
      .like-count,
      .comment-count,
      .share-count {
        margin-top: 10px;
        font-size: 14px; 
      }
      
      .comments-section {
        margin-top: 20px; 
      }
      
      .comment {
        display: flex;
        align-items: flex-start;
        margin-bottom: 15px;
      }
      
      .comment-avatar {
        width: 40px; 
        height: 40px;
        border-radius: 50%;
        margin-right: 15px;
      }
      
      .comment-text {
        background: #f9f9f9;
        padding: 15px; 
        border-radius: 10px;
        width: 100%;
      }
      
      .comment-text h5 {
        margin: 0 0 8px;
        font-size: 16px; 
      }
      
      .comment-text span {
        font-size: 12px; 
        color: #888;
      }
      
      .comment-text p {
        margin: 8px 0;
        font-size: 14px; 
      }
      
      .comment-reply {
        font-size: 13px; 
        margin-top: 10px;
      }
      
      .reply-comment {
        margin-left: 50px; 
      }
      
      .reply {
        margin-top: 15px; 
        padding-left: 15px; 
        border-left: 3px solid #ddd; 
      }
      
      .reply h6 {
        margin: 0;
        font-size: 15px; 
      }
      
      .comment-input {
        display: flex;
        align-item: center;
        margin-top: 20px;
        border-top: 1px solid #ddd;
        padding-top: 15px;
      }
      
      .comment-input input {
        border: 1px solid #ddd;
        border-radius: 20px;
        padding: 8px 15px; 
        width: 100%;
        margin-left: 15px; 
      }
      
      @media screen and (max-width: 768px) {
        .post-actions {
          justify-content: center;
          text-align: center;
        }
      
        .action-button {
          margin-right: 10px;
        }
      
        .like-count,
        .comment-count,
        .share-count {
          font-size: 14px;
        }
      
        .comment {
          flex-direction: column;
          align-items: flex-start;
        }
      
        .reply-comment {
          margin-left: 30px;
        }
      
        .post-header {
          flex-direction: column;
          align-items: flex-start;
        }
      
        .post-info h4 {
          font-size: 18px;
        }
      
        .post-info span {
          font-size: 14px;
        }
      
        .comment-text h5 {
          font-size: 14px;
        }
      
        .comment-text p {
          font-size: 14px;
        }
      }
      
      @media screen and (max-width: 480px) {
        .post-container {
          padding: 20px;
        }
      
        .post-content p {
          font-size: 14px;
        }
      
        .comment-text h5 {
          font-size: 14px;
        }
      
        .comment-text p {
          font-size: 13px;
        }
      }
       `}</style>
      

      <Footer />
    </>
  );
};

export default branch;
