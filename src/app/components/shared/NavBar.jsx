import Link from "next/link";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar flex-col items-center sm:flex-row container mx-auto">
        <div className="flex-1">
          <Link href={"/"} className=" text-2xl xl:text-3xl font-semibold">
            <span className="font-bold">Bondhu</span>Track
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center">
            <NavLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
