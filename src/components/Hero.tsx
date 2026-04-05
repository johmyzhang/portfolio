interface HeroProps {
  heroQuote: string;
  heroBio: string;
}

export default function Hero({ heroQuote, heroBio }: HeroProps) {
  return (
    <header className="max-w-3xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-[#3A3A3A] font-serif">
        {heroQuote?.split("\n").map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
        {heroBio?.split("\n").map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </p>
    </header>
  );
}
