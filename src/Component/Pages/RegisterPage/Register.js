import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-toastify";
import icon1 from "../../../images/icons/Google.Icon.png";
import icon2 from "../../../images/icons/github-icon.webp";
import useTitle from "../../../hooks/useTitle";

const Register = () => {
  useTitle("signin");
  const { user, signin, loginGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(tarnam);
  const signinSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signin(email, password)
      .then((res) => {
        const user = res.user;
        const currentUser = {
          email: user.email,
        };
        form.reset();
        fetch("https://travel-gait-srever-tareksolaiman.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("travel-token", data.token);
            navigate("/");
            // console.log(data)
          })
          .catch((e) => console.log(e.message));
        toast.success("Success fully Signin", {
          autoClose: 1000,
        });
      })
      .catch((e) => {
        toast.error(e.message, {
          autoClose: 1000,
        });
      });
  };

  const googleLogin = () => {
    loginGoogle()
      .then((res) => {
        const user = res.user;
        const currentUser = {
          email: user.email,
        };
        fetch("https://travel-gait-srever-tareksolaiman.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("travel-token", data.token);
            // console.log(data)
          })
          .catch((e) => console.log(e.message));
        toast.success("Success fully Signin", {
          autoClose: 1000,
        });
        navigate("/");
        // console.log(user);
      })
      .catch((e) => {
        toast.error(e.message, {
          autoClose: 1000,
        });
      });
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
            {/* <p>Email : {userEvent.email}</p> */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={signinSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
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
                  required
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
              You have An Account Please{" "}
              <Link
                to="/login"
                className="label-text-alt link link-hover text-lg text-blue-500"
              >
                Login
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

export default Register;
