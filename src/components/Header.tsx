import Image from "next/image";
import { useRouter } from "next/router";
import { Navbar } from "flowbite-react";
import ToggleButton from "./ToggleButton";
import SearchBar from "./SearchBar";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <Navbar>
      <div className="md:flex md:space-x-8 items-center">
        <Navbar.Brand href="/">
          <Image src="/logo.svg" width={220} height={44} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={pathname === "/"}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/movie" active={pathname === "/movie"}>
            Movie
          </Navbar.Link>
          <Navbar.Link href="/tv" active={pathname === "/tv"}>
            Serie
          </Navbar.Link>
          <Navbar.Link href="/people" active={pathname === "/people"}>
            Person
          </Navbar.Link>
          <Navbar.Link href="/search" active={pathname === "/search"}>
            Search
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
      <div className="flex space-x-4">
        <SearchBar />
        <ToggleButton />
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
