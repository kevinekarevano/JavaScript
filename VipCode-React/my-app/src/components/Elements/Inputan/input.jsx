import { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder, id }, ref) => {
  return (
    <>
      <input id={id} className="bg-zinc-500 w-full placeholder:text-slate-300 text-white py-2 px-2 rounded-md" placeholder={placeholder} type={type} ref={ref} />
    </>
  );
});

export default Input;
