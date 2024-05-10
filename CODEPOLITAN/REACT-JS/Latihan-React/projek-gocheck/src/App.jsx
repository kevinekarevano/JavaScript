import { useState } from "react";
import Checklist from "./components/Checklist";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Stats from "./components/Stats";

function App() {
  const [listItems, setListItems] = useState([]);

  function addItem(item) {
    setListItems([...listItems, item]);
  }

  function deleteItem(id) {
    setListItems(listItems.filter((item) => item.id !== id));
  }

  function doneItems(id) {
    setListItems(listItems.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
  }

  function clearItems() {
    const makeSure = window.confirm("Are you sure you want to delete all items?");

    makeSure && setListItems([]);
  }

  function clearDoneItems() {
    const makeSure = window.confirm("Are you sure you want to delete all done items?");

    makeSure && setListItems(listItems.filter((item) => !item.done));
  }

  return (
    <>
      <Logo />
      <Stats total={listItems} />
      <Form onAddItem={addItem} />
      <Checklist items={listItems} onDeleteItem={deleteItem} onDone={doneItems} clearItems={clearItems} clearDoneItems={clearDoneItems} />
    </>
  );
}

export default App;
