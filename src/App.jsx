import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import AcervoPage from "./pages/AcervoPage";
import NovoLivroPage from "./pages/NovoLivroPage";
import SobrePage from "./pages/SobrePage";
import NotFoundPage from "./pages/NotFoundPage";
import DisponiveisPage from "./pages/DisponiveisPage"; // Nova importação

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <strong>Biblioteca ITEAM</strong>
        <nav aria-label="Navegação principal">
          <NavLink to="/" end>Acervo</NavLink>
          <NavLink to="/disponiveis">Disponíveis</NavLink> {/* Novo Link */}
          <NavLink to="/novo">Novo Livro</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
      </header>

      <main className="app">
        <Routes>
          <Route path="/" element={<AcervoPage />} />
          <Route path="/disponiveis" element={<DisponiveisPage />} /> {/* Nova Rota */}
          <Route path="/novo" element={<NovoLivroPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}