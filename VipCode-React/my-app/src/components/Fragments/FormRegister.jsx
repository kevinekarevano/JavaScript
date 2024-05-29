import Button from "../Elements/Button";
import InputForm from "../Elements/Inputan";

const FormRegister = () => {
  return (
    <form action="" className=" ">
      <div className="mb-6">
        <InputForm title="Full Name" type="text" placeholder="insert your fullname" />
      </div>
      <div className="mb-6">
        <InputForm title="Email" type="email" placeholder="example@gmail.com" />
      </div>
      <div className="mb-6">
        <InputForm title="Password" type="password" placeholder="********" />
      </div>
      <div className="mb-6">
        <InputForm title="Confirm Password" type="password" placeholder="********" />
      </div>

      <Button customStyle="bg-cyan-400 w-full text-white">Register</Button>
    </form>
  );
};

export default FormRegister;
