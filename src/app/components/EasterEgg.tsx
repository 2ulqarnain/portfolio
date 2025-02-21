import { Dispatch, FormEvent, SetStateAction } from "react";

const EasterEgg = ({
  setEnableMagic,
}: {
  setEnableMagic: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const value = (e.target as any).magicField.value;
    if (["Pickachu", "pickachu"].includes(value)) {
      setEnableMagic(true);
    } else setEnableMagic(false);
  };
  return (
    <form className="fixed top-5 right-5" onSubmit={handleSubmit}>
      <input
        name="magicField"
        className="p-2 pl-4 placeholder:text-zinc-500 placeholder:capitalize uppercase focus:outline-none focus:border-violet-400 rounded-full border border-zinc-500 bg-transparent focus:shadow-xl focus:shadow-violet-800"
        placeholder="Type your secret"
      />
    </form>
  );
};

export default EasterEgg;
