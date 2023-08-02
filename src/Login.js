import { useNavigate } from "react-router-dom";

function Login() {
  const naviagte = useNavigate();
  return (
    <div className="login-section pt-120 pb-120">
      <div className="container">
        <div className="row d-flex justify-content-center g-4">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="form-wrapper wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
              <div className="form-title">
                <h3>Log In From PipelIne</h3>
                <p>New Member? <a href="sign-up.html">signup here</a></p>
              </div>
              <form className="w-100">
                <div className="row">
                  <div className="col-12">
                    <div className="form-inner">
                      <label>Enter Your Email *</label>
                      <input type="email" placeholder="Enter Your Email" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-inner">
                      <label>Password *</label>
                      <input type="password" name="password" id="password" placeholder="Password" />
                      <i className="bi bi-eye-slash" id="togglePassword"></i>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                      <div className="form-group">
                        <input type="checkbox" id="html" />
                        <label for="html">I agree to the <a href="#">Terms & Policy</a></label>
                      </div>
                      <a href="#" className="forgot-pass">Forgotten Password</a>
                    </div>
                  </div>
                </div>
                <button className="account-btn" onClick={() => naviagte('/home')}>Log in</button>
              </form>
              <div className="alternate-signup-box">
                <h6>or signup WITH</h6>
                <div className="btn-group gap-4">
                  <a href="" className="eg-btn google-btn d-flex align-items-center"><i className='bx bxl-google'></i><span>signup whit google</span></a>
                  <a href="" className="eg-btn facebook-btn d-flex align-items-center"><i className='bx bxl-facebook' ></i>signup whit facebook</a>
                </div>
              </div>
              <div className="form-poicy-area">
                <p>By clicking the "signup" button, you create a Cobiro account, and you agree to Cobiro's <a href="#">Terms & Conditions</a> & <a href="#">Privacy Policy.</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
