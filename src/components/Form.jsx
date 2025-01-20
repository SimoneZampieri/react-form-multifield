import { useState } from "react";

const list = [];

const Form = () => {
  const [myList, setMyList] = useState(list);
  const [formData, setFormData] = useState({
    text: "",
    image: "",
  });

  const handlerSubmit = (e) => {
    e.preventDefault();
    setMyList([formData, ...myList]);
  };

  const handlerNewTask = (e) => {
    const formData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(formData);
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
              name="text"
              type="text"
              className="form-control"
              placeholder="Scrivi titolo da aggiungere..."
              value={formData.text}
              onChange={handlerNewTask}
            />
            <button className="btn btn-outline-secondary" type="submit">
              Aggiungi
            </button>
          </div>
          <div className="input-group my-3">
            <input
              name="image"
              type="text"
              className="form-control"
              placeholder="Aggiungi immagine..."
              value={formData.text}
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
