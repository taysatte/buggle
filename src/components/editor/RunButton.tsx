import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";

export interface RunButtonProps {
  onRun: () => void;
}

export const RunButton = ({ onRun }: RunButtonProps) => {
  return (
    <Button variant="outline" size="sm" onClick={onRun}>
      <PlayIcon className="size-4" />
      Run
    </Button>
  );
};
