import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const location = useLocation();

  const links = [
    { name: "Cases", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 py-4">
        <div className="flex items-center justify-between">

          {/* Brand name */}
          <Link
            to="/"
            className="brand-name"
            style={{
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "24px",
              color: "#6D2F13",
              letterSpacing: "0",
            }}
          >
            Marie Krause.
          </Link>

          {/* Navigation Links */}
          <ul className="flex gap-8">
            {links.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: isActive ? 700 : 300,
                      fontSize: "14px",
                      color: isActive ? "#6D2F13" : "#000000",
                      transition: "color 0.2s ease",
                    }}
                    className="hover:text-gray-600"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

        </div>
      </div>
    </nav>
  );
}
