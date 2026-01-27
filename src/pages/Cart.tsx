import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/icon';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-20">
            <Icon name="ShoppingCart" size={80} className="text-muted-foreground mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Корзина пуста</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Добавьте товары из каталога, чтобы начать покупки
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Перейти в каталог
              <Icon name="ArrowRight" size={20} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">Корзина</h1>
            <button
              onClick={clearCart}
              className="flex items-center gap-2 text-destructive hover:text-destructive/80 transition-colors"
            >
              <Icon name="Trash2" size={20} />
              <span>Очистить корзину</span>
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item => (
                <div
                  key={item.id}
                  className="bg-card rounded-lg p-6 shadow-lg flex items-center gap-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-muted rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-muted-foreground/10 rounded-l-lg transition-colors"
                        >
                          <Icon name="Minus" size={16} />
                        </button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-muted-foreground/10 rounded-r-lg transition-colors"
                        >
                          <Icon name="Plus" size={16} />
                        </button>
                      </div>
                      <span className="text-xl font-bold text-primary">
                        {item.price * item.quantity} ₽
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive/80 transition-colors"
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 shadow-lg sticky top-24 space-y-6">
                <h2 className="text-2xl font-bold">Итого</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Товары ({cart.length})</span>
                    <span>{totalPrice} ₽</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Доставка</span>
                    <span>{totalPrice >= 3000 ? 'Бесплатно' : '400 ₽'}</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Всего</span>
                      <span className="text-primary">
                        {totalPrice >= 3000 ? totalPrice : totalPrice + 400} ₽
                      </span>
                    </div>
                  </div>
                </div>

                {totalPrice < 3000 && (
                  <div className="bg-accent/10 p-3 rounded-lg text-sm">
                    <p className="flex items-center gap-2 text-accent font-semibold">
                      <Icon name="Gift" size={16} />
                      До бесплатной доставки: {3000 - totalPrice} ₽
                    </p>
                  </div>
                )}

                <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Оформить заказ
                </button>

                <Link
                  to="/catalog"
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="ArrowLeft" size={16} />
                  <span>Продолжить покупки</span>
                </Link>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="ShieldCheck" size={16} className="text-primary" />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Truck" size={16} className="text-primary" />
                    <span>Быстрая доставка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="RotateCcw" size={16} className="text-primary" />
                    <span>Возврат в течение 14 дней</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
