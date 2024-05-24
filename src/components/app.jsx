import { useReducer } from "react";

const ACTIONS = {
  increment: "increment",
  decrement: "decrement",
  randomNumber: "randomNumber",
  reset: "reset",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.increment:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case ACTIONS.decrement:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case ACTIONS.randomNumber:
      return {
        ...state,
        counter: Math.floor(Math.random() * 10) + 1,
      };
    case ACTIONS.reset:
      return {
        ...state,
        counter: 0,
      };
    default:
      throw new Error("Something went wrong");
  }
}

function App() {
  const initialValue = {
    counter: 0,
  };

  const [data, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <div className="w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center">
        <div className="border border-5 w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column bg-secondary">
          <h1>Counter: {data.counter}</h1>

          <div className="d-flex gap-2">
            <button
              className="btn btn-primary fs-5"
              onClick={() => dispatch({ type: ACTIONS.increment })}
            >
              +
            </button>
            <button
              className="btn btn-success fs-5"
              onClick={() => dispatch({ type: ACTIONS.decrement })}
            >
              -
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch({ type: ACTIONS.randomNumber })}
            >
              Random
            </button>
            <button
              className="btn btn-warning"
              onClick={() => dispatch({ type: ACTIONS.reset })}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
