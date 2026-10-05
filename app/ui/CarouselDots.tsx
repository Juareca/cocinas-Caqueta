type Props = {
  scrollSnaps: number[];
  selectedIndex: number;
  onDotClick: (index: number) => void;
};

export function CarouselDots({ scrollSnaps, selectedIndex, onDotClick }: Props) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition ${
            index === selectedIndex ? "bg-[#007F5F]" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
