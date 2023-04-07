"use client";

import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import * as React from "react";
import { FC } from "react";
import { toast } from "@/ui/Toast";
import Button from "@/ui/Button";
import { GitBranchIcon, Github, GithubIcon, LucideGithub } from "lucide-react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const loginWithGitHub = async () => {
    setIsLoading(true);

    try {
      await signIn("github");
    } catch (error) {
      toast({
        title: "Error",
        message: "There was an error logging in with GitHub",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        isLoading={isLoading}
        type="button"
        className="max-w-sm w-full bg-slate-900"
        onClick={loginWithGitHub}
        disabled={isLoading}
      >
        {isLoading ? null : <Github className="h-6 w-6 mr-1 bg-slate-100 text-slate-900 p-1 rounded-full"/>}
        Github
      </Button>
    </div>
  );
};

export default UserAuthForm;
