import Friend from "./Friend";

const FriendList = ({ friends, onSelected, selectedFriend }) => {
  return (
    <div>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelected={onSelected} selectedFriend={selectedFriend} />
      ))}
    </div>
  );
};

export default FriendList;
