const Todo = ({ id, title, completed, handleDelete }) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div className="form-check">
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {title}
        </label>
      </div>
      <button
        onClick={() => handleDelete(id)}
        type="button"
        className="btn-close"
        aria-label="Close"
      ></button>
    </li>
  );
};

export default Todo;
