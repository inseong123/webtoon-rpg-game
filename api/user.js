export default function handler(req, res) {
  if (req.method === 'GET') {
    // GET /api/user - 유저 정보 조회
    const userInfo = {
      id: 'user_001',
      name: '모험가',
      level: 15,
      gold: 50000,
      exp: 5000,
      characters: [
        {
          id: 'yunsul',
          name: '윤슬',
          level: 15,
          class: '검사',
          power: 2450,
        },
        {
          id: 'gunner',
          name: '거너',
          level: 2,
          class: '총사',
          power: 180,
        },
      ],
    };
    res.status(200).json(userInfo);
  } else if (req.method === 'POST') {
    // POST /api/user - 유저 정보 업데이트
    const { action, data } = req.body;
    if (action === 'add_gold') {
      res.status(200).json({ success: true, message: '골드 획득' });
    }
    res.status(400).json({ error: 'Invalid action' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
