import React, { useState, useEffect } from 'react';
import { MapPin, Play, Square } from 'lucide-react';

const ErrandHouse = () => {
  const [activeErrand, setActiveErrand] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});

  const errands = [
    {
      id: 1,
      name: '초급 숲 탐험',
      duration: 120,
      icon: '🌲',
      reward: { gold: 500, exp: 100 },
    },
    {
      id: 2,
      name: '중급 산 탐험',
      duration: 300,
      icon: '⛰️',
      reward: { gold: 1500, exp: 300 },
    },
    {
      id: 3,
      name: '상급 동굴 탐험',
      duration: 600,
      icon: '🕳️',
      reward: { gold: 3000, exp: 600 },
    },
    {
      id: 4,
      name: '전설 용의 둥지',
      duration: 1200,
      icon: '🐉',
      reward: { gold: 10000, exp: 2000 },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeErrand) {
        setTimeLeft((prev) => {
          const remaining = prev[activeErrand] - 1;
          if (remaining <= 0) {
            setActiveErrand(null);
            return { ...prev, [activeErrand]: 0 };
          }
          return { ...prev, [activeErrand]: remaining };
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [activeErrand]);

  const startErrand = (errandId) => {
    setActiveErrand(errandId);
    setTimeLeft((prev) => ({ ...prev, [errandId]: errands.find((e) => e.id === errandId).duration }));
  };

  const stopErrand = () => {
    setActiveErrand(null);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgress = (errandId) => {
    const errand = errands.find((e) => e.id === errandId);
    const elapsed = errand.duration - (timeLeft[errandId] || 0);
    return (elapsed / errand.duration) * 100;
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-neon-pink mb-2">🗺️ 파견소</h1>
        <p className="text-gray-400">캐릭터를 파견하여 골드와 경험치를 얻으세요</p>
      </div>

      {/* Errands Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {errands.map((errand) => {
          const isActive = activeErrand === errand.id;
          const remaining = timeLeft[errand.id] || 0;

          return (
            <div key={errand.id} className={`card transition-all ${
              isActive ? 'neon-border neon-shadow bg-pink-900/10' : ''
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-4xl">{errand.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-neon-yellow">{errand.name}</h3>
                    <p className="text-gray-400 text-sm">{(errand.duration / 60).toFixed(0)}분 소요</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              {isActive && (
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-400">진행도</p>
                    <p className="text-sm font-bold text-neon-pink">{formatTime(remaining)}</p>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${getProgress(errand.id)}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Rewards */}
              <div className="grid grid-cols-2 gap-2 mb-4 bg-dark-border/30 p-3 rounded">
                <div>
                  <p className="text-xs text-gray-500">골드 보상</p>
                  <p className="font-bold text-neon-yellow">💰 {errand.reward.gold}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">경험치 보상</p>
                  <p className="font-bold text-neon-yellow">⭐ {errand.reward.exp}</p>
                </div>
              </div>

              {/* Action Button */}
              {!isActive ? (
                <button
                  onClick={() => startErrand(errand.id)}
                  className="w-full button-primary flex items-center justify-center space-x-2"
                >
                  <Play size={18} />
                  <span>파견 시작</span>
                </button>
              ) : (
                <button
                  onClick={stopErrand}
                  className="w-full button-secondary flex items-center justify-center space-x-2"
                >
                  <Square size={18} />
                  <span>파견 중단</span>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ErrandHouse;
