import { TabType } from "@/types";

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: "main" as TabType, label: "Главная" },
    { id: "theory" as TabType, label: "Теория" },
    { id: "practice" as TabType, label: "Практика" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 font-montserrat">
            ЕГЭ Стереометрия
          </div>
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
