import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);

  const timeline = [
    { year: '2020', event: 'Знакомство', description: 'Вадим и Артём познакомились и подружились будучи детьми' },
    { year: '2023', event: 'Первый трек', description: 'Создали трек "Мне п*хуй" - начало музыкальной карьеры' },
    { year: '2024-2025', event: 'Эксперименты', description: 'Разные проекты, смена стилей, поиск своего звучания' },
    { year: '31 дек 2025', event: 'Прорыв', description: 'Релиз хитовой песни "Звезда" под новый год' },
    { year: 'Февраль 2026', event: 'Слава', description: 'Дуэт прославился, песня облетела весь мир' },
    { year: '5 янв 2027', event: 'Сегодня', description: 'Популярность на пике, работа над новыми проектами' },
  ];

  const tracks = [
    {
      id: 'track1',
      title: 'Мне п*хуй',
      year: '2023',
      description: 'Первый совместный трек, положивший начало карьере',
    },
    {
      id: 'track2',
      title: 'Звезда',
      year: '2025',
      description: 'Хитовая песня, которая облетела весь мир',
      image: '/placeholder.svg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8844ff44] to-transparent opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10 space-y-8">
          <div className="space-y-6 animate-fade-in">
            <div className="text-4xl md:text-5xl font-black tracking-wider neon-text-green mb-4">
              ГРИН
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter">
              <span className="neon-text-purple">UNLOVED</span>
              <span className="text-white mx-4">&</span>
              <span className="neon-text-blue">ЛИТИЙ</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 font-light">
              Рэп-дуэт, покоривший мир
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center text-sm md:text-base">
            <div className="glass-card px-6 py-3 rounded-full">
              <Icon name="Calendar" size={16} className="inline mr-2" />
              Активны с 2020
            </div>
            <div className="glass-card px-6 py-3 rounded-full">
              <Icon name="TrendingUp" size={16} className="inline mr-2" />
              Прорыв 2026
            </div>
            <div className="glass-card px-6 py-3 rounded-full">
              <Icon name="Globe" size={16} className="inline mr-2" />
              Мировая популярность
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-[#8844ff] hover:bg-[#7733ee] text-white font-bold text-lg px-8 py-6 neon-border-purple"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Слушать треки
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#44aaff] text-[#44aaff] hover:bg-[#44aaff] hover:text-white font-bold text-lg px-8 py-6"
            >
              <Icon name="Users" size={20} className="mr-2" />
              О дуэте
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-[#44aaff]" />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8844ff22] to-[#44aaff22] blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            <span className="neon-text-blue">ИСТОРИЯ</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 border-l-4 border-[#44aaff]"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="min-w-[120px]">
                    <div className="text-3xl font-black neon-text-blue">{item.year}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{item.event}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            <span className="neon-text-green">АРТИСТЫ</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Unloved */}
            <Card className="bg-[#111] border-[#8844ff] p-8 hover:scale-105 transition-all duration-300">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-4xl font-black neon-text-purple">UNLOVED</h3>
                  <p className="text-xl text-gray-400">Вадим Григорьевич Размахнин</p>
                </div>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3">
                    <Icon name="Cake" size={20} className="text-[#8844ff]" />
                    <span>19 лет</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mic2" size={20} className="text-[#8844ff]" />
                    <span>Рэпер, автор текстов</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Heart" size={20} className="text-[#8844ff]" />
                    <span>В отношениях с Кристиной</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Один из основателей дуэта. Известен своим уникальным флоу и глубокими текстами.
                  </p>
                </div>
              </div>
            </Card>

            {/* Литий */}
            <Card className="bg-[#111] border-[#44aaff] p-8 hover:scale-105 transition-all duration-300">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-4xl font-black neon-text-blue">ЛИТИЙ</h3>
                  <p className="text-xl text-gray-400">Артём Александрович Низоленко</p>
                </div>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3">
                    <Icon name="Cake" size={20} className="text-[#44aaff]" />
                    <span>17 лет</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mic2" size={20} className="text-[#44aaff]" />
                    <span>Рэпер, продюсер</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Heart" size={20} className="text-[#44aaff]" />
                    <span>В отношениях с Анной Станиславной</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Молодой талант с невероятной энергетикой. Отвечает за продакшн и звучание треков.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8844ff22] to-transparent blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            <span className="neon-text-purple">ТРЕКИ</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {tracks.map((track) => (
              <Card key={track.id} className="bg-[#111] border-[#8844ff] p-6 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-1 space-y-2">
                    <h3 className="text-3xl font-bold">{track.title}</h3>
                    <p className="text-gray-400 text-sm">{track.year} • {track.description}</p>
                  </div>
                  
                  <Button
                    size="lg"
                    onClick={() => setPlayingTrack(playingTrack === track.id ? null : track.id)}
                    className={`${
                      playingTrack === track.id 
                        ? 'bg-[#44aaff] hover:bg-[#3399ee]' 
                        : 'bg-[#8844ff] hover:bg-[#7733ee]'
                    } text-white font-bold`}
                  >
                    <Icon name={playingTrack === track.id ? 'Pause' : 'Play'} size={20} className="mr-2" />
                    {playingTrack === track.id ? 'Пауза' : 'Слушать'}
                  </Button>
                </div>

                {playingTrack === track.id && (
                  <div className="mt-6 p-4 bg-black/50 rounded-lg animate-fade-in">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#8844ff] to-[#44aaff] w-1/3 animate-pulse"></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-400">1:23 / 3:45</span>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            <span className="neon-text-blue">АЛЬБОМЫ</span>
          </h2>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="number" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 bg-[#111] p-2">
                <TabsTrigger value="number" className="data-[state=active]:bg-[#10aa60] data-[state=active]:text-black">
                  Number
                </TabsTrigger>
                <TabsTrigger value="other" className="data-[state=active]:bg-[#8844ff] data-[state=active]:text-white">
                  Другие альбомы
                </TabsTrigger>
                <TabsTrigger value="upcoming" className="data-[state=active]:bg-[#44aaff] data-[state=active]:text-white">
                  Будущие релизы
                </TabsTrigger>
              </TabsList>

              <TabsContent value="number" className="mt-8">
                <Card className="bg-[#111] border-[#10aa60] p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="aspect-square bg-gradient-to-br from-[#10aa60] to-[#0d8850] rounded-2xl flex items-center justify-center">
                      <span className="text-8xl font-black text-white">№</span>
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-4xl font-black neon-text-green">NUMBER</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Дебютный альбом дуэта, демонстрирующий разнообразие стилей и творческий потенциал артистов. 
                        Включает хиты "Мне п*хуй" и "Звезда", а также множество других композиций.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <div className="glass-card px-4 py-2 rounded-full text-sm">
                          <Icon name="Music" size={14} className="inline mr-2" />
                          12 треков
                        </div>
                        <div className="glass-card px-4 py-2 rounded-full text-sm">
                          <Icon name="Clock" size={14} className="inline mr-2" />
                          45 минут
                        </div>
                        <div className="glass-card px-4 py-2 rounded-full text-sm">
                          <Icon name="Star" size={14} className="inline mr-2" />
                          Платиновый статус
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="other" className="mt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-[#111] border-[#8844ff] p-6 hover:scale-105 transition-all duration-300">
                      <div className="aspect-square bg-gradient-to-br from-[#8844ff] to-[#6622dd] rounded-xl mb-4"></div>
                      <h4 className="text-xl font-bold mb-2">Альбом {i}</h4>
                      <p className="text-sm text-gray-400">Скоро информация</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="upcoming" className="mt-8">
                <Card className="bg-[#111] border-[#44aaff] p-8 text-center">
                  <Icon name="Sparkles" size={48} className="mx-auto mb-4 text-[#44aaff]" />
                  <h3 className="text-3xl font-bold mb-4 neon-text-blue">В разработке</h3>
                  <p className="text-gray-400">
                    Новые проекты уже в студии. Следите за обновлениями!
                  </p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Personal Life Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8844ff22] via-transparent to-[#44aaff22] blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            <span className="neon-text-green">ЛИЧНАЯ ЖИЗНЬ</span>
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-[#111] border-[#8844ff] p-8">
              <div className="text-center space-y-4">
                <Icon name="Heart" size={48} className="mx-auto text-[#8844ff]" />
                <h3 className="text-2xl font-bold neon-text-purple">Unloved & Кристина</h3>
                <p className="text-gray-400">
                  Вадим счастлив в отношениях со своей девушкой Кристиной, которая поддерживает его творческий путь.
                </p>
              </div>
            </Card>

            <Card className="bg-[#111] border-[#44aaff] p-8">
              <div className="text-center space-y-4">
                <Icon name="Heart" size={48} className="mx-auto text-[#44aaff]" />
                <h3 className="text-2xl font-bold neon-text-blue">Литий & Анна</h3>
                <p className="text-gray-400">
                  Артём в отношениях с Анной Станиславной, которая вдохновляет его на создание новой музыки.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            <span className="neon-text-purple">ГАЛЕРЕЯ</span>
          </h2>

          <div className="max-w-6xl mx-auto space-y-8">
            <Card className="bg-[#111] border-[#10aa60] p-4 overflow-hidden">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/IMG_20251219_184629_764.jpg" 
                  alt="Unloved & Литий"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-gray-400 mt-4">Unloved & Литий вместе</p>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[#111] border-[#8844ff] p-4">
                <div className="aspect-square bg-gradient-to-br from-[#8844ff] to-[#6622dd] rounded-xl flex items-center justify-center">
                  <Icon name="User" size={48} className="text-white/30" />
                </div>
                <p className="text-center text-gray-400 mt-4">Unloved</p>
              </Card>

              <Card className="bg-[#111] border-[#44aaff] p-4">
                <div className="aspect-square bg-gradient-to-br from-[#44aaff] to-[#2288dd] rounded-xl flex items-center justify-center">
                  <Icon name="User" size={48} className="text-white/30" />
                </div>
                <p className="text-center text-gray-400 mt-4">Литий</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="hover:text-[#8844ff]">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-[#44aaff]">
              <Icon name="Music" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-[#10aa60]">
              <Icon name="Youtube" size={24} />
            </Button>
          </div>
          <p className="text-gray-500 text-sm">
            © 2027 Unloved & Литий • <span className="neon-text-green">ГРИН</span> • Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;