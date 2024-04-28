import React from "react";

const Button = ({text, icon, ...rest}) => {
  return (
    <div>
      <button {...rest} className="flex gap-[1vw] items-center justify-center px-4 py-2 rounded-lg bg-black text-white transition-colors duration-300 hover:bg-gray-800">
        <div className="icon">{icon}</div>
        <div className="text">{text}</div>
      </button>
    </div>
  );
};

export default Button;
