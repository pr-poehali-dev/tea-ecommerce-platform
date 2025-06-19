import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  category: string;
}

interface CategorySectionProps {
  title: string;
  description: string;
  products: Product[];
}

const CategorySection = ({
  title,
  description,
  products,
}: CategorySectionProps) => {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-900 mb-4">{title}</h2>
        <p className="text-green-600 max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
