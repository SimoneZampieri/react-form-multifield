import { useState } from "react";

const articles = [
  {
    id: 1,
    text: "L'innovazione tecnologica sta cambiando il nostro modo di vivere quotidianamente.",
  },
  {
    id: 2,
    text: "I cambiamenti climatici sono una delle sfide globali più urgenti dei nostri tempi.",
  },
  {
    id: 3,
    text: "L'intelligenza artificiale sta trasformando l'industria e la società in modi senza precedenti.",
  },
];

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
