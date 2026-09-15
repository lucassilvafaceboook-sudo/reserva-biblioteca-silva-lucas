import { useState, useEffect } from "react";
import "./App.css";
import { books as initialBooks } from "./data/books";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Panel from "./components/Panel";

const STORAGE_KEY = "reserva-biblioteca:books";

function loadBooks() {
  const savedBooks = localStorage.getItem(STORAGE_KEY);
  if (!savedBooks) return initialBooks;
  try {
    const parsedBooks = JSON.parse(savedBooks);
    return Array.isArray(parsedBooks) ? parsedBooks : initialBooks;
  } catch {
    return initialBooks;
  }
}

export default function App() {
  const [books, setBooks] = useState(loadBooks);
  const [showAvailable, setShowAvailable] = useState(false);

  const availableCount = books.filter((book) => book.available).length;

  const displayedBooks = showAvailable
    ? books.filter((book) => book.available)
    : books;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${availableCount}/${books.length} livros disponíveis`;

    return () => {
      document.title = previousTitle;
    };
  }, [availableCount, books.length]);

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
        
        <BookList books={displayedBooks} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}