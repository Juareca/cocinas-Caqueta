import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Icono() {
  return (
    <Link href="/">
      <div className="h-9 w-9 bg-green-700 rounded-full flex items-center justify-center shadow-md">
        <HomeIcon className="text-white h-5 w-5" />
      </div>
    </Link>
  );
}