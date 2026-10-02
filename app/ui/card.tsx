import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  description: string;
}

export default function Card({ img, title, description }: CardProps) {
  return (
    <div
      className="
        p-4 bg-white rounded-xl shadow-md border border-[#E5D8C8]
        transition-all duration-300
        hover:-translate-x-2 hover:scale-[1.03] hover:shadow-xl
      "
    >
      <div className="w-full h-40 mb-4 relative rounded-lg overflow-hidden">
        <Image
          src={`/${img}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-md text-[#4A3F35]/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
