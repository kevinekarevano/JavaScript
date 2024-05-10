import { useState } from "react";

const Form = ({ onAddItem }) => {
  const [title, setTitle] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (!title) return alert("Please enter a title");

    const newItem = {
      id: Date.now(),
      title,
      done: false
    };

    onAddItem(newItem);

    setTitle("");
  }

  const titleHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form action="" className="d-flex justify-content-center p-3" onSubmit={submitHandler}>
      <h1>Ada yang mau di catat? 🚀</h1>
      <input className="bg-light" type="text" value={title} onChange={titleHandler} />
      
      <button className="btn btn-primary">Add</button>
    </form>


  );
};

export default Form;
