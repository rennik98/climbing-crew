export default function ProjectItem({ title, status, grade }) {
  return (
    <div className="flex justify-between items-center p-4 bg-[#1b221a] rounded-xl border border-[#3e4d3c]">
      <div>
        <p className="font-bold text-[#f1f2e9]">{title}</p>
        <p className="text-sm text-[#6b7c5c]">
          Status: {status}
        </p>
      </div>
      <span className="bg-[#5a6d4a] px-3 py-1 rounded text-xs font-bold uppercase">
        {grade}
      </span>
    </div>
  );
}
