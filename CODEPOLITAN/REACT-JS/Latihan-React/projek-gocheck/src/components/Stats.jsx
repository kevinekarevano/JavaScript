const Stats = ({ total }) => {
  const totalItems = total.length;
  const doneItems = total.filter((item) => item.done).length;
  const progres = Math.round((doneItems / totalItems) * 100);
  return (

    <div className="alert alert-primary text-center" role="alert">
      You have <span className="badge text-bg-dark">{totalItems}</span> Note and <span className="badge text-bg-primary">{doneItems}</span> done ({doneItems === 0 ? "0" : progres}%)💪
    </div>
  );

  
};

export default Stats;
