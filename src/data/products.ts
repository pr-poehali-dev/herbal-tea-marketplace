import { Product } from '@/context/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Иван-чай классический',
    price: 350,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500',
    description: 'Традиционный ферментированный иван-чай с насыщенным вкусом',
    category: 'чай'
  },
  {
    id: '2',
    name: 'Саган-дайля',
    price: 850,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500',
    description: 'Редкая сибирская трава для бодрости и долголетия',
    category: 'травы'
  },
  {
    id: '3',
    name: 'Чага березовая',
    price: 450,
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=500',
    description: 'Лечебный березовый гриб с мощным эффектом',
    category: 'грибы'
  },
  {
    id: '4',
    name: 'Таежный сбор №1',
    price: 420,
    image: 'https://images.unsplash.com/photo-1517451330947-7809dead78d5?w=500',
    description: 'Смесь таежных трав для укрепления иммунитета',
    category: 'сборы'
  },
  {
    id: '5',
    name: 'Кедровая живица',
    price: 780,
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=500',
    description: 'Натуральная смола кедра для здоровья и энергии',
    category: 'живица'
  },
  {
    id: '6',
    name: 'Родиола розовая (золотой корень)',
    price: 650,
    image: 'https://images.unsplash.com/photo-1517451330947-7809dead78d5?w=500',
    description: 'Адаптоген для стрессоустойчивости и выносливости',
    category: 'травы'
  },
  {
    id: '7',
    name: 'Иван-чай с таежными ягодами',
    price: 420,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500',
    description: 'Иван-чай с добавлением брусники и морошки',
    category: 'чай'
  },
  {
    id: '8',
    name: 'Курильский чай',
    price: 380,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500',
    description: 'Лапчатка кустарниковая для пищеварения',
    category: 'чай'
  },
  {
    id: '9',
    name: 'Веник березовый',
    price: 450,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/582c4922-b3ea-4271-bed1-0c646a9c919a.jpg',
    description: 'Классический березовый веник для бани. Отлично прогревает и тонизирует',
    category: 'веники'
  },
  {
    id: '10',
    name: 'Веник пихтовый',
    price: 550,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/0f973210-e6ef-41b8-b804-8f78d66b939f.jpg',
    description: 'Хвойный веник с целебным эффектом. Помогает при простуде',
    category: 'веники'
  },
  {
    id: '11',
    name: 'Веник можжевеловый',
    price: 650,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/243c9e77-24b0-494a-96d0-25599a0645fe.jpg',
    description: 'Эксклюзивный веник из можжевельника. Дезинфицирует и омолаживает',
    category: 'веники'
  },
  {
    id: '12',
    name: 'Веник дубовый',
    price: 500,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/2237bc53-103c-48b4-b096-9329b77628f4.jpg',
    description: 'Прочный дубовый веник для настоящих парильщиков',
    category: 'веники'
  },
  {
    id: '13',
    name: 'Веник крапивный',
    price: 400,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/bddd557b-f711-4f08-bef6-2260114bcd31.jpg',
    description: 'Лечебный крапивный веник при болях в суставах и ревматизме',
    category: 'веники'
  },
  {
    id: '14',
    name: 'Фиточай "Банный жар"',
    price: 320,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500',
    description: 'Бодрящий чай для бани с мятой, чабрецом и липой',
    category: 'фиточай для бани'
  },
  {
    id: '15',
    name: 'Фиточай "Таежный пар"',
    price: 350,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500',
    description: 'Сбор хвойных трав для легкого дыхания в парной',
    category: 'фиточай для бани'
  },
  {
    id: '16',
    name: 'Фиточай "Медовый вечер"',
    price: 380,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500',
    description: 'Успокаивающий чай после бани с медуницей и душицей',
    category: 'фиточай для бани'
  },
  {
    id: '17',
    name: 'Фиточай "Богатырский"',
    price: 420,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500',
    description: 'Энергетический сбор с саган-дайля и женьшенем для бани',
    category: 'фиточай для бани'
  },
  {
    id: '18',
    name: 'Фиточай "Горный ручей"',
    price: 340,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500',
    description: 'Освежающий чай с мятой и лимонником для бани',
    category: 'фиточай для бани'
  }
];