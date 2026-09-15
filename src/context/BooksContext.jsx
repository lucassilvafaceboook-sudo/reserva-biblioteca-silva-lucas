import { createContext, useEffect, useState } from "react";
import { books as initialBooks } from "../data/books";

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

export const BooksContext = createContext(null);

export function BooksProvider({ children }) {
  const [books, setBooks] = useState(loadBooks);
  // O estado do filtro também sobe para o contexto
  const [showAvailable, setShowAvailable] = useState(false);

  const availableCount = books.filter((book) => book.available).length;
  
  const displayedBooks = showAvailable
    ? books.filter((book) => book.available)
    : books;

  // Persistência
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

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

  // Agrupa tudo que os filhos poderão acessar
  const value = {
    books,
    displayedBooks,
    availableCount,
    showAvailable,
    setShowAvailable,
    handleReserve,
    handleAddBook,
  };

  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  );
}