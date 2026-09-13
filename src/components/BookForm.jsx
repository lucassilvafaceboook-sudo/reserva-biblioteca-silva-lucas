import { useState } from "react";

export default function BookForm({ onAddBook }) {
  // DESAFIO 3: Adicionado o campo 'year' no estado inicial
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
    event.preventDefault(); // Impede o recarregamento da página

    const title = form.title.trim();
    const author = form.author.trim();
    const year = form.year.trim(); // Limpando espaços do ano

    // Validação atualizada para exigir o ano
    if (!title || !author || !year) {
      setError("Preencha o título, o autor e o ano.");
      return;
    }

    onAddBook({
      id: crypto.randomUUID(),
      title,
      author,
      year: Number(year), // DESAFIO 3: Convertendo para número
      available: true,
    });

    // Resetando o formulário completo
    setForm({ title: "", author: "", year: "" });
    setError("");
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="field">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label htmlFor="title">Título</label>
          {/* DESAFIO 2: Contagem dinâmica de caracteres */}
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

      {/* DESAFIO 3: Novo campo para capturar o ano */}
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