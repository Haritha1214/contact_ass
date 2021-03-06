import React from 'react';
import "./loginSignup.css";


const Login = () => {
    return (
        <div>
            <div class="container">
              <div class="forms-container">
                <div class="signin-signup">
                    <form action="#" class="sign-in-form">
                       <h2 class="title">Sign in</h2>
                       <div class="input-field">
                          <i class="fas fa-user"></i>
                           <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                           <i class="fas fa-lock"></i>
                           <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" class="btn solid" />
                        <p class="social-text">Or Sign in with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                               <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                               <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                              <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                      </form>
                </div>
              </div>
            </div>
            <div class="panels-container">
              <div class="panel left-panel">
                <div class="content">
                <h3>New here ?</h3>
                <p>
             
                </p>
              <button onClick="sign_up_btn" class="btn transparent" id="sign-up-btn">
              Sign up
              </button>
              </div>
              <img src="img/log.svg" class="image" alt="" />
              </div>
            </div>
    </div>
    );
};
const container = document.querySelector(".container");
const sign_in_btn = document.querySelector("#sign-in-btn");
if(sign_in_btn){
  sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  }
  )
}
export default Login;