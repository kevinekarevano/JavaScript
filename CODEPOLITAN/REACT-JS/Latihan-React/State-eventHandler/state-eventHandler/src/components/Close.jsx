const Close = ({close}) => {
  return (
    <div className="absolute top-10 hover:cursor-pointer hover:bg-slate-500 rounded-full p-2 transition" onClick={close}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
      </svg>
    </div>
  );
};

export default Close;
