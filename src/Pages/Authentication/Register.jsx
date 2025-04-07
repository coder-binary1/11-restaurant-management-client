import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser, updateUser } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { name, photo, email, password } = initialData;

    createUser(email, password)
      .then((res) => {
        if (res.user) {
          updateUser(name, photo);
          console.log(res.user);
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <form onSubmit={handleRegister} className="card-body max-w-1/2 mx-auto">
      <fieldset className="fieldset">
        <label className="fieldset-label">Name</label>
        <input
          type="text"
          name="name"
          className="input w-full focus:outline-none"
          placeholder="Name"
        />
        <label className="fieldset-label">Email</label>
        <input
          type="email"
          name="email"
          className="input w-full focus:outline-none"
          placeholder="Email"
        />
        <label className="fieldset-label">Photo URL</label>
        <input
          type="url"
          name="photo"
          className="input w-full focus:outline-none"
          placeholder="Photo URL"
        />
        <label className="fieldset-label">Password</label>
        <input
          type="password"
          name="password"
          className="input w-full focus:outline-none"
          placeholder="Password"
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
