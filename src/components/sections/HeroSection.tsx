const CloudBackground = () => (
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-10 left-10 w-20 h-12 bg-white rounded-full"></div>
    <div className="absolute top-8 left-16 w-16 h-8 bg-white rounded-full"></div>
    <div className="absolute top-16 right-20 w-24 h-14 bg-white rounded-full"></div>
    <div className="absolute top-12 right-32 w-18 h-10 bg-white rounded-full"></div>
    <div className="absolute top-32 left-1/4 w-22 h-12 bg-white rounded-full"></div>
    <div className="absolute top-40 right-1/3 w-20 h-10 bg-white rounded-full"></div>
  </div>
);

const HeroSection = () => {
  const features = [
    { emoji: "📐", label: "Объемы" },
    { emoji: "🎯", label: "Площади" },
    { emoji: "⚡", label: "Быстрое решение" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white py-20 px-6">
      <CloudBackground />
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 font-montserrat">
          Стереометрия ЕГЭ
        </h1>
        <p className="text-xl mb-8 opacity-90">
          Задание №3 • Профильная математика • Подготовка к экзамену
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3"
            >
              <span className="font-semibold">
                {feature.emoji} {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
