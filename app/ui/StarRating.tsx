import { FaStar } from "react-icons/fa";

export default function StarRating({
  rating,
  count,
}: {
  rating: number;
  count: number;
}) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-sm" />
      ))}
      <span className="text-xs text-gray-500">({count})</span>
    </div>
  );
}
