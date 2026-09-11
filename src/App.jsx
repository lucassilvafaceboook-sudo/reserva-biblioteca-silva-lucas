import "./App.css";
import { books } from "./data/books";
import BookList from "./components/BookList";
import Panel from "./components/Panel";

export default function App() {
  function handleReserve(bookId) {
    window.alert(`Livro ${bookId} — ação ainda não implementada`);
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
      </header>

      <Panel title="Acervo">
        <BookList books={books} onReserve={handleReserve} />
      </Panel>
    </main>
  );
}