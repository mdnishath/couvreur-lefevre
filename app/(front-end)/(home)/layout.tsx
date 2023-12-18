import PlainLayout from "@/components/layouts/PlainLayout";
import { TChildren } from "@/types";

const layout = ({ children }: TChildren) => {
  return <PlainLayout>{children}</PlainLayout>;
};

export default layout;
