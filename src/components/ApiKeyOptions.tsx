"use client";

import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import Button from "@/ui/Button";
import { Loader2 } from "lucide-react";
import CopyButton from "@/ui/CopyButton";

interface APiKeyOptionsProps {
  apiKeyId: string;
  apiKey: string;
}

const APiKeyOptions: FC<APiKeyOptionsProps> = ({ apiKeyId, apiKey }) => {
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [isRevoking, setIsRevoking] = useState<boolean>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isCreatingNew || isRevoking} asChild>
        <Button variant="ghost" className="flex gap-2 items-center">
          <p>
            {isCreatingNew
              ? "Creating new key"
              : isRevoking
              ? "Revoking key"
              : "options"}
          </p>
          {isCreatingNew || isRevoking ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : null}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>Create new key</DropdownMenuItem>
        <DropdownMenuItem>Revoke key</DropdownMenuItem>
        <DropdownMenuItem>
          <CopyButton className="p-0" valueToCopy={apiKey || ""} childrenValue="copy" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default APiKeyOptions;
