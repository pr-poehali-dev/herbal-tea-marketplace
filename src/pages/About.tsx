import Icon from '@/components/ui/icon';

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">О нас</h1>
            <p className="text-xl text-muted-foreground">
              История и традиции Деда Саяна
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-lg overflow-hidden mb-12">
            <img
              src="https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/7f343b5e-d842-4442-9176-ab5f7f929d35.jpg"
              alt="Дед Саян"
              className="w-full h-96 object-cover"
            />
            <div className="p-8 space-y-6">
              <h2 className="text-3xl font-bold">Легенда о Деде Саяне</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                В глубине сибирской тайги, у подножья Саянских гор, жил мудрый старец, 
                которого все звали Дедом Саяном. Он знал все тайны природы и хранил 
                секреты целебных трав, передаваемые из поколения в поколение.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Дед Саян собирал травы только в определенное время года, когда они 
                накапливают максимум целебных свойств. Он учил уважать природу и брать 
                только то, что она готова дать, не нанося вреда таежным просторам.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Сегодня мы продолжаем традиции Деда Саяна, собирая травы в экологически 
                чистых районах тайги и сохраняя древние рецепты для вашего здоровья.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Mountain" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Тайга</h3>
              <p className="text-muted-foreground">
                Сбор трав в чистейших районах сибирской тайги
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="BookOpen" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Традиции</h3>
              <p className="text-muted-foreground">
                Рецепты передаются из поколения в поколение
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="ShieldCheck" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold">Качество</h3>
              <p className="text-muted-foreground">
                Контроль качества на всех этапах производства
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Наши принципы</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">
                  Экологичный сбор без вреда для природы
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">
                  Сохранение традиционных методов заготовки трав
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">
                  Честность и прозрачность перед покупателями
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">
                  Забота о здоровье каждого клиента
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
