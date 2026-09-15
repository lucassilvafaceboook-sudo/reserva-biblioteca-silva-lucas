import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import BookList from "../components/BookList";
import Panel from "../components/Panel";

export default function HomePage() {
  const { books, availableCount, showAvailable, setShowAvailable } = useContext(BooksContext);

  return (
    <>
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
        <p style={{ marginTop: '16px', fontWeight: 'bold' }}>
          {availableCount} de {books.length} livros disponíveis
        </p>
      </header>

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
        <BookList />
      </Panel>
    </>
  );
}