import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen wellness-gradient">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
            <span className="text-green-600">ProSex</span>
          </h1>
          <p className="text-xl text-green-700 mb-8 leading-relaxed">
            Откройте для себя мир натуральных продуктов для интимного велнеса и
            гармоничных отношений. Премиальные товары и образовательные
            материалы для полноценной жизни.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/catalog"
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Icon name="ShoppingBag" size={20} />
              <span>Перейти в каталог</span>
            </Link>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors">
              Узнать больше
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white/50 rounded-2xl organic-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Leaf" size={28} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-3">
              100% Натурально
            </h3>
            <p className="text-green-600">
              Только органические ингредиенты без химических добавок
            </p>
          </div>

          <div className="text-center p-6 bg-white/50 rounded-2xl organic-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Heart" size={28} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-3">
              Интимное Здоровье
            </h3>
            <p className="text-green-600">Деликатная забота о самом важном</p>
          </div>

          <div className="text-center p-6 bg-white/50 rounded-2xl organic-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" size={28} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-3">
              Сертифицировано
            </h3>
            <p className="text-green-600">
              Все продукты прошли контроль качества
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
