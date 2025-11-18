interface IndustryTileProps {
  title: string;
  description: string;
  bullets: string[];
  link: string;
}

export default function IndustryTile({ title, description, bullets, link }: IndustryTileProps) {
  return (
    <a
      href={link}
      className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
    >
      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-light-blue transition-colors">
        {title}
      </h3>
      <p className="text-sm text-text-gray mb-4">{description}</p>
      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-sm text-text-dark flex items-start">
            <span className="text-light-blue mr-2 flex-shrink-0">→</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </a>
  );
}
