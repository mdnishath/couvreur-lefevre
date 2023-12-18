import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Roofer = () => {
  return (
    <section className="py-10 px-3 md:px-0">
      <Container>
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold">
              Best Roofing services in Marines
            </h3>
            <p className="mt-6">
              Experience top-notch roofing services in Marines with our expert
              team dedicated to delivering excellence. From meticulous
              inspections to precise installations, we prioritize quality
              craftsmanship to ensure your roof stands strong against the marine
              elements. Our skilled professionals use cutting-edge materials,
              providing durability and longevity. With a commitment to customer
              satisfaction, we offer personalized solutions tailored to your
              specific needs. Trust us for the best roofing services that blend
              reliability and expertise in the picturesque setting of Marines.
            </p>
            <div>
              <Button className="font-semibold text-lg mt-6">
                Get Free Estimate
              </Button>
            </div>
          </div>
          <div>
            <Image
              src={"/images/best-roofer.jpg"}
              alt="Best Roofing services in Marines "
              width={600}
              height={600}
              className="h-[400px] object-cover shadow-lg rounded-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Roofer;
