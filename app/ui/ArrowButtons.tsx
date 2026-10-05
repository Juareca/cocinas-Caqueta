type Props = {
    onPrev: () => void;
    onNext: () => void;
};

export default function ArrowButtons({ onPrev, onNext }: Props) {
    return (
        <>
        {/* Flecha izquierda */}
        <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#007F5F] text-white px-3 py-2 mt-16 rounded-full shadow-lg hover:bg-[#005f46] transition"
        >
            {"<"}
        </button>

        {/* Flecha derecha */}
        <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#007F5F] text-white px-3 py-2 mt-16 rounded-full shadow-lg hover:bg-[#005f46] transition"
        >
            {">"}
        </button>
        </>
    );
}