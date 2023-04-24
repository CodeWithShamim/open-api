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
import { toast } from "@/ui/Toast";
import { useRouter } from "next/navigation";
import createApiKey from "@/helpers/create.api.key";
import revokeApiKey from "@/helpers/revoke.api.key";

interface APiKeyOptionsProps {
  apiKeyId: string;
  apiKey: string;
}

const APiKeyOptions: FC<APiKeyOptionsProps> = ({ apiKeyId, apiKey }) => {
  const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false);
  const [isRevoking, setIsRevoking] = useState<boolean>(false);
  const router = useRouter();

  const createNewApiKey = async () => {
    setIsCreatingNew(true);

    try {
      await revokeApiKey({ keyId: apiKeyId });
      await createApiKey();
      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        toast({
            title: "Error creating API Key.",
          message: error.message,
          type: "error",
        });
        return;
      }
      toast({
        title: "Error creating API Key.",
        message: "Something went wrong.",
        type: "error",
      });
    } finally {
      setIsCreatingNew(false);
    }
  };

  const revokeCurrentApiKey = async () => {
    setIsRevoking(true);

    try {
      await revokeApiKey({ keyId: apiKeyId });
      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error Revoking API Key.",
          message: error.message,
          type: "error",
        });
        return;
      }
      toast({
        title: "Error Revoking API Key.",
        message: "Something went wrong.",
        type: "error",
      });
    } finally {
      setIsRevoking(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isCreatingNew || isRevoking} asChild>
        <Button variant="default" className="flex gap-2 items-center">
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
        <DropdownMenuItem onClick={createNewApiKey}>
          Create new key
        </DropdownMenuItem>
        <DropdownMenuItem onClick={revokeCurrentApiKey}>
          Revoke key
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CopyButton
            className="p-0"
            valueToCopy={apiKey || ""}
            childrenValue="copy"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default APiKeyOptions;
