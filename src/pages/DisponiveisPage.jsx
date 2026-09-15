import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import BookCard from "../components/BookCard";
import Panel from "../components/Panel";

export default function DisponiveisPage() {
  // Consumimos a lista completa e a função de reservar do contexto
  const { books, handleReserve } = useContext(BooksContext);
  
  // Filtramos apenas os livros disponíveis
  const availableBooks = books.filter(book => book.available);

  return (
    <>
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Livros Disponíveis</h1>
        <p>Confira o que está pronto para empréstimo imediato.</p>
        <p style={{ marginTop: '16px', fontWeight: 'bold' }}>
          {availableBooks.length} livros aguardando por você
        </p>
      </header>

      <Panel title="Apenas Disponíveis">
        {availableBooks.length === 0 ? (
          <p>Nenhum livro disponível no momento.</p>
        ) : (
          <section className="book-list">
            {availableBooks.map((book) => (
              <BookCard 
                key={book.id} 
                {...book}
                onReserve={handleReserve} 
              />
            ))}
          </section>
        )}
      </Panel>
    </>
  );
}