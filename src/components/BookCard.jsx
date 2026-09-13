export default function BookCard({ id, title, author, year, available, onReserve }) {
  return (
    <article className="book-card">
      <div>
        <h2>{title}</h2>
        {/* Mostrando o ano de publicação junto com o autor */}
        <p>{author} • {year}</p>
      </div>
      <button type="button" onClick={() => onReserve(id)}>
        {available ? "Reservar" : "Devolver"}
      </button>
      <span className={`badge ${available ? "badge-ok" : "badge-off"}`}>
        {available ? "Disponível" : "Reservado"}
      </span>
    </article>
  );
}