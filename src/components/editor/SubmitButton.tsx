import { SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface SubmitButtonProps {
  onSubmit: () => void;
}

export const SubmitButton = ({ onSubmit }: SubmitButtonProps) => {
  return (
    <Button variant="outline" size="sm" onClick={onSubmit}>
      <SendIcon className="size-4" />
      Submit
    </Button>
  );
};
