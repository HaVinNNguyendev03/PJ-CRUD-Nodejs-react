import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../styles/Profile.css'
import { faCircleUser  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Profile = () => {
  return (
    <div>
      <Navigation />
      <section className="h-100 gradient-custom-2 ">
      <h3 class="m-b-50 m-3 text-left heading-line">Trang Cá Nhân <FontAwesomeIcon icon={faCircleUser} /></h3>
        <div className="container py-1 h-100">
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
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: "150px", zIndex: 1 }}
                    />
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <h5>Phúc Nguyễn</h5>
                  </div>
                </div>

                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-between text-center py-1">
                    <div class="d-flex justify-content-end text-center py-1">
                      <div>
                        <p class="mb-1 h5">253</p>
                        <p class="small text-muted mb-0">Bài Viết</p>
                      </div>
                      <div class="px-3">
                        <p class="mb-1 h5">1026</p>
                        <p class="small text-muted mb-0">Theo Dõi</p>
                      </div>
                      <div>
                        <p class="mb-1 h5">478</p>
                        <p class="small text-muted mb-0">Yêu Thích</p>
                      </div>
                    </div>
                    <div> 
                      <button
                      type="button"
                      className="btn btn-outline-dark mx-1"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: 1 }}
                    >
                      Đăng Xuất
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: 1 }}
                    >
                      Chỉnh Sửa
                    </button>
                    </div>
                   
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Thông Tin Mô Tả</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <p className="font-italic mb-1">Web Developer</p>
                      <p className="font-italic mb-1">Sống tại Quảng Ngãi</p>
                      <p className="font-italic mb-0">Lập Trình Viên</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Bài Viết</p>
                    <p className="mb-0">
                      <a href="#!" className="text-muted">
                        Tất Cả
                      </a>
                    </p>
                  </div>
                  <div className="row g-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Profile;
