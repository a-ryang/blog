import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="py-2 mx-auto">
      <h1 className="sr-only">네비게이션</h1>
      <ul className="flex space-x-6 text-lg justify-center">
        <li>
          <NavLink href="/blog">blog</NavLink>
        </li>
        <li>
          <NavLink href="/">about</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
