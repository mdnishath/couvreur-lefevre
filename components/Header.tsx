"use client";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { menuItems } from "@/data/menuItems";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { SlCallOut } from "react-icons/sl";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="shadow-md bg-white py-2">
      <Container>
        <div className="flex items-center">
          <Link href={"/"} className="flex-shrink-0">
            <Image
              src={"images/logo.svg"}
              alt="Logo"
              height={250}
              width={250}
            />
          </Link>
          <div className="flex flex-grow">
            <ul className="flex md:space-x-5 w-full justify-center">
              {menuItems.map(({ name, path }) => (
                <li
                  key={path}
                  className={`${
                    pathname === path ? "text-primary" : ""
                  } font-semibold`}
                >
                  <Link href={path}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link href={`tel:+330662436856`}>
              <Button className="text-lg text-white flex gap-2">
                <SlCallOut className="text-xl" />
                662.436.856
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
