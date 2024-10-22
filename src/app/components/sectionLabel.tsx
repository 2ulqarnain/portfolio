export default function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={` text-stone-400 text-xl pl-5 font-bold uppercase ${className}`}
    >
      {children}
    </h2>
  );
}
