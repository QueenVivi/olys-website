export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container my-6">
        <p>all works are copyright Oly Su {currentYear}</p>
      </div>
    </footer>
  );
}
