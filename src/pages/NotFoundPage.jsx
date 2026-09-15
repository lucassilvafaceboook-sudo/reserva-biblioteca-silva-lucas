import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section>
      <h1>404 - Página não encontrada</h1>
      <p>O endereço que você digitou não existe no nosso acervo.</p>
      <Link to="/">Voltar para o início</Link>
    </section>
  );
}