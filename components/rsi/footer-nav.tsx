import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FooterMenu() {
  return (
    <nav className="flex flex-col gap-0">
      <Link href="/" passHref>
        <Button variant="ghost">Home</Button>
      </Link>
      <Link href="/About" passHref>
        <Button variant="ghost">About</Button>
      </Link>
      <Link href="/WovenConcept" passHref>
        <Button variant="ghost">Woven Carpet</Button>
      </Link>
      <Link href="/Petzee" passHref>
        <Button variant="ghost">Petzee</Button>
      </Link>
      <Link href="/Contact" passHref>
        <Button variant="ghost">Contact</Button>
      </Link>
    </nav>
  );
}
