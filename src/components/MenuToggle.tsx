"use client";

import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/ui/DropdownMenu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import Button from "@/ui/Button";
import Icons from "./Icons";
import { useRouter } from "next/navigation";

interface MenuToggleProps {}

const MenuToggle: FC<MenuToggleProps> = () => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Icons.Menu className="h-6 w-6 text-slate-800 dark:text-slate-200 mr-6 ml-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem onClick={()=> router.push("/documentation")}>
          <Button variant="ghost">Documentation</Button>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=> router.push("/dashboard")}>
          <Button variant="ghost">Dashboard</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuToggle;
