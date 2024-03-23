import React from "react";

const FirstButton = ({ text = "Default-Text" }) => {
  return (
    <>
      <button
        className={`bg-[#CD8D7A] hover:bg-[#FFA893] text-white font-bold py-2 px-4 rounded`}
      >
        {text}
      </button>
    </>
  );
};

export default FirstButton;
