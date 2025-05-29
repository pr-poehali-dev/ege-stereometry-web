import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import TopicsSection from "@/components/sections/TopicsSection";
import StatsSection from "@/components/sections/StatsSection";
import { TabType } from "@/types";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>("main");

  const renderMainContent = () => (
    <div className="space-y-16">
      <HeroSection />
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
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "main" && renderMainContent()}
      {activeTab === "theory" && renderTheoryContent()}
      {activeTab === "practice" && renderPracticeContent()}

      <footer className="bg-gray-800 text-white py-8 px-6 mx-0 my-[330px]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-2">© 2025 ЕГЭ Стереометрия</p>
          <p className="text-gray-400">
            Подготовка к экзамену с профессионалами
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
