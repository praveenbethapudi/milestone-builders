import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const links = [
  { href: "/", label: "Home" },
  { href: "/meridian", label: "The Meridian" },
  { href: "/skyview", label: "SkyView" },
];

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className='pl-6 text-2xl font-["Orbitron"] text-[#FFEA57]'>
            Milestone Builders
          </div>
          <img 
            src="/images/logo-icon-trans.png" 
            alt="Milestone Builders" 
            className="h-12 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm ${
                currentPath === link.href
                  ? 'font-["Orbitron"] text-[#FFEA57]'
                  : 'font-["Orbitron"] text-white hover:text-[#FFEA57] transition-colors'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
} 