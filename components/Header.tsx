"use client";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { menuItems } from "@/data/menuItems";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { SlCallOut } from "react-icons/sl";
import { MdMenu } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="md:block shadow-md bg-white py-2">
      <Container>
        <div className="flex items-center relative">
          <Link href={"/"} className="flex-shrink-0">
            <Image
              src={"images/logo.svg"}
              alt="Logo"
              height={250}
              width={250}
            />
          </Link>
          <div className=" hidden md:flex flex-grow">
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
          <div className="hidden md:block">
            <Link href={`tel:+330662436856`}>
              <Button className="text-lg text-white flex gap-2">
                <SlCallOut className="text-xl" />
                662.436.856
              </Button>
            </Link>
          </div>
          <div className="flex w-full md:hidden justify-end">
            <Sheet>
              <SheetTrigger>
                <MdMenu className="text-4xl text-primary" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <p className=" border-b text-left">Menu</p>
                  </SheetTitle>
                  <ul className="flex flex-col items-start gap-3">
                    {menuItems.map(({ name, path }) => (
                      <li
                        key={path}
                        className={`${
                          pathname === path ? "text-primary" : ""
                        } font-semibold text-lg`}
                      >
                        <Link href={path}>{name}</Link>
                      </li>
                    ))}
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
