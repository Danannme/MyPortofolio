export function Footer() {
  return (
    <footer className="shell border-t border-hairline py-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="label">&copy; 2026 Robbi Zaidan Ahmad</p>
        <p className="label hidden sm:block">Dibuat dengan React &amp; Tailwind</p>
        <a href="#home" className="link-underline label text-fg">
          Kembali ke atas
        </a>
      </div>
    </footer>
  );
}
