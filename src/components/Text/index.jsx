import React from "react";

const sizeClasses = {
  txtInterMedium25Gray600: "font-inter font-medium",
  txtInterSemiBold25: "font-inter font-semibold",
  txtInterSemiBold50Amber400: "font-inter font-semibold",
  txtInterSemiBold45: "font-inter font-semibold",
  txtInterMedium25: "font-inter font-medium",
  txtInterSemiBold50: "font-inter font-semibold",
  txtInterSemiBold35Black900: "font-inter font-semibold",
  txtInterMedium30: "font-inter font-medium",
  txtInterBold60: "font-bold font-inter",
  txtInterSemiBold25WhiteA700: "font-inter font-semibold",
  txtInterSemiBold90: "font-inter font-semibold",
  txtInterSemiBold40Amber4007c: "font-inter font-semibold",
  txtInterMedium40Blue800: "font-inter font-medium",
  txtInterSemiBold40WhiteA700: "font-inter font-semibold",
  txtInterRegular30: "font-inter font-normal",
  txtInterSemiBold35: "font-inter font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterBold50: "font-bold font-inter",
  txtInterSemiBold40: "font-inter font-semibold",
  txtInterSemiBold25Gray500: "font-inter font-semibold",
  txtInterSemiBold160: "font-inter font-semibold",
  txtInterSemiBold25Gray600: "font-inter font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtInterMedium30Black900: "font-inter font-medium",
  txtInterBold70: "font-bold font-inter",
  txtInterMedium40: "font-inter font-medium",
  txtInterSemiBold25Black900: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
