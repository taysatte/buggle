import { OutputProps } from "./types";

const Output = ({ output, isLoading, testsPassed }: OutputProps) => {
  if (isLoading) {
    return <div className="text-sm text-muted-foreground">Loading...</div>;
  }
  return (
    <>
      <div className="text-sm text-muted-foreground">Output</div>
      {output.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </>
  );
};

export default Output;
