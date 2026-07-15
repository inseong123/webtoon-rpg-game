# 🎮 웹툰 미니 RPG 웹 게임

웹툰 기반의 세련된 RPG UI를 갖춘 미니 웹 게임입니다. React(Vite), Tailwind CSS, Vercel Serverless Functions를 활용하여 구현되었습니다.

## 🚀 주요 기능

### 1. 레이드 대기방 ⚔️
- 캐릭터(윤슬 Lv.15 / 거너 Lv.2) 선택
- 레이드 입장 대기
- 미니게임 참여

### 2. 상점 🏪
- 보유 골드 표시 (시작: 50,000 골드)
- 무기, 방어구, 장신구 필터링
- 아이템 구매 (모달 확인)
- 보유 아이템 관리

### 3. 파견소 🗺️
- 방치형 타이머 (프로그레스 바)
- 초급~전설 등급 지역
- 파견 시작/중단
- 골드 & 경험치 보상

### 4. 길드 관리 👥
- 길드 정보 (레벨, 전투력, 인원수 바)
- 길드 버프 강화 시스템
- 길드 금고 (골드 소비)

### 5. 명예의 전당 🏆
- TOP 10 유저 랭킹
- 직업별 필터 (검사, 총사, 마법사 등)
- 순위별 메달 표시
- 전투력 기준 정렬

## 🛠 기술 스택

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + 커스텀 RPG 테마
- **Backend**: Vercel Serverless Functions (Node.js)
- **UI Icons**: Lucide React
- **State Management**: React Hooks (useState)

## 📁 프로젝트 구조

```
webtoon-rpg-game/
├── api/
│   ├── user.js          # 유저 정보 API
│   ├── guild.js         # 길드 정보 API
│   └── shop.js          # 상점 아이템 API
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # 사이드바 네비게이션
│   │   ├── RaidWaitingRoom.jsx     # 레이드 대기방
│   │   ├── Shop.jsx                # 상점 (필터, 구매)
│   │   ├── ErrandHouse.jsx         # 파견소 (타이머)
│   │   ├── GuildManagement.jsx     # 길드 관리
│   │   └── Leaderboard.jsx         # 명예의 전당 (랭킹)
│   ├── App.jsx          # 메인 앱 (탭 네비게이션)
│   ├── main.jsx         # React 진입점
│   └── index.css        # 글로벌 Tailwind + RPG 스타일
├── index.html           # HTML 진입점
├── package.json         # 의존성 설정
├── vite.config.js       # Vite 설정
├── tailwind.config.js   # Tailwind 설정
├── postcss.config.js    # PostCSS 설정
└── vercel.json          # Vercel 배포 설정
```

## 🎨 디자인 테마

- **배경색**: 어두운 Slate/Zinc 톤 (`#0f172a`)
- **카드 배경**: 다크 카드 (`#1e293b`)
- **포인트 컬러**:
  - 네온 핑크 (`#FF1493`) - 주요 버튼, 강조
  - 네온 옐로우 (`#FFFF00`) - 텍스트 강조, 수치
- **글래스 효과**: 반투명 카드 배경 + 블러

## 🚀 배포 방법

### 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (프론트엔드 + 백엔드 함수)
npm run dev
```

### Vercel 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

Vercel은 자동으로:
- `/api` 폴더의 파일을 Serverless Functions으로 배포
- `src/` 폴더를 Vite로 빌드하여 정적 파일 배포
- SPA 라우팅 자동 설정

## 🎮 게임플레이

1. **레이드 대기방**에서 캐릭터 선택
2. **상점**에서 무기/방어구 구매 (골드 소비)
3. **파절소**에 캐릭터 파견 (타이머 기반)
4. **길드**의 버프 강화 (금고 소비)
5. **명예의 전당**에서 순위 확인

## 📊 상태 관리

모든 상태는 React Hooks(useState)로 관리되며, 각 컴포넌트에서 독립적으로 처리됩니다.

### 주요 상태 예시

```jsx
// Shop.jsx
const [gold, setGold] = useState(50000);
const [inventory, setInventory] = useState([]);

// ErrandHouse.jsx
const [activeErrand, setActiveErrand] = useState(null);
const [timeLeft, setTimeLeft] = useState({});

// GuildManagement.jsx
const [buffs, setBuffs] = useState([...]);
```

## 🔧 커스터마이징

### 테마 색상 변경

`tailwind.config.js`에서 색상 커스터마이징:

```javascript
colors: {
  'neon-pink': '#FF1493',
  'neon-yellow': '#FFFF00',
  'dark-bg': '#0f172a',
  'dark-card': '#1e293b',
  'dark-border': '#334155',
}
```

### 캐릭터/아이템 추가

각 컴포넌트의 데이터 배열을 수정하여 새로운 캐릭터나 아이템 추가 가능합니다.

## 📝 라이선스

MIT

## 👨‍💻 작가

웹툰 RPG 게임 개발팀

---

**즐거운 게임을 되세요! 🎮✨**
