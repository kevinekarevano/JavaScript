import { useState } from "react";

const Search = (props) => {
  const [change, setChange] = useState("");

  const onSearchChange = () => {
    props.onSearchChange(change);
  };

  const keyDown = (event) => {
    if (event.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <>
      <div>
        <input type="text" name="" id="" placeholder="cari berita" onChange={(e) => setChange(e.target.value)} onKeyDown={keyDown} />
        <button onClick={onSearchChange}>Seacrh</button>
      </div>
      <p>
        di temukan {props.totalBlog} data dengan pencarian kata: {change}
      </p>
    </>
  );
};

export default Search;
