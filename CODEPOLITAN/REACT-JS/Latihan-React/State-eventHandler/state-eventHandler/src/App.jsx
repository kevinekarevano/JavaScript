import { useState } from "react";
import Close from "./components/Close";

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const pageStep = ["page 1", "page 2", "page 3"];

  const handlerNext = () => {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  };

  const handlerPrev = () => {
    step > 1 && setStep(step - 1);
    console.log(step);
  };

  const handlerClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-zinc-800 min-h-screen flex    justify-center items-center">
      <div className={`bg-sky-300 w-1/3 h-full ${isOpen ? "" : "hidden"} rounded-xl`}>
        <div className="flex justify-between p-5">
          <h1 className={`h-10 w-10 rounded-full flex  justify-center items-center ${step >= 1 ? "active" : ""} font-bold`}>1</h1>
          <h1 className={`bg-zinc-200 h-10 w-10 rounded-full flex justify-center items-center text-zinc-800 font-bold ${step >= 2 ? "active" : ""} `}>2</h1>
          <h1 className={`bg-zinc-200 h-10 w-10 rounded-full flex justify-center items-center text-zinc-800 font-bold ${step >= 3 ? "active" : ""} `}>3</h1>
        </div>

        <h1 className="text-zinc-200 text-xl font-bold text-center my-10">{pageStep[step - 1]}</h1>

        <div className="flex justify-between p-5">
          <button onClick={handlerPrev} className="bg-zinc-600 h-10 px-10 rounded-full flex justify-center items-center text-white font-bold">
            Prev
          </button>
          <button onClick={handlerNext} className="bg-zinc-600 h-10 px-10 rounded-full flex justify-center items-center text-white font-bold">
            Next
          </button>
        </div>
      </div>
      <Close close={handlerClose} />
    </div>
  );
}

export default App;


