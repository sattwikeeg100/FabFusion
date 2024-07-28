import React from "react";

const sizes = {
  s: "text-4xl font-bold",
  md: "text-[56px] font-bold",
  xs: "text-2xl font-bold",
  lg: "text-[64px] font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
