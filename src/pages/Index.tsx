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

      <section className="py-24 bg-[#2D2D2D] text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl font-bold text-center mb-16">
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
