import { useContext } from "react";
import { dataContext } from "../context";

const Input = () => {
  const context = useContext(dataContext);

  return (
    <div className="mb-3 w-100">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        First Name
      </label>
      <input
        type="text"
        className={`form-control form-control-lg`}
        id="exampleFormControlInput1"
        value={context.firstName}
      />
    </div>
  );
};

export default Input;
