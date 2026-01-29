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
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/8474bc64-7493-4dff-ad18-8b71cc4c6a31.jpg',
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
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/49aae415-38e8-498a-9f8b-a38a21587b0c.jpg',
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
  },
  {
    id: '19',
    name: 'Варенье малиновое',
    price: 450,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/26665afa-cadd-4e88-ba06-47d6ee714ec4.jpg',
    description: 'Классическое малиновое варенье из таежных ягод',
    category: 'варенье'
  },
  {
    id: '20',
    name: 'Варенье клубничное',
    price: 420,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/e369c0e1-9c59-4cae-8add-b07c26ebfad8.jpg',
    description: 'Ароматное клубничное варенье с крупными ягодами',
    category: 'варенье'
  },
  {
    id: '21',
    name: 'Варенье облепиховое',
    price: 480,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/b1b513dd-850f-42f9-81b8-7c3750165fd0.jpg',
    description: 'Кладезь витаминов! Золотое облепиховое варенье',
    category: 'варенье'
  },
  {
    id: '22',
    name: 'Варенье смородиновое',
    price: 400,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/adc07455-7ee7-4d2b-8e3a-85085055d157.jpg',
    description: 'Насыщенное варенье из черной смородины',
    category: 'варенье'
  },
  {
    id: '23',
    name: 'Варенье брусничное',
    price: 470,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/81c4556f-2df5-4088-9635-b74030ec573b.jpg',
    description: 'Таежная брусника с легкой кислинкой',
    category: 'варенье'
  },
  {
    id: '24',
    name: 'Варенье черничное',
    price: 490,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/e3716da4-dee9-48ee-ad14-f763c06fc941.jpg',
    description: 'Лесная черника для здоровья глаз',
    category: 'варенье'
  },
  {
    id: '25',
    name: 'Варенье клюквенное',
    price: 460,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/025ab5df-8083-488f-95b8-cb210c4d1a91.jpg',
    description: 'Целебная клюква с болот Сибири',
    category: 'варенье'
  },
  {
    id: '26',
    name: 'Мёд таежный',
    price: 890,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/f0cad19c-14c0-4dda-8570-6337c314a805.jpg',
    description: 'Натуральный мёд с таежных пасек, собранный с диких цветов',
    category: 'мёд'
  },
  {
    id: '27',
    name: 'Мёд с кедровой живицей',
    price: 1200,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/f0cad19c-14c0-4dda-8570-6337c314a805.jpg',
    description: 'Уникальное сочетание меда и целебной кедровой смолы',
    category: 'мёд'
  },
  {
    id: '28',
    name: 'Орех кедровый',
    price: 650,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/7b88e8c4-7f84-492f-a906-6c15063fdb77.jpg',
    description: 'Отборные кедровые орехи из сибирской тайги',
    category: 'орехи'
  },
  {
    id: '29',
    name: 'Орех лесной (фундук)',
    price: 480,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/7b88e8c4-7f84-492f-a906-6c15063fdb77.jpg',
    description: 'Дикий лесной орех, богатый витаминами',
    category: 'орехи'
  },
  {
    id: '30',
    name: 'Лисички сушеные',
    price: 520,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/a2c494ed-df50-43bc-bef3-d71dba401463.jpg',
    description: 'Отборные сушеные лисички из сибирской тайги. Идеальны для супов и жарки',
    category: 'грибы'
  },
  {
    id: '31',
    name: 'Опята сушеные',
    price: 480,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/2b04752c-ae8f-4f34-b775-a99c829a67f4.jpg',
    description: 'Ароматные сушеные опята для настоящих ценителей грибов',
    category: 'грибы'
  },
  {
    id: '32',
    name: 'Папоротник Орляк соленый',
    price: 550,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/d00c8c83-7cad-4433-abbf-2d90af228ee2.jpg',
    description: 'Деликатес из тайги! Соленые побеги папоротника орляк с нежным вкусом',
    category: 'соления'
  },
  {
    id: '33',
    name: 'Грузди соленые',
    price: 680,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/bucket/0b6152c3-f226-461e-9ae9-c227e21c4e1b.jpg',
    description: 'Классические соленые грузди по старинному рецепту. Хрустящие и ароматные',
    category: 'соления'
  },
  {
    id: '34',
    name: 'Рыжики соленые',
    price: 750,
    image: 'https://cdn.poehali.dev/projects/e5392123-9506-4d3a-a0b1-7bc7a59051cc/files/7b0ed349-3bee-47f5-9b37-48e60a5e0fe3.jpg',
    description: 'Царские грибы! Соленые рыжики — деликатес для настоящих гурманов',
    category: 'соления'
  }
];