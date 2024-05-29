const Button = ({ children = "Button", customStyle = "bg-blue-500", onClick = () => {} }, type) => {
  return (
    <>
      <button onClick={onClick}  type={type} className={`${customStyle} rounded-md p-2  font-bold `}>
        {children}
      </button>
    </>
  );
};

export default Button;
