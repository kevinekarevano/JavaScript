import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

import "./App.css";

const initialFriend = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [newFriend, setNewFriend] = useState(initialFriend);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function addFriend(newFriendList) {
    setNewFriend([...newFriend, newFriendList]);
  }

  function showToggle() {
    setShowAddFriend(!showAddFriend);
    setSelectedFriend(null);
  }

  function handlSelectedfriend(friend) {
    setSelectedFriend(friend === selectedFriend ? null : friend);

    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setNewFriend(
      newFriend.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return { ...friend, balance: friend.balance - value };
        }
        return friend;
      })
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={newFriend} onSelected={handlSelectedfriend} selectedFriend={selectedFriend} />

        {showAddFriend && <FormAddFriend onAddFriend={addFriend} />}

        <button onClick={showToggle} className="button">
          {showAddFriend ? "Close" : "Add Friend"}
        </button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>
  );
}

export default App;
