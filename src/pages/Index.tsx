import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Таежный сбор',
      description: 'Классический травяной чай с душицей, чабрецом и мятой',
      price: '450₽',
      image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/45449b00-0a64-49ef-a0e9-6ad2c0c0c315.jpg',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'Саянский бодрости',
      description: 'Бодрящий чай с родиолой розовой и саган-дайля',
      price: '520₽',
      image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/45449b00-0a64-49ef-a0e9-6ad2c0c0c315.jpg',
      badge: 'Новинка'
    },
    {
      id: 3,
      name: 'Вечерний покой',
      description: 'Успокаивающий сбор с иван-чаем и мелиссой',
      price: '380₽',
      image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/45449b00-0a64-49ef-a0e9-6ad2c0c0c315.jpg',
      badge: ''
    },
    {
      id: 4,
      name: 'Лесные ягоды',
      description: 'Фруктовый чай с шиповником и таежными ягодами',
      price: '490₽',
      image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/45449b00-0a64-49ef-a0e9-6ad2c0c0c315.jpg',
      badge: ''
    }
  ];

  const reviews = [
    { name: 'Мария К.', text: 'Превосходный чай! Напоминает бабушкины сборы из детства', rating: 5 },
    { name: 'Алексей П.', text: 'Качество трав отличное, чувствуется натуральность', rating: 5 },
    { name: 'Светлана Д.', text: 'Саянский бодрости - теперь мой любимый утренний чай!', rating: 5 }
  ];

  const blogPosts = [
    {
      title: 'Польза таежных трав',
      excerpt: 'Узнайте о целебных свойствах растений сибирской тайги',
      date: '15 января 2026'
    },
    {
      title: 'Как правильно заваривать травяной чай',
      excerpt: 'Секреты приготовления идеального настоя от Деда Саяна',
      date: '10 января 2026'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🍃</div>
              <div>
                <h1 className="text-2xl font-bold text-primary font-serif">Чай Деда Саяна</h1>
                <p className="text-sm text-muted-foreground">Травяные чаи и таежные сборы</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" className="relative">
              <Icon name="ShoppingCart" size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-secondary/10 to-background">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/2ee5ca65-d353-43cd-9154-8e76b42bc7c4.jpg" 
            alt="Таежный фон" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-serif leading-tight">
                Дары таежного леса в каждой чашке
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Собираем и готовим травяные сборы по старинным рецептам. 
                Только натуральные ингредиенты из экологически чистых районов Саян.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Каталог товаров
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <img 
                src="https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/f4bf9ddb-59f7-40fa-81b9-e1ee0412a25f.jpg" 
                alt="Дед Саян" 
                className="w-full h-auto rounded-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4 font-serif">Каталог травяных чаев</h2>
            <p className="text-muted-foreground text-lg">Выберите свой любимый вкус здоровья</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 right-3 bg-accent">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2 font-serif">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" onClick={() => setCartCount(cartCount + 1)}>
                      <Icon name="Plus" size={16} className="mr-1" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-primary mb-6 font-serif">О Деде Саяне</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Более 40 лет Дед Саян собирает лекарственные травы в предгорьях Саян. 
                Его знания передавались из поколения в поколение, а рецепты травяных 
                сборов хранятся в семье уже несколько веков.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Мы собираем травы вручную в экологически чистых районах, вдали от городов 
                и дорог. Каждый сбор проходит тщательную проверку качества.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🌿</div>
                  <div className="text-2xl font-bold text-primary">40+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🏔️</div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">экологично</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">❤️</div>
                  <div className="text-2xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-secondary/20 rounded-lg p-8 backdrop-blur">
                <blockquote className="text-lg italic text-foreground font-serif">
                  "В каждой травинке - сила природы. Надо только уметь её раскрыть 
                  и поделиться с людьми. Пейте чай с душой, и он ответит вам здоровьем."
                </blockquote>
                <p className="mt-4 text-right text-primary font-semibold">— Дед Саян</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4 font-serif">Доставка</h2>
            <p className="text-muted-foreground text-lg">Доставим свежие травы по всей России</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-3 font-serif">Почта России</h3>
              <p className="text-muted-foreground">Доставка 7-14 дней, от 300₽</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-3 font-serif">Курьерская служба</h3>
              <p className="text-muted-foreground">Доставка 2-5 дней, от 500₽</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold mb-3 font-serif">Бесплатная доставка</h3>
              <p className="text-muted-foreground">При заказе от 3000₽</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4 font-serif">Блог</h2>
            <p className="text-muted-foreground text-lg">Полезные статьи о травах и здоровье</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="text-2xl font-semibold mb-3 font-serif text-primary">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 text-secondary">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4 font-serif">Отзывы наших покупателей</h2>
            <p className="text-muted-foreground text-lg">Что говорят о нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.text}"</p>
                <p className="text-sm font-semibold text-primary">— {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6 font-serif">Контакты</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Phone" size={20} className="text-secondary" />
                <span className="text-lg">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Mail" size={20} className="text-secondary" />
                <span className="text-lg">info@dedsayan.ru</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="MapPin" size={20} className="text-secondary" />
                <span className="text-lg">Республика Тыва, предгорья Саян</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-serif mb-2">Чай Деда Саяна</p>
          <p className="text-sm opacity-90">© 2026 Все права защищены. Сделано с любовью к природе 🍃</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
