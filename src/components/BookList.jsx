import BookCard from "./BookCard";

export default function BookList({ books, onReserve }) {
  if (books.length === 0) {
    return <p>Nenhum livro no acervo.</p>;
  }

  return (
    <section className="book-list">
      {books.map((book) => (
        <BookCard 
          key={book.id} 
          {...book}
          onReserve={onReserve} 
        />
      ))}
    </section>
  );
}