const Label = ({ htmlfor, children }) => {
  return (
    <>
      <label className="text-white block " htmlFor={htmlfor}>
        {children}
      </label>
    </>
  );
};

export default Label;
