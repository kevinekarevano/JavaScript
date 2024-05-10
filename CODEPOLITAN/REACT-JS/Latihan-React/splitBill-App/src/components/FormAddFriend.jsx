import { useState } from "react";

const FormAddFriend = ({ onAddFriend }) => {
  const [inputName, setInputName] = useState("");
  const [inputPhoto, setInputPhoto] = useState("https://i.pravatar.cc/");
  function onSubmit(e) {
    e.preventDefault();

    if (!inputName || !inputPhoto) {
      return alert("Please enter name and photo");
    }

    const randomNum = Math.floor(Math.random() * 1000) + 1;
    const newFriend = {
      id: randomNum,
      name: inputName,
      image: `${inputPhoto}${randomNum}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setInputName("");
  }

  function inputNameHandler(e) {
    setInputName(e.target.value);
    console.log(inputName);
  }

  function inputPhotoHandler(e) {
    setInputPhoto(e.target.value);
    console.log(inputPhoto);
  }

  return (
    <form action="" className="form-add-friend" onSubmit={onSubmit}>
      <label htmlFor="">🧑Name</label>
      <input type="text" value={inputName} onChange={inputNameHandler} />

      <label htmlFor="">🖼️Photo</label>
      <input type="text" value={inputPhoto} onChange={inputPhotoHandler} />

      <button className="button">Add</button>
    </form>
  );
};

export default FormAddFriend;
