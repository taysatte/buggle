import { SendIcon } from "lucide-react";
import { EditorButton } from "@/components/editor/EditorButton";

export interface SubmitButtonProps {
  onSubmit: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export const SubmitButton = ({
  onSubmit,
  disabled = false,
  isLoading = false,
}: SubmitButtonProps) => {
  return (
    <EditorButton
      size="lg"
      onClick={onSubmit}
      icon={SendIcon}
      label="Submit"
      disabled={disabled}
      isLoading={isLoading}
    />
  );
};
