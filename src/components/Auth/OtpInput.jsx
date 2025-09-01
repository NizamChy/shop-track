import React, { useRef, useState } from "react";

const OtpInput = ({ setPassword }) => {
  const [autoOtp, setAutoOtp] = useState("");
  const navigationInputs = useRef([]);

  const length = 6;

  const onChange = (value) => {
    setAutoOtp(value);
    setPassword(value);
  };

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...navigationInputs.current.map((input) => input.value)];

    if (/^[0-9]$/.test(value) && value.length === 1) {
      newOtp[index] = value;
      onChange(newOtp.join(""));

      if (index < length - 1) {
        navigationInputs.current[index + 1].focus();
      }
    } else if (value === "") {
      newOtp[index] = "";
      onChange(newOtp.join(""));
    } else {
      e.target.value = value.slice(0, 1);
    }
  };

  const handlePaste = (e, index) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, length);
    const newOtp = [...navigationInputs.current.map((input) => input.value)];

    for (let i = 0; i < pastedData.length && i < length; i++) {
      newOtp[i] = pastedData[i];
      navigationInputs.current[i].value = pastedData[i];
    }
    onChange(newOtp.join(""));

    const focusIndex = Math.min(pastedData.length, length - 1);
    navigationInputs.current[focusIndex].focus();
  };

  const handleKeydown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !navigationInputs.current[index].value &&
      index > 0
    ) {
      navigationInputs.current[index - 1].focus();
    }
  };

  return (
    <div className="grid grid-cols-6 gap-[10px] w-full">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (navigationInputs.current[index] = el)}
          className="p-3 text-center border border-[#bcbcbc] rounded-md outline-none focus:border-teal-600"
          placeholder="0"
          onWheel={(e) => e.target.blur()}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeydown(e, index)}
          onPaste={(e) => handlePaste(e, index)}
          type="number"
        />
      ))}
    </div>
  );
};

export default OtpInput;
