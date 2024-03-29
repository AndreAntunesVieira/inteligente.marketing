import React from "react";

const ButtonPrimary = ({ children, addClass, ...props }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-success-500 hover:shadow-success-md transition-all outline-none " +
        addClass
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
