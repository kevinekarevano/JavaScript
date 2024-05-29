import Button from "../Elements/Button";
import InputForm from "../Elements/Inputan";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.Email.value);
    localStorage.setItem("password", e.target.Password.value);
    window.location.href = "/products";
    console.log("login");
  };
  return (
    <form onSubmit={handleLogin}>
      <div className="mb-6">
        <InputForm title="Email" type="email" placeholder="example@gmail.com" />
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
