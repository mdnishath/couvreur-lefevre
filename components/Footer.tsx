import Image from "next/image";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import { FaRegBuilding, FaRegClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary pt-10 md:pt-20 md:pb-5 p-3">
      <Container>
        <div className="grid md:grid-cols-4">
          <div>
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={250}
              height={250}
              className="bg-white h-16 mx-auto md:mx-0"
            />
            <p className="mt-3 text-primary-foreground text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              asperiores minus delectus dolorum, autem nostrum aliquam quam enim
              quod fugiat deleniti vel nobis eum. Esse voluptates cumque iure.
              Dicta, nemo.
            </p>
          </div>
          <div className="md:pl-20 mt-3 md:mt-0">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <ul className="mt-3 text-primary-foreground">
              <li className="mb-3">
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/gallery">
                  <p>Gallery</p>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/reviews">
                  <p>Reviews</p>
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-3 md:mt-0">
            <h3 className="text-2xl font-semibold">Contact Info</h3>
            <div className="flex gap-2 items-center mt-4">
              <FaRegBuilding className="text-primary-foreground text-xl" />
              <p className="text-primary-foreground text-xl">
                Couvreur Lefèvre
              </p>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <FaPhone className="text-primary-foreground text-xl" />
              <p className="text-primary-foreground text-xl">662.436.856</p>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <FaRegClock className="text-primary-foreground text-xl" />
              <p className="text-primary-foreground text-xl">Open: 24/7</p>
            </div>
          </div>
          <div className="md:mt-0 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d300178.3249820358!2d4.988745376006903!3d45.65361436379477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a33d5809dfb47fb%3A0x52a7b16566d11435!2sCouvreur%20Lef%C3%A8vre!5e0!3m2!1sen!2sbd!4v1702929251092!5m2!1sen!2sbd"
              width="100%"
              height="250"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
