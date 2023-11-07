import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[20px]" };
const variants = {
  fill: {
    blue_800: "bg-blue-800 text-white-A700",
    blue_800_01: "bg-blue-800_01 text-amber-400",
    white_A700: "bg-white-A700 text-black-900",
    blue_200: "bg-blue-200 text-indigo-A700",
  },
};
const sizes = {
  xs: "p-[9px]",
  sm: "p-[13px]",
  md: "p-[21px] sm:px-5",
  lg: "pl-[27px] pr-[21px] sm:px-5 py-[31px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "blue_200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_800", "blue_800_01", "white_A700", "blue_200"]),
};

export { Button };
