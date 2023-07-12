import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/Home.css";
const Home = () => {
  return (
    <>
      <Navigation />
      <section className="blog-listing gray-bg">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 m-15px-tb">
              <div className="row">
                <div className="container mt-100 mt-60">
                  <div className="row">
                    <div className="col-12 text-center">
                      <div className="section-title mb-4 pb-2 blog-intro">
                        <h4 className="title mb-4">Chào Mừng Bạn Đến Với Trang Chủ</h4>
                        <p className=" para-desc mx-auto mb-0 text-white">
                          Nơi Đây là nơi hiển thị bài viết,tin nhiều bất tận.Nó sẽ cung cấp rất nhiều kiến thức cũng như cho bạn biết nhiều điều thú vị.Hãy khám phá ngay!
                        </p>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                  <div className="row">
                    <div className="col-lg-12 col-md-6 mt-4 pt-2">
                      <div className="blog-post rounded border">
                        <div className="blog-img d-block overflow-hidden position-relative">
                          <img
                            src="https://www.bootdey.com/image/350x280/FF7F50/000000"
                            className="img-fluid rounded-top"
                            alt=""
                          />
                          <div className="overlay rounded-top bg-dark" />
                          
                        </div>
                        <div className="content p-3">
                          <small className="text-muted p float-right">
                            19th Oct, 19
                          </small>
                          <small>
                            <a
                              href="javascript:void(0)"
                              className="text-primary"
                            >
                              Marketing
                            </a>
                          </small>
                          <h4 className="mt-2">
                            <a
                              href="javascript:void(0)"
                              className="text-dark title"
                            >
                              Quick guide on business with friends.
                            </a>
                          </h4>
                          <p className="text-muted mt-2">
                            There is now an abundance of readable dummy texts.
                            These are usually used when a text is required
                            purely to fill a space.
                          </p>
                          <div className="pt-3 mt-3 border-top d-flex">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar2.png"
                              className="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow"
                              alt=""
                            />
                            <div className="author mt-2">
                              <h6 className="mb-0">
                                <a
                                  href="javascript:void(0)"
                                  className="text-dark name"
                                >
                                  Lisa Marvel
                                </a>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end blog post*/}
                    </div>
                    {/*end col*/}
                    <div className="col-lg-12 col-md-6 mt-4 pt-2">
                      <div className="blog-post rounded border">
                        <div className="blog-img d-block overflow-hidden position-relative">
                          <img
                            src="https://www.bootdey.com/image/350x280/6495ED/000000"
                            className="img-fluid rounded-top"
                            alt=""
                          />
                          <div className="overlay rounded-top bg-dark" />
                          <div className="post-meta">
                            <a
                              href="javascript:void(0)"
                              className="text-light d-block text-right like"
                            >
                              <i className="mdi mdi-heart" /> 33
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="text-light read-more"
                            >
                              Read More <i className="mdi mdi-chevron-right" />
                            </a>
                          </div>
                        </div>
                        <div className="content p-3">
                          <small className="text-muted p float-right">
                            19th Oct, 19
                          </small>
                          <small>
                            <a
                              href="javascript:void(0)"
                              className="text-primary"
                            >
                              Event
                            </a>
                          </small>
                          <h4 className="mt-2">
                            <a
                              href="javascript:void(0)"
                              className="text-dark title"
                            >
                              Become more money-minded
                            </a>
                          </h4>
                          <p className="text-muted mt-2">
                            There is now an abundance of readable dummy texts.
                            These are usually used when a text is required
                            purely to fill a space.
                          </p>
                          <div className="pt-3 mt-3 border-top d-flex">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar6.png"
                              className="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow"
                              alt=""
                            />
                            <div className="author mt-2">
                              <h6 className="mb-0">
                                <a
                                  href="javascript:void(0)"
                                  className="text-dark name"
                                >
                                  Joya Aafri
                                </a>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end blog post*/}
                    </div>
                    {/*end col*/}
                    <div className="col-lg-12 col-md-6 mt-4 pt-2">
                      <div className="blog-post rounded border">
                        <div className="blog-img d-block overflow-hidden position-relative">
                          <img
                            src="https://www.bootdey.com/image/350x280/FF1493/000000"
                            className="img-fluid rounded-top"
                            alt=""
                          />
                          <div className="overlay rounded-top bg-dark" />
                          <div className="post-meta">
                            <a
                              href="javascript:void(0)"
                              className="text-light d-block text-right like"
                            >
                              <i className="mdi mdi-heart" /> 33
                            </a>
                            <a
                              href="javascript:void(0)"
                              className="text-light read-more"
                            >
                              Read More <i className="mdi mdi-chevron-right" />
                            </a>
                          </div>
                        </div>
                        <div className="content p-3">
                          <small className="text-muted p float-right">
                            19th Oct, 19
                          </small>
                          <small>
                            <a
                              href="javascript:void(0)"
                              className="text-primary"
                            >
                              Software
                            </a>
                          </small>
                          <h4 className="mt-2">
                            <a
                              href="javascript:void(0)"
                              className="text-dark title"
                            >
                              Quick guide on business with friends.
                            </a>
                          </h4>
                          <p className="text-muted mt-2">
                            There is now an abundance of readable dummy texts.
                            These are usually used when a text is required
                            purely to fill a space.
                          </p>
                          <div className="pt-3 mt-3 border-top d-flex">
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              className="img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow"
                              alt=""
                            />
                            <div className="author mt-2">
                              <h6 className="mb-0">
                                <a
                                  href="javascript:void(0)"
                                  className="text-dark name"
                                >
                                  Martin Sobhe
                                </a>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end blog post*/}
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </div>

                <div className="col-12">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex={-1}>
                        <i className="fas fa-chevron-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2 <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 m-15px-tb blog-aside">
              {/* Trending Post */}
              <div className="widget widget-post">
                <div className="widget-title">
                  <h3>Trending Now</h3>
                </div>
                <div className="widget-body"></div>
              </div>
              {/* End Trending Post */}
              {/* Latest Post */}
              <div className="widget widget-latest-post">
                <div className="widget-title">
                  <h3>Latest Post</h3>
                </div>
                <div className="widget-body">
                  <div className="latest-post-aside media">
                    <div className="lpa-left media-body">
                      <div className="lpa-title">
                        <h5>
                          <a href="#">
                            Prevent 75% of visitors from google analytics
                          </a>
                        </h5>
                      </div>
                      <div className="lpa-meta">
                        <a className="name" href="#">
                          Rachel Roth
                        </a>
                        <a className="date" href="#">
                          26 FEB 2020
                        </a>
                      </div>
                    </div>
                    <div className="lpa-right">
                      <a href="#">
                        <img
                          src="https://www.bootdey.com/image/400x200/E6E6FA/000000"
                          title=""
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-left media-body">
                      <div className="lpa-title">
                        <h5>
                          <a href="#">
                            Prevent 75% of visitors from google analytics
                          </a>
                        </h5>
                      </div>
                      <div className="lpa-meta">
                        <a className="name" href="#">
                          Rachel Roth
                        </a>
                        <a className="date" href="#">
                          26 FEB 2020
                        </a>
                      </div>
                    </div>
                    <div className="lpa-right">
                      <a href="#">
                        <img
                          src="https://www.bootdey.com/image/400x200/FFA07A/000000"
                          title=""
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-left media-body">
                      <div className="lpa-title">
                        <h5>
                          <a href="#">
                            Prevent 75% of visitors from google analytics
                          </a>
                        </h5>
                      </div>
                      <div className="lpa-meta">
                        <a className="name" href="#">
                          Rachel Roth
                        </a>
                        <a className="date" href="#">
                          26 FEB 2020
                        </a>
                      </div>
                    </div>
                    <div className="lpa-right">
                      <a href="#">
                        <img
                          src="https://www.bootdey.com/image/400x200/FFF0F5/000000"
                          title=""
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Latest Post */}
              {/* widget Tags */}
              <div className="widget widget-tags">
                <div className="widget-title">
                  <h3>Latest Tags</h3>
                </div>
                <div className="widget-body">
                  <div className="nav tag-cloud">
                    <a href="#">Design</a>
                    <a href="#">Development</a>
                    <a href="#">Travel</a>
                    <a href="#">Web Design</a>
                    <a href="#">Marketing</a>
                    <a href="#">Research</a>
                    <a href="#">Managment</a>
                  </div>
                </div>
              </div>
              {/* End widget Tags */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Home;
