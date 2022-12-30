export default function Footer() {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return (
    <footer>
      <div className="container">
        <p>all works are copyright Oly Su {currentYear}</p>
      </div>
    </footer>
  );
}
