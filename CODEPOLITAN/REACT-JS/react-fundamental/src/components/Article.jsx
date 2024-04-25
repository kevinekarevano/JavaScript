import { useContext } from "react";
import { GlobalContext } from "../context";

const Article = (props) => {
  const name = "kevin ekarevano";

  const user = useContext(GlobalContext);
  return (
    <>
      

      <h3>{props.title}</h3>
      <p>
        Date : {props.date} Tags: {props.tags.join(", ")} {props.isNew ? "--Baruu" : "--lamaa"}
      </p>
      <p>ditulis Oleh {user.username}</p>
    </>
  );
};

export default Article;
