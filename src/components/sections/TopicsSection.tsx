import Icon from "@/components/ui/icon";
import { topics } from "@/constants/data";

const TopicsSection = () => {
  return (
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
                <p className="text-sm text-blue-600">{topic.problems} задач</p>
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
  );
};

export default TopicsSection;
