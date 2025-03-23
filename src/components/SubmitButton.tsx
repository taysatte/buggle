import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

type SubmitButtonProps = {
  onClick: () => void;
  isLoading: boolean;
};

const SubmitButton = ({ onClick, isLoading }: SubmitButtonProps) => {
  return (
    <Button
      variant={"default"}
      className="cursor-pointer"
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Send className="mr-2 h-4 w-4" />
      )}
      {isLoading ? "submitting..." : "submit"}
    </Button>
  );
};

export default SubmitButton;
