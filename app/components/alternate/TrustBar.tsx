export default function TrustBar({ items }: { items: string[] }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/80">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          {item}
          {index < items.length - 1 && (
            <span className="mx-3 text-white/40">•</span>
          )}
        </span>
      ))}
    </div>
  );
}
