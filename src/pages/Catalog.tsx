import { useState } from 'react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/icon';

export default function Catalog() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('все');

  const categories = ['все', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = selectedCategory === 'все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Каталог товаров</h1>
          <p className="text-xl text-muted-foreground">
            Выберите лучшие травяные чаи и целебные травы
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all capitalize ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold capitalize">
                  {product.category}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-primary">
                    {product.price} ₽
                  </span>
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Package" size={64} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">
              В этой категории пока нет товаров
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
