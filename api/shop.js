export default function handler(req, res) {
  if (req.method === 'GET') {
    // GET /api/shop - 상점 아이템 조회
    const items = [
      {
        id: 1,
        name: '강철 검',
        type: 'weapon',
        price: 1500,
        icon: '⚔️',
      },
      {
        id: 2,
        name: '용의 검',
        type: 'weapon',
        price: 5000,
        icon: '🗡️',
      },
      {
        id: 3,
        name: '철갑옷',
        type: 'armor',
        price: 2000,
        icon: '🛡️',
      },
      {
        id: 4,
        name: '드래곤 갑옷',
        type: 'armor',
        price: 7000,
        icon: '🐉',
      },
      {
        id: 5,
        name: '황금 반지',
        type: 'accessory',
        price: 3000,
        icon: '💍',
      },
      {
        id: 6,
        name: '영혼 목걸이',
        type: 'accessory',
        price: 6000,
        icon: '📿',
      },
    ];
    res.status(200).json(items);
  } else if (req.method === 'POST') {
    // POST /api/shop - 아이템 구매
    const { itemId } = req.body;
    res.status(200).json({ success: true, message: `Item ${itemId} purchased` });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
