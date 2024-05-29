import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const register = () => {
  return (
    <AuthLayout title="Register" type={"register"}>
      <FormRegister />
    </AuthLayout>
  );
};

export default register;
