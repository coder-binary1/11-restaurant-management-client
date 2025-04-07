import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { signInWithGoogle } = useAuth();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="mt-3">
      <div className="divider">OR</div>
      <button onClick={handleGoogleLogin} className="btn btn-block">
        Login with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
