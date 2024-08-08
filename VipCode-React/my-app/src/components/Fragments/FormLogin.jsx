import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Inputan";
import { loginService } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.Email.value);
    // localStorage.setItem("password", e.target.Password.value);
    
    // console.log("login");
    const data = {
      username: e.target.Username.value,
      password: e.target.Password.value,
    };
    loginService(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {loginFailed && <p className="text-red-400">{loginFailed}</p>}
      <div className="mb-6">
        <InputForm ref={usernameRef} title="Username" type="text" placeholder="Username123" />
      </div>
      <div className="mb-6">
        <InputForm title="Password" type="password" placeholder="********" />
      </div>

      <Button type="submit" customStyle="bg-cyan-400 w-full text-white">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
