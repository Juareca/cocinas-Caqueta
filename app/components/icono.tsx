export default function Icono({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="flex items-center justify-center">
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
}