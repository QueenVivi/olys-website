import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="navbar py-4 py-md-5">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <span className="h1">Oly Su</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
