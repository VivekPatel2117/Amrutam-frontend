import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  // Split and clean path
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Convert "special-commission" → "Special Commission"
  const formatBreadcrumb = (str: string) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav className="text-sm text-gray-600 mb-4 flex items-center gap-1">
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={to} className="text-green-800 font-medium">
            {formatBreadcrumb(value)}
          </span>
        ) : (
          <span key={to} className="flex items-center gap-1 font-medium">
            <Link to={to} className="hover:text-green-800">
              {formatBreadcrumb(value)}
            </Link>
            <span>/</span>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
