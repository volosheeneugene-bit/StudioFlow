function Hero() {
    return (
      <section 
        className="min-h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80')"
        }}
      >
        <div className="px-4">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-widest mb-4">
            Начни <span className="text-amber-500">движение</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Переопредели свои тренировки. Осознанность, сила и контроль в каждом движении.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-amber-500 text-black px-10 py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-transparent hover:text-amber-500 hover:border-2 hover:border-amber-500 transition"
          >
            Записаться
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;