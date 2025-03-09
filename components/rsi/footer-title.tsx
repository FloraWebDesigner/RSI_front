interface FooterTitleProp {
  title: string;
}
export function FooterTitle({ title }: FooterTitleProp) {
  return <h3 className="text-lg font-semibold text-center mb-4">{title}</h3>;
}
