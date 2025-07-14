import React from 'react'

const levels = [
  {
    number: 1,
    title: "JAVA CORE",
    description: "Примитивные типы, условия, циклы, классы и объекты, ООП, работа с массивами",
    icon: "☕",
    color: "bg-red-500"
  },
  {
    number: 2,
    title: "МНОГОПОТОЧНОСТЬ",
    description: "Threads, Runnable, Executors, Concurrency API, синхронизация",
    icon: "⚡",
    color: "bg-orange-500"
  },
  {
    number: 3,
    title: "SQL",
    description: "Основы SQL, SELECT, JOIN, GROUP BY, подзапросы, индексы",
    icon: "🗄️",
    color: "bg-yellow-500"
  },
  {
    number: 4,
    title: "HIBERNATE",
    description: "ORM, Entity, связи, каскадирование, JPQL, Criteria API",
    icon: "🔗",
    color: "bg-green-500"
  },
  {
    number: 5,
    title: "SPRING",
    description: "IoC, DI, Beans, MVC, REST, Spring Boot, конфигурация, AOP",
    icon: "🌱",
    color: "bg-blue-500"
  }
]

const Levels = () => {
  return (
    <section id="levels" className="py-24 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-primary-600 to-purple-600 bg-clip-text text-transparent leading-tight py-3">
            5 уровней обучения Java
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            От основ программирования до продвинутых корпоративных технологий
          </p>
        </div>
        
        <div className="space-y-8">
          {levels.map((level, index) => (
            <div
              key={level.number}
              className={`relative flex flex-col lg:flex-row items-center gap-10 p-12 rounded-3xl ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } bg-gradient-to-br from-white via-gray-50/50 to-white shadow-2xl hover:shadow-3xl hover:scale-[1.03] transition-all duration-700 border border-gray-200/50 hover:border-primary-200 group overflow-hidden`}
              style={{
                animation: `float ${3 + index * 0.5}s ease-in-out infinite alternate`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-purple-50/0 to-pink-50/0 group-hover:from-primary-50/30 group-hover:via-purple-50/20 group-hover:to-pink-50/30 transition-all duration-700 rounded-3xl"></div>
              <div className="flex-shrink-0 relative">
                {/* Glow effect behind icon */}
                <div className={`absolute inset-0 w-32 h-32 ${level.color} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500`}></div>
                
                <div className={`relative w-32 h-32 ${level.color} rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-125 hover:rotate-12 transition-all duration-500 overflow-hidden group-hover:animate-pulse`}
                  style={{
                    animation: `glow 2s ease-in-out infinite alternate`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-black/10 to-transparent rounded-full"></div>
                  <span className="text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300">{level.icon}</span>
                  
                  {/* Rotating border */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-spin" style={{animationDuration: '8s'}}></div>
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <span className="text-sm font-semibold text-gray-500 bg-gray-200 px-3 py-2 rounded-full leading-tight">
                    LEVEL {level.number}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight py-1">
                  {level.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed py-1">
                  {level.description}
                </p>
                <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-2xl font-bold hover:from-primary-700 hover:to-primary-800 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl leading-tight">
                  <span className="py-1">Начать уровень 🚀</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Levels 