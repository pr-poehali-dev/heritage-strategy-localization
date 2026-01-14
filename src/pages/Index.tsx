import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    messenger: "whatsapp",
    withAutograph: false,
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex items-center justify-center relative bg-[#2D2D2D] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://cdn.poehali.dev/projects/3ba8b27d-028a-47d2-92c0-1b5f466fcb5c/files/83398a07-aa68-4032-8348-df8c54ae94a2.jpg" 
            alt="Elena Isinbayeva"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Елена Исинбаева
          </h1>
          <div className="inline-block bg-primary px-6 py-2 mb-8">
            <p className="font-heading text-xl md:text-2xl font-semibold uppercase tracking-wider">
              Официальный сайт
            </p>
          </div>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
            Единственный официальный источник информации, новостей и контактов.<br />
            Правда из первых рук.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-heading text-lg px-8 py-6">
            Узнать правдивую историю
          </Button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl font-bold text-center mb-4 text-foreground">
            О Елене
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Живая история легкой атлетики
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in border-2">
              <div className="text-primary mb-4">
                <Icon name="Trophy" size={48} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Олимпийская чемпионка</h3>
              <p className="text-muted-foreground leading-relaxed">
                Двукратная олимпийская чемпионка (2004, 2008). Золотые медали в прыжках с шестом.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in border-2" style={{ animationDelay: '0.1s' }}>
              <div className="text-primary mb-4">
                <Icon name="Award" size={48} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">28 мировых рекордов</h3>
              <p className="text-muted-foreground leading-relaxed">
                Установила 28 мировых рекордов в прыжках с шестом. Первая женщина, преодолевшая 5 метров.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in border-2" style={{ animationDelay: '0.2s' }}>
              <div className="text-primary mb-4">
                <Icon name="Star" size={48} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Трёхкратная чемпионка мира</h3>
              <p className="text-muted-foreground leading-relaxed">
                Чемпионка мира 2005, 2007, 2013 годов. Многократная чемпионка Европы.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in border-2" style={{ animationDelay: '0.3s' }}>
              <div className="text-primary mb-4">
                <Icon name="Users" size={48} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Общественная деятельность</h3>
              <p className="text-muted-foreground leading-relaxed">
                Член МОК, посол спорта, активная благотворительная и общественная работа.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in border-2" style={{ animationDelay: '0.4s' }}>
              <div className="text-primary mb-4">
                <Icon name="Calendar" size={48} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Актуальная деятельность</h3>
              <p className="text-muted-foreground leading-relaxed">
                Регулярное участие в спортивных мероприятиях, форумах и встречах с молодежью.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in border-2" style={{ animationDelay: '0.5s' }}>
              <div className="text-primary mb-4">
                <Icon name="Heart" size={48} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Благотворительность</h3>
              <p className="text-muted-foreground leading-relaxed">
                Поддержка детского спорта, помощь молодым спортсменам, социальные проекты.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl font-bold text-center mb-4 text-foreground">
            Галерея достижений
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Моменты триумфа и легендарные победы
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/3ba8b27d-028a-47d2-92c0-1b5f466fcb5c/files/d5e2e612-c8c1-405d-aadc-389f86f2386e.jpg"
                alt="Олимпийские медали"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">Олимпийское золото</h3>
                  <p className="text-white/90">Пекин 2008, Афины 2004</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/3ba8b27d-028a-47d2-92c0-1b5f466fcb5c/files/cf10bf28-8656-48c3-9962-cf777a9a3f24.jpg"
                alt="Прыжок с шестом"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">Мировой рекорд</h3>
                  <p className="text-white/90">5.06 метра — абсолютный рекорд</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/3ba8b27d-028a-47d2-92c0-1b5f466fcb5c/files/0127e256-ecfd-4fa2-9c56-4993ad11cda5.jpg"
                alt="Победа"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">Триумф</h3>
                  <p className="text-white/90">Чемпионка мира 2005, 2007, 2013</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer bg-muted/30 flex items-center justify-center">
              <div className="text-center p-6">
                <Icon name="Image" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Международная федерация</h3>
                <p className="text-muted-foreground text-sm">Работа в IAAF и МОК</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer bg-muted/30 flex items-center justify-center">
              <div className="text-center p-6">
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Работа с молодежью</h3>
                <p className="text-muted-foreground text-sm">Мастер-классы и тренировки</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer bg-muted/30 flex items-center justify-center">
              <div className="text-center p-6">
                <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Благотворительность</h3>
                <p className="text-muted-foreground text-sm">Поддержка детского спорта</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="font-heading">
              <Icon name="Grid" size={20} className="mr-2" />
              Смотреть всю галерею
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#2D2D2D] text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl font-bold text-center mb-6">
            Видео
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Сторис, подкасты и автобиографический фильм
          </p>

          <div className="space-y-16 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-heading text-3xl font-bold">Сторис</h3>
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  Смотреть все
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="group relative aspect-[9/16] bg-white/10 rounded-lg overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/40 transition-colors">
                          <Icon name="Play" size={32} className="text-white" />
                        </div>
                        <p className="text-xs text-gray-400">Сторис {i}</p>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {i}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-heading text-3xl font-bold mb-2">Подкасты</h3>
                  <p className="text-gray-400">Беседы с приглашенными гостями</p>
                </div>
                <Button variant="ghost" className="text-primary hover:text-primary/80">
                  Все выпуски
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Скоро: Первый выпуск", guest: "Специальный гость", duration: "45 мин" },
                  { title: "Скоро: О спорте и жизни", guest: "Олимпийский чемпион", duration: "60 мин" }
                ].map((podcast, i) => (
                  <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="p-6 flex items-start space-x-4">
                      <div className="w-24 h-24 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mic" size={40} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading text-xl font-bold mb-2">{podcast.title}</h4>
                        <p className="text-gray-400 mb-3">{podcast.guest}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Icon name="Clock" size={16} className="mr-1" />
                            {podcast.duration}
                          </span>
                          <span className="flex items-center">
                            <Icon name="Calendar" size={16} className="mr-1" />
                            Скоро
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-3xl font-bold mb-2">Автобиографический фильм</h3>
              <p className="text-gray-400 mb-8">5 минут истории побед и вызовов</p>

              <div className="relative aspect-video bg-white/5 rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src="https://cdn.poehali.dev/projects/3ba8b27d-028a-47d2-92c0-1b5f466fcb5c/files/83398a07-aa68-4032-8348-df8c54ae94a2.jpg"
                  alt="Автобиографический фильм"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Play" size={48} className="text-white ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h4 className="font-heading text-3xl font-bold mb-3">Моя история</h4>
                  <p className="text-gray-300 text-lg mb-4">
                    От первых шагов в спорте до олимпийского триумфа. 
                    История о том, как мечта становится реальностью.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-2" />
                      5:32
                    </span>
                    <span className="flex items-center">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Премьера
                    </span>
                    <span className="flex items-center">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl font-bold text-center mb-16 text-foreground">
            Официальный статус
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-primary">
                  <Icon name="CheckCircle" size={32} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-2">Проверенная информация</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Все материалы на сайте проверены и одобрены. Официальная точка контакта для СМИ и деловых предложений.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-primary">
                  <Icon name="Shield" size={32} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-2">Безопасность данных</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Защищенные платежи, конфиденциальность персональных данных, соответствие международным стандартам.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-primary">
                  <Icon name="Globe" size={32} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-2">Международное признание</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Поддержка МОК, IAAF и ведущих спортивных федераций. Признание на мировом уровне.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-heading text-3xl font-bold mb-6">Партнёры и организации</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                  <Icon name="Building2" size={32} className="text-primary" />
                  <span className="text-lg">Международный Олимпийский Комитет</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                  <Icon name="Building2" size={32} className="text-primary" />
                  <span className="text-lg">World Athletics (IAAF)</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                  <Icon name="Building2" size={32} className="text-primary" />
                  <span className="text-lg">Олимпийский комитет России</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                  <Icon name="Building2" size={32} className="text-primary" />
                  <span className="text-lg">Всероссийская федерация лёгкой атлетики</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-bold mb-4 text-foreground">
              Моя истинная история
            </h2>
            <p className="text-xl text-muted-foreground">
              Автобиография с персональным автографом
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-8 aspect-[3/4] flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Book" size={120} className="text-primary mb-4 mx-auto" />
                  <p className="font-heading text-2xl font-bold">Книга</p>
                  <p className="text-muted-foreground">Фото обложки</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">Полная неискаженная история от первого лица</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">Эксклюзивные фотографии из личного архива</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">Опция персонального автографа</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">Премиальное коллекционное издание</p>
                </div>
              </div>
            </div>

            <Card className="p-8 shadow-xl">
              <h3 className="font-heading text-2xl font-bold mb-6">Оформить заказ</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="messenger">Предпочитаемый мессенджер</Label>
                  <select
                    id="messenger"
                    value={formData.messenger}
                    onChange={(e) => setFormData({ ...formData, messenger: e.target.value })}
                    className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="whatsapp">WhatsApp</option>
                    <option value="telegram">Telegram</option>
                    <option value="wechat">WeChat</option>
                    <option value="email">Email</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="autograph"
                    checked={formData.withAutograph}
                    onChange={(e) => setFormData({ ...formData, withAutograph: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="autograph" className="cursor-pointer">
                    С персональным автографом (+500 ₽)
                  </Label>
                </div>

                <div>
                  <Label htmlFor="message">Комментарий к заказу</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-heading text-lg py-6">
                  Заказать с безопасной оплатой
                </Button>

                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <Icon name="Lock" size={16} />
                  <span>Защищённая оплата</span>
                  <Icon name="Shield" size={16} />
                  <span>SSL сертификат</span>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-heading text-5xl font-bold text-center mb-16 text-foreground">
            Контакты
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <Icon name="Mail" size={40} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Для прессы</h3>
              <p className="text-muted-foreground mb-4">
                Официальные запросы от СМИ и журналистов
              </p>
              <a href="mailto:press@isinbaeva.com" className="text-primary hover:underline font-semibold">
                press@isinbaeva.com
              </a>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <Icon name="Briefcase" size={40} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Деловые предложения</h3>
              <p className="text-muted-foreground mb-4">
                Спонсорство, партнёрство, сотрудничество
              </p>
              <a href="mailto:business@isinbaeva.com" className="text-primary hover:underline font-semibold">
                business@isinbaeva.com
              </a>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                <Icon name="MessageCircle" size={40} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Общие вопросы</h3>
              <p className="text-muted-foreground mb-4">
                Поддержка, вопросы по книге и заказам
              </p>
              <a href="mailto:info@isinbaeva.com" className="text-primary hover:underline font-semibold">
                info@isinbaeva.com
              </a>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h3 className="font-heading text-2xl font-bold mb-6">Официальные социальные сети</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={32} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={32} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={32} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2D2D2D] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-heading text-xl font-bold mb-4">Елена Исинбаева</h4>
              <p className="text-gray-400">
                Официальный сайт двукратной олимпийской чемпионки и рекордсменки мира.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading text-xl font-bold mb-4">Юридическая информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пользовательское соглашение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Публичная оферта</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-xl font-bold mb-4">Рабочие часы</h4>
              <p className="text-gray-400">
                Понедельник - Пятница<br />
                9:00 - 18:00 (МСК)<br />
                <span className="text-sm">Ответ в течение 24 часов</span>
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Елена Исинбаева. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;