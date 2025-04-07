import { Slide, toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        if (res.user) {
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
          navigate("/");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="mt-3">
      <div className="divider">OR</div>
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="btn btn-block"
      >
        Login with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
