import { Menubar } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ui/mode-toggle";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "../ui/dropdown-menu";

function RSI_menu() {
  return (
    <Menubar className="flex justify-between">
      <div className="w-full p-2 flex gap-4 h-16 justify-center items-center mx-10">
        <Link href="/" passHref>
          <Button variant="ghost">Home</Button>
        </Link>
        <Link href="/About" passHref>
          <Button variant="ghost">About</Button>
        </Link>
        <img src="img/logo.png" alt="logo" width="120" />
        <DropdownMenu>
          <DropdownMenuTrigger className="font-medium p-2 rounded-md hover:bg-accent hover:text-accent-foreground hover:cursor-pointer">
            Business
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/Carpet" passHref>
                Carpet
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/Petzee" passHref>
                Petzee
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/Contact" passHref>
          <Button variant="ghost">Contact</Button>
        </Link>
      </div>
      <ModeToggle />
    </Menubar>
  );
}

export { RSI_menu };
