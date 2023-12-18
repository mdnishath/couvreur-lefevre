import { TChildren } from "@/types";
import React from "react";

const Container = ({ children }: TChildren, className?: string) => {
  return (
    <div className={`max-w-screen-xl mx-auto ${className && className}`}>
      {children}
    </div>
  );
};

export default Container;
