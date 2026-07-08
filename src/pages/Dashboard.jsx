import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-lg font-medium text-gray-800">StudioFlow</h1>
      </header>
      
      <div className="flex">
        {/* Боковая панель */}
        <aside className="bg-white shadow-md w-64">
          <nav className="p-4 space-y-2">
            <div className="py-1 mb-2 border-b border-gray-200">
              <h2 className="text-sm font-medium text-gray-700">Меню</h2>
            </div>
            <Link to="/schedule" className="block text-base font-medium text-gray-500 hover:text-gray-700 transition-colors">
              Расписание
            </Link>
            <Link to="/trainers" className="block text-base font-medium text-gray-500 hover:text-gray-700 transition-colors">
              Тренеры
            </Link>
            <Link to="/clients" className="block text-base font-medium text-gray-500 hover:text-gray-700 transition-colors">
              Клиенты
            </Link>
          </nav>
        </aside>
        
        {/* Основной блок */}
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-medium text-gray-800 mb-4">Добро пожаловать в панель StudioFlow v0.1</h1>
          <p className="text-gray-600">Это ваша централизованная панель управления для управления студией пилатеса</p>
        </main>
      </div>
    </div>
  );
}