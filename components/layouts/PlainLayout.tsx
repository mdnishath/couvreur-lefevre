import { TChildren } from "@/types";
import Header from "../Header";
import Footer from "../Footer";
import MobileBar from "../mobileBar/MobileBar";

const PlainLayout = ({ children }: TChildren) => {
  return (
    <div>
      <Header />
      {children}
      <MobileBar />
      <Footer />
    </div>
  );
};

export default PlainLayout;
