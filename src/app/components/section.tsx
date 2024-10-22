import SectionLabel from "./sectionLabel";

export default function Section({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <>
      <SectionLabel className="col-start-1">{label}</SectionLabel>
      {children}
    </>
  );
}
