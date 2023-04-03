"use client"

import { FC, ReactNode } from "react";
import { ThemeProvider } from "next/themes";
import { SessionProvider } from "next/auth/react";

interface providersProps {
  children: ReactNode;
}

const Providers: FC<providersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
