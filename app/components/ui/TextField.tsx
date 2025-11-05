export default function TextField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-black/8 px-3 py-2 border border-white/12 rounded-l-[8px] focus:outline-none focus:ring-0 focus:border-white/24 font-mono placeholder:text-white/80 md:text-[14px] text-[12px] text-white"
      />
    </div>
  );
}
