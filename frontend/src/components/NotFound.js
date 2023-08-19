import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main className="not-found">
      <p className="not-found__text">Такой страницы не существует!</p>
      <Link className="not-found__button" to="/">На главную</Link>
    </main>
  );
}

export default NotFound;