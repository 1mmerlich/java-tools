import { Book, Clock, Star, Users } from 'lucide-react';

const CoreJavaPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero секция */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/20 mb-6 backdrop-blur-lg border border-blue-400/30">
            <Book className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Core Java - Уровень 1
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Комплексное изучение основ Java: от переменных до коллекций и Stream API. 
            Фундаментальная база для всех Java разработчиков.
          </p>
        </div>

        {/* Статистика курса */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
            <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">80</div>
            <div className="text-blue-200">часов</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
            <Book className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">11</div>
            <div className="text-blue-200">модулей</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">250+</div>
            <div className="text-blue-200">заданий</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">15K</div>
            <div className="text-blue-200">студентов</div>
          </div>
        </div>

        {/* Программа курса */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Программа курса</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                icon: "🟦", 
                title: "1. Введение и базовые понятия", 
                topics: ["Что такое Java, зачем она нужна", "JVM, JDK, JRE — простыми словами", "Как запускается программа (от исходника до байткода)", "Первая программа Hello, world!", "Комментарии", "Переменные и типы: int, double, char, boolean, var", "Операции: арифметические, логические, сравнения", "Приоритет операций", "Условные конструкции: if, else, switch"] 
              },
              { 
                icon: "🔁", 
                title: "2. Циклы и ветвление", 
                topics: ["Циклы: for, while, do-while", "break, continue, вложенные циклы", "for-each"] 
              },
              { 
                icon: "📦", 
                title: "3. Массивы и строки", 
                topics: ["Одномерные и многомерные массивы", "Перебор, сортировка, поиск в массиве", "Работа со String: сравнение, методы, concat, substring", "StringBuilder и производительность"] 
              },
              { 
                icon: "🧮", 
                title: "4. Методы", 
                topics: ["Что такое метод", "Аргументы и возвращаемые значения", "Перегрузка методов", "Рекурсия (базовое понимание)"] 
              },
              { 
                icon: "🧱", 
                title: "5. Классы и ООП (часть 1)", 
                topics: ["Классы и объекты", "Поля, методы, конструкторы", "Ключевое слово this", "Инкапсуляция: private, public, getters/setters", "Статические поля и методы (static)", "Перегрузка конструкторов"] 
              },
              { 
                icon: "🧬", 
                title: "6. Классы и ООП (часть 2)", 
                topics: ["Наследование (extends)", "Переопределение методов (@Override)", "Полиморфизм и ссылки на родительский тип", "Абстрактные классы", "Интерфейсы (interface), implements, множественная реализация", "Вложенные, статические, анонимные классы", "Object: toString(), equals(), hashCode()"] 
              },
              { 
                icon: "📚", 
                title: "7. Память, ссылки и GC", 
                topics: ["Память в Java: стек и куча (heap/stack)", "Сильные, слабые, мягкие и фантомные ссылки", "Сборщик мусора (Garbage Collector) — как он работает", "Понятие утечки памяти в Java", "finalize() и почему не стоит использовать"] 
              },
              { 
                icon: "📚", 
                title: "8. Типы, дженерики и enum", 
                topics: ["enum: как использовать и зачем он нужен", "Generics: что такое <T>, List<T>, зачем они", "Wildcards: ? extends, ? super, <?>", "Автоупаковка и распаковка (boxing/unboxing)", "instanceof, getClass()"] 
              },
              { 
                icon: "🧰", 
                title: "9. Коллекции и структура данных", 
                topics: ["Интерфейсы коллекций: List, Set, Map", "ArrayList, LinkedList, HashSet, TreeSet", "HashMap, LinkedHashMap, TreeMap", "Сравнение коллекций, выбор подходящей структуры", "equals() + hashCode() и как они влияют на HashMap", "Коллекции с null ключами/значениями"] 
              },
              { 
                icon: "🧮", 
                title: "10. Stream API и лямбды", 
                topics: ["Введение в лямбда-выражения", "Функциональные интерфейсы (Function, Predicate, Consumer)", "Основные операции Stream API: map, filter, collect, reduce", "Работа с Optional", "Параллельные стримы (вводно)"] 
              },
              { 
                icon: "🧪", 
                title: "11. Исключения и обработка ошибок", 
                topics: ["try, catch, finally", "throw и throws", "Checked vs Unchecked exceptions", "Создание собственных исключений", "Best practices обработки исключений"] 
              }
            ].map((module, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{module.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {module.topics.map((topic, i) => (
                    <div key={i} className="text-blue-200 text-sm flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="py-4 px-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25">
              Начать изучение Core Java
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreJavaPage; 