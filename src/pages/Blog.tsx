import Icon from '@/components/ui/icon';

const blogPosts = [
  {
    id: 1,
    title: 'Целебные свойства иван-чая',
    excerpt: 'Узнайте о полезных свойствах традиционного русского напитка и его влиянии на здоровье',
    date: '15 января 2026',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500',
    category: 'Здоровье'
  },
  {
    id: 2,
    title: 'Как правильно заваривать травяной чай',
    excerpt: 'Секреты заваривания чая, чтобы сохранить максимум пользы и получить насыщенный вкус',
    date: '10 января 2026',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500',
    category: 'Советы'
  },
  {
    id: 3,
    title: 'Таежные травы для иммунитета',
    excerpt: 'Какие травы из тайги помогут укрепить иммунитет в холодное время года',
    date: '5 января 2026',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=500',
    category: 'Здоровье'
  },
  {
    id: 4,
    title: 'История сбора трав в Сибири',
    excerpt: 'Традиции и обычаи сбора целебных трав в сибирской тайге',
    date: '28 декабря 2025',
    image: 'https://images.unsplash.com/photo-1517451330947-7809dead78d5?w=500',
    category: 'Традиции'
  },
  {
    id: 5,
    title: 'Родиола розовая: золотой корень здоровья',
    excerpt: 'Все о чудодейственных свойствах золотого корня и способах его применения',
    date: '20 декабря 2025',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500',
    category: 'Здоровье'
  },
  {
    id: 6,
    title: 'Чага: черное золото тайги',
    excerpt: 'Березовый гриб чага и его уникальные лечебные свойства',
    date: '15 декабря 2025',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=500',
    category: 'Здоровье'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Блог</h1>
          <p className="text-xl text-muted-foreground">
            Полезные статьи о травах, здоровье и традициях
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article
              key={post.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {post.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Читать далее
                  <Icon name="ArrowRight" size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
            Загрузить еще статьи
          </button>
        </div>
      </div>
    </div>
  );
}
