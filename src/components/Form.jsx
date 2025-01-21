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
    didascalia: "",
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

  const handleTags = (e) => {
    let { tags, ...others } = formData;

    if (tags.included(e.target.value)) {
      tags = tags.filter((tag) => tag !== e.target.value);
    } else {
      tags = [...tags, e.target.value];
    }

    setFormData({ tags, ...others });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setPosts([
      {
        id: self.crypto.randomUUID(),
        ...formData,
      },
      ...posts,
    ]);
  };

  const handleRemovePost = (id) => {
    console.log(id);
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <>
      <div className="container my-5">
        <div className="card p-3 mb-3">
          <h3>Aggiungi un Post</h3>
          <form onSubmit={handlerSubmit}>
            <div className="mb-3">
              <label htmlFor="titolo" className="form-label">
                Titolo
              </label>
              <input
                type="text"
                id="titolo"
                className="form-control"
                placeholder="Titolo..."
                name="titolo"
                value={formData.titolo}
                onChange={handleField}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="immagini" className="form-label">
                Foto
              </label>
              <input
                type="text"
                id="immagini"
                className="form-control"
                placeholder="Foto..."
                name="immagini"
                value={formData.immagini}
                onChange={handleField}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="didascalia" className="form-label">
                Scrivi una didascalia
              </label>
              <textarea
                id="didascalia"
                className="form-control"
                rows="5"
                placeholder="Didascalia..."
                name="didascalia"
                value={formData.didascalia}
                onChange={handleField}
              ></textarea>
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                onChange={handleField}
                name="categoria"
                defaultValue=""
              >
                <option selected>Scegli la categoria</option>
                {categorie.map((categoria, index) => (
                  <option key={index} value={index}>
                    {categoria}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <h4>Tags</h4>
              </label>
              {tags.map((tag) => (
                <div key={`tag${tag.id}`} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`tag${tag.id}`}
                    value={tag.nome}
                    onChange={handleTags}
                  />
                  <label className="form-check-label" htmlFor={`tag${tag.id}`}>
                    {tag.nome}
                  </label>
                </div>
              ))}
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="stato"
                name="stato"
                checked={formData.stato}
                onChange={handleField}
              />
              <label htmlFor="stato" className="form-check-label">
                Pubblicato
              </label>
            </div>
            <button type="submit" className="btn btn-warning">
              Aggiungi
            </button>
          </form>
        </div>
        <div className="card p-4">
          <h2 className="mb-3">Lista Post</h2>
          {posts.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Immagine</th>
                  <th>Titolo</th>
                  <th>Contenuto</th>
                  <th>Categoria</th>
                  <th>Tags</th>
                  <th>Disponibile</th>
                  <th>Azioni</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>
                      <img src={post.immagini} alt={post.titolo} width="100" />
                    </td>
                    <td>{post.titolo}</td>
                    <td>{post.didascalia}</td>
                    <td>{post.categoria}</td>
                    <td>{post.tags.join(", ")}</td>
                    <td>{post.stato ? "Sì" : "No"}</td>
                    <td>
                      <button
                        onClick={() => handleRemovePost(post.id)}
                        className="btn btn-danger btn-sm"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3>Non sono presenti post</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
