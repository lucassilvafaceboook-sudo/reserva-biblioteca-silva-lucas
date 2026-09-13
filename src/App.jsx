import { useState } from "react";
import "./App.css";
import { books as initialBooks } from "./data/books";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Panel from "./components/Panel";

export default function App() {
  const [books, setBooks] = useState(initialBooks);
  // DESAFIO 1: Novo estado para controlar o filtro
  const [showAvailable, setShowAvailable] = useState(false);

  const availableCount = books.filter((book) => book.available).length;

  // DESAFIO 1: Lista derivada. Se o filtro estiver ativo, mostra só os disponíveis.
  const displayedBooks = showAvailable
    ? books.filter((book) => book.available)
    : books;

  function handleReserve(bookId) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId
          ? { ...book, available: !book.available }
          : book
      )
    );
  }

  function handleAddBook(newBook) {
    setBooks((currentBooks) => [...currentBooks, newBook]);
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
        <p style={{ marginTop: '16px', fontWeight: 'bold' }}>
          {availableCount} de {books.length} livros disponíveis
        </p>
      </header>

      <Panel title="Novo livro">
        <BookForm onAddBook={handleAddBook} />
      </Panel>

      <Panel title="Acervo">
        {/* DESAFIO 1: Checkbox do filtro */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ cursor: "pointer", fontWeight: "600", fontSize: "14px" }}>
            <input
              type="checkbox"
              checked={showAvailable}
              onChange={(e) => setShowAvailable(e.target.checked)}
              style={{ marginRight: "8px" }}
            />
            Mostrar apenas disponíveis
          </label>
        </div>
        
        {/* Passando a lista filtrada (displayedBooks) em vez da lista completa (books) */}
        <BookList books={displayedBooks} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}