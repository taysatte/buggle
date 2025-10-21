import { OutputProps } from "./types";

const Output = ({ output, isLoading, testsPassed }: OutputProps) => {
  return (
    <>
      <div>
        <ul>
          {output.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Output;
