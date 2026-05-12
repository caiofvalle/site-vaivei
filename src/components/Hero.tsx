export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-2">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <h1 className="font-black tracking-tight">
          <span className="hero-experts block text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.88] mb-0">
            EXPERTS
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-t1 leading-[0.88]">EM MOSTRAR</span>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-t1 leading-[0.88] italic">O QUE NÃO SE REPETE.</span>
        </h1>

      </div>
    </section>
  );
}
