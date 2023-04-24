"use client";

import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/ui/DropdownMenu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { buttonVariants } from "@/ui/Button";
import Link from "next/link";
import Icons from "./Icons";

interface MenuToggleProps {}

const MenuToggle: FC<MenuToggleProps> = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Icons.Menu className="h-6 w-6 text-slate-800 dark:text-slate-200 mr-6 ml-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem>
          <div>
            <Link
              href="/documentation"
              className={buttonVariants({ variant: "ghost" })}
            >
              Documentation
            </Link>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/dashboard"
            className={buttonVariants({ variant: "ghost" })}
          >
            Dashboard
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuToggle;
