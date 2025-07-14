

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-purple-600 via-pink-500 to-primary-800 text-white w-full overflow-hidden min-h-screen flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-300/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-pink-300/20 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-1/4 right-1/2 w-2.5 h-2.5 bg-purple-200/25 rounded-full animate-pulse delay-300"></div>
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent animate-pulse leading-tight py-2">
            Изучай Java от Core до Spring
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Образовательная платформа для изучения Java
          </p>
          <p className="text-lg mb-12 text-primary-200 max-w-3xl mx-auto">
            5 уровней обучения • Практические задачи • Автоматическая проверка кода • 
            Прогресс по уровням • Персонализация обучения
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="relative bg-white text-primary-600 px-12 py-6 rounded-2xl text-xl font-bold hover:bg-gray-50 hover:scale-110 transform transition-all duration-500 shadow-2xl hover:shadow-white/50 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <span className="relative z-10 leading-tight py-1">Начать обучение БЕСПЛАТНО ✨</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition duration-1000"></div>
            </button>
            <button className="relative border-2 border-white/80 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white hover:text-primary-600 hover:scale-110 transform transition-all duration-500 backdrop-blur-sm bg-white/10 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <span className="relative z-10 leading-tight py-1">Смотреть демо 🎥</span>
            </button>
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-110 transform group border border-white/20 hover:border-white/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent leading-tight py-1">30K+</div>
                <div className="text-primary-100 font-bold text-lg py-1">Студентов</div>
              </div>
            </div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-110 transform group border border-white/20 hover:border-white/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent leading-tight py-1">5</div>
                <div className="text-primary-100 font-bold text-lg py-1">Уровней</div>
              </div>
            </div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-110 transform group border border-white/20 hover:border-white/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight py-1">1000+</div>
                <div className="text-primary-100 font-bold text-lg py-1">Задач</div>
              </div>
            </div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-110 transform group border border-white/20 hover:border-white/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent leading-tight py-1">95%</div>
                <div className="text-primary-100 font-bold text-lg py-1">Трудоустройство</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 