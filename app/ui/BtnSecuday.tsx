export default function BtnSecondary({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        group inline-flex items-center justify-center gap-2
        h-12 px-6 rounded-lg border-2 border-[#007F5F]
        font-semibold text-base bg-white transition-all
        ${className}
      `}
    >
      <span className="text-[#007F5F] group-hover:text-white transition-colors">
        {children}
      </span>
    </button>
  );
}
