import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <Icon name="Leaf" size={18} className="text-white" />
            </div>
            <span className="text-xl font-semibold text-green-900">
              Натура Вита
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className="text-green-700 hover:text-green-900 transition-colors"
            >
              Каталог
            </Link>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              Корзина
            </button>
          </nav>

          <div className="md:hidden">
            <Icon name="Menu" size={24} className="text-green-700" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
