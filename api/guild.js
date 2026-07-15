export default function handler(req, res) {
  if (req.method === 'GET') {
    // GET /api/guild - 길드 정보 조회
    const guildInfo = {
      id: 'guild_001',
      name: '전설의 검사단',
      level: 8,
      members: 45,
      maxMembers: 50,
      power: 125000,
      gold: 50000,
      buffs: [
        { id: 1, name: 'ATK 강화 I', level: 2, maxLevel: 5 },
        { id: 2, name: 'DEF 강화 I', level: 1, maxLevel: 5 },
        { id: 3, name: 'HP 강화 I', level: 3, maxLevel: 5 },
        { id: 4, name: 'EXP 부스트', level: 1, maxLevel: 3 },
      ],
    };
    res.status(200).json(guildInfo);
  } else if (req.method === 'POST') {
    // POST /api/guild - 길드 버프 업그레이드
    const { buffId } = req.body;
    res.status(200).json({ success: true, message: `Buff ${buffId} upgraded` });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
