export default function StatCard({
  label,
  value,
  color = "",
  italic = false
}) {
  return (
    <div className="bg-[#2d3a2c]/40 p-6 rounded-2xl border border-[#3e4d3c]">
      <p className="text-[#6b7c5c] text-xs font-bold uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className={`text-3xl font-black ${color} ${italic ? 'italic' : ''}`}>
        {value}
      </p>
    </div>
  );
}
