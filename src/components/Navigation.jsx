import React from 'react';
import { Sword, ShoppingBag, Map, Users, Trophy } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: 'raid', label: '레이드 대기방', icon: Sword },
    { id: 'shop', label: '상점', icon: ShoppingBag },
    { id: 'errand', label: '파견소', icon: Map },
    { id: 'guild', label: '길드 관리', icon: Users },
    { id: 'leaderboard', label: '명예의 전당', icon: Trophy },
  ];

  const handleMenuClick = (pageId) => {
    setCurrentPage(pageId);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col w-64 bg-dark-card border-r border-dark-border p-6 h-screen overflow-y-auto fixed left-0 top-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neon-pink">⚔️ RPG</h1>
          <p className="text-xs text-gray-400 mt-2">웹툰 미니 게임</p>
        </div>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'bg-neon-pink text-black font-bold neon-shadow'
                    : 'text-gray-300 hover:bg-dark-border'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-auto pt-6 border-t border-dark-border">
          <p className="text-xs text-gray-500">v1.0.0</p>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <nav
        className={`fixed top-0 left-0 h-screen w-64 bg-dark-card border-r border-dark-border p-6 z-40 transform transition-transform md:hidden ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8 mt-12">
          <h1 className="text-2xl font-bold text-neon-pink">⚔️ RPG</h1>
          <p className="text-xs text-gray-400 mt-2">웹툰 미니 게임</p>
        </div>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'bg-neon-pink text-black font-bold neon-shadow'
                    : 'text-gray-300 hover:bg-dark-border'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
