import React, { useState } from 'react';
import { Play, Gamepad2 } from 'lucide-react';

const RaidWaitingRoom = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('yunsul');
  const [waitingForRaid, setWaitingForRaid] = useState(false);

  const characters = [
    {
      id: 'yunsul',
      name: '윤슬',
      level: 15,
      class: '검사',
      power: 2450,
      image: '⚔️',
    },
    {
      id: 'gunner',
      name: '거너',
      level: 2,
      class: '총사',
      power: 180,
      image: '🔫',
    },
  ];

  const selectedChar = characters.find((c) => c.id === selectedCharacter);

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-neon-pink mb-2">⚡ 레이드 대기방</h1>
        <p className="text-gray-400">캐릭터를 선택하고 레이드에 입장하세요</p>
      </div>

      {/* Character Selection */}
      <div className="grid md:grid-cols-2 gap-6">
        {characters.map((char) => (
          <div
            key={char.id}
            onClick={() => setSelectedCharacter(char.id)}
            className={`card cursor-pointer transform transition-all hover:scale-105 ${
              selectedCharacter === char.id ? 'neon-border neon-shadow' : ''
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="text-6xl">{char.image}</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-neon-yellow">{char.name}</h2>
                <p className="text-gray-400">{char.class} • Lv.{char.level}</p>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">전투력</p>
                  <p className="text-xl font-bold text-neon-pink">{char.power.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Character Info */}
      {selectedChar && (
        <div className="card neon-border neon-shadow">
          <h3 className="text-xl font-bold text-neon-pink mb-4">선택된 캐릭터: {selectedChar.name}</h3>
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div>
              <p className="text-gray-500 text-sm">레벨</p>
              <p className="text-2xl font-bold text-neon-yellow">{selectedChar.level}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">직업</p>
              <p className="text-2xl font-bold text-neon-yellow">{selectedChar.class}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">전투력</p>
              <p className="text-2xl font-bold text-neon-yellow">{selectedChar.power.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">상태</p>
              <p className="text-2xl font-bold text-green-400">준비완료</p>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setWaitingForRaid(!waitingForRaid)}
          className={`flex items-center justify-center space-x-2 flex-1 px-6 py-4 rounded-lg font-bold text-lg transition-all ${
            waitingForRaid
              ? 'bg-red-600 hover:bg-red-700'
              : 'button-primary'
          }`}
        >
          <Play size={24} />
          <span>{waitingForRaid ? '대기 취소' : '레이드 입장 대기'}</span>
        </button>
        <button className="flex items-center justify-center space-x-2 flex-1 button-secondary px-6 py-4 rounded-lg font-bold text-lg">
          <Gamepad2 size={24} />
          <span>미니게임 시작</span>
        </button>
      </div>

      {waitingForRaid && (
        <div className="card bg-green-900/20 border-green-600/50">
          <p className="text-green-400 font-bold text-center">🎮 {selectedChar.name}으로 레이드 대기 중...</p>
        </div>
      )}
    </div>
  );
};

export default RaidWaitingRoom;
