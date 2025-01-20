import { useState } from "react";

const list = [];

const Form = () => {
  const [myList, setMyList] = useState(list);
  const [newTask, setNewTask] = useState({ text: "" });

  const handlerSubmit = (e) => {
    e.preventDefault();
    setMyList([newTask, ...myList]);
  };

  const handlerNewTask = (e) => {
    const newTask = {
      id: Date.now(),
      text: e.target.value,
    };
    setNewTask(newTask);
  };

  const handlerRemove = (id) => {
    const newList = myList.filter((item) => item.id !== id);
    setMyList(newList);
  };

  return (
    <>
      <div className="container my-5">
        <form action="#" onSubmit={handlerSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Scrivi titolo da aggiungere..."
              value={newTask.text}
              onChange={handlerNewTask}
            />
            <button className="btn btn-outline-secondary" type="submit">
              Aggiungi
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <ul className="list-group">
          {myList.map((task) => (
            <li
              key={task.id}
              className="list-group-item  d-flex justify-content-between"
            >
              {task.text}
              <i
                className="fa-solid fa-trash"
                onClick={() => handlerRemove(task.id)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Form;
