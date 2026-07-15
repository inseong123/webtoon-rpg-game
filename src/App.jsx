import React, { useState } from 'react';
import Navigation from './components/Navigation';
import RaidWaitingRoom from './components/RaidWaitingRoom';
import Shop from './components/Shop';
import ErrandHouse from './components/ErrandHouse';
import GuildManagement from './components/GuildManagement';
import Leaderboard from './components/Leaderboard';
import { Menu, X } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('raid');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pages = {
    raid: <RaidWaitingRoom />,
    shop: <Shop />,
    errand: <ErrandHouse />,
    guild: <GuildManagement />,
    leaderboard: <Leaderboard />,
  };

  return (
    <div className="flex h-screen bg-dark-bg text-gray-100">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden button-secondary"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 md:p-8 md:ml-0">
        <div className="max-w-7xl mx-auto">
          {pages[currentPage]}
        </div>
      </main>
    </div>
  );
};

export default App;
