import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./ViewsCss.css";
import { Link } from "react-router-dom";
const User = () => {
  const [name, Setname] = useState('');
  const [img, Setimg] = useState('');
  const [info, Setinfo] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:9000/User", { withCredentials: true })
      .then((res) => {
        console.log(res.data.name);
        if (res.data.Status === "Success") {
          Setname(res.data.name);
          Setimg(res.data.img);
          Setinfo(res.data.info);
        }
      });
  });
  const handleLogout = () => {
    axios
      .get("http://localhost:9000/Logout", { withCredentials: true })
      .then((res) => {
        console.log(res);
        if (res.data.Status === "Success") {
          navigate("/");
        }
      });
  };
  return (
    <div>
      <Header />
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <img
                     src ={`http://localhost:9000/images/`+img}
                      alt="Generic placeholder"
                      className="img-fluid img-thumbnail mb-2"
                      style={{ width: "150px", zIndex: 1 }}
                    />
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <h5>{name}</h5>
                    <p>New York</p>
                  </div>
                </div>
                <div
                  className="p-4 text-black d-flex justify-content-end align-items-end"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <button
                    type="button"
                    className="btn btn-outline-dark me-2"
                    data-mdb-ripple-color="dark"
                    style={{ zIndex: 1 }}
                  >
                    <Link to=""></Link>
                  </button>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="btn btn-outline-dark "
                    data-mdb-ripple-color="dark"
                    style={{ zIndex: 1 }}
                  >
                    Đăng Xuất
                  </button>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Thông Tin Bản Thân</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <p className="font-italic mb-1">{info}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <p className="lead fw-normal mb-0">Bài Viết</p>
                    {/* <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p> */}
                  </div>
                  <div className="flex-column row g-2">
                    <div className="col mb-2">
                      <div className="container mt-5 mb-5">
                        <div className="row d-flex align-items-center justify-content-center">
                          <div className="col-md-12">
                            <div className="card">
                              <div className="d-flex justify-content-between p-2 px-3">
                                <div className="d-flex flex-row align-items-center">
                                  {" "}
                                  <img
                                    src="https://i.imgur.com/UXdKE3o.jpg"
                                    alt="5"
                                    width={50}
                                    className="rounded-circle"
                                  />
                                  <div className="d-flex flex-column ml-2">
                                    {" "}
                                    <span className="font-weight-bold">
                                      Jeanette Sun
                                    </span>
                                  </div>
                                </div>
                                <div className="d-flex flex-row mt-1 ellipsis">
                                  {" "}
                                  <small className="mr-2">20 mins</small>{" "}
                                  <i className="fa fa-ellipsis-h" />{" "}
                                </div>
                              </div>{" "}
                              <img
                                src="https://i.imgur.com/xhzhaGA.jpg"
                                alt="6"
                                className="img-fluid"
                              />
                              <div className="p-2">
                                <h3 className="text-justify">Tiêu Đề</h3>
                                <p className="text-justify">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt.
                                </p>
                                <div className="commenttt">
                                  {/* <hr /> */}
                                  {/* <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row icons d-flex align-items-center"> <i className="fa fa-heart" /> <i className="fa fa-smile-o ml-2" /> </div>
                  <div className="d-flex flex-row muted-color"> <span>2 comments</span> <span className="ml-2">Share</span> </div>
                </div> */}
                                  {/* <hr /> */}
                                  {/* <div className="comments">
                  <div className="d-flex flex-row mb-2"> <img src="https://i.imgur.com/9AZ2QX1.jpg" width={40} className="rounded-image" />
                    <div className="d-flex flex-column ml-2"> <span className="name">Daniel Frozer</span> <small className="comment-text">I like this alot! thanks alot</small>
                      <div className="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small> <small>Translate</small> <small>18 mins</small> </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row mb-2"> <img src="https://i.imgur.com/1YrCKa1.jpg" width={40} className="rounded-image" />
                    <div className="d-flex flex-column ml-2"> <span className="name">Elizabeth goodmen</span> <small className="comment-text">Thanks for sharing!</small>
                      <div className="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small> <small>Translate</small> <small>8 mins</small> </div>
                    </div>
                  </div>
                  <div className="comment-input"> <input type="text" className="form-control" />
                    <div className="fonts"> <i className="fa fa-camera" /> </div>
                  </div>
                </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default User;
