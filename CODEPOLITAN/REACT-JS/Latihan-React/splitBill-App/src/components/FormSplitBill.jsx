import { useState } from "react";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const [whoIsPaid, setWhoIsPaid] = useState("user");
  const friendBill = amount ? amount - myBill : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return alert("Please enter amount and bill");
    onSplitBill(whoIsPaid === "user" ? friendBill : -myBill);
  }

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>
        Split Bill with <span className="kuning">{selectedFriend.name}</span>
      </h2>

      <label htmlFor="">💵 Total Bill</label>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />

      <label htmlFor="">📝 Your Bill</label>
      <input type="text" value={myBill} onChange={(e) => setMyBill(e.target.value)} />

      <label htmlFor="">
        🧑 <span className="kuning">{selectedFriend.name}</span> Bill
      </label>
      <input type="text" value={friendBill} />

      <label htmlFor="">
        🫰 Paid by <span className="kuning">{selectedFriend.name}</span>
      </label>
      <select value={whoIsPaid} onChange={(e) => setWhoIsPaid(e.target.value)}>
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Add</button>
    </form>
  );
};

export default FormSplitBill;
