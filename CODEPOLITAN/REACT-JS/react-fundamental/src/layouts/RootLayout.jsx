import { Link, Outlet } from "react-router-dom";


const RootLayout = () => {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="about">About</Link>
      <Outlet />
    </>
  );
};

export default RootLayout;
