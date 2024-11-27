export default function SectionPlaceholder({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex col-start-2 text-stone-400 uppercase text-xl font-bold rounded-xl items-center relative h-[150px]">
      {children}
    </div>
  );
}
