import React from 'react';

const Button = ({ text, colorClass, ...props }) => {
  return (
    <button
      className={`text-white font-bold py-2 px-4 rounded ${colorClass}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
