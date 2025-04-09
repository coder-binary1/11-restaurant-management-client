import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import useAuth from "../../hooks/useAuth";
import passwordValidation from "./passwordValidation";
import { useState } from "react";
import { Slide, toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState();
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { email, password } = initialData;

    setError("");
    const checkPassword = passwordValidation(password);

    checkPassword.isValid &&
      signInUser(email, password)
        .then((res) => {
          console.log(res.user);
          e.target.reset();
          toast.success("Login Successful", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
          navigate(location.state || "/");
        })
        .catch((err) => setError(err.message));

    checkPassword.isValid || setError(checkPassword.message);
  };
  return (
    <form onSubmit={handleLogin} className="card-body md:w-1/2 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-5">Login now!</h1>
      {error && (
        <div role="alert" className="alert alert-error alert-soft">
          <span>{error}</span>
        </div>
      )}
      <fieldset className="fieldset">
        <label className="fieldset-label">Email</label>
        <input
          type="email"
          name="email"
          className="input w-full focus:outline-none"
          placeholder="Email"
          required
        />
        <label className="fieldset-label">Password</label>
        <input
          type="password"
          name="password"
          className="input w-full focus:outline-none"
          placeholder="Password"
          required
        />
        <div>
          <Link to="/register" className="link link-hover text-error">
            Don't have any account? Register...
          </Link>
        </div>
        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>

      {/* google login */}
      <GoogleLogin></GoogleLogin>
    </form>
  );
};

export default Login;
