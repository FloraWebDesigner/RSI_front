import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CpCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export function CpHightlights({ title, desc, icon }: CpCardProps) {
  return (
    <Card className="border-0 flex justify-start items-center rounded-none">
      {icon}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p className="text-center">{desc}</p>
      </CardContent>
      {/* <CardFooter>
    <p>Card Footer</p>
  </CardFooter> */}
    </Card>
  );
}
