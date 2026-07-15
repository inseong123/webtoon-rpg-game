import React, { useState } from 'react';
import { Trophy, Medal } from 'lucide-react';

const Leaderboard = () => {
  const [selectedClass, setSelectedClass] = useState('all');

  const mockLeaderboard = [
    { rank: 1, name: '윤슬', class: '검사', level: 50, power: 50000, icon: '⚔️' },
    { rank: 2, name: '거너', class: '총사', level: 48, power: 48500, icon: '🔫' },
    { rank: 3, name: '마법사', class: '마법사', level: 47, power: 47200, icon: '🔮' },
    { rank: 4, name: '성기사', class: '성기사', level: 46, power: 46800, icon: '✨' },
    { rank: 5, name: '암살자', class: '암살자', level: 45, power: 45600, icon: '🗡️' },
    { rank: 6, name: '궁수', class: '궁수', level: 44, power: 44200, icon: '🏹' },
    { rank: 7, name: '마검사', class: '검사', level: 43, power: 43500, icon: '⚡' },
    { rank: 8, name: '신사', class: '신사', level: 42, power: 42100, icon: '🎩' },
    { rank: 9, name: '수도사', class: '성기사', level: 41, power: 41800, icon: '🙏' },
    { rank: 10, name: '요정', class: '마법사', level: 40, power: 40500, icon: '🧚' },
  ];

  const classes = ['all', '검사', '총사', '마법사', '성기사', '암살자', '궁수'];

  const filteredLeaderboard =
    selectedClass === 'all'
      ? mockLeaderboard
      : mockLeaderboard.filter((player) => player.class === selectedClass);

  const getRankColor = (rank) => {
    if (rank === 1) return 'text-yellow-400';
    if (rank === 2) return 'text-gray-300';
    if (rank === 3) return 'text-orange-400';
    return 'text-gray-400';
  };

  const getRankBadge = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-neon-pink mb-2 flex items-center space-x-3">
          <Trophy size={40} />
          <span>명예의 전당</span>
        </h1>
        <p className="text-gray-400">최강 모험가들의 랭킹</p>
      </div>

      {/* Class Filter */}
      <div className="flex flex-wrap gap-2">
        {classes.map((cls) => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            className={`px-4 py-2 rounded-lg font-bold transition-all ${
              selectedClass === cls ? 'button-primary' : 'button-secondary'
            }`}
          >
            {cls === 'all' ? '전체' : cls}
          </button>
        ))}
      </div>

      {/* Top 3 Podium */}
      {filteredLeaderboard.slice(0, 3).length > 0 && (
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[1, 0, 2]
            .filter((idx) => filteredLeaderboard[idx])
            .map((idx) => {
              const player = filteredLeaderboard[idx];
              return (
                <div
                  key={player.rank}
                  className={`card text-center border-2 transition-all ${
                    idx === 0
                      ? 'neon-border neon-shadow bg-yellow-900/20 md:row-span-1 md:scale-110'
                      : 'border-dark-border'
                  }`}
                >
                  <div className="text-5xl mb-2">{player.icon}</div>
                  <p className={`text-3xl font-bold mb-1 ${getRankColor(player.rank)}`}>
                    {getRankBadge(player.rank)}
                  </p>
                  <h3 className="text-xl font-bold text-neon-yellow">{player.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{player.class}</p>
                  <div className="bg-dark-border/30 rounded p-2">
                    <p className="text-xs text-gray-500">전투력</p>
                    <p className="text-lg font-bold text-neon-pink">
                      {player.power.toLocaleString()}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      )}

      {/* Full Leaderboard Table */}
      <div className="card overflow-hidden">
        <h3 className="text-lg font-bold text-neon-pink mb-4">TOP 10</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-dark-border">
              <tr className="text-gray-400">
                <th className="text-left py-3 px-4">순위</th>
                <th className="text-left py-3 px-4">이름</th>
                <th className="text-left py-3 px-4">직업</th>
                <th className="text-left py-3 px-4">레벨</th>
                <th className="text-right py-3 px-4">전투력</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeaderboard.map((player, idx) => (
                <tr
                  key={player.rank}
                  className={`border-b border-dark-border/50 hover:bg-dark-border/30 transition-all ${
                    player.rank <= 3 ? 'bg-dark-border/10' : ''
                  }`}
                >
                  <td className={`py-3 px-4 font-bold ${getRankColor(player.rank)}`}>
                    {getRankBadge(player.rank)}
                  </td>
                  <td className="py-3 px-4 font-bold flex items-center space-x-2">
                    <span>{player.icon}</span>
                    <span>{player.name}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-400">{player.class}</td>
                  <td className="py-3 px-4 text-neon-yellow font-bold">{player.level}</td>
                  <td className="py-3 px-4 text-right text-neon-pink font-bold">
                    {player.power.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
