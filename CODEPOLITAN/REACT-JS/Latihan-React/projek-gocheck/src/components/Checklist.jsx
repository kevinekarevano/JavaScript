import "../index.css";
import { useState } from "react";

const Checklist = ({ items, onDeleteItem, onDone, clearItems, clearDoneItems }) => {
  const [sortBy, setSortBy] = useState("input");

  const selectValue = (e) => {
    setSortBy(e.target.value);
    console.log(e.target.value);
  };

  const sortItems = (items) => {
    switch (sortBy) {
      case "input":
        return items.sort((a, b) => a.id - b.id);
      case "title":
        return items.sort((a, b) => a.title.localeCompare(b.title));
      case "status":
        return items.sort((a, b) => a.done - b.done);
      default:
        return items;
    }
  };

  const itemsToShow = sortItems(items);

  return (
    <div className=" py-5 ">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select style={{ width: "50%" }} className="form-select bg-dark text-white" aria-label="Default select example" value={sortBy} onChange={selectValue}>
          <option value="input">Sorted by input</option>
          <option value="title">Sorted by title</option>
          <option value="status">Sorted by status</option>
        </select>

        <button className="btn btn-secondary mx-2" onClick={clearItems}>Clear List</button>
        <button className="btn btn-success" onClick={clearDoneItems}>Clear Done Item</button>
      </div>

      <ul>
        {itemsToShow.map((list) => {
          return (
            <div key={list.id}>
              <li className={`d-flex align-items-center `}>
                <input className="form-check-input bg-dark   mr" type="checkbox" value={list.done} onChange={() => onDone(list.id)} />
                <span className={list.done ? "coret" : ""}>{list.title}</span>
                <button className="btn" onClick={() => onDeleteItem(list.id)}>
                  ❌
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Checklist;
