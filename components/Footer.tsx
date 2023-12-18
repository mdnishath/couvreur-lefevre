import Image from "next/image";
import React from "react";
import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <Container>
        <div className="w-full p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/images/logo.svg"
                className="h-16 bg-white"
                width={250}
                height={250}
                alt="Logo"
              />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium">
              <li>
                <Link href="/about" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline me-4 md:me-6">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:underline me-4 md:me-6">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-white sm:mx-autolg:my-8" />
          <span className="block text-sm text-white sm:text-center ">
            © 2023
            <Link href="https://nishath.com.bd/" className="hover:underline">
              Md Nishath Khandakar
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
