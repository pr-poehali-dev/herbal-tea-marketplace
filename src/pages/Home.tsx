import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import Icon from '@/components/ui/icon';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Чай Деда Саяна
              </h1>
              <p className="text-xl text-muted-foreground">
                Натуральные травяные чаи и целебные травы из глубин сибирской тайги. 
                Традиции предков в каждой чашке.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/catalog"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
                >
                  Перейти в каталог
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-all hover:scale-105"
                >
                  Узнать больше
                </Link>
              </div>
            </div>

            <div className="relative animate-float">
              <img
                src="https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/7f343b5e-d842-4442-9176-ab5f7f929d35.jpg"
                alt="Дед Саян"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg font-bold">
                100% натуральные травы
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3 p-6 rounded-lg hover:bg-background transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Leaf" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Экологично</h3>
              <p className="text-muted-foreground">
                Сбор трав в чистых районах тайги, вдали от цивилизации
              </p>
            </div>

            <div className="text-center space-y-3 p-6 rounded-lg hover:bg-background transition-colors">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Heart" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Традиции</h3>
              <p className="text-muted-foreground">
                Сохраняем старинные рецепты народной медицины
              </p>
            </div>

            <div className="text-center space-y-3 p-6 rounded-lg hover:bg-background transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Award" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold">Качество</h3>
              <p className="text-muted-foreground">
                Строгий контроль на всех этапах от сбора до упаковки
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные товары</h2>
            <p className="text-muted-foreground text-lg">
              Самые любимые чаи и травы наших покупателей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div
                key={product.id}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                    >
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Смотреть весь каталог
              <Icon name="ArrowRight" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Почувствуйте силу тайги</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Каждая чашка нашего чая — это путешествие в сибирскую тайгу, 
            где природа дарит здоровье и долголетие
          </p>
          <Link
            to="/catalog"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105"
          >
            Попробовать сейчас
          </Link>
        </div>
      </section>
    </div>
  );
}