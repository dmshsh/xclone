export default function SearchBar({ value, onChange }) {
  return (
    <div className="mx-3 my-4">
      <input
        type="text"
        placeholder="Search!"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="rounded-xl border outline-none h-10 px-3 w-full"
      />
    </div>
  );
}
