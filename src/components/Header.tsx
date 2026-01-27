import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/icon';

export default function Header() {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-3xl">🌿</div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Чай Деда Саяна</h1>
              <p className="text-xs text-muted-foreground">Таежные травы и чаи</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-foreground hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link to="/bath-sauna" className="text-foreground hover:text-primary transition-colors">
              Баня и сауна
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              О нас
            </Link>
            <Link to="/delivery" className="text-foreground hover:text-primary transition-colors">
              Доставка
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
              Блог
            </Link>
            <Link to="/reviews" className="text-foreground hover:text-primary transition-colors">
              Отзывы
            </Link>
            <Link to="/contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          <Link
            to="/cart"
            className="relative flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Icon name="ShoppingCart" size={20} />
            <span className="hidden sm:inline">Корзина</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}