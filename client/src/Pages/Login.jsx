import React from "react";
import '../styles/Login.css'
import ImgLogin from '../Imgs/ImgLogin.jpg'
import '../styles/App.css'
import Footer from "../components/Footer";
const Login = () => {
  return(
    <div class="content bg-color">
    <div class="container pt-2 text-left">
      <div class="row">
        <div class="col-md-6 order-md-2">
          <img src={ImgLogin} alt="Image" class="img-fluid"/>
        </div>
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="mb-4 font-family-700">
              <h3>Đăng nhập đến <strong>PhucBlog</strong></h3>
              <p class="mb-4">Chào mừng bạn đã đến phúcblog.Nơi mà bạn sẽ nhận được nhiều kiến thức bổ ích</p>
            </div>
            <form action="#" method="post">
              <div class="form-group first font-family-500">
                <label for="username ">Email</label>
                <input type="text" class="form-control" id="username"/>

              </div>
              <div class="form-group last mb-4 py-3 font-family-500">
                <label for="password">Mật Khẩu</label>
                <input type="password" class="form-control" id="password"/>
                
              </div>
              
              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0 font-family-500"><span class="caption">Nhắc Tôi</span>
                  <input type="checkbox" checked="checked"/>
                  <div class="control__indicator"></div>
                </label>
                <span class="ml-auto"><a href="#" class="forgot-pass font-family-500">Quên Mật Khẩu</a></span> 
              </div>

              <input type="submit" value="Đăng Nhập" class="w-100 btn text-white btn-block btn-primary"/>

              <span class="d-block text-left my-4 text-muted font-family-500">Bạn chưa có tài khoản?<a href="#">Hãy đăng ký</a></span>
              
              {/* <div class="social-login">
                <a href="#" class="facebook">
                  <span class="icon-facebook mr-3"></span> 
                </a>
                <a href="#" class="twitter">
                  <span class="icon-twitter mr-3"></span> 
                </a>
                <a href="#" class="google">
                  <span class="icon-google mr-3"></span> 
                </a>
              </div> */}
            </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}
export default Login;