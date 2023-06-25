import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="HeaderLink">
        <img src="https://super.so/icon/dark/users.svg" alt="users" />
        <h1>Employee Management</h1>
      </Link>
    </header>
  );
}
