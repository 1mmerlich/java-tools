import { Link } from 'react-router-dom';

const Levels = () => {
  const levels = [
    {
      title: 'Core Java',
      description: 'Основы Java: переменные, циклы, условия, методы и ООП. Идеальный старт для новичков.',
      icon: '☕',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      delay: 'delay-0',
      route: '/core-java'
    },
    {
      title: 'Multithreading',
      description: 'Параллельное программирование: потоки, синхронизация, Thread API и concurrent коллекции.',
      icon: '🔄',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      delay: 'delay-150',
      route: '/multithreading'
    },
    {
      title: 'SQL & Database',
      description: 'Работа с базами данных: SQL запросы, JOIN операции, индексы и оптимизация.',
      icon: '🗄️',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      delay: 'delay-300',
      route: '/sql-database'
    },
    {
      title: 'Hibernate',
      description: 'ORM фреймворк для Java: маппинг объектов, HQL, кэширование и оптимизация запросов.',
      icon: '🔧',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      delay: 'delay-450',
      route: '/hibernate'
    },
    {
      title: 'Spring Framework',
      description: 'Популярный Java фреймворк: IoC, AOP, Spring Boot, REST API и микросервисы.',
      icon: '🌱',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      delay: 'delay-600',
      route: '/spring-framework'
    }
  ];

  return (
    <section id="levels" className="py-24 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight py-3">
            Уровни обучения
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed py-2">
            Пройдите путь от новичка до эксперта Java разработки
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {levels.map((level, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 hover:border-blue-200 group transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                {/* Иконка */}
                <div className={`inline-flex items-center justify-center w-20 h-20 ${level.color} rounded-full mb-6 text-4xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {level.icon}
                </div>
                
                {/* Содержимое */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {level.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {level.description}
                </p>
                <Link 
                  to={level.route}
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Начать уровень 🚀
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Levels 