import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="bg-zinc-800 min-h-screen flex flex-col gap-2 justify-center items-center">
      <h1 className="text-white font-bold text-2xl">Ooops, Unexpected Page...</h1>
      <h1 className="text-9xl font-extrabold text-cyan-400">404</h1>
      <p className="font-bold text-white text-xl">{error.message || error.statusText}</p>
    </div>
  );
};

export default ErrorPage;
