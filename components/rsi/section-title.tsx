interface TitleProps {
  myTitle: string;
  id?: string;
}

export function SectionTitle({ myTitle, id }: TitleProps) {
  return (
    <h2
      id={id}
      className="scroll-m-20 text-3xl font-semibold tracking-tight mt-10 mb-5 text-center"
    >
      {myTitle}
    </h2>
  );
}
