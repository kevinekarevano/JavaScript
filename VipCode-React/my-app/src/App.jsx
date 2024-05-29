import AuthLayout from "./components/Layouts/AuthLayout";
import RegisterPage from "./Pages/register";
import LoginPage from "./Pages/login";

function App() {
  return (
    <div className="bg-zinc-800 min-h-screen flex gap-2 justify-center items-center">
      <LoginPage />
    </div>
  );
}

export default App;
