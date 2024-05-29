import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const login = () => {
  return (
    <AuthLayout title="Login" type={"login"}>
      <FormLogin />
    </AuthLayout>
  );
};

export default login;
