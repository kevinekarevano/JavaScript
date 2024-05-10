const FormSplitBill = ({selectedFriend}) => {
  return (
    <form action="" className="form-split-bill">
      <h2>Split Bill with <span className="kuning">{selectedFriend.name}</span></h2>

      <label htmlFor="">💵 Total Bill</label>
      <input type="text" />

      <label htmlFor="">📝 Your Bill</label>
      <input type="text" name="" id="" />

      <label htmlFor="">🧑 <span className="kuning">{selectedFriend.name}</span>  Bill</label>
      <input type="text" />

      <label htmlFor="">🫰 Paid by <span className="kuning">{selectedFriend.name}</span></label>
      <select name="" id="">
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Add</button>
    </form>
  );
};

export default FormSplitBill;
