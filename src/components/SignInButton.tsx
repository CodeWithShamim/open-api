"use client";
import { FC, useState } from "react";
import Button from "@/ui/Button";
import { toast } from "@/ui/Toast";
import { signIn } from "next-auth/react";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGithub = async () => {
    setIsLoading(true);

    try {
      await signIn("github")
    } catch (error) {
      toast({
        title: "Error singing in",
        message: "Please try again later",
        type: "error",
      });
    }

    // setIsLoading(false);
  };

  return (
    <Button onClick={signInWithGithub} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
