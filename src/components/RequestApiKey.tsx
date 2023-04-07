"use client";

import { FC, FormEvent, useState } from "react";
import createApiKey from "@/helpers/create.api.key";
import { Key } from "lucide-react";
import { toast } from "@/ui/Toast";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import CopyButton from "@/ui/CopyButton";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import { useRouter } from "next/navigation";

interface RequestApiKeyProps {}

const RequestApiKey: FC<RequestApiKeyProps> = () => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>("");
  const router = useRouter();

  const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const generateApiKey = await createApiKey();
      setApiKey(generateApiKey);
      setTimeout(() => router.refresh(), 2500);
    } catch (err) {
      if (err instanceof Error) {
        toast({
          title: "Error",
          message: err.message,
          type: "error",
        });
        return;
      }

      toast({
        title: "Error",
        message: "Something went wrong.",
        type: "error",
      });
    } finally {
      setTimeout(() => setIsCreating(false), 2500);  
    }
  };
  return (
    <div className="container max-w-2xl">
      <div className="flex flex-col gap-6 items-center">
        <Key className="h-12 w-12 mx-auto text-gray-400" />
        <LargeHeading>Request your API Key</LargeHeading>
        <Paragraph>You haven&apos;t Requested an API Key yet.</Paragraph>

        <form
          onSubmit={createNewApiKey}
          className="mt-6 sm:flex sm:items-center"
          action="#"
        >
          <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
            {apiKey ? (
              <CopyButton
                valueToCopy={apiKey}
                type="button"
                className="absolute inset-y-0 right-0 animate-in fade-in duration-300"
              />
            ) : null}
            <Input
              readOnly
              value={apiKey ?? ""}
              placeholder="Request an API Key to display it here!"
            />
          </div>

          <div className="mt-3 justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
            <Button disabled={!!apiKey} isLoading={isCreating}>
              Request Key
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestApiKey;
