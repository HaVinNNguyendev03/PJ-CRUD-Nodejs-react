import React from "react";

const Footer = () => {
  return (
    <div className="container my-3">
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#3f51b5" }}
      >
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="text-white">
                    Nội Quy
                  </a>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="text-white">
                    Thông Tin 
                  </a>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="text-white">
                    Giúp Đỡ
                  </a>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="text-white">
                    Liên Hệ
                  </a>
                </h6>
              </div>
            </div>
          </section>
          <hr className="my-1" />
          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                  Xin Chào!Tôi là người lập trình ra trang phucblog.Cảm ơn mọi người đã ghé thăm,nơi đây sẽ cung cấp cho mọi người những thông tin 
                  bổ ích nhất và nó hoàn toàn miễn phí,chỉ tốn thời gian của mọi người thôi.Hãy đăng ký để khám phá nhiều chức năng của trang hơn!
                </p>
              </div>
            </div>
          </section>
          <section className="text-center mb-5">
            <a href className="text-white me-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-twitter" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-google" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-instagram" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-linkedin" />
            </a>
            <a href className="text-white me-4">
              <i className="fab fa-github" />
            </a>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
         Tham khảo từ:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
