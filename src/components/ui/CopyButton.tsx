import { ButtonHTMLAttributes, FC } from "react";
import Button from "@/ui/Button";
import { toast } from "@/ui/Toast";
import { Copy } from "lucide-react";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
  childrenValue?: string;
}

const CopyButton: FC<CopyButtonProps> = ({
  valueToCopy,
  childrenValue,
  className,
  ...props
}) => {
  const handleCopyToClipBoard = () => {
    navigator.clipboard.writeText(valueToCopy);
    toast({
      title: "Copied!",
      message: "API Key copied to clipboard",
      type: "success",
    });
  };

  return (
    <Button
      variant="ghost"
      onClick={handleCopyToClipBoard}
      className={className}
      {...props}
    >
      <Copy className="h-5 w-5" />
      {childrenValue && <p className="ml-2">{childrenValue}</p>}
    </Button>
  );
};

export default CopyButton;
