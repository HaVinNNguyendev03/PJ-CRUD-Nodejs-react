import React from "react";
import logo from '../Imgs/Logo.png'
import '../styles/Navigation.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse  } from '@fortawesome/free-solid-svg-icons';
import { faPager  } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare  } from '@fortawesome/free-solid-svg-icons';
import { faBell  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} alt="" width="70" height="70" class="rounded-circle" />
      <form className="form-inline col-7 col-md-6 col-xl-3 px-4 my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form> 
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto align-items-center ">
          <li className="nav-item px-2 active">
            <a className="nav-link font-family-700" href="#">
            <FontAwesomeIcon icon={faHouse} /> Trang Chủ <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item px-2 ">
            <a className="nav-link font-family-700" href="#">
            <FontAwesomeIcon icon={faPager} /> Bảng Tin
            </a>
          </li>
          <li className="nav-item px-2 ">
            <a className="nav-link font-family-700" href="#">
            <FontAwesomeIcon icon={faPenToSquare} /> Đăng Tin
            </a>
          </li>
          <li className="nav-item px-2 ">
            <a className="nav-link font-family-700" href="#">
            <FontAwesomeIcon icon={faBell} /> Thông Báo
            </a>
          </li>
          <li className="nav-item px-2 ">
            <a className="nav-link d-flex justify-content-center align-items-center " href="#">
            <img src={logo} alt="" width="50" height="50" class="rounded-circle" />
            <p className="mb-0 font-family-700">Phúc Nguyễn</p>
            </a>
          </li>
        </ul>
      </div> 
      
    </nav>
  );
};
export default Navigation;
