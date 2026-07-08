import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Ошибка при выходе:', error);
      alert('Не удалось выйти. Попробуйте еще раз.');
    }
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-amber-600">
          StudioFlow
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-amber-600">Главная</Link>
          
          {user ? (
            <>
              <span className="text-sm text-gray-600">
                {user.email}
              </span>
              <Link to="/dashboard" className="hover:text-amber-600">
                Кабинет
              </Link>
              <button 
                onClick={handleSignOut}
                className="text-red-500 hover:text-red-700"
              >
                Выйти
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-amber-600">Войти</Link>
              <Link 
                to="/register" 
                className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
              >
                Регистрация
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}