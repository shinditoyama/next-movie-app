import Image from "next/image";
import { useRouter } from "next/router";
import { Navbar } from "flowbite-react";
import ToggleButton from "./ToggleButton";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <Navbar>
      <Navbar.Brand href="/">
        <Image src="/logo.svg" width={220} height={44} alt="Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <ToggleButton />
        <Navbar.Toggle />
      </div>
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
    </Navbar>
  );
}
