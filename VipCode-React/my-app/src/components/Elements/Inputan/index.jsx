import Input from "./input";
import Label from "./label";

const InputForm = ({ title, type, placeholder }) => {
  return (
    <div className="mb-6">
      <Label htmlfor={title}>{title}</Label>
      <Input type={type} placeholder={placeholder} id={title} />
    </div>
  );
};

export default InputForm;
