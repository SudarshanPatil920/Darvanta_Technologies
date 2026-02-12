export function Loader() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-12 h-12 border-2 border-gray-100 rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-2 border-[#0A5C4E] rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
}