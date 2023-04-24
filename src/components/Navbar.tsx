import { getServerSession } from "next-auth";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "@/ui/Button";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";
import ThemeToggle from "@/components/ThemeToggle";
import { authOptions } from "@/lib/auth";
import MenuToggle from "./MenuToggle";

interface navbarProps {}

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 left-0 right-0 top-0 border-b border-slate-300 dark:border-slate-700 shadow-sm flex justify-between items-center">
      <div className="container  max-w-7xl mx-auto w-full flex justify-between items-center p-2">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          Open Api
        </Link>

        {/* for mobile device  */}
        <div className="md:hidden flex items-center justify-center">
          <ThemeToggle />
          <MenuToggle />
          {session ? <SignOutButton /> : <SignInButton />}
        </div>

        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>

          {session ? (
            <>
              <Link
                href="/dashboard"
                className={buttonVariants({ variant: "ghost" })}
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
