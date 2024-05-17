const Friend = ({ friend, onSelected, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>
        {friend.name} ID {friend.id}
      </h3>

      {friend.balance > 0 && (
        <p className="red">
          Kamu berhutang Rp {Math.abs(friend.balance)} ke {friend.name}
        </p>
      )}

      {friend.balance < 0 && (
        <p className="green">
          {friend.name} berhutang Rp {Math.abs(friend.balance)} ke kamu
        </p>
      )}

      {friend.balance === 0 && <p>Kamu dengan {friend.name} tidak punya hutang</p>}

      <button className="button" onClick={() => onSelected(friend)}>
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
};

export default Friend;
