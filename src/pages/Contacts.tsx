import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Контакты</h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-lg p-8 shadow-lg space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Телефон</h3>
                  <p className="text-muted-foreground mb-1">+7 (999) 123-45-67</p>
                  <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@dedsayan.ru</p>
                  <p className="text-sm text-muted-foreground">Отвечаем в течение 24 часов</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    Республика Бурятия,<br />
                    Саянские горы
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="example@mail.ru"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Ваше сообщение..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Мы в социальных сетях</h2>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-card rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="Facebook" size={24} className="text-primary" />
                <span className="font-semibold">Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-card rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="Instagram" size={24} className="text-accent" />
                <span className="font-semibold">Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-card rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="Youtube" size={24} className="text-destructive" />
                <span className="font-semibold">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
