import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // Пока проверяем авторизацию — показываем загрузку
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">Загрузка...</div>
      </div>
    );
  }

  // Если пользователь не авторизован — редирект на логин
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Если авторизован — показываем страницу
  return children;
}