import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ServiceExplain = () => {
  return (
    <>
      <section className="pt-10 px-3 md:px-0">
        <Container>
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div>
              <Image
                src={"/images/roofer.jpg"}
                width={600}
                height={600}
                alt="Roofer"
                className="w-full"
              />
            </div>
            <div className="p-3 md:p-10 md:pr-0">
              <h3 className="text-3xl font-bold ">Roofer in Marines</h3>
              <p className="mt-4">
                Our roofing services encompass a broad spectrum, ranging from
                routine maintenance to intricate installations. With a team of
                skilled roofers dedicated to excellence, we prioritize the
                longevity and resilience of your roof. From leak detection and
                repairs to complete overhauls, our craftsmanship stands as a
                testament to quality work. Committed to customer satisfaction,
                we blend precision and expertise to ensure your roof remains a
                sturdy shield against the elements. Our holistic approach
                considers both functionality and aesthetics, making us the go-to
                choice for all your roofing needs.
              </p>
              <div>
                <Button className="font-semibold text-lg mt-4">
                  Get Free Estimate
                </Button>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-3 md:p-10 md:pl-0 order-2 md:order-1">
              <h3 className="text-3xl font-bold ">Tile Roofing in Marines</h3>
              <p className="mt-4">
                Explore a world of roofing elegance with our diverse tile
                roofing solutions. Whether you lean towards classic designs or
                modern aesthetics, our expert installers bring a perfect blend
                of artistry and technical finesse to each project. Our tile
                roofing options not only elevate the visual appeal of your
                property but also boast unmatched durability against harsh
                weather conditions. We offer a range of styles and colors,
                allowing you to personalize your roof with a touch of
                sophistication that lasts for years.
              </p>
              <div>
                <Button className="font-semibold text-lg mt-4">
                  Get Free Estimate
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src={"/images/tile-roofing.jpg"}
                width={600}
                height={600}
                alt="Roofer"
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div>
              <Image
                src={"/images/z-roofing.jpg"}
                width={600}
                height={600}
                alt="Zinc Roofing"
                className="w-full"
              />
            </div>
            <div className="p-4 md:p-10 md:pr-0">
              <h3 className="text-3xl font-bold ">Zinc Roofing in Marines</h3>
              <p className="mt-4">
                Choose a roofing solution that aligns with environmental
                consciousness and contemporary design – our zinc roofing
                services. Beyond its sleek appearance, zinc roofing offers
                exceptional corrosion resistance, longevity, and minimal
                maintenance requirements. Our seasoned professionals ensure
                precise installation, crafting roofs that not only stand out for
                their modern aesthetic but also contribute to sustainable
                building practices.
              </p>
              <div>
                <Button className="font-semibold text-lg mt-4">
                  Get Free Estimate
                </Button>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-4 md:p-10 md:pl-0 order-2 md:order-1">
              <h3 className="text-3xl font-bold ">Slate Roofing in Marines</h3>
              <p className="mt-4">
                {`Immerse yourself in the timeless beauty of natural slate with
                our expert slate roofing services. Meticulously installed by
                skilled craftsmen, slate roofing adds an unmistakable touch of
                elegance to your property. Beyond its aesthetic appeal, slate
                roofing stands as a symbol of durability, weathering even the
                harshest conditions with grace. We take pride in delivering a
                roofing solution that not only enhances your home's character
                but also provides long-lasting performance.`}
              </p>
              <div>
                <Button className="font-semibold text-lg mt-4">
                  Get Free Estimate
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src={"/images/slate-roof.jpg"}
                width={600}
                height={600}
                alt="Roofer"
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServiceExplain;
