const Person = (props) => {
 
  return (

    
    <>
      <div>name: {props.name}</div>
      <div>
        {props.data.map((data) => {
          return <div>-{data}</div>;
        })}
      </div>
    </>
    
  );
};

export default Person;
