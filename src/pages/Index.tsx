import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('bio');

  const projects = [
    {
      title: 'Анна Каренина',
      platform: 'Культура.РФ',
      url: 'https://www.culture.ru',
      type: 'Спектакль',
      year: '2025'
    },
    {
      title: 'Чайка',
      platform: 'Театр HD',
      url: 'https://www.theatre-hd.ru',
      type: 'Запись спектакля',
      year: '2024'
    },
    {
      title: 'Интервью с актрисой',
      platform: 'YouTube',
      url: 'https://youtube.com',
      type: 'Интервью',
      year: '2025'
    }
  ];

  const videos = [
    {
      title: 'Монолог из "Анна Каренина"',
      thumbnail: 'https://cdn.poehali.dev/projects/91e96537-db68-4138-83a5-e56ba86c5b8c/files/1008c503-333e-48f1-826e-2a1bf972562a.jpg',
      duration: '3:24'
    },
    {
      title: 'За кулисами: Подготовка к спектаклю',
      thumbnail: 'https://cdn.poehali.dev/projects/91e96537-db68-4138-83a5-e56ba86c5b8c/files/1008c503-333e-48f1-826e-2a1bf972562a.jpg',
      duration: '5:12'
    },
    {
      title: 'Премьера "Три сестры"',
      thumbnail: 'https://cdn.poehali.dev/projects/91e96537-db68-4138-83a5-e56ba86c5b8c/files/1008c503-333e-48f1-826e-2a1bf972562a.jpg',
      duration: '4:45'
    }
  ];

  const performances = [
    {
      date: '15 февраля 2026',
      city: 'Москва',
      venue: 'Театр им. Вахтангова',
      play: 'Анна Каренина',
      role: 'Анна Каренина',
      status: 'available'
    },
    {
      date: '22 февраля 2026',
      city: 'Санкт-Петербург',
      venue: 'Александринский театр',
      play: 'Чайка',
      role: 'Нина Заречная',
      status: 'sold-out'
    },
    {
      date: '8 марта 2026',
      city: 'Казань',
      venue: 'Театр им. Качалова',
      play: 'Три сестры',
      role: 'Маша',
      status: 'available'
    },
    {
      date: '15 марта 2026',
      city: 'Екатеринбург',
      venue: 'Свердловская драма',
      play: 'Гроза',
      role: 'Катерина',
      status: 'available'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Невероятная игра! Каждая эмоция передана с такой глубиной, что невозможно оторваться.',
      rating: 5,
      play: 'Анна Каренина'
    },
    {
      name: 'Дмитрий Сергеев',
      text: 'Великолепное исполнение роли. Актриса полностью растворилась в образе.',
      rating: 5,
      play: 'Чайка'
    },
    {
      name: 'Елена Волкова',
      text: 'Это было магически! Спасибо за незабываемый вечер в театре.',
      rating: 5,
      play: 'Три сестры'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary via-primary to-secondary opacity-80"
        style={{ boxShadow: '0 2px 20px rgba(212, 175, 55, 0.5)' }}
      />

      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">Екатерина Волкова</h1>
            <div className="flex gap-6">
              {[
                { id: 'bio', label: 'Биография', icon: 'User' },
                { id: 'schedule', label: 'Гастроли', icon: 'Calendar' },
                { id: 'projects', label: 'Проекты', icon: 'Film' },
                { id: 'videos', label: 'Видео', icon: 'Video' },
                { id: 'reviews', label: 'Отзывы', icon: 'Star' },
                { id: 'contacts', label: 'Контакты', icon: 'Mail' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'bio' && (
        <section className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-xl" />
              <img
                src="https://cdn.poehali.dev/projects/91e96537-db68-4138-83a5-e56ba86c5b8c/files/1008c503-333e-48f1-826e-2a1bf972562a.jpg"
                alt="Екатерина Волкова"
                className="relative rounded-lg shadow-2xl w-full aspect-[3/4] object-cover border-2 border-primary/50"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-5xl font-bold mb-2 text-primary">Екатерина Волкова</h2>
                <p className="text-xl text-muted-foreground">Актриса театра и кино</p>
              </div>
              
              <Separator className="bg-primary/30" />
              
              <div className="space-y-4 text-foreground/90">
                <p className="text-lg leading-relaxed">
                  Екатерина Волкова — актриса театра и кино, за спиной которой больше 100 ролей в кино и сериалах. 
                  Её талант и преданность искусству покорили сердца миллионов зрителей по всей стране.
                </p>
                <p className="text-lg leading-relaxed">
                  Яркая, талантливая, многогранная, она с легкостью покоряет сердца зрителей, 
                  воплощая на экране и сцене самых разных персонажей.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Icon name="Film" size={16} className="mr-2" />
                  100+ ролей
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Icon name="Heart" size={16} className="mr-2" />
                  Признание тысяч фанатов
                </Badge>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'schedule' && (
        <section className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 text-primary">Расписание гастролей</h2>
              <p className="text-xl text-muted-foreground">
                Ближайшие спектакли с участием Екатерины Волковой
              </p>
            </div>

            <div className="grid gap-6">
              {performances.map((perf, idx) => (
                <Card 
                  key={idx} 
                  className="overflow-hidden border-primary/30 hover:border-primary/60 transition-all hover:shadow-xl hover:shadow-primary/20"
                >
                  <CardHeader className="bg-card/50">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <Icon name="Theater" className="text-primary" size={28} />
                          {perf.play}
                        </CardTitle>
                        <CardDescription className="text-base">
                          Роль: <span className="text-primary font-medium">{perf.role}</span>
                        </CardDescription>
                      </div>
                      <Badge 
                        variant={perf.status === 'sold-out' ? 'destructive' : 'default'}
                        className="px-3 py-1"
                      >
                        {perf.status === 'sold-out' ? 'Билеты проданы' : 'Билеты в продаже'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3">
                        <Icon name="Calendar" className="text-primary" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Дата</p>
                          <p className="font-medium">{perf.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="MapPin" className="text-primary" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Город</p>
                          <p className="font-medium">{perf.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Building" className="text-primary" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Театр</p>
                          <p className="font-medium">{perf.venue}</p>
                        </div>
                      </div>
                    </div>
                    {perf.status === 'available' && (
                      <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                        <Icon name="Ticket" size={18} className="mr-2" />
                        Купить билеты
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'projects' && (
        <section className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 text-primary">Проекты</h2>
              <p className="text-xl text-muted-foreground">
                Где посмотреть выступления Екатерины Волковой
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <Card key={idx} className="border-primary/30 hover:border-primary/60 transition-all group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="Film" size={16} className="text-primary" />
                          {project.type} • {project.year}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="border-primary/50">
                        {project.platform}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <Icon name="ExternalLink" size={18} className="mr-2" />
                        Смотреть на {project.platform}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'videos' && (
        <section className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 text-primary">Видео</h2>
              <p className="text-xl text-muted-foreground">
                Избранные моменты и записи спектаклей
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, idx) => (
                <Card key={idx} className="border-primary/30 hover:border-primary/60 transition-all overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name="Play" size={28} className="text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute bottom-3 right-3 bg-black/80">
                      {video.duration}
                    </Badge>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'reviews' && (
        <section className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 text-primary">Отзывы зрителей</h2>
              <p className="text-xl text-muted-foreground">
                Что говорят о выступлениях Екатерины
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, idx) => (
                <Card key={idx} className="border-primary/30 hover:border-primary/60 transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit border-primary/50">
                      {review.play}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 italic leading-relaxed">
                      "{review.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 text-primary">Контакты</h2>
              <p className="text-xl text-muted-foreground">
                Свяжитесь для бронирования и сотрудничества
              </p>
            </div>

            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">Форма обратной связи</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input placeholder="Иван Иванов" className="border-primary/30" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="ivan@example.com" className="border-primary/30" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="border-primary/30" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем мероприятии или вопросе..."
                      className="min-h-32 border-primary/30"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>

                <Separator className="my-8 bg-primary/30" />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Дополнительная информация</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" className="text-primary" size={20} />
                      <span>booking@teatrova.ru</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" className="text-primary" size={20} />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" className="text-primary" size={20} />
                      <span>Москва, Театральная площадь</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground">
              © 2026 Екатерина Волкова. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;