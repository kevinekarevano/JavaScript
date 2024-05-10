import Friend from "./Friend";

const FriendList = ({ friends, onSelected }) => {
  return (
    <div>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelected={onSelected} />
      ))}
    </div>
  );
};

export default FriendList;
