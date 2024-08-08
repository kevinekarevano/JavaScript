import { forwardRef } from "react";
import Input from "./input";
import Label from "./label";

const InputForm = forwardRef(({ title, type, placeholder }, ref) => {
  return (
    <div className="mb-6">
      <Label htmlfor={title}>{title}</Label>
      <Input ref={ref} type={type} placeholder={placeholder} id={title} />
    </div>
  );
});

export default InputForm;
