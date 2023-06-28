import React from "react";
import Select from "react-select";
import { AiOutlineDown } from "react-icons/ai";

const MultiSelectSearch = () => {
  const options = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "javascript", label: "Javascript" },
    { value: "illustrator", label: "Illustrator" },
    { value: "photoshop", label: "Photoshop" },
    { value: "php", label: "PHP" },
    { value: "python", label: "Python" },
  ];
  return (
    <Select
      isMulti
      options={options}
      components={{ DropdownIndicator: () => <AiOutlineDown /> }}
      placeholder="Select skills"
      className="w-full focus:outline-none outline-none"
      
    />
  );
};

export default MultiSelectSearch;
