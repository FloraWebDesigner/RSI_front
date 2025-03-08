import { Menubar } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ui/mode-toggle";
import Link from "next/link";

function RSI_menu() {
  return (
    <Menubar className="flex justify-between">
      <div className="w-full p-2 flex gap-4 h-16 justify-center items-center mx-10">
        <Button variant="ghost">Home</Button>
        <Link href="#about" passHref>
          <Button variant="ghost">About</Button>
        </Link>
        <img src="img/logo.png" alt="logo" width="120" />
        <Link href="#business" passHref>
          <Button variant="ghost">Business</Button>
        </Link>
        <Link href="#contact" passHref>
          <Button variant="ghost">Contact</Button>
        </Link>
      </div>

      <ModeToggle />
    </Menubar>
  );
}

export { RSI_menu };
