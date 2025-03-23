import { Play, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type RunButtonProps = {
  onClick?: () => void;
  isLoading: boolean;
};

const RunButton = ({ onClick, isLoading }: RunButtonProps) => {
  return (
    <Button
      variant={"secondary"}
      className="cursor-pointer"
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Play className="mr-2 h-4 w-4" />
      )}
      {isLoading ? "running..." : "run code"}
    </Button>
  );
};

export default RunButton;
