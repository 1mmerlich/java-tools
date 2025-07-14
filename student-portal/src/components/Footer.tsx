

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
              </svg>
              <span className="text-2xl font-bold py-1 leading-tight">Java Tools</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed py-1">
              Образовательная платформа для изучения Java. 
              От основ до продвинутого уровня с практическими задачами.
            </p>
            <p className="text-sm text-gray-500 py-1 leading-tight">
              © 2025 Java Tools. Все права защищены.
            </p>
          </div>
          
          {/* Курсы */}
          <div>
            <h3 className="text-lg font-semibold mb-4 py-1 leading-tight">Курсы</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white py-1 leading-tight">Java Core</a></li>
              <li><a href="#" className="hover:text-white py-1 leading-tight">Многопоточность</a></li>
              <li><a href="#" className="hover:text-white py-1 leading-tight">SQL</a></li>
              <li><a href="#" className="hover:text-white py-1 leading-tight">Hibernate</a></li>
              <li><a href="#" className="hover:text-white py-1 leading-tight">Spring</a></li>
            </ul>
          </div>
          
          {/* Компания */}
          <div>
            <h3 className="text-lg font-semibold mb-4 py-1 leading-tight">Компания</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white py-1 leading-tight">О нас</a></li>
              <li><a href="#" className="hover:text-white py-1 leading-tight">Контакты</a></li>
              <li><a href="#" className="hover:text-white py-1 leading-tight">Карьера</a></li>
              <li><a href="#" className="hover:text-white py-1 leading-tight">Блог</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 