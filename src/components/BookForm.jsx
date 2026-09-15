import { useContext, useState } from "react";
import { BooksContext } from "../context/BooksContext";
import { useNavigate } from "react-router";

export default function BookForm() {
  const { handleAddBook } = useContext(BooksContext);
  const navigate = useNavigate(); 
  
  const [form, setForm] = useState({ title: "", author: "", year: "" });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const title = form.title.trim();
    const author = form.author.trim();
    const year = form.year.trim();

    if (!title || !author || !year) {
      setError("Preencha o título, o autor e o ano.");
      return;
    }

    handleAddBook({
      id: crypto.randomUUID(),
      title,
      author,
      year: Number(year),
      available: true,
    });

    setForm({ title: "", author: "", year: "" });
    setError("");
    
    // Redirecionamento programático para a rota raiz após o cadastro
    navigate("/"); 
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="field">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label htmlFor="title">Título</label>
          <span style={{ fontSize: '12px', color: '#55617a' }}>
            {form.title.length} caracteres
          </span>
        </div>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="author">Autor</label>
        <input
          id="author"
          name="author"
          value={form.author}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="year">Ano de publicação</label>
        <input
          id="year"
          name="year"
          type="number"
          value={form.year}
          onChange={handleChange}
        />
      </div>

      {error && <p className="form-error">{error}</p>}
      <button type="submit">Cadastrar livro</button>
    </form>
  );
}