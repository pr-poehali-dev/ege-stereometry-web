import { useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("main");

  const topics = [
    {
      title: "Объемы многогранников",
      description: "Призмы, пирамиды, параллелепипеды",
      icon: "Box",
      problems: 25,
    },
    {
      title: "Тела вращения",
      description: "Цилиндры, конусы, сферы",
      icon: "Circle",
      problems: 20,
    },
    {
      title: "Комбинированные фигуры",
      description: "Сложные составные тела",
      icon: "Layers",
      problems: 15,
    },
  ];

  const renderMainContent = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white py-20 px-6">
        {/* Cloud Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-12 bg-white rounded-full"></div>
          <div className="absolute top-8 left-16 w-16 h-8 bg-white rounded-full"></div>
          <div className="absolute top-16 right-20 w-24 h-14 bg-white rounded-full"></div>
          <div className="absolute top-12 right-32 w-18 h-10 bg-white rounded-full"></div>
          <div className="absolute top-32 left-1/4 w-22 h-12 bg-white rounded-full"></div>
          <div className="absolute top-40 right-1/3 w-20 h-10 bg-white rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 font-montserrat">
            Стереометрия ЕГЭ
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Задание №3 • Профильная математика • Подготовка к экзамену
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="font-semibold">📐 Объемы</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="font-semibold">🎯 Площади</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="font-semibold">⚡ Быстрое решение</span>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 font-montserrat">
          Основные темы
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-blue-500"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Icon name={topic.icon} size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-blue-600">
                    {topic.problems} задач
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                Изучить
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 font-montserrat">
            Результаты подготовки
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">Успешная сдача ЕГЭ</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">60+</div>
              <p className="text-gray-600">Разобранных задач</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">3 мес</div>
              <p className="text-gray-600">Средний срок подготовки</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderTheoryContent = () => (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 font-montserrat">
        Теория
      </h2>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Основные формулы объемов
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Призма:</strong> V = S<sub>осн</sub> × h
            </p>
            <p>
              <strong>Пирамида:</strong> V = ⅓ × S<sub>осн</sub> × h
            </p>
            <p>
              <strong>Цилиндр:</strong> V = π × r² × h
            </p>
            <p>
              <strong>Конус:</strong> V = ⅓ × π × r² × h
            </p>
            <p>
              <strong>Сфера:</strong> V = ⁴⁄₃ × π × r³
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Ключевые принципы
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Всегда начинайте с построения сечения</li>
            <li>• Используйте координатный метод для сложных задач</li>
            <li>• Помните о подобии фигур</li>
            <li>• Проверяйте размерность ответа</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderPracticeContent = () => (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 font-montserrat">
        Практика
      </h2>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Задача №1
          </h3>
          <p className="text-gray-700 mb-4">
            Дана правильная треугольная призма ABCA₁B₁C₁, все рёбра которой
            равны 2. Найдите объём пирамиды AB₁C₁D, где D — середина ребра BC.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Показать решение
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Задача №2
          </h3>
          <p className="text-gray-700 mb-4">
            В правильной четырёхугольной пирамиде SABCD сторона основания равна
            6, а боковое ребро равно 5. Найдите объём пирамиды.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Показать решение
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Задача №3
          </h3>
          <p className="text-gray-700 mb-4">
            Цилиндр и конус имеют общее основание и общую высоту. Во сколько раз
            объём цилиндра больше объёма конуса?
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Показать решение
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-open-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600 font-montserrat">
              ЕГЭ Стереометрия
            </div>
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("main")}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === "main"
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveTab("theory")}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === "theory"
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                Теория
              </button>
              <button
                onClick={() => setActiveTab("practice")}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === "practice"
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                Практика
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      {activeTab === "main" && renderMainContent()}
      {activeTab === "theory" && renderTheoryContent()}
      {activeTab === "practice" && renderPracticeContent()}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-2">© 2024 ЕГЭ Стереометрия</p>
          <p className="text-gray-400">
            Подготовка к экзамену с профессионалами
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
