import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";

const Catalog = () => {
  const categories = [
    {
      title: "Травяной Чай",
      description:
        "Натуральные травяные сборы для женского здоровья и гармонии",
      products: [
        {
          id: 1,
          title: "Чай Женская Гармония",
          price: "890 ₽",
          image:
            "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
          description:
            "Сбор из шалфея, ромашки и мелиссы для женского благополучия",
          category: "Чай",
        },
        {
          id: 2,
          title: "Интимный Баланс",
          price: "1290 ₽",
          image:
            "https://images.unsplash.com/photo-1597318380938-2c07c0e55c3d?w=400",
          description:
            "Специальный травяной комплекс для поддержания интимного здоровья",
          category: "Чай",
        },
      ],
    },
    {
      title: "Натуральный Мёд",
      description: "Органический мёд с афродизиаками и полезными добавками",
      products: [
        {
          id: 3,
          title: "Мёд с Женьшенем",
          price: "1590 ₽",
          image:
            "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400",
          description:
            "Натуральный мёд с экстрактом женьшеня для энергии и тонуса",
          category: "Мёд",
        },
        {
          id: 4,
          title: "Мёд Афродита",
          price: "2190 ₽",
          image:
            "https://images.unsplash.com/photo-1558642891-54be180ea339?w=400",
          description: "Премиальный мёд с натуральными афродизиаками",
          category: "Мёд",
        },
      ],
    },
    {
      title: "Натуральная Косметика",
      description: "Органическая косметика для интимного ухода",
      products: [
        {
          id: 5,
          title: "Интимный Гель",
          price: "1890 ₽",
          image:
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400",
          description: "Деликатный гель на основе алоэ и ромашки",
          category: "Косметика",
        },
        {
          id: 6,
          title: "Масло для Массажа",
          price: "2490 ₽",
          image:
            "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400",
          description: "Натуральное масло с эфирными маслами иланг-иланга",
          category: "Косметика",
        },
      ],
    },
    {
      title: "Одежда для Дома",
      description: "Комфортная одежда из натуральных материалов",
      products: [
        {
          id: 7,
          title: "Шёлковый Халат",
          price: "4990 ₽",
          image:
            "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?w=400",
          description: "Роскошный халат из натурального шёлка",
          category: "Одежда",
        },
        {
          id: 8,
          title: "Хлопковое Бельё",
          price: "2890 ₽",
          image:
            "https://images.unsplash.com/photo-1571513722275-4b8c2fd4e4f6?w=400",
          description: "Комплект из органического хлопка",
          category: "Одежда",
        },
      ],
    },
    {
      title: "Книга Pro_Sex",
      description: "Образовательная литература о гармоничных отношениях",
      products: [
        {
          id: 9,
          title: "Pro_Sex: Путь к Гармонии",
          price: "2990 ₽",
          image:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
          description:
            "Полное руководство по созданию гармоничных интимных отношений",
          category: "Книги",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen wellness-gradient">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Каталог Продукции
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Выберите из нашей коллекции натуральных продуктов для вашего
            благополучия и гармонии
          </p>
        </div>

        {categories.map((category, index) => (
          <CategorySection
            key={index}
            title={category.title}
            description={category.description}
            products={category.products}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
