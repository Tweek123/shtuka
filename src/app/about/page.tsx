import Navbar from '../../components/Navbar';

export default function About() {
  const team = [
    {
      name: 'Анна Петрова',
      role: 'Арт-директор',
      image: '/images/team1.jpg',
      description:
        '10+ лет опыта в дизайне. Работала с крупнейшими брендами России и Европы.',
    },
    {
      name: 'Максим Иванов',
      role: 'Ведущий UI/UX дизайнер',
      image: '/images/team2.jpg',
      description:
        'Эксперт в создании удобных и красивых интерфейсов. Более 50 успешных проектов.',
    },
    {
      name: 'Елена Сидорова',
      role: 'Бренд-дизайнер',
      image: '/images/team3.jpg',
      description:
        'Специалист по созданию уникальных брендов и визуальных идентичностей.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pb-20 pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold">О нашей студии</h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Мы - команда профессиональных дизайнеров, объединенных страстью к
              созданию красивых и функциональных решений для бизнеса.
            </p>
          </div>

          {/* Stats Section */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <div className="mb-2 text-4xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <div className="mb-2 text-4xl font-bold text-gray-900">200+</div>
              <div className="text-gray-600">Завершенных проектов</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <div className="mb-2 text-4xl font-bold text-gray-900">10</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <div className="mb-2 text-4xl font-bold text-gray-900">15</div>
              <div className="text-gray-600">Наград</div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-16 rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-3xl font-bold">Наша миссия</h2>
            <p className="mb-6 text-lg text-gray-600">
              Мы стремимся создавать дизайн, который не только красив, но и
              эффективно решает бизнес-задачи наших клиентов. Наш подход основан
              на глубоком понимании потребностей пользователей и бизнес-целей
              заказчика.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-2 text-xl font-semibold">Качество</h3>
                <p className="text-gray-600">
                  Мы не идем на компромиссы когда дело касается качества нашей
                  работы.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Инновации</h3>
                <p className="text-gray-600">
                  Постоянно следим за трендами и внедряем новые технологии.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Результат</h3>
                <p className="text-gray-600">
                  Ориентируемся на достижение измеримых бизнес-результатов.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="mb-12 text-center text-3xl font-bold">
              Наша команда
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="overflow-hidden rounded-lg bg-white shadow-lg"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="mb-4 text-gray-600">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
