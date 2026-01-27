import Icon from '@/components/ui/icon';

export default function Delivery() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Доставка и оплата</h1>
            <p className="text-xl text-muted-foreground">
              Удобные способы получения и оплаты заказа
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={24} className="text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Способы доставки</h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold mb-2">Почта России</h3>
                  <p className="text-muted-foreground mb-2">
                    Доставка в любую точку России. Срок доставки 7-14 дней.
                  </p>
                  <p className="font-semibold text-primary">
                    Стоимость: от 300 ₽
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-bold mb-2">СДЭК</h3>
                  <p className="text-muted-foreground mb-2">
                    Быстрая доставка до пункта выдачи или курьером. Срок 3-7 дней.
                  </p>
                  <p className="font-semibold text-secondary">
                    Стоимость: от 400 ₽
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold mb-2">Боксберри</h3>
                  <p className="text-muted-foreground mb-2">
                    Доставка до пункта выдачи по всей России. Срок 3-7 дней.
                  </p>
                  <p className="font-semibold text-accent">
                    Стоимость: от 350 ₽
                  </p>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="flex items-center gap-2 text-accent font-semibold">
                    <Icon name="Gift" size={20} />
                    Бесплатная доставка при заказе от 3000 ₽
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Icon name="CreditCard" size={24} className="text-secondary" />
                </div>
                <h2 className="text-3xl font-bold">Способы оплаты</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Банковской картой онлайн</h3>
                    <p className="text-muted-foreground">
                      Visa, MasterCard, МИР — безопасная оплата на сайте
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">При получении</h3>
                    <p className="text-muted-foreground">
                      Наличными или картой курьеру или в пункте выдачи
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Банковским переводом</h3>
                    <p className="text-muted-foreground">
                      Для юридических лиц по счету
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Условия доставки</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>• Заказы обрабатываются в течение 1-2 рабочих дней</p>
                <p>• После отправки вы получите трек-номер для отслеживания</p>
                <p>• Срок хранения в пункте выдачи — до 14 дней</p>
                <p>• Возврат возможен в течение 14 дней после получения</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
