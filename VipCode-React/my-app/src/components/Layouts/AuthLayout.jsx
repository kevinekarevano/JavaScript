import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, type }) => {
  return (
    <div className="bg-zinc-800 min-h-screen flex gap-2 justify-center items-center">
      <div className="">
        <h1 className="text-cyan-400 font-bold text-3xl mb-2">{title}</h1>
        <p className="text-white font-medium mb-6 ">Welcome, please enter your details!</p>
        {children}

        <p className="text-white font-medium mt-6 text-center ">
          {type === "login" ? "Don't have an account? " : "Already have an account? "}

          {type === "login" ? (
            <Link to="/register" className="text-cyan-400">
              Register
            </Link>
          ) : (
            <Link to="/login" className="text-cyan-400">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
