import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🌿</div>
              <h3 className="text-xl font-bold">Чай Деда Саяна</h3>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Натуральные травяные чаи и целебные травы из сибирской тайги
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-accent transition-colors">Главная</Link>
              <Link to="/catalog" className="hover:text-accent transition-colors">Каталог</Link>
              <Link to="/about" className="hover:text-accent transition-colors">О нас</Link>
              <Link to="/delivery" className="hover:text-accent transition-colors">Доставка</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/blog" className="hover:text-accent transition-colors">Блог</Link>
              <Link to="/reviews" className="hover:text-accent transition-colors">Отзывы</Link>
              <Link to="/contacts" className="hover:text-accent transition-colors">Контакты</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@dedsayan.ru</span>
              </div>
              <div className="flex gap-3 mt-2">
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center text-sm text-secondary-foreground/70">
          <p>© 2026 Чай Деда Саяна. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
