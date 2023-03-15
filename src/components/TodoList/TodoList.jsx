import React from "react";

const TodoList = () => {
  return (
    <div className="m-auto mt-5" style={{ width: "500px" }}>
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-center justify-content-between">
          <div className="form-check">
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
