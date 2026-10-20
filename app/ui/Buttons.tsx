import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  className,
}: ButtonProps) {
  const styles = clsx(
    "px-3 py-2 text-sm",
    "md:px-8 md:py-2 md:text-lg",
    "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-[#007F5F] text-white font-semibold text-base transition-all hover:bg-[#006a4f] active:scale-95",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles}>
      {children}
    </button>
  );
}