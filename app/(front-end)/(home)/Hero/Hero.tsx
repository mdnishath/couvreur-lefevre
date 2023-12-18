import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-[url('/hero.webp')] h-[600px] bg-cover bg-no-repeat bg-center ">
      <div className="h-full bg-slate-700 bg-opacity-70 w-full flex items-center justify-center flex-col">
        <h1 className="text-center font-bold text-white md:text-4xl">
          Couvreur Lefèvre - Your <span className="text-primary">Trusted</span>{" "}
          Roofing Experts
        </h1>
        <h3 className="md:text-2xl mt-4 text-white">
          Expert Roofing Solutions in Marines
        </h3>
        <p className="md:w-[700px] text-white text-center mt-3">
          At Couvreur Lefèvre, we understand the importance of a strong and
          reliable roof for your home or business. With years of experience
          serving the Marines area, we have become the go-to roofing experts for
          quality craftsmanship and unparalleled customer service.
        </p>
        <div>
          <Button className="font-semibold text-lg mt-4">
            Get Free Estimate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
