import { useState } from "react";

export default function BookForm({ onAddBook }) {
  const [form, setForm] = useState({ title: "", author: "" });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const title = form.title.trim();
    const author = form.author.trim();


    if (!title || !author) {
      setError("Preencha o título e o autor.");
      return;
    }

    onAddBook({
      id: crypto.randomUUID(),
      title,
      author,
      available: true,
    });

    setForm({ title: "", author: "" });
    setError("");
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Título</label>
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
      {error && <p className="form-error">{error}</p>}
      <button type="submit">Cadastrar livro</button>
    </form>
  );
}