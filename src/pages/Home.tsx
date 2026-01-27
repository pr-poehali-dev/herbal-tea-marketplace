import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import Icon from '@/components/ui/icon';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-20" style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/1768933e-78fd-43c2-be78-cb69c59e5f06.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Чай Деда Саяна
              </h1>
              <p className="text-xl text-white/90 drop-shadow-md">
                Натуральные травяные чаи и целебные травы из глубин сибирской тайги. 
                Традиции предков в каждой чашке.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/catalog"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                >
                  Перейти в каталог
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3 bg-white/90 text-foreground rounded-lg font-semibold hover:bg-white transition-all hover:scale-105 shadow-lg"
                >
                  Узнать больше
                </Link>
              </div>
            </div>

            <div className="relative animate-float">
              <img
                src="https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/db374e8c-c16e-4090-930d-f37ae14daf02.jpg"
                alt="Дед Саян у избы"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white/20"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg font-bold">
                🌲 Из сердца тайги
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Дары сибирской природы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Каждый продукт собран вручную в экологически чистых районах тайги
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3 p-8 rounded-xl bg-card hover:shadow-xl transition-all hover:scale-105 border border-primary/10">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Trees" size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Экологично</h3>
              <p className="text-muted-foreground">
                Сбор трав в чистых районах тайги, вдали от цивилизации и промышленности
              </p>
            </div>

            <div className="text-center space-y-3 p-8 rounded-xl bg-card hover:shadow-xl transition-all hover:scale-105 border border-secondary/10">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Heart" size={40} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Традиции</h3>
              <p className="text-muted-foreground">
                Сохраняем старинные рецепты народной медицины наших предков
              </p>
            </div>

            <div className="text-center space-y-3 p-8 rounded-xl bg-card hover:shadow-xl transition-all hover:scale-105 border border-accent/10">
              <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Award" size={40} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Качество</h3>
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

      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🌲</div>
          <div className="absolute bottom-10 right-10 text-9xl">🌲</div>
          <div className="absolute top-1/2 left-1/4 text-7xl">🍃</div>
          <div className="absolute top-1/3 right-1/4 text-7xl">☕</div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">Почувствуйте силу тайги</h2>
          <p className="text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Каждая чашка нашего чая — это путешествие в сибирскую тайгу, 
            где природа дарит здоровье и долголетие. 
            Мёд, орехи, травы и варенье — всё это дары леса для вашего благополучия.
          </p>
          <Link
            to="/catalog"
            className="inline-block px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-2xl"
          >
            🛒 Перейти в каталог
          </Link>
        </div>
      </section>
    </div>
  );
}