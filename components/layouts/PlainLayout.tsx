import { TChildren } from "@/types";
import Header from "../Header";
import Footer from "../Footer";

const PlainLayout = ({ children }: TChildren) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PlainLayout;
