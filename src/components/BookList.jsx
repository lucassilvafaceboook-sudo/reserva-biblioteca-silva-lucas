import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import BookCard from "./BookCard";

export default function BookList() {
  const booksContext = useContext(BooksContext);
  
  if (!booksContext) {
    throw new Error("BookList precisa estar dentro de BooksProvider.");
  }

  const { displayedBooks, handleReserve } = booksContext;

  if (displayedBooks.length === 0) {
    return <p>Nenhum livro no acervo.</p>;
  }

  return (
    <section className="book-list">
      {displayedBooks.map((book) => (
        <BookCard 
          key={book.id} 
          {...book}
          onReserve={handleReserve} 
        />
      ))}
    </section>
  );
}