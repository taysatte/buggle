import React from "react";

export interface SubmitButtonProps {
  onSubmit: () => void;
}

export const SubmitButton = ({ onSubmit }: SubmitButtonProps) => {
  return (
    <button onClick={onSubmit}>
      {/* TODO: Implement button styling */}
      Submit
    </button>
  );
};
