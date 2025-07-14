const RegisterPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">Регистрация</h1>
              <p className="text-blue-200">Начните изучение Java прямо сейчас!</p>
            </div>
            
            {/* Кнопки входа через соцсети */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-all duration-200 transform hover:scale-105">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Регистрация через Google
              </button>
              
              <button className="w-full flex items-center justify-center px-4 py-3 bg-[#0077FF] hover:bg-[#0066E6] text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-105">
                <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zM12 17.5c-3.03 0-5.5-2.47-5.5-5.5S8.97 6.5 12 6.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"/>
                </svg>
                Регистрация через ВКонтакте
              </button>
              
              <button className="w-full flex items-center justify-center px-4 py-3 bg-[#24292F] hover:bg-[#1C2128] text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-105">
                <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                Регистрация через GitHub
              </button>
            </div>
            
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-blue-200">или</span>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-medium">Имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Ваше имя"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 font-medium">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="E-mail"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 font-medium">Пароль</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 font-medium">Подтвердите пароль</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              
              <div>
                <label className="flex items-center text-blue-200">
                  <input type="checkbox" className="mr-2 rounded" />
                  Я согласен с{' '}
                  <a href="#" className="text-blue-300 hover:text-blue-100 ml-1">
                    условиями использования
                  </a>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
              >
                Создать аккаунт
              </button>
            </form>
            
            <div className="text-center mt-8">
              <p className="text-blue-200">
                Уже есть аккаунт?{' '}
                <a href="/login" className="text-blue-300 hover:text-blue-100 font-semibold transition-colors">
                  Войти
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage; 