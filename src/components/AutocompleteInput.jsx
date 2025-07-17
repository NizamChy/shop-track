"use client";

import React, { useState } from "react";

function AutocompleteInput({ options = ["a", "b"] }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Filter options based on input value
    const newFilteredOptions = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(newFilteredOptions);
    setShowDropdown(true); // Show dropdown when typing
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)} // Show dropdown on focus
        onBlur={() => setTimeout(() => setShowDropdown(false), 100)} // Hide dropdown on blur with a slight delay
        placeholder="Type to search..."
      />
      {showDropdown && filteredOptions.length > 0 && (
        <ul className="dropdown-list">
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutocompleteInput;
