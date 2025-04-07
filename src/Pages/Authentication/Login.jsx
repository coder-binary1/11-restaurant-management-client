import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUser } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { email, password } = initialData;

    signInUser(email, password)
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err.message));
  };
  return (
    <form onSubmit={handleLogin} className="card-body max-w-1/2 mx-auto">
      <fieldset className="fieldset">
        <label className="fieldset-label">Email</label>
        <input
          type="email"
          name="email"
          className="input w-full focus:outline-none"
          placeholder="Email"
        />
        <label className="fieldset-label">Password</label>
        <input
          type="password"
          name="password"
          className="input w-full focus:outline-none"
          placeholder="Password"
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
