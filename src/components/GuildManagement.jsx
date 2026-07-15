import React, { useState } from 'react';
import { Zap } from 'lucide-react';

const GuildManagement = () => {
  const [guildInfo, setGuildInfo] = useState({
    name: '전설의 검사단',
    level: 8,
    members: 45,
    maxMembers: 50,
    power: 125000,
    gold: 50000,
  });

  const [buffs, setBuffs] = useState([
    { id: 1, name: 'ATK 강화 I', level: 2, maxLevel: 5, cost: 1000, icon: '⚔️' },
    { id: 2, name: 'DEF 강화 I', level: 1, maxLevel: 5, cost: 1000, icon: '🛡️' },
    { id: 3, name: 'HP 강화 I', level: 3, maxLevel: 5, cost: 1500, icon: '❤️' },
    { id: 4, name: 'EXP 부스트', level: 1, maxLevel: 3, cost: 2000, icon: '⭐' },
  ]);

  const upgradeBuffLevel = (buffId) => {
    const buff = buffs.find((b) => b.id === buffId);
    if (buff && buff.level < buff.maxLevel && guildInfo.gold >= buff.cost) {
      setBuffs(
        buffs.map((b) =>
          b.id === buffId ? { ...b, level: b.level + 1 } : b
        )
      );
      setGuildInfo({
        ...guildInfo,
        gold: guildInfo.gold - buff.cost,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-neon-pink mb-2">👥 길드 관리</h1>
        <p className="text-gray-400">길드의 정보를 확인하고 버프를 강화하세요</p>
      </div>

      {/* Guild Info */}
      <div className="card neon-border neon-shadow bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <h2 className="text-2xl font-bold text-neon-yellow mb-4">{guildInfo.name}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-500 text-sm">길드 레벨</p>
            <p className="text-3xl font-bold text-neon-pink">{guildInfo.level}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">인원 수</p>
            <p className="text-lg font-bold text-neon-yellow">
              {guildInfo.members} / {guildInfo.maxMembers}
            </p>
            <div className="progress-bar mt-2">
              <div
                className="progress-fill"
                style={{
                  width: `${(guildInfo.members / guildInfo.maxMembers) * 100}%`,
                }}
              />
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-sm">총 전투력</p>
            <p className="text-3xl font-bold text-neon-pink"
            >{guildInfo.power.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Gold Display */}
      <div className="card bg-gradient-to-r from-yellow-900/30 to-yellow-700/30 border-neon-yellow/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">길드 금고</p>
            <p className="text-3xl font-bold text-neon-yellow">💰 {guildInfo.gold.toLocaleString()}</p>
          </div>
          <div className="text-5xl">🏦</div>
        </div>
      </div>

      {/* Buffs */}
      <div>
        <h3 className="text-xl font-bold text-neon-pink mb-4 flex items-center space-x-2">
          <Zap size={24} />
          <span>길드 버프 강화</span>
        </h3>
        <div className="space-y-3">
          {buffs.map((buff) => (
            <div key={buff.id} className="card hover:neon-border transition-all">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl">{buff.icon}</span>
                    <div>
                      <p className="font-bold text-white">{buff.name}</p>
                      <p className="text-sm text-gray-400">
                        Lv. {buff.level} / {buff.maxLevel}
                      </p>
                    </div>
                  </div>
                  <div className="progress-bar mt-2">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${(buff.level / buff.maxLevel) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-sm text-gray-400 mb-2">강화 비용</p>
                  <button
                    onClick={() => upgradeBuffLevel(buff.id)}
                    disabled={buff.level >= buff.maxLevel || guildInfo.gold < buff.cost}
                    className={`px-4 py-2 rounded-lg font-bold ${
                      buff.level >= buff.maxLevel
                        ? 'bg-gray-600 cursor-not-allowed opacity-50'
                        : guildInfo.gold >= buff.cost
                        ? 'button-primary'
                        : 'opacity-50 cursor-not-allowed bg-gray-600'
                    }`}
                  >
                    {buff.level >= buff.maxLevel ? '최대' : `💰 ${buff.cost}`}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuildManagement;
