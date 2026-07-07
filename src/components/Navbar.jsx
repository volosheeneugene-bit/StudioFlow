import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-black text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-widest">
          ATAKA <span className="text-amber-500">PILATES</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#about" className="hover:text-amber-500 transition">О нас</a>
          <a href="#trainers" className="hover:text-amber-500 transition">Тренеры</a>
          <a href="#schedule" className="hover:text-amber-500 transition">Расписание</a>
          <a href="#contact" className="hover:text-amber-500 transition">Записаться</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;