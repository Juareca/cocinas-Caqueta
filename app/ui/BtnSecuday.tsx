export default function BtnSecondary({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border-2 border-[#007F5F] text-[#007F5F] font-semibold text-base bg-white transition-all hover:bg-[#007F5F] hover:text-white active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}