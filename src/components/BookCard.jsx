export default function BookCard({ id, title, author, available, onReserve }) {
  return (
    <article className="book-card">
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <button type="button" onClick={() => onReserve(id)}>
        Reservar
      </button>
      <span className={`badge ${available ? "badge-ok" : "badge-off"}`}>
        {available ? "Disponível" : "Reservado"}
      </span>
    </article>
  );
}