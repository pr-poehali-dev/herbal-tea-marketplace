import Icon from '@/components/ui/icon';

const reviews = [
  {
    id: 1,
    name: 'Елена Петрова',
    city: 'Москва',
    rating: 5,
    date: '20 января 2026',
    text: 'Заказывала иван-чай и саган-дайля. Качество просто потрясающее! Чувствуется, что травы собраны с любовью. Вкус насыщенный, аромат невероятный. Буду заказывать еще!',
    avatar: '👩'
  },
  {
    id: 2,
    name: 'Михаил Соколов',
    city: 'Санкт-Петербург',
    rating: 5,
    date: '18 января 2026',
    text: 'Долго искал качественную чагу. Здесь нашел то, что нужно. Эффект заметил уже через неделю. Спасибо за натуральный продукт!',
    avatar: '👨'
  },
  {
    id: 3,
    name: 'Анна Волкова',
    city: 'Новосибирск',
    rating: 5,
    date: '15 января 2026',
    text: 'Таежный сбор №1 просто волшебный! Зимой особенно актуален для поддержки иммунитета. Вся семья пьет с удовольствием.',
    avatar: '👩'
  },
  {
    id: 4,
    name: 'Дмитрий Кузнецов',
    city: 'Екатеринбург',
    rating: 5,
    date: '12 января 2026',
    text: 'Родиола розовая помогла справиться со стрессом на работе. Чувствую прилив сил и энергии. Рекомендую всем, кто ведет активный образ жизни!',
    avatar: '👨'
  },
  {
    id: 5,
    name: 'Ольга Смирнова',
    city: 'Казань',
    rating: 5,
    date: '10 января 2026',
    text: 'Заказ пришел быстро, упаковано аккуратно. Иван-чай с ягодами — мой новый любимый напиток! Спасибо за заботу и качество.',
    avatar: '👩'
  },
  {
    id: 6,
    name: 'Сергей Николаев',
    city: 'Красноярск',
    rating: 5,
    date: '8 января 2026',
    text: 'Живу в Сибири и знаю толк в таежных травах. Могу сказать, что качество на высоте! Собрано правильно, высушено по всем канонам.',
    avatar: '👨'
  }
];

export default function Reviews() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Отзывы</h1>
            <p className="text-xl text-muted-foreground">
              Что говорят наши покупатели
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={32} className="text-accent fill-accent" />
              ))}
            </div>
            <p className="text-3xl font-bold mb-2">5.0 из 5</p>
            <p className="text-muted-foreground">На основе 247 отзывов</p>
          </div>

          <div className="space-y-6 mb-12">
            {reviews.map(review => (
              <div
                key={review.id}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{review.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{review.name}</h3>
                        <p className="text-sm text-muted-foreground">{review.city}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex gap-1 mb-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Оставьте свой отзыв</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Город</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Москва"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Оценка</label>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className="hover:scale-110 transition-transform"
                    >
                      <Icon name="Star" size={32} className="text-muted-foreground hover:text-accent hover:fill-accent" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Ваш отзыв</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Поделитесь своими впечатлениями..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Отправить отзыв
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
