import { useContext } from "react";
import { dataContext } from "../context";

const Textarea = () => {
  const context = useContext(dataContext);

  return (
    <div className="mb-3 w-100">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Last Name
      </label>
      <textarea
        type="text"
        className={`form-control form-control-lg`}
        id="exampleFormControlInput1"
        value={context.lastName}
      />
    </div>
  );
};

export default Textarea;
