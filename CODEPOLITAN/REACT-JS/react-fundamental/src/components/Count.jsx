import { useState } from "react";

const Count = () => {
  const [angka, setAngka] = useState(0);

  const counter = () => {
    setAngka(angka + 1);
  };

  return (
    <>
      <p>{angka}</p>
      <button onClick={counter}>+1</button>
    </>
  );
};

export default Count;
