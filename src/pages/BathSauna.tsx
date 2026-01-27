import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function BathSauna() {
  const { addToCart } = useCart();
  
  const brooms = products.filter(p => p.category === 'веники');
  const phytoTeas = products.filter(p => p.category === 'фиточай для бани');

  return (
    <div className="min-h-screen">
      <section className="relative py-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">Баня и сауна</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Натуральные веники и фиточаи для русской бани. Только проверенные временем рецепты здоровья
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#veniks" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Веники
              </a>
              <a 
                href="#teas" 
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Фиточаи
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={32} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2">100% натуральные</h3>
              <p className="text-sm text-muted-foreground">
                Веники заготовлены в экологически чистых районах тайги
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" size={32} className="text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Правильная заготовка</h3>
              <p className="text-sm text-muted-foreground">
                Собраны и высушены по традиционным технологиям
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-accent" />
              </div>
              <h3 className="font-bold mb-2">Лечебный эффект</h3>
              <p className="text-sm text-muted-foreground">
                Улучшают кровообращение и укрепляют здоровье
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="veniks" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Банные веники</h2>
            <p className="text-xl text-muted-foreground">
              Выберите свой идеальный веник для парной
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {brooms.map((product, index) => (
              <div
                key={product.id}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
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
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                    >
                      <Icon name="ShoppingCart" size={18} />
                      <span className="text-sm">В корзину</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Как правильно запарить веник?</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                Замочите веник в холодной воде на 10-15 минут
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                Переложите в горячую воду (не кипяток!) на 5-7 минут
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                Подержите над камнями для прогрева и аромата
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold">4.</span>
                Веник готов! Наслаждайтесь целебным паром
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="teas" className="py-16 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Фиточаи для бани</h2>
            <p className="text-xl text-muted-foreground">
              Специальные травяные сборы для парной и после неё
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {phytoTeas.map((product, index) => (
              <div
                key={product.id}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
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
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                    >
                      <Icon name="ShoppingCart" size={18} />
                      <span className="text-sm">В корзину</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы к настоящей русской бане?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Выбирайте наши натуральные веники и фиточаи для максимального эффекта
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/catalog"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Весь каталог
              </Link>
              <Link
                to="/cart"
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Перейти в корзину
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
