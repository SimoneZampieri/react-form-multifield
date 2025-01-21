import { useState } from "react";

const categorie = ["Tecnologia", "Cucina", "Sport", "Viaggi", "Musica"];

const tags = [
  { id: 1, nome: "Innovazione" },
  { id: 2, nome: "Ricette" },
  { id: 3, nome: "Calcio" },
  { id: 4, nome: "Avventura" },
  { id: 5, nome: "Rock" },
];

const Form = () => {
  const initialFormData = {
    id: "",
    titolo: "",
    categoria: "",
    immagini: "",
    tags: [],
    stato: "",
  };

  const [formData, setFormData] = useState({ initialFormData });
  const [posts, setPosts] = useState([]);

  const handleField = (e) => {
    let value = e.target.value;

    if (e.target.name === "categoria") {
      value = categorie[e.target.value];
    }
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handlerNewTask = (e) => {
    const newArticle = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newArticle);
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
              name="titolo"
              type="text"
              className="form-control"
              placeholder="Scrivi titolo da aggiungere..."
              value={formData.titolo}
              onChange={handlerNewTask}
            />
          </div>
          <div className="input-group my-3">
            <input
              name="immagine"
              type="text"
              className="form-control"
              placeholder="Aggiungi immagine..."
              value={formData.immagini}
              onChange={handlerNewTask}
            />
          </div>
          <button className="btn btn-outline-primary" type="submit">
            Aggiungi
          </button>
        </form>
      </div>
      <div className="container">
        <ul className="list-group">
          {myList.map((task) => (
            <div key={task.id} className="card">
              <img
                src={task.immagini}
                className="card-img-top"
                alt="Immagine"
              ></img>
              <div className="card-body">
                <h5 className="card-title">{task.titolo}</h5>
                <i
                  className="fa-solid fa-trash-can"
                  onClick={() => handlerRemove(task.id)}
                ></i>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Form;
