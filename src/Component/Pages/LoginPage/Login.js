import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import icon1 from "../../../images/icons/Google.Icon.png";
import icon2 from "../../../images/icons/github-icon.webp";

const Login = () => {
  const { user, login, loginGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(tarnam);
  const loginSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        const user = res.user;
        form.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((e) => console.log(e.message));
  };

  // Google login
  const googleLogin = () => {
    loginGoogle()
      .then((res) => {
        // const user = res.user;
        navigate(from, { replace: true });
        // console.log(user);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <p>Email : {user.email}</p> */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="label-text-alt link link-hover">
                    Forgot password?
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p className="my-5">
              You have No Account Please{" "}
              <Link
                to="/signin"
                className="label-text-alt link link-hover text-lg text-blue-500"
              >
                Signin
              </Link>
            </p>
            <div className="flex justify-center mb-10">
              <button onClick={googleLogin}>
                <img className="w-8 h-8 mr-5" src={icon1} alt="" />
              </button>
              <button>
                <img className="w-8 h-8" src={icon2} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
