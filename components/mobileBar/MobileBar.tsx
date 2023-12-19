import Link from "next/link";
import { Button } from "../ui/button";
import { SlCallOut } from "react-icons/sl";

const MobileBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-primary py-3 shadow-xl">
      <div className="flex items-center justify-center">
        <h3 className="text-2xl font-semibold text-white">Call Us Today </h3>
        <Link href={`tel:+330662436856`}>
          <Button className="text-2xl text-white flex gap-2">
            <SlCallOut className="text-2xl" />
            662.436.856
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileBar;
