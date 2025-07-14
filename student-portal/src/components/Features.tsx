import React from 'react'

const features = [
  {
    title: "Автоматическая проверка кода",
    description: "Компилируем и запускаем ваш Java код, сравниваем с ожидаемым результатом",
    icon: "🔧"
  },
  {
    title: "Интерактивное обучение",
    description: "Изучайте теорию и сразу применяйте знания на практических примерах",
    icon: "🎯"
  },
  {
    title: "Прогресс по уровням",
    description: "Отслеживайте свои достижения, баллы и статистику обучения",
    icon: "📊"
  },
  {
    title: "Практические задачи",
    description: "Решайте реальные задачи с автоматической проверкой решений",
    icon: "💡"
  },
  {
    title: "Современный стек",
    description: "Spring Boot, PostgreSQL, Redis, Kafka, Docker, Kubernetes",
    icon: "⚡"
  },
  {
    title: "Персонализация",
    description: "Индивидуальный темп обучения и персональные рекомендации",
    icon: "👤"
  }
]

const Features = () => {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 w-full overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
            backgroundSize: '100px 100px',
            animation: 'float 20s ease-in-out infinite alternate'
          }}
        ></div>
      </div>
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-purple-600 to-primary-600 bg-clip-text text-transparent leading-tight py-3">
            Особенности платформы
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Изучайте Java с помощью современных технологий и интерактивных методов обучения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="relative bg-gradient-to-br from-white via-gray-50/30 to-white p-10 rounded-3xl shadow-xl hover:shadow-3xl hover:scale-110 hover:-translate-y-5 transform transition-all duration-700 border border-gray-200/50 hover:border-primary-200 group overflow-hidden"
              style={{
                animation: `float ${2 + index * 0.3}s ease-in-out infinite alternate`
              }}
            >
              {/* Magnetic glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/0 via-purple-100/0 to-pink-100/0 group-hover:from-primary-100/40 group-hover:via-purple-100/30 group-hover:to-pink-100/40 transition-all duration-700 rounded-3xl"></div>
              
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 rounded-3xl"></div>
              <div className="text-5xl mb-6 group-hover:scale-110 transform transition-all duration-300 py-2">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition duration-300 leading-tight py-1">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed py-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <button className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-700 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:from-primary-700 hover:via-purple-700 hover:to-primary-800 hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-primary-500/25 leading-tight">
            <span className="py-1">Попробовать бесплатно 🎉</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features 