import React from "react";

interface RunButtonProps {
  onRun: () => void;
}

const RunButton = ({ onRun }: RunButtonProps) => {
  return (
    <button onClick={onRun}>
      {/* TODO: Implement button styling */}
      Run
    </button>
  );
};

export default RunButton;
