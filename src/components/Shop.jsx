import React, { useState } from 'react';
import { ShoppingBag, X } from 'lucide-react';

const Shop = () => {
  const [gold, setGold] = useState(50000);
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [inventory, setInventory] = useState([]);

  const items = [
    {
      id: 1,
      name: '강철 검',
      type: 'weapon',
      price: 1500,
      icon: '⚔️',
      description: '기본적인 공격력을 제공하는 검',
    },
    {
      id: 2,
      name: '용의 검',
      type: 'weapon',
      price: 5000,
      icon: '🗡️',
      description: '매우 강력한 공격력을 가진 전설 무기',
    },
    {
      id: 3,
      name: '철갑옷',
      type: 'armor',
      price: 2000,
      icon: '🛡️',
      description: '기본 방어력을 제공하는 갑옷',
    },
    {
      id: 4,
      name: '드래곤 갑옷',
      type: 'armor',
      price: 7000,
      icon: '🐉',
      description: '최고 수준의 방어력을 자랑하는 전설 갑옷',
    },
    {
      id: 5,
      name: '황금 반지',
      type: 'accessory',
      price: 3000,
      icon: '💍',
      description: '모든 능력치를 10% 증가시키는 신비로운 반지',
    },
    {
      id: 6,
      name: '영혼 목걸이',
      type: 'accessory',
      price: 6000,
      icon: '📿',
      description: '최대 HP를 30% 증가시키는 신성한 장신구',
    },
  ];

  const filteredItems = filter === 'all' ? items : items.filter((item) => item.type === filter);

  const handleBuy = (item) => {
    if (gold >= item.price) {
      setGold(gold - item.price);
      setInventory([...inventory, item]);
      setSelectedItem(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-neon-pink mb-2">🏪 상점</h1>
        <p className="text-gray-400">무기, 방어구, 장신구를 구매하세요</p>
      </div>

      {/* Gold Display */}
      <div className="card bg-gradient-to-r from-yellow-900/30 to-yellow-700/30 border-neon-yellow/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">보유 골드</p>
            <p className="text-3xl font-bold text-neon-yellow">{gold.toLocaleString()}</p>
          </div>
          <div className="text-5xl">💰</div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {['all', 'weapon', 'armor', 'accessory'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${
              filter === type ? 'button-primary' : 'button-secondary'
            }`}
          >
            {type === 'all' && '전체'}
            {type === 'weapon' && '⚔️ 무기'}
            {type === 'armor' && '🛡️ 방어구'}
            {type === 'accessory' && '💍 장신구'}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="card hover:neon-border hover:neon-shadow transition-all cursor-pointer group">
            <div className="flex items-start justify-between mb-3">
              <div className="text-4xl">{item.icon}</div>
              <p className="text-neon-yellow font-bold text-sm">💰 {item.price}</p>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
            <p className="text-gray-400 text-sm mb-3">{item.description}</p>
            <button
              onClick={() => setSelectedItem(item)}
              disabled={gold < item.price}
              className={`w-full py-2 rounded-lg font-bold transition-all ${
                gold >= item.price ? 'button-primary' : 'opacity-50 cursor-not-allowed bg-gray-600'
              }`}
            >
              {gold >= item.price ? '구매' : '골드 부족'}
            </button>
          </div>
        ))}
      </div>

      {/* Purchase Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="card max-w-md w-full neon-border neon-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-neon-pink">구매 확인</h2>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <div className="text-6xl text-center mb-4">{selectedItem.icon}</div>
            <h3 className="text-xl font-bold text-center mb-2">{selectedItem.name}</h3>
            <p className="text-gray-400 text-center mb-4">{selectedItem.description}</p>
            <div className="mb-6">
              <p className="text-gray-400 text-sm">구매 가격</p>
              <p className="text-2xl font-bold text-neon-yellow">💰 {selectedItem.price}</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleBuy(selectedItem)}
                className="flex-1 button-primary"
              >
                구매 확인
              </button>
              <button
                onClick={() => setSelectedItem(null)}
                className="flex-1 button-secondary"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inventory */}
      {inventory.length > 0 && (
        <div className="card bg-blue-900/20 border-blue-600/50">
          <h3 className="text-lg font-bold text-neon-pink mb-3">📦 보유 아이템 ({inventory.length})</h3>
          <div className="flex flex-wrap gap-2">
            {inventory.map((item, idx) => (
              <div key={idx} className="px-3 py-1 bg-dark-border rounded text-sm">
                {item.icon} {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
