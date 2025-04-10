import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import passwordValidation from "./passwordValidation";
import { Slide, toast } from "react-toastify";

const Register = () => {
  const [error, setError] = useState();
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { name, photo, email, password } = initialData;

    setError("");
    const checkPassword = passwordValidation(password);

    checkPassword.isValid &&
      createUser(email, password)
        .then((res) => {
          if (res.user) {
            updateUser(name, photo);
            e.target.reset();
            toast.success("Registration Successful", {
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
            navigate("/");
          }
        })
        .catch((err) => setError(err.message));

    checkPassword.isValid || setError(checkPassword.message);
  };
  return (
    <form onSubmit={handleRegister} className="card-body md:w-1/2 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-5">Register now!</h1>
      {error && (
        <div role="alert" className="alert alert-error alert-soft">
          <span>{error}</span>
        </div>
      )}
      <fieldset className="fieldset">
        <label className="fieldset-label">Name</label>
        <input
          type="text"
          name="name"
          className="input w-full focus:outline-none"
          placeholder="Name"
          required
        />
        <label className="fieldset-label">Email</label>
        <input
          type="email"
          name="email"
          className="input w-full focus:outline-none"
          placeholder="Email"
          required
        />
        <label className="fieldset-label">Photo URL</label>
        <input
          type="url"
          name="photo"
          className="input w-full focus:outline-none"
          placeholder="Photo URL"
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
          <Link to="/login" className="link link-hover text-success">
            Already have an account? Login...
          </Link>
        </div>
        <button className="btn btn-neutral mt-4">Register</button>
      </fieldset>

      {/* google login */}
      <GoogleLogin></GoogleLogin>
    </form>
  );
};

export default Register;
