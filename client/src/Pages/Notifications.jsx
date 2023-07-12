import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../styles/Notifications.css'
import logo from '../Imgs/Logo.png'
import { faBell  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/App.css'
const Notifications = () => {
  return(
   <>
   <Navigation/>
   <div>

   <h3 class="m-b-50 m-3 text-left font-family-600 heading-line f-24">Trang Thông Báo <FontAwesomeIcon icon={faBell} /></h3>
    <section class="py-1">
    <div class="container">
        <div class="notification-ui_dd-content text-left">
            <div class="notification-list notification-list--unread">
                <div class="notification-list_content">
                    <div class="notification-list_img">
                        <img src={logo} alt="user"/>
                    </div>
                    <div class="notification-list_detail">
                        <p><b className="Link-user f-18 font-family-600">Trúc Thanh&ensp;</b>Đã đăng tin</p>
                        <p class="text-muted Link-pages font-family-500 f-14">Chiến tranh đông dương</p>
                        <p class="text-muted"><small>10 phút trước</small></p>
                    </div>
                </div>
                <div class="notification-list_feature-img">
                    <img src={logo} alt="Feature image"/>
                </div>
            </div>
            <div class="notification-list">
                <div class="notification-list_content">
                    <div class="notification-list_img">
                        <img src="https://i.imgur.com/ltXdE4K.jpg" alt="user"/>
                    </div>
                    <div class="notification-list_detail">
                        <p><b className="Link-user f-18 font-family-600">Thanh Vân&ensp;</b>Đã đăng tin</p>
                        <p class="text-muted Link-pages font-family-500 f-14">Các cách để cài đặt một dự án React</p>
                        <p class="text-muted"><small>1 giờ trước</small></p>
                    </div>
                </div>
                <div class="notification-list_feature-img">
                    <img src="https://i.imgur.com/bpBpAlH.jpg" alt="Feature image"/>
                </div>
            </div>
            <div class="notification-list">
                <div class="notification-list_content">
                    <div class="notification-list_img">
                        <img src="https://i.imgur.com/ltXdE4K.jpg" alt="user"/>
                    </div>
                    <div class="notification-list_detail">
                        <p><b className="Link-user f-18 font-family-600">Hà Phi Sony&ensp;</b>Đã thả tym bạn</p>
                        <p class="text-muted"><small>1 giờ trước</small></p>
                    </div>
                </div>
                <div class="notification-list_feature-img">
                    <img src="https://i.imgur.com/bpBpAlH.jpg" alt="Feature image"/>
                </div>
            </div>
        </div>

        <div class="text-center">
            <a href="#!" class="dark-link font-family-700 f-20">Tải Thêm Thông Báo</a>
        </div>

    </div>
</section>

   
    
   </div>
   <Footer/>
   </>
  )
}
export default Notifications;