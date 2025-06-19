import Icon from "@/components/ui/icon";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  description: string;
  category: string;
}

const ProductCard = ({
  title,
  price,
  image,
  description,
  category,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl organic-shadow overflow-hidden hover:scale-105 transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
            {category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg text-green-900 mb-2 text-center">
          {title}
        </h3>
        <p className="text-green-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-800">{price}</span>
          <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Icon name="ShoppingCart" size={16} />
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
