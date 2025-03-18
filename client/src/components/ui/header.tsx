import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "/", label: "Home" },
  { href: "/meridian", label: "The Meridian" },
  { href: "/skyview", label: "Sky View" },
];

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-semibold text-white"
          >
            Milestone Builders
            <img
              src="/images/logo-icon-trans.png"
              alt="Milestone Builders"
              className="h-8 w-8"
            />
          </Link>

          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-sm ${currentPath === link.href ? "font-['Roboto Thin'] text-[rgb(255,234,87)]" : "text-white"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
