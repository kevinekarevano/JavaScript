import { GlobalContext } from "./context";
import { router } from "./routers";
import { RouterProvider } from "react-router-dom";
import "./App.css";


function App() {
  const user = {
    username: "kevin",
  };
  return (
    <>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
