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
        <div className="card p-3 mb-3">h3</div>
      </div>
    </>
  );
};

export default Form;
