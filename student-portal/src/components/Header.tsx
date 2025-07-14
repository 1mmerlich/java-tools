import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Settings className="w-6 h-6 text-white animate-spin group-hover:animate-pulse" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-200 blur"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              JavaTools
            </span>
          </Link>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-blue-300 transition-colors font-medium relative group py-2"
            >
              Главная
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link 
              to="/core-java" 
              className="text-white hover:text-blue-300 transition-colors font-medium relative group py-2"
            >
              Уровни
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <a 
              href="#" 
              className="text-white hover:text-blue-300 transition-colors font-medium relative group py-2"
            >
              О нас
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a 
              href="#" 
              className="text-white hover:text-blue-300 transition-colors font-medium relative group py-2"
            >
              Контакты
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-200"></span>
            </a>
          </nav>

          {/* Кнопки входа/регистрации */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/login"
              className="px-6 py-2 text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm font-medium hover:border-white/50 hover:shadow-lg hover:shadow-white/10"
            >
              Войти
            </Link>
            <Link 
              to="/register"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 font-medium transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Регистрация
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 