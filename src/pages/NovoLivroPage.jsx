import BookForm from "../components/BookForm";
import Panel from "../components/Panel";

export default function NewBookPage() {
  return (
    <>
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Adicionar ao acervo</h1>
      </header>
      <Panel title="Novo livro">
        <BookForm />
      </Panel>
    </>
  );
}