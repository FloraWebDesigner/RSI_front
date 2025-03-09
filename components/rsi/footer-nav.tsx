import { Menubar } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FooterMenu() {
  return (
    <nav className="flex flex-col gap-0">
      <Link href="#home" passHref>
        <Button variant="ghost">Home</Button>
      </Link>
      <Link href="#about" passHref>
        <Button variant="ghost">About</Button>
      </Link>
      <Link href="#business" passHref>
        <Button variant="ghost">Business</Button>
      </Link>
      <Link href="#contact" passHref>
        <Button variant="ghost">Contact</Button>
      </Link>
    </nav>
  );
}
