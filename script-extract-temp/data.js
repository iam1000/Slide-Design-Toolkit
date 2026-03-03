const categories = [
  {
    id: 'manufacturing', name: '제조/산업', emoji: '🏭',
    industries: ['반도체', '자동차', '조선', '철강']
  },
  {
    id: 'healthcare', name: '의료/헬스케어', emoji: '🏥',
    industries: ['병원', '한의원', '약국', '의료기기']
  },
  {
    id: 'education', name: '교육', emoji: '🎓',
    industries: ['학원', '유치원', '대학', '직업훈련']
  },
  {
    id: 'finance', name: '금융/보험', emoji: '💰',
    industries: ['은행', '증권', '보험', '핀테크']
  },
  {
    id: 'retail', name: '유통/소매', emoji: '🛍️',
    industries: ['편의점', '백화점', '온라인쇼핑', '프랜차이즈']
  },
  {
    id: 'food', name: '식품/외식', emoji: '🍽️',
    industries: ['식당', '카페', '급식', '식품제조']
  },
  {
    id: 'construction', name: '건설/부동산', emoji: '🏗️',
    industries: ['건설사', '공인중개사', '인테리어']
  },
  {
    id: 'it', name: 'IT/스타트업', emoji: '💻',
    industries: ['소프트웨어', '앱개발', 'AI', '게임']
  },
  {
    id: 'fashion', name: '패션/뷰티', emoji: '👗',
    industries: ['의류', '화장품', '미용실', '네일샵']
  },
  {
    id: 'agriculture', name: '농업/수산업', emoji: '🌾',
    industries: ['농협', '스마트팜', '수산시장']
  },
  {
    id: 'public', name: '공공/정부', emoji: '🏛️',
    industries: ['지자체', '공기업', '복지관']
  },
  {
    id: 'tourism', name: '관광/여행', emoji: '✈️',
    industries: ['여행사', '호텔', '관광지', '항공']
  }
];

// Prompt templates: 7 designs per industry
// Each design has: name, type (design style), colors[], prompt text

// ── 반도체 전용 7개 디자인 프롬프트 (반도체 특화 맞춤형) ──────
const SEMICONDUCTOR_PROMPTS = [
  {
    name: '첨단 블루프린트',
    type: 'High-Tech Circuit Blueprint',
    colors: ['#0a0e1a', '#00d4ff', '#0052cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(0,82,204,0.08))',
    numBg: 'rgba(0,212,255,0.12)', numColor: '#00d4ff',
    prompt: `[NotebookLM Slide Design Guide]

Role : 반도체 산업 기술 발표 전문 슬라이드 디자이너
Industry : 반도체
Type : 첨단 블루프린트 — 회로도 감성의 HUD 스타일 기술 프레젠테이션

[Color Guide]
Background : #0a0e1a (딥 테크 블랙) / 카드 배경 #0f1624
Text Color : #e8f4ff (아이스 화이트) / #8ab8d4 (서브 블루그레이)
Accent : #00d4ff (사이언 네온) / #0052cc (딥 블루) / #7c3aed (퍼플 포인트)
Font : JetBrains Mono (수치·코드 강조) / Noto Sans KR (본문)

[Tone & Manner]
나노 단위 정밀함과 반도체 공정의 복잡성을 시각화하는 전문가 톤. 엔지니어와 투자자 모두를 위한 이중 커뮤니케이션 설계. 데이터와 수치가 비주얼을 지배하는 기술 중심 발표. 삼성전자·TSMC 기술 컨퍼런스 발표 수준의 완성도.

[Image Principles]
웨이퍼·회로판 클로즈업에 사이언 컬러 오버레이 처리. 회로 패턴 배경 그래픽 레이어 활용. 기술 스펙은 코드 블록 형태로 표현. 전자현미경 반도체 나노 구조 이미지 배치.

[Design Characteristics]
• 회로기판 라인 패턴 배경 (얇은 사이언 격자선)
• 네온 사이언 글로우 효과 (box-shadow: 0 0 20px #00d4ff)
• JetBrains Mono 폰트로 nm 공정·수치·코드 강조
• HUD 헤드업 디스플레이 스타일 정보 패널 UI
• 좌상단 좌표계 · 우하단 스케일 바 포인트 디테일

[Layout Guide]
- Title Slide : 다크 배경 + 회로 패턴 오버레이 + 사이언 네온 대형 제품명/공정명 타이포
- Spec Slide : HUD 스타일 공정 스펙 패널 (nm 공정·트랜지스터 집적도·소비전력 수치 대형 표기)
- Comparison Slide : 5nm vs 3nm vs 2nm GAA 세대별 성능 수치 나란히 비교
- CTA Slide : 사이언 글로우 CTA 버튼 + 기술 협력·파트너십 문의 다크 배경
- Tone : Precision / Innovative / Technical
- Slide count : 7 pages
- Font size contrast : 제목 48pt 모노스페이스 / 핵심 수치 72pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '클린 IR 화이트',
    type: 'Investor Relations Clean White',
    colors: ['#ffffff', '#1a3a5c', '#0071e3'],
    cardBg: 'linear-gradient(135deg, #e8f2ff, #f0f7ff)',
    numBg: 'rgba(0,113,227,0.10)', numColor: '#0071e3',
    prompt: `[NotebookLM Slide Design Guide]

Role : 반도체 기업 IR·기관투자자 설명회 전문 슬라이드 디자이너
Industry : 반도체
Type : 클린 IR 화이트 — 기관투자자·애널리스트를 위한 고신뢰 반도체 IR 자료

[Color Guide]
Background : #ffffff / 강조 섹션 배경 #f0f6ff (라이트 블루 틴트)
Text Color : #0a1628 (딥 네이비) / #4a6080 (블루그레이)
Accent : #0071e3 (인텔리전트 블루) / #1a3a5c (딥 네이비 강조)
Font : Helvetica Neue (제목·수치) / Noto Sans KR (본문)

[Tone & Manner]
신뢰와 정밀성을 최우선으로 하는 글로벌 반도체 기업 IR 톤. 삼성전자·SK하이닉스 수준의 권위 있는 공식 투자자 자료 감성. 재무 데이터와 기술 팩트 중심 커뮤니케이션. 과도한 장식 없이 숫자와 논리로 설득.

[Image Principles]
클린룸·팹(Fab) 제조 환경에 블루 컬러 오버레이 처리. 기술 아키텍처 도식 다이어그램 활용. 화이트 배경 위 블루 라인 아트 인포그래픽. 고해상도 300mm 웨이퍼 제품 사진.

[Design Characteristics]
• 화이트 기반 극도의 여백 (콘텐츠 밀도 50% 이하 유지)
• 블루 액센트 강조 라인 · 카드 상단 액센트 바
• 정밀한 반도체 재무·기술 데이터 차트 (매출·OP·시장 점유율)
• 슬라이드 하단 회사명·날짜·페이지 번호 코퍼레이트 푸터
• 표 헤더 행 블루 배경 + 화이트 텍스트 처리

[Layout Guide]
- Title Slide : 화이트 배경 + 딥 네이비 로고 + 블루 하단 강조 바 + 발표 날짜·자료 제목
- Spec Slide : 블루 헤더 테이블 — 공정 세대별 성능·전력·수율 핵심 지표 비교
- Comparison Slide : 좌우 대칭 2nm·3nm·5nm 기술 세대 비교 다이어그램
- CTA Slide : 딥 네이비 배경 + 화이트 CTA 메시지 + IR 담당자 연락처
- Tone : Authoritative / Data-driven / Trustworthy
- Slide count : 7 pages
- Font size contrast : 제목 40pt / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '사이버펑크 나노',
    type: 'Cyberpunk Nano Vision',
    colors: ['#0d001a', '#ff00ff', '#00ffaa'],
    cardBg: 'linear-gradient(135deg, rgba(255,0,255,0.08), rgba(0,255,170,0.06))',
    numBg: 'rgba(255,0,255,0.12)', numColor: '#cc00cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 반도체 차세대 기술 비전 컨퍼런스 키노트 슬라이드 디자이너
Industry : 반도체
Type : 사이버펑크 나노 — 2030 미래 반도체 기술 비전 컨퍼런스 키노트

[Color Guide]
Background : #0d001a (딥 퍼플 블랙)
Text Color : #f0e6ff (라이트 라벤더) / #b388ff (소프트 퍼플)
Accent : #ff00ff (마젠타 네온) / #00ffaa (민트 네온) / #7c00ff (딥 퍼플)
Font : Orbitron (제목·강조 수치) / Noto Sans KR (본문)

[Tone & Manner]
2030년 이후를 바라보는 혁신 기술 비전 톤. GAA 트랜지스터·2nm 공정·AI 반도체 혁명적 가능성을 드라마틱하게 전달. CES·Hot Chips·ISSCC 키노트 에너지. 청중이 반도체의 미래를 직접 '경험'하는 몰입형 발표.

[Image Principles]
나노 구조 전자현미경 이미지에 마젠타 컬러 오버레이. 추상적 3D 반도체 구조 일러스트 활용. 헥사곤 육각 격자 패턴 배경 레이어. 마젠타·민트 이중 네온 글로우 효과.

[Design Characteristics]
• 마젠타·민트 이중 네온 글로우 (box-shadow 중첩 레이어)
• 스캔라인 노이즈 오버레이 (opacity 5~10% 미묘하게 처리)
• 육각형 헥사곤 격자 패턴 배경 (반도체 결정 구조 모티프)
• 발광 타임라인·프로그레스 바 (기술 로드맵 표현)
• 제목에 글리치(glitch) 레이어 효과 시각적 암시

[Layout Guide]
- Title Slide : 풀블랙 배경 + 마젠타 글로우 대형 제품명 + 헥사곤 패턴 오버레이
- Spec Slide : 네온 테두리 스펙 카드 3개 수평 배열 (GAA 구조·EUV 노광·HBM4 메모리)
- Comparison Slide : 현재 핀펫 기술 vs 2030 나노시트 GAA 기술 네온 대비
- CTA Slide : 마젠타 네온 버튼 + "반도체의 한계를 다시 씁니다" 카피
- Tone : Visionary / Disruptive / Futuristic
- Slide count : 7 pages
- Font size contrast : 제목 52pt 퓨처리스틱 / 핵심 수치 80pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '인더스트리얼 그레이',
    type: 'Industrial Gray B2B Equipment',
    colors: ['#2a2a2a', '#c0c0c0', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, #f4f4f4, #eeeeee)',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 반도체 장비·소재·부품 B2B 영업 프레젠테이션 전문가
Industry : 반도체
Type : 인더스트리얼 그레이 — 반도체 장비 제조 현장 감성의 B2B 기술 영업 자료

[Color Guide]
Background : #f4f4f4 (라이트 그레이) / 강조 섹션 #2a2a2a (차콜 다크)
Text Color : #1a1a1a (차콜 블랙) / #555555 (미디엄 그레이)
Accent : #ff6b00 (인더스트리얼 오렌지) / #c0c0c0 (스틸 실버)
Font : Roboto Condensed (제목·스펙) / Noto Sans KR (본문)

[Tone & Manner]
현장감 있고 실용적인 반도체 장비 B2B 영업 톤. 노광기·식각기·CVD 장비의 처리량·정확도·MTBF 성능과 TCO·ROI를 명확하게 제시. 구매 결정권자(CPO·CTO·구매팀)를 향한 신뢰와 효율성 집중 강조.

[Image Principles]
반도체 노광·식각·CMP·CVD 장비 실제 제품 사진. 클린룸 Class 1 제조 현장 이미지. 기술 도면·블루프린트 스타일 다이어그램. 오렌지 포인트 강조 배지·라벨 활용.

[Design Characteristics]
• 메탈릭 실버 텍스처 헤더 요소 (장비 소재감 표현)
• 오렌지 강조 배지·태그·체크마크 시스템
• 산업용 스펙 체크리스트 테이블 (오렌지 헤더행)
• 굵은 수평 구분선으로 섹션 명확 분리
• 처리량·수율·MTBF 핵심 수치 대형 모노 표시

[Layout Guide]
- Title Slide : 그레이 배경 + 장비 제품 사진 + 오렌지 하단 강조 바
- Spec Slide : 장비 핵심 스펙 테이블 (처리량 wph·정렬 정확도·가동률 수치)
- Comparison Slide : 자사 장비 vs 경쟁사(ASML·Lam·Applied) 스펙 비교 표
- CTA Slide : 오렌지 배경 + 화이트 CTA + 납기·설치·보증 조건 정보
- Tone : Reliable / Technical / ROI-focused
- Slide count : 7 pages
- Font size contrast : 제목 44pt 컨덴스드 볼드 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 70단어 (스펙 수치 포함)

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '글로벌 시장 전략',
    type: 'Global Market Expansion Strategy',
    colors: ['#001233', '#ffd60a', '#4361ee'],
    cardBg: 'linear-gradient(135deg, rgba(255,214,10,0.08), rgba(0,18,51,0.05))',
    numBg: 'rgba(255,214,10,0.12)', numColor: '#8a7200',
    prompt: `[NotebookLM Slide Design Guide]

Role : 반도체 글로벌 시장 전략 발표 전문 슬라이드 디자이너
Industry : 반도체
Type : 글로벌 시장 전략 — 세계 반도체 패권을 겨냥한 전략 발표 프리미엄 자료

[Color Guide]
Background : #001233 (딥 오션 네이비)
Text Color : #ffffff (화이트) / #a8c8e8 (아이스 블루)
Accent : #ffd60a (프레스티지 골드) / #4361ee (브라이트 블루)
Font : Bebas Neue (제목·대형 수치) / Noto Sans KR (본문)

[Tone & Manner]
글로벌 반도체 무대를 향한 전략적·대담한 톤. 삼성·TSMC·인텔·NVIDIA와 어깨를 나란히 하는 K-반도체 위상 표현. HBM 메모리·파운드리·시스템 반도체 수출 확대와 기술 패권 경쟁이 배경. 이사회·전략 발표 수준 자료.

[Image Principles]
세계 지도 기반 반도체 시장·수출 현황 시각화. 글로벌 반도체 공급망(TSMC→Apple→삼성) 다이어그램. 딥 네이비 배경에 골드·블루 글로우 세계지도 오버레이. 국가별·기업별 시장 점유율 히트맵.

[Design Characteristics]
• 딥 네이비 배경에 골드 강조 라인·테두리 디테일
• 세계 지도 배경 아웃라인 그래픽 요소
• 시장 규모(억 달러)·점유율(%) 수치 대형 강조 표시
• 가로 프로그레스 바로 지역별 시장 비중 비교
• Bebas Neue 대담한 전략 메시지 헤드라인 타이포

[Layout Guide]
- Title Slide : 딥 네이비 + 세계지도 아웃라인 오버레이 + 골드 대형 헤드라인
- Spec Slide : 글로벌 반도체 시장 규모·성장률·점유율 파이·바 차트
- Comparison Slide : 지역별(미국·중국·유럽·한국·대만) 시장 경쟁 구도 인포그래픽
- CTA Slide : 골드 버튼 + 네이비 배경 + 글로벌 파트너십·투자 CTA
- Tone : Global / Strategic / Ambitious
- Slide count : 7 pages
- Font size contrast : 제목 56pt 볼드 / 소제목 22pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '데이터 인포그래픽',
    type: 'Data Analytics Research Report',
    colors: ['#f8f9fa', '#2c3e50', '#3498db'],
    cardBg: 'linear-gradient(135deg, #f0f8ff, #e8f4fd)',
    numBg: 'rgba(52,152,219,0.12)', numColor: '#2470a0',
    prompt: `[NotebookLM Slide Design Guide]

Role : 반도체 산업 분석 리포트 인포그래픽 전문 슬라이드 디자이너
Industry : 반도체
Type : 데이터 인포그래픽 — 수치·시각화 중심 맥킨지·IDC 스타일 산업 분석 리포트

[Color Guide]
Background : #f8f9fa (라이트 그레이 화이트)
Text Color : #2c3e50 (슬레이트 다크) / #7f8c8d (미디엄 그레이)
Accent : #3498db (클리어 블루) / #e74c3c (레드 경고·감소) / #2ecc71 (그린 성장·증가)
Font : Source Sans Pro (제목·수치) / Noto Sans KR (본문)

[Tone & Manner]
분석적·객관적 산업 리서치 리포트 톤. 반도체 시장 규모·성장률·공급망 구조·기술 트렌드(HBM·GAA·CoWoS)를 명확한 데이터 시각화로 전달. 맥킨지·가트너·IDC·SEMI 리포트 수준 권위.

[Image Principles]
데이터 시각화가 절대적 주인공. 아이콘 기반 인포그래픽 우선 활용. 라인·바·파이·도넛 차트 다수 배치. 반도체 공급망·가치사슬 플로우차트 포함.

[Design Characteristics]
• 차트·그래프 중심 데이터 밀도 높은 레이아웃
• 블루·레드·그린 컬러 코딩 범례 시스템 (성장/정체/감소)
• 히트맵 스타일 경쟁사·제품 비교 테이블
• 반도체 공급망·수직 계열화 플로우 다이어그램
• 각주·출처(SEMI·가트너·IDC) 명시 하단 섹션

[Layout Guide]
- Title Slide : 화이트 배경 + 시장 규모 차트 썸네일 콜라주 + 분석 리포트 레이블
- Spec Slide : KPI 대시보드 (전체 반도체 시장 규모·DRAM·NAND·파운드리 4개 수치 카드)
- Comparison Slide : 반도체 시장 5년 시계열 트렌드 라인 차트 (2020~2025)
- CTA Slide : 분석 결론 요약 + 투자·사업 권고사항 + 출처·면책조항 하단
- Tone : Analytical / Objective / Research-grade
- Slide count : 7 pages
- Font size contrast : 제목 36pt / 핵심 수치 64pt 볼드 / 본문 13pt
- Text per slide : 최대 80단어 (데이터 레이블·단위 포함)

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '미니멀 이스트',
    type: 'Minimal East Premium Brand',
    colors: ['#fafafa', '#1a1a1a', '#c41e3a'],
    cardBg: 'linear-gradient(135deg, #fff5f7, #fff0f2)',
    numBg: 'rgba(196,30,58,0.10)', numColor: '#c41e3a',
    prompt: `[NotebookLM Slide Design Guide]

Role : 반도체 기업 프리미엄 브랜드 아이덴티티 슬라이드 크리에이터
Industry : 반도체
Type : 미니멀 이스트 — 동양적 절제미와 현대 반도체 테크가 만나는 K-반도체 프리미엄 브랜딩

[Color Guide]
Background : #fafafa (오프 화이트)
Text Color : #1a1a1a (제트 블랙) / #4a4a4a (차콜)
Accent : #c41e3a (코리안 레드) / #1a1a1a (블랙)
Font : Noto Serif KR (제목·브랜드 메시지) / Noto Sans KR (본문)

[Tone & Manner]
동양적 절제미와 현대 반도체 테크 감성의 완벽한 융합. 삼성전자·SK하이닉스 최상위 브랜드 아이덴티티 수준. 여백 하나, 선 하나가 존재감을 만드는 디자인 철학. 과도한 장식 일절 없이 압도적 존재감으로 브랜드 가치 전달.

[Image Principles]
극도로 절제된 이미지 사용 (슬라이드당 이미지 1개 원칙). 300mm 반도체 웨이퍼의 추상적 클로즈업. 흑백 처리 후 코리안 레드 포인트 하나만. 동양 여백미 철학 적용한 비대칭 배치.

[Design Characteristics]
• 극도의 여백 원칙 (콘텐츠 30% 이하, 여백 70% 이상 유지)
• 코리안 레드 수평선 하나만으로 섹션 구분
• 한글 대형 타이포그래피가 슬라이드의 주인공
• 음양 대비 교체 (흰 배경 섹션 → 검정 배경 섹션 전환)
• 얇은 1px 구분선 외 일절 장식 금지

[Layout Guide]
- Title Slide : 95% 여백 + 중앙 한 줄 브랜드 메시지 (예: "나노의 경계를 넘다") + 하단 레드 수평선
- Spec Slide : 왼쪽 대형 수치 (예: 2nm / 100억 트랜지스터) + 오른쪽 최소 설명 텍스트
- Comparison Slide : 흰/검정 반반 수직 분할 + 중앙 코리안 레드 세로선 포인트
- CTA Slide : 전체 블랙 배경 + 화이트 한 줄 강렬한 CTA 문장
- Tone : Refined / Minimal / Brand-premium
- Slide count : 7 pages
- Font size contrast : 제목 56pt 세리프 볼드 / 소제목 18pt / 본문 12pt
- Text per slide : 최대 25단어 (여백의 힘으로 임팩트)

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 자동차 전용 7개 디자인 프롬프트 ─────────────────────────
const AUTOMOTIVE_PROMPTS = [
  {
    name: '스피드 다이나믹스',
    type: 'Speed Dynamics Launch',
    colors: ['#0a0a0a', '#ff3b30', '#c0c0c0'],
    cardBg: 'linear-gradient(135deg, rgba(255,59,48,0.08), rgba(20,20,20,0.05))',
    numBg: 'rgba(255,59,48,0.12)', numColor: '#ff3b30',
    prompt: `[NotebookLM Slide Design Guide]

Role : 자동차 브랜드 신차 런칭 이벤트 슬라이드 디자이너
Industry : 자동차
Type : 스피드 다이나믹스 — 모터스포츠 감성의 역동적 신차 발표 키노트

[Color Guide]
Background : #0a0a0a (레이싱 블랙)
Text Color : #ffffff / #cccccc (크롬 실버)
Accent : #ff3b30 (레이싱 레드) / #c0c0c0 (크롬 실버)
Font : Barlow Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
역동적·파워풀한 모터스포츠 감성. 속도·성능·기술력을 시각적으로 체험시키는 프레젠테이션. 신차 런칭 이벤트 키노트 에너지. 청중의 아드레날린을 자극하는 디자인.

[Image Principles]
고속 주행 모션 블러 이미지. 대형 전면·측면 차량 컷. 엔진·기어 클로즈업. 레드 라이트 트레일 효과. 스튜디오 짙은 배경 제품 컷.

[Design Characteristics]
• 사선·다이아고널 레이아웃
• 모션 블러 배경 효과 암시
• 크롬 실버 테두리 디테일
• 타임라인 레이스 트랙 스타일
• 속도계·계기판 UI 모티프

[Layout Guide]
- Title Slide : 풀블랙 배경 + 모션 블러 차 이미지 + 레드 대형 모델명 타이포
- Spec Slide : 계기판 스타일 KPI (0→100km/h·최고속도·마력 대형 수치)
- Comparison Slide : 사선 레이아웃 — 좌우 트림 레벨 나란히 비교
- CTA Slide : 레드 배경 + 화이트 "지금 시승 예약" 단일 CTA
- Tone : Dynamic / Powerful / Thrilling
- Slide count : 7 pages
- Font size contrast : 제목 54pt 컨덴스드 / 핵심 수치 72pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'EV 그린 퓨처',
    type: 'EV Sustainable Vision',
    colors: ['#001a33', '#00d4aa', '#ffffff'],
    cardBg: 'linear-gradient(135deg, rgba(0,212,170,0.08), rgba(0,26,51,0.05))',
    numBg: 'rgba(0,212,170,0.12)', numColor: '#00a882',
    prompt: `[NotebookLM Slide Design Guide]

Role : 전기차(EV) 브랜드 비전·지속가능성 커뮤니케이션 전문가
Industry : 자동차
Type : EV 그린 퓨처 — 친환경 전기차를 위한 지속가능 미래 프레젠테이션

[Color Guide]
Background : #001a33 (딥 오션 블루)
Text Color : #e0f4ff (아이스 화이트) / #80c8e0 (라이트 블루)
Accent : #00d4aa (에코 민트 그린) / #0099ff (일렉트릭 블루)
Font : Raleway (제목) / Noto Sans KR (본문)

[Tone & Manner]
지속가능한 미래를 향한 희망적·혁신적 톤. 탄소중립·에너지 전환·스마트 모빌리티 비전을 감성적으로 전달. 테슬라·현대 아이오닉 감성의 클린 테크 이미지.

[Image Principles]
EV 충전 인프라 + 맑은 자연 합성. 배터리·모터 기술 다이어그램. 에코 민트 컬러 글로우 효과. 도시 야경과 EV 헤드라이트 트레일.

[Design Characteristics]
• 딥 오션 블루 배경에 에코 민트 포인트
• 에너지 플로우 곡선 모티프
• 배터리 게이지 스타일 진행 표시
• 탄소 절감 수치 대형 강조
• 유기적 곡선형 레이아웃

[Layout Guide]
- Title Slide : 오션 블루 배경 + EV 실루엣 이미지 + 민트 글로우 대형 제목
- Spec Slide : 주행거리·충전시간·배터리용량 원형 게이지 카드 3개
- Comparison Slide : 내연기관 vs 전기차 CO₂·연료비·유지비 비교
- CTA Slide : 에코 그린 배경 + "지구를 위한 선택" + 시승 예약 CTA
- Tone : Visionary / Eco-forward / Inspiring
- Slide count : 7 pages
- Font size contrast : 제목 48pt / 소제목 22pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '럭셔리 모션',
    type: 'Luxury Automotive Premium',
    colors: ['#0c0c0c', '#d4af37', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(12,12,12,0.05))',
    numBg: 'rgba(212,175,55,0.12)', numColor: '#b8962e',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프리미엄 자동차 브랜드 럭셔리 마케팅 전문가
Industry : 자동차
Type : 럭셔리 모션 — 제네시스·BMW급 프리미엄 브랜드 프레젠테이션

[Color Guide]
Background : #0c0c0c (퓨어 블랙)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #d4af37 (챔페인 골드) / #c0c0c0 (크롬 실버)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
절제된 럭셔리와 장인 정신의 톤. "달리는 예술작품"이라는 철학을 시각화. 럭셔리 고객의 감성과 지위를 만족시키는 고급스러운 커뮤니케이션. 말을 줄이고 여백이 말하게 한다.

[Image Principles]
스튜디오 3/4 앵글 차량 사진. 인테리어 스티칭·나파가죽 클로즈업. 차량 + 자연·도심 라이프스타일 합성. 골드 반사 빛 효과.

[Design Characteristics]
• 퓨어 블랙 배경에 챔페인 골드 포인트
• 코르모란트 세리프 폰트 고급 타이포그래피
• 얇은 골드 테두리·수평 구분선
• 시네마틱 와이드스크린 이미지 비율
• 미니멀 레이아웃 (콘텐츠 35% 이하)

[Layout Guide]
- Title Slide : 풀블랙 + 3/4 앵글 차량 실루엣 + 골드 세리프 모델명
- Spec Slide : 블랙 카드 3개 위 골드 텍스트 (마력·토크·0-100)
- Comparison Slide : 블랙 배경 좌우 트림 레벨 골드 라인 구분
- CTA Slide : 골드 CTA 버튼 + "당신만을 위한 드라이빙" + 시승 예약
- Tone : Luxurious / Refined / Aspirational
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 30단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '패밀리 세이프티',
    type: 'Family Safety Trust',
    colors: ['#f0f7ff', '#1a4a8a', '#34c759'],
    cardBg: 'linear-gradient(135deg, #e8f4ff, #f0f8ff)',
    numBg: 'rgba(52,199,89,0.12)', numColor: '#28a745',
    prompt: `[NotebookLM Slide Design Guide]

Role : 패밀리카·첨단 안전 기술 자동차 마케팅 전문가
Industry : 자동차
Type : 패밀리 세이프티 — 안전과 가족을 위한 따뜻한 신뢰 프레젠테이션

[Color Guide]
Background : #f0f7ff (소프트 블루 화이트)
Text Color : #1a2840 (딥 네이비) / #4a6080 (미디엄 블루)
Accent : #1a4a8a (트러스트 블루) / #34c759 (세이프티 그린)
Font : Nunito (제목) / Noto Sans KR (본문)

[Tone & Manner]
안전하고 신뢰할 수 있는 가족 중심 톤. NCAP 5성급 안전 점수·첨단 ADAS·넓은 실내를 가족에게 어필. 현대 팰리세이드·투싼 타겟 감성. 부모의 마음으로 설계된 차.

[Image Principles]
가족 라이프스타일 이미지. 안전 테스트 NCAP 인증 배지. 차량 안전 기능 측면도 다이어그램. 그린·블루 안전 아이콘 세트.

[Design Characteristics]
• 밝고 신뢰감 있는 라이트 블루 배경
• 그린 세이프티 체크마크·배지 시스템
• 가족 아이콘 세트 (부모+자녀)
• 안전 등급 별표 시각화
• 부드러운 둥근 모서리 카드

[Layout Guide]
- Title Slide : 라이트 블루 배경 + 가족+차 라이프스타일 이미지 + 딥 네이비 제목
- Spec Slide : 안전 기능 체크리스트 카드 (그린 체크 아이콘 + 기능명)
- Comparison Slide : NCAP 안전 등급 경쟁 모델 비교 바 차트
- CTA Slide : 그린 버튼 + "가족의 안전을 지킵니다" + 시승 신청 CTA
- Tone : Trustworthy / Warm / Family-first
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'SDV 스마트 모빌리티',
    type: 'Software Defined Vehicle',
    colors: ['#0f0f1a', '#7c3aed', '#00d4ff'],
    cardBg: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(0,212,255,0.06))',
    numBg: 'rgba(124,58,237,0.12)', numColor: '#7c3aed',
    prompt: `[NotebookLM Slide Design Guide]

Role : 커넥티드카·자율주행·SDV 기술 발표 전문가
Industry : 자동차
Type : SDV 스마트 모빌리티 — AI·OTA 기반 소프트웨어 정의 자동차 기술 자료

[Color Guide]
Background : #0f0f1a (딥 테크 블랙)
Text Color : #e8e0ff (라이트 라벤더) / #a090c0 (미디엄 퍼플)
Accent : #7c3aed (SDV 퍼플) / #00d4ff (데이터 사이언)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI와 데이터로 진화하는 스마트카 기술 톤. 자율주행·OTA 업데이트·커넥티드 서비스를 기술 친화적 청중에게 어필. 현대차 SDV·기아 EV 비전 감성. 소프트웨어가 곧 차의 미래.

[Image Principles]
LiDAR 포인트 클라우드 시각화. 차량 HMI 인터페이스 UI 스크린. 사이언 데이터 플로우 다이어그램. 5G·AI 연결성 인포그래픽.

[Design Characteristics]
• 퍼플·사이언 듀얼 컬러 글로우
• 3D 도로·맵 데이터 시각화 모티프
• HUD 스타일 정보 오버레이
• 코드·알고리즘 텍스트 배경 패턴
• 연결 노드 다이어그램

[Layout Guide]
- Title Slide : 다크 배경 + LiDAR 포인트 클라우드 이미지 + 퍼플 글로우 제목
- Spec Slide : AI 칩·센서 스펙 HUD 스타일 카드 (카메라·레이더·라이다)
- Comparison Slide : Level 2 vs Level 3 vs Level 4 자율주행 기능 단계 비교
- CTA Slide : 퍼플 글로우 버튼 + SDV 기술 파트너십 문의 CTA
- Tone : Innovative / Tech-first / Connected
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 22pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '클래식 헤리티지',
    type: 'Brand Heritage Story',
    colors: ['#fdf8f0', '#5c3a1a', '#c9a227'],
    cardBg: 'linear-gradient(135deg, #fdf8f0, #f5ede0)',
    numBg: 'rgba(139,69,19,0.12)', numColor: '#7a4010',
    prompt: `[NotebookLM Slide Design Guide]

Role : 자동차 브랜드 역사·장인정신 스토리텔링 전문가
Industry : 자동차
Type : 클래식 헤리티지 — 브랜드 역사와 장인정신을 담은 헤리티지 스토리텔링

[Color Guide]
Background : #fdf8f0 (파치먼트 크림)
Text Color : #1a0a00 (딥 브라운 블랙) / #5c3a1a (다크 브라운)
Accent : #8b4513 (새들 브라운) / #c9a227 (앤틱 골드)
Font : Playfair Display (제목) / Noto Serif KR (본문)

[Tone & Manner]
수십 년의 역사와 장인 정신이 깃든 헤리티지 브랜드 톤. 국산차 역사적 발자취·클래식 모델 재해석·브랜드 DNA 스토리텔링. 과거의 자부심이 현재의 신뢰가 된다.

[Image Principles]
빈티지 세피아 필터 차량 사진. 파치먼트 종이 텍스처 배경. 스케치·블루프린트 스타일 드로잉. 연도별 모델 타임라인.

[Design Characteristics]
• 크림·파치먼트 배경 질감
• 세리프 레트로 타이포그래피
• 브라운·앤틱 골드 배색
• 타임라인 형태 역사 스토리텔링
• 빈티지 배지·엠블럼 스타일

[Layout Guide]
- Title Slide : 파치먼트 배경 + 빈티지 차 스케치 이미지 + 고딕 세리프 제목
- Spec Slide : 브랜드 역사 타임라인 (연도별 주요 모델·마일스톤)
- Comparison Slide : 창립 초기 모델 vs 현재 모델 레트로/모던 대비
- CTA Slide : 브라운 배경 + 앤틱 골드 CTA + "역사가 품질을 증명합니다"
- Tone : Heritage / Authentic / Timeless
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 22pt / 본문 13pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '상용차 비즈니스',
    type: 'Commercial Vehicle B2B',
    colors: ['#f8f8f8', '#333333', '#ff9500'],
    cardBg: 'linear-gradient(135deg, #f8f8f8, #f0f0f0)',
    numBg: 'rgba(255,149,0,0.12)', numColor: '#cc7700',
    prompt: `[NotebookLM Slide Design Guide]

Role : 상용차·트럭·밴 B2B 영업 마케팅 전문가
Industry : 자동차
Type : 상용차 비즈니스 — 물류·상용 솔루션 B2B 비즈니스 프레젠테이션

[Color Guide]
Background : #f8f8f8 (클린 화이트)
Text Color : #1a1a1a (차콜 블랙) / #555555 (미디엄 그레이)
Accent : #ff9500 (비즈니스 오렌지) / #333333 (스트롱 블랙)
Font : Oswald (제목) / Noto Sans KR (본문)

[Tone & Manner]
실용적·효율 중심 B2B 비즈니스 톤. 물류·운수·상용차 담당자를 위한 TCO(총소유비용)·연비·적재량 등 실질 가치 어필. 숫자로 증명하는 신뢰.

[Image Principles]
트럭·밴 실제 물류 현장 이미지. 물류 창고·고속도로 배경. 오렌지 포인트 표시. 적재 공간 단면 다이어그램.

[Design Characteristics]
• 화이트 배경에 오렌지 강조 포인트
• 비용 절감·연비 수치 대형 표시
• 산업용 스펙 체크리스트 테이블
• 활용 사례 사진 + 수치 조합 카드
• 실용적 그리드 레이아웃

[Layout Guide]
- Title Slide : 화이트 배경 + 차량 측면 뷰 이미지 + 오렌지 강조 헤드라인
- Spec Slide : 적재량·연비·총소유비용 비교 스펙 테이블 (오렌지 헤더행)
- Comparison Slide : 자사 vs 경쟁 상용차 TCO 5년 비용 비교
- CTA Slide : 오렌지 버튼 + 견적 문의 + 담당 영업 연락처 CTA
- Tone : Practical / Efficient / Business-focused
- Slide count : 7 pages
- Font size contrast : 제목 44pt 볼드 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 65단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 병원 전용 7개 디자인 프롬프트 ─────────────────────────
const HOSPITAL_PROMPTS = [
  {
    name: '클린 메디컬 트러스트',
    type: 'Clean Medical Trust',
    colors: ['#ffffff', '#0077cc', '#34c759'],
    cardBg: 'linear-gradient(135deg, #e8f4ff, #f0f8ff)',
    numBg: 'rgba(0,119,204,0.10)', numColor: '#0077cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 종합병원 환자·보호자 안내 및 의뢰 병원 대상 슬라이드 전문가
Industry : 병원
Type : 클린 메디컬 트러스트 — 신뢰와 안심을 주는 의료기관 프레젠테이션

[Color Guide]
Background : #ffffff / #f0f8ff (라이트 블루 틴트)
Text Color : #0a1a2e (딥 네이비) / #4a6080 (블루 그레이)
Accent : #0077cc (메디컬 블루) / #34c759 (헬스 그린)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
환자·보호자에게 안심과 신뢰를 주는 따뜻하고 전문적인 의료기관 톤. 복잡한 의료 정보를 쉽고 명확하게 전달. 서울아산병원·세브란스 수준의 권위와 신뢰.

[Image Principles]
깔끔한 의료진 이미지. 최신 의료 장비 사진. 블루·그린 의료 아이콘. 플랫 일러스트 의료 인포그래픽.

[Design Characteristics]
• 순백 배경 + 메디컬 블루 포인트
• 둥근 모서리 인포그래픽 카드
• 의료 아이콘 시스템
• 단계별 진료 플로우차트
• 그린 체크마크 확인 표시

[Layout Guide]
- Title Slide : 화이트 배경 + 병원 로고 + 블루 헤드라인
- Spec Slide : 진료과·의료진 소개 카드 그리드
- Comparison Slide : 일반 진료 vs 전문 센터 서비스 비교
- CTA Slide : 블루 버튼 + 진료 예약·문의 CTA
- Tone : Trustworthy / Clear / Caring
- Slide count : 7 pages
- Font size contrast : 제목 40pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '따뜻한 힐링 케어',
    type: 'Warm Healing Care',
    colors: ['#fff5f0', '#e8855c', '#5ba4d4'],
    cardBg: 'linear-gradient(135deg, rgba(232,133,92,0.08), rgba(255,245,240,0.8))',
    numBg: 'rgba(232,133,92,0.12)', numColor: '#c06030',
    prompt: `[NotebookLM Slide Design Guide]

Role : 환자 경험 중심 병원 브랜딩 슬라이드 디자이너
Industry : 병원
Type : 따뜻한 힐링 케어 — 환자 중심 의료 서비스 감성 프레젠테이션

[Color Guide]
Background : #fff5f0 (웜 피치 화이트)
Text Color : #2a1a10 (웜 브라운 블랙) / #6a4030 (미디엄 브라운)
Accent : #e8855c (웜 코랄) / #5ba4d4 (소프트 블루)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
환자의 불안을 해소하고 따뜻한 치유의 공간을 표현. "환자 중심"을 진정성 있게 전달. 인간적 돌봄과 공감을 강조하는 병원 브랜딩. 치료가 아니라 치유.

[Image Principles]
의사·환자 따뜻한 소통 이미지. 자연광이 드는 병원 공간 사진. 코랄·피치 오버레이 처리. 손을 잡는 케어 이미지.

[Design Characteristics]
• 피치·코랄 웜 배색 시스템
• 부드러운 둥근 모서리 카드
• 손그림 스타일 포인트 일러스트
• 환자 만족도 별점 시각화
• 따뜻한 보조 일러스트 요소

[Layout Guide]
- Title Slide : 피치 배경 + 따뜻한 의료진 이미지 + 코랄 세리프 제목
- Spec Slide : 진료과 아이콘 그리드 (코랄 포인트)
- Comparison Slide : 일반 내원 vs 당일 예약 서비스 비교
- CTA Slide : 코랄 버튼 + "지금 예약하세요" CTA
- Tone : Warm / Empathetic / Patient-first
- Slide count : 7 pages
- Font size contrast : 제목 42pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '다크 메디컬 테크',
    type: 'Dark Medical Technology',
    colors: ['#0a1628', '#00bcd4', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(0,188,212,0.08), rgba(124,58,237,0.06))',
    numBg: 'rgba(0,188,212,0.12)', numColor: '#0097a7',
    prompt: `[NotebookLM Slide Design Guide]

Role : 첨단 의료 장비·수술 로봇·AI 진단 발표 전문가
Industry : 병원
Type : 다크 메디컬 테크 — 첨단 의료 기술을 강조한 프리미엄 다크 자료

[Color Guide]
Background : #0a1628 (메디컬 다크 블루)
Text Color : #e0f4ff / #7ab8d8 (아이스 블루)
Accent : #00bcd4 (메디컬 사이언) / #7c3aed (테크 퍼플)
Font : Raleway (제목) / Noto Sans KR (본문)

[Tone & Manner]
최첨단 의료 장비(MRI·로봇수술·AI 진단)를 보유한 선진 병원의 기술 리더십 표현. 의료진 대상 학술·기술 발표 감성. 기술이 생명을 구한다.

[Image Principles]
MRI·CT 장비 이미지. 다크 배경 + 사이언 글로우. 의료 데이터 HUD 시각화. AI 진단 인터페이스 스크린 이미지.

[Design Characteristics]
• 다크 배경 + 사이언·퍼플 포인트
• 의료 데이터 HUD 스타일 모티프
• AI·의료기기 아이콘 세트
• 임상 성과 데이터 정밀 다이어그램
• 발광 라인 섹션 구분자

[Layout Guide]
- Title Slide : 다크 배경 + 첨단 장비 이미지 + 사이언 글로우 제목
- Spec Slide : 장비 스펙·검사 정확도 HUD 카드 (사이언 강조)
- Comparison Slide : 기존 진단 기술 vs 최신 AI 진단 비교
- CTA Slide : 사이언 버튼 + 의료 협력·도입 문의 CTA
- Tone : Advanced / Tech-driven / Precise
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 22pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '건강 인포그래픽',
    type: 'Health Education Infographic',
    colors: ['#f8f9fa', '#2e86ab', '#06d6a0'],
    cardBg: 'linear-gradient(135deg, rgba(46,134,171,0.08), rgba(6,214,160,0.06))',
    numBg: 'rgba(46,134,171,0.12)', numColor: '#1a6a8a',
    prompt: `[NotebookLM Slide Design Guide]

Role : 병원 건강 캠페인·예방의학 교육 슬라이드 전문가
Industry : 병원
Type : 건강 인포그래픽 — 건강 정보를 쉽고 친근하게 전달하는 교육 자료

[Color Guide]
Background : #f8f9fa (라이트 그레이 화이트)
Text Color : #1a2640 (딥 네이비) / #4a6080 (미디엄 블루)
Accent : #2e86ab (인포 블루) / #06d6a0 (헬스 민트) / #e63946 (경고 레드)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
건강 정보를 쉽고 재미있게 전달하는 교육적 톤. 일반인 대상 예방의학·건강검진 안내·생활습관 개선 캠페인에 최적. 어렵지 않게, 실천하게.

[Image Principles]
플랫 스타일 의료 일러스트. 컬러풀 건강 아이콘. 인체 다이어그램. 건강한 생활 라이프스타일 이미지.

[Design Characteristics]
• 화이트 배경 + 컬러풀 인포그래픽
• 플랫 의료 일러스트 시스템
• 단계별 번호 프로세스 카드
• 건강 체크리스트 레이아웃
• 원형 차트·진행 바 시각화

[Layout Guide]
- Title Slide : 화이트 배경 + 건강 인포그래픽 + 블루 제목
- Spec Slide : 건강 지표 대시보드 (BMI·혈압·혈당 원형 게이지)
- Comparison Slide : 올바른 vs 잘못된 생활 습관 비교
- CTA Slide : 블루 버튼 + 건강검진 예약 CTA
- Tone : Educational / Friendly / Clear
- Slide count : 7 pages
- Font size contrast : 제목 40pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 65단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '프레스티지 브랜딩',
    type: 'Hospital Prestige Brand',
    colors: ['#003366', '#ffffff', '#c41e3a'],
    cardBg: 'linear-gradient(135deg, rgba(0,51,102,0.08), rgba(196,30,58,0.04))',
    numBg: 'rgba(0,51,102,0.10)', numColor: '#003366',
    prompt: `[NotebookLM Slide Design Guide]

Role : 상급종합병원 브랜드 아이덴티티 슬라이드 전문가
Industry : 병원
Type : 프레스티지 브랜딩 — 국내 최고 수준 병원의 권위와 신뢰 자료

[Color Guide]
Background : #ffffff / #f5f8ff (라이트 블루 틴트)
Text Color : #001a33 (딥 네이비) / #3a5070 (블루 그레이)
Accent : #003366 (메디컬 네이비) / #c41e3a (포인트 레드)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
상급종합병원·빅5급 권위와 신뢰. 의학적 성과·연구 실적·국제 인증을 강조. 환자와 의뢰 의원에게 최고의 신뢰감 전달. 최고가 최선을 다한다.

[Image Principles]
병원 외관·로비 공간 이미지. 교수진 포트레이트. 국제 인증 배지. 연구 성과 데이터 차트.

[Design Characteristics]
• 화이트 + 네이비 권위 배색
• 세리프 폰트 고급 타이포그래피
• 인증 배지·수상 실적 강조
• 핵심 수치 대형 표시
• 코퍼레이트 헤더·푸터 시스템

[Layout Guide]
- Title Slide : 화이트 + 병원 전경 이미지 + 네이비 공식 제목
- Spec Slide : 의료 성과 KPI (수술 건수·생존율·재입원율·만족도)
- Comparison Slide : 국내·국제 평가 순위 비교 바 차트
- CTA Slide : 네이비 배경 + 진료 협력·환자 의뢰 CTA
- Tone : Authoritative / Excellence / Prestigious
- Slide count : 7 pages
- Font size contrast : 제목 40pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '디지털 헬스케어',
    type: 'Digital Healthcare Platform',
    colors: ['#e8f4fd', '#1a6fa8', '#00c896'],
    cardBg: 'linear-gradient(135deg, rgba(26,111,168,0.08), rgba(0,200,150,0.06))',
    numBg: 'rgba(26,111,168,0.10)', numColor: '#1a6fa8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 비대면 진료·디지털 헬스케어 서비스 발표 전문가
Industry : 병원
Type : 디지털 헬스케어 — 원격의료·AI 진단·스마트 병원 디지털 혁신 자료

[Color Guide]
Background : #e8f4fd (라이트 블루)
Text Color : #0a1a2e / #3a6080 (미디엄 블루)
Accent : #1a6fa8 (디지털 블루) / #00c896 (헬스 민트)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
원격의료·AI 진단·스마트 병원을 주도하는 디지털 혁신 의료기관 톤. 편리한 비대면 진료 경험을 디지털 네이티브 환자에게 어필. 병원이 손안에 들어온다.

[Image Principles]
스마트폰 진료 앱 UI 이미지. 디지털 헬스 데이터 시각화. 민트·블루 아이콘 세트. 원격 진료 커뮤니케이션 일러스트.

[Design Characteristics]
• 라이트 블루 + 민트 포인트 배색
• 앱 UI 스크린샷 모형 요소
• 디지털 헬스 기능 아이콘
• 사용자 여정 플로우차트
• 청명한 카드 컴포넌트

[Layout Guide]
- Title Slide : 라이트 블루 배경 + 앱 UI 모형 + 블루 제목
- Spec Slide : 디지털 서비스 기능 카드 그리드 (민트 포인트)
- Comparison Slide : 대면 진료 vs 원격 진료 비교
- CTA Slide : 민트 버튼 + 앱 다운로드·서비스 체험 CTA
- Tone : Modern / Convenient / Innovative
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '환자 안전 캠페인',
    type: 'Patient Safety Campaign',
    colors: ['#fffde7', '#f57f17', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(245,127,23,0.08), rgba(255,253,231,0.8))',
    numBg: 'rgba(245,127,23,0.12)', numColor: '#c46000',
    prompt: `[NotebookLM Slide Design Guide]

Role : 병원 환자 안전·의료 오류 예방 캠페인 전문가
Industry : 병원
Type : 환자 안전 캠페인 — 의료 안전 문화 조성을 위한 교육·캠페인 자료

[Color Guide]
Background : #fffde7 (소프트 옐로우 화이트)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #f57f17 (세이프티 오렌지) / #1565c0 (컴플라이언스 블루)
Font : Nunito (제목) / Noto Sans KR (본문)

[Tone & Manner]
의료진과 환자 모두를 위한 안전 문화 캠페인 톤. WHO 환자 안전 지침·손위생·낙상 예방을 쉽고 실천 가능하게 전달. 안전은 모두의 책임이다.

[Image Principles]
손위생·안전 수칙 이미지. 오렌지 경고 아이콘 세트. 체크리스트 스타일 레이아웃. 의료진 협력 이미지.

[Design Characteristics]
• 소프트 옐로우 배경 + 오렌지 강조
• 안전 체크리스트 레이아웃
• 숫자형 단계별 프로세스 카드
• 경고·주의 배지 시스템
• 쉬운 일러스트 스타일

[Layout Guide]
- Title Slide : 소프트 배경 + 안전 아이콘 + 오렌지 대형 제목
- Spec Slide : 5대 환자 안전 지침 체크리스트
- Comparison Slide : 안전 실천 전·후 사례 비교
- CTA Slide : 오렌지 배경 + 안전 캠페인 참여 서약 CTA
- Tone : Preventive / Educational / Caring
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 한의원 전용 7개 디자인 프롬프트 ─────────────────────────
const ORIENTAL_PROMPTS = [
  {
    name: '전통 동양미학',
    type: 'Traditional Oriental Aesthetics',
    colors: ['#faf6f0', '#5c3a1e', '#8b6914'],
    cardBg: 'linear-gradient(135deg, #faf6f0, #f5ede0)',
    numBg: 'rgba(139,105,20,0.12)', numColor: '#7a5a10',
    prompt: `[NotebookLM Slide Design Guide]

Role : 한의원 브랜딩 및 환자 안내 슬라이드 디자이너
Industry : 한의원
Type : 전통 동양미학 — 한방 전통과 자연 치유를 담은 동양미학 프레젠테이션

[Color Guide]
Background : #faf6f0 (한지 크림)
Text Color : #2d1206 (딥 브라운) / #5c3a1e (한방 브라운)
Accent : #8b6914 (고동 골드) / #5c8a3e (한방 녹색)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
수천 년의 한방 전통과 자연 치유의 지혜를 전하는 톤. 전통 한의학 철학과 현대적 안전성을 조화롭게 표현. 신뢰와 자연 치유의 따뜻함. 자연이 최고의 의사다.

[Image Principles]
한약재·침구 이미지. 한지·목재 텍스처 배경. 동양화 스타일 식물 일러스트. 고동 골드 먹선 포인트.

[Design Characteristics]
• 한지 크림 배경 질감
• 전통 문양 포인트 요소
• 먹·붓 스타일 그래픽
• 동양화 식물 일러스트
• 세로형 전통 타이포그래피

[Layout Guide]
- Title Slide : 한지 배경 + 전통 문양 + 붓글씨 감성 세리프 제목
- Spec Slide : 주요 치료 분야 아이콘 그리드 (침·뜸·한약·추나)
- Comparison Slide : 서양 의학 vs 한방 치료 접근 비교
- CTA Slide : 골드 버튼 + 진료 예약 CTA
- Tone : Traditional / Natural / Holistic
- Slide count : 7 pages
- Font size contrast : 제목 46pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '모던 한방 클리닉',
    type: 'Modern Oriental Clinic',
    colors: ['#ffffff', '#2d6a3f', '#c9a227'],
    cardBg: 'linear-gradient(135deg, rgba(45,106,63,0.08), rgba(201,162,39,0.06))',
    numBg: 'rgba(45,106,63,0.10)', numColor: '#2d6a3f',
    prompt: `[NotebookLM Slide Design Guide]

Role : 현대식 한의원 마케팅 슬라이드 전문가
Industry : 한의원
Type : 모던 한방 클리닉 — 전통과 현대를 융합한 세련된 한의원 브랜딩

[Color Guide]
Background : #ffffff / #f5faf5 (그린 틴트 화이트)
Text Color : #0a1a10 (딥 그린 블랙) / #3a6040 (미디엄 그린)
Accent : #2d6a3f (모던 그린) / #c9a227 (골드)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
전통 한방 효능을 현대 의학적 근거로 재해석. 젊은 층·직장인을 타겟으로 현대적이고 신뢰할 수 있는 한의원 이미지. 과학이 검증한 전통의 힘.

[Image Principles]
깔끔한 현대 한의원 인테리어. 현대화된 한방 치료 이미지. 그린 식물 포인트. 플랫 한방 아이콘 일러스트.

[Design Characteristics]
• 화이트 + 모던 그린 배색
• 깔끔한 카드 레이아웃
• 현대적 아이콘 + 전통 모티프 융합
• 치료 효과 인포그래픽
• 신뢰도 수치·후기 강조

[Layout Guide]
- Title Slide : 화이트 배경 + 모던 한의원 이미지 + 그린 제목
- Spec Slide : 주요 치료 프로그램 카드 (모던 아이콘)
- Comparison Slide : 초진 vs 재진 치료 과정 비교
- CTA Slide : 그린 버튼 + 온라인 예약 CTA
- Tone : Modern / Credible / Accessible
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '내추럴 허브 웰니스',
    type: 'Natural Herb Wellness',
    colors: ['#f1f8e9', '#558b2f', '#a1887f'],
    cardBg: 'linear-gradient(135deg, rgba(85,139,47,0.08), rgba(241,248,233,0.8))',
    numBg: 'rgba(85,139,47,0.12)', numColor: '#4a7a28',
    prompt: `[NotebookLM Slide Design Guide]

Role : 한방 건강식품·보약 마케팅 슬라이드 전문가
Industry : 한의원
Type : 내추럴 허브 웰니스 — 자연 한약재·건강식품 감성의 유기농 프레젠테이션

[Color Guide]
Background : #f1f8e9 (허브 그린 화이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #558b2f (허브 그린) / #a1887f (어스 베이지)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
자연에서 온 한약재의 순수함과 건강 효능 강조. 유기농·자연주의 트렌드에 맞는 친환경 건강 브랜드 이미지. 자연이 준 최고의 선물.

[Image Principles]
한약재·허브 클로즈업 이미지. 자연광 라이프스타일. 허브 그린 오버레이. 수채화 식물 일러스트.

[Design Characteristics]
• 허브 그린 자연 배색
• 수채화 식물 배경 요소
• 유기농 인증 배지 스타일
• 원산지·성분 인포그래픽
• 따뜻한 텍스처 배경

[Layout Guide]
- Title Slide : 그린 배경 + 한약재 이미지 + 자연스러운 세리프 제목
- Spec Slide : 주요 성분 효능 카드 (3-4가지 한약재)
- Comparison Slide : 일반 건기식 vs 한방 건기식 비교
- CTA Slide : 그린 버튼 + 상담·구매 문의 CTA
- Tone : Natural / Pure / Wellness
- Slide count : 7 pages
- Font size contrast : 제목 44pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '여성 웰니스 한방',
    type: 'Women Wellness Oriental',
    colors: ['#fce4ec', '#880e4f', '#4db6ac'],
    cardBg: 'linear-gradient(135deg, rgba(136,14,79,0.06), rgba(252,228,236,0.8))',
    numBg: 'rgba(136,14,79,0.10)', numColor: '#880e4f',
    prompt: `[NotebookLM Slide Design Guide]

Role : 여성 건강·갱년기·한방 다이어트 마케팅 전문가
Industry : 한의원
Type : 여성 웰니스 한방 — 여성 건강 특화 한의원 감성 프레젠테이션

[Color Guide]
Background : #fce4ec (소프트 핑크)
Text Color : #2a0a18 (딥 다크 로즈) / #6a2040 (미디엄 로즈)
Accent : #880e4f (딥 로즈) / #4db6ac (티얼 민트)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
여성 건강·갱년기 관리·한방 다이어트에 특화된 감성적·공감 가는 톤. 같은 여성의 건강 고민을 이해하는 파트너 같은 한의원 이미지. 당신의 아름다움을 한방으로.

[Image Principles]
여성 라이프스타일 이미지. 따뜻한 핑크 오버레이. 꽃·식물 일러스트. 웰니스 아이콘 세트.

[Design Characteristics]
• 소프트 핑크 + 딥 로즈 배색
• 플로럴 포인트 일러스트
• 여성 건강 아이콘 시스템
• 감성적 문구 타이포그래픽
• 체험 후기 카드 레이아웃

[Layout Guide]
- Title Slide : 핑크 배경 + 웰니스 이미지 + 로즈 세리프 제목
- Spec Slide : 여성 건강 케어 프로그램 카드 (다이어트·갱년기·피부·불임)
- Comparison Slide : 증상 전·후 개선 케이스 비교
- CTA Slide : 로즈 버튼 + 무료 상담 예약 CTA
- Tone : Empathetic / Wellness / Feminine
- Slide count : 7 pages
- Font size contrast : 제목 44pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스포츠 한방 재활',
    type: 'Sports Oriental Rehab',
    colors: ['#f0f4f8', '#1a3a6c', '#e63946'],
    cardBg: 'linear-gradient(135deg, rgba(26,58,108,0.08), rgba(230,57,70,0.06))',
    numBg: 'rgba(230,57,70,0.12)', numColor: '#c42030',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스포츠 한방·운동 선수 재활 전문 슬라이드 디자이너
Industry : 한의원
Type : 스포츠 한방 재활 — 운동선수·활동적 직장인 대상 한방 재활 자료

[Color Guide]
Background : #f0f4f8 (쿨 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (미디엄 블루)
Accent : #1a3a6c (스포츠 블루) / #e63946 (액션 레드)
Font : Oswald (제목) / Noto Sans KR (본문)

[Tone & Manner]
운동선수·직장인 운동족을 위한 에너지 넘치고 과학적인 한방 재활 톤. 침·약침·추나 요법의 효과를 스포츠 의학 관점에서 설명. 빠른 회복, 강한 복귀.

[Image Principles]
운동·재활 액션 이미지. 블루+레드 스포츠 배색. 인체 근골격 포인트 다이어그램. 치료 전·후 비교 이미지.

[Design Characteristics]
• 다이나믹 사선 레이아웃
• 스포츠 에너지 배색
• 인체 포인트 다이어그램
• 재활 단계별 프로세스 카드
• 스포츠 아이콘 세트

[Layout Guide]
- Title Slide : 블루 배경 + 운동 이미지 + 레드 포인트 제목
- Spec Slide : 재활 프로그램 단계 카드 (침·약침·추나·재활운동)
- Comparison Slide : 일반 통증 치료 vs 스포츠 한방 결과 비교
- CTA Slide : 레드 버튼 + 선수·운동족 전문 상담 예약 CTA
- Tone : Active / Scientific / Recovery-focused
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '소아 성장 한방',
    type: 'Pediatric Growth Oriental',
    colors: ['#e3f2fd', '#1565c0', '#ff9800'],
    cardBg: 'linear-gradient(135deg, rgba(21,101,192,0.08), rgba(255,152,0,0.06))',
    numBg: 'rgba(21,101,192,0.10)', numColor: '#1565c0',
    prompt: `[NotebookLM Slide Design Guide]

Role : 소아 성장·면역·비염 한방 클리닉 슬라이드 전문가
Industry : 한의원
Type : 소아 성장 한방 — 아이 성장·면역 관리 한방 소아 클리닉 자료

[Color Guide]
Background : #e3f2fd (라이트 스카이 블루)
Text Color : #0a1a2e (딥 네이비) / #2a5070 (미디엄 블루)
Accent : #1565c0 (차일드 블루) / #ff9800 (차일드 오렌지)
Font : Nunito (제목) / Noto Sans KR (본문)

[Tone & Manner]
아이를 키우는 부모에게 안심과 신뢰를 주는 따뜻하고 친근한 톤. 성장 발달·면역 강화·비염·아토피 한방 치료를 부모 눈높이로 설명. 우리 아이 건강, 한방으로 시작.

[Image Principles]
아이+부모 따뜻한 이미지. 동글동글 귀여운 일러스트. 오렌지·블루 밝은 배색. 성장 차트 인포그래픽.

[Design Characteristics]
• 스카이 블루 + 오렌지 밝은 배색
• 둥글고 친근한 아이콘
• 성장 차트·그래프 시각화
• 부모 FAQ 박스 레이아웃
• 따뜻한 캐릭터 일러스트

[Layout Guide]
- Title Slide : 스카이 블루 + 아이 이미지 + 오렌지 포인트 제목
- Spec Slide : 소아 한방 치료 프로그램 아이콘 카드
- Comparison Slide : 치료 전·후 성장 지표 비교 차트
- CTA Slide : 블루 버튼 + 부모 상담 예약 CTA
- Tone : Reassuring / Friendly / Child-focused
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '체질 맞춤 검진',
    type: 'Oriental Constitution Checkup',
    colors: ['#f3e5f5', '#6a1b9a', '#43a047'],
    cardBg: 'linear-gradient(135deg, rgba(106,27,154,0.08), rgba(67,160,71,0.06))',
    numBg: 'rgba(106,27,154,0.10)', numColor: '#6a1b9a',
    prompt: `[NotebookLM Slide Design Guide]

Role : 한방 건강검진·사상체질 분석 프로그램 슬라이드 전문가
Industry : 한의원
Type : 체질 맞춤 검진 — 사상체질 분석·한방 건강검진 패키지 안내 자료

[Color Guide]
Background : #f3e5f5 (소프트 라벤더)
Text Color : #1a0a2e (딥 퍼플 블랙) / #4a1a6a (미디엄 퍼플)
Accent : #6a1b9a (한방 퍼플) / #43a047 (건강 그린)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
사상체질(태양·태음·소양·소음인) 분석을 통한 맞춤 건강 관리의 전문성. 과학적 근거 기반의 한방 건강검진을 프리미엄 서비스로 포지셔닝. 나만을 위한 맞춤 건강.

[Image Principles]
한방 진단 기기 이미지. 4가지 체질 분류 인포그래픽. 퍼플·그린 배색. 전통+현대 융합 이미지.

[Design Characteristics]
• 라벤더 + 퍼플 배색
• 4가지 체질 컬러 코딩
• 검진 항목 체크리스트
• 체질별 분류 다이어그램
• 프리미엄 패키지 카드

[Layout Guide]
- Title Slide : 라벤더 배경 + 한방 진단 이미지 + 퍼플 세리프 제목
- Spec Slide : 4대 사상체질 분류 인포그래픽 카드
- Comparison Slide : 기본 vs 프리미엄 검진 패키지 비교
- CTA Slide : 퍼플 버튼 + 체질 분석 예약 CTA
- Tone : Expert / Personalized / Premium
- Slide count : 7 pages
- Font size contrast : 제목 44pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 약국 전용 7개 디자인 프롬프트 ─────────────────────────
const PHARMACY_PROMPTS = [
  {
    name: '클린 파마씨 블루',
    type: 'Clean Pharmacy Blue',
    colors: ['#e8f4fd', '#0077cc', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(0,119,204,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(0,119,204,0.10)', numColor: '#0077cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 약국 복약 지도 및 서비스 안내 슬라이드 전문가
Industry : 약국
Type : 클린 파마씨 블루 — 신뢰와 전문성을 전달하는 약국 서비스 프레젠테이션

[Color Guide]
Background : #e8f4fd (파마씨 블루 틴트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #0077cc (파마씨 블루) / #34c759 (헬스 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
복약 지도의 정확성과 환자 안전을 강조하는 신뢰 중심 톤. 복잡한 약물 정보를 쉽게 이해할 수 있도록 시각화. 동네 약국의 친근함과 전문성 결합. 건강을 지키는 첫 관문.

[Image Principles]
약사 복약 지도 이미지. 블루 크로스 아이콘. 약품 박스·약병. 안전 복약 인포그래픽.

[Design Characteristics]
• 라이트 블루 배경 + 그린 포인트
• 복약 알림 카드 레이아웃
• 약품 분류 아이콘 시스템
• 상호작용·주의사항 경고 박스
• 타임라인 복약 스케줄

[Layout Guide]
- Title Slide : 라이트 블루 배경 + 약국 이미지 + 블루 제목
- Spec Slide : 주요 복약 지도 항목 카드 (용량·용법·주의사항)
- Comparison Slide : 올바른 vs 잘못된 복약 방법 비교
- CTA Slide : 그린 버튼 + 복약 상담 예약 CTA
- Tone : Safe / Clear / Trustworthy
- Slide count : 7 pages
- Font size contrast : 제목 40pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'H&B 라이프스타일',
    type: 'Health Beauty Lifestyle',
    colors: ['#fce4ec', '#c2185b', '#4caf50'],
    cardBg: 'linear-gradient(135deg, rgba(194,24,91,0.07), rgba(252,228,236,0.8))',
    numBg: 'rgba(194,24,91,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : H&B 약국 마케팅 슬라이드 전문가
Industry : 약국
Type : H&B 라이프스타일 — 건강+뷰티 복합 라이프스타일 약국 브랜딩

[Color Guide]
Background : #fce4ec (소프트 핑크)
Text Color : #2a0a18 (딥 다크 로즈) / #6a2040 (미디엄 로즈)
Accent : #c2185b (핫 핑크) / #4caf50 (헬스 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
Olive Young 스타일 건강+뷰티 복합 약국 톤. 건강기능식품·뷰티 제품·전문 조제 서비스를 라이프스타일로 포지셔닝. 20-40대 여성 타겟. 건강도 트렌디하게.

[Image Principles]
뷰티+헬스 라이프스타일 이미지. 핑크·그린 밝은 배색. 제품 플랫레이 사진. 감성적 라이프스타일 컷.

[Design Characteristics]
• 소프트 핑크 감성 배색
• 제품 카탈로그 그리드 레이아웃
• 뷰티·헬스 아이콘 세트
• 신상품·추천 배지
• 인스타그래머블 감성 레이아웃

[Layout Guide]
- Title Slide : 핑크 배경 + H&B 라이프스타일 이미지 + 핫핑크 제목
- Spec Slide : 추천 제품 카드 그리드 (카테고리별)
- Comparison Slide : 기존 약국 vs H&B 약국 서비스 비교
- CTA Slide : 핑크 버튼 + 멤버십 가입·포인트 CTA
- Tone : Lifestyle / Trendy / Health-forward
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '시니어 케어 약국',
    type: 'Senior Care Pharmacy',
    colors: ['#fff8e1', '#e65100', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(230,81,0,0.07), rgba(255,248,225,0.8))',
    numBg: 'rgba(230,81,0,0.12)', numColor: '#bf4000',
    prompt: `[NotebookLM Slide Design Guide]

Role : 노인·시니어 복약 관리 약국 서비스 슬라이드 전문가
Industry : 약국
Type : 시니어 케어 약국 — 고령자 복약 관리·돌봄 약국 서비스 자료

[Color Guide]
Background : #fff8e1 (웜 크림)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #e65100 (웜 오렌지) / #1565c0 (신뢰 블루)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
어르신·보호자에게 신뢰와 안심을 주는 따뜻한 톤. 만성질환 복약 관리·방문 약료·처방 알림 서비스를 쉽게 설명. 어르신 곁에 늘 함께.

[Image Principles]
어르신+약사 소통 이미지. 따뜻한 웜톤 배색. 큰 글씨 인포그래픽. 달력형 복약 스케줄.

[Design Characteristics]
• 따뜻한 크림·오렌지 배색
• 큰 글씨·아이콘 (고령자 접근성)
• 달력형 복약 관리 레이아웃
• 만성질환 관리 플로우
• 가족·보호자 안내 박스

[Layout Guide]
- Title Slide : 크림 배경 + 시니어 케어 이미지 + 오렌지 세리프 제목
- Spec Slide : 복약 관리 서비스 단계 안내 카드
- Comparison Slide : 일반 방문 vs 복약 관리 서비스 비교
- CTA Slide : 오렌지 버튼 + 복약 관리 서비스 신청 CTA
- Tone : Caring / Clear / Senior-friendly
- Slide count : 7 pages
- Font size contrast : 제목 44pt 세리프 / 소제목 22pt / 본문 15pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스마트 약국 디지털',
    type: 'Smart Pharmacy Digital',
    colors: ['#e8f0fe', '#1a73e8', '#00c896'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(0,200,150,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 디지털 약국·스마트 약료 서비스 발표 전문가
Industry : 약국
Type : 스마트 약국 디지털 — 처방전 앱·AI 복약 알림·자동화 프레젠테이션

[Color Guide]
Background : #e8f0fe (라이트 블루)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (디지털 블루) / #00c896 (민트)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
처방전 앱·AI 복약 알림·무인 조제 자동화 등 약국 디지털 전환을 리드하는 혁신 약국 이미지. 테크 기업 감성의 파마씨 자료. 약국이 스마트해진다.

[Image Principles]
약국 앱 UI 이미지. 스마트 자동화 장비. 민트·블루 아이콘 세트. 데이터 대시보드.

[Design Characteristics]
• 라이트 블루 + 민트 배색
• 앱 스크린 모형 레이아웃
• 자동화 프로세스 플로우
• 디지털 서비스 아이콘
• 사용자 후기·별점 카드

[Layout Guide]
- Title Slide : 라이트 블루 + 앱 UI 모형 + 블루 제목
- Spec Slide : 스마트 약국 기능 카드 그리드
- Comparison Slide : 기존 약국 vs 스마트 약국 프로세스 비교
- CTA Slide : 민트 버튼 + 앱 다운로드·서비스 신청 CTA
- Tone : Modern / Efficient / Patient-focused
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '전문 조제 약국',
    type: 'Specialty Compounding',
    colors: ['#f3f3f3', '#37474f', '#00acc1'],
    cardBg: 'linear-gradient(135deg, rgba(0,172,193,0.08), rgba(243,243,243,0.8))',
    numBg: 'rgba(0,172,193,0.12)', numColor: '#007c91',
    prompt: `[NotebookLM Slide Design Guide]

Role : 전문 조제 약국 B2B·B2C 마케팅 슬라이드 전문가
Industry : 약국
Type : 전문 조제 약국 — 개인 맞춤 조제 및 특수 의약품 전문 약국 자료

[Color Guide]
Background : #f3f3f3 (클린 그레이 화이트)
Text Color : #1a1a1a (차콜) / #555555 (미디엄 그레이)
Accent : #37474f (다크 슬레이트) / #00acc1 (사이언)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
개인 맞춤 조제의 전문성과 신뢰성을 강조. 병원 의사·환자 양쪽을 타겟으로 한 B2B+B2C 전문 약국 포지셔닝. 당신만을 위한 맞춤 처방.

[Image Principles]
전문 조제 작업 이미지. 깔끔한 실험실 환경. 사이언 포인트. 조제 프로세스 다이어그램.

[Design Characteristics]
• 그레이 + 사이언 배색
• 전문 인증 배지
• 조제 프로세스 플로우
• B2B 의사 파트너십 레이아웃
• 전문 스펙 테이블

[Layout Guide]
- Title Slide : 그레이 배경 + 조제 이미지 + 사이언 제목
- Spec Slide : 조제 가능 품목·전문 분야 카드
- Comparison Slide : 시판 의약품 vs 맞춤 조제 비교
- CTA Slide : 사이언 버튼 + 의뢰·상담 문의 CTA
- Tone : Specialized / Precise / Professional
- Slide count : 7 pages
- Font size contrast : 제목 40pt / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '건강기능식품 큐레이션',
    type: 'Health Supplement Curation',
    colors: ['#e8f5e9', '#2e7d32', '#ff8f00'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.08), rgba(255,143,0,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#2e7d32',
    prompt: `[NotebookLM Slide Design Guide]

Role : 건강기능식품·영양제 전문 약국 마케팅 전문가
Industry : 약국
Type : 건강기능식품 큐레이션 — 약사 추천 영양제 전문 큐레이션 자료

[Color Guide]
Background : #e8f5e9 (허브 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (내추럴 그린) / #ff8f00 (비타민 오렌지)
Font : Nunito (제목) / Noto Sans KR (본문)

[Tone & Manner]
약사의 전문 큐레이션으로 홍수처럼 쏟아지는 영양제 정보 속에서 신뢰할 수 있는 추천 서비스를 제공. 건강기능식품의 효능과 안전성을 과학적으로 안내. 약사가 직접 고른 영양제.

[Image Principles]
건강한 라이프스타일 이미지. 영양제·비타민 제품 사진. 그린+오렌지 활력 배색. 영양 성분 인포그래픽.

[Design Characteristics]
• 그린 + 오렌지 활력 배색
• 제품 추천 카드 레이아웃
• 영양 성분 인포그래픽
• 연령·증상별 큐레이션 매트릭스
• 약사 추천 공식 배지

[Layout Guide]
- Title Slide : 그린 배경 + 건강 이미지 + 오렌지 포인트 제목
- Spec Slide : 연령·증상별 추천 영양제 카드
- Comparison Slide : 일반 구매 vs 약사 큐레이션 비교
- CTA Slide : 그린 버튼 + 맞춤 상담 CTA
- Tone : Natural / Expert / Trustworthy
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '약국 프랜차이즈 IR',
    type: 'Pharmacy Franchise IR',
    colors: ['#f5f5f7', '#1d1d1f', '#0071e3'],
    cardBg: 'linear-gradient(135deg, #e8f2ff, #f0f7ff)',
    numBg: 'rgba(0,113,227,0.10)', numColor: '#0071e3',
    prompt: `[NotebookLM Slide Design Guide]

Role : 약국 프랜차이즈·체인 사업 투자 유치 발표 전문가
Industry : 약국
Type : 약국 프랜차이즈 IR — 약국 체인 사업 투자자·가맹점주 설명 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #0071e3 (코퍼레이트 블루) / #34c759 (그로스 그린)
Font : Noto Sans KR (제목·본문 공통, 웨이트 차등)

[Tone & Manner]
약국 프랜차이즈·네트워크 확장의 투자 가치를 전달. 시장 성장성·수익 모델·디지털 전환 전략을 투자자에게 명확히 설득. 함께 성장하는 파트너십.

[Image Principles]
약국 체인 브랜드 이미지. 재무 차트. 지도 기반 입지 전략. 블루 코퍼레이트 일러스트.

[Design Characteristics]
• 화이트 + 블루 코퍼레이트 배색
• 재무 KPI 대시보드
• 성장 로드맵 타임라인
• 시장 규모 인포그래픽
• 경쟁 포지셔닝 매트릭스

[Layout Guide]
- Title Slide : 화이트 + 약국 브랜드 이미지 + 블루 IR 공식 제목
- Spec Slide : 재무 KPI 4개 카드 (매출·수익성·가맹 수·성장률)
- Comparison Slide : 직영 운영 vs 프랜차이즈 수익 모델 비교
- CTA Slide : 블루 배경 + 투자·가맹 문의 CTA
- Tone : Analytical / Growth-driven / Professional
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt 600w / 본문 13pt 400w
- Text per slide : 최대 65단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 은행 전용 7개 디자인 프롬프트 ─────────────────────────
const BANK_PROMPTS = [
  {
    name: '트러스트 파이낸셜',
    type: 'Trust Financial',
    colors: ['#ffffff', '#003d82', '#0066cc'],
    cardBg: 'linear-gradient(135deg, #e8f2ff, #f0f7ff)',
    numBg: 'rgba(0,61,130,0.10)', numColor: '#003d82',
    prompt: `[NotebookLM Slide Design Guide]

Role : 시중은행 기업·개인 금융 서비스 발표 전문가
Industry : 은행
Type : 트러스트 파이낸셜 — 신뢰와 안정을 강조한 은행 서비스 프레젠테이션

[Color Guide]
Background : #ffffff / #f0f6ff (라이트 블루 틴트)
Text Color : #0a1628 (딥 네이비) / #3d5a8a (미디엄 블루 그레이)
Accent : #003d82 (뱅킹 네이비) / #0066cc (미디엄 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
KB·신한·하나 수준 시중은행의 신뢰와 안정감을 전달. 예금·대출·자산관리 상품을 명확하고 투명하게 소개. 데이터 기반 금융 전문성 강조. 당신의 자산을 지키는 파트너.

[Image Principles]
은행 지점·디지털 뱅킹 이미지. 블루 코퍼레이트 배색. 금융 데이터 차트. 고객 상담 신뢰 이미지.

[Design Characteristics]
• 화이트 + 뱅킹 네이비 권위 배색
• 금융 상품 비교 테이블
• 금리·수익률 수치 강조 카드
• 코퍼레이트 헤더·푸터 시스템
• 슬라이드 하단 법적 고지 영역

[Layout Guide]
- Title Slide : 화이트 + 은행 이미지 + 네이비 공식 헤드라인
- Spec Slide : 주요 금융 상품 카드 (금리·한도·조건 비교)
- Comparison Slide : 예금·적금·펀드·ETF 상품군 수익률 비교
- CTA Slide : 블루 버튼 + 상담 예약·앱 가입 CTA
- Tone : Trustworthy / Reliable / Professional
- Slide count : 7 pages
- Font size contrast : 제목 40pt 세미볼드 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '디지털 뱅킹 이노베이션',
    type: 'Digital Banking Innovation',
    colors: ['#e8f4fd', '#1a73e8', '#00c896'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(0,200,150,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 인터넷·모바일 뱅킹 디지털 혁신 발표 전문가
Industry : 은행
Type : 디지털 뱅킹 이노베이션 — AI·오픈뱅킹·마이데이터 디지털 금융 혁신 자료

[Color Guide]
Background : #e8f4fd (라이트 디지털 블루)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (디지털 블루) / #00c896 (핀테크 민트)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
인터넷·모바일·AI 기반 디지털 금융 혁신을 선도하는 뱅크 이미지. 토스·카카오뱅크와 경쟁하는 시중은행 디지털 전략. 마이데이터·오픈뱅킹·초개인화 금융 서비스 비전 전달.

[Image Principles]
모바일 뱅킹 앱 UI 이미지. 디지털 블루+민트 배색. AI 개인화 추천 다이어그램. 데이터 보안 아이콘.

[Design Characteristics]
• 라이트 블루 + 민트 디지털 배색
• 앱 UI 스크린 모형 레이아웃
• AI 기능 아이콘 카드 그리드
• 마이데이터 플로우 다이어그램
• 보안 인증 배지

[Layout Guide]
- Title Slide : 블루 배경 + 앱 UI 모형 + 디지털 헤드라인
- Spec Slide : 디지털 서비스 기능 카드 (AI 추천·자동이체·실시간 알림)
- Comparison Slide : 기존 은행 앱 vs 디지털 혁신 뱅킹 UX 비교
- CTA Slide : 민트 버튼 + 앱 다운로드·계좌 개설 CTA
- Tone : Innovative / Convenient / Data-driven
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '웰스 매니지먼트',
    type: 'Wealth Management Premium',
    colors: ['#0c0c0c', '#c9a84c', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.10), rgba(12,12,12,0.06))',
    numBg: 'rgba(201,168,76,0.14)', numColor: '#9a7a20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프라이빗뱅킹(PB)·고액 자산가 자산관리 전문 슬라이드 디자이너
Industry : 은행
Type : 웰스 매니지먼트 — HNWI 대상 PB·WM 서비스 프리미엄 자료

[Color Guide]
Background : #0c0c0c (프라이빗 블랙)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #c9a84c (웰스 골드) / #e2c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
초고액 자산가(HNWI)를 위한 극도로 절제된 프리미엄 PB 서비스 톤. 자산 배분·세금 최적화·글로벌 투자 포트폴리오를 럭셔리 브랜드 감성으로 전달. 자산은 곧 예술이다.

[Image Principles]
프리미엄 라이프스타일 이미지. 다크 배경 + 골드 포인트. 글로벌 자산 포트폴리오 차트. 부동산·예술품·주식 자산군 이미지.

[Design Characteristics]
• 블랙 + 챔페인 골드 럭셔리 배색
• 세리프 폰트 권위 타이포그래피
• 자산 포트폴리오 파이 차트
• 골드 테두리 카드 레이아웃
• 극도의 여백 미니멀 레이아웃

[Layout Guide]
- Title Slide : 풀 블랙 + 프리미엄 이미지 + 골드 세리프 헤드라인
- Spec Slide : 자산 배분 포트폴리오 골드 파이 차트
- Comparison Slide : 자산군별 (주식·채권·부동산·대체) 수익률 비교
- CTA Slide : 골드 버튼 + 전담 PB 상담 예약 CTA
- Tone : Exclusive / Premium / Discreet
- Slide count : 7 pages
- Font size contrast : 제목 48pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '기업금융 B2B',
    type: 'Corporate Banking B2B',
    colors: ['#f5f5f7', '#1d1d1f', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,102,204,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,102,204,0.10)', numColor: '#0066cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 기업금융·IB·무역금융 B2B 뱅킹 발표 전문가
Industry : 은행
Type : 기업금융 B2B — 중소기업·대기업 대상 기업금융 솔루션 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #0066cc (코퍼레이트 블루) / #34c759 (성장 그린)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
CFO·재무팀을 타겟으로 한 기업금융 전문가 톤. 운전자금·시설투자·무역금융·외환 헤지 솔루션을 데이터와 사례로 설득. 기업의 성장을 금융으로 뒷받침한다.

[Image Principles]
비즈니스 파트너십 이미지. 코퍼레이트 블루 배색. 기업 재무 데이터 차트. 산업별 맞춤 금융 다이어그램.

[Design Characteristics]
• 화이트 + 코퍼레이트 블루 배색
• 기업 재무 KPI 대시보드
• 금융 솔루션 플로우차트
• 업종별 맞춤 사례 카드
• 전담 기업금융팀 안내

[Layout Guide]
- Title Slide : 그레이 + 비즈니스 이미지 + 블루 공식 헤드라인
- Spec Slide : 기업금융 상품 카드 (대출·보증·무역금융·외환)
- Comparison Slide : 업종별·규모별 맞춤 금융 솔루션 매트릭스
- CTA Slide : 블루 버튼 + 기업금융 담당자 연결 CTA
- Tone : Professional / Solution-driven / Reliable
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '그린 파이낸스 ESG',
    type: 'Green Finance ESG',
    colors: ['#e8f5e9', '#1b5e20', '#0057a8'],
    cardBg: 'linear-gradient(135deg, rgba(27,94,32,0.09), rgba(0,87,168,0.06))',
    numBg: 'rgba(27,94,32,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 은행 ESG·그린 파이낸스 전략 발표 전문가
Industry : 은행
Type : 그린 파이낸스 ESG — 탄소중립·녹색 금융·ESG 투자 전략 자료

[Color Guide]
Background : #e8f5e9 (ESG 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #2e6b3e (미디엄 그린)
Accent : #1b5e20 (딥 에코 그린) / #0057a8 (리스폰서블 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
기후 금융·녹색채권·ESG 대출을 통해 지속가능한 미래를 선도하는 은행 이미지. RE100·탄소중립 목표·UN SDGs 연계 금융 상품을 환경 의식 높은 기업·투자자에게 전달.

[Image Principles]
재생에너지·친환경 인프라 이미지. 그린 ESG 배색. CO₂ 감축 인포그래픽. 녹색채권 발행 차트.

[Design Characteristics]
• 에코 그린 + 블루 ESG 배색
• 녹색채권 발행 실적 차트
• ESG 3대 영역 인포그래픽
• 탄소중립 로드맵 타임라인
• 국제 ESG 인증 배지

[Layout Guide]
- Title Slide : 그린 배경 + 친환경 이미지 + 에코 헤드라인
- Spec Slide : ESG 금융 상품 카드 (녹색채권·ESG 대출·탄소배출권)
- Comparison Slide : 일반 금융 vs ESG 금융 포트폴리오 효과 비교
- CTA Slide : 그린 버튼 + ESG 금융 상담 CTA
- Tone : Sustainable / Responsible / Forward-looking
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '글로벌 외환 트레이딩',
    type: 'Global FX Trading',
    colors: ['#0a0e1a', '#00ff88', '#ff6b35'],
    cardBg: 'linear-gradient(135deg, rgba(0,255,136,0.07), rgba(255,107,53,0.06))',
    numBg: 'rgba(0,255,136,0.10)', numColor: '#00cc66',
    prompt: `[NotebookLM Slide Design Guide]

Role : 외환딜링·글로벌 FX 트레이딩 서비스 발표 전문가
Industry : 은행
Type : 글로벌 외환 트레이딩 — 외환·파생상품·글로벌 딜링 서비스 자료

[Color Guide]
Background : #0a0e1a (트레이딩 다크)
Text Color : #e8f4ff / #8ab8d4 (아이스 블루)
Accent : #00ff88 (상승 그린) / #ff6b35 (하락 오렌지)
Font : JetBrains Mono (수치) / Noto Sans KR (본문)

[Tone & Manner]
글로벌 외환 시장을 24시간 운용하는 딜링 전문 은행의 속도와 정밀함. USD·EUR·JPY·CNY 주요 통화 헤지·환전·파생상품 서비스를 수출입 기업·트레이더에게 어필.

[Image Principles]
트레이딩 스크린·멀티 모니터 이미지. 다크 배경 + 그린·오렌지 포인트. 실시간 환율 차트. 글로벌 마켓 지도.

[Design Characteristics]
• 트레이딩 다크 배경 + 그린/오렌지 배색
• 실시간 환율 캔들 차트 모티프
• 모노스페이스 수치 강조
• HUD 딜링 스크린 UI 스타일
• 글로벌 시장 시간대 인포그래픽

[Layout Guide]
- Title Slide : 다크 배경 + 트레이딩 화면 이미지 + 그린 네온 헤드라인
- Spec Slide : 주요 통화 스프레드·수수료·한도 HUD 카드
- Comparison Slide : 주요 통화쌍 환율 변동 트렌드 차트
- CTA Slide : 그린 버튼 + FX 딜링 전담 상담 CTA
- Tone : Precise / Fast / Global
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 핵심 수치 64pt 모노 / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '소비자 금융 라이프',
    type: 'Consumer Finance Lifestyle',
    colors: ['#fff8e1', '#ff8f00', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(255,143,0,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(255,143,0,0.12)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 개인 대출·신용 금융 소비자 마케팅 전문가
Industry : 은행
Type : 소비자 금융 라이프 — 개인 대출·주택담보·전세 금융 생활 밀착 자료

[Color Guide]
Background : #fff8e1 (선샤인 크림)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #ff8f00 (생활 오렌지) / #1565c0 (신뢰 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
내 집 마련·전세·생활비 대출 등 일상 금융 고민을 해결해주는 친근하고 실용적인 소비자 금융 톤. 복잡한 금융 조건을 쉽게 이해할 수 있도록 시각화. 당신의 꿈을 금융이 응원합니다.

[Image Principles]
내 집 마련·라이프스타일 이미지. 오렌지+블루 생활감 배색. 금리 비교 인포그래픽. 상환 계획 시뮬레이션 차트.

[Design Characteristics]
• 따뜻한 오렌지 + 신뢰 블루 배색
• 금리 비교 카드 레이아웃
• 월 상환금 계산기 UI 모티프
• 라이프 이벤트 타임라인
• 고객 후기 인용 카드

[Layout Guide]
- Title Slide : 크림 배경 + 라이프스타일 이미지 + 오렌지 헤드라인
- Spec Slide : 대출 상품 카드 (금리·한도·기간·우대 조건)
- Comparison Slide : 주택담보·전세·신용 대출 조건 비교 표
- CTA Slide : 오렌지 버튼 + 온라인 대출 신청 CTA
- Tone : Friendly / Practical / Accessible
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 증권 전용 7개 디자인 프롬프트 ─────────────────────────
const SECURITIES_PROMPTS = [
  {
    name: '불마켓 모멘텀',
    type: 'Bull Market Momentum',
    colors: ['#0a0e1a', '#00e676', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(0,230,118,0.08), rgba(255,214,0,0.06))',
    numBg: 'rgba(0,230,118,0.10)', numColor: '#00b050',
    prompt: `[NotebookLM Slide Design Guide]

Role : 증권사 투자 전략·시장 분석 발표 전문가
Industry : 증권
Type : 불마켓 모멘텀 — 강세장 에너지를 담은 투자 전략 발표 자료

[Color Guide]
Background : #0a0e1a (마켓 다크 블루)
Text Color : #e8f4ff / #8ab8d8 (아이스 블루)
Accent : #00e676 (상승 그린) / #ffd600 (골드)
Font : JetBrains Mono (수치) / Noto Sans KR (본문)

[Tone & Manner]
강세장의 기회를 포착하는 자신감 넘치는 투자 전략 발표 톤. 섹터·종목 분석·포트폴리오 수익률을 그린 상승 에너지로 시각화. 시장을 이기는 투자 인사이트.

[Image Principles]
상승 차트·주가 이미지. 다크 배경 + 그린 포인트. 실시간 마켓 대시보드 UI. 수익률 인포그래픽.

[Design Characteristics]
• 마켓 다크 배경 + 상승 그린 포인트
• 캔들스틱 차트 모티프 배경
• 모노스페이스 수치 강조
• KPI 수익률 대형 표시
• 포트폴리오 배분 차트

[Layout Guide]
- Title Slide : 다크 배경 + 상승 차트 이미지 + 그린 네온 헤드라인
- Spec Slide : 추천 섹터·종목 분석 카드 (HUD 스타일)
- Comparison Slide : 자사 포트폴리오 vs 코스피 수익률 비교 차트
- CTA Slide : 그린 버튼 + 계좌 개설·투자 상담 CTA
- Tone : Confident / Analytical / Market-savvy
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 핵심 수치 72pt 모노 / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '클린 리서치 리포트',
    type: 'Clean Research Report',
    colors: ['#f5f5f7', '#1d1d1f', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,102,204,0.07), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,102,204,0.10)', numColor: '#0066cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 증권사 리서치센터 애널리스트 보고서 전문가
Industry : 증권
Type : 클린 리서치 리포트 — 기관투자자·HNW 고객 대상 심층 리서치 보고서

[Color Guide]
Background : #f5f5f7 (라이트 그레이)
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #0066cc (리서치 블루) / #e63946 (매도 레드) / #34c759 (매수 그린)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
맥킨지·골드만삭스 수준의 전문 리서치 리포트 톤. 기업 실적·밸류에이션·투자의견을 데이터와 논리로 전달. 감정 없는 분석, 냉정한 수치.

[Image Principles]
기업 실적 차트. 코퍼레이트 블루 배색. 재무 데이터 테이블. 섹터 비교 인포그래픽.

[Design Characteristics]
• 그레이 + 블루 리서치 배색
• 재무 데이터 테이블 중심
• 투자의견 배지 (BUY·HOLD·SELL)
• 목표주가 수치 대형 강조
• 리스크 팩터 경고 박스

[Layout Guide]
- Title Slide : 그레이 배경 + 기업 로고 + 블루 리서치 제목
- Spec Slide : 재무 KPI 대시보드 (매출·EPS·PER·목표주가)
- Comparison Slide : 동종 업종 기업 밸류에이션 비교 테이블
- CTA Slide : 블루 버튼 + 리서치 구독·상담 CTA
- Tone : Analytical / Objective / Expert
- Slide count : 7 pages
- Font size contrast : 제목 38pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 70단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'ETF·펀드 인포그래픽',
    type: 'ETF Fund Education',
    colors: ['#e8f4fd', '#0057a8', '#00bfa5'],
    cardBg: 'linear-gradient(135deg, rgba(0,87,168,0.08), rgba(0,191,165,0.06))',
    numBg: 'rgba(0,87,168,0.10)', numColor: '#0057a8',
    prompt: `[NotebookLM Slide Design Guide]

Role : ETF·공모펀드 투자자 교육 마케팅 슬라이드 전문가
Industry : 증권
Type : ETF·펀드 인포그래픽 — 개인투자자 대상 ETF·펀드 상품 교육 자료

[Color Guide]
Background : #e8f4fd (인베스트 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #0057a8 (인베스트 블루) / #00bfa5 (수익 틸)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
ETF·펀드를 처음 접하는 개인투자자도 쉽게 이해할 수 있는 교육적 인포그래픽 톤. 분산투자·비용·과세 등 복잡한 개념을 시각화. 쉽게, 분산하여, 꾸준히.

[Image Principles]
ETF 구조 다이어그램. 블루+틸 배색. 분산 포트폴리오 차트. 장기 복리 수익 시뮬레이션.

[Design Characteristics]
• 라이트 블루 + 틸 배색
• ETF 구조 플로우 다이어그램
• 비용 비교 인포그래픽
• 장기 수익 시뮬레이션 차트
• 투자 단계별 가이드 카드

[Layout Guide]
- Title Slide : 블루 배경 + ETF 인포그래픽 + 블루 교육 제목
- Spec Slide : ETF 특징 카드 (분산·저비용·유동성·투명성)
- Comparison Slide : ETF vs 펀드 vs 직접투자 비용·수익 비교
- CTA Slide : 블루 버튼 + ETF 계좌 개설·투자 시작 CTA
- Tone : Educational / Accessible / Long-term
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'IB 딜메이킹',
    type: 'Investment Banking Deals',
    colors: ['#0c0c14', '#d4af37', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(212,175,55,0.09), rgba(12,12,20,0.06))',
    numBg: 'rgba(212,175,55,0.13)', numColor: '#9a7a18',
    prompt: `[NotebookLM Slide Design Guide]

Role : 투자은행(IB)·M&A·IPO 딜메이킹 발표 전문가
Industry : 증권
Type : IB 딜메이킹 — M&A·IPO·구조화 금융 IB 딜 발표 자료

[Color Guide]
Background : #0c0c14 (IB 다크 네이비)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #d4af37 (딜 골드) / #e8c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
M&A·IPO·PEF 딜을 주도하는 최상위 IB의 권위와 전문성. 인수·합병·자금조달 구조를 골드 프리미엄 톤으로 시각화. 모든 딜에 최선의 구조를 설계한다.

[Image Principles]
금융가 빌딩 야경 이미지. 다크 배경 + 골드 포인트. M&A 구조 다이어그램. 딜 실적 인포그래픽.

[Design Characteristics]
• 딥 다크 + 딜 골드 프리미엄 배색
• 딜 구조 다이어그램 레이아웃
• 딜 실적 수치 대형 강조
• 세리프 폰트 권위 타이포
• 기밀 문서 감성 미니멀 레이아웃

[Layout Guide]
- Title Slide : 딥 다크 + 금융가 이미지 + 골드 세리프 헤드라인
- Spec Slide : 딜 구조 플로우 다이어그램 (주요 당사자·조건·타임라인)
- Comparison Slide : 동종 딜 시장 사례 벤치마킹 비교
- CTA Slide : 골드 버튼 + IB 딜 자문 문의 CTA
- Tone : Sophisticated / Deal-driven / Authoritative
- Slide count : 7 pages
- Font size contrast : 제목 48pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '퀀트·알고리즘 트레이딩',
    type: 'Quant Algorithmic Trading',
    colors: ['#0d1117', '#7c3aed', '#00ffcc'],
    cardBg: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(0,255,204,0.06))',
    numBg: 'rgba(124,58,237,0.12)', numColor: '#7c3aed',
    prompt: `[NotebookLM Slide Design Guide]

Role : 퀀트·알고리즘·시스템 트레이딩 기술 발표 전문가
Industry : 증권
Type : 퀀트·알고리즘 트레이딩 — AI·머신러닝 기반 체계적 투자 전략 자료

[Color Guide]
Background : #0d1117 (퀀트 다크)
Text Color : #e6edf3 / #8b949e (그레이)
Accent : #7c3aed (퀀트 퍼플) / #00ffcc (알고 민트)
Font : JetBrains Mono (코드·수치) / Noto Sans KR (본문)

[Tone & Manner]
AI·머신러닝·통계 기반 퀀트 전략으로 시장 수익률을 체계적으로 추구하는 기술적 톤. 백테스트 결과·샤프비율·알파를 엔지니어링 청중에게 정밀하게 전달.

[Image Principles]
코드·알고리즘 스크린 이미지. 다크 배경 + 퍼플·민트 포인트. 백테스트 수익률 차트. 신경망 다이어그램.

[Design Characteristics]
• 퀀트 다크 배경 + 퍼플·민트 배색
• 코드 블록 스타일 레이아웃
• 백테스트 수익률 차트
• 리스크·수익 매트릭스
• 알고리즘 플로우 다이어그램

[Layout Guide]
- Title Slide : 다크 배경 + 알고리즘 시각화 + 퍼플 글로우 헤드라인
- Spec Slide : 전략 성과 지표 HUD 카드 (샤프·MDD·알파·베타)
- Comparison Slide : 전략별 백테스트 수익률 비교 차트
- CTA Slide : 퍼플 버튼 + 퀀트 전략 도입 상담 CTA
- Tone : Systematic / Data-driven / Technical
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 핵심 수치 60pt 모노 / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '리테일 투자 교육',
    type: 'Retail Investor Education',
    colors: ['#fff8e1', '#ff8f00', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(255,143,0,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(255,143,0,0.12)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 개인투자자 금융 교육·투자 세미나 슬라이드 전문가
Industry : 증권
Type : 리테일 투자 교육 — 개인투자자를 위한 친근한 투자 입문 교육 자료

[Color Guide]
Background : #fff8e1 (선샤인 크림)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #ff8f00 (에너지 오렌지) / #1565c0 (신뢰 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
주식·채권·ETF 투자를 처음 시작하는 개인에게 쉽고 친근하게 전달. 복잡한 금융 용어 없이 그림과 비유로 투자 원칙 교육. 투자는 누구나 할 수 있다.

[Image Principles]
투자 입문 라이프스타일 이미지. 오렌지+블루 친근 배색. 쉬운 인포그래픽. 복리 계산 시뮬레이션 차트.

[Design Characteristics]
• 따뜻한 오렌지 + 신뢰 블루 배색
• 쉬운 인포그래픽 레이아웃
• 투자 단계별 카드
• 복리 시뮬레이션 차트
• Q&A 스타일 박스

[Layout Guide]
- Title Slide : 크림 배경 + 투자 입문 이미지 + 오렌지 포인트 헤드라인
- Spec Slide : 투자 원칙 카드 (분산·장기·정기·저비용)
- Comparison Slide : 저축 vs 투자 장기 수익 비교 시뮬레이션
- CTA Slide : 오렌지 버튼 + 무료 투자 세미나 참가 신청 CTA
- Tone : Accessible / Educational / Encouraging
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '글로벌 IB 연간 전망',
    type: 'Global Market Outlook',
    colors: ['#001233', '#ffd60a', '#4488ff'],
    cardBg: 'linear-gradient(135deg, rgba(255,214,10,0.08), rgba(68,136,255,0.06))',
    numBg: 'rgba(255,214,10,0.12)', numColor: '#8a7200',
    prompt: `[NotebookLM Slide Design Guide]

Role : 글로벌 자본시장 연간 전망·투자 전략 발표 전문가
Industry : 증권
Type : 글로벌 IB 연간 전망 — 글로벌 경제·자본시장 연간 전망 발표 자료

[Color Guide]
Background : #001233 (딥 스트래티지 네이비)
Text Color : #ffffff / #aabcce (아이스 그레이)
Accent : #ffd60a (프레스티지 골드) / #4488ff (마켓 블루)
Font : Bebas Neue (제목) / Noto Sans KR (본문)

[Tone & Manner]
글로벌 금리·환율·원자재·지정학 리스크를 종합 분석하는 연간 전망 발표 톤. 블랙록·JP모건 수준 글로벌 IB 시각으로 시장을 조망. 불확실성 속 기회를 포착한다.

[Image Principles]
글로벌 금융가 이미지. 세계 지도 경제 시각화. 네이비+골드 프리미엄 배색. 거시 경제 데이터 차트.

[Design Characteristics]
• 딥 네이비 + 골드 프레스티지 배색
• 세계 경제 지도 시각화
• 거시 지표 데이터 차트
• 투자 전략 매트릭스
• 대담한 Bebas 헤드라인

[Layout Guide]
- Title Slide : 딥 네이비 + 글로벌 이미지 + 골드 연도·전망 헤드라인
- Spec Slide : 글로벌 거시 지표 대시보드 (GDP·물가·금리·환율)
- Comparison Slide : 주요국 경제 성장률·증시 전망 비교 매트릭스
- CTA Slide : 골드 버튼 + 연간 전략 상담·구독 신청 CTA
- Tone : Strategic / Global / Authoritative
- Slide count : 7 pages
- Font size contrast : 제목 52pt 볼드 / 소제목 22pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 소프트웨어 전용 7개 디자인 프롬프트 ─────────────────────────
const SOFTWARE_PROMPTS = [
  {
    name: 'SaaS 프로덕트 런칭',
    type: 'SaaS Product Launch',
    colors: ['#0d0d1a', '#6c63ff', '#00f5c4'],
    cardBg: 'linear-gradient(135deg, rgba(108,99,255,0.09), rgba(0,245,196,0.06))',
    numBg: 'rgba(108,99,255,0.12)', numColor: '#6c63ff',
    prompt: `[NotebookLM Slide Design Guide]

Role : SaaS 소프트웨어 신제품 런칭 키노트 전문가
Industry : 소프트웨어
Type : SaaS 프로덕트 런칭 — B2B SaaS 신규 서비스 런칭 발표 자료

[Color Guide]
Background : #0d0d1a (SaaS 다크)
Text Color : #e8e0ff (라이트 라벤더) / #a090cc (미디엄 퍼플)
Accent : #6c63ff (프로덕트 인디고) / #00f5c4 (네오 민트)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
기업의 업무를 혁신하는 B2B SaaS 제품 런칭 발표 톤. 세일즈포스·노션·슬랙 감성의 프로덕트 키노트. 문제 정의→솔루션→기능→가격→ROI 흐름으로 CTO·구매 담당을 설득.

[Image Principles]
제품 대시보드 UI 이미지. 다크+인디고·민트 네온 배색. 기능 플로우 다이어그램. 고객 성공 지표 차트.

[Design Characteristics]
• SaaS 다크 + 인디고·민트 배색
• 프로덕트 UI 스크린 쇼케이스
• 기능 아이콘 카드 그리드
• ROI 계산 인포그래픽
• 요금제 비교 테이블

[Layout Guide]
- Title Slide : 다크 배경 + 제품 UI 이미지 + 인디고 글로우 헤드라인
- Spec Slide : 핵심 기능 카드 그리드 (민트 포인트)
- Comparison Slide : 기존 솔루션 vs 당사 제품 기능·비용·ROI 비교
- CTA Slide : 인디고 버튼 + 무료 체험·데모 신청 CTA
- Tone : Product-led / Bold / ROI-focused
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 22pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'B2B 엔터프라이즈 세일즈',
    type: 'B2B Enterprise Sales',
    colors: ['#f5f5f7', '#1d1d1f', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,102,204,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,102,204,0.10)', numColor: '#0066cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 엔터프라이즈 소프트웨어 B2B 영업 제안 전문가
Industry : 소프트웨어
Type : B2B 엔터프라이즈 세일즈 — 대기업·공공기관 대상 소프트웨어 솔루션 제안서

[Color Guide]
Background : #f5f5f7 (엔터프라이즈 라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #0066cc (엔터프라이즈 블루) / #34c759 (가치 그린)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
CIO·IT 구매 담당·임원을 설득하는 엔터프라이즈 소프트웨어 제안서 톤. 도입 비용·구축 일정·레퍼런스·보안 인증을 체계적으로 전달. 기술보다 비즈니스 임팩트를 먼저 이야기한다.

[Image Principles]
엔터프라이즈 IT 환경 이미지. 코퍼레이트 블루 배색. ROI·TCO 차트. 레퍼런스 기업 로고.

[Design Characteristics]
• 화이트 + 엔터프라이즈 블루 배색
• ROI·TCO 계산 대시보드
• 레퍼런스 로고 그리드
• 구축 단계 타임라인
• 보안·인증 배지 시스템

[Layout Guide]
- Title Slide : 화이트 + 기업 IT 이미지 + 블루 공식 제안 헤드라인
- Spec Slide : 솔루션 KPI 카드 (비용 절감·효율 향상·ROI·구축 기간)
- Comparison Slide : 자사 vs 경쟁 솔루션 기능·가격·지원 비교 표
- CTA Slide : 블루 버튼 + PoC 제안·담당자 미팅 신청 CTA
- Tone : Professional / Credible / Value-driven
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '오픈소스 개발자 컨퍼런스',
    type: 'Open Source Dev Conference',
    colors: ['#0d1117', '#f0f6ff', '#58a6ff'],
    cardBg: 'linear-gradient(135deg, rgba(88,166,255,0.08), rgba(13,17,23,0.05))',
    numBg: 'rgba(88,166,255,0.12)', numColor: '#2080d0',
    prompt: `[NotebookLM Slide Design Guide]

Role : 오픈소스 프로젝트·개발자 커뮤니티 발표 전문가
Industry : 소프트웨어
Type : 오픈소스 개발자 컨퍼런스 — GitHub 감성의 오픈소스 프로젝트 발표 자료

[Color Guide]
Background : #0d1117 (깃허브 다크)
Text Color : #f0f6ff / #8b949e (그레이)
Accent : #58a6ff (깃허브 블루) / #3fb950 (커밋 그린)
Font : JetBrains Mono (코드·제목) / Noto Sans KR (본문)

[Tone & Manner]
GitHub·오픈소스 생태계 기여자 발표 톤. 코드 품질·커뮤니티 기여·아키텍처 설계를 개발자 청중에게 기술적 깊이로 전달. Show me the code. 코드가 곧 프레젠테이션.

[Image Principles]
코드·터미널·깃허브 UI 이미지. 다크 배경 + 블루·그린 포인트. 아키텍처 다이어그램. 기여자 통계 차트.

[Design Characteristics]
• 깃허브 다크 + 블루·그린 배색
• 코드 블록 스타일 레이아웃
• 아키텍처 다이어그램
• 기여 통계 인포그래픽
• 커밋 히스토리 모티프

[Layout Guide]
- Title Slide : 다크 배경 + 코드 이미지 + 블루 모노 헤드라인
- Spec Slide : 프로젝트 스펙 카드 (언어·의존성·성능·라이선스)
- Comparison Slide : 기존 솔루션 vs 오픈소스 벤치마크 비교
- CTA Slide : 블루 버튼 + GitHub Star·컨트리뷰터 참여 CTA
- Tone : Technical / Community-driven / Transparent
- Slide count : 7 pages
- Font size contrast : 제목 44pt 모노 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '소프트웨어 스타트업 IR',
    type: 'Software Startup IR',
    colors: ['#ffffff', '#1d1d1f', '#6c63ff'],
    cardBg: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(255,255,255,0.8))',
    numBg: 'rgba(108,99,255,0.10)', numColor: '#6c63ff',
    prompt: `[NotebookLM Slide Design Guide]

Role : 소프트웨어 스타트업 시리즈 A/B 투자 유치 IR 전문가
Industry : 소프트웨어
Type : 소프트웨어 스타트업 IR — VC·CVC 대상 소프트웨어 스타트업 투자 설명 자료

[Color Guide]
Background : #ffffff / #f8f8ff (라이트 인디고 틴트)
Text Color : #1a1a2e (딥 네이비) / #4a4a6a (미디엄 퍼플 그레이)
Accent : #6c63ff (스타트업 인디고) / #1d1d1f (딥 블랙)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
YC·소프트뱅크 피치덱 감성의 소프트웨어 스타트업 IR. 문제→솔루션→시장→팀→재무 로드맵을 간결하고 임팩트 있게 전달. ARR·NRR·LTV:CAC로 SaaS 비즈니스 건전성 증명.

[Image Principles]
제품 스크린샷 + SaaS 지표. 화이트 + 인디고 포인트. 시장 규모 다이어그램. 팀 프로필 사진.

[Design Characteristics]
• 화이트 + 인디고 임팩트 배색
• SaaS 핵심 지표 대형 강조
• 제품 스크린샷 쇼케이스
• 시장 TAM·SAM·SOM 다이어그램
• 팀 프로필 카드

[Layout Guide]
- Title Slide : 화이트 + 로고 + 인디고 한 줄 비전 헤드라인
- Spec Slide : SaaS KPI 트랙션 카드 (ARR·MRR·NRR·LTV:CAC)
- Comparison Slide : 경쟁사 포지셔닝 매트릭스
- CTA Slide : 인디고 버튼 + 투자 미팅 신청 CTA
- Tone : Compelling / SaaS-native / Visionary
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 핵심 수치 72pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '클라우드 인프라 제안',
    type: 'Cloud Infrastructure Proposal',
    colors: ['#e8f4fd', '#0057a8', '#ff9500'],
    cardBg: 'linear-gradient(135deg, rgba(0,87,168,0.08), rgba(255,149,0,0.06))',
    numBg: 'rgba(0,87,168,0.10)', numColor: '#0057a8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 클라우드·DevOps·인프라 솔루션 제안 전문가
Industry : 소프트웨어
Type : 클라우드 인프라 제안 — AWS·Azure·GCP 기반 클라우드 전환 B2B 제안서

[Color Guide]
Background : #e8f4fd (클라우드 라이트 블루)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #0057a8 (클라우드 블루) / #ff9500 (어드밴티지 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
온프레미스 → 클라우드 전환 전략을 CTO·인프라팀에 제안하는 기술 중심 B2B 발표 톤. 비용 절감·확장성·보안·다운타임 제로 달성 로드맵을 데이터와 아키텍처로 설득.

[Image Principles]
클라우드 아키텍처 다이어그램. 블루+오렌지 배색. 비용 비교 차트. 마이그레이션 플로우.

[Design Characteristics]
• 클라우드 블루 + 오렌지 배색
• 클라우드 아키텍처 다이어그램
• 비용 절감 ROI 차트
• 마이그레이션 단계 타임라인
• 보안·컴플라이언스 배지

[Layout Guide]
- Title Slide : 블루 배경 + 클라우드 다이어그램 + 블루 헤드라인
- Spec Slide : 클라우드 전환 KPI 카드 (비용·성능·가용성·보안)
- Comparison Slide : 온프레미스 vs 클라우드 TCO·가용성 비교
- CTA Slide : 블루 버튼 + 클라우드 전환 PoC 제안 CTA
- Tone : Technical / Reliable / Cost-efficient
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '사이버보안 솔루션',
    type: 'Cybersecurity Solution',
    colors: ['#0a0f1e', '#00ff88', '#ff3b30'],
    cardBg: 'linear-gradient(135deg, rgba(0,255,136,0.07), rgba(255,59,48,0.05))',
    numBg: 'rgba(0,255,136,0.10)', numColor: '#00cc66',
    prompt: `[NotebookLM Slide Design Guide]

Role : 사이버보안·정보보호 솔루션 B2B 발표 전문가
Industry : 소프트웨어
Type : 사이버보안 솔루션 — 기업 정보보호·침해 대응·보안 플랫폼 제안 자료

[Color Guide]
Background : #0a0f1e (시큐리티 다크)
Text Color : #e0f0ff / #7ab0d0 (아이스 블루)
Accent : #00ff88 (보안 그린) / #ff3b30 (위협 레드)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
랜섬웨어·APT·제로데이 공격으로부터 기업 자산을 방어하는 사이버보안 솔루션 긴박감 있는 B2B 발표 톤. 위협 인텔리전스·SIEM·EDR 기능을 CISO·보안팀에 어필.

[Image Principles]
사이버 위협 시각화·보안 대시보드. 다크+그린 배색. 위협 탐지 HUD UI. 공격 경로 다이어그램.

[Design Characteristics]
• 시큐리티 다크 + 보안 그린 배색
• 위협 탐지 HUD 스타일 레이아웃
• 공격 벡터 다이어그램
• 탐지율·차단율 수치 강조
• 인증·컴플라이언스 배지

[Layout Guide]
- Title Slide : 다크 배경 + 위협 시각화 + 그린 글로우 헤드라인
- Spec Slide : 보안 기능 HUD 카드 (탐지·차단·대응·복구)
- Comparison Slide : 기존 보안 vs 당사 솔루션 탐지율·대응 시간 비교
- CTA Slide : 그린 버튼 + 무료 보안 진단·PoC 신청 CTA
- Tone : Urgent / Protective / Expert
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'SW 연간 IR 리포트',
    type: 'Software Annual IR Report',
    colors: ['#f5f5f7', '#1d1d1f', '#6c63ff'],
    cardBg: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(108,99,255,0.10)', numColor: '#6c63ff',
    prompt: `[NotebookLM Slide Design Guide]

Role : 소프트웨어 상장사 연간 IR·실적 보고 전문가
Industry : 소프트웨어
Type : SW 연간 IR 리포트 — 주주·기관투자자 대상 소프트웨어 기업 연간 IR 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #6c63ff (SW 인디고) / #34c759 (성장 그린)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
소프트웨어 상장사의 ARR·구독 매출·고객 수·신제품 로드맵을 주주·기관투자자에게 투명하게 전달. 구독 경제 비즈니스 모델의 성장성과 수익성을 설득력 있게 구성.

[Image Principles]
소프트웨어 기업 이미지. 그레이+인디고 IR 배색. SaaS 성장 차트. 고객 기반 인포그래픽.

[Design Characteristics]
• 화이트 + 인디고 IR 배색
• SaaS 지표 KPI 대시보드
• 구독 매출 성장 차트
• 고객 기반 확장 인포그래픽
• 제품 로드맵 타임라인

[Layout Guide]
- Title Slide : 화이트 + 기업 이미지 + 인디고 공식 IR 제목
- Spec Slide : SaaS KPI 카드 (ARR·고객 수·NRR·영업이익률)
- Comparison Slide : 연도별 ARR·고객 증가 추이 + 향후 전망
- CTA Slide : 인디고 배경 + IR 미팅·공시 안내 CTA
- Tone : Authoritative / Transparent / Growth-focused
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 앱개발 전용 7개 디자인 프롬프트 ─────────────────────────
const APPDEV_PROMPTS = [
  {
    name: '앱 런칭 키노트',
    type: 'App Launch Keynote',
    colors: ['#0d0d1a', '#ff6b35', '#ffd60a'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,53,0.09), rgba(255,214,10,0.06))',
    numBg: 'rgba(255,107,53,0.12)', numColor: '#cc4400',
    prompt: `[NotebookLM Slide Design Guide]

Role : 모바일 앱 신규 출시 키노트 발표 전문가
Industry : 앱개발
Type : 앱 런칭 키노트 — 앱스토어 출시 기념 제품 발표 키노트 자료

[Color Guide]
Background : #0d0d1a (앱 런칭 다크)
Text Color : #fff8f0 / #c0a890 (웜 그레이)
Accent : #ff6b35 (런칭 오렌지) / #ffd60a (하이라이트 옐로우)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
애플 WWDC·구글 I/O 감성의 앱 런칭 키노트 톤. 사용자 문제→기발한 해결책→기능 쇼케이스→출시 기념 혜택의 극적 흐름으로 구성. 앱 하나가 세상을 편리하게 만든다.

[Image Principles]
앱 스크린샷 아이폰·안드로이드 모형. 다크+오렌지·옐로우 배색. 기능 애니메이션 모티프. 앱스토어 UI.

[Design Characteristics]
• 런칭 다크 + 오렌지·옐로우 배색
• 디바이스 목업 스크린샷 쇼케이스
• 기능 카드 플로우 레이아웃
• 출시 이벤트 배지 시스템
• 다운로드 CTA 강조

[Layout Guide]
- Title Slide : 다크 배경 + 디바이스 목업 + 오렌지 런칭 헤드라인
- Spec Slide : 핵심 기능 카드 (아이콘+설명, 오렌지 포인트)
- Comparison Slide : 기존 앱 vs 당사 앱 UX·기능 비교
- CTA Slide : 오렌지 버튼 + 앱스토어 다운로드 CTA
- Tone : Exciting / Feature-forward / User-first
- Slide count : 7 pages
- Font size contrast : 제목 50pt / 소제목 22pt / 본문 14pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'UX 디자인 케이스',
    type: 'UX Design Case Study',
    colors: ['#fafafa', '#1d1d1f', '#6c63ff'],
    cardBg: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(250,250,250,0.8))',
    numBg: 'rgba(108,99,255,0.10)', numColor: '#6c63ff',
    prompt: `[NotebookLM Slide Design Guide]

Role : UX/UI 디자인 케이스 스터디 발표 전문가
Industry : 앱개발
Type : UX 디자인 케이스 — 사용자 중심 UX 설계 과정과 개선 성과 발표 자료

[Color Guide]
Background : #fafafa (UX 화이트)
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #6c63ff (디자인 인디고) / #ff6b35 (포인트 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
사용자 조사→문제 정의→와이어프레임→프로토타입→테스트→지표 개선 전 과정을 담은 UX 케이스 스터디 발표 톤. 디자인 결정의 근거를 데이터와 인사이트로 설명. 사용자를 이해하면 제품이 달라진다.

[Image Principles]
와이어프레임·프로토타입 이미지. 화이트+인디고 배색. 사용자 여정 맵. A/B 테스트 결과 차트.

[Design Characteristics]
• 화이트 + 인디고 UX 배색
• 사용자 여정 맵 레이아웃
• 와이어프레임 비교 카드
• 지표 개선 수치 강조
• HMW 인사이트 카드

[Layout Guide]
- Title Slide : 화이트 배경 + 앱 UI 이미지 + 인디고 케이스 제목
- Spec Slide : UX 프로세스 플로우 카드 (리서치→정의→설계→테스트)
- Comparison Slide : 개선 전·후 핵심 지표 비교 (전환율·이탈율·NPS)
- CTA Slide : 인디고 버튼 + 포트폴리오 공유·협업 제안 CTA
- Tone : Empathetic / Data-backed / Iterative
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '앱 개발사 포트폴리오',
    type: 'App Development Portfolio',
    colors: ['#0a1628', '#00c8ff', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(0,200,255,0.08), rgba(124,58,237,0.06))',
    numBg: 'rgba(0,200,255,0.12)', numColor: '#0097c8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 앱 개발사 수주 영업·회사 소개 발표 전문가
Industry : 앱개발
Type : 앱 개발사 포트폴리오 — 모바일·웹 앱 개발사 수주 제안 포트폴리오 자료

[Color Guide]
Background : #0a1628 (테크 다크 블루)
Text Color : #e0f4ff / #7ab8d8 (아이스 블루)
Accent : #00c8ff (테크 사이언) / #7c3aed (크리에이티브 퍼플)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
개발사의 기술 역량·납품 실적·팀 구성을 고객사 발주 담당에게 신뢰감 있게 어필. iOS·Android·Web·Flutter 풀스택 개발 경험을 포트폴리오로 증명. 코드 한 줄이 비즈니스를 만든다.

[Image Principles]
개발 포트폴리오 UI 이미지. 다크+사이언·퍼플 배색. 앱 스크린샷 다기종 목업. 기술 스택 아이콘.

[Design Characteristics]
• 테크 다크 + 사이언·퍼플 배색
• 앱 포트폴리오 갤러리 그리드
• 기술 스택 아이콘 카드
• 납품 실적 수치 강조
• 팀 구성 오르그차트 카드

[Layout Guide]
- Title Slide : 다크 배경 + 앱 목업 콜라주 + 사이언 헤드라인
- Spec Slide : 포트폴리오 카드 그리드 (앱명·카테고리·플랫폼·기간)
- Comparison Slide : 업종별 개발 경험 및 기술 역량 매트릭스
- CTA Slide : 사이언 버튼 + 프로젝트 상담·견적 신청 CTA
- Tone : Technical / Creative / Portfolio-driven
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '앱 성장 그로스해킹',
    type: 'App Growth Hacking',
    colors: ['#e8f0fe', '#1a73e8', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 모바일 앱 마케팅·그로스해킹 전략 발표 전문가
Industry : 앱개발
Type : 앱 성장 그로스해킹 — MAU·리텐션·바이럴 계수 기반 앱 성장 전략 자료

[Color Guide]
Background : #e8f0fe (그로스 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (그로스 블루) / #34c759 (성장 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
MAU·D1/D7/D30 리텐션·바이럴 계수·ARPU를 기반으로 앱 성장 엔진을 설계하는 데이터 드리븐 그로스해킹 발표 톤. A/B 테스트·퍼널 최적화·채널별 ROI를 투자자·팀에게 설명.

[Image Principles]
앱 퍼널·코호트 분석 차트. 블루+그린 성장 배색. 그로스 플라이휠 다이어그램. KPI 대시보드.

[Design Characteristics]
• 라이트 블루 + 그린 성장 배색
• 퍼널 분석 인포그래픽
• 코호트 리텐션 차트
• 그로스 플라이휠 다이어그램
• 채널별 CAC·ROI 비교

[Layout Guide]
- Title Slide : 블루 배경 + 성장 차트 이미지 + 블루 헤드라인
- Spec Slide : 그로스 KPI 카드 (MAU·리텐션·바이럴K·LTV:CAC)
- Comparison Slide : 채널별 유입·전환·CAC 비교 차트
- CTA Slide : 블루 버튼 + 그로스 전략 협업 제안 CTA
- Tone : Data-driven / Growth-obsessed / Iterative
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '슈퍼앱 플랫폼 전략',
    type: 'Super App Platform Strategy',
    colors: ['#0d0d1a', '#9b59b6', '#1abc9c'],
    cardBg: 'linear-gradient(135deg, rgba(155,89,182,0.09), rgba(26,188,156,0.06))',
    numBg: 'rgba(155,89,182,0.12)', numColor: '#7d3c98',
    prompt: `[NotebookLM Slide Design Guide]

Role : 슈퍼앱·플랫폼 전략 발표 전문가
Industry : 앱개발
Type : 슈퍼앱 플랫폼 전략 — 카카오·네이버 감성의 슈퍼앱 확장 전략 자료

[Color Guide]
Background : #0d0d1a (플랫폼 다크)
Text Color : #f0e8ff / #a890cc (소프트 퍼플)
Accent : #9b59b6 (플랫폼 퍼플) / #1abc9c (확장 틸)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
단일 앱에서 금융·커머스·콘텐츠·생활 서비스까지 확장하는 슈퍼앱 플랫폼 전략 발표 톤. 생태계 Lock-in·네트워크 효과·멀티호밍 방어 전략을 이사진·투자자에게 설명.

[Image Principles]
슈퍼앱 생태계 다이어그램. 다크+퍼플·틸 배색. 플랫폼 서비스 지도. MAU 성장 차트.

[Design Characteristics]
• 플랫폼 다크 + 퍼플·틸 배색
• 슈퍼앱 서비스 생태계 지도
• 네트워크 효과 플라이휠
• 수직 확장 로드맵 카드
• 플랫폼 KPI 대시보드

[Layout Guide]
- Title Slide : 다크 배경 + 플랫폼 생태계 이미지 + 퍼플 헤드라인
- Spec Slide : 서비스 확장 카드 (금융·커머스·콘텐츠·생활)
- Comparison Slide : 단일 앱 vs 슈퍼앱 LTV·락인 효과 비교
- CTA Slide : 퍼플 버튼 + 플랫폼 파트너십 제안 CTA
- Tone : Strategic / Ambitious / Ecosystem-driven
- Slide count : 7 pages
- Font size contrast : 제목 48pt / 소제목 21pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '앱 접근성 인클루전',
    type: 'App Accessibility Inclusion',
    colors: ['#e8f5e9', '#2e7d32', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(21,101,192,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 앱 접근성·디지털 인클루전 UX 발표 전문가
Industry : 앱개발
Type : 앱 접근성 인클루전 — 장애인·고령자 포함 모두를 위한 앱 접근성 설계 자료

[Color Guide]
Background : #e8f5e9 (인클루전 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (인클루전 그린) / #1565c0 (책임 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
WCAG 2.1 AA 기준 접근성 설계·스크린리더 지원·고령자 UI 최적화를 통해 더 많은 사람이 앱을 사용할 수 있게 만드는 포용적 디자인 발표. 모두를 위한 앱이 더 나은 앱이다.

[Image Principles]
접근성 UI 사례 이미지. 그린+블루 포용 배색. WCAG 체크리스트. 다양한 사용자 이미지.

[Design Characteristics]
• 인클루전 그린 + 블루 배색
• WCAG 기준 체크리스트
• 접근성 개선 Before/After
• 사용자 다양성 아이콘
• 인증 배지 시스템

[Layout Guide]
- Title Slide : 그린 배경 + 접근성 UI 이미지 + 그린 헤드라인
- Spec Slide : 접근성 기능 카드 (색상·폰트·스크린리더·제스처)
- Comparison Slide : 접근성 개선 전·후 사용자 이탈율·만족도 비교
- CTA Slide : 그린 버튼 + 접근성 진단·개선 제안 CTA
- Tone : Inclusive / Responsible / Human-centered
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 15pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '앱개발사 IR 덱',
    type: 'App Company IR Deck',
    colors: ['#ffffff', '#0d0d1a', '#ff6b35'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,53,0.08), rgba(255,255,255,0.8))',
    numBg: 'rgba(255,107,53,0.10)', numColor: '#cc4400',
    prompt: `[NotebookLM Slide Design Guide]

Role : 앱 스타트업 시드·시리즈 A 투자 유치 IR 전문가
Industry : 앱개발
Type : 앱개발사 IR 덱 — 소비자 앱 스타트업 VC 투자 유치 피치덱 자료

[Color Guide]
Background : #ffffff / #fff8f4 (소프트 오렌지 틴트)
Text Color : #0d0d1a (딥 블랙) / #4a3a30 (웜 그레이)
Accent : #ff6b35 (앱 오렌지) / #0d0d1a (딥 블랙)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
소비자 앱의 문제→솔루션→시장 규모→트랙션→팀→펀딩 요청을 임팩트 있게 전달하는 피치덱 톤. DAU·리텐션·바이럴 지수로 제품 시장 적합성(PMF) 증명. 지금이 투자 타이밍.

[Image Principles]
앱 스크린샷 목업. 화이트+오렌지 임팩트 배색. 트랙션 성장 차트. 팀 프로필.

[Design Characteristics]
• 화이트 + 오렌지 임팩트 배색
• 앱 스크린샷 목업 쇼케이스
• 트랙션 성장 차트
• 시장 규모 TAM 다이어그램
• 팀 프로필 카드

[Layout Guide]
- Title Slide : 화이트 + 앱 목업 + 오렌지 한 줄 비전 헤드라인
- Spec Slide : 앱 KPI 트랙션 카드 (DAU·리텐션·바이럴K·수익)
- Comparison Slide : 경쟁 앱 포지셔닝 매트릭스
- CTA Slide : 오렌지 버튼 + 투자 미팅·파트너십 CTA
- Tone : Energetic / PMF-proven / Compelling
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 핵심 수치 72pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── AI 전용 7개 디자인 프롬프트 ─────────────────────────
const AI_PROMPTS = [
  {
    name: 'AI 프로덕트 런칭',
    type: 'AI Product Launch',
    colors: ['#0d0d1a', '#7c3aed', '#00e5ff'],
    cardBg: 'linear-gradient(135deg, rgba(124,58,237,0.09), rgba(0,229,255,0.06))',
    numBg: 'rgba(124,58,237,0.12)', numColor: '#7c3aed',
    prompt: `[NotebookLM Slide Design Guide]

Role : AI 신제품·서비스 런칭 키노트 전문가
Industry : AI
Type : AI 프로덕트 런칭 — OpenAI·Anthropic 감성의 AI 제품 런칭 발표 자료

[Color Guide]
Background : #0d0d1a (AI 다크)
Text Color : #f0e8ff (라이트 라벤더) / #a090cc (미디엄 퍼플)
Accent : #7c3aed (AI 퍼플) / #00e5ff (뉴럴 사이언)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
GPT·Claude·Gemini 경쟁 구도에서 혁신적인 AI 제품을 발표하는 임팩트 있는 키노트 톤. 모델 성능 벤치마크·안전성·유용성을 기술·비기술 청중 모두에게 어필. AI가 인간의 가능성을 확장한다.

[Image Principles]
AI 신경망·데이터 시각화 이미지. 다크+퍼플·사이언 배색. 모델 성능 벤치마크 차트. 제품 데모 UI.

[Design Characteristics]
• AI 다크 + 퍼플·사이언 네온 배색
• 신경망 패턴 배경 요소
• 모델 성능 벤치마크 차트
• 기능 데모 UI 스크린샷
• 안전성 원칙 배지

[Layout Guide]
- Title Slide : 다크 배경 + AI 시각화 + 퍼플 글로우 헤드라인
- Spec Slide : AI 기능 카드 (성능·속도·안전성·멀티모달)
- Comparison Slide : 주요 AI 모델 벤치마크 성능 비교 차트
- CTA Slide : 퍼플 버튼 + API 체험·파트너십 문의 CTA
- Tone : Breakthrough / Responsible / Impactful
- Slide count : 7 pages
- Font size contrast : 제목 50pt / 소제목 22pt / 본문 14pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'AI B2B 솔루션 제안',
    type: 'AI B2B Enterprise Solution',
    colors: ['#f0f4f8', '#0d47a1', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(13,71,161,0.08), rgba(124,58,237,0.06))',
    numBg: 'rgba(13,71,161,0.10)', numColor: '#0d47a1',
    prompt: `[NotebookLM Slide Design Guide]

Role : 기업용 AI 솔루션 B2B 영업 제안 전문가
Industry : AI
Type : AI B2B 솔루션 제안 — 제조·금융·의료·유통 업종별 AI 솔루션 제안서

[Color Guide]
Background : #f0f4f8 (엔터프라이즈 라이트 블루)
Text Color : #0a1a2e (딥 네이비) / #2a4a7a (미디엄 블루)
Accent : #0d47a1 (엔터프라이즈 블루) / #7c3aed (AI 퍼플)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI 자동화·예측 분석·자연어 처리를 기업 업무에 적용해 비용을 절감하고 생산성을 높이는 B2B AI 솔루션 제안 톤. CTO·CDO를 설득하는 ROI 중심 비즈니스 케이스 작성.

[Image Principles]
기업 AI 적용 사례 이미지. 블루+퍼플 AI 배색. ROI 계산 차트. AI 워크플로 다이어그램.

[Design Characteristics]
• 라이트 블루 + AI 퍼플 배색
• AI 적용 워크플로 다이어그램
• ROI·비용 절감 수치 강조
• 업종별 사례 카드
• PoC 일정 타임라인

[Layout Guide]
- Title Slide : 라이트 블루 + AI 적용 이미지 + 블루 헤드라인
- Spec Slide : AI 솔루션 기능 카드 (자동화·예측·NLP·비전)
- Comparison Slide : AI 도입 전·후 업무 효율·비용 비교
- CTA Slide : 블루 버튼 + AI PoC 제안·담당자 미팅 CTA
- Tone : Expert / ROI-driven / Trustworthy
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'AI 연구 논문 발표',
    type: 'AI Research Paper Presentation',
    colors: ['#f5f5f7', '#1d1d1f', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(124,58,237,0.10)', numColor: '#7c3aed',
    prompt: `[NotebookLM Slide Design Guide]

Role : AI·머신러닝 학술 연구 발표 전문가
Industry : AI
Type : AI 연구 논문 발표 — NeurIPS·ICML·ICLR 스타일 AI 연구 성과 발표 자료

[Color Guide]
Background : #f5f5f7 (아카데믹 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #7c3aed (리서치 퍼플) / #0066cc (사이언티픽 블루)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
NeurIPS·ICML 수준 AI 연구 논문 발표 톤. 문제 정의→관련 연구→방법론→실험→결과→한계→미래 작업 구조. 수식과 실험 결과 그래프로 학술 청중에게 정확하게 전달.

[Image Principles]
모델 아키텍처 다이어그램. 그레이+퍼플 학술 배색. 실험 결과 그래프. 어텐션 맵·시각화.

[Design Characteristics]
• 아카데믹 그레이 + 퍼플 배색
• 모델 아키텍처 다이어그램
• 실험 결과 정밀 차트
• 수식 수용 레이아웃
• 레퍼런스 인용 스타일

[Layout Guide]
- Title Slide : 그레이 배경 + 모델 다이어그램 + 퍼플 논문 제목
- Spec Slide : 방법론 카드 (모델 구조·학습 데이터·하이퍼파라미터)
- Comparison Slide : SOTA 모델 대비 성능 벤치마크 비교 표
- CTA Slide : 퍼플 버튼 + arXiv 논문·코드 공개 CTA
- Tone : Rigorous / Academic / Precise
- Slide count : 7 pages
- Font size contrast : 제목 38pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 70단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'AI 스타트업 IR',
    type: 'AI Startup IR Pitch',
    colors: ['#ffffff', '#0d0d1a', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(124,58,237,0.09), rgba(255,255,255,0.8))',
    numBg: 'rgba(124,58,237,0.12)', numColor: '#7c3aed',
    prompt: `[NotebookLM Slide Design Guide]

Role : AI 스타트업 시리즈 A/B 투자 유치 IR 전문가
Industry : AI
Type : AI 스타트업 IR — AI 전문 VC·전략적 투자자 대상 투자 유치 피치덱

[Color Guide]
Background : #ffffff / #f8f4ff (라이트 퍼플 틴트)
Text Color : #1a001a (딥 퍼플 블랙) / #4a2a7a (미디엄 퍼플)
Accent : #7c3aed (AI 퍼플) / #0d0d1a (딥 블랙)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI 기반 혁신 스타트업의 독자적 기술력·시장 기회·팀 역량을 AI 전문 투자자에게 설득하는 IR 톤. Foundation Model·Fine-tuning·RLHF 등 기술 깊이와 비즈니스 임팩트를 동시에 어필.

[Image Principles]
AI 기술 시각화 이미지. 화이트+퍼플 임팩트 배색. 기술 차별화 다이어그램. 시장 성장 차트.

[Design Characteristics]
• 화이트 + AI 퍼플 임팩트 배색
• 기술 차별화 플로우 다이어그램
• AI 성능 벤치마크 카드
• 시장 기회 TAM 차트
• 팀 배경·어드바이저 카드

[Layout Guide]
- Title Slide : 화이트 + AI 시각화 + 퍼플 비전 헤드라인
- Spec Slide : 기술 KPI 카드 (모델 성능·속도·정확도·차별점)
- Comparison Slide : 기존 AI 솔루션 vs 당사 기술 비교 매트릭스
- CTA Slide : 퍼플 버튼 + 투자 미팅·기술 데모 신청 CTA
- Tone : Visionary / Technically-deep / Investable
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 핵심 수치 72pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'AI 윤리·거버넌스',
    type: 'AI Ethics Governance',
    colors: ['#e8f5e9', '#2e7d32', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(124,58,237,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : AI 윤리·책임 AI·거버넌스 정책 발표 전문가
Industry : AI
Type : AI 윤리·거버넌스 — 책임 있는 AI 개발·안전 기준·편향 방지 정책 자료

[Color Guide]
Background : #e8f5e9 (리스폰서블 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (리스폰서블 그린) / #7c3aed (AI 퍼플)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI 편향·프라이버시·투명성·안전성 등 책임 AI 원칙을 규제 기관·이해관계자·미디어에 전달하는 공신력 있는 거버넌스 발표 톤. 기술 발전과 인간 가치는 함께 간다.

[Image Principles]
다양성·인간 중심 AI 이미지. 그린+퍼플 배색. 윤리 원칙 다이어그램. 정책 프레임워크 플로우.

[Design Characteristics]
• 리스폰서블 그린 + AI 퍼플 배색
• AI 윤리 원칙 인포그래픽
• 거버넌스 프레임워크 다이어그램
• 편향 평가 지표 카드
• 국제 AI 규제 준수 배지

[Layout Guide]
- Title Slide : 그린 배경 + 책임 AI 이미지 + 그린 헤드라인
- Spec Slide : AI 윤리 원칙 카드 (공정성·투명성·안전·프라이버시)
- Comparison Slide : 국제 AI 윤리 기준 비교 (EU AI Act·NIST 등)
- CTA Slide : 그린 버튼 + AI 거버넌스 협력·정책 문의 CTA
- Tone : Responsible / Principled / Transparent
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'AI 인프라 MLOps',
    type: 'AI Infrastructure MLOps',
    colors: ['#0a1628', '#00c8ff', '#ff9500'],
    cardBg: 'linear-gradient(135deg, rgba(0,200,255,0.08), rgba(255,149,0,0.06))',
    numBg: 'rgba(0,200,255,0.12)', numColor: '#0097c8',
    prompt: `[NotebookLM Slide Design Guide]

Role : MLOps·AI 인프라·GPU 클러스터 발표 전문가
Industry : AI
Type : AI 인프라 MLOps — 모델 학습·배포·모니터링 AI 인프라 솔루션 자료

[Color Guide]
Background : #0a1628 (MLOps 다크 블루)
Text Color : #e0f4ff / #7ab8d8 (아이스 블루)
Accent : #00c8ff (인프라 사이언) / #ff9500 (GPU 오렌지)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
GPU 클러스터·분산 학습·모델 서빙·드리프트 모니터링 등 AI 모델 라이프사이클 전체를 지원하는 MLOps 인프라 솔루션 발표 톤. ML 엔지니어·인프라팀에게 기술 깊이로 어필.

[Image Principles]
GPU 서버·데이터센터 이미지. 다크+사이언 배색. MLOps 파이프라인 다이어그램. 학습 성능 벤치마크.

[Design Characteristics]
• MLOps 다크 + 사이언 배색
• MLOps 파이프라인 다이어그램
• GPU 성능 벤치마크 차트
• 모델 서빙 지연시간 수치
• 클러스터 구성 아키텍처

[Layout Guide]
- Title Slide : 다크 배경 + GPU 인프라 이미지 + 사이언 헤드라인
- Spec Slide : MLOps 기능 카드 (학습·배포·모니터링·피처스토어)
- Comparison Slide : 자체 구축 vs 관리형 MLOps 비용·시간 비교
- CTA Slide : 사이언 버튼 + 인프라 데모·견적 신청 CTA
- Tone : Technical / High-performance / Scalable
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'AI 트랜스포메이션 전략',
    type: 'AI Transformation Strategy',
    colors: ['#ffffff', '#1d1d1f', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(124,58,237,0.09), rgba(255,255,255,0.8))',
    numBg: 'rgba(124,58,237,0.12)', numColor: '#7c3aed',
    prompt: `[NotebookLM Slide Design Guide]

Role : 기업 AI 전환·디지털 트랜스포메이션 전략 컨설턴트
Industry : AI
Type : AI 트랜스포메이션 전략 — 경영진 대상 AI 도입 전략·로드맵 수립 자료

[Color Guide]
Background : #ffffff / #f8f4ff (라이트 퍼플 틴트)
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #7c3aed (전략 퍼플) / #1d1d1f (딥 블랙)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
CEO·CDO·이사회를 대상으로 기업 AI 전환 전략·투자 규모·기대 효과·리스크를 맥킨지·BCG 수준으로 제시하는 경영 전략 컨설팅 톤. AI 경쟁 우위를 지금 만들어야 한다.

[Image Principles]
경영 전략 이미지. 화이트+퍼플 전략 배색. AI 성숙도 매트릭스. 투자 우선순위 로드맵.

[Design Characteristics]
• 화이트 + 퍼플 전략 배색
• AI 성숙도 레벨 매트릭스
• 투자 우선순위 포트폴리오
• 단계별 전환 로드맵
• KPI 추적 대시보드 레이아웃

[Layout Guide]
- Title Slide : 화이트 + 전략 이미지 + 퍼플 전략 헤드라인
- Spec Slide : AI 전환 단계 카드 (진단→파일럿→스케일→최적화)
- Comparison Slide : AI 미도입 vs 도입 기업 경쟁력 격차 비교
- CTA Slide : 퍼플 버튼 + AI 전략 진단·워크숍 신청 CTA
- Tone : Strategic / Executive / Transformative
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 의류 전용 7개 디자인 프롬프트 ─────────────────────────
const FASHION_PROMPTS = [
  {
    name: '하이패션 런웨이',
    type: 'High Fashion Runway',
    colors: ['#0a0a0a', '#ffffff', '#c9a84c'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.09), rgba(10,10,10,0.06))',
    numBg: 'rgba(201,168,76,0.13)', numColor: '#9a7a20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 하이패션·럭셔리 의류 브랜드 런웨이 발표 전문가
Industry : 의류
Type : 하이패션 런웨이 — 시즌 컬렉션 런칭·패션위크 발표 자료

[Color Guide]
Background : #0a0a0a (패션 블랙)
Text Color : #ffffff / #c0b8b0 (웜 그레이)
Accent : #c9a84c (런웨이 골드) / #ffffff (화이트)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
파리·밀라노·서울 컬렉션을 연상시키는 하이패션 런웨이 감성. 시즌 테마·핵심 아이템·소재·컬러 팔레트를 극도로 절제된 럭셔리 톤으로 전달. 패션은 시대의 언어다.

[Image Principles]
런웨이·룩북 이미지. 블랙 + 골드 포인트. 의상 클로즈업 디테일. 컬러 팔레트 스와치.

[Design Characteristics]
• 패션 블랙 + 런웨이 골드 배색
• 세리프 쿠튀르 타이포그래피
• 룩북 풀블리드 이미지 레이아웃
• 시즌 컬러 팔레트 카드
• 극도의 여백 미니멀 레이아웃

[Layout Guide]
- Title Slide : 풀 블랙 + 룩북 이미지 + 골드 세리프 브랜드명·시즌
- Spec Slide : 시즌 컬렉션 키 룩 카드 (아이템·소재·컬러·스타일링)
- Comparison Slide : 지난 시즌 vs 신규 시즌 트렌드 키워드 비교
- CTA Slide : 골드 버튼 + B2B 바이어·쇼룸 예약 CTA
- Tone : Avant-garde / Luxurious / Iconic
- Slide count : 7 pages
- Font size contrast : 제목 52pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 30단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스트리트 웨어 에너지',
    type: 'Streetwear Energy',
    colors: ['#0d0d1a', '#ff3b30', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(255,59,48,0.09), rgba(255,214,0,0.06))',
    numBg: 'rgba(255,59,48,0.12)', numColor: '#cc2010',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스트리트웨어·힙합·스케이트 의류 브랜드 마케팅 전문가
Industry : 의류
Type : 스트리트 웨어 에너지 — MZ 세대 타겟 스트리트웨어 브랜드 런칭 자료

[Color Guide]
Background : #0d0d1a (스트리트 다크)
Text Color : #ffffff / #c0c0d0 (라이트 그레이)
Accent : #ff3b30 (스트리트 레드) / #ffd600 (힙합 옐로우)
Font : Barlow Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
도시 거리에서 태어난 스트리트웨어의 날것의 에너지와 반항적 창의성. 콜라보·드롭 문화·한정판 출시로 MZ 팬덤을 형성하는 브랜드 전략. 거리가 런웨이다.

[Image Principles]
스트리트 패션·그라피티 이미지. 다크+레드·옐로우 강렬 배색. 착장 컷. 콜라보 아이템 쇼케이스.

[Design Characteristics]
• 스트리트 다크 + 레드·옐로우 에너지
• 컨덴스드 볼드 타이포그래피
• 드롭 아이템 카운트다운 모티프
• 콜라보 파트너 로고 그리드
• SNS 바이럴 전략 카드

[Layout Guide]
- Title Slide : 다크 배경 + 스트리트 룩 이미지 + 레드·옐로우 대형 브랜드명
- Spec Slide : 신제품 드롭 카드 (아이템·가격·한정 수량·출시일)
- Comparison Slide : 경쟁 스트리트웨어 브랜드 포지셔닝 비교
- CTA Slide : 레드 버튼 + 드롭 알림 신청·구매 CTA
- Tone : Bold / Rebellious / Hype-driven
- Slide count : 7 pages
- Font size contrast : 제목 58pt 컨덴스드 / 소제목 22pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '미니멀 컨템포러리',
    type: 'Minimal Contemporary Fashion',
    colors: ['#f8f8f8', '#1d1d1f', '#b0a090'],
    cardBg: 'linear-gradient(135deg, rgba(176,160,144,0.09), rgba(248,248,248,0.8))',
    numBg: 'rgba(29,29,31,0.07)', numColor: '#1d1d1f',
    prompt: `[NotebookLM Slide Design Guide]

Role : 미니멀·컨템포러리 의류 브랜드 마케팅 전문가
Industry : 의류
Type : 미니멀 컨템포러리 — 절제된 감성의 현대적 의류 브랜드 자료

[Color Guide]
Background : #f8f8f8 (오프 화이트)
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #1d1d1f (딥 블랙) / #b0a090 (웜 타우프)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
COS·ARKET·마뗑킴 감성의 미니멀 컨템포러리 의류. 불필요한 것을 덜어낸 순수한 실루엣과 소재의 아름다움을 세련되게 전달. 덜 입지만 더 세련되게.

[Image Principles]
화이트 배경 룩북·착장 컷. 오프화이트+타우프 배색. 소재 텍스처 클로즈업. 미니멀 소품 스타일링.

[Design Characteristics]
• 오프 화이트 + 타우프 미니멀 배색
• 세리프 감성 타이포그래피
• 풀블리드 화이트 배경 룩북
• 소재·컬러 팔레트 스와치
• 여백 중심 고급 레이아웃

[Layout Guide]
- Title Slide : 오프화이트 배경 + 미니멀 룩북 이미지 + 세리프 브랜드명
- Spec Slide : 시즌 아이템 카드 (아이템·소재·컬러·가격)
- Comparison Slide : 컬러 팔레트별 스타일링 제안 비교
- CTA Slide : 블랙 버튼 + 쇼룸 예약·온라인 구매 CTA
- Tone : Refined / Understated / Timeless
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 19pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'K-패션 글로벌',
    type: 'K-Fashion Global',
    colors: ['#1a1a2e', '#e91e63', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.09), rgba(255,214,0,0.06))',
    numBg: 'rgba(233,30,99,0.12)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : K-패션 글로벌 수출·해외 진출 전략 전문가
Industry : 의류
Type : K-패션 글로벌 — 한류 파워로 세계를 공략하는 K-패션 수출 전략 자료

[Color Guide]
Background : #1a1a2e (K-패션 네이비)
Text Color : #ffffff / #c0b8d0 (소프트 퍼플)
Accent : #e91e63 (K-핑크) / #ffd600 (K-골드)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
BTS·블랙핑크 효과로 전 세계가 주목하는 K-패션의 글로벌 확장 전략 발표. 국내 브랜드의 해외 세일즈·바이어 미팅·글로벌 플랫폼 입점을 자신감 있게 피칭. 세계가 K-패션을 입는다.

[Image Principles]
K-패션 글로벌 착장 이미지. 네이비+핑크+골드 K-배색. 세계 진출 지도. 글로벌 플랫폼 UI.

[Design Characteristics]
• K-네이비 + K-핑크·골드 배색
• 세계 수출 현황 지도
• 글로벌 플랫폼 입점 현황
• 한류 연계 마케팅 전략 카드
• 해외 바이어 파트너 로고

[Layout Guide]
- Title Slide : 네이비 배경 + K-패션 이미지 + 핑크·골드 헤드라인
- Spec Slide : 수출 성과 카드 (국가·채널·매출·성장률)
- Comparison Slide : 국내 vs 글로벌 확장 후 매출·브랜드 인지도 비교
- CTA Slide : 핑크 버튼 + 글로벌 바이어·파트너십 문의 CTA
- Tone : Global / Proud / K-culture-driven
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '지속가능 패션 ESG',
    type: 'Sustainable Fashion ESG',
    colors: ['#f1f8e9', '#2e7d32', '#795548'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(121,85,72,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 지속가능 패션·업사이클링·비건 패션 브랜드 전문가
Industry : 의류
Type : 지속가능 패션 ESG — 친환경·업사이클·공정무역 패션 브랜딩 자료

[Color Guide]
Background : #f1f8e9 (에코 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (에코 그린) / #795548 (어스 브라운)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
패스트패션의 환경 파괴를 거부하고 지속가능한 소재·공정무역·업사이클링으로 패션을 재정의하는 브랜드 톤. MZ 환경 의식 소비자에게 진정성으로 소통. 좋은 옷이 좋은 세상을 만든다.

[Image Principles]
자연 소재·업사이클 이미지. 그린+어스 브라운 배색. 원료 공급망 스토리. 지속가능 인증 배지.

[Design Characteristics]
• 에코 그린 + 어스 브라운 배색
• 원료 공급망 인포그래픽
• 탄소 발자국 감소 수치
• 지속가능 인증 배지 시스템
• 업사이클 스토리 카드

[Layout Guide]
- Title Slide : 그린 배경 + 에코 패션 이미지 + 그린 헤드라인
- Spec Slide : ESG 실천 카드 (소재·공정·탄소·재활용)
- Comparison Slide : 패스트패션 vs 지속가능 패션 환경 영향 비교
- CTA Slide : 그린 버튼 + 친환경 컬렉션 구매·파트너십 CTA
- Tone : Conscious / Authentic / Purpose-driven
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '패션 플랫폼 이커머스',
    type: 'Fashion Platform E-commerce',
    colors: ['#fce4ec', '#e91e63', '#1a1a2e'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.08), rgba(252,228,236,0.8))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 패션 이커머스·플랫폼 성장 전략 발표 전문가
Industry : 의류
Type : 패션 플랫폼 이커머스 — 무신사·에이블리·W컨셉 감성 패션 플랫폼 자료

[Color Guide]
Background : #fce4ec (소프트 핑크)
Text Color : #2a0a18 (딥 로즈 블랙) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (패션 핑크) / #1a1a2e (딥 블랙)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
무신사·에이블리·지그재그 경쟁 구도에서 차별화된 패션 큐레이션·개인화 추천·커뮤니티로 성장하는 패션 플랫폼 전략 발표. 스타일이 데이터가 된다.

[Image Principles]
패션 앱 UI·착장 이미지. 핑크+블랙 감성 배색. 스타일 추천 플로우. 플랫폼 성장 차트.

[Design Characteristics]
• 소프트 핑크 + 딥 블랙 배색
• 앱 UI 스크린 모형
• 패션 큐레이션 피드 레이아웃
• GMV·MAU 성장 트랙션
• 개인화 추천 알고리즘 다이어그램

[Layout Guide]
- Title Slide : 핑크 배경 + 패션 앱 UI + 핑크 헤드라인
- Spec Slide : 플랫폼 KPI 카드 (GMV·MAU·셀러 수·재구매율)
- Comparison Slide : 경쟁 패션 플랫폼 포지셔닝 비교 매트릭스
- CTA Slide : 핑크 버튼 + 셀러 입점·투자 문의 CTA
- Tone : Trendy / Platform / Community-driven
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 핵심 수치 68pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '의류 브랜드 IR',
    type: 'Fashion Brand IR',
    colors: ['#f5f5f7', '#1d1d1f', '#e91e63'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.07), rgba(245,245,247,0.8))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 의류 브랜드 상장사·스타트업 IR 발표 전문가
Industry : 의류
Type : 의류 브랜드 IR — 투자자 대상 패션 브랜드 성장 스토리 IR 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #1d1d1f (딥 블랙) / #e91e63 (패션 핑크 포인트)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
패션 브랜드의 성장 스토리·브랜드 자산·유통 채널·글로벌 확장 전략을 VC·PE·기관투자자에게 설득하는 IR 톤. 패션은 감성이지만 투자는 데이터다.

[Image Principles]
브랜드 이미지+재무 데이터 혼합. 화이트+핑크 포인트 배색. 성장 차트. 유통 채널 인포그래픽.

[Design Characteristics]
• 화이트 + 핑크 포인트 IR 배색
• 브랜드 KPI 대시보드
• 유통 채널별 매출 비중 차트
• 글로벌 확장 로드맵
• 팀·브랜드 헤리티지 카드

[Layout Guide]
- Title Slide : 화이트 + 브랜드 이미지 + 핑크 포인트 IR 제목
- Spec Slide : 성장 KPI 카드 (매출·영업이익·브랜드 수·채널)
- Comparison Slide : 연도별 성장 추이 + 향후 확장 로드맵
- CTA Slide : 핑크 버튼 + 투자 미팅 신청 CTA
- Tone : Creative / Data-backed / Brand-proud
- Slide count : 7 pages
- Font size contrast : 제목 42pt 700w / 핵심 수치 68pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 화장품 전용 7개 디자인 프롬프트 ─────────────────────────
const COSMETICS_PROMPTS = [
  {
    name: '클린뷰티 내추럴',
    type: 'Clean Beauty Natural',
    colors: ['#fdf6e8', '#5a3e2b', '#a8c97f'],
    cardBg: 'linear-gradient(135deg, rgba(168,201,127,0.10), rgba(253,246,232,0.8))',
    numBg: 'rgba(90,62,43,0.09)', numColor: '#5a3e2b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 클린뷰티·비건 코스메틱 브랜드 마케팅 전문가
Industry : 화장품
Type : 클린뷰티 내추럴 — 무독성·비건·클린 인증 화장품 브랜딩 자료

[Color Guide]
Background : #fdf6e8 (클린 아이보리)
Text Color : #2a1200 (딥 어스 블랙) / #5a3e2b (어스 브라운)
Accent : #5a3e2b (내추럴 브라운) / #a8c97f (세이지 그린)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
합성 성분 없이 자연에서 온 원료로 만드는 클린뷰티 철학을 진정성 있게 전달. 비건·크루얼티프리·EWG 그린 인증을 환경 의식 높은 소비자에게 어필. 피부도 지구도 건강하게.

[Image Principles]
자연 식물 원료·화장품 플랫레이. 아이보리+세이지 그린 배색. 성분 클로즈업. 인증 배지 배치.

[Design Characteristics]
• 클린 아이보리 + 세이지 그린 배색
• 세리프 자연주의 타이포그래피
• 원료 성분 인포그래픽 카드
• 클린뷰티 인증 배지 시스템
• 식물 일러스트 포인트 요소

[Layout Guide]
- Title Slide : 아이보리 배경 + 자연 원료 이미지 + 세리프 브랜드명
- Spec Slide : 제품 성분 카드 (주요 원료·함량·효능·인증)
- Comparison Slide : 일반 화장품 vs 클린뷰티 성분 비교
- CTA Slide : 그린 버튼 + 제품 체험·유통 제안 CTA
- Tone : Pure / Honest / Earth-conscious
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'K-뷰티 글로벌 런칭',
    type: 'K-Beauty Global Launch',
    colors: ['#1a1a2e', '#ff6b9d', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,157,0.09), rgba(255,214,0,0.06))',
    numBg: 'rgba(255,107,157,0.12)', numColor: '#cc3366',
    prompt: `[NotebookLM Slide Design Guide]

Role : K-뷰티 글로벌 시장 진출·바이어 피칭 전문가
Industry : 화장품
Type : K-뷰티 글로벌 런칭 — 해외 바이어·플랫폼 대상 K-뷰티 수출 발표 자료

[Color Guide]
Background : #1a1a2e (K-뷰티 다크 네이비)
Text Color : #fff0f8 / #c090b8 (소프트 핑크)
Accent : #ff6b9d (K-뷰티 핑크) / #ffd600 (K-골드)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
아모레퍼시픽·LG생활건강·마녀공장 등 K-뷰티의 글로벌 열풍을 주도하는 수출 피칭 톤. 세포라·아마존·올리브영 글로벌 입점을 타겟으로 한 강력한 브랜드 발표.

[Image Principles]
K-뷰티 제품·모델 글로벌 이미지. 다크+핑크·골드 K-배색. 세계 수출 지도. 플랫폼 입점 현황.

[Design Characteristics]
• 다크 네이비 + K-핑크·골드 배색
• 글로벌 입점 플랫폼 로고 그리드
• 세계 수출 현황 지도
• K-뷰티 트렌드 인포그래픽
• 수출 성장 차트

[Layout Guide]
- Title Slide : 다크 배경 + K-뷰티 모델 이미지 + 핑크·골드 헤드라인
- Spec Slide : 수출 제품 라인업 카드 (카테고리·성분·타겟·가격)
- Comparison Slide : 주요 수출국별 K-뷰티 매출·성장률 비교
- CTA Slide : 핑크 버튼 + 글로벌 바이어·파트너십 문의 CTA
- Tone : Confident / Trendsetting / K-proud
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '럭셔리 스킨케어',
    type: 'Luxury Skincare Premium',
    colors: ['#0c0c14', '#d4af37', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(212,175,55,0.10), rgba(12,12,20,0.06))',
    numBg: 'rgba(212,175,55,0.14)', numColor: '#9a7a18',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프리미엄·럭셔리 스킨케어 브랜드 마케팅 전문가
Industry : 화장품
Type : 럭셔리 스킨케어 — 라메르·설화수 수준 프리미엄 스킨케어 브랜딩 자료

[Color Guide]
Background : #0c0c14 (럭셔리 다크)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #d4af37 (프레스티지 골드) / #e8c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
수십 년 연구와 희귀 원료로 완성한 프리미엄 스킨케어의 과학적 효능과 감성적 가치를 동시에 전달. 설화수·라메르·SK-II 수준의 럭셔리 포지셔닝. 피부가 곧 예술이다.

[Image Principles]
고급 화장품 제품 클로즈업. 다크+골드 럭셔리 배색. 원료 클로즈업 이미지. 피부 과학 데이터.

[Design Characteristics]
• 럭셔리 다크 + 챔페인 골드 배색
• 세리프 쿠튀르 타이포그래피
• 제품 쇼케이스 풀블리드 레이아웃
• 성분·효능 과학 인포그래픽
• 골드 라인 섹션 구분

[Layout Guide]
- Title Slide : 다크 배경 + 프리미엄 제품 이미지 + 골드 세리프 브랜드명
- Spec Slide : 제품 성분 카드 (핵심 원료·농도·임상 효능·특허)
- Comparison Slide : 일반 스킨케어 vs 럭셔리 라인 효능·원료 비교
- CTA Slide : 골드 버튼 + VIP 체험 신청·유통 문의 CTA
- Tone : Opulent / Scientific / Aspirational
- Slide count : 7 pages
- Font size contrast : 제목 52pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '컬러 메이크업 비비드',
    type: 'Color Makeup Vivid',
    colors: ['#fff0f5', '#e91e63', '#ff9800'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.08), rgba(255,152,0,0.06))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 색조 메이크업·립·아이 컬러 브랜드 마케팅 전문가
Industry : 화장품
Type : 컬러 메이크업 비비드 — MZ 타겟 트렌디 색조 메이크업 브랜드 자료

[Color Guide]
Background : #fff0f5 (뷰티 핑크 화이트)
Text Color : #2a0a18 (딥 로즈 블랙) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (뷰티 핑크) / #ff9800 (비비드 오렌지)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
립스틱·아이섀도·블러셔 등 색조 메이크업의 표현력과 즐거움을 MZ 감성으로 전달. 시즌 컬러 트렌드·인플루언서 콜라보·SNS 바이럴 전략 중심 뷰티 마케팅.

[Image Principles]
색조 화장품·메이크업 이미지. 핑크+오렌지 비비드 배색. 컬러 스와치. SNS 뷰티 콘텐츠.

[Design Characteristics]
• 소프트 핑크 + 비비드 오렌지 배색
• 컬러 스와치 팔레트 레이아웃
• 시즌 트렌드 컬러 카드
• 인플루언서 콜라보 배지
• SNS 바이럴 지표 강조

[Layout Guide]
- Title Slide : 핑크 배경 + 메이크업 이미지 + 핑크 세리프 컬렉션명
- Spec Slide : 신제품 컬러 라인업 카드 (컬러명·텍스처·지속력·가격)
- Comparison Slide : 시즌별 트렌드 컬러 vs 스테디셀러 컬러 비교
- CTA Slide : 핑크 버튼 + 구매·인플루언서 협업 CTA
- Tone : Expressive / Trendy / Playful
- Slide count : 7 pages
- Font size contrast : 제목 48pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '더마코스메틱 사이언스',
    type: 'Derma Cosmetic Science',
    colors: ['#e3f2fd', '#0d47a1', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(13,71,161,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(13,71,161,0.10)', numColor: '#0d47a1',
    prompt: `[NotebookLM Slide Design Guide]

Role : 더마코스메틱·기능성 화장품 브랜드 마케팅 전문가
Industry : 화장품
Type : 더마코스메틱 사이언스 — 피부과학 기반 기능성 화장품 전문 자료

[Color Guide]
Background : #e3f2fd (더마 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #2a4a7a (미디엄 블루)
Accent : #0d47a1 (더마 블루) / #34c759 (사이언스 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
피부과학·임상 데이터 기반으로 효능을 증명하는 더마코스메틱 전문 브랜드 톤. 라로슈포제·세타필·닥터자르트 감성. 감성이 아닌 과학으로 설득하는 스킨케어.

[Image Principles]
더마 제품·임상 연구 이미지. 블루+그린 사이언스 배색. 피부 조직 인포그래픽. 임상 효능 차트.

[Design Characteristics]
• 더마 블루 + 사이언스 그린 배색
• 임상 효능 데이터 차트
• 성분 분자 구조 인포그래픽
• 피부과 추천 인증 배지
• 전·후 피부 비교 카드

[Layout Guide]
- Title Slide : 블루 배경 + 더마 제품 이미지 + 블루 사이언스 헤드라인
- Spec Slide : 제품 성분 과학 카드 (성분·농도·메커니즘·임상 결과)
- Comparison Slide : 일반 vs 더마코스메틱 피부 개선 효과 비교
- CTA Slide : 블루 버튼 + 제품 체험·유통 제안 CTA
- Tone : Scientific / Trusted / Clinical
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '뷰티 D2C 이커머스',
    type: 'Beauty D2C E-commerce',
    colors: ['#fdf0ff', '#9c27b0', '#ff6b9d'],
    cardBg: 'linear-gradient(135deg, rgba(156,39,176,0.08), rgba(255,107,157,0.06))',
    numBg: 'rgba(156,39,176,0.10)', numColor: '#7b1fa2',
    prompt: `[NotebookLM Slide Design Guide]

Role : 뷰티 D2C·온라인 화장품 커머스 성장 전문가
Industry : 화장품
Type : 뷰티 D2C 이커머스 — 자사몰·D2C 채널 기반 뷰티 커머스 성장 전략 자료

[Color Guide]
Background : #fdf0ff (소프트 라벤더)
Text Color : #1a001a (딥 퍼플 블랙) / #5a2a6a (미디엄 퍼플)
Accent : #9c27b0 (뷰티 퍼플) / #ff6b9d (뷰티 핑크)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
멀티 채널 의존도를 줄이고 자사 D2C 채널·구독 모델·뷰티 커뮤니티로 직접 고객을 확보하는 온라인 뷰티 커머스 성장 전략 발표. 데이터가 뷰티를 혁신한다.

[Image Principles]
뷰티 앱 UI·제품 이미지. 라벤더+핑크 뷰티 배색. D2C 플로우 다이어그램. 구독자 성장 차트.

[Design Characteristics]
• 라벤더 + 퍼플·핑크 배색
• D2C 채널 성장 차트
• 구독 모델 플로우 카드
• 뷰티 커뮤니티 지표 강조
• 앱 UI 스크린 모형

[Layout Guide]
- Title Slide : 라벤더 배경 + 뷰티 앱 UI + 퍼플 헤드라인
- Spec Slide : D2C 성과 KPI 카드 (구독자·재구매율·LTV·NPS)
- Comparison Slide : 멀티채널 vs D2C 마진·고객 데이터 확보 비교
- CTA Slide : 퍼플 버튼 + 파트너십·투자 문의 CTA
- Tone : Digital / Community / Growth-focused
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '화장품 IR 연간',
    type: 'Cosmetics IR Annual',
    colors: ['#ffffff', '#1d1d1f', '#e91e63'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.07), rgba(255,255,255,0.8))',
    numBg: 'rgba(233,30,99,0.09)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 화장품 상장사·뷰티 기업 연간 IR 발표 전문가
Industry : 화장품
Type : 화장품 IR 연간 — 주주·투자자 대상 화장품 기업 연간 경영 성과 자료

[Color Guide]
Background : #ffffff / #fff5f8 (핑크 틴트)
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #1d1d1f (딥 블랙) / #e91e63 (뷰티 핑크 포인트)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
아모레퍼시픽·LG생활건강·코스맥스 수준 화장품 상장사의 연간 매출·글로벌 확장·신제품 파이프라인을 주주에게 권위 있게 보고. 뷰티는 감성이지만 투자는 숫자다.

[Image Principles]
브랜드+재무 데이터 혼합 이미지. 화이트+핑크 포인트 배색. 성장 차트. 글로벌 사업 현황 지도.

[Design Characteristics]
• 화이트 + 핑크 포인트 IR 배색
• 재무 KPI 대시보드
• 브랜드 포트폴리오 카드
• 글로벌 사업 현황 지도
• ESG·지속가능 성과 카드

[Layout Guide]
- Title Slide : 화이트 + 기업 이미지 + 핑크 포인트 공식 IR 제목
- Spec Slide : 재무 KPI 카드 (매출·영업이익·글로벌 비중·브랜드 수)
- Comparison Slide : 연도별 실적 추이 + 부문별 매출 비중 비교
- CTA Slide : 블랙 배경 + IR 미팅·공시 안내 CTA
- Tone : Authoritative / Brand-proud / Transparent
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 미용실 전용 7개 디자인 프롬프트 ─────────────────────────
const SALON_PROMPTS = [
  {
    name: '프리미엄 살롱 블랙',
    type: 'Premium Salon Black',
    colors: ['#0a0a0a', '#c9a84c', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.10), rgba(10,10,10,0.06))',
    numBg: 'rgba(201,168,76,0.13)', numColor: '#9a7a18',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프리미엄 헤어 살롱·뷰티 스튜디오 브랜딩 전문가
Industry : 미용실
Type : 프리미엄 살롱 블랙 — 고급 헤어 살롱의 전문성과 감성을 담은 브랜딩 자료

[Color Guide]
Background : #0a0a0a (살롱 블랙)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #c9a84c (살롱 골드) / #e2c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
파리·밀라노·청담 수준 하이엔드 헤어 살롱의 전문성·아트·럭셔리 감성 전달. 수석 디자이너의 커리어·시그니처 스타일·프리미엄 모발 케어 철학을 VIP 고객에게 어필.

[Image Principles]
헤어 시술 아트·살롱 인테리어 이미지. 블랙+골드 럭셔리 배색. 스타일링 클로즈업. 디자이너 포트레이트.

[Design Characteristics]
• 살롱 블랙 + 골드 프리미엄 배색
• 세리프 타이포그래피
• 헤어 스타일 포트폴리오 갤러리
• 디자이너 경력 프로필 카드
• 극도의 여백 미니멀 레이아웃

[Layout Guide]
- Title Slide : 풀 블랙 + 헤어 아트 이미지 + 골드 세리프 살롱명
- Spec Slide : 시그니처 서비스 카드 (시술명·시간·가격·담당 디자이너)
- Comparison Slide : 일반 미용실 vs 프리미엄 살롱 서비스·케어 비교
- CTA Slide : 골드 버튼 + 예약·VIP 멤버십 문의 CTA
- Tone : Artisanal / Exclusive / Confident
- Slide count : 7 pages
- Font size contrast : 제목 52pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '트렌디 컬러 살롱',
    type: 'Trendy Color Salon',
    colors: ['#fdf0ff', '#9c27b0', '#ff6b9d'],
    cardBg: 'linear-gradient(135deg, rgba(156,39,176,0.08), rgba(255,107,157,0.06))',
    numBg: 'rgba(156,39,176,0.10)', numColor: '#7b1fa2',
    prompt: `[NotebookLM Slide Design Guide]

Role : 트렌디 헤어 컬러·펌·스타일링 살롱 마케팅 전문가
Industry : 미용실
Type : 트렌디 컬러 살롱 — SNS 바이럴 헤어 컬러·스타일 트렌드 마케팅 자료

[Color Guide]
Background : #fdf0ff (소프트 라벤더)
Text Color : #1a001a (딥 퍼플 블랙) / #5a2a6a (미디엄 퍼플)
Accent : #9c27b0 (트렌디 퍼플) / #ff6b9d (비비드 핑크)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
인스타그램·틱톡 헤어 트렌드를 이끄는 컬러·펌·커트 스타일 마케팅 톤. 시즌 트렌드 컬러·디자이너 포트폴리오·SNS 인증샷으로 MZ 고객 유입. 머리카락이 나의 표현이다.

[Image Principles]
트렌디 헤어 컬러·스타일 이미지. 라벤더+핑크 트렌디 배색. 인증샷 갤러리 그리드. 시즌 컬러 차트.

[Design Characteristics]
• 라벤더 + 퍼플·핑크 트렌디 배색
• 헤어 스타일 갤러리 그리드
• 시즌 트렌드 컬러 카드
• SNS 팔로워·인증샷 수치
• 디자이너 인스타 포트폴리오 링크

[Layout Guide]
- Title Slide : 라벤더 배경 + 트렌디 헤어 이미지 + 퍼플 세리프 살롱명
- Spec Slide : 트렌드 시술 카드 (컬러·펌·커트·케어 가격·시간)
- Comparison Slide : 시즌 트렌드 헤어 스타일 TOP3 비교
- CTA Slide : 핑크 버튼 + 네이버 예약·DM 예약 CTA
- Tone : Trendy / Expressive / Social-first
- Slide count : 7 pages
- Font size contrast : 제목 48pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '헤어케어 웰니스',
    type: 'Hair Care Wellness',
    colors: ['#f1f8e9', '#2e7d32', '#795548'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(121,85,72,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 두피 케어·헤어 트리트먼트·건강 헤어 전문 살롱 마케팅 전문가
Industry : 미용실
Type : 헤어케어 웰니스 — 두피 건강·탈모 케어·천연 성분 헤어 케어 전문 자료

[Color Guide]
Background : #f1f8e9 (헤어케어 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (헤어케어 그린) / #795548 (어스 브라운)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
두피 진단·탈모 케어·천연 성분 트리트먼트를 통한 헤어 건강 회복을 전문성 있게 전달. 의료·뷰티의 경계에서 과학적 접근으로 고객 신뢰를 구축. 건강한 두피가 아름다운 모발을 만든다.

[Image Principles]
두피 케어·헤어 트리트먼트 이미지. 그린+브라운 웰니스 배색. 두피 분석 인포그래픽. 천연 성분 원료.

[Design Characteristics]
• 웰니스 그린 + 어스 브라운 배색
• 두피 진단 인포그래픽
• 천연 성분 원료 카드
• 케어 프로그램 단계 플로우
• 고객 개선 사례 Before/After

[Layout Guide]
- Title Slide : 그린 배경 + 헤어케어 이미지 + 그린 헤드라인
- Spec Slide : 두피·헤어 케어 프로그램 카드 (진단·처방·케어·관리)
- Comparison Slide : 일반 시술 vs 두피 케어 프로그램 모발 개선 비교
- CTA Slide : 그린 버튼 + 두피 진단 예약·케어 상담 CTA
- Tone : Scientific / Natural / Caring
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '살롱 프랜차이즈 창업',
    type: 'Salon Franchise Startup',
    colors: ['#fff8e1', '#ff8f00', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(255,143,0,0.09), rgba(21,101,192,0.06))',
    numBg: 'rgba(255,143,0,0.12)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 미용실 프랜차이즈·창업 설명회 슬라이드 전문가
Industry : 미용실
Type : 살롱 프랜차이즈 창업 — 예비 살롱 창업자 대상 가맹 사업 설명 자료

[Color Guide]
Background : #fff8e1 (크림 선샤인)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #ff8f00 (창업 오렌지) / #1565c0 (신뢰 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
미용 면허 보유자·창업 희망자에게 살롱 프랜차이즈 창업의 수익성·지원 시스템·브랜드 파워를 설득하는 사업 발표 톤. 기술이 있다면 창업이 두렵지 않다.

[Image Principles]
살롱 창업 성공 이미지. 오렌지+블루 창업 배색. 수익 시뮬레이션 차트. 창업 단계 플로우.

[Design Characteristics]
• 크림 + 오렌지 창업 배색
• 창업 수익 시뮬레이션 카드
• 본사 지원 서비스 아이콘 카드
• 가맹 현황 지도 인포그래픽
• 성공 원장 인터뷰 카드

[Layout Guide]
- Title Slide : 크림 배경 + 살롱 이미지 + 오렌지 창업 헤드라인
- Spec Slide : 창업 KPI 카드 (투자비·월 매출·수익률·회수 기간)
- Comparison Slide : 독립 개업 vs 프랜차이즈 창업 리스크·지원 비교
- CTA Slide : 오렌지 버튼 + 가맹 상담·창업 설명회 신청 CTA
- Tone : Empowering / Practical / Partnership
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 핵심 수치 68pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '남성 그루밍 바버',
    type: 'Men Grooming Barber',
    colors: ['#1a1a2e', '#c9a84c', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.10), rgba(26,26,46,0.06))',
    numBg: 'rgba(201,168,76,0.13)', numColor: '#9a7a18',
    prompt: `[NotebookLM Slide Design Guide]

Role : 남성 전문 바버샵·그루밍 살롱 브랜딩 전문가
Industry : 미용실
Type : 남성 그루밍 바버 — 클래식 바버샵·남성 그루밍 전문 살롱 브랜딩 자료

[Color Guide]
Background : #1a1a2e (바버 다크 네이비)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #c9a84c (클래식 골드) / #e2c97e (라이트 골드)
Font : Bebas Neue (제목) / Noto Sans KR (본문)

[Tone & Manner]
전통 바버샵의 클래식 감성과 현대 남성 그루밍 트렌드를 결합한 남성 전문 살롱 브랜딩. 페이드·스킨 페이드·면도·왁스 스타일링 전문 기술을 남성 소비자에게 어필. 진짜 남자의 이발관.

[Image Principles]
클래식 바버샵 이미지. 다크 네이비+골드 클래식 배색. 면도 도구 클로즈업. 남성 헤어스타일 포트폴리오.

[Design Characteristics]
• 다크 네이비 + 클래식 골드 배색
• 빈티지 바버 감성 타이포
• 서비스 메뉴 카드 레이아웃
• 멤버십 패키지 카드
• 스타일 포트폴리오 갤러리

[Layout Guide]
- Title Slide : 다크 배경 + 바버샵 이미지 + 골드 바버 브랜드명
- Spec Slide : 바버 서비스 카드 (커트·면도·왁스·케어 메뉴)
- Comparison Slide : 일반 미용실 vs 바버샵 전문 서비스 비교
- CTA Slide : 골드 버튼 + 예약·멤버십 등록 CTA
- Tone : Classic / Masculine / Skilled
- Slide count : 7 pages
- Font size contrast : 제목 52pt 볼드 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '살롱 SNS 마케팅',
    type: 'Salon SNS Marketing',
    colors: ['#fce4ec', '#e91e63', '#ff9800'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.08), rgba(255,152,0,0.06))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 미용실 SNS·디지털 마케팅·예약 시스템 전문가
Industry : 미용실
Type : 살롱 SNS 마케팅 — 인스타그램·네이버 예약·블로그 최적화 마케팅 전략 자료

[Color Guide]
Background : #fce4ec (소프트 핑크)
Text Color : #2a0a18 (딥 로즈 블랙) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (SNS 핑크) / #ff9800 (액션 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
인스타그램 팔로워·네이버 예약·블로그 검색 노출을 통해 신규 고객을 끌어들이는 살롱 디지털 마케팅 전략 톤. 좋은 헤어 사진 한 장이 최고의 광고다.

[Image Principles]
SNS 피드 감성 헤어 이미지. 핑크+오렌지 소셜 배색. SNS 화면 모형. 예약 시스템 UI.

[Design Characteristics]
• 소프트 핑크 + 오렌지 SNS 배색
• SNS 피드 그리드 레이아웃
• 채널별 KPI 카드
• 네이버 예약·카카오 채널 UI
• 고객 유입 채널 인포그래픽

[Layout Guide]
- Title Slide : 핑크 배경 + 헤어 SNS 이미지 + 핑크 디지털 헤드라인
- Spec Slide : SNS·디지털 채널 전략 카드 (인스타·블로그·네이버·카카오)
- Comparison Slide : SNS 마케팅 전·후 예약 건수·신규 고객 비교
- CTA Slide : 핑크 버튼 + SNS 팔로우·온라인 예약 CTA
- Tone : Digital / Approachable / Growth-focused
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '살롱 멤버십 리텐션',
    type: 'Salon Membership Retention',
    colors: ['#e8f0fe', '#1a73e8', '#c9a84c'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(201,168,76,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 미용실 고객 리텐션·멤버십·CRM 전략 전문가
Industry : 미용실
Type : 살롱 멤버십 리텐션 — 단골 고객 관리·멤버십·재방문율 향상 전략 자료

[Color Guide]
Background : #e8f0fe (멤버십 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (멤버십 블루) / #c9a84c (VIP 골드)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
신규 고객 유치보다 기존 고객 재방문이 살롱 수익의 핵심임을 강조하는 CRM 전략 발표. 포인트 적립·정기권·VIP 케어로 고객 생애 가치(LTV)를 극대화. 한 번 온 고객을 평생 고객으로.

[Image Principles]
멤버십 카드·VIP 케어 이미지. 블루+골드 배색. 재방문율 차트. CRM 플로우 다이어그램.

[Design Characteristics]
• 라이트 블루 + VIP 골드 배색
• 멤버십 등급 카드 (일반·실버·골드·VIP)
• 재방문율·LTV 수치 강조
• CRM 고객 여정 플로우
• 멤버십 혜택 비교 표

[Layout Guide]
- Title Slide : 블루 배경 + 살롱 멤버십 이미지 + 블루 헤드라인
- Spec Slide : 멤버십 등급별 혜택 비교 카드
- Comparison Slide : 멤버십 도입 전·후 재방문율·매출 비교
- CTA Slide : 블루 버튼 + 멤버십 가입·포인트 조회 CTA
- Tone : Loyal / Rewarding / Customer-centric
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 농협 전용 7개 디자인 프롬프트 ─────────────────────────
const NONGHYUP_PROMPTS = [
  {
    name: '농협 공익 신뢰',
    type: 'NH Public Trust',
    colors: ['#ffffff', '#1b6b2f', '#f5c400'],
    cardBg: 'linear-gradient(135deg, rgba(27,107,47,0.09), rgba(245,196,0,0.06))',
    numBg: 'rgba(27,107,47,0.10)', numColor: '#1b6b2f',
    prompt: `[NotebookLM Slide Design Guide]

Role : 농협 공익·농촌 상생 경영 발표 전문가
Industry : 농협
Type : 농협 공익 신뢰 — 농업인·지역사회와 상생하는 농협 공익 가치 발표 자료

[Color Guide]
Background : #ffffff / #f4faf6 (라이트 그린 틴트)
Text Color : #0e2a18 (딥 그린 블랙) / #3a5a40 (미디엄 그린)
Accent : #1b6b2f (농협 그린) / #f5c400 (황금 옐로우)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
농업인 조합원·지역 사회와 함께 100년을 걸어온 농협의 공익 가치와 상생 경영 철학 전달. 식량 안보·농촌 활력·금융 복지를 정부·지자체·조합원 모두에게 신뢰감 있게 보고. 농업이 살아야 나라가 산다.

[Image Principles]
농촌 들판·수확 이미지. 그린+옐로우 농협 배색. 조합원 활동 사진. 지역 상생 인포그래픽.

[Design Characteristics]
• 농협 그린 + 황금 옐로우 공익 배색
• 세리프 권위 타이포그래피
• 조합원 수·지역 사업 KPI 카드
• 상생 사업 타임라인
• 지역별 농협 사업 지도

[Layout Guide]
- Title Slide : 화이트 + 농촌 이미지 + 그린 세리프 공식 제목
- Spec Slide : 공익 KPI 카드 (조합원 수·농가 소득·지역 기여·대출 지원)
- Comparison Slide : 전년 대비 조합원 혜택·상생 성과 개선 비교
- CTA Slide : 그린 버튼 + 조합 가입·농업 지원 상담 CTA
- Tone : Trustworthy / Community / Heritage
- Slide count : 7 pages
- Font size contrast : 제목 42pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '농협 금융 서비스',
    type: 'NH Financial Services',
    colors: ['#e8f5e9', '#1b6b2f', '#0057a8'],
    cardBg: 'linear-gradient(135deg, rgba(27,107,47,0.09), rgba(0,87,168,0.06))',
    numBg: 'rgba(27,107,47,0.11)', numColor: '#1b6b2f',
    prompt: `[NotebookLM Slide Design Guide]

Role : 농협은행·상호금융 금융 서비스 발표 전문가
Industry : 농협
Type : 농협 금융 서비스 — 농업인·농촌 특화 금융 서비스 소개 자료

[Color Guide]
Background : #e8f5e9 (그린 라이트)
Text Color : #0e2a18 (딥 그린 블랙) / #2a5a38 (미디엄 그린)
Accent : #1b6b2f (농협 그린) / #0057a8 (금융 블루)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
농업인·농촌 조합원을 위한 맞춤형 금융 서비스의 접근성·혜택·신뢰를 강조. 농업 경영자금·농기계 할부·귀농 지원 대출 등 농업 특화 금융 상품 소개. 농협 금융이 농업을 키운다.

[Image Principles]
농협 금융 서비스 이미지. 그린+블루 금융 배색. 금융 상품 인포그래픽. 조합원 혜택 카드.

[Design Characteristics]
• 그린 + 블루 농협 금융 배색
• 금융 상품 카드 레이아웃
• 금리·한도 비교 인포그래픽
• 조합원 우대 혜택 배지
• 디지털 뱅킹 앱 UI 모형

[Layout Guide]
- Title Slide : 그린 배경 + 농협 금융 이미지 + 그린 공식 서비스명
- Spec Slide : 금융 상품 카드 (농업 자금·귀농 대출·예적금·보험)
- Comparison Slide : 일반 은행 vs 농협 금융 농업인 우대 조건 비교
- CTA Slide : 그린 버튼 + 금융 상담·조합 가입 CTA
- Tone : Accessible / Supportive / Community-banking
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '로컬푸드 직매장',
    type: 'Local Food Direct Market',
    colors: ['#fffde7', '#f57f17', '#2e7d32'],
    cardBg: 'linear-gradient(135deg, rgba(245,127,23,0.09), rgba(46,125,50,0.06))',
    numBg: 'rgba(245,127,23,0.12)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 농협 로컬푸드 직매장·농산물 직거래 마케팅 전문가
Industry : 농협
Type : 로컬푸드 직매장 — 지역 농산물 직거래·로컬푸드 유통 혁신 자료

[Color Guide]
Background : #fffde7 (로컬 선샤인 크림)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #f57f17 (수확 오렌지) / #2e7d32 (로컬 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
지역 농가와 소비자를 직접 연결하는 로컬푸드 직매장의 신선함·투명성·지역 경제 기여를 전달. 농가 출하 당일 판매·원산지 투명 공개·농부 스토리로 소비자 신뢰 구축.

[Image Principles]
신선한 지역 농산물 이미지. 오렌지+그린 로컬 배색. 농가 프로필 카드. 직매장 내부 사진.

[Design Characteristics]
• 로컬 오렌지 + 그린 배색
• 농가 스토리 카드 레이아웃
• 원산지 투명 공개 배지
• 농산물 카테고리 아이콘 그리드
• 지역별 출하 농가 지도

[Layout Guide]
- Title Slide : 크림 배경 + 로컬푸드 이미지 + 오렌지 헤드라인
- Spec Slide : 직매장 운영 카드 (품목·농가 수·출하량·가격 경쟁력)
- Comparison Slide : 대형마트 vs 로컬푸드 직매장 신선도·가격 비교
- CTA Slide : 오렌지 버튼 + 직매장 방문·입점 농가 모집 CTA
- Tone : Local / Fresh / Transparent
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '귀농귀촌 희망 가이드',
    type: 'Rural Life Migration Guide',
    colors: ['#f1f8e9', '#558b2f', '#ff8f00'],
    cardBg: 'linear-gradient(135deg, rgba(85,139,47,0.09), rgba(255,143,0,0.06))',
    numBg: 'rgba(85,139,47,0.11)', numColor: '#4a7a28',
    prompt: `[NotebookLM Slide Design Guide]

Role : 귀농·귀촌 지원 사업 홍보 전문가
Industry : 농협
Type : 귀농귀촌 희망 가이드 — 도시 생활자의 귀농·귀촌 전환을 돕는 지원 사업 자료

[Color Guide]
Background : #f1f8e9 (자연 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #558b2f (자연 그린) / #ff8f00 (희망 오렌지)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
도시의 삶에 지친 직장인·은퇴자에게 귀농·귀촌의 새로운 삶을 따뜻하고 실용적으로 소개. 정부·농협 지원 제도·교육 프로그램·성공 사례를 불안을 해소하며 단계별로 안내.

[Image Principles]
농촌 자연·귀농 생활 이미지. 그린+오렌지 희망 배색. 지원 제도 인포그래픽. 성공 귀농인 사례.

[Design Characteristics]
• 자연 그린 + 희망 오렌지 배색
• 귀농 단계별 로드맵 플로우
• 지원 제도·보조금 카드
• 성공 귀농인 스토리 카드
• 지역별 귀농 지원 현황 지도

[Layout Guide]
- Title Slide : 그린 배경 + 농촌 생활 이미지 + 세리프 희망 헤드라인
- Spec Slide : 지원 제도 카드 (교육·창업 자금·주택·멘토링)
- Comparison Slide : 도시 생활 vs 귀농 생활 비용·삶의 질 비교
- CTA Slide : 그린 버튼 + 귀농 상담·교육 신청 CTA
- Tone : Hopeful / Practical / Welcoming
- Slide count : 7 pages
- Font size contrast : 제목 44pt 세리프 / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '친환경 유기농 인증',
    type: 'Organic Certification Brand',
    colors: ['#e8f5e9', '#2e7d32', '#795548'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(121,85,72,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 친환경·유기농 농산물 인증·브랜드화 전문가
Industry : 농협
Type : 친환경 유기농 인증 — 무농약·유기농 인증 농산물 브랜드화 및 유통 자료

[Color Guide]
Background : #e8f5e9 (유기농 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (유기농 그린) / #795548 (어스 브라운)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
농약·화학비료 없이 땅과 사람을 살리는 친환경·유기농 농업의 가치를 소비자와 유통사에게 진정성 있게 전달. 인증 과정·재배 환경·영양 성분을 투명하게 공개. 흙이 건강해야 밥상이 건강하다.

[Image Principles]
유기농 농산물·친환경 농장 이미지. 그린+브라운 자연 배색. 인증 마크 배치. 재배 과정 스토리.

[Design Characteristics]
• 유기농 그린 + 어스 브라운 배색
• 유기농·무농약 인증 배지 시스템
• 재배 과정 타임라인 카드
• 영양 성분 비교 인포그래픽
• 농가 스토리 카드

[Layout Guide]
- Title Slide : 그린 배경 + 유기농 농산물 이미지 + 그린 헤드라인
- Spec Slide : 유기농 상품 카드 (품목·인증·재배지·영양 성분)
- Comparison Slide : 일반 농산물 vs 유기농 영양·잔류농약 비교
- CTA Slide : 그린 버튼 + 유통 제안·직구매 신청 CTA
- Tone : Pure / Transparent / Earth-friendly
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '농업 ESG 리포트',
    type: 'Agriculture ESG Report',
    colors: ['#f5f5f7', '#1d1d1f', '#2e7d32'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(46,125,50,0.10)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 농협·농업법인 ESG 경영 성과 보고 전문가
Industry : 농협
Type : 농업 ESG 리포트 — 농업 탄소 절감·물 절약·지역사회 기여 ESG 보고 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #2e7d32 (ESG 그린) / #0057a8 (책임 블루)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
농업 분야 탄소 저장 기능·물 관리·생물 다양성 보전·농촌 공동체 유지 등 농업의 공익적 가치와 ESG 성과를 정부·투자자·시민에게 투명하게 보고. 농업은 지구의 탄소 창고다.

[Image Principles]
친환경 농업·농촌 공동체 이미지. 그린+블루 ESG 배색. 탄소 흡수 인포그래픽. ESG 성과 차트.

[Design Characteristics]
• ESG 그린 + 책임 블루 배색
• 탄소 흡수·저장 인포그래픽
• 환경·사회·거버넌스 KPI 카드
• 농촌 공동체 기여 수치
• 지속가능 인증 배지 시스템

[Layout Guide]
- Title Slide : 화이트 + 농업 ESG 이미지 + 그린 공식 보고서 제목
- Spec Slide : ESG 성과 KPI 카드 (탄소·물·생물·사회 기여)
- Comparison Slide : 전년 vs 당년 ESG 지표 개선 비교 차트
- CTA Slide : 그린 버튼 + ESG 협력·인증 문의 CTA
- Tone : Responsible / Transparent / Sustainable
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '농협 디지털 혁신',
    type: 'NH Digital Innovation',
    colors: ['#e8f0fe', '#1a73e8', '#2e7d32'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(46,125,50,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 농협 디지털 전환·애그테크·스마트 농업 발표 전문가
Industry : 농협
Type : 농협 디지털 혁신 — 빅데이터·AI·앱 기반 농협 디지털 전환 전략 자료

[Color Guide]
Background : #e8f0fe (디지털 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (디지털 블루) / #2e7d32 (농업 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
농협의 디지털 금융·농업 빅데이터·스마트 농촌 사업을 통한 미래 농업 혁신 전략 발표. NH앱·농업 AI 솔루션·스마트 농촌 인프라 투자를 이사회·정부·파트너에게 전달.

[Image Principles]
디지털 농업·스마트 농촌 이미지. 블루+그린 디지털 배색. 앱 UI 화면. 데이터 대시보드.

[Design Characteristics]
• 라이트 블루 + 그린 디지털 배색
• 디지털 전환 로드맵 타임라인
• 앱 MAU·디지털 금융 KPI
• 스마트 농촌 사업 지도
• AI·빅데이터 플로우 다이어그램

[Layout Guide]
- Title Slide : 블루 배경 + 스마트 농업 이미지 + 블루 혁신 헤드라인
- Spec Slide : 디지털 혁신 사업 카드 (앱·AI·빅데이터·스마트 인프라)
- Comparison Slide : 디지털 전환 전·후 농협 서비스 효율·접근성 비교
- CTA Slide : 블루 버튼 + 디지털 농업 파트너십·협력 CTA
- Tone : Progressive / Innovative / Future-ready
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 스마트팜 전용 7개 디자인 프롬프트 ─────────────────────────
const SMARTFARM_PROMPTS = [
  {
    name: '스마트팜 테크 런칭',
    type: 'Smart Farm Tech Launch',
    colors: ['#0a1628', '#00c896', '#a8e063'],
    cardBg: 'linear-gradient(135deg, rgba(0,200,150,0.09), rgba(168,224,99,0.06))',
    numBg: 'rgba(0,200,150,0.12)', numColor: '#009a72',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스마트팜·애그테크 솔루션 런칭 발표 전문가
Industry : 스마트팜
Type : 스마트팜 테크 런칭 — IoT·AI 기반 스마트팜 솔루션 제품 발표 자료

[Color Guide]
Background : #0a1628 (애그테크 다크 블루)
Text Color : #e0fff4 / #7adbb8 (민트 그레이)
Accent : #00c896 (스마트 민트) / #a8e063 (테크 그린)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
온도·습도·CO₂·양액 농도를 AI가 자동 제어하는 스마트팜 솔루션의 기술 우위를 농업인·투자자·정부에게 임팩트 있게 발표. 수확량 증가·인력 절감·에너지 효율 수치로 ROI 증명.

[Image Principles]
LED 식물 공장·스마트 온실 이미지. 다크+민트·그린 테크 배색. 센서 대시보드 UI. 데이터 플로우.

[Design Characteristics]
• 애그테크 다크 + 민트·그린 배색
• IoT 센서 네트워크 다이어그램
• 수확량·효율 KPI HUD 카드
• AI 제어 플로우 시각화
• 투자 대비 수익 ROI 강조

[Layout Guide]
- Title Slide : 다크 배경 + 스마트팜 이미지 + 민트 글로우 헤드라인
- Spec Slide : 솔루션 기능 카드 (IoT·AI·환경제어·원격 모니터링)
- Comparison Slide : 기존 농법 vs 스마트팜 수확량·비용·인력 비교
- CTA Slide : 민트 버튼 + 솔루션 도입 상담·파트너십 CTA
- Tone : Innovative / Precise / Data-driven
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '수직 농장 식물공장',
    type: 'Vertical Farm Plant Factory',
    colors: ['#0d1a0d', '#39d353', '#b8f0a0'],
    cardBg: 'linear-gradient(135deg, rgba(57,211,83,0.09), rgba(184,240,160,0.06))',
    numBg: 'rgba(57,211,83,0.12)', numColor: '#1e9a36',
    prompt: `[NotebookLM Slide Design Guide]

Role : 수직 농장·식물 공장·실내 농업 사업 발표 전문가
Industry : 스마트팜
Type : 수직 농장 식물공장 — 실내 LED 수직 농장 사업 모델·투자 유치 자료

[Color Guide]
Background : #0d1a0d (플랜트 팩토리 다크 그린)
Text Color : #e0ffe0 / #80cc80 (소프트 그린)
Accent : #39d353 (LED 그린) / #b8f0a0 (라이트 그린)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
도심 속 건물 안에서 365일 날씨와 무관하게 채소·허브·딸기를 재배하는 수직 농장의 혁신성과 사업성을 투자자·유통사·레스토랑 파트너에게 발표. 미래 식량은 건물 안에서 자란다.

[Image Principles]
LED 수직 재배대·식물 공장 이미지. 다크 그린+밝은 LED 그린 배색. 생산 데이터 대시보드. 공급망 플로우.

[Design Characteristics]
• 다크 그린 + LED 그린 임팩트 배색
• 수직 농장 레이어 다이어그램
• 재배 종·생산량 KPI 카드
• 도심 입지 지도 인포그래픽
• ROI·수익 모델 플로우

[Layout Guide]
- Title Slide : 다크 배경 + LED 식물 공장 이미지 + 그린 헤드라인
- Spec Slide : 생산 스펙 카드 (품목·생산량·재배 면적·출하 주기)
- Comparison Slide : 노지 농업 vs 수직 농장 수확량·물·에너지 비교
- CTA Slide : 그린 버튼 + 투자·납품 파트너십 문의 CTA
- Tone : Futuristic / Sustainable / Urban-ag
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스마트 온실 B2B',
    type: 'Smart Greenhouse B2B',
    colors: ['#f4faf6', '#1b6b2f', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(27,107,47,0.09), rgba(0,102,204,0.06))',
    numBg: 'rgba(27,107,47,0.11)', numColor: '#1b6b2f',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스마트 온실·시설 원예 자동화 B2B 솔루션 전문가
Industry : 스마트팜
Type : 스마트 온실 B2B — 농업인·영농법인 대상 스마트 온실 자동화 시스템 제안

[Color Guide]
Background : #f4faf6 (그린 라이트) / #ffffff
Text Color : #0e2a18 (딥 그린 블랙) / #2a5a38 (미디엄 그린)
Accent : #1b6b2f (온실 그린) / #0066cc (테크 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
딸기·토마토·파프리카 재배 농가에게 자동 관수·환기·보온·양액 공급 시스템의 ROI를 데이터로 설득하는 B2B 농업 솔루션 톤. 농사는 경험이지만 스마트팜은 데이터다.

[Image Principles]
스마트 온실 내부 이미지. 그린+블루 B2B 배색. 자동화 시스템 다이어그램. 수확량 비교 차트.

[Design Characteristics]
• 라이트 그린 + 테크 블루 B2B 배색
• 자동화 시스템 플로우차트
• 비용 절감·수확량 ROI 카드
• 도입 단계 타임라인
• 레퍼런스 농가 사례 카드

[Layout Guide]
- Title Slide : 그린 배경 + 스마트 온실 이미지 + 그린 서비스 제목
- Spec Slide : 자동화 시스템 카드 (관수·환기·양액·원격 모니터링)
- Comparison Slide : 수동 관리 vs 스마트 온실 비용·수확량 비교
- CTA Slide : 그린 버튼 + 시스템 도입 상담·견적 CTA
- Tone : Practical / ROI-focused / Agricultural
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '애그테크 스타트업 IR',
    type: 'AgTech Startup IR',
    colors: ['#f5f5f7', '#1d1d1f', '#00c896'],
    cardBg: 'linear-gradient(135deg, rgba(0,200,150,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,200,150,0.10)', numColor: '#009a72',
    prompt: `[NotebookLM Slide Design Guide]

Role : 애그테크·스마트팜 스타트업 투자 유치 IR 전문가
Industry : 스마트팜
Type : 애그테크 스타트업 IR — VC·정부 R&D 대상 스마트팜 스타트업 투자 유치 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #1d1d1f (딥 블랙) / #00c896 (애그테크 민트)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
식량 안보·기후 위기 대응이라는 거대 시장 기회를 기반으로 스마트팜 솔루션의 기술 우위·시장 성장성·수익 모델을 VC와 정부 R&D에게 설득력 있게 피칭.

[Image Principles]
스마트팜·애그테크 이미지. 화이트+민트 IR 배색. 시장 규모 차트. 기술 로드맵 다이어그램.

[Design Characteristics]
• 화이트 + 민트 포인트 IR 배색
• TAM·SAM·SOM 시장 다이어그램
• 기술 차별화 포인트 카드
• 성장 트랙션 차트
• 팀·특허·수상 이력 카드

[Layout Guide]
- Title Slide : 화이트 + 스마트팜 이미지 + 민트 포인트 IR 제목
- Spec Slide : 사업 KPI 카드 (매출·고객 수·특허·수상·수익 모델)
- Comparison Slide : 기존 농업 vs 애그테크 시장 성장성 비교
- CTA Slide : 민트 버튼 + 투자 미팅·R&D 협력 신청 CTA
- Tone : Visionary / Data-backed / Impact-driven
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 핵심 수치 68pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '탄소 중립 농업',
    type: 'Carbon Neutral Agriculture',
    colors: ['#e8f5e9', '#1b5e20', '#0057a8'],
    cardBg: 'linear-gradient(135deg, rgba(27,94,32,0.09), rgba(0,87,168,0.06))',
    numBg: 'rgba(27,94,32,0.11)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 탄소 중립 농업·저탄소 스마트팜 정책 발표 전문가
Industry : 스마트팜
Type : 탄소 중립 농업 — 스마트팜 기반 농업 탄소 절감·넷제로 전략 자료

[Color Guide]
Background : #e8f5e9 (탄소 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #2e6b3e (미디엄 그린)
Accent : #1b5e20 (넷제로 그린) / #0057a8 (기후 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
스마트팜의 정밀 농업으로 비료·농약·에너지 사용을 최소화하고 농업 탄소 배출을 줄이는 넷제로 전략 발표. 정부 탄소 중립 정책 연계 R&D·인증·보조금 활용 방안 제시.

[Image Principles]
친환경 스마트 농업 이미지. 그린+블루 넷제로 배색. 탄소 감축 인포그래픽. 정책 연계 로드맵.

[Design Characteristics]
• 넷제로 그린 + 기후 블루 배색
• 탄소 감축 수치 강조
• 스마트팜 탄소 절감 메커니즘 다이어그램
• 정부 정책 연계 카드
• 저탄소 인증 배지 시스템

[Layout Guide]
- Title Slide : 그린 배경 + 친환경 농업 이미지 + 그린 넷제로 헤드라인
- Spec Slide : 탄소 절감 KPI 카드 (에너지·비료·물·CO₂ 감축)
- Comparison Slide : 기존 농업 vs 스마트팜 탄소 발자국 비교
- CTA Slide : 그린 버튼 + 넷제로 농업 협력·인증 신청 CTA
- Tone : Green / Responsible / Policy-aligned
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스마트팜 교육 아카데미',
    type: 'Smart Farm Education Academy',
    colors: ['#fff8e1', '#ff8f00', '#1b6b2f'],
    cardBg: 'linear-gradient(135deg, rgba(255,143,0,0.09), rgba(27,107,47,0.06))',
    numBg: 'rgba(255,143,0,0.12)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스마트팜 창업 교육·청년 농업인 양성 아카데미 전문가
Industry : 스마트팜
Type : 스마트팜 교육 아카데미 — 청년 농업인·귀농 창업자 스마트팜 교육 과정 자료

[Color Guide]
Background : #fff8e1 (교육 크림)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #ff8f00 (에너지 오렌지) / #1b6b2f (농업 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
청년 귀농인·스마트팜 창업 희망자에게 IoT·센서·재배 기술·사업 계획까지 실습 중심으로 가르치는 스마트팜 아카데미 교육 과정 홍보. 기술을 배우면 미래 농업이 보인다.

[Image Principles]
스마트팜 교육 실습 이미지. 오렌지+그린 교육 배색. 커리큘럼 인포그래픽. 수료생 사례 카드.

[Design Characteristics]
• 크림 + 오렌지·그린 교육 배색
• 교육 커리큘럼 타임라인
• 실습 장비·시설 카드
• 수료 후 창업 성공 사례 카드
• 정부 지원 교육비 인포그래픽

[Layout Guide]
- Title Slide : 크림 배경 + 교육 실습 이미지 + 오렌지 아카데미 헤드라인
- Spec Slide : 교육 과정 카드 (기초·심화·실습·창업 계획 단계)
- Comparison Slide : 독학 vs 아카데미 교육 후 창업 성공률 비교
- CTA Slide : 오렌지 버튼 + 교육 신청·장학금 문의 CTA
- Tone : Empowering / Hands-on / Future-ag
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '글로벌 스마트팜 수출',
    type: 'Global Smart Farm Export',
    colors: ['#001233', '#00c896', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(0,200,150,0.09), rgba(255,214,0,0.06))',
    numBg: 'rgba(0,200,150,0.12)', numColor: '#009a72',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스마트팜 기술 해외 수출·글로벌 애그테크 파트너십 전문가
Industry : 스마트팜
Type : 글로벌 스마트팜 수출 — 중동·동남아·아프리카 시장 스마트팜 기술 수출 자료

[Color Guide]
Background : #001233 (글로벌 딥 네이비)
Text Color : #ffffff / #aacccc (아이스 민트)
Accent : #00c896 (글로벌 민트) / #ffd600 (파트너 골드)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
물 부족·식량 위기를 겪는 중동·아프리카·동남아에 한국 스마트팜 기술을 수출하는 글로벌 전략 발표. ODA·민간 투자·정부 간 협력(G2G)을 통한 K-애그테크 세계화.

[Image Principles]
사막·건조 지역 스마트팜 이미지. 네이비+민트+골드 글로벌 배색. 세계 수출 지도. 파트너십 현황.

[Design Characteristics]
• 딥 네이비 + 민트·골드 글로벌 배색
• 세계 수출 현황 지도 시각화
• 시장별 니즈·솔루션 카드
• 수출 성과 KPI 차트
• 글로벌 파트너 로고 그리드

[Layout Guide]
- Title Slide : 네이비 배경 + 글로벌 스마트팜 이미지 + 민트 헤드라인
- Spec Slide : 수출 현황 카드 (국가·프로젝트 규모·기술·파트너)
- Comparison Slide : 주요 수출국별 농업 환경·솔루션 적합성 비교
- CTA Slide : 골드 버튼 + 글로벌 파트너십·수출 상담 CTA
- Tone : Global / Impactful / Technology-export
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 지자체 전용 7개 디자인 프롬프트 ─────────────────────────
const LOCALG_PROMPTS = [
  {
    name: '시정 성과 공식 보고',
    type: 'Municipal Performance Report',
    colors: ['#ffffff', '#003d82', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,61,130,0.08), rgba(0,102,204,0.05))',
    numBg: 'rgba(0,61,130,0.10)', numColor: '#003d82',
    prompt: `[NotebookLM Slide Design Guide]

Role : 지방자치단체 시정 성과 공식 보고 전문가
Industry : 지자체
Type : 시정 성과 공식 보고 — 시장·군수·구청장의 연간 시정 성과 보고 발표 자료

[Color Guide]
Background : #ffffff / #f0f6ff (라이트 블루 틴트)
Text Color : #0a1628 (딥 네이비) / #3d5a8a (블루 그레이)
Accent : #003d82 (공식 네이비) / #0066cc (시정 블루)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
시의회·시민·언론에 연간 시정 성과와 예산 집행·주요 사업 진행 현황을 투명하고 권위 있게 보고하는 공식 발표 톤. 수치와 사실로 신뢰를 쌓고 다음 연도 계획을 설득력 있게 제시.

[Image Principles]
지역 랜드마크·시민 행정 이미지. 네이비+블루 공식 배색. 재정 현황 차트. 사업 현황 지도.

[Design Characteristics]
• 공식 네이비 + 시정 블루 배색
• 세리프 권위 타이포그래피
• 시정 KPI 대시보드
• 예산 집행률 인포그래픽
• 주요 사업 현황 지도

[Layout Guide]
- Title Slide : 화이트 + 지역 이미지 + 네이비 세리프 공식 제목
- Spec Slide : 시정 KPI 카드 (예산·사업 달성·인구·재정 자립도)
- Comparison Slide : 전년 대비 주요 시정 지표 개선 비교 차트
- CTA Slide : 네이비 버튼 + 시민 의견 수렴·다음 연도 계획 안내
- Tone : Official / Transparent / Accountable
- Slide count : 7 pages
- Font size contrast : 제목 42pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '지역 개발 비전',
    type: 'Regional Development Vision',
    colors: ['#0a1628', '#c9a84c', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.10), rgba(0,102,204,0.06))',
    numBg: 'rgba(201,168,76,0.13)', numColor: '#9a7a20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 지역 개발·도시 재생·마스터플랜 발표 전문가
Industry : 지자체
Type : 지역 개발 비전 — 도시 재생·산업단지·교통 인프라 개발 비전 발표 자료

[Color Guide]
Background : #0a1628 (비전 딥 네이비)
Text Color : #f5f5f0 (크림 화이트) / #b0b8c8 (실버 그레이)
Accent : #c9a84c (발전 골드) / #0066cc (인프라 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
지역 경제 활성화·인구 유입·일자리 창출을 위한 대규모 개발 프로젝트의 비전과 로드맵을 주민·투자자·중앙정부에 웅장하게 발표. 지역의 내일을 오늘 설계한다.

[Image Principles]
도시 개발 조감도·랜드마크 렌더링. 다크 네이비+골드 비전 배색. 마스터플랜 지도. 개발 타임라인.

[Design Characteristics]
• 비전 다크 + 골드·블루 배색
• 마스터플랜 지도 인포그래픽
• 개발 단계별 타임라인 로드맵
• 경제 효과 KPI 강조 카드
• 조감도 풀블리드 레이아웃

[Layout Guide]
- Title Slide : 다크 배경 + 개발 조감도 + 골드 비전 헤드라인
- Spec Slide : 개발 사업 카드 (위치·규모·투자액·완공 시기·효과)
- Comparison Slide : 개발 전·후 지역 경제·인구·일자리 변화 비교
- CTA Slide : 골드 버튼 + 투자 유치·사업 협력 문의 CTA
- Tone : Visionary / Bold / Future-building
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '시민 소통 캠페인',
    type: 'Citizen Communication Campaign',
    colors: ['#e8f0fe', '#1a73e8', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 지자체 시민 소통·공공 캠페인 기획 전문가
Industry : 지자체
Type : 시민 소통 캠페인 — 주민 참여·공공 캠페인·정책 홍보 자료

[Color Guide]
Background : #e8f0fe (소통 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (소통 블루) / #34c759 (참여 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
주민 참여·환경 캠페인·생활 안전·문화 행사 등 지자체 공공 정책을 시민이 쉽고 친근하게 이해하도록 설계된 소통 발표 톤. 딱딱한 행정을 따뜻한 캠페인으로 바꾼다.

[Image Principles]
시민 참여·캠페인 이미지. 블루+그린 소통 배색. 정책 인포그래픽. 참여 현황 차트.

[Design Characteristics]
• 라이트 블루 + 참여 그린 배색
• 캠페인 목표·성과 KPI 카드
• 참여 방법 플로우 일러스트
• QR 코드·온라인 참여 연동
• 친근한 아이콘 일러스트 요소

[Layout Guide]
- Title Slide : 블루 배경 + 시민 이미지 + 블루 캠페인 헤드라인
- Spec Slide : 캠페인 내용 카드 (목표·기간·참여 방법·혜택)
- Comparison Slide : 캠페인 전·후 시민 인식·참여율 변화 비교
- CTA Slide : 그린 버튼 + 캠페인 참여·신청 CTA
- Tone : Accessible / Engaging / Community
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스마트 시티 디지털',
    type: 'Smart City Digital Gov',
    colors: ['#0a1628', '#00c8ff', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(0,200,255,0.08), rgba(124,58,237,0.06))',
    numBg: 'rgba(0,200,255,0.12)', numColor: '#0097c8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스마트시티·디지털 행정·전자정부 발표 전문가
Industry : 지자체
Type : 스마트 시티 디지털 — IoT·빅데이터·AI 기반 스마트시티 구축 전략 자료

[Color Guide]
Background : #0a1628 (스마트 시티 다크)
Text Color : #e0f4ff / #7ab8d8 (아이스 블루)
Accent : #00c8ff (스마트 사이언) / #7c3aed (AI 퍼플)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
교통·에너지·안전·행정 서비스를 AI·IoT로 연결하는 스마트시티 구축 전략을 중앙정부·기업·시민에게 발표. 데이터 기반 행정으로 시민 삶의 질을 높이는 미래 도시 비전 전달.

[Image Principles]
스마트시티 조감도·디지털 행정 UI. 다크+사이언·퍼플 배색. 도시 데이터 대시보드. IoT 네트워크 다이어그램.

[Design Characteristics]
• 스마트 다크 + 사이언·퍼플 배색
• 스마트시티 아키텍처 다이어그램
• 서비스별 KPI HUD 카드
• 디지털 행정 플로우 시각화
• 투자·효과 ROI 강조

[Layout Guide]
- Title Slide : 다크 배경 + 스마트시티 이미지 + 사이언 글로우 헤드라인
- Spec Slide : 스마트시티 사업 카드 (교통·에너지·안전·행정 디지털화)
- Comparison Slide : 기존 도시 vs 스마트시티 시민 서비스 효율 비교
- CTA Slide : 사이언 버튼 + 스마트시티 협력·투자 문의 CTA
- Tone : Innovative / Future-city / Data-driven
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '지역 관광 문화 홍보',
    type: 'Local Tourism Culture PR',
    colors: ['#fff8e1', '#e65100', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(230,81,0,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(230,81,0,0.10)', numColor: '#bf4000',
    prompt: `[NotebookLM Slide Design Guide]

Role : 지역 관광·문화·축제 홍보 발표 전문가
Industry : 지자체
Type : 지역 관광 문화 홍보 — 지역 관광지·축제·문화 자원 국내외 홍보 자료

[Color Guide]
Background : #fff8e1 (관광 웜 크림)
Text Color : #1a0800 (딥 브라운) / #5a2800 (미디엄 브라운)
Accent : #e65100 (활력 오렌지) / #1565c0 (신뢰 블루)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
지역 고유의 자연·문화·음식·축제를 국내외 관광객에게 매력적으로 소개하는 관광 홍보 톤. 지역 브랜드 이미지를 높이고 방문객·관광 수입 증대를 목표로 한다. 이 도시가 당신을 기다린다.

[Image Principles]
지역 명소·축제 이미지. 오렌지+블루 활기 배색. 관광 지도 인포그래픽. 방문객 수 차트.

[Design Characteristics]
• 크림 + 오렌지·블루 관광 배색
• 세리프 지역 감성 타이포
• 관광 명소 갤러리 그리드
• 관광 코스 지도 인포그래픽
• 방문객·경제 효과 수치 강조

[Layout Guide]
- Title Slide : 크림 배경 + 지역 명소 이미지 + 오렌지 세리프 헤드라인
- Spec Slide : 관광 자원 카드 (명소·축제·음식·체험·숙박)
- Comparison Slide : 전년 대비 방문객·관광 수입 성장 비교
- CTA Slide : 오렌지 버튼 + 관광 안내·여행 패키지 신청 CTA
- Tone : Inviting / Cultural / Proud
- Slide count : 7 pages
- Font size contrast : 제목 46pt 세리프 / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '지자체 ESG 탄소 중립',
    type: 'Local Gov ESG Carbon Neutral',
    colors: ['#e8f5e9', '#1b5e20', '#0057a8'],
    cardBg: 'linear-gradient(135deg, rgba(27,94,32,0.09), rgba(0,87,168,0.06))',
    numBg: 'rgba(27,94,32,0.11)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 지자체 탄소 중립·녹색 도시·환경 정책 발표 전문가
Industry : 지자체
Type : 지자체 ESG 탄소 중립 — 2050 탄소중립·녹색 도시 전환 계획 발표 자료

[Color Guide]
Background : #e8f5e9 (그린 시티 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #2e6b3e (미디엄 그린)
Accent : #1b5e20 (탄소중립 그린) / #0057a8 (넷제로 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
2050 탄소중립 달성을 위한 지자체 단위 재생에너지·대중교통·녹지 확충·건물 에너지 효율화 계획을 시민·중앙정부·국제기구에 책임감 있게 발표. 우리 도시가 기후 위기에 응답한다.

[Image Principles]
녹색 도시·태양광·자전거 이미지. 그린+블루 넷제로 배색. 탄소 감축 로드맵. 재생에너지 비중 차트.

[Design Characteristics]
• 그린 시티 + 넷제로 블루 배색
• 탄소 감축 로드맵 타임라인
• 재생에너지 비중 인포그래픽
• 그린 정책별 KPI 카드
• 국제 기후 협약 연계 배지

[Layout Guide]
- Title Slide : 그린 배경 + 녹색 도시 이미지 + 그린 넷제로 헤드라인
- Spec Slide : 탄소중립 사업 KPI 카드 (에너지·교통·건물·녹지)
- Comparison Slide : 기준 연도 vs 감축 목표 연도 탄소 배출 비교
- CTA Slide : 그린 버튼 + 시민 참여·기업 협력 CTA
- Tone : Responsible / Green / Future-committed
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '지역 경제 투자 유치',
    type: 'Regional Investment Attraction',
    colors: ['#f5f5f7', '#1d1d1f', '#003d82'],
    cardBg: 'linear-gradient(135deg, rgba(0,61,130,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,61,130,0.10)', numColor: '#003d82',
    prompt: `[NotebookLM Slide Design Guide]

Role : 지자체 기업 투자 유치·산업단지·규제자유특구 발표 전문가
Industry : 지자체
Type : 지역 경제 투자 유치 — 기업·투자자 대상 지역 투자 환경·인센티브 발표 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #003d82 (투자 네이비) / #0066cc (인센티브 블루)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
기업 본사·공장·R&D 센터 유치를 위한 지역 경제 환경·인프라·인센티브를 기업 임원·투자자에게 설득력 있게 발표. 규제자유특구·세제 혜택·부지 지원 등 구체적 조건 제시.

[Image Principles]
산업단지·기업 유치 이미지. 네이비+블루 비즈니스 배색. 입지 분석 지도. 인센티브 비교 표.

[Design Characteristics]
• 화이트 + 투자 네이비 배색
• 입지 경쟁력 인포그래픽 지도
• 인센티브 패키지 비교 카드
• 기 유치 기업 로고 그리드
• 경제 파급 효과 KPI 강조

[Layout Guide]
- Title Slide : 화이트 + 지역 산업 이미지 + 네이비 공식 IR 제목
- Spec Slide : 투자 인센티브 카드 (세제·부지·금융·인력·규제 특례)
- Comparison Slide : 경쟁 지자체 대비 우리 지역 투자 환경 비교
- CTA Slide : 네이비 버튼 + 투자 상담·현장 방문 신청 CTA
- Tone : Competitive / Business-friendly / Opportunity
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 공기업 전용 7개 디자인 프롬프트 ─────────────────────────
const PUBCORP_PROMPTS = [
  {
    name: '공기업 연간 경영 보고',
    type: 'Public Corp Annual Report',
    colors: ['#ffffff', '#003d82', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,61,130,0.08), rgba(0,102,204,0.05))',
    numBg: 'rgba(0,61,130,0.10)', numColor: '#003d82',
    prompt: `[NotebookLM Slide Design Guide]

Role : 공기업·준정부기관 연간 경영 성과 보고 전문가
Industry : 공기업
Type : 공기업 연간 경영 보고 — 이사회·주무부처·국민 대상 연간 경영 성과 보고 자료

[Color Guide]
Background : #ffffff / #f0f6ff (라이트 블루 틴트)
Text Color : #0a1628 (딥 네이비) / #3d5a8a (블루 그레이)
Accent : #003d82 (공기업 네이비) / #0066cc (공식 블루)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
한국전력·코레일·LH·수자원공사 수준 공기업의 경영 성과·재무 현황·공공 서비스 달성도를 주무부처·기획재정부·국민에게 투명하고 권위 있게 보고. 공공의 가치를 수치로 증명한다.

[Image Principles]
공기업 주요 시설·서비스 이미지. 네이비+블루 공식 배색. 재무 성과 차트. 공공 서비스 KPI.

[Design Characteristics]
• 공식 네이비 + 블루 배색
• 세리프 권위 타이포그래피
• 경영 KPI 대시보드
• 재무 현황 차트·표
• 공공 서비스 달성도 인포그래픽

[Layout Guide]
- Title Slide : 화이트 + 주요 시설 이미지 + 네이비 세리프 공식 보고서 제목
- Spec Slide : 경영 KPI 카드 (매출·영업이익·부채비율·고객 만족도)
- Comparison Slide : 전년 대비 주요 경영 지표 개선 비교 차트
- CTA Slide : 네이비 버튼 + 감사·평가 기관 협력 안내 CTA
- Tone : Official / Transparent / Accountable
- Slide count : 7 pages
- Font size contrast : 제목 42pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 65단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '공공 인프라 사업',
    type: 'Public Infrastructure Project',
    colors: ['#0a1628', '#c9a84c', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.10), rgba(0,102,204,0.06))',
    numBg: 'rgba(201,168,76,0.13)', numColor: '#9a7a20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 공공 인프라·SOC·에너지 사업 발표 전문가
Industry : 공기업
Type : 공공 인프라 사업 — 도로·철도·에너지·수자원 SOC 사업 발표 자료

[Color Guide]
Background : #0a1628 (인프라 딥 네이비)
Text Color : #f5f5f0 (크림 화이트) / #b0b8c8 (실버 그레이)
Accent : #c9a84c (인프라 골드) / #0066cc (공공 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
국가 경제의 혈관인 도로·철도·전력·수자원 SOC 사업의 필요성·경제성·사회적 가치를 국회·기재부·지역 주민에게 웅장하고 설득력 있게 발표. 이 사업이 대한민국을 움직인다.

[Image Principles]
대규모 인프라 시설 이미지. 네이비+골드 권위 배색. 사업 노선 지도. 경제 파급 효과 차트.

[Design Characteristics]
• 인프라 다크 + 골드·블루 배색
• 사업 위치·노선 지도 인포그래픽
• 사업 규모·투자액 KPI 강조
• 경제 파급 효과 수치 카드
• 공정 단계 타임라인 로드맵

[Layout Guide]
- Title Slide : 다크 배경 + 인프라 시설 이미지 + 골드 사업명 헤드라인
- Spec Slide : 사업 개요 카드 (위치·규모·투자액·공기·기대 효과)
- Comparison Slide : 사업 전·후 지역 경제·이동 시간·비용 비교
- CTA Slide : 골드 버튼 + 사업 협력·투자 협의 CTA
- Tone : Monumental / Impactful / Public-value
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '공기업 ESG 경영',
    type: 'Public Corp ESG Management',
    colors: ['#e8f5e9', '#1b5e20', '#0057a8'],
    cardBg: 'linear-gradient(135deg, rgba(27,94,32,0.09), rgba(0,87,168,0.06))',
    numBg: 'rgba(27,94,32,0.11)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 공기업 ESG 경영 성과 공시 보고 전문가
Industry : 공기업
Type : 공기업 ESG 경영 — 환경·사회·지배구조 공기업 ESG 경영 성과 보고 자료

[Color Guide]
Background : #e8f5e9 (ESG 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #2e6b3e (미디엄 그린)
Accent : #1b5e20 (ESG 그린) / #0057a8 (책임 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
탄소 배출 감축·안전 경영·청렴도·사회적 가치 창출 등 공기업 ESG 경영의 성과를 기획재정부·감사원·시민사회에 투명하게 공시. 공공이 ESG를 선도한다.

[Image Principles]
친환경·안전·청렴 경영 이미지. 그린+블루 ESG 배색. 탄소 감축 인포그래픽. ESG 등급 카드.

[Design Characteristics]
• ESG 그린 + 책임 블루 배색
• ESG 3대 영역 KPI 대시보드
• 탄소 감축 로드맵 타임라인
• 사회적 가치 창출 수치 강조
• ESG 인증·등급 배지 시스템

[Layout Guide]
- Title Slide : 그린 배경 + ESG 경영 이미지 + 그린 공식 ESG 제목
- Spec Slide : ESG KPI 카드 (탄소·안전·청렴·사회 가치·지배구조)
- Comparison Slide : 전년 vs 당년 ESG 지표 개선 비교 차트
- CTA Slide : 그린 버튼 + ESG 협력·감사 대응 안내 CTA
- Tone : Responsible / Transparent / Public-interest
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '공공 디지털 혁신',
    type: 'Public Digital Innovation',
    colors: ['#e8f0fe', '#1a73e8', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(124,58,237,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 공기업 디지털 전환·DX 전략 발표 전문가
Industry : 공기업
Type : 공공 디지털 혁신 — AI·빅데이터·클라우드 기반 공기업 DX 전략 자료

[Color Guide]
Background : #e8f0fe (디지털 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (DX 블루) / #7c3aed (AI 퍼플)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
공공 서비스의 AI 자동화·클라우드 전환·디지털 민원 처리로 비용 절감과 서비스 품질을 동시에 향상시키는 공기업 DX 전략을 이사회·주무부처에 발표. 공공도 혁신한다.

[Image Principles]
디지털 공공 서비스 이미지. 블루+퍼플 DX 배색. AI 처리 플로우. 서비스 효율 대시보드.

[Design Characteristics]
• 라이트 블루 + AI 퍼플 DX 배색
• DX 전환 로드맵 타임라인
• AI·클라우드 서비스 KPI 카드
• 디지털 민원 처리 플로우
• 비용 절감·효율 향상 수치

[Layout Guide]
- Title Slide : 블루 배경 + 디지털 서비스 이미지 + 블루 DX 헤드라인
- Spec Slide : DX 사업 카드 (AI·클라우드·빅데이터·디지털 민원)
- Comparison Slide : DX 전·후 처리 시간·비용·만족도 비교
- CTA Slide : 블루 버튼 + DX 파트너십·기술 협력 CTA
- Tone : Progressive / Efficient / Public-serving
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '공기업 안전 경영',
    type: 'Public Corp Safety Management',
    colors: ['#fff8e1', '#ff8f00', '#003d82'],
    cardBg: 'linear-gradient(135deg, rgba(255,143,0,0.09), rgba(0,61,130,0.06))',
    numBg: 'rgba(255,143,0,0.12)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 공기업 산업안전·중대재해처벌법 대응 안전 경영 전문가
Industry : 공기업
Type : 공기업 안전 경영 — 중대재해 예방·안전문화 정착·PSM 안전 관리 보고 자료

[Color Guide]
Background : #fff8e1 (안전 크림 옐로우)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #ff8f00 (안전 오렌지) / #003d82 (책임 네이비)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
중대재해처벌법 시행에 대응한 공기업 안전 경영 체계 구축·안전문화 정착·무사고 달성 현황을 경영진·감독기관·노조에 보고하는 안전 최우선 톤. 사람이 먼저다.

[Image Principles]
안전 장비·현장 점검 이미지. 오렌지+네이비 안전 배색. 재해율 감소 차트. 안전 투자 현황.

[Design Characteristics]
• 안전 오렌지 + 책임 네이비 배색
• 안전 KPI 대시보드
• 중대재해 예방 체계 플로우
• 안전 투자·교육 이수 현황
• 무재해 달성 현황 강조 배지

[Layout Guide]
- Title Slide : 크림 배경 + 안전 경영 이미지 + 오렌지 안전 헤드라인
- Spec Slide : 안전 KPI 카드 (재해율·무재해 일수·안전 교육·투자액)
- Comparison Slide : 전년 vs 당년 재해율·안전 투자 개선 비교
- CTA Slide : 오렌지 버튼 + 안전 경영 인증·협력 문의 CTA
- Tone : Safety-first / Accountable / Preventive
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 핵심 수치 68pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '공공 서비스 혁신',
    type: 'Public Service Innovation',
    colors: ['#f5f5f7', '#1d1d1f', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(52,199,89,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(52,199,89,0.10)', numColor: '#1e9a3a',
    prompt: `[NotebookLM Slide Design Guide]

Role : 공공 서비스 혁신·국민 편익 증진 발표 전문가
Industry : 공기업
Type : 공공 서비스 혁신 — 국민 체감 서비스 개선·고객 만족도 향상 성과 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #1d1d1f (딥 블랙) / #34c759 (혁신 그린)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
국민이 직접 느끼는 공공 서비스 개선 성과를 고객 만족도·민원 처리 시간 단축·디지털 전환 효과로 증명하는 국민 중심 서비스 혁신 보고 톤. 공기업의 변화가 국민 삶을 바꾼다.

[Image Principles]
고객 서비스·국민 생활 이미지. 화이트+그린 혁신 배색. 고객 만족도 차트. 서비스 개선 인포그래픽.

[Design Characteristics]
• 화이트 + 혁신 그린 포인트 배색
• 고객 만족도 KPI 대시보드
• 서비스 개선 Before/After 카드
• 민원 처리 단축 수치 강조
• 국민 의견 반영 현황 카드

[Layout Guide]
- Title Slide : 화이트 + 서비스 이미지 + 그린 혁신 헤드라인
- Spec Slide : 서비스 혁신 성과 카드 (만족도·처리시간·디지털전환·민원)
- Comparison Slide : 혁신 전·후 주요 서비스 지표 개선 비교
- CTA Slide : 그린 버튼 + 국민 의견 제안·서비스 문의 CTA
- Tone : People-first / Innovative / Impactful
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 14pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '공기업 채용 브랜딩',
    type: 'Public Corp Talent Branding',
    colors: ['#e8f0fe', '#1a73e8', '#ff9500'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(255,149,0,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 공기업 채용·인재 브랜딩·NCS 채용 안내 전문가
Industry : 공기업
Type : 공기업 채용 브랜딩 — 청년 취준생 대상 공기업 채용 설명·입사 지원 안내 자료

[Color Guide]
Background : #e8f0fe (채용 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (채용 블루) / #ff9500 (기회 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
취업준비생에게 공기업의 채용 절차·직무·복리후생·성장 기회를 명확하고 매력적으로 소개하는 채용 브랜딩 톤. NCS 기반 채용·블라인드 채용 프로세스를 투명하게 안내.

[Image Principles]
젊은 직원·공기업 근무 환경 이미지. 블루+오렌지 채용 배색. 채용 프로세스 플로우. 복리후생 인포그래픽.

[Design Characteristics]
• 라이트 블루 + 오렌지 채용 배색
• 채용 프로세스 단계 플로우
• 직무별 업무·역량 카드
• 복리후생 패키지 인포그래픽
• 현직자 인터뷰 인용 카드

[Layout Guide]
- Title Slide : 블루 배경 + 젊은 직원 이미지 + 블루 채용 헤드라인
- Spec Slide : 직무 소개 카드 (직무명·업무·필요 역량·성장 경로)
- Comparison Slide : 공기업 복리후생·안정성 vs 민간 기업 비교
- CTA Slide : 오렌지 버튼 + 채용 공고·지원서 제출 CTA
- Tone : Welcoming / Transparent / Opportunity
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 여행사 전용 7개 디자인 프롬프트 ─────────────────────────
const TRAVEL_PROMPTS = [
  {
    name: '럭셔리 여행 큐레이션',
    type: 'Luxury Travel Curation',
    colors: ['#0c0c14', '#d4af37', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(212,175,55,0.10), rgba(12,12,20,0.06))',
    numBg: 'rgba(212,175,55,0.14)', numColor: '#9a7a18',
    prompt: `[NotebookLM Slide Design Guide]

Role : 럭셔리 여행·프리미엄 투어 큐레이션 전문가
Industry : 여행사
Type : 럭셔리 여행 큐레이션 — VVIP 맞춤 프라이빗 여행 패키지 제안 자료

[Color Guide]
Background : #0c0c14 (럭셔리 다크)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #d4af37 (럭셔리 골드) / #e8c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
전용기·프라이빗 빌라·미슐랭 다이닝·컨시어지 서비스로 구성된 최상위 프리미엄 여행 패키지를 VVIP 고객에게 제안하는 극도로 절제된 럭셔리 톤. 여행은 삶의 예술이다.

[Image Principles]
프라이빗 리조트·럭셔리 여행 이미지. 다크+골드 럭셔리 배색. 세계 명소 클로즈업. 프리미엄 서비스 쇼케이스.

[Design Characteristics]
• 럭셔리 다크 + 챔페인 골드 배색
• 세리프 쿠튀르 타이포그래피
• 여행지 풀블리드 갤러리 레이아웃
• 패키지 구성 VIP 카드
• 골드 라인 섹션 구분

[Layout Guide]
- Title Slide : 다크 배경 + 럭셔리 리조트 이미지 + 골드 세리프 투어 제목
- Spec Slide : 패키지 구성 카드 (일정·숙박·다이닝·이동·컨시어지)
- Comparison Slide : 스탠다드 vs 프리미엄 vs VVIP 패키지 비교
- CTA Slide : 골드 버튼 + VIP 1:1 여행 컨설팅 예약 CTA
- Tone : Exclusive / Artisanal / World-class
- Slide count : 7 pages
- Font size contrast : 제목 52pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '글로벌 패키지 에너지',
    type: 'Global Package Energy',
    colors: ['#001233', '#0066cc', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, rgba(0,102,204,0.09), rgba(255,107,0,0.06))',
    numBg: 'rgba(0,102,204,0.12)', numColor: '#0050a0',
    prompt: `[NotebookLM Slide Design Guide]

Role : 해외 패키지 여행·단체 투어 마케팅 전문가
Industry : 여행사
Type : 글로벌 패키지 에너지 — 유럽·동남아·미주 인기 패키지 여행 상품 소개 자료

[Color Guide]
Background : #001233 (글로벌 딥 네이비)
Text Color : #ffffff / #aaccee (아이스 블루)
Accent : #0066cc (여행 블루) / #ff6b00 (설렘 오렌지)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
합리적 가격에 최고의 여행 경험을 제공하는 패키지 투어의 설렘과 실용성을 동시에 전달. 인기 노선·특가 얼리버드·단체 할인 등 가격 경쟁력과 일정 퀄리티를 강조.

[Image Principles]
세계 유명 여행지 이미지. 네이비+블루+오렌지 설렘 배색. 여행 일정 인포그래픽. 특가 배지.

[Design Characteristics]
• 딥 네이비 + 여행 블루·오렌지 배색
• 여행지 갤러리 그리드 레이아웃
• 일정표 타임라인 카드
• 특가·조기 마감 배지 시스템
• 포함·불포함 내역 인포그래픽

[Layout Guide]
- Title Slide : 네이비 배경 + 여행지 이미지 + 블루+오렌지 헤드라인
- Spec Slide : 패키지 상품 카드 (여행지·일수·가격·포함 사항)
- Comparison Slide : 주요 여행지별 패키지 가격·일정·인기도 비교
- CTA Slide : 오렌지 버튼 + 얼리버드 예약·상담 신청 CTA
- Tone : Exciting / Value-driven / Wanderlust
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '허니문 로맨틱',
    type: 'Honeymoon Romantic',
    colors: ['#fff0f5', '#e91e63', '#c9a84c'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.07), rgba(201,168,76,0.06))',
    numBg: 'rgba(233,30,99,0.09)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 허니문·신혼여행·커플 여행 전문 기획사 전문가
Industry : 여행사
Type : 허니문 로맨틱 — 신혼부부·커플 맞춤 허니문 패키지 제안 자료

[Color Guide]
Background : #fff0f5 (로맨틱 핑크 화이트)
Text Color : #2a0a18 (딥 로즈) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (허니문 핑크) / #c9a84c (웨딩 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
인생 가장 특별한 첫 여행을 완벽하게 만들어주는 허니문 패키지의 설레임과 로맨스를 전달. 몰디브·발리·유럽 등 인기 허니문 여행지별 맞춤 제안과 스페셜 케어 서비스 강조.

[Image Principles]
허니문 리조트·커플 이미지. 핑크+골드 로맨틱 배색. 숙소 인테리어 클로즈업. 패키지 구성 카드.

[Design Characteristics]
• 로맨틱 핑크 + 웨딩 골드 배색
• 세리프 로맨틱 타이포그래피
• 여행지별 허니문 쇼케이스
• 스페셜 케어 서비스 배지
• 커플 리뷰 인용 카드

[Layout Guide]
- Title Slide : 핑크 배경 + 허니문 리조트 이미지 + 골드 세리프 헤드라인
- Spec Slide : 허니문 패키지 카드 (여행지·일수·숙소·스페셜 서비스)
- Comparison Slide : 인기 허니문 여행지별 날씨·가격·로맨스 비교
- CTA Slide : 핑크 버튼 + 허니문 무료 상담·맞춤 견적 CTA
- Tone : Romantic / Special / Memorable
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '자유여행 플랫폼',
    type: 'FIT Travel Platform',
    colors: ['#e8f0fe', '#1a73e8', '#ff9500'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(255,149,0,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 자유여행·FIT·여행 플랫폼 마케팅 전문가
Industry : 여행사
Type : 자유여행 플랫폼 — 항공+호텔+투어 자유 조합 여행 플랫폼 서비스 자료

[Color Guide]
Background : #e8f0fe (플랫폼 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (플랫폼 블루) / #ff9500 (탐험 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
클룩·마이리얼트립·에어비앤비 경쟁 구도에서 AI 일정 추천·현지 투어 큐레이션·실시간 가격 비교로 차별화하는 자유여행 플랫폼 성장 전략 발표. 나만의 여행을 가장 쉽게.

[Image Principles]
자유여행·배낭 라이프스타일 이미지. 블루+오렌지 플랫폼 배색. 앱 UI 화면. 여행지 갤러리.

[Design Characteristics]
• 라이트 블루 + 오렌지 플랫폼 배색
• 앱 UI 스크린 모형
• AI 일정 추천 플로우 다이어그램
• GMV·MAU 성장 트랙션 차트
• 현지 투어 큐레이션 카드

[Layout Guide]
- Title Slide : 블루 배경 + 여행 앱 UI + 블루 플랫폼 헤드라인
- Spec Slide : 플랫폼 기능 카드 (항공·호텔·투어·AI 추천·리뷰)
- Comparison Slide : 기존 패키지 vs 자유여행 플랫폼 유연성·비용 비교
- CTA Slide : 블루 버튼 + 앱 설치·첫 여행 할인 CTA
- Tone : Flexible / Digital / Explorer-first
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'K-관광 인바운드',
    type: 'K-Tourism Inbound',
    colors: ['#1a1a2e', '#e91e63', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.09), rgba(255,214,0,0.06))',
    numBg: 'rgba(233,30,99,0.12)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 한국 인바운드·외국인 관광 유치 전문가
Industry : 여행사
Type : K-관광 인바운드 — 외국인 방한 관광객 유치 K-투어 상품 기획 자료

[Color Guide]
Background : #1a1a2e (K-투어 네이비)
Text Color : #fff0f8 / #c090b8 (소프트 핑크)
Accent : #e91e63 (K-핑크) / #ffd600 (K-골드)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
한류·K-팝·K-푸드·한복 체험 등 K-컬처를 앞세워 외국인 방한 관광객을 유치하는 인바운드 여행 상품 기획 및 해외 바이어 피칭 톤. 한국이 세계의 여행지가 된다.

[Image Principles]
한국 대표 관광지·K-컬처 체험 이미지. 네이비+핑크+골드 K-배색. 방한 통계 인포그래픽. 여행 코스 지도.

[Design Characteristics]
• K-네이비 + K-핑크·골드 배색
• 방한 관광객 증가 차트
• K-투어 코스 지도 인포그래픽
• 한류 연계 여행 상품 카드
• 해외 바이어 파트너 로고

[Layout Guide]
- Title Slide : 네이비 배경 + 한국 관광 이미지 + 핑크+골드 헤드라인
- Spec Slide : K-투어 상품 카드 (테마·일정·포함·대상 국가·가격)
- Comparison Slide : 주요 방한 국가별 관광 트렌드·선호 테마 비교
- CTA Slide : 핑크 버튼 + 해외 바이어·투어 파트너십 문의 CTA
- Tone : Cultural / Proud / Experience-driven
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '지속가능 에코 투어',
    type: 'Sustainable Eco Tour',
    colors: ['#f1f8e9', '#2e7d32', '#795548'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(121,85,72,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 생태 관광·지속가능 여행·슬로우 투어 전문가
Industry : 여행사
Type : 지속가능 에코 투어 — 자연 생태·탄소 중립·로컬 문화 체험 여행 자료

[Color Guide]
Background : #f1f8e9 (에코 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (에코 그린) / #795548 (어스 브라운)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
탄소 발자국을 최소화하며 자연과 지역 문화를 깊이 체험하는 에코 투어·슬로우 트래블의 가치를 환경 의식 높은 여행자에게 전달. 빠른 여행이 아닌 의미 있는 여행을 만든다.

[Image Principles]
자연 생태·에코 여행 이미지. 그린+브라운 어스 배색. 여행 탄소 발자국 인포그래픽. 로컬 체험 카드.

[Design Characteristics]
• 에코 그린 + 어스 브라운 배색
• 탄소 중립 여행 인포그래픽
• 에코 투어 코스 지도
• 로컬 파트너 커뮤니티 카드
• 지속가능 인증 배지 시스템

[Layout Guide]
- Title Slide : 그린 배경 + 자연 여행 이미지 + 그린 에코 헤드라인
- Spec Slide : 에코 투어 상품 카드 (코스·탄소·로컬·체험·가격)
- Comparison Slide : 일반 패키지 vs 에코 투어 탄소·로컬 기여 비교
- CTA Slide : 그린 버튼 + 에코 투어 예약·파트너십 CTA
- Tone : Conscious / Slow / Earth-loving
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '여행사 IR 성장',
    type: 'Travel Agency IR Growth',
    colors: ['#f5f5f7', '#1d1d1f', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,102,204,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,102,204,0.10)', numColor: '#0066cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 여행사·OTA 스타트업 투자 유치 IR 전문가
Industry : 여행사
Type : 여행사 IR 성장 — 투자자 대상 여행사·OTA 성장 전략 IR 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #1d1d1f (딥 블랙) / #0066cc (성장 블루)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
포스트 코로나 여행 수요 폭발을 기반으로 OTA·패키지·인바운드 여행사의 성장 스토리를 VC·PE·전략적 투자자에게 설득하는 IR 톤. 여행 시장은 다시 성장하고 있다.

[Image Principles]
여행 트렌드+재무 데이터 이미지. 화이트+블루 IR 배색. 성장 차트. 시장 규모 인포그래픽.

[Design Characteristics]
• 화이트 + 블루 IR 배색
• 여행 시장 성장 TAM 다이어그램
• 매출·예약건수 트랙션 차트
• 채널별 수익 구조 인포그래픽
• 팀·수상·파트너십 카드

[Layout Guide]
- Title Slide : 화이트 + 여행 이미지 + 블루 포인트 IR 제목
- Spec Slide : 성장 KPI 카드 (GMV·예약건·취급액·수익률)
- Comparison Slide : 시장 성장률 vs 자사 성장률 비교 차트
- CTA Slide : 블루 버튼 + 투자 미팅·파트너십 신청 CTA
- Tone : Optimistic / Data-backed / Travel-market
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 핵심 수치 68pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 호텔 전용 7개 디자인 프롬프트 ─────────────────────────
const HOTEL_PROMPTS = [
  {
    name: '파이브스타 럭셔리',
    type: 'Five Star Luxury Hotel',
    colors: ['#0c0c14', '#d4af37', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(212,175,55,0.10), rgba(12,12,20,0.06))',
    numBg: 'rgba(212,175,55,0.14)', numColor: '#9a7a18',
    prompt: `[NotebookLM Slide Design Guide]

Role : 5성급 럭셔리 호텔 브랜딩·세일즈 발표 전문가
Industry : 호텔
Type : 파이브스타 럭셔리 — 최고급 호텔의 품격과 감성을 담은 세일즈 자료

[Color Guide]
Background : #0c0c14 (럭셔리 다크)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #d4af37 (호텔 골드) / #e8c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
포시즌스·롯데호텔·신라호텔 수준 5성급의 완벽한 서비스·미슐랭 다이닝·스파·뷰를 VVIP 고객·여행사 바이어에게 극도로 절제된 럭셔리 감성으로 전달. 머무름 자체가 예술이다.

[Image Principles]
럭셔리 호텔 객실·로비·수영장 이미지. 다크+골드 배색. 야경 클로즈업. 다이닝 플레이팅 사진.

[Design Characteristics]
• 럭셔리 다크 + 챔페인 골드 배색
• 세리프 쿠튀르 타이포그래피
• 객실·시설 풀블리드 갤러리
• 패키지·멤버십 VIP 카드
• 골드 라인 섹션 구분

[Layout Guide]
- Title Slide : 다크 배경 + 호텔 야경 이미지 + 골드 세리프 호텔명
- Spec Slide : 객실·패키지 카드 (룸 타입·뷰·시설·가격)
- Comparison Slide : 디럭스·스위트·프레지덴셜 등급별 비교
- CTA Slide : 골드 버튼 + 예약·VIP 멤버십 문의 CTA
- Tone : Opulent / Flawless / World-class
- Slide count : 7 pages
- Font size contrast : 제목 52pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '부티크 감성 호텔',
    type: 'Boutique Aesthetic Hotel',
    colors: ['#faf6f0', '#5c3a1e', '#a8c97f'],
    cardBg: 'linear-gradient(135deg, rgba(168,201,127,0.09), rgba(250,246,240,0.8))',
    numBg: 'rgba(92,58,30,0.09)', numColor: '#5c3a1e',
    prompt: `[NotebookLM Slide Design Guide]

Role : 부티크 호텔·라이프스타일 숙소 브랜딩 전문가
Industry : 호텔
Type : 부티크 감성 호텔 — 독특한 콘셉트와 감성을 가진 부티크 호텔 브랜딩 자료

[Color Guide]
Background : #faf6f0 (아이보리 크림)
Text Color : #2a1200 (딥 브라운) / #5c3a1e (미디엄 브라운)
Accent : #5c3a1e (어스 브라운) / #a8c97f (세이지 그린)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
체인 호텔과 다른 독특한 콘셉트·인테리어·로컬 감성을 가진 부티크 호텔의 개성과 스토리를 여행자와 예약 플랫폼에 전달. 머무는 곳이 곧 경험이 된다.

[Image Principles]
감성적인 부티크 호텔 인테리어 이미지. 아이보리+브라운+세이지 배색. 공간 디테일 클로즈업. 로컬 체험 카드.

[Design Characteristics]
• 아이보리 + 어스 브라운·세이지 배색
• 세리프 감성 타이포그래피
• 공간 스토리 갤러리 레이아웃
• 로컬 체험 큐레이션 카드
• 콘셉트 무드 보드 레이아웃

[Layout Guide]
- Title Slide : 아이보리 배경 + 부티크 인테리어 이미지 + 세리프 호텔명
- Spec Slide : 객실 타입 카드 (콘셉트·시설·뷰·특전)
- Comparison Slide : 부티크 호텔 vs 체인 호텔 경험·감성 비교
- CTA Slide : 브라운 버튼 + 직접 예약·패키지 문의 CTA
- Tone : Intimate / Unique / Storytelling
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '비즈니스 호텔 솔루션',
    type: 'Business Hotel B2B Solution',
    colors: ['#f5f5f7', '#1d1d1f', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,102,204,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,102,204,0.10)', numColor: '#0066cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 비즈니스 호텔·컨퍼런스 시설 B2B 세일즈 전문가
Industry : 호텔
Type : 비즈니스 호텔 솔루션 — 기업 출장·MICE·컨퍼런스 B2B 호텔 제안 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #0066cc (비즈니스 블루) / #34c759 (서비스 그린)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
기업 출장·MICE 행사·컨퍼런스를 주관하는 기업 구매담당자·이벤트 플래너에게 호텔의 회의 시설·스테이 패키지·단체 요금을 B2B 솔루션으로 제안하는 전문 발표 톤.

[Image Principles]
비즈니스 회의실·컨퍼런스 이미지. 코퍼레이트 블루 배색. 시설 사양 인포그래픽. 단체 패키지 비교표.

[Design Characteristics]
• 화이트 + 비즈니스 블루 배색
• 컨퍼런스 시설 스펙 카드
• 단체 요금 패키지 비교 표
• 위치·교통 인포그래픽 지도
• 법인 계약 혜택 배지

[Layout Guide]
- Title Slide : 화이트 + 비즈니스 시설 이미지 + 블루 B2B 제목
- Spec Slide : MICE 시설 카드 (회의실·수용 인원·AV·케이터링)
- Comparison Slide : 기업 출장·소규모·대형 컨퍼런스 패키지 비교
- CTA Slide : 블루 버튼 + 단체 견적·법인 계약 문의 CTA
- Tone : Professional / Efficient / Business-class
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '리조트 웰니스 휴양',
    type: 'Resort Wellness Retreat',
    colors: ['#e8f5e9', '#2e7d32', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(0,102,204,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 웰니스 리조트·힐링 스파·자연 휴양 호텔 마케팅 전문가
Industry : 호텔
Type : 리조트 웰니스 휴양 — 스파·요가·자연 치유 웰니스 리조트 브랜딩 자료

[Color Guide]
Background : #e8f5e9 (웰니스 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (웰니스 그린) / #0066cc (힐링 블루)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
도시 일상의 스트레스를 자연 속 스파·요가·명상·건강 다이닝으로 치유하는 웰니스 리조트의 힐링 가치를 건강 의식 높은 현대인에게 전달. 자연이 최고의 주치의다.

[Image Principles]
자연 리조트·스파·요가 이미지. 그린+블루 웰니스 배색. 자연 경관 클로즈업. 프로그램 일정 카드.

[Design Characteristics]
• 웰니스 그린 + 힐링 블루 배색
• 세리프 자연주의 타이포그래피
• 웰니스 프로그램 카드 레이아웃
• 스파·다이닝·액티비티 아이콘
• 자연 경관 갤러리

[Layout Guide]
- Title Slide : 그린 배경 + 자연 리조트 이미지 + 세리프 리조트명
- Spec Slide : 웰니스 패키지 카드 (스파·요가·다이닝·명상·자연)
- Comparison Slide : 일반 호텔 vs 웰니스 리조트 힐링·회복 가치 비교
- CTA Slide : 그린 버튼 + 패키지 예약·멤버십 상담 CTA
- Tone : Restorative / Natural / Mindful
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '호텔 디지털 마케팅',
    type: 'Hotel Digital Marketing',
    colors: ['#fce4ec', '#e91e63', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 호텔 디지털 마케팅·OTA 전략·직접 예약 전환 전문가
Industry : 호텔
Type : 호텔 디지털 마케팅 — OTA 의존도 낮추기·SNS·직예약 전환 전략 자료

[Color Guide]
Background : #fce4ec (디지털 소프트 핑크)
Text Color : #2a0a18 (딥 로즈) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (디지털 핑크) / #1565c0 (전략 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
부킹닷컴·에어비앤비 수수료 의존도를 낮추고 자사 홈페이지·SNS·멤버십으로 직접 예약을 늘리는 호텔 디지털 마케팅 전략을 마케팅팀·경영진에게 발표. 데이터가 예약을 만든다.

[Image Principles]
호텔 SNS·앱 이미지. 핑크+블루 디지털 배색. OTA vs 직예약 비교 차트. 고객 여정 플로우.

[Design Characteristics]
• 소프트 핑크 + 블루 디지털 배색
• OTA vs 직예약 채널 비교 차트
• RevPAR·ADR·점유율 KPI 카드
• SNS 콘텐츠 전략 카드
• 고객 여정 CRM 플로우

[Layout Guide]
- Title Slide : 핑크 배경 + 호텔 SNS 이미지 + 핑크 디지털 헤드라인
- Spec Slide : 디지털 채널 전략 카드 (SNS·SEO·멤버십·CRM·OTA)
- Comparison Slide : OTA 의존 vs 직예약 전환 후 수익·비용 비교
- CTA Slide : 핑크 버튼 + 디지털 마케팅 파트너십·시스템 도입 CTA
- Tone : Strategic / Revenue-focused / Digital
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '호텔 ESG 그린 스테이',
    type: 'Hotel ESG Green Stay',
    colors: ['#f1f8e9', '#2e7d32', '#0057a8'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(0,87,168,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 친환경 호텔·그린 스테이·탄소 중립 숙박 전문가
Industry : 호텔
Type : 호텔 ESG 그린 스테이 — 탄소 감축·제로웨이스트·친환경 숙박 브랜딩 자료

[Color Guide]
Background : #f1f8e9 (그린 스테이 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (그린 스테이) / #0057a8 (넷제로 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
플라스틱 어메니티 제로·태양광 에너지·탄소 상쇄 프로그램으로 환경을 생각하는 여행자의 친환경 숙박 경험을 제공하는 그린 스테이 호텔 브랜딩. 좋은 여행이 좋은 지구를 만든다.

[Image Principles]
친환경 호텔·자연 이미지. 그린+블루 ESG 배색. 탄소 감축 인포그래픽. 그린 인증 배지.

[Design Characteristics]
• 그린 스테이 + 넷제로 블루 배색
• 친환경 실천 항목 카드
• 탄소 감축 수치 강조
• 그린 인증 배지 시스템
• 고객 참여 프로그램 카드

[Layout Guide]
- Title Slide : 그린 배경 + 친환경 호텔 이미지 + 그린 ESG 헤드라인
- Spec Slide : 그린 스테이 실천 카드 (에너지·플라스틱·음식·교통)
- Comparison Slide : 일반 호텔 vs 그린 스테이 탄소·환경 영향 비교
- CTA Slide : 그린 버튼 + 그린 스테이 예약·인증 문의 CTA
- Tone : Responsible / Natural / Traveler-conscious
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '호텔 연간 IR',
    type: 'Hotel Group IR Annual',
    colors: ['#ffffff', '#1d1d1f', '#c9a84c'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(255,255,255,0.8))',
    numBg: 'rgba(29,29,31,0.07)', numColor: '#1d1d1f',
    prompt: `[NotebookLM Slide Design Guide]

Role : 호텔 그룹·리조트 상장사 연간 IR 발표 전문가
Industry : 호텔
Type : 호텔 연간 IR — 주주·기관투자자 대상 호텔 그룹 연간 경영 성과 자료

[Color Guide]
Background : #ffffff / #fafaf5 (크림 틴트)
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #1d1d1f (딥 블랙) / #c9a84c (호스피탈리티 골드)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
호텔 그룹의 RevPAR·ADR·점유율·EBITDA 등 핵심 호스피탈리티 지표와 신규 호텔 개발·해외 확장 계획을 주주에게 권위 있게 보고. 호스피탈리티가 곧 자산이다.

[Image Principles]
호텔 그룹 플래그십+재무 데이터. 화이트+골드 IR 배색. RevPAR 차트. 글로벌 확장 지도.

[Design Characteristics]
• 화이트 + 호스피탈리티 골드 배색
• 세리프 권위 타이포그래피
• 호스피탈리티 KPI 대시보드
• 글로벌 포트폴리오 지도
• 신규 개발 파이프라인 카드

[Layout Guide]
- Title Slide : 화이트 + 플래그십 이미지 + 골드 세리프 공식 IR 제목
- Spec Slide : 경영 KPI 카드 (RevPAR·ADR·점유율·객실 수·EBITDA)
- Comparison Slide : 전년 대비 호스피탈리티 지표 개선 + 향후 전망
- CTA Slide : 블랙 배경 + IR 미팅·공시 안내 CTA
- Tone : Authoritative / Hospitality-expert / Growth
- Slide count : 7 pages
- Font size contrast : 제목 42pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 관광지 전용 7개 디자인 프롬프트 ─────────────────────────
const ATTRACTION_PROMPTS = [
  {
    name: '유네스코 문화유산',
    type: 'UNESCO Heritage Brand',
    colors: ['#fdf6e8', '#5c3a1e', '#0057a8'],
    cardBg: 'linear-gradient(135deg, rgba(92,58,30,0.09), rgba(0,87,168,0.06))',
    numBg: 'rgba(92,58,30,0.10)', numColor: '#5c3a1e',
    prompt: `[NotebookLM Slide Design Guide]

Role : 문화유산·역사 관광지 브랜딩·방문객 유치 전문가
Industry : 관광지
Type : 유네스코 문화유산 — 역사·문화 가치 중심의 세계유산 관광지 홍보 자료

[Color Guide]
Background : #fdf6e8 (헤리티지 아이보리)
Text Color : #2a1200 (딥 브라운) / #5c3a1e (어스 브라운)
Accent : #5c3a1e (헤리티지 브라운) / #0057a8 (신뢰 블루)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
수천 년 역사와 세계가 인정한 문화유산의 가치를 국내외 방문객과 여행사 바이어에게 전달. 유네스코 등재 가치·보존 현황·관람 체험 프로그램을 권위 있게 소개.

[Image Principles]
문화유산 건축·역사 유물 이미지. 아이보리+브라운+블루 헤리티지 배색. 역사 스토리 타임라인. 유네스코 배지.

[Design Characteristics]
• 헤리티지 아이보리 + 브라운·블루 배색
• 세리프 역사 권위 타이포그래피
• 문화유산 갤러리 레이아웃
• 역사 타임라인 인포그래픽
• 유네스코 인증 배지

[Layout Guide]
- Title Slide : 아이보리 배경 + 문화유산 이미지 + 세리프 헤드라인
- Spec Slide : 관광지 정보 카드 (역사·유네스코 등재 이유·관람·체험)
- Comparison Slide : 계절별 방문 환경·프로그램·혼잡도 비교
- CTA Slide : 브라운 버튼 + 방문 예약·단체 관광 문의 CTA
- Tone : Historical / Prestigious / Inspirational
- Slide count : 7 pages
- Font size contrast : 제목 46pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '테마파크 어드벤처',
    type: 'Theme Park Adventure',
    colors: ['#0d0d1a', '#ff3b30', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(255,59,48,0.09), rgba(255,214,0,0.06))',
    numBg: 'rgba(255,59,48,0.12)', numColor: '#cc1a10',
    prompt: `[NotebookLM Slide Design Guide]

Role : 테마파크·어뮤즈먼트파크 마케팅 전문가
Industry : 관광지
Type : 테마파크 어드벤처 — 가족·청소년 타겟 테마파크 신규 어트랙션 마케팅 자료

[Color Guide]
Background : #0d0d1a (어드벤처 다크)
Text Color : #ffffff / #c0c0d0 (라이트 그레이)
Accent : #ff3b30 (어드벤처 레드) / #ffd600 (흥분 옐로우)
Font : Barlow Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
에버랜드·롯데월드·유니버설스튜디오 수준의 테마파크 신규 어트랙션·시즌 이벤트·연간 패스를 가족·청소년 방문객에게 강렬하게 마케팅. 매일이 어드벤처다!

[Image Principles]
롤러코스터·어트랙션·이벤트 이미지. 다크+레드·옐로우 에너지 배색. 신규 시설 렌더링. 입장객 수 차트.

[Design Characteristics]
• 어드벤처 다크 + 레드·옐로우 배색
• 컨덴스드 볼드 임팩트 타이포
• 신규 어트랙션 쇼케이스 카드
• 시즌 이벤트 캘린더
• 입장 패키지 비교 표

[Layout Guide]
- Title Slide : 다크 배경 + 어트랙션 이미지 + 레드·옐로우 대형 헤드라인
- Spec Slide : 신규 어트랙션 카드 (이름·타입·스릴 레벨·대기 시간)
- Comparison Slide : 연간 패스 vs 1일 패스 가성비 비교
- CTA Slide : 레드 버튼 + 얼리버드 패스·예약 CTA
- Tone : Thrilling / Energetic / Family-fun
- Slide count : 7 pages
- Font size contrast : 제목 58pt 컨덴스드 / 소제목 22pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '자연 생태 국립공원',
    type: 'Nature Ecological Park',
    colors: ['#e8f5e9', '#1b5e20', '#795548'],
    cardBg: 'linear-gradient(135deg, rgba(27,94,32,0.09), rgba(121,85,72,0.06))',
    numBg: 'rgba(27,94,32,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 국립공원·자연 생태 관광지 홍보 전문가
Industry : 관광지
Type : 자연 생태 국립공원 — 생태 보전·트레킹·자연 체험 관광지 홍보 자료

[Color Guide]
Background : #e8f5e9 (자연 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #1b5e20 (자연 그린) / #795548 (어스 브라운)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
설악산·지리산·한라산 국립공원의 자연 생태 가치와 사계절 트레킹·생태 관찰·캠핑 체험을 도시인과 외국인 관광객에게 전달. 자연이 최고의 관광 자원이다.

[Image Principles]
국립공원 자연 경관 이미지. 그린+브라운 자연 배색. 탐방로 지도. 계절별 자연 사진.

[Design Characteristics]
• 자연 그린 + 어스 브라운 배색
• 탐방 코스 지도 인포그래픽
• 생태 정보 카드
• 계절별 방문 가이드
• 생태 보전 현황 수치

[Layout Guide]
- Title Slide : 그린 배경 + 자연 경관 이미지 + 그린 헤드라인
- Spec Slide : 탐방 코스 카드 (난이도·거리·시간·주요 볼거리)
- Comparison Slide : 계절별 자연 경관·추천 코스·혼잡도 비교
- CTA Slide : 그린 버튼 + 탐방 예약·생태 체험 프로그램 신청 CTA
- Tone : Natural / Peaceful / Earth-connecting
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '도시 관광 스팟',
    type: 'Urban Tourism Spot',
    colors: ['#e8f0fe', '#1a73e8', '#ff9500'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(255,149,0,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 도시 관광·핫플레이스·인스타 스팟 마케팅 전문가
Industry : 관광지
Type : 도시 관광 스팟 — SNS 바이럴 도시 관광 명소·미식·쇼핑 여행 가이드 자료

[Color Guide]
Background : #e8f0fe (도시 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (도시 블루) / #ff9500 (트렌드 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
SNS에서 화제가 된 도시 핫플레이스·미식·쇼핑·야경 스팟을 MZ 여행자와 외국인에게 트렌디하게 소개. 경리단길·성수동·익선동처럼 골목 문화와 로컬 감성을 디지털로 확산.

[Image Principles]
도시 핫플레이스·야경 이미지. 블루+오렌지 도시 감성 배색. 위치 지도 인포그래픽. SNS 인증샷 갤러리.

[Design Characteristics]
• 라이트 블루 + 트렌드 오렌지 배색
• 도심 핫스팟 지도 인포그래픽
• 카테고리별 추천 리스트 카드
• SNS 팔로워·방문자 수 강조
• 계절별 이벤트 캘린더

[Layout Guide]
- Title Slide : 블루 배경 + 도시 야경 이미지 + 블루 헤드라인
- Spec Slide : 핫플레이스 카드 (위치·특징·추천 시간·인스타 포인트)
- Comparison Slide : 주요 관광 구역별 테마·접근성·볼거리 비교
- CTA Slide : 오렌지 버튼 + 관광 코스 다운로드·관광안내소 CTA
- Tone : Trendy / Local / Social-first
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '의료·웰니스 관광',
    type: 'Medical Wellness Tourism',
    colors: ['#e3f2fd', '#0d47a1', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(13,71,161,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(13,71,161,0.10)', numColor: '#0d47a1',
    prompt: `[NotebookLM Slide Design Guide]

Role : 의료 관광·K-메디컬 투어·웰니스 여행 전문가
Industry : 관광지
Type : 의료·웰니스 관광 — K-성형·치과·한방 의료 관광 상품 홍보 자료

[Color Guide]
Background : #e3f2fd (메디컬 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #2a4a7a (미디엄 블루)
Accent : #0d47a1 (메디컬 블루) / #34c759 (웰니스 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
K-성형·치과·한방·건강 검진 등 세계 최고 수준의 한국 의료 기술과 관광을 결합한 메디컬 투어의 안전성·경제성·편의성을 외국인 환자에게 발표. 치료와 여행을 동시에.

[Image Principles]
의료 관광·웰니스 체험 이미지. 블루+그린 메디컬 배색. 의료 관광 코스 지도. 인증 배지.

[Design Characteristics]
• 메디컬 블루 + 웰니스 그린 배색
• 의료 관광 패키지 카드
• 비용 비교 인포그래픽
• 병원·관광 코스 연계 지도
• 국제 인증 배지 시스템

[Layout Guide]
- Title Slide : 블루 배경 + 메디컬 관광 이미지 + 블루 헤드라인
- Spec Slide : 의료 관광 패키지 카드 (시술·기간·비용·관광 일정)
- Comparison Slide : 한국 vs 주요국 의료 관광 비용·품질 비교
- CTA Slide : 블루 버튼 + 의료 관광 상담·예약 CTA
- Tone : Professional / Safe / Value-for-health
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '관광지 스마트 투어',
    type: 'Smart Tourism Digital',
    colors: ['#0a1628', '#00c8ff', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(0,200,255,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(0,200,255,0.12)', numColor: '#0097c8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스마트 관광·AR·VR 관광 체험 기술 전문가
Industry : 관광지
Type : 관광지 스마트 투어 — AR 안내·AI 추천·디지털 투어 관광 혁신 자료

[Color Guide]
Background : #0a1628 (스마트 투어 다크)
Text Color : #e0f4ff / #7ab8d8 (아이스 블루)
Accent : #00c8ff (테크 사이언) / #34c759 (그린 테크)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
QR 해설·AR 복원·AI 방문객 분석·스마트 예약 시스템으로 관광지 방문 경험을 혁신하는 스마트 투어리즘 발표. 문화재도 디지털로 살아난다.

[Image Principles]
AR 관광 체험·스마트 키오스크 이미지. 다크+사이언 테크 배색. 앱 UI 화면. 방문객 데이터 대시보드.

[Design Characteristics]
• 다크 + 사이언·그린 스마트 배색
• AR/VR 체험 플로우 다이어그램
• 방문객 데이터 대시보드
• 스마트 안내 시스템 카드
• 디지털 전환 로드맵

[Layout Guide]
- Title Slide : 다크 배경 + AR 투어 이미지 + 사이언 헤드라인
- Spec Slide : 스마트 투어 기능 카드 (AR·AI·앱·스마트예약·빅데이터)
- Comparison Slide : 기존 관람 vs 스마트 투어 만족도·체류 시간 비교
- CTA Slide : 사이언 버튼 + 스마트 투어 도입·파트너십 CTA
- Tone : Innovative / Immersive / Future-tourism
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '지역 축제 브랜딩',
    type: 'Local Festival Branding',
    colors: ['#fff8e1', '#e65100', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(230,81,0,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(230,81,0,0.10)', numColor: '#bf4000',
    prompt: `[NotebookLM Slide Design Guide]

Role : 지역 관광 축제·문화 행사 브랜딩 기획 전문가
Industry : 관광지
Type : 지역 축제 브랜딩 — 지역 대표 축제·계절 행사 방문객 유치 홍보 자료

[Color Guide]
Background : #fff8e1 (축제 크림)
Text Color : #1a0800 (딥 브라운) / #5a2800 (브라운)
Accent : #e65100 (축제 오렌지) / #1565c0 (공식 블루)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
보령머드·진주남강유등·화천산천어 수준 지역 대표 축제의 고유한 매력과 볼거리를 국내외 방문객에게 활기차게 홍보. 지역 경제 활성화와 문화 자원의 가치를 동시에 강조.

[Image Principles]
지역 축제·행사 이미지. 오렌지+블루 축제 배색. 행사 프로그램 일정 카드. 방문객 수 차트.

[Design Characteristics]
• 축제 크림 + 오렌지·블루 배색
• 세리프 지역 감성 타이포
• 프로그램 일정 카드 레이아웃
• 방문객 경제 효과 수치
• 교통·숙박 안내 인포그래픽

[Layout Guide]
- Title Slide : 크림 배경 + 축제 이미지 + 오렌지 세리프 축제명
- Spec Slide : 주요 프로그램 카드 (행사·체험·공연·먹거리·이벤트)
- Comparison Slide : 전년 대비 방문객·경제 효과 성장 비교
- CTA Slide : 오렌지 버튼 + 관광 안내·단체 방문 신청 CTA
- Tone : Festive / Community / Inviting
- Slide count : 7 pages
- Font size contrast : 제목 46pt 세리프 / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 항공 전용 7개 디자인 프롬프트 ─────────────────────────
const AIRLINE_PROMPTS = [
  {
    name: '풀서비스 항공 프레스티지',
    type: 'Full Service Airline Prestige',
    colors: ['#001233', '#c9a84c', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.10), rgba(0,18,51,0.06))',
    numBg: 'rgba(201,168,76,0.13)', numColor: '#9a7a18',
    prompt: `[NotebookLM Slide Design Guide]

Role : 풀서비스 항공사 브랜딩·프레스티지 세일즈 전문가
Industry : 항공
Type : 풀서비스 항공 프레스티지 — 대한항공·아시아나 수준 FSC 프리미엄 클래스 자료

[Color Guide]
Background : #001233 (항공 딥 네이비)
Text Color : #f5f5f0 (크림 화이트) / #b0b8c8 (실버 그레이)
Accent : #c9a84c (항공 골드) / #e2c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
비즈니스·퍼스트 클래스의 프리미엄 서비스·기내식·라운지·마일리지를 고객과 기업 출장 담당자에게 권위 있게 전달. 하늘 위의 최고 경험을 약속하는 FSC 브랜드 세일즈.

[Image Principles]
프리미엄 기내·라운지 이미지. 딥 네이비+골드 배색. 비즈니스 클래스 시트 클로즈업. 기내식 플레이팅.

[Design Characteristics]
• 딥 네이비 + 항공 골드 배색
• 세리프 권위 타이포그래피
• 클래스별 서비스 쇼케이스
• 노선 네트워크 지도
• 마일리지·멤버십 배지

[Layout Guide]
- Title Slide : 네이비 배경 + 프리미엄 기내 이미지 + 골드 세리프 브랜드명
- Spec Slide : 클래스별 서비스 카드 (이코노미·비즈니스·퍼스트 비교)
- Comparison Slide : FSC vs LCC 서비스·가격·경험 가치 비교
- CTA Slide : 골드 버튼 + 비즈니스 클래스 예약·법인 계약 CTA
- Tone : Prestigious / World-class / Above-and-beyond
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'LCC 가성비 에너지',
    type: 'LCC Value Energy',
    colors: ['#fff3e0', '#ff6b00', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,0,0.09), rgba(21,101,192,0.06))',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 저비용항공사·LCC 가성비 마케팅 전문가
Industry : 항공
Type : LCC 가성비 에너지 — 제주항공·진에어 수준 LCC 특가·노선 마케팅 자료

[Color Guide]
Background : #fff3e0 (에너지 크림 오렌지)
Text Color : #1a0a00 (딥 브라운) / #5a2000 (브라운)
Accent : #ff6b00 (LCC 오렌지) / #1565c0 (신뢰 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
합리적인 가격에 원하는 노선을 자유롭게 이용하는 LCC의 가성비·편의성·특가 프로모션을 젊은 여행자에게 활기차게 전달. 비행기 표가 비쌀 이유가 없다.

[Image Principles]
LCC 기내·공항 이미지. 오렌지+블루 에너지 배색. 특가 배지 강조. 노선 지도 인포그래픽.

[Design Characteristics]
• 크림 + LCC 오렌지·블루 배색
• 특가 프로모션 배지 시스템
• 노선 지도 인포그래픽
• 운임 비교 카드
• 조기 발권 카운트다운 UI

[Layout Guide]
- Title Slide : 크림 배경 + LCC 이미지 + 오렌지 대형 헤드라인
- Spec Slide : 인기 노선 카드 (출발·도착·운임·편수·특가 기간)
- Comparison Slide : FSC vs LCC 가격·서비스·편의 비교 매트릭스
- CTA Slide : 오렌지 버튼 + 특가 예약·앱 설치 CTA
- Tone : Bold / Affordable / Freedom
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 핵심 가격 68pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '항공 화물 B2B',
    type: 'Air Cargo B2B Logistics',
    colors: ['#f5f5f7', '#1d1d1f', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,102,204,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,102,204,0.10)', numColor: '#0066cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 항공 화물·에어카고 B2B 물류 세일즈 전문가
Industry : 항공
Type : 항공 화물 B2B — 수출입 기업·화주 대상 항공 화물 서비스 제안 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #0066cc (물류 블루) / #34c759 (효율 그린)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
반도체·의약품·전자 제품 등 고부가 수출입 화물을 빠르고 안전하게 운송하는 항공 화물 서비스를 기업 물류팀·화주에게 B2B 솔루션으로 제안. 속도가 경쟁력이다.

[Image Principles]
항공 화물기·카고 작업 이미지. 블루+그린 물류 배색. 노선·허브 지도. 운송 시간 인포그래픽.

[Design Characteristics]
• 화이트 + 블루 B2B 물류 배색
• 화물 노선 허브 지도
• 운임·서비스 SLA 비교 카드
• 화물 트래킹 플로우 다이어그램
• 특수 화물 서비스 배지

[Layout Guide]
- Title Slide : 화이트 + 화물기 이미지 + 블루 B2B 서비스 제목
- Spec Slide : 항공 화물 서비스 카드 (일반·특급·특수·냉장 화물)
- Comparison Slide : 해운 vs 항공 화물 시간·비용·안전 비교
- CTA Slide : 블루 버튼 + 화물 운임 문의·서비스 계약 CTA
- Tone : Reliable / Fast / Professional
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '항공사 ESG 친환경',
    type: 'Airline ESG Sustainable',
    colors: ['#e8f5e9', '#2e7d32', '#0057a8'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(0,87,168,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 항공사 탄소 중립·SAF·친환경 비행 ESG 전문가
Industry : 항공
Type : 항공사 ESG 친환경 — SAF·탄소 상쇄·넷제로 2050 항공 ESG 전략 자료

[Color Guide]
Background : #e8f5e9 (그린 항공 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #2e6b3e (미디엄 그린)
Accent : #2e7d32 (넷제로 그린) / #0057a8 (책임 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
SAF(지속가능 항공 연료) 도입·탄소 상쇄 프로그램·차세대 연비 효율 항공기 투자를 통해 2050 넷제로를 달성하는 항공사 ESG 전략을 투자자·정부·고객에게 발표.

[Image Principles]
친환경 항공·SAF 이미지. 그린+블루 ESG 배색. 탄소 감축 로드맵. SAF 비중 인포그래픽.

[Design Characteristics]
• 넷제로 그린 + 책임 블루 배색
• SAF 전환 로드맵 타임라인
• 탄소 감축 KPI 대시보드
• 친환경 항공기 도입 계획
• 넷제로 인증·협약 배지

[Layout Guide]
- Title Slide : 그린 배경 + 친환경 항공 이미지 + 그린 넷제로 헤드라인
- Spec Slide : ESG 성과 카드 (SAF 비중·탄소·연비·넷제로 로드맵)
- Comparison Slide : 기준 연도 vs 감축 목표 탄소 배출 비교
- CTA Slide : 그린 버튼 + ESG 투자·협력·탄소 상쇄 참여 CTA
- Tone : Responsible / Forward-looking / Green-sky
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '항공사 디지털 혁신',
    type: 'Airline Digital Innovation',
    colors: ['#0a1628', '#00c8ff', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(0,200,255,0.08), rgba(124,58,237,0.06))',
    numBg: 'rgba(0,200,255,0.12)', numColor: '#0097c8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 항공사 디지털 전환·앱·AI 서비스 혁신 전문가
Industry : 항공
Type : 항공사 디지털 혁신 — AI 가격 최적화·앱·바이오 탑승 디지털 혁신 자료

[Color Guide]
Background : #0a1628 (디지털 항공 다크)
Text Color : #e0f4ff / #7ab8d8 (아이스 블루)
Accent : #00c8ff (디지털 사이언) / #7c3aed (AI 퍼플)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI 다이내믹 프라이싱·안면 인식 탑승·챗봇 고객 서비스·앱 체크인으로 항공 여행의 편의성을 혁신하는 디지털 전환 전략 발표. 하늘 길도 디지털이 먼저다.

[Image Principles]
디지털 항공 서비스·앱 UI 이미지. 다크+사이언·퍼플 배색. AI 서비스 플로우. 탑승 데이터 대시보드.

[Design Characteristics]
• 다크 + 사이언·퍼플 DX 배색
• 디지털 여정 플로우 다이어그램
• AI·앱 서비스 KPI 카드
• 바이오 탑승 시스템 UI
• 디지털 전환 투자 ROI 강조

[Layout Guide]
- Title Slide : 다크 배경 + 디지털 항공 이미지 + 사이언 헤드라인
- Spec Slide : DX 서비스 카드 (AI 가격·앱·바이오탑승·챗봇·추천)
- Comparison Slide : 기존 vs 디지털 혁신 후 체크인·만족도·비용 비교
- CTA Slide : 사이언 버튼 + DX 파트너십·기술 협력 CTA
- Tone : Futuristic / Seamless · Passenger-first
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '항공사 연간 IR',
    type: 'Airline IR Annual Report',
    colors: ['#ffffff', '#001233', '#c9a84c'],
    cardBg: 'linear-gradient(135deg, rgba(0,18,51,0.08), rgba(201,168,76,0.06))',
    numBg: 'rgba(0,18,51,0.10)', numColor: '#001233',
    prompt: `[NotebookLM Slide Design Guide]

Role : 항공사 상장사 연간 IR·실적 발표 전문가
Industry : 항공
Type : 항공사 연간 IR — 주주·기관투자자 대상 항공사 연간 경영 성과 자료

[Color Guide]
Background : #ffffff / #f0f4ff (블루 틴트)
Text Color : #0a1628 (딥 네이비) / #3a5070 (블루 그레이)
Accent : #001233 (항공 딥 네이비) / #c9a84c (IR 골드)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
대한항공·아시아나·제주항공 수준 상장 항공사의 여객·화물 매출·RPK·탑승률·유가 헤지 전략을 주주와 기관투자자에게 권위 있게 보고. 하늘 위의 비즈니스도 숫자로 증명한다.

[Image Principles]
항공기·공항 이미지. 화이트+네이비+골드 IR 배색. 실적 차트. 노선 네트워크 지도.

[Design Characteristics]
• 화이트 + 딥 네이비 IR 권위 배색
• 세리프 권위 타이포그래피
• 항공 KPI 대시보드
• 노선·여객 현황 지도
• 유가·환율 리스크 관리 카드

[Layout Guide]
- Title Slide : 화이트 + 항공기 이미지 + 네이비 세리프 공식 IR 제목
- Spec Slide : 경영 KPI 카드 (여객·화물·RPK·탑승률·영업이익)
- Comparison Slide : 전년 대비 실적 추이 + 시장 회복 전망
- CTA Slide : 네이비 배경 + IR 미팅·공시 안내 CTA
- Tone : Authoritative / Aviation-expert · Transparent
- Slide count : 7 pages
- Font size contrast : 제목 42pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '공항 면세·리테일',
    type: 'Airport Duty Free Retail',
    colors: ['#fdf0ff', '#9c27b0', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, rgba(156,39,176,0.08), rgba(255,107,0,0.06))',
    numBg: 'rgba(156,39,176,0.10)', numColor: '#7b1fa2',
    prompt: `[NotebookLM Slide Design Guide]

Role : 공항 면세점·공항 리테일 마케팅 전문가
Industry : 항공
Type : 공항 면세·리테일 — 공항 면세점·쇼핑·F&B 여행객 유치 마케팅 자료

[Color Guide]
Background : #fdf0ff (면세 라벤더)
Text Color : #1a001a (딥 퍼플 블랙) / #5a2a6a (미디엄 퍼플)
Accent : #9c27b0 (면세 퍼플) / #ff6b00 (쇼핑 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
인천·김포공항 면세점·리테일 구역에서 여행 전후 쇼핑 경험을 극대화하는 마케팅 전략 발표. K-뷰티·K-패션·명품·식음료를 통한 면세 매출 성장과 여행객 체류 시간 연장.

[Image Principles]
면세점·공항 쇼핑 이미지. 라벤더+퍼플·오렌지 배색. 브랜드 쇼케이스. 매출 성장 차트.

[Design Characteristics]
• 라벤더 + 퍼플·오렌지 면세 배색
• 브랜드 카테고리 쇼케이스 그리드
• 면세 매출 KPI 차트
• 여행객 쇼핑 여정 플로우
• 특별 프로모션 배지

[Layout Guide]
- Title Slide : 라벤더 배경 + 면세점 이미지 + 퍼플 헤드라인
- Spec Slide : 면세 카테고리 카드 (뷰티·패션·명품·주류·식품)
- Comparison Slide : 국내선 vs 국제선 여행객 쇼핑 패턴·객단가 비교
- CTA Slide : 오렌지 버튼 + 입점 제안·프로모션 협력 CTA
- Tone : Luxurious / Shopable / Travel-retail
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 복지관 전용 7개 디자인 프롬프트 ─────────────────────────
const WELFARE_PROMPTS = [
  {
    name: '따뜻한 돌봄 공동체',
    type: 'Warm Care Community',
    colors: ['#fff8e1', '#ff8f00', '#2e7d32'],
    cardBg: 'linear-gradient(135deg, rgba(255,143,0,0.09), rgba(46,125,50,0.06))',
    numBg: 'rgba(255,143,0,0.12)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 사회복지관·종합복지관 서비스 소개 발표 전문가
Industry : 복지관
Type : 따뜻한 돌봄 공동체 — 지역 주민 복지 서비스·돌봄 공동체 소개 자료

[Color Guide]
Background : #fff8e1 (돌봄 크림 웜)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #ff8f00 (돌봄 오렌지) / #2e7d32 (공동체 그린)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
아동·청소년·노인·장애인·저소득층을 아우르는 지역 사회복지관의 따뜻한 돌봄 서비스와 공동체 정신을 주민·후원자·지자체에 진심으로 전달. 함께 사는 마을이 복지다.

[Image Principles]
따뜻한 복지 서비스·지역 공동체 이미지. 오렌지+그린 따뜻한 배색. 서비스 이용자 사진. 프로그램 현황.

[Design Characteristics]
• 따뜻한 크림 + 오렌지·그린 배색
• 세리프 따뜻한 타이포그래피
• 서비스 대상별 카드 레이아웃
• 이용자 수·프로그램 KPI
• 지역 사회 네트워크 지도

[Layout Guide]
- Title Slide : 크림 배경 + 복지 서비스 이미지 + 오렌지 세리프 헤드라인
- Spec Slide : 서비스 프로그램 카드 (아동·청소년·노인·장애인·가족)
- Comparison Slide : 전년 vs 당년 이용자 수·서비스 만족도 비교
- CTA Slide : 오렌지 버튼 + 서비스 이용 신청·자원봉사 CTA
- Tone : Caring / Inclusive / Community
- Slide count : 7 pages
- Font size contrast : 제목 44pt 세리프 / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '시니어 복지 케어',
    type: 'Senior Welfare Care',
    colors: ['#fdf6e8', '#7a4a00', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(122,74,0,0.09), rgba(21,101,192,0.06))',
    numBg: 'rgba(122,74,0,0.10)', numColor: '#7a4a00',
    prompt: `[NotebookLM Slide Design Guide]

Role : 노인복지관·경로당·시니어 케어 서비스 발표 전문가
Industry : 복지관
Type : 시니어 복지 케어 — 어르신 건강·여가·일자리·돌봄 통합 서비스 자료

[Color Guide]
Background : #fdf6e8 (따뜻한 아이보리)
Text Color : #2a1200 (딥 브라운) / #6a4020 (미디엄 브라운)
Accent : #7a4a00 (시니어 브라운) / #1565c0 (케어 블루)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
어르신의 건강·여가·일자리·사회 참여를 통합 지원하는 노인복지관 서비스의 따뜻함과 전문성 전달. 치매 예방·건강 운동·문화 교육·경로 식사 등 생활 밀착 서비스 소개.

[Image Principles]
어르신 활동·복지 서비스 이미지. 아이보리+브라운 따뜻한 배색. 프로그램 일정 카드. 건강 지표 인포그래픽.

[Design Characteristics]
• 아이보리 + 브라운·블루 배색
• 큰 글씨 접근성 레이아웃
• 서비스 프로그램 카드 (건강·여가·일자리)
• 이용자 만족도 수치 강조
• 생활 지원 서비스 플로우

[Layout Guide]
- Title Slide : 아이보리 배경 + 어르신 활동 이미지 + 세리프 헤드라인
- Spec Slide : 시니어 서비스 카드 (건강 관리·여가·일자리·식사·상담)
- Comparison Slide : 재가 돌봄 vs 복지관 이용 삶의 질·건강 비교
- CTA Slide : 브라운 버튼 + 서비스 이용 신청·후원 참여 CTA
- Tone : Respectful / Caring / Active-aging
- Slide count : 7 pages
- Font size contrast : 제목 44pt 세리프 / 소제목 22pt / 본문 15pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '아동청소년 꿈 지원',
    type: 'Youth Dream Support',
    colors: ['#e8f0fe', '#1a73e8', '#ff9500'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(255,149,0,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 아동·청소년 복지·방과 후 돌봄·진로 지원 전문가
Industry : 복지관
Type : 아동청소년 꿈 지원 — 방과 후 돌봄·진로 탐색·자립 지원 프로그램 소개 자료

[Color Guide]
Background : #e8f0fe (꿈 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (꿈 블루) / #ff9500 (활력 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
취약 계층 아동·청소년의 방과 후 돌봄·진로 탐색·멘토링·자립 역량 강화를 지원하는 따뜻하고 활기찬 청소년 복지 프로그램 소개. 모든 아이에게 공평한 꿈을 키울 기회를.

[Image Principles]
아이들 활동·교육 이미지. 블루+오렌지 활기찬 배색. 프로그램 일정 인포그래픽. 참여 아동 수 차트.

[Design Characteristics]
• 라이트 블루 + 오렌지 활기 배색
• 프로그램 카테고리 아이콘 카드
• 참여 아동 수·만족도 KPI
• 진로 탐색 로드맵 플로우
• 멘토·강사 프로필 카드

[Layout Guide]
- Title Slide : 블루 배경 + 아이들 활동 이미지 + 블루 헤드라인
- Spec Slide : 프로그램 카드 (돌봄·학습·진로·체험·멘토링)
- Comparison Slide : 프로그램 참여 전·후 학업·자존감·진로 의식 비교
- CTA Slide : 오렌지 버튼 + 프로그램 신청·후원 CTA
- Tone : Encouraging / Empowering / Child-centered
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '장애인 자립 지원',
    type: 'Disability Independence Support',
    colors: ['#f3e5f5', '#7c3aed', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(124,58,237,0.10)', numColor: '#7c3aed',
    prompt: `[NotebookLM Slide Design Guide]

Role : 장애인복지관·자립 생활 지원 서비스 발표 전문가
Industry : 복지관
Type : 장애인 자립 지원 — 장애인 직업 재활·자립 생활·권익 증진 서비스 자료

[Color Guide]
Background : #f3e5f5 (인클루전 라벤더)
Text Color : #1a001a (딥 퍼플 블랙) / #5a2a6a (미디엄 퍼플)
Accent : #7c3aed (포용 퍼플) / #34c759 (자립 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
장애인이 지역사회 구성원으로 당당하게 자립하도록 직업 훈련·보조 기기·활동 지원사·권익 옹호 서비스를 제공하는 복지관의 포용적 가치를 전달. 장벽 없는 세상을 함께 만들어요.

[Image Principles]
장애인 자립·활동 이미지. 라벤더+퍼플·그린 배색. 서비스 플로우. 자립 성과 카드.

[Design Characteristics]
• 라벤더 + 퍼플·그린 포용 배색
• 서비스 접근성 아이콘 시스템
• 자립 지원 서비스 플로우 카드
• 이용자 자립 성과 수치 강조
• 권리 기반 가치 카드

[Layout Guide]
- Title Slide : 라벤더 배경 + 자립 활동 이미지 + 퍼플 헤드라인
- Spec Slide : 자립 지원 서비스 카드 (직업·활동지원·보조기기·권익)
- Comparison Slide : 서비스 이용 전·후 자립도·취업률 비교
- CTA Slide : 퍼플 버튼 + 서비스 신청·자원봉사 CTA
- Tone : Inclusive / Empowering / Rights-based
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '복지관 후원 모금',
    type: 'Welfare Donation Campaign',
    colors: ['#fce4ec', '#e91e63', '#ff9800'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.08), rgba(255,152,0,0.06))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 사회복지 후원·기부 모금 캠페인 기획 전문가
Industry : 복지관
Type : 복지관 후원 모금 — 기업·개인 후원자 대상 사회 공헌·기부 캠페인 자료

[Color Guide]
Background : #fce4ec (따뜻한 핑크)
Text Color : #2a0a18 (딥 로즈 블랙) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (나눔 핑크) / #ff9800 (온기 오렌지)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
기업·개인 후원자의 나눔이 취약 계층 삶을 어떻게 바꾸는지 스토리텔링으로 감동을 전달하는 후원 모금 캠페인 톤. 숫자보다 사람의 이야기가 먼저. 당신의 1만 원이 누군가의 하루를 바꿉니다.

[Image Principles]
따뜻한 수혜자 스토리 이미지. 핑크+오렌지 나눔 배색. 기부금 사용 인포그래픽. 후원 성과 카드.

[Design Characteristics]
• 따뜻한 핑크 + 오렌지 나눔 배색
• 수혜자 스토리 카드 레이아웃
• 기부금 투명 사용 인포그래픽
• 모금 목표 달성 게이지 UI
• 기업 후원사 로고 그리드

[Layout Guide]
- Title Slide : 핑크 배경 + 수혜자 이미지 + 세리프 감동 헤드라인
- Spec Slide : 후원 프로그램 카드 (정기·일시·현물·자원봉사)
- Comparison Slide : 후원금 투명 사용 내역·수혜 인원 비교
- CTA Slide : 핑크 버튼 + 후원 신청·기업 CSR 협약 CTA
- Tone : Heartfelt / Transparent / Impact-driven
- Slide count : 7 pages
- Font size contrast : 제목 46pt 세리프 / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '복지관 ESG 사회 가치',
    type: 'Welfare ESG Social Value',
    colors: ['#e8f5e9', '#2e7d32', '#0057a8'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(0,87,168,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 사회복지기관 ESG·사회적 가치 성과 보고 전문가
Industry : 복지관
Type : 복지관 ESG 사회 가치 — 사회 가치 창출·공익 성과 보고 자료

[Color Guide]
Background : #e8f5e9 (사회가치 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #2e6b3e (미디엄 그린)
Accent : #2e7d32 (사회가치 그린) / #0057a8 (공익 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
사회복지관이 창출하는 사회적 가치를 SROI(사회적 투자 수익률)·SDGs 연계·지역사회 기여 지표로 수치화하여 지자체·기업 후원자·평가 기관에 투명하게 보고.

[Image Principles]
복지 서비스·사회 가치 이미지. 그린+블루 공익 배색. SROI 인포그래픽. SDGs 연계 카드.

[Design Characteristics]
• 사회가치 그린 + 공익 블루 배색
• SROI 계산 인포그래픽
• SDGs 연계 아이콘 시스템
• 사회 가치 KPI 대시보드
• 공익 성과 타임라인

[Layout Guide]
- Title Slide : 그린 배경 + 복지 서비스 이미지 + 그린 ESG 공식 제목
- Spec Slide : 사회 가치 KPI 카드 (SROI·수혜자 수·SDGs·지역 기여)
- Comparison Slide : 전년 vs 당년 사회 가치 창출 규모 비교
- CTA Slide : 그린 버튼 + 파트너십·후원 협약 CTA
- Tone : Impactful / Measurable / Mission-driven
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '복지관 디지털 전환',
    type: 'Welfare Digital Transform',
    colors: ['#e8f0fe', '#1a73e8', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 복지관 디지털 서비스·비대면 복지·복지 앱 전문가
Industry : 복지관
Type : 복지관 디지털 전환 — 비대면 복지 서비스·복지 앱·AI 매칭 시스템 자료

[Color Guide]
Background : #e8f0fe (디지털 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (디지털 블루) / #34c759 (복지 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
코로나 이후 비대면 복지 수요에 대응한 복지 앱·온라인 상담·AI 서비스 연계 시스템 구축으로 더 많은 취약 계층을 발굴하고 연결하는 디지털 복지 혁신 발표.

[Image Principles]
디지털 복지 서비스·앱 UI 이미지. 블루+그린 디지털 배색. 서비스 연계 플로우. 이용자 접근성 차트.

[Design Characteristics]
• 라이트 블루 + 그린 디지털 배색
• 복지 앱 UI 스크린 모형
• 디지털 서비스 연계 플로우
• 비대면 이용자 증가 차트
• AI 매칭 시스템 다이어그램

[Layout Guide]
- Title Slide : 블루 배경 + 디지털 복지 이미지 + 블루 혁신 헤드라인
- Spec Slide : 디지털 서비스 카드 (앱·비대면 상담·AI 매칭·온라인 교육)
- Comparison Slide : 대면 서비스 vs 디지털 전환 후 접근성·이용자 비교
- CTA Slide : 블루 버튼 + 디지털 복지 협력·시스템 도입 CTA
- Tone : Accessible / Innovative / Inclusive-digital
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 수산시장 전용 7개 디자인 프롬프트 ─────────────────────────
const FISHMARKET_PROMPTS = [
  {
    name: '새벽 어시장 활력',
    type: 'Dawn Fish Market Energy',
    colors: ['#0a1a2e', '#00a8e8', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, rgba(0,168,232,0.09), rgba(255,107,0,0.06))',
    numBg: 'rgba(0,168,232,0.12)', numColor: '#0080b8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 수산 시장·수산물 도매 유통 브랜딩 전문가
Industry : 수산시장
Type : 새벽 어시장 활력 — 노량진·자갈치 감성의 수산물 시장 브랜딩 자료

[Color Guide]
Background : #0a1a2e (새벽 바다 네이비)
Text Color : #e0f4ff / #80c4e0 (아이스 블루)
Accent : #00a8e8 (바다 블루) / #ff6b00 (새벽 오렌지)
Font : Barlow Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
새벽 4시 경매부터 시작되는 수산시장의 역동적인 에너지와 신선함을 전달. 노량진·자갈치·부산 공동 어시장 수준의 유통 경쟁력과 신선도를 소비자·바이어에게 어필. 바다의 맛이 새벽을 깨운다.

[Image Principles]
새벽 경매·신선한 수산물 이미지. 다크 네이비+바다 블루+오렌지 배색. 수산물 클로즈업. 경매 현장 사진.

[Design Characteristics]
• 새벽 바다 네이비 + 블루·오렌지 배색
• 컨덴스드 볼드 임팩트 타이포
• 수산물 경매 현황 인포그래픽
• 신선도 지표 강조 카드
• 산지·어종 지도 인포그래픽

[Layout Guide]
- Title Slide : 다크 배경 + 새벽 어시장 이미지 + 블루·오렌지 헤드라인
- Spec Slide : 유통 스펙 카드 (어종·산지·경매가·입하량)
- Comparison Slide : 당일 주요 어종 시세·물량 비교 인포그래픽
- CTA Slide : 블루 버튼 + 도매 거래·납품 계약 문의 CTA
- Tone : Energetic / Fresh / Authentic
- Slide count : 7 pages
- Font size contrast : 제목 54pt 컨덴스드 / 소제목 22pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '프리미엄 수산 직거래',
    type: 'Premium Seafood Direct',
    colors: ['#ffffff', '#003d82', '#00a8e8'],
    cardBg: 'linear-gradient(135deg, rgba(0,61,130,0.08), rgba(0,168,232,0.05))',
    numBg: 'rgba(0,61,130,0.10)', numColor: '#003d82',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프리미엄 수산물 산지 직거래·새벽 배송 서비스 전문가
Industry : 수산시장
Type : 프리미엄 수산 직거래 — 산지 직송·새벽 배송 프리미엄 수산물 B2C 자료

[Color Guide]
Background : #ffffff / #f0f8ff (오션 블루 틴트)
Text Color : #0a1a2e (딥 네이비) / #3a5a7a (블루 그레이)
Accent : #003d82 (오션 네이비) / #00a8e8 (프레시 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
산지 어부에서 소비자 식탁까지 직송 12시간 이내 신선 수산물의 프리미엄 가치 전달. 마켓컬리·오아시스 감성의 수산물 새벽 배송 플랫폼 포지셔닝. 바다에서 식탁까지 가장 빠르게.

[Image Principles]
신선한 수산물·포장 이미지. 네이비+블루 신뢰 배색. 산지 사진. 배송 프로세스 다이어그램.

[Design Characteristics]
• 화이트 + 오션 네이비 신뢰 배색
• 산지 직송 플로우 다이어그램
• 신선도 지표·배송 시간 KPI
• 어종별 프리미엄 상품 카드
• 생산자 스토리 프로필 카드

[Layout Guide]
- Title Slide : 화이트 + 프리미엄 수산물 이미지 + 네이비 헤드라인
- Spec Slide : 직거래 상품 카드 (어종·산지·시간·가격·인증)
- Comparison Slide : 기존 마트 vs 산지 직거래 신선도·가격 비교
- CTA Slide : 네이비 버튼 + 구독 신청·첫 주문 할인 CTA
- Tone : Fresh / Premium / Transparent
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'K-수산 글로벌 수출',
    type: 'K-Seafood Global Export',
    colors: ['#001233', '#00a8e8', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(0,168,232,0.09), rgba(255,214,0,0.06))',
    numBg: 'rgba(0,168,232,0.12)', numColor: '#0080b8',
    prompt: `[NotebookLM Slide Design Guide]

Role : K-수산물·김·미역·굴 글로벌 수출 전략 전문가
Industry : 수산시장
Type : K-수산 글로벌 수출 — 한류 파워로 세계를 공략하는 K-수산물 수출 자료

[Color Guide]
Background : #001233 (딥 오션 네이비)
Text Color : #ffffff / #aaccdd (아이스 블루)
Accent : #00a8e8 (K-오션 블루) / #ffd600 (K-골드)
Font : Bebas Neue (제목) / Noto Sans KR (본문)

[Tone & Manner]
김·미역·굴·전복·홍어 등 K-수산물의 글로벌 인기를 한류·건강식 트렌드와 연계한 수출 전략 발표. 미국·유럽·동남아 바이어와 글로벌 플랫폼 입점을 강력하게 피칭. 세계가 K-sea food를 즐긴다.

[Image Principles]
K-수산물·해양 이미지. 딥 네이비+블루+골드 배색. 세계 수출 지도. 글로벌 시장 성장 데이터.

[Design Characteristics]
• 딥 오션 네이비 + 블루·골드 배색
• 세계 수출 지도 시각화
• K-수산물 수출 성장 차트
• 해외 인증·규격 배지
• 글로벌 바이어 파트너 카드

[Layout Guide]
- Title Slide : 네이비 배경 + K-수산물 이미지 + 블루·골드 헤드라인
- Spec Slide : 수출 품목 카드 (어종·인증·주요 시장·성장률)
- Comparison Slide : 주요 수출국별 K-수산물 매출·성장률 비교
- CTA Slide : 골드 버튼 + 글로벌 바이어·파트너십 문의 CTA
- Tone : Global / Bold / Ocean-proud
- Slide count : 7 pages
- Font size contrast : 제목 54pt 볼드 / 소제목 22pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '수산물 안전 위생',
    type: 'Seafood Safety & Hygiene',
    colors: ['#e3f2fd', '#0d47a1', '#00a8e8'],
    cardBg: 'linear-gradient(135deg, rgba(13,71,161,0.08), rgba(0,168,232,0.06))',
    numBg: 'rgba(13,71,161,0.10)', numColor: '#0d47a1',
    prompt: `[NotebookLM Slide Design Guide]

Role : 수산물 위생·HACCP·수산물 안전 관리 발표 전문가
Industry : 수산시장
Type : 수산물 안전 위생 — 수산물 원산지·이력 추적·냉동 유통 안전 관리 자료

[Color Guide]
Background : #e3f2fd (안전 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #2a4a7a (미디엄 블루)
Accent : #0d47a1 (안전 블루) / #00a8e8 (클린 오션)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
원산지 위변조·불법 조업 수산물·콜드체인 이탈 등 소비자 불안 요소를 해소하는 수산물 안전 관리 시스템 발표. HACCP·이력 추적·DNA 원산지 검증까지 과학적 안전 시스템 강조.

[Image Principles]
수산물 위생 검사·냉동 유통 이미지. 블루 안전 배색. HACCP 인증 배지. 이력 추적 플로우.

[Design Characteristics]
• 안전 블루 + 클린 오션 배색
• 수산물 이력 추적 플로우차트
• HACCP·원산지 인증 배지
• 냉동 유통 온도 관리 KPI
• 위해 요소 분석 매트릭스

[Layout Guide]
- Title Slide : 블루 배경 + 안전 검사 이미지 + 블루 안전 헤드라인
- Spec Slide : 안전 관리 카드 (HACCP·원산지·냉동·검역 항목)
- Comparison Slide : 일반 유통 vs 이력 추적 수산물 안전 지표 비교
- CTA Slide : 블루 버튼 + 안전 인증·컨설팅 문의 CTA
- Tone : Safe / Transparent / Scientific
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스마트 수산 양식',
    type: 'Smart Aquaculture Tech',
    colors: ['#0a1a2e', '#00c896', '#00a8e8'],
    cardBg: 'linear-gradient(135deg, rgba(0,200,150,0.09), rgba(0,168,232,0.06))',
    numBg: 'rgba(0,200,150,0.12)', numColor: '#009a72',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스마트 양식·수산 IoT·AI 양식 기술 발표 전문가
Industry : 수산시장
Type : 스마트 수산 양식 — IoT 수질 모니터링·AI 먹이 공급 자동화 양식 기술 자료

[Color Guide]
Background : #0a1a2e (딥 오션 블루)
Text Color : #e0f8ff / #70c8e8 (아이스 블루)
Accent : #00c896 (테크 민트) / #00a8e8 (오션 블루)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
IoT 수질 센서·AI 먹이 자동 공급·원격 모니터링으로 넙치·연어·전복 양식의 생산성을 혁신하는 스마트 양식 기술 발표. 斃사율 감소·성장률 향상 데이터로 ROI 증명.

[Image Principles]
스마트 양식장·수중 센서 이미지. 다크+민트·블루 테크 배색. 수질 데이터 대시보드. AI 먹이 공급 플로우.

[Design Characteristics]
• 딥 오션 + 민트·블루 테크 배색
• IoT 수질 모니터링 대시보드
• 양식 KPI HUD 카드
• AI 먹이 공급 자동화 플로우
• 폐사율·성장률 비교 차트

[Layout Guide]
- Title Slide : 다크 배경 + 스마트 양식 이미지 + 민트 테크 헤드라인
- Spec Slide : 스마트 양식 기능 카드 (수질·먹이·원격·데이터)
- Comparison Slide : 기존 양식 vs 스마트 양식 폐사율·수익 비교
- CTA Slide : 민트 버튼 + 솔루션 도입·파트너십 문의 CTA
- Tone : Innovative / Data-driven / Ocean-tech
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '수산물 ESG 지속가능',
    type: 'Sustainable Seafood ESG',
    colors: ['#e8f5e9', '#1b5e20', '#0057a8'],
    cardBg: 'linear-gradient(135deg, rgba(27,94,32,0.09), rgba(0,87,168,0.06))',
    numBg: 'rgba(27,94,32,0.11)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 지속가능 수산업·MSC 인증·해양 생태 보전 발표 전문가
Industry : 수산시장
Type : 수산물 ESG 지속가능 — MSC 인증·불법 조업 근절·해양 생태계 보전 ESG 자료

[Color Guide]
Background : #e8f5e9 (에코 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #2e6b3e (미디엄 그린)
Accent : #1b5e20 (바다 그린) / #0057a8 (오션 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
MSC(해양관리협의회) 인증·불법 어업 근절·어획량 할당제를 통한 지속가능한 수산업의 미래 가치를 소비자·정부·투자자에게 전달. 오늘 지키지 않으면 내일의 바다가 없다.

[Image Principles]
건강한 바다·지속가능 어업 이미지. 그린+블루 ESG 배색. MSC 인증 배지. 어획량 데이터 차트.

[Design Characteristics]
• 에코 그린 + 오션 블루 ESG 배색
• MSC 인증 배지 시스템
• 어획량·자원 보존 KPI 차트
• 해양 생태계 보전 인포그래픽
• 지속가능 수산 공급망 플로우

[Layout Guide]
- Title Slide : 그린 배경 + 바다 이미지 + 그린 ESG 헤드라인
- Spec Slide : ESG 수산 성과 카드 (MSC·어획량·생태 보전·불법 근절)
- Comparison Slide : 일반 어업 vs 지속가능 어업 자원 보존 비교
- CTA Slide : 그린 버튼 + MSC 인증·ESG 파트너십 CTA
- Tone : Responsible / Marine / Future-focused
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '수산시장 디지털 전환',
    type: 'Fish Market Digital Transform',
    colors: ['#e8f0fe', '#1a73e8', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(255,107,0,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 수산시장 디지털 전환·온라인 경매·B2B 플랫폼 전문가
Industry : 수산시장
Type : 수산시장 디지털 전환 — 온라인 경매·빅데이터 시세·수산 플랫폼 DX 자료

[Color Guide]
Background : #e8f0fe (디지털 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (디지털 블루) / #ff6b00 (시장 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
기존 새벽 현장 경매를 온라인 실시간 경매로 전환하고 빅데이터 시세 분석·B2B 납품 플랫폼·이력 추적 앱으로 수산시장 디지털 혁신을 가속화하는 전략 발표.

[Image Principles]
수산 디지털 플랫폼 UI. 블루+오렌지 DX 배색. 온라인 경매 화면. 시세 분석 대시보드.

[Design Characteristics]
• 라이트 블루 + 오렌지 DX 배색
• 온라인 경매 플랫폼 UI 모형
• 디지털 전환 로드맵 타임라인
• B2B 납품 플로우 다이어그램
• 거래량·가격 데이터 대시보드

[Layout Guide]
- Title Slide : 블루 배경 + 수산 DX 이미지 + 블루 혁신 헤드라인
- Spec Slide : DX 플랫폼 기능 카드 (온라인경매·시세·이력·납품)
- Comparison Slide : 현장 경매 vs 온라인 경매 효율·접근성 비교
- CTA Slide : 블루 버튼 + 플랫폼 입점·파트너십 문의 CTA
- Tone : Progressive / Efficient / Market-modernizing
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 네일샵 전용 7개 디자인 프롬프트 ─────────────────────────
const NAIL_PROMPTS = [
  {
    name: '럭셔리 네일 아뜰리에',
    type: 'Luxury Nail Atelier',
    colors: ['#0c0c14', '#d4af37', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(212,175,55,0.10), rgba(12,12,20,0.06))',
    numBg: 'rgba(212,175,55,0.14)', numColor: '#9a7a18',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프리미엄 네일 아뜰리에·하이엔드 네일 아트 브랜딩 전문가
Industry : 네일샵
Type : 럭셔리 네일 아뜰리에 — VIP 고객을 위한 프리미엄 네일 아트 살롱 자료

[Color Guide]
Background : #0c0c14 (아뜰리에 다크)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #d4af37 (아뜰리에 골드) / #e8c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
손끝의 예술을 창조하는 네일 아뜰리에의 장인 정신과 럭셔리 감성. 핸드페인팅·젤 아트·브라이덜 네일 등 프리미엄 서비스를 VIP 고객에게 절제된 톤으로 전달. 손이 말하는 예술.

[Image Principles]
고급 네일 아트 클로즈업. 다크+골드 럭셔리 배색. 아뜰리에 인테리어. 아트 네일 포트폴리오.

[Design Characteristics]
• 아뜰리에 다크 + 골드 배색
• 세리프 아트 타이포그래피
• 네일 아트 포트폴리오 갤러리
• VIP 서비스 패키지 카드
• 아티스트 프로필 골드 카드

[Layout Guide]
- Title Slide : 다크 배경 + 네일 아트 이미지 + 골드 세리프 살롱명
- Spec Slide : 프리미엄 서비스 카드 (아트 종류·재료·시간·가격)
- Comparison Slide : 일반 젤 vs 핸드페인팅 아트 서비스 비교
- CTA Slide : 골드 버튼 + VIP 예약·브라이덜 상담 CTA
- Tone : Artisanal / Exclusive / Precious
- Slide count : 7 pages
- Font size contrast : 제목 52pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '젤 트렌드 컬러팝',
    type: 'Gel Trend Color Pop',
    colors: ['#fdf0ff', '#e91e63', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.08), rgba(255,214,0,0.06))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 트렌디 젤 네일·시즌 컬러 네일 마케팅 전문가
Industry : 네일샵
Type : 젤 트렌드 컬러팝 — MZ 감성 시즌 트렌드 젤 네일 마케팅 자료

[Color Guide]
Background : #fdf0ff (소프트 라벤더)
Text Color : #1a001a (딥 퍼플 블랙) / #5a2a6a (미디엄 퍼플)
Accent : #e91e63 (트렌드 핑크) / #ffd600 (팝 옐로우)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
시즌마다 바뀌는 젤 네일 컬러 트렌드를 인스타그램·틱톡 감성으로 소개하는 뷰티 마케팅 톤. 핵심 컬러 트렌드·신규 아트 기법·빠른 예약 유도 중심. 손끝으로 시즌을 표현해요.

[Image Principles]
비비드 젤 네일 클로즈업. 라벤더+핑크+옐로우 배색. 컬러 스와치. SNS 인증샷 갤러리.

[Design Characteristics]
• 라벤더 + 핑크·옐로우 트렌디 배색
• 시즌 컬러 스와치 팔레트
• 네일 아트 갤러리 그리드
• 예약 가능 일정 UI 모티프
• 시즌 한정 이벤트 배지

[Layout Guide]
- Title Slide : 라벤더 배경 + 트렌드 네일 이미지 + 핑크 세리프 제목
- Spec Slide : 시즌 트렌드 네일 카드 (컬러·아트·재료·가격)
- Comparison Slide : 시즌별 인기 컬러·아트 트렌드 TOP3 비교
- CTA Slide : 핑크 버튼 + 네이버 예약·DM 예약 CTA
- Tone : Playful / Trendy / Seasonal
- Slide count : 7 pages
- Font size contrast : 제목 48pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '네일 케어 웰니스',
    type: 'Nail Care Wellness',
    colors: ['#f1f8e9', '#2e7d32', '#ff8f00'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(255,143,0,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 손·발 케어·영양 네일·큐티클 케어 전문가
Industry : 네일샵
Type : 네일 케어 웰니스 — 손·발 건강을 위한 영양 네일·케어 서비스 자료

[Color Guide]
Background : #f1f8e9 (케어 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (케어 그린) / #ff8f00 (웜 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
젤·아크릴 네일이 아닌 손·발 건강에 집중하는 영양 네일·케어 서비스의 전문성 강조. 생물 유래 성분·무독성 제품·큐티클 케어 프로그램으로 건강한 손끝 관리. 예쁜 손이 아닌 건강한 손.

[Image Principles]
손 케어·영양 네일 이미지. 그린+오렌지 웰니스 배색. 성분 인포그래픽. 케어 단계 플로우.

[Design Characteristics]
• 웰니스 그린 + 오렌지 배색
• 케어 성분 인포그래픽 카드
• 손·발 케어 프로그램 단계 플로우
• 무독성 인증 배지
• 고객 손 개선 Before/After

[Layout Guide]
- Title Slide : 그린 배경 + 손 케어 이미지 + 그린 헤드라인
- Spec Slide : 케어 프로그램 카드 (영양·큐티클·각질·보습)
- Comparison Slide : 일반 젤 시술 vs 케어 집중 관리 손 상태 비교
- CTA Slide : 그린 버튼 + 케어 프로그램 예약 CTA
- Tone : Healthy / Gentle / Caring
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '네일샵 프랜차이즈 IR',
    type: 'Nail Shop Franchise IR',
    colors: ['#fff8e1', '#ff8f00', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(255,143,0,0.09), rgba(21,101,192,0.06))',
    numBg: 'rgba(255,143,0,0.12)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 네일샵 프랜차이즈 가맹 모집·창업 설명 전문가
Industry : 네일샵
Type : 네일샵 프랜차이즈 IR — 예비 네일 창업자 대상 가맹 사업 설명 자료

[Color Guide]
Background : #fff8e1 (크림 선샤인)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #ff8f00 (창업 오렌지) / #1565c0 (신뢰 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
네일 기술을 가진 예비 창업자에게 소자본 창업·본사 교육 지원·단골 고객 확보 전략을 설득력 있게 전달하는 가맹 사업 설명회 톤. 기술 있으면 창업도 어렵지 않아요.

[Image Principles]
네일샵 창업 성공 이미지. 오렌지+블루 창업 배색. 수익 시뮬레이션 차트. 창업 단계 플로우.

[Design Characteristics]
• 크림 + 오렌지 창업 배색
• 창업 수익 시뮬레이션 카드
• 소자본 창업 비용 인포그래픽
• 본사 교육·지원 아이콘 카드
• 성공 가맹점 후기 카드

[Layout Guide]
- Title Slide : 크림 배경 + 네일샵 이미지 + 오렌지 창업 헤드라인
- Spec Slide : 창업 KPI 카드 (초기 투자·월 매출·수익률·회수 기간)
- Comparison Slide : 독립 창업 vs 프랜차이즈 창업 지원·리스크 비교
- CTA Slide : 오렌지 버튼 + 가맹 상담·설명회 신청 CTA
- Tone : Empowering / Practical / Supportive
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 핵심 수치 68pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '브라이덜 네일 패키지',
    type: 'Bridal Nail Package',
    colors: ['#fff8f8', '#e91e63', '#c9a84c'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.07), rgba(201,168,76,0.06))',
    numBg: 'rgba(233,30,99,0.09)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 웨딩·브라이덜 네일 패키지 마케팅 전문가
Industry : 네일샵
Type : 브라이덜 네일 패키지 — 예비 신부·웨딩 네일 패키지 서비스 제안 자료

[Color Guide]
Background : #fff8f8 (브라이덜 화이트)
Text Color : #2a0a14 (딥 로즈) / #6a2030 (미디엄 로즈)
Accent : #e91e63 (브라이덜 핑크) / #c9a84c (웨딩 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
인생에서 가장 아름다운 날을 위한 브라이덜 네일의 특별함과 설레임을 전달. 웨딩 테마·드레스 컬러 연계 맞춤 아트·패키지 서비스로 예비 신부의 완벽한 하루를 완성.

[Image Principles]
웨딩·브라이덜 네일 이미지. 화이트+핑크+골드 웨딩 배색. 부케와 함께한 네일 컷. 패키지 구성 카드.

[Design Characteristics]
• 브라이덜 화이트 + 핑크·골드 배색
• 세리프 로맨틱 타이포그래피
• 브라이덜 네일 포트폴리오 갤러리
• 패키지 구성 비교 카드
• 웨딩 일정 연계 예약 안내

[Layout Guide]
- Title Slide : 화이트 배경 + 브라이덜 네일 이미지 + 핑크·골드 세리프 제목
- Spec Slide : 브라이덜 패키지 카드 (기본·프리미엄·풀케어 비교)
- Comparison Slide : 단순 젤 네일 vs 브라이덜 풀패키지 구성 비교
- CTA Slide : 핑크 버튼 + 브라이덜 상담·사전 예약 CTA
- Tone : Romantic / Special / Memorable
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '젠더리스 네일 스튜디오',
    type: 'Genderless Nail Studio',
    colors: ['#1a1a2e', '#7c3aed', '#00f5c4'],
    cardBg: 'linear-gradient(135deg, rgba(124,58,237,0.09), rgba(0,245,196,0.06))',
    numBg: 'rgba(124,58,237,0.12)', numColor: '#7c3aed',
    prompt: `[NotebookLM Slide Design Guide]

Role : 젠더리스·남성 네일·퀴어 인클루전 네일 스튜디오 전문가
Industry : 네일샵
Type : 젠더리스 네일 스튜디오 — 성별 구분 없는 포용적 네일 아트 스튜디오 자료

[Color Guide]
Background : #1a1a2e (인클루전 다크)
Text Color : #e8e0ff (라이트 라벤더) / #a090cc (미디엄 퍼플)
Accent : #7c3aed (젠더리스 퍼플) / #00f5c4 (프리덤 민트)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
남녀 구분 없이 누구나 자신의 손끝을 표현할 수 있는 젠더리스 네일 스튜디오의 자유롭고 포용적인 톤. MZ 세대의 자기 표현 욕구에 공명하는 브랜드 철학 전달.

[Image Principles]
다양한 사람의 네일 아트 이미지. 다크+퍼플·민트 배색. 자유로운 표현 일러스트. 포용적 브랜드 이미지.

[Design Characteristics]
• 다크 + 퍼플·민트 인클루전 배색
• 젠더리스 아이콘·일러스트
• 네일 아트 다양성 갤러리
• 브랜드 철학 카드
• 커뮤니티 해시태그 비주얼

[Layout Guide]
- Title Slide : 다크 배경 + 젠더리스 네일 이미지 + 퍼플 헤드라인
- Spec Slide : 서비스 메뉴 카드 (아트·케어·패키지 — 모두를 위한)
- Comparison Slide : 기존 여성 전용 vs 젠더리스 고객 접근성 비교
- CTA Slide : 퍼플 버튼 + 예약·커뮤니티 참여 CTA
- Tone : Inclusive / Expressive / Bold
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '네일샵 SNS 성장',
    type: 'Nail Shop SNS Growth',
    colors: ['#fce4ec', '#e91e63', '#ff9800'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.08), rgba(255,152,0,0.06))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 네일샵 인스타그램·SNS 마케팅·고객 유입 전략 전문가
Industry : 네일샵
Type : 네일샵 SNS 성장 — 인스타·네이버·카카오 활용 신규 고객 유입 전략 자료

[Color Guide]
Background : #fce4ec (소프트 핑크)
Text Color : #2a0a18 (딥 로즈 블랙) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (SNS 핑크) / #ff9800 (액션 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
예쁜 네일 사진 한 장이 최고의 광고인 네일샵 SNS 마케팅 전략 발표. 인스타 릴스·네이버 예약·카카오 채널로 신규 고객을 끌어들이고 재방문을 유도하는 디지털 마케팅 실전 전략.

[Image Principles]
SNS 감성 네일 이미지. 핑크+오렌지 소셜 배색. 인스타그램 UI 모형. 고객 유입 채널 인포그래픽.

[Design Characteristics]
• 소프트 핑크 + 오렌지 SNS 배색
• 인스타그램 피드 그리드 레이아웃
• 채널별 성과 KPI 카드
• 예약 시스템 연동 플로우
• 이벤트·할인 배지 시스템

[Layout Guide]
- Title Slide : 핑크 배경 + SNS 네일 이미지 + 핑크 디지털 헤드라인
- Spec Slide : SNS 채널별 전략 카드 (인스타·네이버·카카오·틱톡)
- Comparison Slide : SNS 마케팅 전·후 예약 수·신규 고객 성장 비교
- CTA Slide : 핑크 버튼 + 팔로우·예약 이벤트 참여 CTA
- Tone : Social / Vibrant / Engagement-focused
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 게임 전용 7개 디자인 프롬프트 ─────────────────────────
const GAME_PROMPTS = [
  {
    name: '게임 타이틀 런칭',
    type: 'Game Title Launch',
    colors: ['#0d0218', '#ff3b7c', '#ffd60a'],
    cardBg: 'linear-gradient(135deg, rgba(255,59,124,0.09), rgba(255,214,10,0.06))',
    numBg: 'rgba(255,59,124,0.12)', numColor: '#cc0055',
    prompt: `[NotebookLM Slide Design Guide]

Role : 게임 타이틀 신규 출시 키노트 전문가
Industry : 게임
Type : 게임 타이틀 런칭 — 신작 게임 출시 기념 언론·파트너 대상 발표 자료

[Color Guide]
Background : #0d0218 (게임 다크 퍼플)
Text Color : #fff0f8 / #c090b0 (소프트 핑크)
Accent : #ff3b7c (게임 핑크) / #ffd60a (에너지 옐로우)
Font : Bebas Neue (제목) / Noto Sans KR (본문)

[Tone & Manner]
E3·게임스컴·지스타 수준의 게임 타이틀 언론 공개 키노트 톤. 스토리·게임플레이·그래픽·출시 일정을 언론·투자자·퍼블리셔에게 극적으로 발표. 새로운 세계가 열린다.

[Image Principles]
게임 스크린샷·키아트 이미지. 다크+핑크·옐로우 배색. 캐릭터 렌더링. 게임플레이 UI.

[Design Characteristics]
• 게임 다크 + 핑크·옐로우 배색
• 게임 키아트 풀블리드 레이아웃
• 게임플레이 스크린샷 갤러리
• 출시 카운트다운 모티프
• 장르·플랫폼 배지

[Layout Guide]
- Title Slide : 다크 배경 + 키아트 이미지 + 핑크 대형 타이틀명
- Spec Slide : 게임 스펙 카드 (장르·플랫폼·개발사·출시일·등급)
- Comparison Slide : 경쟁 게임 대비 차별점·USP 비교
- CTA Slide : 핑크 버튼 + 사전 예약·퍼블리싱 문의 CTA
- Tone : Epic / Cinematic / Thrilling
- Slide count : 7 pages
- Font size contrast : 제목 64pt 볼드 / 소제목 22pt / 본문 14pt
- Text per slide : 최대 30단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '게임사 투자 IR',
    type: 'Game Studio IR Pitch',
    colors: ['#0a0a1a', '#6c63ff', '#00f5c4'],
    cardBg: 'linear-gradient(135deg, rgba(108,99,255,0.09), rgba(0,245,196,0.06))',
    numBg: 'rgba(108,99,255,0.12)', numColor: '#6c63ff',
    prompt: `[NotebookLM Slide Design Guide]

Role : 게임 스튜디오 투자 유치·퍼블리싱 계약 IR 전문가
Industry : 게임
Type : 게임사 투자 IR — 게임 스튜디오 시드·시리즈 A 투자 유치 피치덱

[Color Guide]
Background : #0a0a1a (스튜디오 다크)
Text Color : #e8e0ff (라이트 라벤더) / #a090cc (미디엄 퍼플)
Accent : #6c63ff (스튜디오 인디고) / #00f5c4 (게임 민트)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
게임 스튜디오의 핵심 IP·팀 역량·시장 기회를 게임 전문 투자자·퍼블리셔에게 설득하는 IR 톤. DAU·ARPU·리텐션·LTV로 게임 비즈니스 건전성 증명. 우리의 IP가 다음 글로벌 히트다.

[Image Principles]
게임 스크린샷+팀 이미지. 다크+인디고·민트 배색. 지표 차트. IP 세계관 시각화.

[Design Characteristics]
• 스튜디오 다크 + 인디고·민트 배색
• IP 세계관 쇼케이스
• 게임 KPI 트랙션 카드
• 팀 역량 프로필 카드
• 출시 로드맵 타임라인

[Layout Guide]
- Title Slide : 다크 배경 + 게임 이미지 + 인디고 스튜디오명
- Spec Slide : 게임 KPI 카드 (DAU·ARPU·리텐션·LTV·ROI)
- Comparison Slide : 동종 장르 게임 시장 포지셔닝 비교
- CTA Slide : 인디고 버튼 + 투자·퍼블리싱 미팅 CTA
- Tone : Creative / IP-driven / Investable
- Slide count : 7 pages
- Font size contrast : 제목 48pt / 핵심 수치 72pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '모바일 게임 UA 전략',
    type: 'Mobile Game User Acquisition',
    colors: ['#fff0f5', '#e91e63', '#ff9800'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.08), rgba(255,152,0,0.06))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 모바일 게임 UA·마케팅·라이브옵스 전략 전문가
Industry : 게임
Type : 모바일 게임 UA 전략 — 유저 획득·리텐션·라이브옵스 마케팅 전략 자료

[Color Guide]
Background : #fff0f5 (게임 핑크 화이트)
Text Color : #2a0a18 (딥 로즈 블랙) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (UA 핑크) / #ff9800 (리텐션 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
Facebook·AppLovin·Unity Ads를 통한 모바일 게임 UA 전략·리텐션 이벤트·라이브옵스 운영을 마케팅팀·GM에게 데이터로 보고하는 톤. ROAS·CPI·LTV로 마케팅 효율 극대화.

[Image Principles]
모바일 게임 광고·인앱 이벤트 이미지. 핑크+오렌지 배색. ROAS 차트. 퍼널 분석.

[Design Characteristics]
• 소프트 핑크 + 오렌지 배색
• UA 채널별 ROAS·CPI 비교
• 코호트 리텐션 곡선
• 라이브옵스 이벤트 캘린더
• 매출 기여 채널 파이 차트

[Layout Guide]
- Title Slide : 핑크 배경 + 게임 이벤트 이미지 + 핑크 헤드라인
- Spec Slide : UA KPI 카드 (CPI·ROAS·D30 리텐션·LTV)
- Comparison Slide : 채널별 UA 효율·비용 비교 차트
- CTA Slide : 핑크 버튼 + UA 파트너십·예산 협의 CTA
- Tone : Data-driven / Growth / Performance
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '글로벌 e스포츠 IP',
    type: 'Global Esports IP',
    colors: ['#0d0d1a', '#00e5ff', '#ff6b35'],
    cardBg: 'linear-gradient(135deg, rgba(0,229,255,0.09), rgba(255,107,53,0.06))',
    numBg: 'rgba(0,229,255,0.12)', numColor: '#00a8c4',
    prompt: `[NotebookLM Slide Design Guide]

Role : e스포츠 리그·IP 사업화 전략 발표 전문가
Industry : 게임
Type : 글로벌 e스포츠 IP — e스포츠 리그·선수 브랜딩·IP 라이선싱 전략 자료

[Color Guide]
Background : #0d0d1a (e스포츠 다크)
Text Color : #e8f8ff / #80c8e0 (아이스 블루)
Accent : #00e5ff (e스포츠 사이언) / #ff6b35 (액션 오렌지)
Font : Barlow Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
리그오브레전드·발로란트 수준 e스포츠 생태계를 구축하는 IP 사업화 전략 발표 톤. 대회 시청자 수·팀 스폰서십·콘텐츠 수익·머천다이징으로 e스포츠 IP 가치를 증명.

[Image Principles]
e스포츠 무대·선수 이미지. 다크+사이언·오렌지 배색. 시청자 성장 차트. 글로벌 리그 지도.

[Design Characteristics]
• e스포츠 다크 + 사이언 배색
• 글로벌 리그 현황 지도
• 시청자·스폰서십 수치 강조
• 팀·선수 카드 레이아웃
• IP 수익 구조 인포그래픽

[Layout Guide]
- Title Slide : 다크 배경 + e스포츠 이미지 + 사이언 대형 헤드라인
- Spec Slide : e스포츠 IP KPI 카드 (시청자·팀·스폰서십·수익)
- Comparison Slide : 국내 vs 글로벌 e스포츠 시장 규모 비교
- CTA Slide : 사이언 버튼 + 스폰서십·IP 라이선싱 문의 CTA
- Tone : Epic / Competitive / Global
- Slide count : 7 pages
- Font size contrast : 제목 56pt 컨덴스드 / 소제목 22pt / 본문 14pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '메타버스 게임 세계관',
    type: 'Metaverse Game World',
    colors: ['#0a0618', '#9b59b6', '#1abc9c'],
    cardBg: 'linear-gradient(135deg, rgba(155,89,182,0.09), rgba(26,188,156,0.06))',
    numBg: 'rgba(155,89,182,0.12)', numColor: '#7d3c98',
    prompt: `[NotebookLM Slide Design Guide]

Role : 메타버스·NFT 게임·P2E 세계관 발표 전문가
Industry : 게임
Type : 메타버스 게임 세계관 — Web3·메타버스 게임 생태계 및 토크노믹스 발표 자료

[Color Guide]
Background : #0a0618 (메타버스 다크 퍼플)
Text Color : #f0e8ff / #a890cc (소프트 라벤더)
Accent : #9b59b6 (메타버스 퍼플) / #1abc9c (버추얼 틸)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
블록체인 기반 게임 생태계·아이템 소유권·토크노믹스·DAO 거버넌스를 Web3 게임 투자자·커뮤니티에게 설명하는 비전 발표 톤. 게임이 곧 경제가 된다.

[Image Principles]
메타버스 세계관 아트 이미지. 다크+퍼플·틸 배색. 토크노믹스 다이어그램. DAO 거버넌스 플로우.

[Design Characteristics]
• 메타버스 다크 + 퍼플·틸 배색
• 세계관 아트 풀블리드 레이아웃
• 토크노믹스 파이 차트
• DAO 거버넌스 플로우
• NFT 아이템 쇼케이스

[Layout Guide]
- Title Slide : 다크 배경 + 세계관 아트 + 퍼플 글로우 헤드라인
- Spec Slide : 게임 생태계 카드 (토큰·NFT·DAO·P2E 구조)
- Comparison Slide : 기존 게임 모델 vs Web3 게임 경제 비교
- CTA Slide : 틸 버튼 + 커뮤니티 참여·투자 문의 CTA
- Tone : Immersive / Web3 / Community-first
- Slide count : 7 pages
- Font size contrast : 제목 50pt / 소제목 21pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '게임 개발 포스트모텀',
    type: 'Game Development Post-mortem',
    colors: ['#f5f5f7', '#1d1d1f', '#6c63ff'],
    cardBg: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(108,99,255,0.10)', numColor: '#6c63ff',
    prompt: `[NotebookLM Slide Design Guide]

Role : 게임 개발 사후 분석·프로젝트 리뷰 발표 전문가
Industry : 게임
Type : 게임 개발 포스트모텀 — 출시 후 개발 과정 회고·교훈 정리 발표 자료

[Color Guide]
Background : #f5f5f7 (리뷰 라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #6c63ff (게임데브 인디고) / #34c759 (성공 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
GDC 포스트모텀 발표 스타일의 솔직하고 교육적인 개발 회고 톤. 잘된 점·아쉬운 점·배운 교훈을 팀·커뮤니티·업계와 투명하게 공유. 실패에서 배운 것이 다음 성공의 씨앗이다.

[Image Principles]
개발 과정 스크린샷. 그레이+인디고 배색. 개발 타임라인. 지표 성과 차트.

[Design Characteristics]
• 그레이 + 인디고 배색
• 개발 타임라인 레이아웃
• 잘된 점/아쉬운 점 비교 카드
• 핵심 지표 성과 차트
• 팀 회고 인용 카드

[Layout Guide]
- Title Slide : 화이트 배경 + 게임 이미지 + 인디고 포스트모텀 제목
- Spec Slide : 개발 KPI 카드 (기간·팀 규모·예산·출시 지표)
- Comparison Slide : 목표 vs 실제 성과 비교 (긍정·부정 요인)
- CTA Slide : 인디고 버튼 + 다음 프로젝트 협업·투자 제안 CTA
- Tone : Honest / Reflective / Educational
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '게임사 연간 IR',
    type: 'Game Company Annual IR',
    colors: ['#ffffff', '#0d0d1a', '#6c63ff'],
    cardBg: 'linear-gradient(135deg, rgba(108,99,255,0.09), rgba(255,255,255,0.8))',
    numBg: 'rgba(108,99,255,0.12)', numColor: '#6c63ff',
    prompt: `[NotebookLM Slide Design Guide]

Role : 게임 상장사 연간 IR·실적 발표 전문가
Industry : 게임
Type : 게임사 연간 IR — 주주·기관투자자 대상 게임 기업 연간 성과 IR 자료

[Color Guide]
Background : #ffffff / #f8f4ff (라이트 퍼플 틴트)
Text Color : #1a001a (딥 퍼플 블랙) / #4a2a7a (미디엄 퍼플)
Accent : #6c63ff (게임사 인디고) / #0d0d1a (딥 블랙)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
넥슨·넷마블·크래프톤 수준 게임 상장사의 연간 매출·신작 파이프라인·글로벌 확장 전략을 주주에게 투명하게 전달. IP 포트폴리오 가치·장르 다양화·해외 수익 비중 강조.

[Image Principles]
게임사 대표 IP 이미지. 화이트+인디고 IR 배색. 매출 성장 차트. 글로벌 서비스 지도.

[Design Characteristics]
• 화이트 + 인디고 IR 배색
• 게임 IP 포트폴리오 카드
• 매출·MAU 성장 차트
• 글로벌 서비스 현황 지도
• 신작 파이프라인 타임라인

[Layout Guide]
- Title Slide : 화이트 + 대표 IP 이미지 + 인디고 공식 IR 제목
- Spec Slide : 재무 KPI 카드 (매출·영업이익·MAU·신작 출시 수)
- Comparison Slide : 연도별 IP별 매출 기여·성장 추이 비교
- CTA Slide : 인디고 배경 + IR 미팅·NDR 신청 CTA
- Tone : Authoritative / IP-rich / Growth-focused
- Slide count : 7 pages
- Font size contrast : 제목 42pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 건설사 전용 7개 디자인 프롬프트 ─────────────────────────
const CONSTRUCTION_PROMPTS = [
  {
    name: '프레스티지 시행사 IR',
    type: 'Prestige Developer IR',
    colors: ['#0a1628', '#c9a84c', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.10), rgba(10,22,40,0.06))',
    numBg: 'rgba(201,168,76,0.14)', numColor: '#9a7a20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 부동산 시행사·시공사 IR·분양 발표 전문가
Industry : 건설사
Type : 프레스티지 시행사 IR — 대형 개발 프로젝트 시행사 투자자·금융기관 발표 자료

[Color Guide]
Background : #0a1628 (딥 컨스트럭션 네이비)
Text Color : #f5f5f0 (크림 화이트) / #b0a8c0 (실버 그레이)
Accent : #c9a84c (프레스티지 골드) / #e2c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
대규모 복합 개발·주거·상업 프로젝트의 사업성과 신뢰를 시행사·PF 금융기관에 전달하는 권위 있는 IR 톤. 입지 분석·사업 구조·수익률·시공 역량을 데이터로 증명. 도시를 바꾸는 개발의 가치.

[Image Principles]
대형 건축 랜드마크 이미지. 네이비+골드 권위 배색. 부지 조감도 렌더링. 재무 수익 차트.

[Design Characteristics]
• 딥 네이비 + 프레스티지 골드 배색
• 세리프 권위 타이포그래피
• 사업 구조 플로우 다이어그램
• 입지·수익률 인포그래픽
• 골드 테두리 KPI 카드

[Layout Guide]
- Title Slide : 네이비 배경 + 랜드마크 랜더링 + 골드 세리프 프로젝트명
- Spec Slide : 사업 KPI 카드 (총사업비·분양 수익·IRR·사업 기간)
- Comparison Slide : 인근 분양가·입지 경쟁 프로젝트 비교 분석
- CTA Slide : 골드 버튼 + PF 협의·투자 미팅 신청 CTA
- Tone : Authoritative / Investment-grade / Visionary
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '아파트 분양 클린',
    type: 'Apartment Sales Clean',
    colors: ['#ffffff', '#003d82', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,61,130,0.08), rgba(0,102,204,0.05))',
    numBg: 'rgba(0,61,130,0.10)', numColor: '#003d82',
    prompt: `[NotebookLM Slide Design Guide]

Role : 아파트·주거 분양 홍보관 발표 전문가
Industry : 건설사
Type : 아파트 분양 클린 — 수요자 대상 아파트 분양 홍보·입주자 모집 자료

[Color Guide]
Background : #ffffff / #f0f6ff (라이트 블루 틴트)
Text Color : #0a1628 (딥 네이비) / #3d5a8a (블루 그레이)
Accent : #003d82 (분양 네이비) / #0066cc (포인트 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
내 집 마련을 꿈꾸는 실수요자에게 입지·평면·커뮤니티·가격을 명확하고 신뢰감 있게 전달. GS·현대·대우 수준 브랜드 아파트의 라이프스타일 가치 강조. 당신의 이상적인 삶이 시작되는 곳.

[Image Principles]
아파트 단지 조감도·실내 렌더링 이미지. 네이비+블루 신뢰 배색. 평면도 인포그래픽. 입지 교통 지도.

[Design Characteristics]
• 화이트 + 네이비 신뢰 배색
• 단지 조감도 풀블리드 레이아웃
• 평형별 평면도 카드
• 입지·교통 인포그래픽 지도
• 특화 커뮤니티 시설 아이콘

[Layout Guide]
- Title Slide : 화이트 + 조감도 이미지 + 네이비 공식 프로젝트명
- Spec Slide : 분양 정보 카드 (세대 수·평형·분양가·입주 시기)
- Comparison Slide : 인근 단지 입지·가격·브랜드 비교 매트릭스
- CTA Slide : 네이비 버튼 + 모델하우스 예약·분양 상담 CTA
- Tone : Trustworthy / Lifestyle / Aspirational
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스마트 건설 테크',
    type: 'Smart Construction Tech',
    colors: ['#0a1628', '#00c8ff', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(0,200,255,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(0,200,255,0.12)', numColor: '#0097c8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스마트건설·BIM·드론 측량 기술 발표 전문가
Industry : 건설사
Type : 스마트 건설 테크 — BIM·드론·AI 기반 스마트 건설 기술 혁신 자료

[Color Guide]
Background : #0a1628 (테크 다크 블루)
Text Color : #e0f4ff / #7ab8d8 (아이스 블루)
Accent : #00c8ff (스마트 사이언) / #34c759 (그린 테크)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
BIM(건물정보모델링)·드론 측량·AI 공정 관리·모듈러 공법 등 건설 디지털 전환을 선도하는 혁신 기업 이미지. 공기 단축·비용 절감·안전 향상 데이터로 기술 우위 증명.

[Image Principles]
스마트 건설 현장·BIM 3D 모델 이미지. 다크+사이언 배색. AI 공정 대시보드 UI. 드론 측량 이미지.

[Design Characteristics]
• 테크 다크 + 사이언·그린 배색
• BIM 3D 모델 쇼케이스
• 공정 KPI HUD 카드
• 스마트 건설 기술 플로우
• 공기 단축·비용 절감 수치 강조

[Layout Guide]
- Title Slide : 다크 배경 + BIM 이미지 + 사이언 글로우 헤드라인
- Spec Slide : 스마트 건설 기술 카드 (BIM·드론·AI·모듈러)
- Comparison Slide : 기존 공법 vs 스마트 건설 공기·비용 비교
- CTA Slide : 사이언 버튼 + 기술 협력·발주 문의 CTA
- Tone : Innovative / Precise / Future-forward
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '상업용 부동산 개발',
    type: 'Commercial Real Estate Development',
    colors: ['#f5f5f7', '#1d1d1f', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,102,204,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,102,204,0.10)', numColor: '#0066cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 오피스·물류센터·상업시설 개발 B2B 발표 전문가
Industry : 건설사
Type : 상업용 부동산 개발 — 오피스·리테일·물류 상업 개발 B2B 제안 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #0066cc (코퍼레이트 블루) / #34c759 (가치 그린)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
오피스·리테일·물류센터 개발을 기업·리츠·기관투자자에게 제안하는 B2B 상업 부동산 발표 톤. 임대 수익·공실률·자산 가치 상승을 데이터로 설득. 공간이 곧 자산이다.

[Image Principles]
상업 건물·오피스 이미지. 코퍼레이트 블루 배색. 임대 수익 차트. 입지 분석 지도.

[Design Characteristics]
• 화이트 + 블루 코퍼레이트 배색
• 임대 수익 KPI 대시보드
• 입지 분석 지도 인포그래픽
• 임차인 현황 카드
• 자산 가치 성장 차트

[Layout Guide]
- Title Slide : 화이트 + 오피스 빌딩 이미지 + 블루 공식 헤드라인
- Spec Slide : 개발 스펙 카드 (연면적·임대율·NOI·Cap Rate)
- Comparison Slide : 권역별 오피스·물류 임대 시장 비교 분석
- CTA Slide : 블루 버튼 + 투자 협의·임대 문의 CTA
- Tone : Professional / Investment-focused / Data-driven
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '그린빌딩 ESG 건설',
    type: 'Green Building ESG',
    colors: ['#e8f5e9', '#1b5e20', '#0057a8'],
    cardBg: 'linear-gradient(135deg, rgba(27,94,32,0.09), rgba(0,87,168,0.06))',
    numBg: 'rgba(27,94,32,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 친환경 건축·제로에너지 빌딩·녹색건축 인증 전문가
Industry : 건설사
Type : 그린빌딩 ESG 건설 — 제로에너지·탄소중립 친환경 건축 전략 자료

[Color Guide]
Background : #e8f5e9 (그린빌딩 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #2e6b3e (미디엄 그린)
Accent : #1b5e20 (그린빌딩 그린) / #0057a8 (넷제로 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
제로에너지 빌딩·탄소중립 공법·녹색건축 인증(G-SEED·LEED)을 통해 지속가능한 건축의 미래를 선도하는 ESG 건설 기업 이미지. 건물이 환경을 살린다.

[Image Principles]
친환경 건물·태양광 패널 이미지. 그린+블루 ESG 배색. 에너지 절감 인포그래픽. 인증 마크 배치.

[Design Characteristics]
• 그린빌딩 그린 + 넷제로 블루 배색
• 에너지 절감 수치 강조
• 탄소중립 로드맵 타임라인
• 녹색건축 인증 배지 시스템
• 친환경 공법 플로우

[Layout Guide]
- Title Slide : 그린 배경 + 친환경 빌딩 이미지 + 그린 에코 헤드라인
- Spec Slide : 그린빌딩 성능 카드 (에너지·탄소·물·재료)
- Comparison Slide : 일반 건물 vs 제로에너지 빌딩 운영비 비교
- CTA Slide : 그린 버튼 + 친환경 건축 협력 문의 CTA
- Tone : Sustainable / Responsible / Innovative
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '안전 시공 현장',
    type: 'Safety First Construction',
    colors: ['#fff8e1', '#ff8f00', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(255,143,0,0.09), rgba(21,101,192,0.06))',
    numBg: 'rgba(255,143,0,0.12)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 건설 현장 안전 관리·산업안전보건 발표 전문가
Industry : 건설사
Type : 안전 시공 현장 — 건설 현장 안전 경영·무재해 목표 달성 보고 자료

[Color Guide]
Background : #fff8e1 (안전 크림 옐로우)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #ff8f00 (안전 오렌지) / #1565c0 (신뢰 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
건설 현장 무재해 목표·안전 문화 정착·스마트 안전 장비 도입을 발주처·협력사·감독기관에 보고하는 안전 경영 톤. 사람이 먼저, 안전이 최우선이다.

[Image Principles]
안전 장비 착용 현장 이미지. 오렌지+블루 안전 배색. 사고율 감소 차트. 안전 체크리스트 레이아웃.

[Design Characteristics]
• 오렌지 안전 포인트 + 블루 신뢰 배색
• 안전 KPI 대시보드
• 사고율 감소 트렌드 차트
• 안전 체크리스트 레이아웃
• 스마트 안전 장비 아이콘

[Layout Guide]
- Title Slide : 크림 배경 + 안전 현장 이미지 + 오렌지 안전 헤드라인
- Spec Slide : 안전 KPI 카드 (무재해 일수·아차사고율·안전교육 이수)
- Comparison Slide : 전년 vs 당년 재해율·무재해 현장 비율 비교
- CTA Slide : 오렌지 버튼 + 안전 경영 협력·인증 문의 CTA
- Tone : Safety-first / Transparent / Accountable
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 핵심 수치 68pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '건설사 연간 IR',
    type: 'Construction Company IR',
    colors: ['#ffffff', '#001a6e', '#c9a84c'],
    cardBg: 'linear-gradient(135deg, rgba(0,26,110,0.08), rgba(201,168,76,0.06))',
    numBg: 'rgba(0,26,110,0.10)', numColor: '#001a6e',
    prompt: `[NotebookLM Slide Design Guide]

Role : 건설사 상장사 연간 IR·실적 보고 전문가
Industry : 건설사
Type : 건설사 연간 IR — 주주·기관투자자 대상 연간 경영 성과 IR 자료

[Color Guide]
Background : #ffffff / #f0f4ff (라이트 블루)
Text Color : #0a1040 (딥 네이비) / #3a4a7a (블루 그레이)
Accent : #001a6e (건설 네이비) / #c9a84c (가치 골드)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
GS건설·대우건설·포스코이앤씨 수준 대형 건설사의 수주 잔고·매출·영업이익·신규 수주 전략을 주주에게 권위 있게 전달. 국내외 수주 파이프라인·신사업 비전 포함.

[Image Principles]
대형 건설 프로젝트 이미지. 네이비+골드 권위 배색. 재무 성과 차트. 수주 현황 지도.

[Design Characteristics]
• 화이트 + 네이비 IR 권위 배색
• 수주·매출 KPI 대시보드
• 해외 수주 현황 지도
• 신규 수주 파이프라인 카드
• 배당·주주환원 정책 카드

[Layout Guide]
- Title Slide : 화이트 + 대표 프로젝트 이미지 + 네이비 공식 IR 제목
- Spec Slide : 재무 KPI 카드 (매출·영업이익·수주 잔고·신규 수주)
- Comparison Slide : 연도별 실적·수주 추이 + 향후 전망
- CTA Slide : 네이비 배경 + IR 미팅·공시 안내 CTA
- Tone : Authoritative / Transparent / Growth-focused
- Slide count : 7 pages
- Font size contrast : 제목 42pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 공인중개사 전용 7개 디자인 프롬프트 ─────────────────────────
const REALTOR_PROMPTS = [
  {
    name: '신뢰 부동산 클린',
    type: 'Trusted Realtor Clean',
    colors: ['#ffffff', '#003d82', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,61,130,0.08), rgba(0,102,204,0.05))',
    numBg: 'rgba(0,61,130,0.10)', numColor: '#003d82',
    prompt: `[NotebookLM Slide Design Guide]

Role : 공인중개사사무소 고객 신뢰 구축 슬라이드 전문가
Industry : 공인중개사
Type : 신뢰 부동산 클린 — 고객 신뢰를 최우선으로 한 중개 서비스 소개 자료

[Color Guide]
Background : #ffffff / #f0f6ff (라이트 블루 틴트)
Text Color : #0a1628 (딥 네이비) / #3d5a8a (블루 그레이)
Accent : #003d82 (부동산 네이비) / #0066cc (신뢰 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
부동산 거래의 전 과정을 투명하고 전문적으로 지원하는 중개 서비스 신뢰 브랜딩. 거래 실적·고객 만족도·전문 자격을 데이터로 입증. 부동산 거래, 혼자 하지 마세요.

[Image Principles]
부동산 상담·거래 이미지. 블루 신뢰 배색. 거래 실적 인포그래픽. 지역 시세 지도.

[Design Characteristics]
• 화이트 + 네이비 신뢰 배색
• 거래 실적 KPI 카드
• 지역 시세 맵 인포그래픽
• 서비스 프로세스 플로우
• 고객 후기 인용 카드

[Layout Guide]
- Title Slide : 화이트 + 부동산 이미지 + 네이비 공식 사무소명
- Spec Slide : 거래 실적 카드 (연간 거래 건수·금액·고객 만족도)
- Comparison Slide : 직거래 vs 전문 중개 서비스 리스크·비용 비교
- CTA Slide : 블루 버튼 + 무료 시세 상담 신청 CTA
- Tone : Trustworthy / Professional / Local-expert
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '프리미엄 럭셔리 부동산',
    type: 'Luxury Premium Real Estate',
    colors: ['#0c0c14', '#d4af37', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(212,175,55,0.10), rgba(12,12,20,0.06))',
    numBg: 'rgba(212,175,55,0.14)', numColor: '#9a7a18',
    prompt: `[NotebookLM Slide Design Guide]

Role : 고급 주거·럭셔리 부동산 전문 중개 마케팅 전문가
Industry : 공인중개사
Type : 프리미엄 럭셔리 부동산 — 한남·강남·용산 프리미엄 주거 매물 제안 자료

[Color Guide]
Background : #0c0c14 (럭셔리 다크)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #d4af37 (럭셔리 골드) / #e8c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
한남·강남·용산의 최상위 프리미엄 아파트·펜트하우스·고급 빌라를 VIP 고객에게 소개하는 럭셔리 중개 자료. 가격보다 라이프스타일 가치를 먼저 이야기한다. 최고의 주거는 곧 예술이다.

[Image Principles]
프리미엄 주거 인테리어·전경 이미지. 다크+골드 럭셔리 배색. 고급 주거 단지 사진. 세대별 평면 렌더링.

[Design Characteristics]
• 다크 + 챔페인 골드 럭셔리 배색
• 세리프 권위 타이포그래피
• 매물 쇼케이스 풀블리드 레이아웃
• 주요 시설·입지 인포그래픽
• VIP 서비스 패키지 카드

[Layout Guide]
- Title Slide : 다크 배경 + 고급 주거 이미지 + 골드 세리프 헤드라인
- Spec Slide : 매물 상세 카드 (위치·면적·가격·특장점)
- Comparison Slide : 권역별 프리미엄 주거 시세 비교 분석
- CTA Slide : 골드 버튼 + VIP 1:1 매물 상담 CTA
- Tone : Exclusive / Premium / Lifestyle
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '부동산 투자 분석',
    type: 'Real Estate Investment Analysis',
    colors: ['#f5f5f7', '#1d1d1f', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,102,204,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,102,204,0.10)', numColor: '#0066cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 부동산 투자 분석·갭투자·임대수익 전문 컨설턴트
Industry : 공인중개사
Type : 부동산 투자 분석 — 투자자 대상 수익형 부동산 분석 제안 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #0066cc (투자 블루) / #34c759 (수익 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
오피스텔·소형 아파트·상가 등 수익형 부동산의 임대 수익률·가격 상승 가능성을 데이터로 분석하는 투자 전문 컨설팅 톤. 감보다 숫자로 설득. 부동산 투자, 데이터가 답이다.

[Image Principles]
수익형 부동산 이미지. 블루+그린 투자 배색. 수익률 분석 차트. 지역별 시세 인포그래픽.

[Design Characteristics]
• 그레이 + 블루 투자 배색
• 수익률 KPI 대시보드
• 가격 추이 차트
• 투자 시뮬레이션 카드
• 지역별 시세 비교 맵

[Layout Guide]
- Title Slide : 그레이 배경 + 수익형 부동산 이미지 + 블루 헤드라인
- Spec Slide : 투자 KPI 카드 (매입가·임대수익·수익률·예상 시세차익)
- Comparison Slide : 유형별 수익형 부동산 수익률·리스크 비교
- CTA Slide : 블루 버튼 + 투자 물건 상담 신청 CTA
- Tone : Analytical / Data-driven / Investment-focused
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 핵심 수익률 68pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '디지털 부동산 플랫폼',
    type: 'Digital Real Estate Platform',
    colors: ['#e8f0fe', '#1a73e8', '#00c896'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(0,200,150,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프롭테크·디지털 부동산 중개 플랫폼 발표 전문가
Industry : 공인중개사
Type : 디지털 부동산 플랫폼 — 앱·AI 매물 추천·빅데이터 시세 분석 서비스 자료

[Color Guide]
Background : #e8f0fe (프롭테크 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (프롭테크 블루) / #00c896 (데이터 민트)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
직방·다방·호갱노노 경쟁 구도에서 AI 매물 추천·빅데이터 시세 분석·가상 투어 서비스로 차별화하는 디지털 중개 서비스 발표. 부동산 거래도 이제 디지털 퍼스트.

[Image Principles]
부동산 앱 UI 이미지. 블루+민트 디지털 배색. 시세 분석 대시보드. AI 추천 플로우.

[Design Characteristics]
• 라이트 블루 + 민트 디지털 배색
• 앱 UI 스크린 모형
• AI 매물 추천 플로우 다이어그램
• 빅데이터 시세 분석 차트
• 서비스 기능 아이콘 카드

[Layout Guide]
- Title Slide : 블루 배경 + 앱 UI 이미지 + 디지털 헤드라인
- Spec Slide : 플랫폼 기능 카드 (AI 추천·시세·가상투어·법률 검토)
- Comparison Slide : 일반 중개 vs 디지털 플랫폼 거래 속도·비용 비교
- CTA Slide : 블루 버튼 + 앱 설치·서비스 체험 CTA
- Tone : Digital / Convenient / Data-driven
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '상가·꼬마빌딩 전문',
    type: 'Commercial & Small Building',
    colors: ['#fff8e1', '#e65100', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(230,81,0,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(230,81,0,0.10)', numColor: '#bf4000',
    prompt: `[NotebookLM Slide Design Guide]

Role : 상가·꼬마빌딩·근생시설 투자 중개 전문가
Industry : 공인중개사
Type : 상가·꼬마빌딩 전문 — 자산 증식을 위한 상가·소형 빌딩 투자 중개 자료

[Color Guide]
Background : #fff8e1 (웜 크림)
Text Color : #1a0800 (딥 브라운) / #5a2800 (브라운)
Accent : #e65100 (상가 오렌지) / #1565c0 (투자 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
꼬마빌딩·수익형 상가의 투자 가치를 임대 수익·시세 차익·자산 관리 관점에서 투자자에게 설득하는 전문 중개 톤. 10억이면 시작할 수 있는 건물주의 꿈을 현실로.

[Image Principles]
꼬마빌딩·상가 이미지. 오렌지+블루 투자 배색. 수익 시뮬레이션 차트. 권역별 상가 시세 지도.

[Design Characteristics]
• 크림 + 오렌지 투자 배색
• 수익 시뮬레이션 카드
• 권역별 상권 지도 인포그래픽
• 꼬마빌딩 실거래 사례 카드
• 투자 단계별 타임라인

[Layout Guide]
- Title Slide : 크림 배경 + 꼬마빌딩 이미지 + 오렌지 헤드라인
- Spec Slide : 매물 투자 분석 카드 (위치·매매가·임대수익·수익률)
- Comparison Slide : 권역별 상가·꼬마빌딩 수익률·시세 비교
- CTA Slide : 오렌지 버튼 + 투자 물건 맞춤 상담 CTA
- Tone : Practical / Investment-savvy / Opportunity
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 핵심 수익률 68pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '신혼·생애첫집 가이드',
    type: 'First Home Buyer Guide',
    colors: ['#fce4ec', '#e91e63', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.07), rgba(252,228,236,0.8))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 생애 첫 주택 구입·신혼부부 부동산 상담 전문가
Industry : 공인중개사
Type : 신혼·생애첫집 가이드 — 내 집 마련 첫걸음을 돕는 친근한 부동산 가이드 자료

[Color Guide]
Background : #fce4ec (소프트 핑크)
Text Color : #2a0a18 (딥 로즈 블랙) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (설렘 핑크) / #1565c0 (신뢰 블루)
Font : Nunito (제목) / Noto Sans KR (본문)

[Tone & Manner]
생애 처음 내 집 마련을 앞둔 신혼부부·1인가구에게 복잡한 부동산 절차를 쉽고 따뜻하게 설명. 청약·전세·매매·대출까지 A to Z 친근한 가이드. 두려움 없이 시작할 수 있어요.

[Image Principles]
신혼·첫집 라이프스타일 이미지. 핑크+블루 따뜻한 배색. 절차 플로우 일러스트. 대출·청약 인포그래픽.

[Design Characteristics]
• 소프트 핑크 + 블루 따뜻한 배색
• 내 집 마련 단계별 플로우
• 청약·대출 조건 인포그래픽
• Q&A 스타일 박스
• 준비 체크리스트 레이아웃

[Layout Guide]
- Title Slide : 핑크 배경 + 신혼 이미지 + 설레는 헤드라인
- Spec Slide : 내 집 마련 단계 카드 (청약→전세→매매 로드맵)
- Comparison Slide : 청약·전세·매매 장단점 비교 매트릭스
- CTA Slide : 핑크 버튼 + 무료 첫집 상담 신청 CTA
- Tone : Friendly / Reassuring / Step-by-step
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '재개발·재건축 투자',
    type: 'Redevelopment Investment',
    colors: ['#0a1628', '#ffd600', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, rgba(255,214,0,0.09), rgba(255,107,0,0.06))',
    numBg: 'rgba(255,214,0,0.12)', numColor: '#cc9900',
    prompt: `[NotebookLM Slide Design Guide]

Role : 재개발·재건축·도시 정비 사업 투자 전문 중개사
Industry : 공인중개사
Type : 재개발·재건축 투자 — 정비 사업 투자 기회 분석 및 매물 제안 자료

[Color Guide]
Background : #0a1628 (도시정비 다크 네이비)
Text Color : #ffffff / #c0d0e0 (아이스 그레이)
Accent : #ffd600 (투자 옐로우) / #ff6b00 (기회 오렌지)
Font : Barlow Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
재개발·재건축 구역의 투자 기회와 리스크를 냉철하게 분석하는 고급 투자 중개 톤. 비례율·조합원 분양가·감정평가 등 전문 지식으로 투자자를 설득. 정보가 곧 수익이다.

[Image Principles]
재개발 구역·신축 아파트 비교 이미지. 다크+옐로우 기회 배색. 사업 진행 단계 타임라인. 투자 수익 차트.

[Design Characteristics]
• 다크 네이비 + 투자 옐로우 배색
• 사업 진행 단계 타임라인
• 투자 수익 시뮬레이션 카드
• 구역별 비례율 비교
• 리스크 경고 박스

[Layout Guide]
- Title Slide : 다크 배경 + 재개발 이미지 + 옐로우 투자 헤드라인
- Spec Slide : 구역 분석 카드 (위치·사업 단계·비례율·예상 분양가)
- Comparison Slide : 주요 재개발 구역 투자 가치 비교 매트릭스
- CTA Slide : 옐로우 버튼 + 정비 사업 투자 상담 CTA
- Tone : Expert / Analytical / Opportunity-focused
- Slide count : 7 pages
- Font size contrast : 제목 50pt 컨덴스드 / 소제목 21pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 인테리어 전용 7개 디자인 프롬프트 ─────────────────────────
const INTERIOR_PROMPTS = [
  {
    name: '모던 리빙 포트폴리오',
    type: 'Modern Living Portfolio',
    colors: ['#f5f5f5', '#1d1d1f', '#c9a84c'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.09), rgba(245,245,245,0.8))',
    numBg: 'rgba(29,29,31,0.08)', numColor: '#1d1d1f',
    prompt: `[NotebookLM Slide Design Guide]

Role : 인테리어 디자인 회사 포트폴리오 발표 전문가
Industry : 인테리어
Type : 모던 리빙 포트폴리오 — 시공 사례 중심의 인테리어 회사 포트폴리오 자료

[Color Guide]
Background : #f5f5f5 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #1d1d1f (딥 블랙) / #c9a84c (카라멜 골드)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
시공 사례 이미지가 말하는 인테리어 회사의 포트폴리오 발표 톤. 스타일·공간 활용·소재 선택의 전문성을 고객에게 직관적으로 전달. 공간이 삶의 질을 바꾼다.

[Image Principles]
인테리어 시공 사례 이미지. 그레이+블랙+골드 포인트 배색. Before/After 비교 레이아웃. 소재 클로즈업.

[Design Characteristics]
• 그레이 + 블랙 미니멀 배색
• 시공 사례 풀블리드 갤러리
• Before/After 비교 카드
• 소재·컬러 팔레트 카드
• 프로젝트 정보 미니멀 캡션

[Layout Guide]
- Title Slide : 그레이 배경 + 대표 시공 이미지 + 블랙 포트폴리오 제목
- Spec Slide : 프로젝트 포트폴리오 카드 그리드 (유형·평수·스타일·기간)
- Comparison Slide : 시공 전·후 공간 비교 레이아웃
- CTA Slide : 블랙 버튼 + 무료 상담·견적 신청 CTA
- Tone : Stylish / Professional / Visual-first
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스칸디나비안 미니멀',
    type: 'Scandinavian Minimal',
    colors: ['#fafafa', '#2d2d2d', '#8a9a7a'],
    cardBg: 'linear-gradient(135deg, rgba(138,154,122,0.08), rgba(250,250,250,0.8))',
    numBg: 'rgba(45,45,45,0.07)', numColor: '#2d2d2d',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스칸디나비안·북유럽 감성 인테리어 마케팅 전문가
Industry : 인테리어
Type : 스칸디나비안 미니멀 — 북유럽 미니멀리즘 라이프스타일 인테리어 자료

[Color Guide]
Background : #fafafa (스칸디 화이트)
Text Color : #1a1a1a (딥 차콜) / #555555 (미디엄 그레이)
Accent : #2d2d2d (차콜 블랙) / #8a9a7a (세이지 그린)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
"Less is More"를 실천하는 북유럽 미니멀 인테리어 감성. 자연 소재·중성 컬러·기능성을 앞세운 라이프스타일 제안. 정리된 공간이 정리된 삶을 만든다.

[Image Principles]
북유럽 스타일 인테리어 이미지. 화이트+그레이+세이지 배색. 자연 소재 클로즈업. 감성적 소품 스타일링.

[Design Characteristics]
• 스칸디나비안 화이트 + 세이지 배색
• 세리프 감성 타이포그래피
• 자연 소재 텍스처 배경
• 공간별 무드 보드 레이아웃
• 컬러 팔레트 카드

[Layout Guide]
- Title Slide : 화이트 배경 + 스칸디 인테리어 이미지 + 세리프 제목
- Spec Slide : 스타일 가이드 카드 (컬러·소재·가구·조명·소품)
- Comparison Slide : 일반 인테리어 vs 스칸디나비안 공간 감성 비교
- CTA Slide : 차콜 버튼 + 무드 보드 제작·상담 CTA
- Tone : Serene / Minimalist / Natural
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '모던 럭셔리 하이엔드',
    type: 'Modern Luxury High-End',
    colors: ['#0c0c14', '#d4af37', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(212,175,55,0.10), rgba(12,12,20,0.06))',
    numBg: 'rgba(212,175,55,0.14)', numColor: '#9a7a18',
    prompt: `[NotebookLM Slide Design Guide]

Role : 하이엔드 프리미엄 인테리어 시공 제안 전문가
Industry : 인테리어
Type : 모던 럭셔리 하이엔드 — 최상위 고객을 위한 프리미엄 인테리어 제안서

[Color Guide]
Background : #0c0c14 (럭셔리 다크)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #d4af37 (하이엔드 골드) / #e8c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
최상위 자재·마감재·전문 시공팀으로 완성하는 하이엔드 인테리어 제안. 펜트하우스·단독주택·임원 오피스 프로젝트를 VIP 고객에게 프레젠테이션. 공간은 철학의 표현이다.

[Image Principles]
최상위 인테리어 프로젝트 이미지. 다크+골드 럭셔리 배색. 마감재 클로즈업. 3D 렌더링 시각화.

[Design Characteristics]
• 럭셔리 다크 + 챔페인 골드 배색
• 세리프 권위 타이포그래피
• 프로젝트 3D 렌더링 쇼케이스
• 프리미엄 자재 스펙 카드
• 골드 라인 섹션 구분

[Layout Guide]
- Title Slide : 다크 배경 + 하이엔드 프로젝트 이미지 + 골드 세리프 제목
- Spec Slide : 시공 사양 카드 (소재·브랜드·마감·설비 스펙)
- Comparison Slide : 일반 시공 vs 하이엔드 자재·마감 퀄리티 비교
- CTA Slide : 골드 버튼 + 1:1 VIP 설계 상담 CTA
- Tone : Exclusive / Artistic / Premium
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '아파트 올수리 패키지',
    type: 'Apartment Full Renovation',
    colors: ['#fff3e0', '#ff6b00', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,0,0.09), rgba(21,101,192,0.06))',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 아파트 올수리·리모델링 패키지 마케팅 전문가
Industry : 인테리어
Type : 아파트 올수리 패키지 — 입주 청소부터 도배·장판·욕실·주방까지 원스톱 자료

[Color Guide]
Background : #fff3e0 (웜 선샤인 크림)
Text Color : #1a0a00 (딥 브라운) / #5a2000 (브라운)
Accent : #ff6b00 (리모델 오렌지) / #1565c0 (신뢰 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
이사 전·후 아파트 전체 수리를 합리적 가격에 원스톱으로 제공하는 실용 중심 리모델링 패키지 톤. 도배·장판·욕실·주방·조명까지 한 번에 해결하는 편리함 강조. 이사가 즐거워진다.

[Image Principles]
Before/After 리모델링 이미지. 오렌지+블루 실용 배색. 시공 단계 인포그래픽. 패키지 구성 카드.

[Design Characteristics]
• 오렌지 + 블루 실용 배색
• Before/After 비교 레이아웃
• 패키지 구성 카드 (공정별)
• 시공 기간·비용 인포그래픽
• 보증 서비스 배지

[Layout Guide]
- Title Slide : 크림 배경 + 리모델링 After 이미지 + 오렌지 헤드라인
- Spec Slide : 패키지 공정 카드 (도배·장판·욕실·주방·조명)
- Comparison Slide : 개별 시공 vs 패키지 비용·기간 비교
- CTA Slide : 오렌지 버튼 + 무료 현장 견적 신청 CTA
- Tone : Practical / Efficient / Value-driven
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '상업 공간 브랜딩',
    type: 'Commercial Space Branding',
    colors: ['#1a1a2e', '#6c63ff', '#00f5c4'],
    cardBg: 'linear-gradient(135deg, rgba(108,99,255,0.09), rgba(0,245,196,0.06))',
    numBg: 'rgba(108,99,255,0.12)', numColor: '#6c63ff',
    prompt: `[NotebookLM Slide Design Guide]

Role : 상업 공간·브랜드 스토어·오피스 인테리어 전문가
Industry : 인테리어
Type : 상업 공간 브랜딩 — 브랜드 정체성을 공간으로 표현하는 상업 인테리어 자료

[Color Guide]
Background : #1a1a2e (스페이스 다크 네이비)
Text Color : #e8e0ff (라이트 라벤더) / #a090cc (미디엄 퍼플)
Accent : #6c63ff (브랜드 인디고) / #00f5c4 (에너지 민트)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
카페·레스토랑·패션 매장·스타트업 오피스의 브랜드 DNA를 공간 디자인으로 구현하는 상업 인테리어 전문 제안. 인테리어가 곧 브랜드다. 공간에서 경험이 시작된다.

[Image Principles]
트렌디한 상업 공간 이미지. 다크+인디고·민트 배색. 브랜드 컬러 공간 시각화. 3D 렌더링.

[Design Characteristics]
• 스페이스 다크 + 인디고·민트 배색
• 브랜드 컬러 공간 시뮬레이션
• 프로젝트 3D 렌더링 쇼케이스
• CI/BI 컬러 연계 제안 카드
• 시공 일정 타임라인

[Layout Guide]
- Title Slide : 다크 배경 + 상업 공간 이미지 + 인디고 헤드라인
- Spec Slide : 상업 공간 디자인 카드 (컨셉·컬러·소재·조명)
- Comparison Slide : 일반 인테리어 vs 브랜드 공간 경험 가치 비교
- CTA Slide : 인디고 버튼 + 상업 공간 제안·견적 CTA
- Tone : Brand-forward / Creative / Experiential
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '친환경 웰빙 인테리어',
    type: 'Eco Wellness Interior',
    colors: ['#f1f8e9', '#2e7d32', '#795548'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(121,85,72,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 친환경·저VOC·바이오필릭 인테리어 디자인 전문가
Industry : 인테리어
Type : 친환경 웰빙 인테리어 — 자연 소재·저독성·공기 정화 웰빙 공간 디자인 자료

[Color Guide]
Background : #f1f8e9 (웰빙 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (웰빙 그린) / #795548 (어스 브라운)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
저VOC 페인트·천연 원목·식물 공기정화 등 건강한 집을 만드는 친환경 인테리어 가치를 아이 있는 가족·웰빙 지향 소비자에게 전달. 집이 치유의 공간이 된다.

[Image Principles]
자연 소재·식물 인테리어 이미지. 그린+어스 브라운 배색. 소재 인증 배지. 공기 질 개선 인포그래픽.

[Design Characteristics]
• 웰빙 그린 + 어스 브라운 배색
• 친환경 소재 인증 배지
• 공기 질·VOC 수치 인포그래픽
• 바이오필릭 디자인 요소
• 자연 소재 텍스처 배경

[Layout Guide]
- Title Slide : 그린 배경 + 자연 인테리어 이미지 + 그린 헤드라인
- Spec Slide : 친환경 소재 카드 (페인트·바닥재·목재·식물)
- Comparison Slide : 일반 자재 vs 친환경 자재 VOC·건강 영향 비교
- CTA Slide : 그린 버튼 + 친환경 인테리어 상담 CTA
- Tone : Natural / Healthy / Sustainable
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '인테리어 온라인 견적',
    type: 'Interior Online Estimate',
    colors: ['#e8f0fe', '#1a73e8', '#ff9500'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(255,149,0,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 인테리어 플랫폼·온라인 견적 서비스 마케팅 전문가
Industry : 인테리어
Type : 인테리어 온라인 견적 — 앱·플랫폼 기반 인테리어 견적·시공 연결 서비스 자료

[Color Guide]
Background : #e8f0fe (플랫폼 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (플랫폼 블루) / #ff9500 (액션 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
오늘의집·집닥·하우스앱 경쟁 구도에서 빠른 견적·검증된 시공사 매칭·가격 투명성으로 차별화하는 인테리어 플랫폼 발표 톤. 인테리어 고민, 10분 만에 해결.

[Image Principles]
인테리어 앱 UI 이미지. 블루+오렌지 플랫폼 배색. 시공사 매칭 플로우. 견적 비교 스크린.

[Design Characteristics]
• 라이트 블루 + 오렌지 배색
• 앱 UI 스크린 모형
• 견적 프로세스 플로우 카드
• 시공사 평점·리뷰 카드
• 비용 절감 수치 강조

[Layout Guide]
- Title Slide : 블루 배경 + 앱 UI 이미지 + 블루 플랫폼 헤드라인
- Spec Slide : 플랫폼 기능 카드 (견적·매칭·계약·AS·리뷰)
- Comparison Slide : 직접 업체 찾기 vs 플랫폼 매칭 시간·비용 비교
- CTA Slide : 블루 버튼 + 앱 설치·무료 견적 신청 CTA
- Tone : Convenient / Transparent / Digital
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 식당 전용 7개 디자인 프롬프트 ─────────────────────────
const RESTAURANT_PROMPTS = [
  {
    name: '파인다이닝 블랙',
    type: 'Fine Dining Black',
    colors: ['#0a0a0a', '#c9a84c', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.10), rgba(10,10,10,0.06))',
    numBg: 'rgba(201,168,76,0.14)', numColor: '#9a7a20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 파인다이닝·미슐랭 레스토랑 브랜딩 슬라이드 전문가
Industry : 식당
Type : 파인다이닝 블랙 — 최고급 레스토랑의 요리 철학과 감성을 담은 프리미엄 자료

[Color Guide]
Background : #0a0a0a (가스트로 블랙)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #c9a84c (미슐랭 골드) / #e2c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
셰프의 요리 철학·식재료 스토리·다이닝 경험을 극도로 절제된 럭셔리 감성으로 전달. 미슐랭·블루리본 수준의 파인다이닝 브랜딩. 음식은 예술이다.

[Image Principles]
요리 클로즈업 다크톤 이미지. 블랙 + 골드 포인트. 셰프 포트레이트. 식재료 산지 스토리.

[Design Characteristics]
• 가스트로 블랙 + 미슐랭 골드 배색
• 세리프 폰트 권위 타이포그래피
• 요리 쇼케이스 풀블리드 이미지
• 골드 라인 섹션 구분
• 극도의 여백 미니멀 레이아웃

[Layout Guide]
- Title Slide : 풀 블랙 + 요리 이미지 + 골드 세리프 레스토랑명
- Spec Slide : 시즌 메뉴 카드 (코스별 재료·셰프 노트)
- Comparison Slide : 일반 레스토랑 vs 파인다이닝 경험 가치 비교
- CTA Slide : 골드 버튼 + 예약·케이터링 문의 CTA
- Tone : Luxurious / Artistic / Gastronomic
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '따뜻한 한식 정겨움',
    type: 'Korean Warmth & Heritage',
    colors: ['#faf6f0', '#5c3a1e', '#c9781c'],
    cardBg: 'linear-gradient(135deg, rgba(201,120,28,0.09), rgba(250,246,240,0.8))',
    numBg: 'rgba(92,58,30,0.10)', numColor: '#5c3a1e',
    prompt: `[NotebookLM Slide Design Guide]

Role : 한식당·전통 음식점 브랜딩 슬라이드 전문가
Industry : 식당
Type : 따뜻한 한식 정겨움 — 전통과 정성을 담은 한식당 감성 브랜딩 자료

[Color Guide]
Background : #faf6f0 (한지 크림)
Text Color : #2d1206 (딥 브라운) / #5c3a1e (한방 브라운)
Accent : #c9781c (진사 오렌지) / #5c8a3e (청록 그린)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
어머니의 손맛·계절 식재료·발효 문화를 담은 한식의 깊은 맛과 정성을 전달. 외국인·젊은 세대 모두에게 한식의 가치를 재발견하게 하는 브랜딩. 정성이 곧 맛이다.

[Image Principles]
따뜻한 한식 음식 이미지. 한지·도자기 텍스처. 진사 오렌지 포인트. 계절 식재료 클로즈업.

[Design Characteristics]
• 한지 크림 + 진사 오렌지 배색
• 전통 문양 포인트 요소
• 계절별 메뉴 타임라인 카드
• 식재료 산지 인포그래픽
• 따뜻한 손글씨 감성 요소

[Layout Guide]
- Title Slide : 한지 배경 + 한식 이미지 + 세리프 레스토랑명
- Spec Slide : 시그니처 메뉴 카드 (재료·조리법·계절 한정)
- Comparison Slide : 제철 봄·여름·가을·겨울 메뉴 비교
- CTA Slide : 브라운 버튼 + 예약·케이터링 문의 CTA
- Tone : Traditional / Heartfelt / Seasonal
- Slide count : 7 pages
- Font size contrast : 제목 46pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '이탈리안 트라토리아',
    type: 'Italian Trattoria Vivace',
    colors: ['#fff8f0', '#c62828', '#2e7d32'],
    cardBg: 'linear-gradient(135deg, rgba(198,40,40,0.08), rgba(46,125,50,0.06))',
    numBg: 'rgba(198,40,40,0.10)', numColor: '#c62828',
    prompt: `[NotebookLM Slide Design Guide]

Role : 이탈리안·유러피언 레스토랑 브랜딩 전문가
Industry : 식당
Type : 이탈리안 트라토리아 — 이탈리아 감성의 활기찬 레스토랑 브랜딩 자료

[Color Guide]
Background : #fff8f0 (웜 아이보리)
Text Color : #2a0a00 (딥 레드 블랙) / #6a2010 (미디엄 레드)
Accent : #c62828 (이탈리아 레드) / #2e7d32 (바질 그린)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
이탈리아 노나의 레시피·직수입 식재료·와인 페어링 등 정통 이탈리안 다이닝 경험을 활기차고 따뜻하게 전달. Buona sera! 감성이 넘치는 레스토랑 브랜딩.

[Image Principles]
파스타·피자·와인 이미지. 레드+그린 이탈리아 배색. 소박한 테이블 세팅. 식재료 클로즈업.

[Design Characteristics]
• 아이보리 + 이탈리아 레드·바질 그린
• 세리프 로맨틱 타이포그래피
• 메뉴판 스타일 레이아웃
• 와인 페어링 카드
• 손그림 식재료 일러스트

[Layout Guide]
- Title Slide : 아이보리 배경 + 요리 이미지 + 레드 세리프 레스토랑명
- Spec Slide : 시그니처 메뉴 카드 (파스타·피자·리조토·디저트)
- Comparison Slide : 런치 vs 디너 코스 메뉴 비교
- CTA Slide : 레드 버튼 + 예약·이벤트 문의 CTA
- Tone : Vivace / Authentic / Convivial
- Slide count : 7 pages
- Font size contrast : 제목 48pt 세리프 / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '캐주얼 다이닝 에너지',
    type: 'Casual Dining Energy',
    colors: ['#fff3e0', '#ff6b00', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,0,0.09), rgba(21,101,192,0.06))',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 캐주얼 레스토랑·패밀리 다이닝 브랜딩 전문가
Industry : 식당
Type : 캐주얼 다이닝 에너지 — 가족·친구와 즐기는 활기찬 캐주얼 레스토랑 자료

[Color Guide]
Background : #fff3e0 (선샤인 크림)
Text Color : #1a0a00 (딥 브라운) / #5a2000 (브라운)
Accent : #ff6b00 (식욕 오렌지) / #1565c0 (신뢰 블루)
Font : Nunito (제목) / Noto Sans KR (본문)

[Tone & Manner]
가족·친구와 맛있게 즐기는 캐주얼 다이닝의 활기차고 친근한 톤. 합리적 가격·넉넉한 양·빠른 서비스로 일상의 행복을 제공. 오늘 뭐 먹지? 의 답.

[Image Principles]
식욕 자극 음식 이미지. 오렌지+블루 에너지 배색. 가족·친구 다이닝 라이프스타일. 메뉴 플랫레이.

[Design Characteristics]
• 크림 + 오렌지 식욕 자극 배색
• 메뉴 그리드 카드 레이아웃
• 가격·양 강조 인포그래픽
• 주간 특선 배지 시스템
• 고객 리뷰 별점 카드

[Layout Guide]
- Title Slide : 크림 배경 + 음식 이미지 + 오렌지 대형 메뉴명
- Spec Slide : 인기 메뉴 카드 그리드 (사진·가격·칼로리)
- Comparison Slide : 런치 특선 vs 디너 세트 구성·가격 비교
- CTA Slide : 오렌지 버튼 + 방문 예약·배달 주문 CTA
- Tone : Energetic / Welcoming / Value-driven
- Slide count : 7 pages
- Font size contrast : 제목 46pt 볼드 / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '식당 프랜차이즈 IR',
    type: 'Restaurant Franchise IR',
    colors: ['#f5f5f7', '#1d1d1f', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,0,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 외식 프랜차이즈 투자 유치·가맹 모집 IR 전문가
Industry : 식당
Type : 식당 프랜차이즈 IR — 외식 브랜드 가맹 사업 설명회 발표 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #ff6b00 (창업 오렌지) / #0071e3 (신뢰 블루)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
외식 프랜차이즈 창업의 수익성·리스크·지원 시스템을 예비 가맹점주에게 데이터로 설득하는 사업 중심 톤. 초기 투자 비용·월 매출·수익률·회수 기간이 핵심 메시지.

[Image Principles]
성공 가맹점 이미지. 오렌지 포인트 강조. 매출 성장 차트. 전국 가맹 현황 지도.

[Design Characteristics]
• 화이트 + 오렌지 IR 배색
• 수익 KPI 대시보드
• 가맹 현황 지도 인포그래픽
• 본사 지원 체계 플로우
• 성공 사례 스토리 카드

[Layout Guide]
- Title Slide : 화이트 + 브랜드 매장 이미지 + 오렌지 IR 헤드라인
- Spec Slide : 창업 KPI 카드 (투자·월 매출·수익률·회수 기간)
- Comparison Slide : 주요 외식 업종 창업 비용·수익 비교 매트릭스
- CTA Slide : 오렌지 버튼 + 가맹 상담 신청 CTA
- Tone : Business / Credible / Partnership
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 핵심 수치 68pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '헬시 그린 다이닝',
    type: 'Healthy Green Dining',
    colors: ['#f1f8e9', '#2e7d32', '#ff8f00'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(255,143,0,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 건강식·비건·샐러드 레스토랑 마케팅 전문가
Industry : 식당
Type : 헬시 그린 다이닝 — 건강·비건·유기농 중심 웰니스 레스토랑 브랜딩 자료

[Color Guide]
Background : #f1f8e9 (웰니스 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (웰니스 그린) / #ff8f00 (비타민 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
건강하게 먹고 싶은 욕구를 만족시키는 비건·로컬 유기농·슈퍼푸드 기반 레스토랑 톤. 먹는 것이 곧 라이프스타일. 맛있고 건강하고 환경도 생각한다.

[Image Principles]
신선한 채소·샐러드·비건 음식 이미지. 그린+오렌지 활력 배색. 유기농 인증 배지. 영양 성분 인포그래픽.

[Design Characteristics]
• 웰니스 그린 + 비타민 오렌지 배색
• 영양 성분 인포그래픽 카드
• 유기농·비건 인증 배지 시스템
• 식재료 산지 맵 인포그래픽
• 칼로리·영양 정보 레이아웃

[Layout Guide]
- Title Slide : 그린 배경 + 건강식 이미지 + 오렌지 포인트 헤드라인
- Spec Slide : 시그니처 메뉴 카드 (칼로리·주요 영양소·알레르기)
- Comparison Slide : 일반식 vs 헬시 메뉴 영양·가격 비교
- CTA Slide : 그린 버튼 + 예약·구독 식단 신청 CTA
- Tone : Healthy / Natural / Conscious
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '로컬 맛집 SNS',
    type: 'Local Restaurant SNS',
    colors: ['#fce4ec', '#e91e63', '#ff9800'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.08), rgba(255,152,0,0.06))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 인스타그래머블 로컬 맛집 SNS 마케팅 전문가
Industry : 식당
Type : 로컬 맛집 SNS — SNS 바이럴·인스타그램·배달앱 최적화 마케팅 자료

[Color Guide]
Background : #fce4ec (소프트 핑크)
Text Color : #2a0a18 (딥 로즈 블랙) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (SNS 핑크) / #ff9800 (식욕 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
인스타그램·네이버 플레이스·배달의민족에서 바이럴되는 로컬 맛집의 SNS 마케팅 전략 톤. 인증샷 유도·리뷰 관리·배달앱 랭킹 최적화를 감각적으로 전달. 찍고 싶은 음식이 먼저다.

[Image Principles]
인스타그래머블 음식 이미지. 핑크+오렌지 감성 배색. SNS 피드 레이아웃. 고객 리뷰 카드.

[Design Characteristics]
• 소프트 핑크 + 오렌지 SNS 감성 배색
• SNS 피드 그리드 레이아웃
• 리뷰·별점 인증 카드
• 해시태그 전략 시각화
• 배달앱 랭킹 인포그래픽

[Layout Guide]
- Title Slide : 핑크 배경 + 인스타 감성 음식 이미지 + 핑크 헤드라인
- Spec Slide : SNS 채널별 전략 카드 (인스타·네이버·배달앱)
- Comparison Slide : SNS 마케팅 전·후 방문객·매출 비교
- CTA Slide : 핑크 버튼 + SNS 팔로우·리뷰 이벤트 CTA
- Tone : Social / Viral / Appetizing
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 카페 전용 7개 디자인 프롬프트 ─────────────────────────
const CAFE_PROMPTS = [
  {
    name: '아르떼 카페 감성',
    type: 'Arte Cafe Aesthetic',
    colors: ['#fdf6e8', '#7a4a00', '#c9a84c'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.10), rgba(253,246,232,0.8))',
    numBg: 'rgba(122,74,0,0.10)', numColor: '#7a4a00',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스페셜티 카페·아트 카페 브랜딩 슬라이드 전문가
Industry : 카페
Type : 아르떼 카페 감성 — 스페셜티 커피와 예술이 만나는 감성 카페 브랜딩 자료

[Color Guide]
Background : #fdf6e8 (따뜻한 아이보리)
Text Color : #2a1200 (딥 에스프레소 브라운) / #6a4020 (미디엄 브라운)
Accent : #7a4a00 (에스프레소 브라운) / #c9a84c (카라멜 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
싱글 오리진·스페셜티 원두의 스토리와 예술적 공간 감성을 담은 카페 브랜딩 톤. 바리스타의 장인 정신·원두 산지·추출 방식을 커피 애호가에게 감성적으로 전달.

[Image Principles]
라떼 아트·커피 클로즈업. 아이보리+카라멜 배색. 카페 인테리어 이미지. 원두 산지 지도.

[Design Characteristics]
• 아이보리 + 에스프레소 브라운 + 카라멜 골드
• 세리프 아트 감성 타이포그래피
• 원두 산지 인포그래픽 지도
• 커피 추출 방식 다이어그램
• 시그니처 음료 쇼케이스

[Layout Guide]
- Title Slide : 아이보리 배경 + 커피 이미지 + 브라운 세리프 카페명
- Spec Slide : 시그니처 메뉴 카드 (원두·추출·풍미 노트)
- Comparison Slide : 싱글 오리진 원두별 풍미 프로파일 비교
- CTA Slide : 브라운 버튼 + 구독권·원두 구매 CTA
- Tone : Artisanal / Sensory / Passionate
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '모던 미니멀 카페',
    type: 'Modern Minimal Cafe',
    colors: ['#f5f5f5', '#1d1d1f', '#c9a84c'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(245,245,245,0.8))',
    numBg: 'rgba(29,29,31,0.08)', numColor: '#1d1d1f',
    prompt: `[NotebookLM Slide Design Guide]

Role : 모던 미니멀 브랜드 카페 마케팅 전문가
Industry : 카페
Type : 모던 미니멀 카페 — 군더더기 없는 미니멀 디자인의 감각 있는 카페 브랜딩

[Color Guide]
Background : #f5f5f5 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #1d1d1f (딥 블랙) / #c9a84c (카라멜 포인트)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
화이트·그레이·블랙의 절제된 미니멀리즘 속에 커피 한 잔의 감각을 강조하는 브랜드 카페 톤. 블루보틀·오세아니아 감성의 품질 중심 스페셜티 포지셔닝.

[Image Principles]
흑백 톤 인테리어 이미지. 미니멀 배경 + 카라멜 포인트. 제품 화이트 배경 컷. 공간 감성 사진.

[Design Characteristics]
• 화이트·그레이 미니멀 배색
• 여백 중심 고급 레이아웃
• 커피·음료 화이트 배경 컷
• 로고·브랜드 가이드라인 카드
• 공간 인테리어 갤러리

[Layout Guide]
- Title Slide : 화이트 배경 + 미니멀 카페 이미지 + 블랙 헤드라인
- Spec Slide : 시그니처 메뉴 카드 (사진·이름·가격·설명)
- Comparison Slide : 기존 메뉴 vs 시즌 신메뉴 비교
- CTA Slide : 블랙 버튼 + 방문·앱 주문 CTA
- Tone : Minimal / Refined / Quality-first
- Slide count : 7 pages
- Font size contrast : 제목 44pt 세미볼드 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '디저트 카페 스위트',
    type: 'Dessert Cafe Sweet',
    colors: ['#fff0f5', '#e91e63', '#ff9800'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.08), rgba(255,152,0,0.06))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 디저트 카페·베이커리 카페 마케팅 전문가
Industry : 카페
Type : 디저트 카페 스위트 — 케이크·마카롱·시즌 디저트 감성 카페 브랜딩 자료

[Color Guide]
Background : #fff0f5 (스위트 핑크 화이트)
Text Color : #2a0a18 (딥 로즈 블랙) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (스위트 핑크) / #ff9800 (카라멜 오렌지)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
눈으로 먼저 먹는 아름다운 디저트와 달콤한 공간의 감성을 핑크·카라멜로 표현. 시즌 한정 케이크·마카롱·파르페 등 디저트 카페 고유의 설레는 경험 전달.

[Image Principles]
아름다운 디저트 클로즈업. 소프트 핑크+오렌지 배색. 케이크 단면 쇼케이스. SNS 감성 인증샷.

[Design Characteristics]
• 소프트 핑크 + 카라멜 오렌지 배색
• 디저트 쇼케이스 그리드 레이아웃
• 시즌 한정 배지 시스템
• SNS 감성 사진 콜라주
• 달달한 세리프 타이포그래피

[Layout Guide]
- Title Slide : 핑크 배경 + 디저트 이미지 + 세리프 카페명
- Spec Slide : 시즌 디저트 카드 (사진·가격·한정 수량·재료)
- Comparison Slide : 시즌별 인기 디저트 TOP3 비교
- CTA Slide : 핑크 버튼 + SNS 팔로우·예약 주문 CTA
- Tone : Sweet / Dreamy / Instagrammable
- Slide count : 7 pages
- Font size contrast : 제목 48pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '카페 ESG 그린',
    type: 'Cafe ESG Sustainable',
    colors: ['#e8f5e9', '#2e7d32', '#795548'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(121,85,72,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 지속가능 카페·제로웨이스트 카페 브랜딩 전문가
Industry : 카페
Type : 카페 ESG 그린 — 공정무역·제로웨이스트·친환경 카페 브랜딩 자료

[Color Guide]
Background : #e8f5e9 (에코 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (에코 그린) / #795548 (어스 브라운)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
공정무역 원두·텀블러 할인·퇴비 가능 컵 등 환경을 생각하는 카페의 진정성 있는 ESG 브랜딩 톤. 환경 의식 높은 소비자에게 커피 한 잔에 담긴 가치를 전달.

[Image Principles]
공정무역 농장·에코 카페 이미지. 그린+브라운 어스 배색. 친환경 포장 이미지. 탄소 절감 인포그래픽.

[Design Characteristics]
• 에코 그린 + 어스 브라운 배색
• 공정무역 인증 배지
• 탄소 절감 인포그래픽
• 재사용 캠페인 카드
• 원두 산지 공정무역 스토리

[Layout Guide]
- Title Slide : 그린 배경 + 에코 카페 이미지 + 그린 에코 헤드라인
- Spec Slide : ESG 실천 항목 카드 (공정무역·텀블러·포장·에너지)
- Comparison Slide : 일반 카페 vs 에코 카페 환경 영향 비교
- CTA Slide : 그린 버튼 + 에코 멤버십·텀블러 할인 CTA
- Tone : Sustainable / Conscious / Responsible
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '카페 프랜차이즈 창업',
    type: 'Cafe Franchise Startup',
    colors: ['#fff8e1', '#ff8f00', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(255,143,0,0.09), rgba(21,101,192,0.06))',
    numBg: 'rgba(255,143,0,0.12)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 카페 창업·프랜차이즈 가맹 설명회 전문가
Industry : 카페
Type : 카페 프랜차이즈 창업 — 예비 카페 창업자 대상 가맹 사업 설명 자료

[Color Guide]
Background : #fff8e1 (크림 선샤인)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #ff8f00 (창업 오렌지) / #1565c0 (신뢰 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
카페 창업 꿈을 현실로 만들어주는 프랜차이즈 가맹 사업 설명 톤. 초기 투자·수익률·본사 지원·운영 노하우를 예비 창업자의 불안을 해소하며 전달. 함께라서 성공한다.

[Image Principles]
카페 매장·창업 성공 이미지. 오렌지+블루 창업 배색. 수익 시뮬레이션 차트. 본사 지원 플로우.

[Design Characteristics]
• 크림 + 오렌지 창업 배색
• 수익 시뮬레이션 카드
• 창업 단계별 타임라인
• 본사 지원 아이콘 카드
• 성공 가맹점주 후기

[Layout Guide]
- Title Slide : 크림 배경 + 카페 이미지 + 오렌지 창업 헤드라인
- Spec Slide : 창업 KPI 카드 (투자·월 매출·순이익·회수 기간)
- Comparison Slide : 독립 창업 vs 프랜차이즈 창업 리스크·지원 비교
- CTA Slide : 오렌지 버튼 + 가맹 상담 신청 CTA
- Tone : Inspiring / Practical / Partnership
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 핵심 수치 68pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스터디 카페 공간',
    type: 'Study Cafe Workspace',
    colors: ['#e8f0fe', '#1a73e8', '#ff9500'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(255,149,0,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스터디 카페·북카페·코워킹 카페 마케팅 전문가
Industry : 카페
Type : 스터디 카페 공간 — 학습·업무 특화 스터디 카페 서비스 소개 자료

[Color Guide]
Background : #e8f0fe (스터디 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (포커스 블루) / #ff9500 (에너지 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
공부·업무·독서에 최적화된 조용하고 쾌적한 환경의 스터디 카페 포지셔닝. 무제한 음료·좌석 예약·24시간 운영·WiFi 등 생산성 향상 서비스 강조.

[Image Principles]
집중 학습 환경 이미지. 블루+오렌지 포커스 배색. 공간 인테리어 사진. 서비스 아이콘.

[Design Characteristics]
• 라이트 블루 + 오렌지 포커스 배색
• 서비스 기능 아이콘 카드
• 이용 요금제 비교 표
• 공간 배치 인포그래픽
• 집중도 향상 수치 강조

[Layout Guide]
- Title Slide : 블루 배경 + 스터디 공간 이미지 + 블루 헤드라인
- Spec Slide : 서비스 패키지 카드 (시간권·월정액·프리미엄)
- Comparison Slide : 일반 카페 vs 스터디 카페 환경·비용 비교
- CTA Slide : 블루 버튼 + 회원 가입·첫 방문 무료 CTA
- Tone : Productive / Focused / Comfortable
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '글로벌 카페 브랜드',
    type: 'Global Cafe Brand',
    colors: ['#1a1a2e', '#00c896', '#ffffff'],
    cardBg: 'linear-gradient(135deg, rgba(0,200,150,0.09), rgba(26,26,46,0.06))',
    numBg: 'rgba(0,200,150,0.12)', numColor: '#009a72',
    prompt: `[NotebookLM Slide Design Guide]

Role : 글로벌 카페 브랜드 확장·해외 진출 전략 전문가
Industry : 카페
Type : 글로벌 카페 브랜드 — 스타벅스·블루보틀 경쟁 K-카페 글로벌 브랜딩 자료

[Color Guide]
Background : #1a1a2e (글로벌 다크 네이비)
Text Color : #f0f0ff (라이트 라벤더) / #a0a0cc (미디엄 퍼플)
Accent : #00c896 (K-카페 민트) / #ffffff (화이트)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
K-컬처 파워를 앞세워 스타벅스·블루보틀과 경쟁하는 K-카페 글로벌 확장 전략 발표 톤. 해외 파트너십·마스터 프랜차이즈·팝업 전략을 통한 글로벌 브랜드 빌딩.

[Image Principles]
해외 카페 팝업·글로벌 매장 이미지. 다크 + 민트 포인트. 세계 진출 지도. 브랜드 컬러 이미지.

[Design Characteristics]
• 다크 네이비 + 민트 글로벌 배색
• 세계 진출 현황 지도
• 글로벌 파트너 로고 그리드
• 해외 매출 성장 차트
• K-카페 경쟁 우위 카드

[Layout Guide]
- Title Slide : 다크 배경 + 글로벌 매장 이미지 + 민트 헤드라인
- Spec Slide : 해외 진출 현황 카드 (국가·매장 수·성장률)
- Comparison Slide : 로컬 vs 글로벌 운영 전략 비교
- CTA Slide : 민트 버튼 + 글로벌 파트너십 문의 CTA
- Tone : Global / Bold / Brand-forward
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 급식 전용 7개 디자인 프롬프트 ─────────────────────────
const CATERING_PROMPTS = [
  {
    name: '스쿨 뉴트리션 케어',
    type: 'School Nutrition Care',
    colors: ['#e8f5e9', '#2e7d32', '#ff8f00'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(255,143,0,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 학교 급식·영양 관리 교육 슬라이드 전문가
Industry : 급식
Type : 스쿨 뉴트리션 케어 — 학생 건강을 위한 학교 급식 영양 관리 자료

[Color Guide]
Background : #e8f5e9 (뉴트리션 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (영양 그린) / #ff8f00 (활력 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
성장기 학생의 건강한 발달을 위한 균형 잡힌 영양 급식의 가치를 학부모·교사·행정기관에 전달. 식재료 원산지·영양 기준·잔류농약 검사까지 투명하게 공개. 밥 한 끼가 미래를 키운다.

[Image Principles]
건강한 급식 이미지. 그린+오렌지 영양 배색. 영양 성분 인포그래픽. 식재료 산지 지도.

[Design Characteristics]
• 영양 그린 + 활력 오렌지 배색
• 영양 성분 인포그래픽 차트
• 식재료 원산지 인증 배지
• 주간 식단표 레이아웃
• 알레르기 정보 아이콘 시스템

[Layout Guide]
- Title Slide : 그린 배경 + 급식 이미지 + 오렌지 포인트 헤드라인
- Spec Slide : 주간 식단 영양 KPI 카드 (열량·단백질·비타민)
- Comparison Slide : 기존 급식 vs 개선 급식 영양 지표 비교
- CTA Slide : 그린 버튼 + 식단 구독·영양 상담 CTA
- Tone : Nutritious / Transparent / Health-first
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '기업 구내식당 솔루션',
    type: 'Corporate Cafeteria Solution',
    colors: ['#f5f5f7', '#1d1d1f', '#0071e3'],
    cardBg: 'linear-gradient(135deg, rgba(0,113,227,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,113,227,0.10)', numColor: '#0071e3',
    prompt: `[NotebookLM Slide Design Guide]

Role : 기업 단체급식·구내식당 위탁 운영 B2B 전문가
Industry : 급식
Type : 기업 구내식당 솔루션 — 기업 복지 식당 위탁 운영 서비스 제안 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #0071e3 (코퍼레이트 블루) / #34c759 (웰니스 그린)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
아라마크·삼성웰스토리 수준 기업 단체급식 위탁 운영 B2B 제안 톤. 식단 다양성·위생 관리·비용 효율·직원 만족도를 HR·총무팀에게 어필. 직원이 행복하면 회사가 성장한다.

[Image Principles]
기업 식당 운영 이미지. 코퍼레이트 블루 배색. 영양 분석 차트. 서비스 플로우 다이어그램.

[Design Characteristics]
• 화이트 + 블루 B2B 배색
• 서비스 SLA 스펙 카드
• 비용 절감 ROI 계산 카드
• 직원 만족도 수치 강조
• 위생 인증 배지 시스템

[Layout Guide]
- Title Slide : 화이트 + 구내식당 이미지 + 블루 서비스 제목
- Spec Slide : 급식 서비스 패키지 카드 (식단·위생·영양·앱)
- Comparison Slide : 직영 운영 vs 위탁 운영 비용·품질 비교
- CTA Slide : 블루 버튼 + 서비스 제안·견적 문의 CTA
- Tone : Professional / Efficient / Employee-centric
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '헬스케어 메디컬 푸드',
    type: 'Healthcare Medical Food',
    colors: ['#e3f2fd', '#0d47a1', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(13,71,161,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(13,71,161,0.10)', numColor: '#0d47a1',
    prompt: `[NotebookLM Slide Design Guide]

Role : 병원·요양원 환자식·치료식 급식 서비스 전문가
Industry : 급식
Type : 헬스케어 메디컬 푸드 — 환자 치료식·질환별 맞춤 급식 서비스 자료

[Color Guide]
Background : #e3f2fd (메디컬 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #2a4a7a (미디엄 블루)
Accent : #0d47a1 (메디컬 블루) / #34c759 (헬스 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
당뇨·신장·암·연하 곤란 등 질환별 맞춤 치료식을 제공하는 메디컬 푸드 서비스의 전문성 강조. 임상 영양사·의료진과 협업하는 근거 기반 환자 급식. 음식도 치료다.

[Image Principles]
병원 환자식·치료식 이미지. 메디컬 블루 배색. 질환별 영양 인포그래픽. 임상 데이터 차트.

[Design Characteristics]
• 메디컬 블루 + 헬스 그린 배색
• 질환별 맞춤 식단 카드
• 임상 영양 지표 인포그래픽
• 위생 인증 HACCP 배지
• 의료진 협업 플로우

[Layout Guide]
- Title Slide : 블루 배경 + 환자식 이미지 + 블루 헤드라인
- Spec Slide : 질환별 치료식 카드 (당뇨·신장·암·연하)
- Comparison Slide : 일반 병원식 vs 맞춤 치료식 환자 회복 비교
- CTA Slide : 블루 버튼 + 병원 급식 서비스 제안 CTA
- Tone : Clinical / Precise / Caring
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '케이터링 이벤트',
    type: 'Event Catering Premium',
    colors: ['#0c0c14', '#c9a84c', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.10), rgba(12,12,20,0.06))',
    numBg: 'rgba(201,168,76,0.14)', numColor: '#9a7a18',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프리미엄 케이터링·행사 식음료 서비스 전문가
Industry : 급식
Type : 케이터링 이벤트 — 기업 행사·웨딩·VVIP 이벤트 케이터링 제안 자료

[Color Guide]
Background : #0c0c14 (이벤트 다크)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #c9a84c (케이터링 골드) / #e8c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
기업 행사·VIP 만찬·웨딩 리셉션 등 특별한 순간을 빛내는 프리미엄 케이터링 서비스 제안. 메뉴 큐레이션·플레이팅·서비스 인력·현장 운영까지 원스톱 솔루션 강조.

[Image Principles]
프리미엄 케이터링 세팅 이미지. 다크+골드 배색. 아름다운 테이블 세팅. 뷔페·코스 요리 이미지.

[Design Characteristics]
• 이벤트 다크 + 골드 배색
• 서비스 구성 쇼케이스 카드
• 메뉴 큐레이션 레이아웃
• 이벤트 레퍼런스 갤러리
• 골드 테두리 VIP 패키지 카드

[Layout Guide]
- Title Slide : 다크 배경 + 케이터링 세팅 이미지 + 골드 헤드라인
- Spec Slide : 케이터링 패키지 카드 (인원·메뉴·서비스·가격)
- Comparison Slide : 기본·스탠다드·프리미엄 패키지 비교
- CTA Slide : 골드 버튼 + 행사 기획·견적 문의 CTA
- Tone : Sophisticated / Exclusive / Flawless
- Slide count : 7 pages
- Font size contrast : 제목 48pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스마트 급식 디지털',
    type: 'Smart Cafeteria Digital',
    colors: ['#e8f0fe', '#1a73e8', '#00c896'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(0,200,150,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스마트 급식·디지털 식단 관리 솔루션 발표 전문가
Industry : 급식
Type : 스마트 급식 디지털 — AI 식단 관리·스마트 배식·영양 앱 솔루션 자료

[Color Guide]
Background : #e8f0fe (스마트 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (스마트 블루) / #00c896 (데이터 민트)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI 영양 분석·자동 배식·스마트 트레이·앱 기반 식단 확인 등 급식 디지털 전환 솔루션 발표. 위탁급식사·학교·기업 모두를 위한 B2B 스마트 급식 플랫폼.

[Image Principles]
스마트 급식 시스템 이미지. 블루+민트 디지털 배색. 앱 UI 화면. 데이터 대시보드.

[Design Characteristics]
• 라이트 블루 + 민트 테크 배색
• 스마트 기능 아이콘 카드
• AI 분석 대시보드 레이아웃
• 비용 절감·효율 향상 수치
• 시스템 연동 플로우

[Layout Guide]
- Title Slide : 블루 배경 + 스마트 급식 UI 이미지 + 블루 헤드라인
- Spec Slide : 스마트 급식 기능 카드 (AI 분석·배식·재고·앱)
- Comparison Slide : 기존 급식 운영 vs 스마트 급식 효율 비교
- CTA Slide : 블루 버튼 + 솔루션 도입 상담 CTA
- Tone : Efficient / Digital / Data-driven
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '시니어 실버 케어식',
    type: 'Senior Silver Care Food',
    colors: ['#fff8e1', '#e65100', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(230,81,0,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(230,81,0,0.10)', numColor: '#bf4000',
    prompt: `[NotebookLM Slide Design Guide]

Role : 노인요양원·실버타운 맞춤 급식 서비스 전문가
Industry : 급식
Type : 시니어 실버 케어식 — 노인 연하 기능·영양 맞춤 케어 급식 자료

[Color Guide]
Background : #fff8e1 (따뜻한 크림)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #e65100 (웜 오렌지) / #1565c0 (케어 블루)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
어르신의 연하 기능·치아 상태·만성 질환에 맞춘 부드럽고 영양 가득한 케어식 서비스의 진정성과 전문성 전달. 요양원·실버타운·주간 보호센터 담당자에게 어필.

[Image Principles]
어르신·케어식 이미지. 따뜻한 크림 배색. 영양 맞춤 인포그래픽. 위생 인증 배지.

[Design Characteristics]
• 크림 + 오렌지 따뜻한 배색
• 큰 글씨 접근성 레이아웃
• 맞춤 케어식 카드 (연하·당뇨·고혈압)
• 영양 기준 충족 인증 배지
• 서비스 품질 보증 플로우

[Layout Guide]
- Title Slide : 크림 배경 + 어르신 케어식 이미지 + 오렌지 세리프 제목
- Spec Slide : 케어식 종류 카드 (연하·연식·일반·당뇨·저염식)
- Comparison Slide : 일반 급식 vs 케어식 영양·연하 안전성 비교
- CTA Slide : 오렌지 버튼 + 케어식 서비스 도입 상담 CTA
- Tone : Caring / Nutritional / Safe
- Slide count : 7 pages
- Font size contrast : 제목 44pt 세리프 / 소제목 22pt / 본문 15pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '급식 ESG 친환경',
    type: 'Catering ESG Green',
    colors: ['#f1f8e9', '#558b2f', '#0057a8'],
    cardBg: 'linear-gradient(135deg, rgba(85,139,47,0.09), rgba(0,87,168,0.06))',
    numBg: 'rgba(85,139,47,0.12)', numColor: '#4a7a28',
    prompt: `[NotebookLM Slide Design Guide]

Role : 급식 탄소 절감·로컬 푸드·푸드 마일리지 ESG 전문가
Industry : 급식
Type : 급식 ESG 친환경 — 로컬 푸드·탄소 절감·음식물 쓰레기 감축 ESG 급식 자료

[Color Guide]
Background : #f1f8e9 (로컬 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #558b2f (로컬 그린) / #0057a8 (리스폰서블 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
로컬 식재료 사용·음식물 쓰레기 감축·탄소 발자국 최소화로 지속가능한 급식 운영을 실천하는 ESG 보고 및 제안 톤. 학교·기업 모두를 위한 환경 책임 급식.

[Image Principles]
로컬 농장·유기농 식재료 이미지. 그린+블루 ESG 배색. 탄소 절감 인포그래픽. 푸드 마일리지 지도.

[Design Characteristics]
• 로컬 그린 + 블루 ESG 배색
• 푸드 마일리지 인포그래픽
• 음식물 쓰레기 감축 수치
• 로컬 식재료 지역 지도
• ESG 인증 배지 시스템

[Layout Guide]
- Title Slide : 그린 배경 + 로컬 식재료 이미지 + 그린 ESG 헤드라인
- Spec Slide : ESG 급식 성과 KPI 카드 (탄소·로컬·폐기물·인증)
- Comparison Slide : 일반 급식 vs ESG 급식 환경 영향 비교
- CTA Slide : 그린 버튼 + ESG 급식 전환 상담 CTA
- Tone : Sustainable / Local / Responsible
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 식품제조 전용 7개 디자인 프롬프트 ─────────────────────────
const FOODMFG_PROMPTS = [
  {
    name: '프리미엄 식품 브랜딩',
    type: 'Premium Food Branding',
    colors: ['#fdf6e8', '#7a4a00', '#c9a227'],
    cardBg: 'linear-gradient(135deg, rgba(201,162,39,0.10), rgba(253,246,232,0.8))',
    numBg: 'rgba(122,74,0,0.10)', numColor: '#7a4a00',
    prompt: `[NotebookLM Slide Design Guide]

Role : 식품 제조사 B2C 브랜드 마케팅 슬라이드 전문가
Industry : 식품제조
Type : 프리미엄 식품 브랜딩 — CJ·오뚜기·농심 수준 식품 브랜드 마케팅 자료

[Color Guide]
Background : #fdf6e8 (프리미엄 아이보리)
Text Color : #2a1200 (딥 브라운) / #6a4020 (미디엄 브라운)
Accent : #7a4a00 (리치 브라운) / #c9a227 (프리미엄 골드)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
오랜 레시피 전통과 최고급 원료로 만드는 프리미엄 식품 브랜드 톤. CJ·오뚜기·농심 수준의 신뢰와 맛의 권위를 소비자에게 전달. 맛의 전통은 쉽게 만들어지지 않는다.

[Image Principles]
고급 식품·원료 이미지. 아이보리+골드 배색. 식품 패키지 쇼케이스. 레시피·원산지 스토리.

[Design Characteristics]
• 프리미엄 아이보리 + 골드 배색
• 세리프 브랜드 타이포그래피
• 식품 패키지 쇼케이스 레이아웃
• 원산지·원료 스토리 카드
• 수상·인증 배지 시스템

[Layout Guide]
- Title Slide : 아이보리 배경 + 식품 이미지 + 골드 세리프 브랜드명
- Spec Slide : 제품 라인업 카드 (사진·원료·영양·인증)
- Comparison Slide : 프리미엄 vs 일반 라인 원료·품질 비교
- CTA Slide : 브라운 버튼 + 유통 제안·B2B 문의 CTA
- Tone : Heritage / Premium / Trustworthy
- Slide count : 7 pages
- Font size contrast : 제목 48pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '식품 안전 HACCP',
    type: 'Food Safety HACCP',
    colors: ['#e3f2fd', '#0d47a1', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(13,71,161,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(13,71,161,0.10)', numColor: '#0d47a1',
    prompt: `[NotebookLM Slide Design Guide]

Role : 식품 안전·HACCP·위생 관리 보고 전문가
Industry : 식품제조
Type : 식품 안전 HACCP — 식품 위생·HACCP·ISO 22000 인증 관리 자료

[Color Guide]
Background : #e3f2fd (세이프 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #2a4a7a (미디엄 블루)
Accent : #0d47a1 (세이프티 블루) / #34c759 (인증 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
소비자 식품 안전을 최우선으로 하는 HACCP·ISO 22000·식품 위생 관리 보고 톤. 식품 제조 공정의 모든 단계에서 위해 요소를 관리하는 과학적 안전 시스템 강조.

[Image Principles]
식품 위생 제조 현장 이미지. 블루+그린 안전 배색. HACCP 인증 배지. 공정 관리 체크리스트.

[Design Characteristics]
• 세이프 블루 + 인증 그린 배색
• HACCP 7원칙 인포그래픽
• 위해 분석 매트릭스 다이어그램
• 인증 배지 시스템
• 공정 관리 플로우차트

[Layout Guide]
- Title Slide : 블루 배경 + 위생 제조 이미지 + 블루 안전 헤드라인
- Spec Slide : HACCP 주요 관리점 카드 (온도·교차오염·이물·미생물)
- Comparison Slide : 인증 전·후 식품 안전 지표 개선 비교
- CTA Slide : 블루 버튼 + 식품 안전 컨설팅·인증 문의 CTA
- Tone : Safe / Scientific / Compliant
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '글로벌 K-푸드 수출',
    type: 'K-Food Global Export',
    colors: ['#001233', '#ff3b30', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(255,59,48,0.08), rgba(255,214,0,0.06))',
    numBg: 'rgba(255,59,48,0.12)', numColor: '#cc1a10',
    prompt: `[NotebookLM Slide Design Guide]

Role : K-푸드 글로벌 수출 마케팅 전문가
Industry : 식품제조
Type : 글로벌 K-푸드 수출 — 한류 파워로 세계를 공략하는 K-푸드 수출 전략 자료

[Color Guide]
Background : #001233 (글로벌 네이비)
Text Color : #ffffff / #aabcce (아이스 그레이)
Accent : #ff3b30 (K-레드) / #ffd600 (K-골드)
Font : Bebas Neue (제목) / Noto Sans KR (본문)

[Tone & Manner]
라면·김치·만두·K-스낵 등 K-푸드의 글로벌 열풍을 바탕으로 한 수출 확대 전략 발표. 미국·유럽·동남아 바이어·유통사를 대상으로 한 강렬한 임팩트 자료. 세계가 K-푸드를 원한다.

[Image Principles]
K-푸드 제품·한류 이미지. 네이비+레드+골드 K-배색. 세계 수출 지도. 성장 데이터 차트.

[Design Characteristics]
• 딥 네이비 + K-레드·골드 배색
• 세계 수출 현황 지도
• 국가별 매출 성장 차트
• K-푸드 제품 쇼케이스
• 한류 연계 마케팅 전략 카드

[Layout Guide]
- Title Slide : 네이비 배경 + K-푸드 이미지 + 레드+골드 헤드라인
- Spec Slide : 수출 주력 제품 카드 (품목·인증·주요 시장·성장률)
- Comparison Slide : 주요 수출국별 매출·성장률 비교 차트
- CTA Slide : 골드 버튼 + 글로벌 바이어·유통 파트너십 CTA
- Tone : Bold / Global / K-proud
- Slide count : 7 pages
- Font size contrast : 제목 54pt 볼드 / 소제목 22pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '클린라벨 내추럴',
    type: 'Clean Label Natural',
    colors: ['#f1f8e9', '#2e7d32', '#ff8f00'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(255,143,0,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 클린라벨·자연주의 식품 브랜드 마케팅 전문가
Industry : 식품제조
Type : 클린라벨 내추럴 — 무첨가·유기농·클린라벨 식품 브랜딩 자료

[Color Guide]
Background : #f1f8e9 (클린 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (내추럴 그린) / #ff8f00 (웜 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
인공 첨가물·보존료 없는 클린라벨 식품의 순수함과 건강함을 강조. 성분표를 당당하게 공개하는 투명한 브랜드 철학. 소비자가 믿고 먹을 수 있는 식품.

[Image Principles]
자연 식재료·유기농 이미지. 그린+오렌지 내추럴 배색. 성분표 클로즈업. 농장-식탁 스토리.

[Design Characteristics]
• 클린 그린 + 웜 오렌지 배색
• 성분 인포그래픽 (원료 수·무첨가 항목)
• 유기농·비건·Non-GMO 인증 배지
• 농장-식탁 공급망 스토리
• 클린라벨 비교 카드

[Layout Guide]
- Title Slide : 그린 배경 + 자연 식재료 이미지 + 그린 헤드라인
- Spec Slide : 클린라벨 성분 카드 (원료·무첨가 내역·인증)
- Comparison Slide : 일반 식품 vs 클린라벨 성분 수 비교
- CTA Slide : 그린 버튼 + 제품 구매·유통 제안 CTA
- Tone : Natural / Transparent / Healthy
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '식품제조 스마트팩토리',
    type: 'Food Smart Factory',
    colors: ['#0a1628', '#00c8ff', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(0,200,255,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(0,200,255,0.12)', numColor: '#0097c8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 식품 제조 공정 자동화·스마트팩토리 발표 전문가
Industry : 식품제조
Type : 식품제조 스마트팩토리 — IoT·AI 기반 식품 제조 공정 혁신 자료

[Color Guide]
Background : #0a1628 (팩토리 다크 블루)
Text Color : #e0f4ff / #7ab8d8 (아이스 블루)
Accent : #00c8ff (스마트 사이언) / #34c759 (품질 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI 품질 검사·IoT 온도 모니터링·자동화 포장 라인 등 식품 제조 디지털 전환 비전 발표. 원가 절감·불량률 감소·위생 향상을 데이터로 증명. 스마트팩토리가 식품 안전을 보장한다.

[Image Principles]
식품 공장 자동화 라인 이미지. 다크+사이언 배색. AI 검사 시스템 UI. 공정 데이터 대시보드.

[Design Characteristics]
• 팩토리 다크 + 사이언 배색
• AI 품질 검사 플로우 다이어그램
• 공정별 KPI HUD 카드
• 자동화 전·후 비교 차트
• 스마트팩토리 인증 배지

[Layout Guide]
- Title Slide : 다크 배경 + 스마트 공장 이미지 + 사이언 헤드라인
- Spec Slide : 스마트팩토리 기능 카드 (AI 검사·IoT·자동화·추적)
- Comparison Slide : 기존 공정 vs 스마트팩토리 효율·불량률 비교
- CTA Slide : 사이언 버튼 + 솔루션 도입 상담 CTA
- Tone : Innovative / Precise / Efficient
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '식품 IR 연간 보고',
    type: 'Food Company IR Annual',
    colors: ['#ffffff', '#1d1d1f', '#2e7d32'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.08), rgba(255,255,255,0.8))',
    numBg: 'rgba(46,125,50,0.10)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 식품 상장사 IR·연간 경영 성과 보고 전문가
Industry : 식품제조
Type : 식품 IR 연간 보고 — 주주·투자자 대상 식품 기업 연간 IR 자료

[Color Guide]
Background : #ffffff / #f5f5f5 (라이트 그레이)
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #1d1d1f (딥 블랙) / #2e7d32 (식품 그린)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
CJ제일제당·오뚜기·농심 수준 식품 상장사의 연간 매출·영업이익·신제품 출시·글로벌 수출 전략을 주주·기관투자자에게 권위 있게 전달. 식품이 곧 생활이고 미래다.

[Image Principles]
기업·제품 브랜드 이미지. 화이트+그린 배색. 재무 데이터 차트. 글로벌 사업 지도.

[Design Characteristics]
• 화이트 + 그린 식품 IR 배색
• 재무 KPI 대시보드
• 카테고리별 매출 차트
• 글로벌 사업 현황 지도
• ESG 성과 카드

[Layout Guide]
- Title Slide : 화이트 + 기업 이미지 + 그린 공식 IR 제목
- Spec Slide : 재무 KPI 카드 (매출·영업이익·수출액·신제품 수)
- Comparison Slide : 카테고리별·지역별 매출 성장 추이 비교
- CTA Slide : 그린 배경 + IR 미팅 신청·공시 안내 CTA
- Tone : Authoritative / Transparent / Growth-focused
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'HMR 밀키트 런칭',
    type: 'HMR Meal Kit Launch',
    colors: ['#fff0f5', '#e91e63', '#ff9800'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.08), rgba(255,152,0,0.06))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : HMR·밀키트·RTE 신제품 런칭 마케팅 전문가
Industry : 식품제조
Type : HMR 밀키트 런칭 — 가정간편식·밀키트 신제품 출시 마케팅 자료

[Color Guide]
Background : #fff0f5 (푸드 핑크 화이트)
Text Color : #2a0a18 (딥 로즈 블랙) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (런칭 핑크) / #ff9800 (식욕 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
1인 가구·맞벌이 부부를 위한 간편하고 맛있는 HMR·밀키트 신제품 런칭 에너지. 레스토랑 맛을 집에서 간편하게 구현하는 제품의 편의성·품질·다양성 강조.

[Image Principles]
밀키트·HMR 제품 감성 이미지. 핑크+오렌지 식욕 배색. 조리 전·후 비교 이미지. 패키지 디자인 쇼케이스.

[Design Characteristics]
• 소프트 핑크 + 식욕 오렌지 배색
• 제품 패키지 쇼케이스 레이아웃
• 조리 단계 인포그래픽
• SNS 바이럴 전략 카드
• 가격·용량 비교 카드

[Layout Guide]
- Title Slide : 핑크 배경 + 밀키트 이미지 + 핑크 런칭 헤드라인
- Spec Slide : 신제품 라인업 카드 (사진·이름·가격·조리 시간)
- Comparison Slide : 외식·배달 vs HMR 밀키트 비용·편의 비교
- CTA Slide : 핑크 버튼 + 구매·유통 제안 CTA
- Tone : Convenient / Delicious / Modern
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 편의점 전용 7개 디자인 프롬프트 ─────────────────────────
const CVS_PROMPTS = [
  {
    name: '24시 에너지',
    type: '24H Convenience Energy',
    colors: ['#0a1628', '#ffd600', '#ff3b30'],
    cardBg: 'linear-gradient(135deg, rgba(255,214,0,0.09), rgba(255,59,48,0.06))',
    numBg: 'rgba(255,214,0,0.14)', numColor: '#cc9900',
    prompt: `[NotebookLM Slide Design Guide]

Role : 편의점 브랜드 전략·가맹점 모집 슬라이드 전문가
Industry : 편의점
Type : 24시 에너지 — 밤낮없이 에너지 넘치는 편의점 브랜드 아이덴티티 자료

[Color Guide]
Background : #0a1628 (야간 다크 블루)
Text Color : #ffffff / #c0d0e0 (아이스 그레이)
Accent : #ffd600 (에너지 옐로우) / #ff3b30 (액션 레드)
Font : Barlow Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
24시간 365일 고객 곁에 있는 편의점의 에너지와 접근성을 표현. GS25·CU·세븐일레븐 수준 브랜드 파워를 가맹점 모집·투자자 발표에 활용. 언제나, 어디서나, 편하게.

[Image Principles]
야간 편의점 외관·내부 이미지. 다크 배경 + 옐로우·레드 포인트. 매출 인포그래픽. 가맹점 입지 지도.

[Design Characteristics]
• 다크 + 에너지 옐로우 배색
• 24시간 운영 아이콘 모티프
• 매출·방문객 수치 대형 강조
• 가맹 현황 지도 인포그래픽
• 상품군 카테고리 아이콘

[Layout Guide]
- Title Slide : 다크 배경 + 야간 편의점 이미지 + 옐로우 대형 헤드라인
- Spec Slide : 가맹점 평균 매출·방문객·수익 KPI 카드
- Comparison Slide : 입지 유형별 (역세권·주거·대학가) 매출 비교
- CTA Slide : 옐로우 버튼 + 가맹 상담 신청 CTA
- Tone : Energetic / Accessible / Results-driven
- Slide count : 7 pages
- Font size contrast : 제목 50pt 컨덴스드 / 핵심 수치 72pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '프레시 델리 라이프',
    type: 'Fresh Deli Lifestyle',
    colors: ['#f1f8e9', '#2e7d32', '#ff8f00'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(255,143,0,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 편의점 간편식·델리·HMR 상품 마케팅 전문가
Industry : 편의점
Type : 프레시 델리 라이프 — 편의점 신선 간편식·HMR 브랜딩 자료

[Color Guide]
Background : #f1f8e9 (프레시 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (프레시 그린) / #ff8f00 (식욕 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
편의점 PB 간편식·도시락·샌드위치·HMR의 신선함과 맛을 라이프스타일로 포지셔닝. 혼밥족·1인가구·직장인 타겟. 편의점이 곧 나만의 레스토랑.

[Image Principles]
신선한 간편식·도시락 푸드 사진. 그린+오렌지 식욕 자극 배색. 식재료 클로즈업. 라이프스타일 이미지.

[Design Characteristics]
• 프레시 그린 + 식욕 오렌지 배색
• 상품 플랫레이 사진 레이아웃
• 신선도·칼로리 인포그래픽
• 신상품 배지 시스템
• 고객 평점 카드

[Layout Guide]
- Title Slide : 그린 배경 + 간편식 이미지 + 오렌지 포인트 헤드라인
- Spec Slide : PB 상품 카드 그리드 (도시락·샌드위치·디저트·음료)
- Comparison Slide : 일반 배달음식 vs 편의점 간편식 가격·편의 비교
- CTA Slide : 오렌지 버튼 + 신상품 체험·구매 CTA
- Tone : Fresh / Tasty / Convenient
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '편의점 테크 리테일',
    type: 'CVS Tech Retail',
    colors: ['#e8f0fe', '#1a73e8', '#00c896'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(0,200,150,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스마트 편의점·무인 편의점 디지털 혁신 발표 전문가
Industry : 편의점
Type : 편의점 테크 리테일 — AI·무인 결제·스마트 편의점 혁신 자료

[Color Guide]
Background : #e8f0fe (테크 라이트 블루)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (테크 블루) / #00c896 (스마트 민트)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI 수요 예측·무인 결제·자동 발주 등 편의점 디지털 전환을 리드하는 이미지. 세계적인 아마존고·세븐일레븐 스마트스토어 감성. 기술이 편의점을 재정의한다.

[Image Principles]
스마트 무인 편의점 이미지. 블루+민트 테크 배색. AI 분석 대시보드 UI. 자동화 프로세스 다이어그램.

[Design Characteristics]
• 라이트 블루 + 민트 테크 배색
• 스마트 기능 아이콘 카드
• AI 수요 예측 플로우
• 무인 결제 프로세스
• 디지털 전환 ROI 강조

[Layout Guide]
- Title Slide : 블루 배경 + 스마트스토어 이미지 + 테크 헤드라인
- Spec Slide : 스마트 편의점 기술 카드 (AI·무인·자동발주·앱)
- Comparison Slide : 기존 편의점 vs 스마트 편의점 운영 효율 비교
- CTA Slide : 민트 버튼 + 파트너십·기술 도입 문의 CTA
- Tone : Innovative / Efficient / Future-ready
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '동네 생활 플랫폼',
    type: 'Neighborhood Life Platform',
    colors: ['#fff8e1', '#ff8f00', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(255,143,0,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(255,143,0,0.12)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 편의점 생활 서비스·플랫폼 확장 발표 전문가
Industry : 편의점
Type : 동네 생활 플랫폼 — 택배·공과금·금융·행정 원스톱 생활 서비스 자료

[Color Guide]
Background : #fff8e1 (따뜻한 크림)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #ff8f00 (생활 오렌지) / #1565c0 (서비스 블루)
Font : Nunito (제목) / Noto Sans KR (본문)

[Tone & Manner]
택배·ATM·공과금·행정 서비스까지 동네 생활 허브로 진화하는 편의점의 플랫폼 가치를 전달. 고령자·1인가구의 생활 편의를 높이는 지역 밀착 서비스.

[Image Principles]
생활 서비스 이용 이미지. 따뜻한 오렌지 배색. 서비스 아이콘 세트. 편의점 내부 서비스존 사진.

[Design Characteristics]
• 따뜻한 오렌지 + 블루 생활 배색
• 서비스 카테고리 아이콘 그리드
• 이용 편의성 인포그래픽
• 월 이용 건수 수치 강조
• 지역별 서비스 맵

[Layout Guide]
- Title Slide : 크림 배경 + 생활 서비스 이미지 + 오렌지 헤드라인
- Spec Slide : 생활 서비스 카드 (택배·ATM·행정·공과금·금융)
- Comparison Slide : 기존 편의점 vs 생활 플랫폼 서비스 범위 비교
- CTA Slide : 오렌지 버튼 + 서비스 도입·가맹 문의 CTA
- Tone : Convenient / Community / Life-centered
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'PB 브랜드 런칭',
    type: 'Private Brand Launch',
    colors: ['#1a1a2e', '#e2c97e', '#ffffff'],
    cardBg: 'linear-gradient(135deg, rgba(226,201,126,0.10), rgba(26,26,46,0.06))',
    numBg: 'rgba(226,201,126,0.14)', numColor: '#9a7a20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 편의점 PB(자체브랜드) 상품 기획·런칭 전문가
Industry : 편의점
Type : PB 브랜드 런칭 — 편의점 자체 브랜드 신상품 기획 발표 자료

[Color Guide]
Background : #1a1a2e (브랜드 다크 네이비)
Text Color : #f5f5f0 (크림 화이트) / #b0a8d0 (퍼플 그레이)
Accent : #e2c97e (PB 골드) / #ffffff (화이트)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
편의점 PB 상품을 프리미엄 브랜드처럼 런칭하는 감각적 발표 톤. 가성비+감성을 동시에 충족하는 MZ 타겟 PB 마케팅. 가격은 착하지만 품질은 명품.

[Image Principles]
PB 상품 패키지 디자인 컷. 다크 배경 + 골드 포인트. 상품 개발 스토리. 소비자 반응 데이터.

[Design Characteristics]
• 다크 네이비 + 골드 프리미엄 배색
• 패키지 디자인 쇼케이스
• 상품 개발 타임라인
• 소비자 조사 인사이트 카드
• 판매 목표 수치 강조

[Layout Guide]
- Title Slide : 다크 배경 + PB 패키지 이미지 + 골드 브랜드 헤드라인
- Spec Slide : 신상품 라인업 카드 (패키지·가격·타겟·USP)
- Comparison Slide : 경쟁 브랜드 vs PB 가격·품질 포지셔닝 비교
- CTA Slide : 골드 버튼 + MD·바이어 미팅 신청 CTA
- Tone : Premium / Brand-forward / Trendy
- Slide count : 7 pages
- Font size contrast : 제목 48pt / 소제목 21pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '편의점 ESG 그린',
    type: 'CVS ESG Green',
    colors: ['#e8f5e9', '#2e7d32', '#0057a8'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(0,87,168,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 편의점 ESG·환경 경영 발표 전문가
Industry : 편의점
Type : 편의점 ESG 그린 — 편의점 탄소 절감·친환경 포장·지역사회 기여 자료

[Color Guide]
Background : #e8f5e9 (ESG 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (ESG 그린) / #0057a8 (책임 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
전국 수만 개 가맹점을 통해 탄소 절감·친환경 포장·음식물 쓰레기 감소 등 사회적 가치를 창출하는 ESG 경영 톤. 지속가능한 편의점이 미래다.

[Image Principles]
친환경 포장·그린 캠페인 이미지. 그린+블루 ESG 배색. 탄소 절감 인포그래픽. 지역사회 기여 사진.

[Design Characteristics]
• 에코 그린 + 블루 ESG 배색
• CO₂ 감축 수치 강조
• 친환경 포장 전환 타임라인
• ESG 3대 영역 카드
• 지속가능 인증 배지

[Layout Guide]
- Title Slide : 그린 배경 + 친환경 편의점 이미지 + 에코 헤드라인
- Spec Slide : ESG 핵심 성과 KPI 카드 (탄소·폐기물·사회 기여)
- Comparison Slide : 전년 vs 당년 ESG 성과 개선 비교 차트
- CTA Slide : 그린 버튼 + ESG 협력·캠페인 참여 CTA
- Tone : Responsible / Green / Community
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '가맹점주 성공 스토리',
    type: 'Franchise Owner Success',
    colors: ['#f5f5f7', '#1d1d1f', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,0,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 편의점 가맹 창업 설명회 슬라이드 전문가
Industry : 편의점
Type : 가맹점주 성공 스토리 — 예비 창업자 대상 가맹 성공 사례 발표 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #ff6b00 (창업 오렌지) / #0071e3 (신뢰 블루)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
편의점 창업으로 경제적 자유를 이룬 가맹점주 성공 사례를 중심으로 예비 창업자의 공감과 확신을 이끌어내는 스토리텔링 톤. 데이터로 증명하고 사람으로 설득한다.

[Image Principles]
성공 가맹점주 인터뷰 이미지. 오렌지 포인트 강조. 매출 성장 차트. 창업 프로세스 타임라인.

[Design Characteristics]
• 그레이 + 오렌지 창업 배색
• 성공 사례 스토리 카드
• 창업 비용·수익 시뮬레이션
• 본사 지원 체계 플로우
• 창업 타임라인 로드맵

[Layout Guide]
- Title Slide : 화이트 + 가맹점주 이미지 + 오렌지 성공 헤드라인
- Spec Slide : 가맹 창업 KPI (초기 투자·월 매출·수익률·회수 기간)
- Comparison Slide : 업종별 창업 비용·수익성 비교 (편의점 경쟁력 강조)
- CTA Slide : 오렌지 버튼 + 창업 상담 신청 CTA
- Tone : Inspiring / Practical / Credible
- Slide count : 7 pages
- Font size contrast : 제목 42pt 700w / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 백화점 전용 7개 디자인 프롬프트 ─────────────────────────
const DEPARTMENT_PROMPTS = [
  {
    name: '럭셔리 리테일 블랙',
    type: 'Luxury Retail Black',
    colors: ['#0a0a0a', '#c9a84c', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(201,168,76,0.10), rgba(10,10,10,0.06))',
    numBg: 'rgba(201,168,76,0.14)', numColor: '#9a7a20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 백화점 럭셔리 브랜드 커뮤니케이션 전문가
Industry : 백화점
Type : 럭셔리 리테일 블랙 — 롯데·신세계·현대 수준 프리미엄 백화점 브랜딩 자료

[Color Guide]
Background : #0a0a0a (럭셔리 블랙)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #c9a84c (프레스티지 골드) / #e2c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
롯데·신세계·현대백화점 수준 프리미엄 브랜드 이미지. 입점 브랜드·고객 경험·문화 공간으로서의 백화점 가치 전달. 사치가 아닌 문화와 라이프스타일의 정수.

[Image Principles]
백화점 인테리어·명품 진열 이미지. 다크 배경 + 골드 포인트. 럭셔리 라이프스타일 사진. 시즌별 팝업스토어.

[Design Characteristics]
• 블랙 + 챔페인 골드 럭셔리 배색
• 세리프 폰트 권위 타이포그래피
• 브랜드 쇼케이스 레이아웃
• 골드 라인 섹션 구분
• 극도의 여백 미니멀 레이아웃

[Layout Guide]
- Title Slide : 풀 블랙 + 백화점 이미지 + 골드 세리프 헤드라인
- Spec Slide : 입점 브랜드 카드 (명품·패션·뷰티·리빙 카테고리)
- Comparison Slide : 점포별·시즌별 매출 성과 비교
- CTA Slide : 골드 버튼 + VIP 멤버십·입점 문의 CTA
- Tone : Luxurious / Prestigious / Curated
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '팝업 컬처 무브먼트',
    type: 'Pop-up Culture Movement',
    colors: ['#fdf0ff', '#9c27b0', '#ff4081'],
    cardBg: 'linear-gradient(135deg, rgba(156,39,176,0.08), rgba(255,64,129,0.06))',
    numBg: 'rgba(156,39,176,0.10)', numColor: '#7b1fa2',
    prompt: `[NotebookLM Slide Design Guide]

Role : 백화점 팝업스토어·문화 이벤트 기획 전문가
Industry : 백화점
Type : 팝업 컬처 무브먼트 — MZ 세대 유입을 위한 팝업·문화 이벤트 기획 발표

[Color Guide]
Background : #fdf0ff (소프트 라벤더)
Text Color : #1a001a (딥 퍼플 블랙) / #5a2a6a (미디엄 퍼플)
Accent : #9c27b0 (컬처 퍼플) / #ff4081 (트렌드 핑크)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
MZ 세대를 백화점으로 끌어들이는 팝업스토어·전시·콜라보 이벤트의 트렌디한 기획 에너지. SNS 바이럴 콘텐츠를 만들어내는 문화 공간으로서 백화점 재정의.

[Image Principles]
팝업스토어·아트 이벤트 이미지. 라벤더+핑크 트렌디 배색. SNS 감성 사진 콜라주. 아트 콜라보 포스터 스타일.

[Design Characteristics]
• 라벤더 + 퍼플·핑크 트렌디 배색
• 팝업 이벤트 포스터 감성 레이아웃
• SNS 인증샷 갤러리 그리드
• 방문객 수·SNS 도달 수치
• 아트 콜라보 로고 배치

[Layout Guide]
- Title Slide : 라벤더 배경 + 팝업 이미지 + 퍼플 감성 헤드라인
- Spec Slide : 기획 이벤트 카드 (팝업·전시·콜라보·체험)
- Comparison Slide : 이벤트 전·후 방문객·매출 변화 비교
- CTA Slide : 퍼플 버튼 + 입점·콜라보 제안 CTA
- Tone : Trendy / Cultural / Experiential
- Slide count : 7 pages
- Font size contrast : 제목 48pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '프리미엄 F&B 큐레이션',
    type: 'Premium F&B Curation',
    colors: ['#fdf6e8', '#7a4a00', '#c9a227'],
    cardBg: 'linear-gradient(135deg, rgba(201,162,39,0.09), rgba(253,246,232,0.8))',
    numBg: 'rgba(122,74,0,0.10)', numColor: '#7a4a00',
    prompt: `[NotebookLM Slide Design Guide]

Role : 백화점 식품관·다이닝 MD 기획 전문가
Industry : 백화점
Type : 프리미엄 F&B 큐레이션 — 백화점 식품관·미식 다이닝 공간 브랜딩 자료

[Color Guide]
Background : #fdf6e8 (따뜻한 아이보리)
Text Color : #2a1200 (딥 브라운) / #6a4020 (미디엄 브라운)
Accent : #7a4a00 (리치 브라운) / #c9a227 (다이닝 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
백화점 지하 식품관과 레스토랑 존의 미식 경험을 고급스럽게 큐레이션. 입점 레스토랑·명인 브랜드·지역 특산품을 프리미엄 감성으로 소개. 맛의 예술관.

[Image Principles]
고급 음식·식재료 클로즈업. 아이보리+골드 미식 배색. 레스토랑 인테리어 이미지. 셰프·생산자 포트레이트.

[Design Characteristics]
• 아이보리 + 골드 미식 배색
• 세리프 폰트 고급 타이포그래피
• 음식 사진 중심 풀블리드 레이아웃
• 입점 브랜드 로고 큐레이션
• 시즌 메뉴 하이라이트 카드

[Layout Guide]
- Title Slide : 아이보리 배경 + 미식 이미지 + 골드 세리프 헤드라인
- Spec Slide : 입점 F&B 브랜드 카드 (다이닝·베이커리·주류·식재료)
- Comparison Slide : 시즌별·요일별 방문객·F&B 매출 추이 비교
- CTA Slide : 골드 버튼 + 입점·파트너십 문의 CTA
- Tone : Gourmet / Curated / Experiential
- Slide count : 7 pages
- Font size contrast : 제목 48pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '백화점 디지털 전환',
    type: 'Department Store DX',
    colors: ['#e8f0fe', '#1a73e8', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(124,58,237,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 백화점 옴니채널·디지털 전환 전략 발표 전문가
Industry : 백화점
Type : 백화점 디지털 전환 — 온오프 옴니채널·앱·AI 개인화 전략 자료

[Color Guide]
Background : #e8f0fe (디지털 라이트 블루)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (디지털 블루) / #7c3aed (AI 퍼플)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
오프라인 강점을 유지하며 디지털 옴니채널로 진화하는 백화점 전략 발표. 앱 기반 쇼핑·AI 개인화 추천·멤버십 데이터 활용을 투자자·이사진에게 어필.

[Image Principles]
백화점 앱·디지털 쇼핑 이미지. 블루+퍼플 배색. 옴니채널 플로우 다이어그램. 데이터 분석 대시보드.

[Design Characteristics]
• 라이트 블루 + AI 퍼플 배색
• 옴니채널 플로우 다이어그램
• 앱 UI 스크린 모형
• 고객 데이터 활용 인포그래픽
• KPI 대시보드 레이아웃

[Layout Guide]
- Title Slide : 블루 배경 + 디지털 쇼핑 이미지 + 블루 헤드라인
- Spec Slide : 디지털 전환 KPI (앱 MAU·온라인 매출 비중·NPS)
- Comparison Slide : 오프라인 단독 vs 옴니채널 고객 LTV 비교
- CTA Slide : 블루 버튼 + 전략 파트너십·투자 문의 CTA
- Tone : Strategic / Innovative / Data-driven
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '시즌 세일 캠페인',
    type: 'Season Sale Campaign',
    colors: ['#fff0f0', '#e63946', '#1a1a2e'],
    cardBg: 'linear-gradient(135deg, rgba(230,57,70,0.08), rgba(255,240,240,0.8))',
    numBg: 'rgba(230,57,70,0.12)', numColor: '#c42030',
    prompt: `[NotebookLM Slide Design Guide]

Role : 백화점 시즌 세일·프로모션 기획 전문가
Industry : 백화점
Type : 시즌 세일 캠페인 — 정기 세일·VIP 행사·시즌 프로모션 기획 발표 자료

[Color Guide]
Background : #fff0f0 (세일 레드 틴트 화이트)
Text Color : #1a0a0a (딥 레드 블랙) / #5a2020 (미디엄 레드)
Accent : #e63946 (세일 레드) / #1a1a2e (딥 블랙)
Font : Archivo Black (제목) / Noto Sans KR (본문)

[Tone & Manner]
시즌 세일의 설레임과 특별함을 임팩트 있게 전달. VIP 사전 행사·정기 세일·카드사 제휴 혜택을 고객과 입점사 모두에게 어필하는 이중 커뮤니케이션.

[Image Principles]
화려한 세일 이미지. 레드+블랙 강렬 배색. 할인율 수치 대형 강조. 쇼핑백·브랜드 이미지.

[Design Characteristics]
• 레드 + 블랙 세일 임팩트 배색
• 할인율 초대형 타이포그래피
• 프로모션 카테고리 카드
• D-day 카운트다운 모티프
• VIP 사전 행사 배지

[Layout Guide]
- Title Slide : 화이트 배경 + 세일 이미지 + 레드 대형 할인율 헤드라인
- Spec Slide : 세일 참여 브랜드·카테고리·기간 정보 카드
- Comparison Slide : 전년 동기 vs 당기 세일 매출 성과 비교
- CTA Slide : 레드 버튼 + VIP 사전 등록·쿠폰 수령 CTA
- Tone : Exciting / Exclusive / Urgency
- Slide count : 7 pages
- Font size contrast : 제목 58pt 블랙웨이트 / 할인율 80pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '백화점 ESG 리포트',
    type: 'Department ESG Report',
    colors: ['#f5f5f7', '#1d1d1f', '#2e7d32'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 백화점 ESG 경영 성과 보고 전문가
Industry : 백화점
Type : 백화점 ESG 리포트 — 지속가능 유통·소상공인 상생·탄소 절감 보고 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #2e7d32 (ESG 그린) / #0071e3 (책임 블루)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
소상공인·지역 상품 상생·친환경 포장·탄소 절감 등 유통 대기업의 사회적 책임을 투명하게 보고. 주주·NGO·감독 기관 모두를 위한 신뢰 중심 ESG 자료.

[Image Principles]
친환경·상생 캠페인 이미지. 그린+블루 ESG 배색. 성과 차트. 지역 협력 사진.

[Design Characteristics]
• 화이트 + ESG 그린 배색
• ESG KPI 대시보드
• 상생 협력 수치 강조
• 탄소 절감 타임라인
• 지속가능 인증 배지

[Layout Guide]
- Title Slide : 화이트 + ESG 이미지 + 그린 공식 제목
- Spec Slide : ESG 핵심 지표 카드 (탄소·소상공인·사회 기여)
- Comparison Slide : 전년 vs 당년 ESG 성과 개선 비교
- CTA Slide : 그린 버튼 + 상생·협력 파트너십 문의 CTA
- Tone : Responsible / Transparent / Community
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '백화점 IR 애뉴얼',
    type: 'Department Store IR Annual',
    colors: ['#ffffff', '#001a6e', '#c9a84c'],
    cardBg: 'linear-gradient(135deg, rgba(0,26,110,0.08), rgba(201,168,76,0.06))',
    numBg: 'rgba(0,26,110,0.10)', numColor: '#001a6e',
    prompt: `[NotebookLM Slide Design Guide]

Role : 백화점 상장사 연간 IR 발표 전문가
Industry : 백화점
Type : 백화점 IR 애뉴얼 — 주주·기관투자자 대상 연간 경영 성과 IR 자료

[Color Guide]
Background : #ffffff / #f0f4ff (라이트 블루 틴트)
Text Color : #0a1040 (딥 네이비) / #3a4a7a (블루 그레이)
Accent : #001a6e (IR 네이비) / #c9a84c (가치 골드)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
백화점 상장사의 연간 매출·영업이익·점포 전략·신사업을 주주와 기관투자자에게 권위 있게 전달. 오프라인 리테일의 가치와 디지털 전환 성장 스토리를 설득력 있게 구성.

[Image Principles]
백화점 플래그십 이미지. 네이비+골드 배색. 재무 데이터 차트. 신규 점포 렌더링.

[Design Characteristics]
• 화이트 + 네이비 IR 권위 배색
• 재무 KPI 대시보드
• 점포 현황 지도 인포그래픽
• 성장 로드맵 타임라인
• 배당·주주환원 카드

[Layout Guide]
- Title Slide : 화이트 + 백화점 이미지 + 네이비 공식 IR 제목
- Spec Slide : 재무 KPI 4개 카드 (매출·영업이익·점포 수·온라인 비중)
- Comparison Slide : 연도별 실적 추이 + 향후 전망 바 차트
- CTA Slide : 네이비 배경 + IR 미팅 신청·공시 안내 CTA
- Tone : Authoritative / Transparent / Growth-focused
- Slide count : 7 pages
- Font size contrast : 제목 42pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 온라인쇼핑 전용 7개 디자인 프롬프트 ─────────────────────────
const ECOMMERCE_PROMPTS = [
  {
    name: '로켓 커머스 에너지',
    type: 'Rocket Commerce Energy',
    colors: ['#0a1628', '#ff6b00', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,0,0.09), rgba(255,214,0,0.06))',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 이커머스·온라인 쇼핑몰 성장 전략 발표 전문가
Industry : 온라인쇼핑
Type : 로켓 커머스 에너지 — 쿠팡·네이버 감성의 급성장 이커머스 전략 자료

[Color Guide]
Background : #0a1628 (커머스 다크 블루)
Text Color : #ffffff / #c0d0e0 (아이스 그레이)
Accent : #ff6b00 (로켓 오렌지) / #ffd600 (에너지 옐로우)
Font : Barlow Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
압도적인 성장 속도와 물류 경쟁력을 강조하는 이커머스 전략 발표 톤. GMV·주문 건수·배송 속도를 대형 수치로 임팩트 있게 전달. 더 빠르게, 더 싸게, 더 많이.

[Image Principles]
풀필먼트 센터·배송 이미지. 다크+오렌지 에너지 배색. 성장 차트 인포그래픽. 물류 네트워크 지도.

[Design Characteristics]
• 다크 + 로켓 오렌지 배색
• GMV·주문 수치 초대형 강조
• 배송 속도 인포그래픽
• 물류 네트워크 지도
• 카테고리별 성장 차트

[Layout Guide]
- Title Slide : 다크 배경 + 풀필먼트 이미지 + 오렌지 대형 성장 수치
- Spec Slide : 핵심 KPI 카드 (GMV·주문 건수·배송 속도·회원 수)
- Comparison Slide : 전년 대비 카테고리별 성장률 비교 차트
- CTA Slide : 오렌지 버튼 + 셀러 입점·파트너십 CTA
- Tone : Aggressive / Growth-driven / Fast
- Slide count : 7 pages
- Font size contrast : 제목 52pt 컨덴스드 / 핵심 수치 80pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '라이브커머스 트렌드',
    type: 'Live Commerce Trend',
    colors: ['#0d0d1a', '#ff3b7c', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(255,59,124,0.09), rgba(255,214,0,0.06))',
    numBg: 'rgba(255,59,124,0.12)', numColor: '#cc0055',
    prompt: `[NotebookLM Slide Design Guide]

Role : 라이브커머스·숏폼 쇼핑 전략 발표 전문가
Industry : 온라인쇼핑
Type : 라이브커머스 트렌드 — 라이브방송·숏폼·인플루언서 커머스 전략 자료

[Color Guide]
Background : #0d0d1a (라이브 다크)
Text Color : #fff0f8 / #c090b0 (소프트 핑크)
Accent : #ff3b7c (라이브 핑크) / #ffd600 (관심 옐로우)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
틱톡·유튜브·네이버 쇼핑라이브 등 라이브커머스와 숏폼 기반 소셜 쇼핑의 성장세를 에너지 있게 발표. 크리에이터 이코노미·인플루언서 마케팅을 통한 GMV 성장 전략.

[Image Principles]
라이브방송 스튜디오·인플루언서 이미지. 다크+핑크 라이브 배색. 시청자 수·전환율 데이터. 숏폼 플랫폼 UI.

[Design Characteristics]
• 라이브 다크 + 핑크·옐로우 배색
• 라이브 중 UI 스타일 모티프
• 실시간 지표 HUD 카드
• 크리에이터 프로필 카드
• 플랫폼별 성과 비교 차트

[Layout Guide]
- Title Slide : 다크 배경 + 라이브 방송 이미지 + 핑크 네온 헤드라인
- Spec Slide : 라이브커머스 성과 KPI (시청 수·전환율·GMV·ROI)
- Comparison Slide : 일반 상세페이지 vs 라이브방송 전환율 비교
- CTA Slide : 핑크 버튼 + 라이브커머스 입점·제작 문의 CTA
- Tone : Dynamic / Viral / Engaging
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '셀러 성장 파트너',
    type: 'Seller Growth Partner',
    colors: ['#e8f4fd', '#1a73e8', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 온라인 셀러·이커머스 입점사 성장 지원 전문가
Industry : 온라인쇼핑
Type : 셀러 성장 파트너 — 플랫폼 입점 셀러 모집·지원 프로그램 발표 자료

[Color Guide]
Background : #e8f4fd (파트너 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (파트너 블루) / #34c759 (성장 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
중소 셀러와 함께 성장하는 플랫폼 파트너십 톤. 입점 수수료·광고 지원·물류 연계·데이터 분석 서비스를 예비 셀러에게 어필. 내 브랜드의 날개가 되겠습니다.

[Image Principles]
셀러·창업자 성공 이미지. 블루+그린 파트너 배색. 성장 차트. 셀러 지원 서비스 아이콘.

[Design Characteristics]
• 파트너 블루 + 그린 배색
• 셀러 지원 서비스 카드
• 수익 시뮬레이션 인포그래픽
• 셀러 성공 사례 카드
• 입점 프로세스 플로우

[Layout Guide]
- Title Slide : 블루 배경 + 셀러 성공 이미지 + 그린 포인트 헤드라인
- Spec Slide : 셀러 지원 프로그램 카드 (수수료·광고·물류·분석)
- Comparison Slide : 오픈마켓 경쟁사 vs 당사 셀러 지원 조건 비교
- CTA Slide : 블루 버튼 + 입점 신청·상담 CTA
- Tone : Supportive / Growth-enabling / Transparent
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '퍼스널라이즈드 쇼핑',
    type: 'Personalized Shopping AI',
    colors: ['#f3e5f5', '#7c3aed', '#00c896'],
    cardBg: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(0,200,150,0.06))',
    numBg: 'rgba(124,58,237,0.10)', numColor: '#7c3aed',
    prompt: `[NotebookLM Slide Design Guide]

Role : AI 개인화 추천·커머스 기술 발표 전문가
Industry : 온라인쇼핑
Type : 퍼스널라이즈드 쇼핑 — AI 기반 개인화 추천·맞춤 쇼핑 경험 기술 자료

[Color Guide]
Background : #f3e5f5 (소프트 라벤더)
Text Color : #1a001a (딥 퍼플 블랙) / #5a2a6a (미디엄 퍼플)
Accent : #7c3aed (AI 퍼플) / #00c896 (개인화 민트)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI가 고객의 취향·구매 패턴·행동 데이터를 분석해 최적의 상품을 추천하는 개인화 기술 발표. 클릭률·전환율·재구매율 향상 데이터로 기술 가치를 증명.

[Image Principles]
AI 추천 앱 UI 이미지. 라벤더+민트 AI 배색. 개인화 플로우 다이어그램. 성과 비교 차트.

[Design Characteristics]
• 라벤더 + AI 퍼플·민트 배색
• AI 추천 플로우 다이어그램
• 개인화 효과 수치 강조
• 알고리즘 시각화 레이아웃
• A/B 테스트 비교 카드

[Layout Guide]
- Title Slide : 라벤더 배경 + AI 추천 UI + 퍼플 헤드라인
- Spec Slide : AI 개인화 성과 KPI (CTR·전환율·재구매율·ARPU)
- Comparison Slide : 일반 추천 vs AI 개인화 추천 성과 비교
- CTA Slide : 퍼플 버튼 + AI 기술 도입 상담 CTA
- Tone : Intelligent / Data-driven / Customer-centric
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '풀필먼트 물류 혁신',
    type: 'Fulfillment Logistics Innovation',
    colors: ['#f4f4f4', '#2d2d2d', '#ff9500'],
    cardBg: 'linear-gradient(135deg, rgba(255,149,0,0.09), rgba(244,244,244,0.8))',
    numBg: 'rgba(255,149,0,0.12)', numColor: '#cc7700',
    prompt: `[NotebookLM Slide Design Guide]

Role : 이커머스 물류·풀필먼트 솔루션 발표 전문가
Industry : 온라인쇼핑
Type : 풀필먼트 물류 혁신 — 당일·새벽배송·3PL 물류 솔루션 B2B 자료

[Color Guide]
Background : #f4f4f4 (로지스틱 그레이)
Text Color : #1a1a1a (차콜) / #555555 (미디엄 그레이)
Accent : #2d2d2d (다크 차콜) / #ff9500 (로지스틱 오렌지)
Font : Roboto Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
당일배송·새벽배송·반품 솔루션 등 이커머스 물류 경쟁력을 셀러·유통사에게 어필하는 실용 B2B 톤. 속도·정확도·비용 절감 수치로 ROI를 증명. 물류가 곧 브랜드다.

[Image Principles]
풀필먼트 센터·배송 차량 이미지. 그레이+오렌지 물류 배색. 배송 시간 인포그래픽. 물류 네트워크 지도.

[Design Characteristics]
• 그레이 + 오렌지 인더스트리얼 배색
• 물류 네트워크 지도 시각화
• 배송 속도·정확도 KPI
• 비용 절감 ROI 계산 카드
• 서비스 SLA 스펙 표

[Layout Guide]
- Title Slide : 그레이 배경 + 물류 센터 이미지 + 오렌지 헤드라인
- Spec Slide : 물류 서비스 스펙 카드 (당일·새벽·반품·해외)
- Comparison Slide : 자체 물류 vs 3PL 풀필먼트 비용·속도 비교
- CTA Slide : 오렌지 버튼 + 물류 솔루션 상담 CTA
- Tone : Reliable / Fast / Cost-efficient
- Slide count : 7 pages
- Font size contrast : 제목 46pt 컨덴스드 / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '글로벌 크로스보더',
    type: 'Global Cross-border Commerce',
    colors: ['#001233', '#4488ff', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(68,136,255,0.09), rgba(255,214,0,0.06))',
    numBg: 'rgba(68,136,255,0.12)', numColor: '#2266cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 해외직구·역직구·글로벌 이커머스 전략 전문가
Industry : 온라인쇼핑
Type : 글로벌 크로스보더 — 해외직구·역직구·글로벌 셀링 전략 발표 자료

[Color Guide]
Background : #001233 (글로벌 네이비)
Text Color : #ffffff / #aabcce (아이스 그레이)
Accent : #4488ff (글로벌 블루) / #ffd600 (골드)
Font : Bebas Neue (제목) / Noto Sans KR (본문)

[Tone & Manner]
해외 소비자에게 K-상품을 판매하는 역직구와 글로벌 직구 플랫폼 확장 전략. 아마존·알리익스프레스·라쿠텐 경쟁에서 K-커머스의 경쟁력을 강조. 세계가 K-쇼핑을 한다.

[Image Principles]
세계 지도 물류 이미지. 네이비+블루+골드 글로벌 배색. 국가별 수출 데이터. 글로벌 플랫폼 UI.

[Design Characteristics]
• 딥 네이비 + 블루·골드 글로벌 배색
• 세계 지도 수출 시각화
• 국가별 성장률 인포그래픽
• 글로벌 플랫폼 비교 카드
• 통관·결제 솔루션 플로우

[Layout Guide]
- Title Slide : 네이비 배경 + 세계지도 이미지 + 골드 글로벌 헤드라인
- Spec Slide : 주요 수출국 성과 카드 (미국·일본·동남아·유럽)
- Comparison Slide : 국내 판매 vs 글로벌 확장 수익성 비교
- CTA Slide : 골드 버튼 + 글로벌 셀링 파트너십 CTA
- Tone : Global / Ambitious / Export-driven
- Slide count : 7 pages
- Font size contrast : 제목 52pt 볼드 / 소제목 22pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '이커머스 IR 덱',
    type: 'E-commerce IR Deck',
    colors: ['#f5f5f7', '#1d1d1f', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,0,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 이커머스 스타트업·플랫폼 투자 유치 IR 전문가
Industry : 온라인쇼핑
Type : 이커머스 IR 덱 — VC·PE 대상 이커머스 플랫폼 투자 설명 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #ff6b00 (액티브 오렌지) / #0071e3 (코퍼레이트 블루)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
이커머스 플랫폼의 GMV 성장성·수익 모델·시장 기회를 VC·PE에게 설득력 있게 전달. 경쟁 우위·방어 해자·유닛 이코노믹스를 데이터로 증명. 지금이 투자 최적 타이밍이다.

[Image Principles]
플랫폼 성장 차트. 화이트+오렌지 IR 배색. 시장 규모 인포그래픽. 팀 프로필 카드.

[Design Characteristics]
• 화이트 + 오렌지 IR 배색
• GMV·수익 성장 트랙션 차트
• 유닛 이코노믹스 카드
• 시장 규모 TAM 다이어그램
• 경쟁 포지셔닝 매트릭스

[Layout Guide]
- Title Slide : 화이트 + 플랫폼 이미지 + 오렌지 IR 헤드라인
- Spec Slide : 핵심 KPI 트랙션 카드 (GMV·MAU·Take Rate·LTV)
- Comparison Slide : 경쟁사 대비 포지셔닝 매트릭스
- CTA Slide : 오렌지 버튼 + 투자 미팅 신청 CTA
- Tone : Compelling / Data-backed / Growth-focused
- Slide count : 7 pages
- Font size contrast : 제목 42pt 700w / 핵심 수치 68pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 프랜차이즈 전용 7개 디자인 프롬프트 ─────────────────────────
const FRANCHISE_PROMPTS = [
  {
    name: '프랜차이즈 IR 피치',
    type: 'Franchise IR Pitch',
    colors: ['#ffffff', '#1d1d1f', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,0,0.08), rgba(255,255,255,0.8))',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프랜차이즈 본사 가맹 모집·투자 유치 IR 전문가
Industry : 프랜차이즈
Type : 프랜차이즈 IR 피치 — 예비 가맹점주·투자자 대상 사업 설명 자료

[Color Guide]
Background : #ffffff / #f8f8f8 (라이트 그레이)
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #ff6b00 (창업 오렌지) / #1d1d1f (딥 블랙)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
예비 가맹점주에게 수익성·지원 시스템·브랜드 파워를 설득하는 사업 중심 발표 톤. 초기 투자 대비 ROI·가맹점 평균 매출·본사 지원 체계를 명확히 전달. 함께 성공하는 파트너십.

[Image Principles]
성공 가맹점·브랜드 이미지. 오렌지 포인트 강조. 수익 시뮬레이션 차트. 전국 가맹 현황 지도.

[Design Characteristics]
• 화이트 + 오렌지 창업 배색
• 수익 모델 시뮬레이션 카드
• 가맹 현황 지도 인포그래픽
• 본사 지원 체계 플로우
• 창업 타임라인 로드맵

[Layout Guide]
- Title Slide : 화이트 + 브랜드 이미지 + 오렌지 사업 헤드라인
- Spec Slide : 창업 KPI 카드 (초기 투자·월 매출·수익률·회수 기간)
- Comparison Slide : 경쟁 업종 대비 창업 비용·리스크 비교
- CTA Slide : 오렌지 버튼 + 가맹 상담 신청 CTA
- Tone : Business / Partnering / Results-driven
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 핵심 수치 68pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '브랜드 파워 스토리',
    type: 'Brand Power Story',
    colors: ['#0a0a14', '#d4af37', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(212,175,55,0.10), rgba(10,10,20,0.06))',
    numBg: 'rgba(212,175,55,0.14)', numColor: '#9a7a18',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프랜차이즈 브랜드 헤리티지·스토리텔링 전문가
Industry : 프랜차이즈
Type : 브랜드 파워 스토리 — 브랜드 역사·철학·가치를 담은 프리미엄 스토리텔링

[Color Guide]
Background : #0a0a14 (브랜드 다크)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #d4af37 (브랜드 골드) / #e8c97e (라이트 골드)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
수십 년 역사와 철학을 가진 프랜차이즈 브랜드의 헤리티지와 가치를 프리미엄 스토리텔링으로 전달. 브랜드 DNA·창업 정신·품질 철학이 가맹점주의 자부심이 된다.

[Image Principles]
브랜드 역사·창업 스토리 이미지. 다크+골드 헤리티지 배색. 빈티지 브랜드 아카이브. 시그니처 메뉴·상품 클로즈업.

[Design Characteristics]
• 다크 + 챔페인 골드 헤리티지 배색
• 세리프 스토리텔링 타이포
• 브랜드 역사 타임라인
• 시그니처 상품 쇼케이스
• 골드 테두리 인용 카드

[Layout Guide]
- Title Slide : 다크 배경 + 브랜드 이미지 + 골드 세리프 헤드라인
- Spec Slide : 브랜드 역사 타임라인 + 주요 마일스톤
- Comparison Slide : 창업 초기 vs 현재 성장 규모 비교
- CTA Slide : 골드 버튼 + 가맹 상담·브랜드 협력 CTA
- Tone : Heritage / Prestigious / Inspiring
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '슈퍼바이저 운영 매뉴얼',
    type: 'Franchise Operations Manual',
    colors: ['#f4f4f4', '#2d2d2d', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,102,204,0.08), rgba(244,244,244,0.8))',
    numBg: 'rgba(0,102,204,0.10)', numColor: '#0066cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프랜차이즈 SV(슈퍼바이저)·가맹점 운영 관리 전문가
Industry : 프랜차이즈
Type : 슈퍼바이저 운영 매뉴얼 — 가맹점 운영 표준화·QSC 교육 자료

[Color Guide]
Background : #f4f4f4 (운영 그레이)
Text Color : #1a1a1a (차콜) / #555555 (미디엄 그레이)
Accent : #2d2d2d (차콜 블랙) / #0066cc (매뉴얼 블루)
Font : Roboto Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
QSC(품질·서비스·청결) 표준화를 통해 전 가맹점의 균일한 고객 경험을 확보하는 운영 매뉴얼 톤. SV와 가맹점주 모두를 위한 명확하고 실용적인 운영 교육 자료.

[Image Principles]
매장 운영·서비스 교육 이미지. 그레이+블루 전문 배색. QSC 체크리스트. 운영 프로세스 다이어그램.

[Design Characteristics]
• 그레이 + 블루 운영 배색
• QSC 체크리스트 레이아웃
• 운영 프로세스 플로우차트
• 위반 등급 컬러 코딩
• 개선 목표 KPI 카드

[Layout Guide]
- Title Slide : 그레이 배경 + 매장 운영 이미지 + 블루 공식 제목
- Spec Slide : QSC 평가 항목 체크리스트 카드
- Comparison Slide : 우수 가맹점 vs 개선 가맹점 운영 지표 비교
- CTA Slide : 블루 버튼 + 교육 이수·점검 일정 안내 CTA
- Tone : Standardized / Clear / Operational
- Slide count : 7 pages
- Font size contrast : 제목 42pt 컨덴스드 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 65단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '트렌디 F&B 런칭',
    type: 'Trendy F&B Brand Launch',
    colors: ['#fff0f5', '#e91e63', '#ff9800'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.08), rgba(255,152,0,0.06))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : F&B 프랜차이즈 신규 브랜드 런칭 마케팅 전문가
Industry : 프랜차이즈
Type : 트렌디 F&B 런칭 — MZ 타겟 식음료 프랜차이즈 신규 브랜드 발표 자료

[Color Guide]
Background : #fff0f5 (소프트 핑크 화이트)
Text Color : #2a0a18 (딥 로즈 블랙) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (트렌디 핑크) / #ff9800 (식욕 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
인스타그래머블하고 트렌디한 F&B 프랜차이즈 신규 브랜드 런칭 톤. 제품 경쟁력·인테리어 컨셉·타겟 고객·가맹 수익 모델을 MZ 감성으로 소개. 먹기 전에 찍고 싶은 브랜드.

[Image Principles]
트렌디한 음식·음료 SNS 감성 이미지. 핑크+오렌지 식욕 배색. 인테리어 렌더링. 제품 플랫레이 사진.

[Design Characteristics]
• 소프트 핑크 + 오렌지 F&B 배색
• 제품 쇼케이스 그리드 레이아웃
• SNS 바이럴 전략 카드
• 인테리어 컨셉 이미지
• 타겟 고객 페르소나 카드

[Layout Guide]
- Title Slide : 핑크 배경 + 시그니처 메뉴 이미지 + 핑크 헤드라인
- Spec Slide : 브랜드 런칭 카드 (메뉴·가격·인테리어·타겟)
- Comparison Slide : 경쟁 F&B 브랜드 포지셔닝 비교 매트릭스
- CTA Slide : 핑크 버튼 + 가맹 상담 신청 CTA
- Tone : Trendy / Appetizing / Social-first
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '해외 진출 글로벌',
    type: 'Global Franchise Expansion',
    colors: ['#001233', '#4488ff', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(68,136,255,0.09), rgba(255,214,0,0.06))',
    numBg: 'rgba(68,136,255,0.12)', numColor: '#2266cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프랜차이즈 해외 진출·마스터 프랜차이즈 전략 전문가
Industry : 프랜차이즈
Type : 해외 진출 글로벌 — K-브랜드 해외 마스터 프랜차이즈 확장 전략 자료

[Color Guide]
Background : #001233 (글로벌 네이비)
Text Color : #ffffff / #aabcce (아이스 그레이)
Accent : #4488ff (글로벌 블루) / #ffd600 (프레스티지 골드)
Font : Bebas Neue (제목) / Noto Sans KR (본문)

[Tone & Manner]
K-브랜드의 글로벌 경쟁력을 앞세운 해외 마스터 프랜차이즈 확장 전략 발표. 동남아·중동·북미 시장 진출 기회와 K-콘텐츠 한류 효과를 활용. 세계가 K-브랜드를 원한다.

[Image Principles]
글로벌 해외 브랜드 매장 이미지. 네이비+골드 글로벌 배색. 세계 진출 지도. 해외 시장 성장 데이터.

[Design Characteristics]
• 딥 네이비 + 골드 글로벌 배색
• 세계 진출 현황 지도
• 해외 시장별 성장 차트
• 마스터 프랜차이즈 계약 플로우
• K-브랜드 경쟁력 강조

[Layout Guide]
- Title Slide : 네이비 배경 + 해외 매장 이미지 + 골드 글로벌 헤드라인
- Spec Slide : 진출 국가별 성과 카드 (동남아·중동·북미·유럽)
- Comparison Slide : 국내 브랜드 vs 글로벌 확장 후 매출 성장 비교
- CTA Slide : 골드 버튼 + 마스터 프랜차이즈 문의 CTA
- Tone : Global / Ambitious / Brand-proud
- Slide count : 7 pages
- Font size contrast : 제목 52pt 볼드 / 소제목 22pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '가맹점주 케어 시스템',
    type: 'Franchisee Care Support',
    colors: ['#e8f5e9', '#2e7d32', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(21,101,192,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프랜차이즈 가맹점주 지원·상생 경영 발표 전문가
Industry : 프랜차이즈
Type : 가맹점주 케어 시스템 — 본사-가맹점 상생 지원 체계 소개 자료

[Color Guide]
Background : #e8f5e9 (상생 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (상생 그린) / #1565c0 (지원 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
가맹점주가 경영에만 집중할 수 있도록 본사가 모든 것을 지원한다는 상생 파트너십 톤. 교육·마케팅·물류·IT 지원 체계를 가맹점주에게 안심과 신뢰로 전달.

[Image Principles]
본사-가맹점 협력 이미지. 그린+블루 상생 배색. 지원 체계 플로우. 교육 프로그램 사진.

[Design Characteristics]
• 그린 + 블루 상생 배색
• 지원 서비스 체계 플로우
• 교육 프로그램 카드
• 가맹점주 만족도 배지
• 상생 성과 수치 강조

[Layout Guide]
- Title Slide : 그린 배경 + 지원 이미지 + 그린 헤드라인
- Spec Slide : 가맹 지원 패키지 카드 (교육·마케팅·물류·IT·금융)
- Comparison Slide : 지원 전·후 가맹점 매출·만족도 변화 비교
- CTA Slide : 그린 버튼 + 가맹 상담·지원 신청 CTA
- Tone : Supportive / Partnership / Trustworthy
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '프랜차이즈 ESG 상생',
    type: 'Franchise ESG Co-prosperity',
    colors: ['#f5f5f7', '#1d1d1f', '#2e7d32'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프랜차이즈 ESG 경영·공정 거래 보고 전문가
Industry : 프랜차이즈
Type : 프랜차이즈 ESG 상생 — 공정 거래·소상공인 상생·환경 경영 보고 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #2e7d32 (ESG 그린) / #0071e3 (공정 블루)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
공정거래위원회·소비자·가맹점주 모두에게 신뢰를 주는 프랜차이즈 ESG 경영 보고 톤. 가맹 불공정 거래 개선·친환경 포장·지역사회 기여를 투명하게 공시.

[Image Principles]
공정 거래·상생 이미지. 그린+블루 ESG 배색. 성과 차트. 환경 캠페인 사진.

[Design Characteristics]
• 화이트 + ESG 그린 배색
• 공정 거래 지표 카드
• ESG 성과 KPI 대시보드
• 상생 협력 수치 강조
• 지속가능 인증 배지

[Layout Guide]
- Title Slide : 화이트 + 상생 이미지 + 그린 ESG 공식 제목
- Spec Slide : ESG 성과 KPI 카드 (가맹 공정성·환경·사회 기여)
- Comparison Slide : 전년 vs 당년 ESG 지표 개선 비교 차트
- CTA Slide : 그린 버튼 + 공정 거래·상생 협력 문의 CTA
- Tone : Fair / Transparent / Sustainable
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 보험 전용 7개 디자인 프롬프트 ─────────────────────────
const INSURANCE_PROMPTS = [
  {
    name: '생명보험 신뢰',
    type: 'Life Insurance Trust',
    colors: ['#ffffff', '#003d82', '#34c759'],
    cardBg: 'linear-gradient(135deg, rgba(0,61,130,0.08), rgba(52,199,89,0.06))',
    numBg: 'rgba(0,61,130,0.10)', numColor: '#003d82',
    prompt: `[NotebookLM Slide Design Guide]

Role : 생명보험 상품 설명·가입 설득 슬라이드 전문가
Industry : 보험
Type : 생명보험 신뢰 — 고객 신뢰를 최우선으로 한 생명보험 소개 자료

[Color Guide]
Background : #ffffff / #f0f6ff (라이트 블루 틴트)
Text Color : #0a1628 (딥 네이비) / #3d5a8a (블루 그레이)
Accent : #003d82 (생보 네이비) / #34c759 (안심 그린)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
가족의 미래를 지키는 생명보험의 가치를 진정성 있게 전달. 삼성생명·한화생명 수준의 신뢰와 안정감. 복잡한 보험 약관을 쉽고 명확하게 시각화. 사랑하는 사람을 위한 약속.

[Image Principles]
가족 행복 라이프스타일 이미지. 블루+그린 안심 배색. 보장 범위 인포그래픽. 보험료 비교 차트.

[Design Characteristics]
• 화이트 + 네이비 신뢰 배색
• 보장 범위 시각화 다이어그램
• 가족 구성원별 케어 아이콘
• 보험료 시뮬레이션 카드
• 청구·지급 프로세스 플로우

[Layout Guide]
- Title Slide : 화이트 + 가족 이미지 + 네이비 헤드라인
- Spec Slide : 보장 항목 카드 (사망·장해·진단·간병 보장)
- Comparison Slide : 연령별·상품별 보험료·보장금액 비교
- CTA Slide : 블루 버튼 + 무료 설계 상담 신청 CTA
- Tone : Trustworthy / Caring / Protective
- Slide count : 7 pages
- Font size contrast : 제목 42pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '건강보험 케어플랜',
    type: 'Health Insurance Care Plan',
    colors: ['#e8f5e9', '#2e7d32', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.09), rgba(21,101,192,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 실손·건강보험 상품 설명 슬라이드 전문가
Industry : 보험
Type : 건강보험 케어플랜 — 실손·암·건강 보험 케어 플랜 소개 자료

[Color Guide]
Background : #e8f5e9 (헬스 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (헬스 그린) / #1565c0 (케어 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
건강한 삶을 지키는 든든한 방패 같은 건강보험 톤. 실손·3대 질병·간병보험을 건강 관리 솔루션으로 포지셔닝. 의료비 걱정 없이 치료에 집중할 수 있도록.

[Image Principles]
건강 케어 라이프스타일 이미지. 그린+블루 안심 배색. 의료비 절감 인포그래픽. 보장 범위 다이어그램.

[Design Characteristics]
• 그린 + 블루 헬스케어 배색
• 보장 범위 시각화
• 연간 의료비 절감 시뮬레이션
• 주요 질병 보장 아이콘 카드
• 청구 간소화 프로세스 안내

[Layout Guide]
- Title Slide : 그린 배경 + 헬스 이미지 + 그린 헤드라인
- Spec Slide : 건강보험 보장 카드 (실손·암·뇌졸중·심장·간병)
- Comparison Slide : 보험 미가입 vs 건강보험 가입 의료비 부담 비교
- CTA Slide : 그린 버튼 + 건강 설계 상담 신청 CTA
- Tone : Caring / Preventive / Reassuring
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '자동차보험 다이렉트',
    type: 'Auto Insurance Direct',
    colors: ['#f0f4f8', '#1a3a6c', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, rgba(26,58,108,0.08), rgba(255,107,0,0.06))',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 자동차보험 다이렉트 가입 마케팅 전문가
Industry : 보험
Type : 자동차보험 다이렉트 — 온라인 다이렉트 자동차보험 가격 경쟁력 자료

[Color Guide]
Background : #f0f4f8 (쿨 라이트 블루)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (미디엄 블루)
Accent : #1a3a6c (오토 블루) / #ff6b00 (다이렉트 오렌지)
Font : Barlow (제목) / Noto Sans KR (본문)

[Tone & Manner]
설계사 없이 온라인으로 저렴하게 가입하는 다이렉트 자동차보험의 가격 경쟁력 강조. 보험료 비교·특약 선택·간편 청구를 직관적으로 전달. 더 싸고, 더 빠르고, 더 쉽게.

[Image Principles]
자동차·드라이빙 이미지. 블루+오렌지 다이나믹 배색. 보험료 비교 인포그래픽. 온라인 가입 UX 화면.

[Design Characteristics]
• 쿨 블루 + 오렌지 다이렉트 배색
• 보험료 절감 수치 대형 강조
• 특약 선택 카드 UI
• 온라인 가입 단계 플로우
• 사고 신청 간소화 안내

[Layout Guide]
- Title Slide : 블루 배경 + 자동차 이미지 + 오렌지 절감 수치 헤드라인
- Spec Slide : 보장 특약 선택 카드 (대인·대물·자차·운전자)
- Comparison Slide : 설계사 vs 다이렉트 보험료·절감액 비교
- CTA Slide : 오렌지 버튼 + 보험료 즉시 조회 CTA
- Tone : Economical / Fast / Transparent
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 핵심 절감액 72pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '기업보험 리스크매니지먼트',
    type: 'Corporate Risk Management',
    colors: ['#f5f5f7', '#37474f', '#0071e3'],
    cardBg: 'linear-gradient(135deg, rgba(0,113,227,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,113,227,0.10)', numColor: '#0071e3',
    prompt: `[NotebookLM Slide Design Guide]

Role : 기업보험·단체보험·배상책임 리스크 관리 전문가
Industry : 보험
Type : 기업보험 리스크매니지먼트 — 기업 리스크 진단 및 보험 솔루션 제안 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #37474f (딥 슬레이트) / #0071e3 (솔루션 블루)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
기업의 리스크를 분석하고 최적의 보험 포트폴리오를 설계하는 전문 컨설팅 톤. CFO·위험관리담당에게 어필하는 B2B 비즈니스 자료. 리스크를 예측하고 대비한다.

[Image Principles]
기업 리스크 관리 이미지. 그레이+블루 전문 배색. 리스크 매트릭스 다이어그램. 보험 포트폴리오 차트.

[Design Characteristics]
• 그레이 + 블루 B2B 배색
• 리스크 매트릭스 시각화
• 기업 보험 포트폴리오 구성 카드
• 손실 절감 수치 강조
• 전담 RM 안내 카드

[Layout Guide]
- Title Slide : 그레이 + 기업 이미지 + 블루 리스크 헤드라인
- Spec Slide : 기업 리스크 매트릭스 (확률·영향도 사분면)
- Comparison Slide : 업종별 핵심 리스크·보험 솔루션 매핑 비교
- CTA Slide : 블루 버튼 + 기업 리스크 진단 상담 CTA
- Tone : Expert / Protective / Business-focused
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '연금·노후 설계',
    type: 'Pension Retirement Planning',
    colors: ['#fff8e1', '#8d6e63', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(141,110,99,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(141,110,99,0.10)', numColor: '#6d4c41',
    prompt: `[NotebookLM Slide Design Guide]

Role : 연금보험·노후 재무 설계 마케팅 전문가
Industry : 보험
Type : 연금·노후 설계 — 연금보험·IRP 기반 노후 재무 설계 자료

[Color Guide]
Background : #fff8e1 (따뜻한 크림)
Text Color : #2a1000 (딥 브라운) / #6a4030 (브라운)
Accent : #8d6e63 (웜 브라운) / #1565c0 (신뢰 블루)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
은퇴 후 경제적 자유를 꿈꾸는 40-60대를 위한 따뜻하고 현실적인 노후 설계 톤. 연금보험·IRP·국민연금 연계 최적 포트폴리오 제안. 지금 준비해야 여유로운 노후가 온다.

[Image Principles]
행복한 노후 라이프스타일 이미지. 따뜻한 크림 배색. 노후 자금 시뮬레이션 차트. 연금 포트폴리오 인포그래픽.

[Design Characteristics]
• 따뜻한 크림 + 브라운 배색
• 노후 자금 시뮬레이션 차트
• 연금 수령 타임라인 카드
• 세액공제 혜택 강조 박스
• 노후 생활비 인포그래픽

[Layout Guide]
- Title Slide : 크림 배경 + 노후 행복 이미지 + 세리프 헤드라인
- Spec Slide : 연금 포트폴리오 카드 (국민연금·퇴직연금·개인연금)
- Comparison Slide : 지금 시작 vs 10년 후 시작 노후 자금 비교
- CTA Slide : 블루 버튼 + 노후 설계 무료 상담 CTA
- Tone : Warm / Reassuring / Long-term
- Slide count : 7 pages
- Font size contrast : 제목 44pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '인슈어테크 디지털',
    type: 'InsurTech Digital',
    colors: ['#e8f0fe', '#6200ea', '#00c896'],
    cardBg: 'linear-gradient(135deg, rgba(98,0,234,0.08), rgba(0,200,150,0.06))',
    numBg: 'rgba(98,0,234,0.10)', numColor: '#6200ea',
    prompt: `[NotebookLM Slide Design Guide]

Role : 디지털 보험·인슈어테크 혁신 발표 전문가
Industry : 보험
Type : 인슈어테크 디지털 — AI·빅데이터 기반 디지털 보험 혁신 자료

[Color Guide]
Background : #e8f0fe (라이트 인디고)
Text Color : #0a0a2e (딥 인디고 블랙) / #3a3a7a (미디엄 인디고)
Accent : #6200ea (인슈어테크 퍼플) / #00c896 (핀테크 민트)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI 언더라이팅·빅데이터 보험료 산정·챗봇 청구 처리 등 보험 산업 디지털 전환 비전. 기존 보험 산업의 비효율을 기술로 혁신하는 스타트업 에너지. 보험이 스마트해진다.

[Image Principles]
디지털 보험 앱 UI 이미지. 퍼플+민트 배색. AI 언더라이팅 다이어그램. 데이터 플로우 시각화.

[Design Characteristics]
• 라이트 인디고 + 퍼플·민트 배색
• 앱 UI 스크린 모형
• AI 언더라이팅 플로우
• 디지털 청구 프로세스 카드
• 인슈어테크 혁신 타임라인

[Layout Guide]
- Title Slide : 라이트 인디고 + 앱 UI 모형 + 퍼플 헤드라인
- Spec Slide : 인슈어테크 기능 카드 (AI 심사·즉시 청구·맞춤 설계)
- Comparison Slide : 전통 보험 프로세스 vs 디지털 보험 비교
- CTA Slide : 퍼플 버튼 + 서비스 체험·파트너십 CTA
- Tone : Innovative / Efficient / Data-driven
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '보험사 ESG 리포트',
    type: 'Insurance ESG Annual Report',
    colors: ['#f5f5f7', '#1d1d1f', '#2e7d32'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 보험사 ESG 경영·사회적 책임 보고 전문가
Industry : 보험
Type : 보험사 ESG 리포트 — 보험사 ESG 경영 성과 및 지속가능 보고 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #2e7d32 (ESG 그린) / #0071e3 (책임 블루)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
보험사의 ESG 경영 성과·사회공헌·탄소중립 전략을 주주·감독 기관에 투명하게 보고. 장수 리스크·기후 리스크·사회 안전망으로서 보험의 공익적 가치 강조.

[Image Principles]
ESG 경영 이미지. 그린+블루 배색. ESG 성과 차트. 사회공헌 활동 사진.

[Design Characteristics]
• 화이트 + ESG 그린 배색
• ESG 3대 영역 카드
• 탄소중립 로드맵 타임라인
• 사회공헌 수치 강조
• 지속가능 인증 배지

[Layout Guide]
- Title Slide : 화이트 + ESG 이미지 + 그린 공식 제목
- Spec Slide : ESG 핵심 KPI 카드 (탄소·사회·지배구조 지표)
- Comparison Slide : 전년 vs 당년 ESG 성과 개선 비교 차트
- CTA Slide : 그린 버튼 + ESG 경영 협력·투자 문의 CTA
- Tone : Responsible / Transparent / Sustainable
- Slide count : 7 pages
- Font size contrast : 제목 38pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 65단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 핀테크 전용 7개 디자인 프롬프트 ─────────────────────────
const FINTECH_PROMPTS = [
  {
    name: '핀테크 런칭 키노트',
    type: 'Fintech Product Launch',
    colors: ['#0d0d1a', '#6c63ff', '#00f5c4'],
    cardBg: 'linear-gradient(135deg, rgba(108,99,255,0.09), rgba(0,245,196,0.06))',
    numBg: 'rgba(108,99,255,0.12)', numColor: '#6c63ff',
    prompt: `[NotebookLM Slide Design Guide]

Role : 핀테크 스타트업 신규 서비스 런칭 키노트 전문가
Industry : 핀테크
Type : 핀테크 런칭 키노트 — 앱·서비스 런칭 발표용 테크 키노트 자료

[Color Guide]
Background : #0d0d1a (핀테크 다크)
Text Color : #e8e0ff (라이트 라벤더) / #a090cc (미디엄 퍼플)
Accent : #6c63ff (핀테크 인디고) / #00f5c4 (네오 민트)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
기존 금융의 불편함을 혁파하는 핀테크 스타트업 런칭 에너지. 토스·카카오페이·뱅크샐러드 감성. UX 혁신·수수료 제로·AI 개인화 금융을 임팩트 있게 발표.

[Image Principles]
앱 런칭 UI 이미지. 다크 배경 + 퍼플·민트 네온. 사용자 경험 플로우. 핀테크 아이콘 세트.

[Design Characteristics]
• 다크 배경 + 네오 민트·인디고 포인트
• 앱 스크린 런칭 모형
• 서비스 기능 아이콘 카드
• 사용자 여정 플로우차트
• 성장 지표 대형 강조

[Layout Guide]
- Title Slide : 다크 배경 + 앱 UI 모형 + 인디고 글로우 헤드라인
- Spec Slide : 핵심 기능 카드 그리드 (민트 포인트)
- Comparison Slide : 기존 금융 서비스 vs 당사 핀테크 UX 비교
- CTA Slide : 인디고 버튼 + 앱 다운로드·베타 신청 CTA
- Tone : Disruptive / Bold / User-first
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 22pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '투자 유치 IR 덱',
    type: 'Startup IR Pitch Deck',
    colors: ['#ffffff', '#2d2d2d', '#6c63ff'],
    cardBg: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(255,255,255,0.8))',
    numBg: 'rgba(108,99,255,0.10)', numColor: '#6c63ff',
    prompt: `[NotebookLM Slide Design Guide]

Role : 핀테크 스타트업 시리즈 A/B 투자 유치 IR 전문가
Industry : 핀테크
Type : 투자 유치 IR 덱 — VC·기관투자자 대상 핀테크 스타트업 투자 설명 자료

[Color Guide]
Background : #ffffff / #f8f8ff (라이트 인디고 틴트)
Text Color : #1a1a2e (딥 네이비) / #4a4a6a (미디엄 퍼플 그레이)
Accent : #6c63ff (스타트업 인디고) / #2d2d2d (딥 블랙)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
Y Combinator·500 Startups 피치덱 감성. 문제 정의→솔루션→시장 규모→팀→재무 로드맵을 간결하고 임팩트 있게 전달. 투자자의 다음 질문을 만들어내는 피치덱.

[Image Principles]
제품 스크린샷 + 사용자 데이터. 화이트 배경 + 인디고 포인트. TAM/SAM/SOM 다이어그램. 팀 프로필 사진.

[Design Characteristics]
• 화이트 + 인디고 임팩트 배색
• 피치덱 구조 레이아웃 (문제→솔루션→시장)
• 핵심 지표 대형 강조
• 팀 프로필 카드
• 성장 트랙션 차트

[Layout Guide]
- Title Slide : 화이트 + 로고 + 인디고 한 줄 비전 헤드라인
- Spec Slide : 핵심 KPI 트랙션 카드 (MAU·거래액·수익·NPS)
- Comparison Slide : 시장 내 경쟁사 포지셔닝 매트릭스
- CTA Slide : 인디고 버튼 + 투자 미팅 신청 CTA
- Tone : Compelling / Data-backed / Visionary
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 핵심 수치 72pt / 본문 14pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '오픈뱅킹 API 플랫폼',
    type: 'Open Banking API Platform',
    colors: ['#e8f0fe', '#1a73e8', '#ff6b35'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(255,107,53,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 오픈뱅킹·API 금융 플랫폼 B2B 발표 전문가
Industry : 핀테크
Type : 오픈뱅킹 API 플랫폼 — 금융 API·오픈뱅킹·BaaS 플랫폼 B2B 자료

[Color Guide]
Background : #e8f0fe (API 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (API 블루) / #ff6b35 (인티그레이션 오렌지)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
금융사·핀테크·이커머스가 빠르게 금융 서비스를 구축할 수 있는 오픈뱅킹 API 플랫폼. 개발자 친화적이면서 비즈니스 임팩트를 강조하는 B2B SaaS 감성 발표 자료.

[Image Principles]
API 연동 다이어그램. 블루+오렌지 배색. 개발자 콘솔 UI 이미지. 파트너사 로고 그리드.

[Design Characteristics]
• 라이트 블루 + 오렌지 API 배색
• API 연동 아키텍처 다이어그램
• 파트너사 로고 그리드
• 개발 기간·비용 절감 강조
• 보안 인증 배지

[Layout Guide]
- Title Slide : 블루 배경 + API 다이어그램 + 블루 헤드라인
- Spec Slide : API 기능 카드 (계좌·결제·대출·마이데이터)
- Comparison Slide : 직접 개발 vs API 연동 시간·비용 비교
- CTA Slide : 블루 버튼 + 파트너십·API 체험 신청 CTA
- Tone : Technical / Efficient / Partnership-focused
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '블록체인 디파이',
    type: 'Blockchain DeFi',
    colors: ['#0a0618', '#f7931a', '#627eea'],
    cardBg: 'linear-gradient(135deg, rgba(247,147,26,0.09), rgba(98,126,234,0.07))',
    numBg: 'rgba(247,147,26,0.12)', numColor: '#c06c00',
    prompt: `[NotebookLM Slide Design Guide]

Role : 블록체인·디파이·가상자산 금융 발표 전문가
Industry : 핀테크
Type : 블록체인 디파이 — 탈중앙화 금융·웹3 기반 핀테크 혁신 자료

[Color Guide]
Background : #0a0618 (블록체인 다크)
Text Color : #f0e8ff / #a898cc (미디엄 퍼플)
Accent : #f7931a (비트코인 오렌지) / #627eea (이더리움 블루)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
탈중앙화 금융(DeFi)·NFT·스마트 컨트랙트 혁신을 선도하는 블록체인 핀테크 비전. 기존 금융의 게이트키퍼 없는 자유로운 자산 이동 가능성을 기술 청중에게 어필.

[Image Principles]
블록체인 노드 네트워크 시각화. 다크 배경 + 오렌지·블루 포인트. DeFi 프로토콜 다이어그램. 암호화폐 아이콘.

[Design Characteristics]
• 블록체인 다크 + 비트코인 오렌지 배색
• 노드 네트워크 배경 패턴
• DeFi 프로토콜 다이어그램
• TVL·APY 수치 HUD 카드
• 스마트 컨트랙트 플로우

[Layout Guide]
- Title Slide : 다크 배경 + 블록체인 네트워크 이미지 + 오렌지 헤드라인
- Spec Slide : DeFi 프로토콜 기능 카드 (스왑·스테이킹·대출·유동성)
- Comparison Slide : 전통 금융 vs DeFi 수익·접근성 비교
- CTA Slide : 오렌지 버튼 + 파트너십·투자 문의 CTA
- Tone : Decentralized / Innovative / Trustless
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'AI 신용평가 솔루션',
    type: 'AI Credit Scoring Solution',
    colors: ['#f0f4f8', '#0d47a1', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(13,71,161,0.08), rgba(124,58,237,0.06))',
    numBg: 'rgba(13,71,161,0.10)', numColor: '#0d47a1',
    prompt: `[NotebookLM Slide Design Guide]

Role : AI 신용평가·대안신용평가 핀테크 솔루션 전문가
Industry : 핀테크
Type : AI 신용평가 솔루션 — 머신러닝 기반 대안신용평가 B2B 솔루션 자료

[Color Guide]
Background : #f0f4f8 (클린 라이트 블루)
Text Color : #0a1a2e (딥 네이비) / #2a4a7a (미디엄 블루)
Accent : #0d47a1 (솔루션 블루) / #7c3aed (AI 퍼플)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
금융 이력 부족(씬파일러)도 AI로 정확하게 신용을 평가하는 대안 신용평가 솔루션. 금융기관·핀테크 B2B 파트너를 위한 정확도·적용 사례·ROI 강조 자료.

[Image Principles]
AI 데이터 분석 이미지. 블루+퍼플 AI 배색. 신용평가 정확도 차트. B2B 파트너십 다이어그램.

[Design Characteristics]
• 라이트 블루 + AI 퍼플 배색
• AI 모델 정확도 시각화
• 대안 데이터 소스 다이어그램
• B2B 적용 사례 카드
• 승인율·부실률 개선 수치 강조

[Layout Guide]
- Title Slide : 라이트 블루 + AI 분석 이미지 + 블루 헤드라인
- Spec Slide : AI 신용평가 성능 지표 카드 (정확도·AUC·승인율)
- Comparison Slide : 기존 신용평가 vs AI 대안 평가 부실률 비교
- CTA Slide : 블루 버튼 + B2B 파트너십 상담 CTA
- Tone : Precise / Data-powered / Inclusive
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 13pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '간편결제 소비자',
    type: 'Mobile Payment Consumer',
    colors: ['#fce4ec', '#e91e63', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(233,30,99,0.07), rgba(252,228,236,0.8))',
    numBg: 'rgba(233,30,99,0.10)', numColor: '#c2185b',
    prompt: `[NotebookLM Slide Design Guide]

Role : 간편결제·송금 핀테크 소비자 마케팅 전문가
Industry : 핀테크
Type : 간편결제 소비자 — 간편결제·송금·용돈 관리 소비자 B2C 마케팅 자료

[Color Guide]
Background : #fce4ec (소프트 핑크)
Text Color : #2a0a18 (딥 로즈 블랙) / #6a2040 (미디엄 로즈)
Accent : #e91e63 (페이 핑크) / #1565c0 (신뢰 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
터치 한 번으로 결제·송금이 완료되는 간편 핀테크 서비스의 편리함과 세련됨. 20-30대 디지털 네이티브를 겨냥한 라이프스타일 금융 서비스. 지갑 없이도 사는 세상.

[Image Principles]
스마트폰 결제 라이프스타일. 핑크+블루 생동감 배색. 앱 UI 스크린. 결제 플로우 일러스트.

[Design Characteristics]
• 소프트 핑크 + 블루 생동감 배색
• 앱 UI 스크린 모형
• 결제 플로우 단계 카드
• 혜택·캐시백 강조 배지
• 사용자 리뷰 별점 카드

[Layout Guide]
- Title Slide : 핑크 배경 + 앱 결제 이미지 + 핑크 헤드라인
- Spec Slide : 서비스 기능 카드 (결제·송금·관리·혜택)
- Comparison Slide : 현금·카드 vs 간편결제 편의성·혜택 비교
- CTA Slide : 핑크 버튼 + 앱 다운로드 CTA
- Tone : Convenient / Lifestyle / Rewarding
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '자산관리 로보어드바이저',
    type: 'Robo-Advisor Wealth Tech',
    colors: ['#e8f4fd', '#1565c0', '#00c896'],
    cardBg: 'linear-gradient(135deg, rgba(21,101,192,0.08), rgba(0,200,150,0.06))',
    numBg: 'rgba(21,101,192,0.10)', numColor: '#1565c0',
    prompt: `[NotebookLM Slide Design Guide]

Role : 로보어드바이저·AI 자산관리 서비스 마케팅 전문가
Industry : 핀테크
Type : 자산관리 로보어드바이저 — AI 기반 자동 포트폴리오 관리 서비스 자료

[Color Guide]
Background : #e8f4fd (웰스테크 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1565c0 (웰스 블루) / #00c896 (AI 민트)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
PB 없이도 AI가 나만의 포트폴리오를 자동으로 최적화해주는 민주화된 자산관리 톤. 저비용·자동 리밸런싱·세금 최적화를 일반 투자자에게 어필. AI가 내 PB가 된다.

[Image Principles]
앱 포트폴리오 UI 이미지. 블루+민트 웰스테크 배색. 자동 리밸런싱 다이어그램. 수익률 시뮬레이션 차트.

[Design Characteristics]
• 라이트 블루 + 민트 배색
• 포트폴리오 배분 차트
• AI 리밸런싱 플로우
• 비용 비교 인포그래픽
• 장기 수익 시뮬레이션

[Layout Guide]
- Title Slide : 블루 배경 + 앱 포트폴리오 UI + 블루 헤드라인
- Spec Slide : AI 기능 카드 (자동 배분·리밸런싱·세금 최적화·리포트)
- Comparison Slide : 직접 투자 vs 로보어드바이저 수익·비용 비교
- CTA Slide : 민트 버튼 + 무료 투자 시작 CTA
- Tone : Automated / Accessible / Smart
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 학원 전용 7개 디자인 프롬프트 ─────────────────────────
const ACADEMY_PROMPTS = [
  {
    name: '합격 드라이브',
    type: 'Achievement Drive',
    colors: ['#fff8f0', '#ff6b00', '#1a3a8a'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,0,0.08), rgba(26,58,138,0.06))',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 입시·수능·내신 학원 입학 설명회 슬라이드 전문가
Industry : 학원
Type : 합격 드라이브 — 학부모·학생 입시 결과와 합격 성과를 전면에 내세운 설득 자료

[Color Guide]
Background : #fff8f0 (웜 크림)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #ff6b00 (열정 오렌지) / #1a3a8a (신뢰 블루)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
"우리 아이를 맡기면 합격시킨다"는 강렬한 성과 중심 톤. 합격률·상위권 배출 수·대입 실적을 숫자로 증명. 학부모의 불안을 데이터로 해소. 결과가 모든 것을 말한다.

[Image Principles]
합격 수험생 기쁨 이미지. 대형 합격 수치 강조. 오렌지 강조 포인트. 명문대 로고·입시 결과 차트.

[Design Characteristics]
• 오렌지 열정 포인트 + 블루 신뢰 배색
• 합격 수치 초대형 타이포그래피
• 연도별 실적 타임라인
• 합격 대학 로고 그리드
• 학부모 후기 인용 카드

[Layout Guide]
- Title Slide : 크림 배경 + 합격 이미지 + 오렌지 대형 수치 헤드라인
- Spec Slide : SKY·의대 합격 수 + 전년 대비 성장 실적 인포그래픽
- Comparison Slide : 입학 전 성적 vs 수료 후 성적 향상 비교 차트
- CTA Slide : 오렌지 버튼 + 무료 레벨테스트·입학 상담 예약 CTA
- Tone : Results-driven / Motivating / Credible
- Slide count : 7 pages
- Font size contrast : 제목 50pt 세리프 / 핵심 수치 80pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '에듀테크 이노베이션',
    type: 'EduTech Innovation',
    colors: ['#e8f0fe', '#1a73e8', '#00c896'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(0,200,150,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : AI·에듀테크 기반 학원 브랜딩 슬라이드 전문가
Industry : 학원
Type : 에듀테크 이노베이션 — AI·빅데이터 기반 맞춤 학습 시스템 자료

[Color Guide]
Background : #e8f0fe (라이트 블루)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (디지털 블루) / #00c896 (에듀 민트)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI·빅데이터·디지털 학습 플랫폼을 앞세운 미래지향 학원 이미지. 앱 기반 개인 맞춤 학습·실시간 성취도 분석을 학부모에게 어필. 기술이 만드는 공정한 교육.

[Image Principles]
태블릿·학습 앱 UI 이미지. 민트·블루 에듀 아이콘. 학습 데이터 대시보드. AI 추천 학습 경로 플로우.

[Design Characteristics]
• 라이트 블루 + 민트 배색
• 앱 UI 모형 레이아웃
• 학습 데이터 시각화
• AI 기능 아이콘 카드
• 학부모·학생 피드백 배지

[Layout Guide]
- Title Slide : 라이트 블루 + 앱 UI 모형 + 블루 헤드라인
- Spec Slide : AI 기능 카드 그리드 (진단·추천·분석·리포트)
- Comparison Slide : 일반 수업 vs AI 맞춤 학습 성취도 비교
- CTA Slide : 민트 버튼 + 무료 체험 신청 CTA
- Tone : Innovative / Data-driven / Modern
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '프리미엄 소수정예',
    type: 'Premium Small Group',
    colors: ['#0c0c0c', '#c9a227', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(201,162,39,0.08), rgba(12,12,12,0.05))',
    numBg: 'rgba(201,162,39,0.12)', numColor: '#9a7a10',
    prompt: `[NotebookLM Slide Design Guide]

Role : 프리미엄 소수정예·1:1 과외 학원 마케팅 전문가
Industry : 학원
Type : 프리미엄 소수정예 — VIP 개인 맞춤 교육 서비스의 럭셔리 감성 자료

[Color Guide]
Background : #0c0c0c (프리미엄 블랙)
Text Color : #f5f5f0 (크림 화이트) / #b0a898 (웜 그레이)
Accent : #c9a227 (프레스티지 골드) / #ffffff (화이트)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
소수 정예·1:1 맞춤 교육의 프리미엄 포지셔닝. 강사 학력·경력·전담 케어 시스템을 럭셔리 브랜드 감성으로 표현. 당신의 자녀는 특별한 교육을 받을 자격이 있다.

[Image Principles]
1:1 수업 프리미엄 스튜디오 이미지. 다크 배경 + 골드 포인트. 강사 프로필 카드. 명문대 출신 강사 레퍼런스.

[Design Characteristics]
• 다크 배경 + 챔페인 골드 포인트
• 세리프 폰트 고급 타이포그래피
• 강사 프로필 카드 (골드 테두리)
• 소수 정예 숫자 대형 강조
• 미니멀 여백 고급 레이아웃

[Layout Guide]
- Title Slide : 풀 블랙 + 프리미엄 수업 이미지 + 골드 세리프 헤드라인
- Spec Slide : 강사진 프로필 카드 (학력·경력·합격 실적)
- Comparison Slide : 일반 그룹 vs 소수정예 1:1 케어 서비스 비교
- CTA Slide : 골드 버튼 + 프리미엄 상담 예약 CTA
- Tone : Exclusive / Premium / Results-guaranteed
- Slide count : 7 pages
- Font size contrast : 제목 48pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 35단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '어학원 글로벌',
    type: 'Language Academy Global',
    colors: ['#e8f4fd', '#0057a8', '#ff9500'],
    cardBg: 'linear-gradient(135deg, rgba(0,87,168,0.08), rgba(255,149,0,0.06))',
    numBg: 'rgba(0,87,168,0.10)', numColor: '#0057a8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 영어·어학원 입학 설명회 슬라이드 전문가
Industry : 학원
Type : 어학원 글로벌 — 영어·외국어 학원 글로벌 감성 브랜딩 자료

[Color Guide]
Background : #e8f4fd (스카이 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #0057a8 (글로벌 블루) / #ff9500 (에너지 오렌지)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
글로벌 세상을 향한 자신감을 키워주는 어학원 톤. 원어민 강사·해외 연수 연계·공인 시험 대비를 글로벌 이미지로 포지셔닝. 영어가 곧 기회다.

[Image Principles]
세계 지도·국기 그래픽. 다국적 수업 이미지. 블루+오렌지 글로벌 배색. 시험 점수 향상 차트.

[Design Characteristics]
• 스카이 블루 + 오렌지 배색
• 세계 지도 배경 요소
• 공인 시험 점수 인포그래픽
• 국가·도시 아이콘 카드
• 원어민 강사 프로필

[Layout Guide]
- Title Slide : 블루 배경 + 글로벌 이미지 + 오렌지 포인트 제목
- Spec Slide : 시험별 점수 향상 차트 (TOEIC·IELTS·TOEFL)
- Comparison Slide : 입학 전 vs 수료 후 점수 비교
- CTA Slide : 블루 버튼 + 레벨 테스트 무료 신청 CTA
- Tone : Global / Inspiring / Achievement-focused
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '예체능 크리에이티브',
    type: 'Arts Sports Creative',
    colors: ['#fdf0ff', '#9c27b0', '#ff4081'],
    cardBg: 'linear-gradient(135deg, rgba(156,39,176,0.08), rgba(255,64,129,0.06))',
    numBg: 'rgba(156,39,176,0.10)', numColor: '#7b1fa2',
    prompt: `[NotebookLM Slide Design Guide]

Role : 예술·음악·미술·체육 학원 브랜딩 슬라이드 전문가
Industry : 학원
Type : 예체능 크리에이티브 — 예술적 감수성과 창의성을 담은 예체능 학원 자료

[Color Guide]
Background : #fdf0ff (소프트 라벤더 화이트)
Text Color : #1a001a (딥 퍼플 블랙) / #5a2a6a (미디엄 퍼플)
Accent : #9c27b0 (크리에이티브 퍼플) / #ff4081 (핫 핑크)
Font : DM Serif Display (제목) / Noto Sans KR (본문)

[Tone & Manner]
아이의 창의성·예술적 재능을 꽃피우는 감성적 톤. 입시 예체능·취미 교양 모두를 아우르는 다채롭고 생동감 있는 자료. 재능은 발견하는 것이다.

[Image Principles]
아이들 그림·연주·운동 생동감 이미지. 컬러풀 아트 배경. 퍼플+핑크 비비드 배색. 수상 실적·공연 사진.

[Design Characteristics]
• 라벤더 + 퍼플·핑크 배색
• 컬러풀 창작물 갤러리 레이아웃
• 수상 실적 배지 시스템
• 커리큘럼 시각화 카드
• 감성적 세리프 타이포

[Layout Guide]
- Title Slide : 라벤더 배경 + 아이 활동 이미지 + 퍼플 세리프 제목
- Spec Slide : 프로그램 카드 (음악·미술·발레·체육 카테고리)
- Comparison Slide : 연령별·레벨별 커리큘럼 로드맵
- CTA Slide : 퍼플 버튼 + 체험 수업 무료 신청 CTA
- Tone : Creative / Inspiring / Expressive
- Slide count : 7 pages
- Font size contrast : 제목 46pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '코딩·STEM 퓨처',
    type: 'Coding STEM Future',
    colors: ['#0d1117', '#00ff88', '#4d94ff'],
    cardBg: 'linear-gradient(135deg, rgba(0,255,136,0.07), rgba(77,148,255,0.06))',
    numBg: 'rgba(0,255,136,0.10)', numColor: '#00cc66',
    prompt: `[NotebookLM Slide Design Guide]

Role : 코딩·SW·STEM 교육 학원 마케팅 전문가
Industry : 학원
Type : 코딩·STEM 퓨처 — 미래 인재를 키우는 코딩·SW 교육 발표 자료

[Color Guide]
Background : #0d1117 (코딩 다크)
Text Color : #e6edf3 / #8b949e (그레이)
Accent : #00ff88 (코딩 그린) / #4d94ff (스크린 블루)
Font : JetBrains Mono (코드) / Noto Sans KR (본문)

[Tone & Manner]
SW·AI 시대 미래 인재를 키우는 혁신 교육 톤. 코딩 기초부터 AI·로봇까지 단계별 STEM 교육을 자녀 미래 투자로 포지셔닝. 코드가 미래를 만든다.

[Image Principles]
어린이 코딩 수업 이미지. 다크 배경 코드 스크린. 그린·블루 네온 포인트. 로봇·드론 프로젝트 사진.

[Design Characteristics]
• 다크 배경 + 코딩 그린 네온
• 터미널 스타일 코드 블록
• 프로젝트 갤러리 레이아웃
• 레벨별 커리큘럼 로드맵
• 수상·공모전 실적 배지

[Layout Guide]
- Title Slide : 다크 배경 + 코드 패턴 + 그린 네온 헤드라인
- Spec Slide : 커리큘럼 레벨 로드맵 (스크래치→파이썬→AI)
- Comparison Slide : 학년별·레벨별 프로그램 비교
- CTA Slide : 그린 버튼 + 무료 체험 수업 신청 CTA
- Tone : Future-forward / Logical / Empowering
- Slide count : 7 pages
- Font size contrast : 제목 44pt 모노 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '학원 프랜차이즈 IR',
    type: 'Academy Franchise IR',
    colors: ['#f5f5f7', '#1d1d1f', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,0,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 교육 프랜차이즈 투자 유치·가맹 설명회 전문가
Industry : 학원
Type : 학원 프랜차이즈 IR — 교육 브랜드 가맹점 모집·투자 유치 발표 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #ff6b00 (액티브 오렌지) / #0071e3 (코퍼레이트 블루)
Font : Noto Sans KR (제목·본문, 웨이트 차등)

[Tone & Manner]
교육 브랜드 프랜차이즈의 수익성·성장성·지원 시스템을 예비 가맹점주와 투자자에게 설득하는 사업 중심 톤. 교육이 가장 확실한 투자다.

[Image Principles]
학원 매장·운영 이미지. 재무 성장 차트. 오렌지 포인트 강조. 가맹점 지도 인포그래픽.

[Design Characteristics]
• 화이트 + 오렌지 포인트 배색
• 재무 KPI 대시보드
• 가맹점 확장 지도 인포그래픽
• 수익 모델 시뮬레이션 카드
• 본사 지원 체계 플로우

[Layout Guide]
- Title Slide : 화이트 배경 + 브랜드 이미지 + 오렌지 IR 제목
- Spec Slide : 가맹점 평균 매출·수익률·투자 회수 기간 KPI
- Comparison Slide : 창업 방식별 (독립 vs 프랜차이즈) 비용·리스크 비교
- CTA Slide : 오렌지 버튼 + 가맹 상담 문의 CTA
- Tone : Business / Growth-driven / Reliable
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 유치원 전용 7개 디자인 프롬프트 ─────────────────────────
const KINDERGARTEN_PROMPTS = [
  {
    name: '무지개 킨더가든',
    type: 'Rainbow Kindergarten Joy',
    colors: ['#fffde7', '#ff9800', '#e91e63'],
    cardBg: 'linear-gradient(135deg, rgba(255,152,0,0.10), rgba(233,30,99,0.07))',
    numBg: 'rgba(255,152,0,0.14)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 유치원 입학 설명회·원아 모집 슬라이드 전문가
Industry : 유치원
Type : 무지개 킨더가든 — 밝고 따뜻한 무지개 에너지의 유치원 입학 설명회 자료

[Color Guide]
Background : #fffde7 (선샤인 크림)
Text Color : #2a1000 (딥 브라운) / #6a3000 (웜 브라운)
Accent : #ff9800 (선샤인 오렌지) / #e91e63 (장미 핑크) / #4caf50 (그린)
Font : Nunito (제목) / Noto Sans KR (본문)

[Tone & Manner]
아이의 첫 사회생활을 설레고 행복하게 만들어주는 밝고 에너지 넘치는 유치원 톤. 입학 설명회에서 학부모에게 안심·즐거움·신뢰를 동시에 전달. 첫 발걸음이 행복이 된다.

[Image Principles]
밝고 명랑한 어린이 놀이 이미지. 무지개 컬러 배색. 귀여운 플랫 일러스트 캐릭터. 유치원 활동 사진 콜라주.

[Design Characteristics]
• 무지개 컬러풀 밝은 배색
• 둥글고 귀여운 아이콘 세트
• 컬러 블록 섹션 레이아웃
• 활동 사진 콜라주 그리드
• 귀여운 캐릭터 포인트

[Layout Guide]
- Title Slide : 크림 배경 + 아이들 사진 + 무지개 컬러 대형 제목
- Spec Slide : 교육 프로그램 아이콘 카드 (놀이·미술·음악·체육·영어)
- Comparison Slide : 연령별 발달 프로그램 로드맵
- CTA Slide : 오렌지 버튼 + 원아 모집 신청 CTA
- Tone : Joyful / Warm / Child-centered
- Slide count : 7 pages
- Font size contrast : 제목 46pt 볼드 / 소제목 22pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '자연 숲 유치원',
    type: 'Nature Forest Kindergarten',
    colors: ['#f1f8e9', '#2e7d32', '#ff8f00'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.10), rgba(255,143,0,0.07))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 자연·생태 교육 중심 유치원 마케팅 슬라이드 전문가
Industry : 유치원
Type : 자연 숲 유치원 — 자연 놀이·생태 교육·숲 체험 중심 유치원 자료

[Color Guide]
Background : #f1f8e9 (내추럴 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (포레스트 그린) / #ff8f00 (가을 오렌지)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
자연 속에서 자라는 아이의 감성과 창의성을 강조. 미디어 없는 자연 놀이, 생태 교육, 텃밭·숲 체험의 가치를 환경 의식 높은 학부모에게 전달. 자연이 최고의 교실이다.

[Image Principles]
숲·자연 속 아이들 이미지. 내추럴 그린 배색. 수채화 식물 일러스트. 텃밭·동물 관찰 사진.

[Design Characteristics]
• 내추럴 그린 자연 배색
• 수채화 식물 배경 요소
• 계절 활동 타임라인 카드
• 유기농 인증 스타일 배지
• 부드러운 텍스처 배경

[Layout Guide]
- Title Slide : 그린 배경 + 숲 놀이 이미지 + 자연스러운 세리프 제목
- Spec Slide : 계절별 자연 체험 프로그램 카드
- Comparison Slide : 실내 위주 vs 자연 체험 교육 효과 비교
- CTA Slide : 그린 버튼 + 원아 모집 신청 CTA
- Tone : Natural / Sustainable / Wholesome
- Slide count : 7 pages
- Font size contrast : 제목 44pt 세리프 / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '몬테소리 철학',
    type: 'Montessori Philosophy',
    colors: ['#faf6f0', '#8d6e63', '#81c784'],
    cardBg: 'linear-gradient(135deg, rgba(141,110,99,0.08), rgba(129,199,132,0.07))',
    numBg: 'rgba(141,110,99,0.10)', numColor: '#6d4c41',
    prompt: `[NotebookLM Slide Design Guide]

Role : 몬테소리·발도르프·자기주도 교육 유치원 슬라이드 전문가
Industry : 유치원
Type : 몬테소리 철학 — 아이 주도 자기 발달 교육 철학 프레젠테이션

[Color Guide]
Background : #faf6f0 (내추럴 크림)
Text Color : #2d1a0a (딥 브라운) / #6d4c41 (미디엄 브라운)
Accent : #8d6e63 (어스 브라운) / #81c784 (세이지 그린)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
아이 개개인의 고유한 발달 속도를 존중하는 몬테소리 교육 철학을 깊이 있고 따뜻하게 전달. 교구·자유 선택 활동·혼합 연령 교육의 가치를 확신 있는 교육자 관점으로 설명. 아이는 스스로 배운다.

[Image Principles]
아이 자기 주도 활동 이미지. 몬테소리 교구 클로즈업. 내추럴 크림·어스 배색. 자연 소재 교구 사진.

[Design Characteristics]
• 크림 + 어스 브라운 + 세이지 그린
• 세리프 철학적 타이포그래피
• 교육 원리 인포그래픽 다이어그램
• 연령·발달 단계 타임라인
• 자연 소재 텍스처 배경

[Layout Guide]
- Title Slide : 크림 배경 + 몬테소리 활동 이미지 + 브라운 세리프 제목
- Spec Slide : 몬테소리 5대 영역 카드 (일상·감각·언어·수학·문화)
- Comparison Slide : 전통 교육 vs 몬테소리 교육 방식 비교
- CTA Slide : 어스 브라운 버튼 + 원아 모집·견학 신청 CTA
- Tone : Philosophical / Nurturing / Child-led
- Slide count : 7 pages
- Font size contrast : 제목 44pt 세리프 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스마트 놀이 학습',
    type: 'Smart Play Learning',
    colors: ['#e3f2fd', '#1565c0', '#ff6f00'],
    cardBg: 'linear-gradient(135deg, rgba(21,101,192,0.08), rgba(255,111,0,0.06))',
    numBg: 'rgba(21,101,192,0.10)', numColor: '#1565c0',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스마트 놀이·미디어 교육 융합 유치원 슬라이드 전문가
Industry : 유치원
Type : 스마트 놀이 학습 — AR·VR·미디어 활용 스마트 유아 교육 자료

[Color Guide]
Background : #e3f2fd (스카이 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #2a5070 (미디엄 블루)
Accent : #1565c0 (스마트 블루) / #ff6f00 (에너지 오렌지)
Font : Nunito (제목) / Noto Sans KR (본문)

[Tone & Manner]
AR·VR·태블릿 등 스마트 기기를 활용한 놀이 학습의 효과를 부모에게 어필. 과도한 미디어 노출 우려를 교육적 활용으로 전환. 놀면서 배우는 스마트 교육.

[Image Principles]
아이 태블릿·AR 활동 이미지. 블루+오렌지 스마트 배색. 앱 UI 교육 화면. 디지털 학습 아이콘.

[Design Characteristics]
• 스카이 블루 + 오렌지 에너지 배색
• 앱 UI 스크린 모형
• 스마트 교육 기능 아이콘 카드
• 발달 효과 인포그래픽
• 스크린타임 가이드 안내 박스

[Layout Guide]
- Title Slide : 블루 배경 + 스마트 학습 이미지 + 오렌지 포인트 제목
- Spec Slide : 스마트 교육 프로그램 카드 그리드
- Comparison Slide : 일반 놀이 vs 스마트 놀이 학습 효과 비교
- CTA Slide : 블루 버튼 + 무료 체험 신청 CTA
- Tone : Modern / Fun / Developmental
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '영어 몰입 유치원',
    type: 'English Immersion Kindergarten',
    colors: ['#fff8e1', '#ff8f00', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(255,143,0,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(255,143,0,0.12)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 영어 유치원·이중 언어 교육 마케팅 슬라이드 전문가
Industry : 유치원
Type : 영어 몰입 유치원 — 원어민 영어 몰입 교육 유치원 입학 설명 자료

[Color Guide]
Background : #fff8e1 (선샤인 크림)
Text Color : #2a1000 (딥 브라운) / #6a3000 (브라운)
Accent : #ff8f00 (선샤인 오렌지) / #1565c0 (블루)
Font : Nunito (제목) / Noto Sans KR (본문)

[Tone & Manner]
영어를 '공부'가 아닌 '생활'로 자연스럽게 습득하는 영어 몰입 환경 강조. 원어민 교사·영어 환경 구성·글로벌 커리큘럼을 영어 교육을 중시하는 학부모에게 어필. 영어가 모국어처럼.

[Image Principles]
원어민 교사와 아이들 수업 이미지. 선샤인 + 블루 밝은 배색. 글로벌 국기 포인트. 영어 학습 활동 사진.

[Design Characteristics]
• 선샤인 + 블루 글로벌 배색
• 영어 커리큘럼 단계 카드
• 원어민 교사 프로필 카드
• 연간 영어 행사 캘린더
• 졸업생 영어 수준 인포그래픽

[Layout Guide]
- Title Slide : 크림 배경 + 영어 수업 이미지 + 오렌지 포인트 제목
- Spec Slide : 영어 교육 프로그램 단계 로드맵 카드
- Comparison Slide : 일반 유치원 vs 영어 몰입 유치원 언어 발달 비교
- CTA Slide : 오렌지 버튼 + 원아 모집 신청 CTA
- Tone : Global / Fun / Language-first
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '안심 안전 유치원',
    type: 'Safe Secure Kindergarten',
    colors: ['#e8f5e9', '#2e7d32', '#ff9800'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.08), rgba(255,152,0,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 안전·위생·CCTV 강조 신뢰 중심 유치원 슬라이드 전문가
Industry : 유치원
Type : 안심 안전 유치원 — 학부모 안심을 위한 안전·위생·CCTV 신뢰 자료

[Color Guide]
Background : #e8f5e9 (세이프 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (세이프 그린) / #ff9800 (주의 오렌지)
Font : Nunito (제목) / Noto Sans KR (본문)

[Tone & Manner]
아이를 맡기는 학부모의 가장 큰 걱정인 안전·위생·먹거리·CCTV를 정면으로 다루는 신뢰 중심 톤. 모든 안전 시스템을 투명하게 공개. 우리 아이, 걱정 없이 맡기세요.

[Image Principles]
위생적인 급식·놀이 환경 이미지. 그린 세이프티 배색. 안전 체크리스트. CCTV·위생 아이콘.

[Design Characteristics]
• 세이프 그린 신뢰 배색
• 안전 체크리스트 레이아웃
• CCTV·위생 인증 배지
• 급식 영양 정보 카드
• 학부모 후기 카드

[Layout Guide]
- Title Slide : 그린 배경 + 안전 환경 이미지 + 그린 제목
- Spec Slide : 안전·위생·급식·CCTV 4대 안심 보장 카드
- Comparison Slide : 당원의 안전 시스템 vs 표준 기준 비교
- CTA Slide : 그린 버튼 + 견학 예약·원아 모집 신청 CTA
- Tone : Reassuring / Safe / Transparent
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '동화나라 어린이집',
    type: 'Fairy Tale Nursery',
    colors: ['#f3e5f5', '#9c27b0', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(156,39,176,0.08), rgba(255,214,0,0.07))',
    numBg: 'rgba(156,39,176,0.10)', numColor: '#6a1b9a',
    prompt: `[NotebookLM Slide Design Guide]

Role : 어린이집·영아반 신입원아 모집 슬라이드 전문가
Industry : 유치원
Type : 동화나라 어린이집 — 0~2세 영아를 위한 동화 감성 어린이집 자료

[Color Guide]
Background : #f3e5f5 (소프트 라벤더)
Text Color : #1a001a (딥 퍼플) / #5a2a6a (미디엄 퍼플)
Accent : #9c27b0 (매직 퍼플) / #ffd600 (선샤인 옐로우)
Font : Nunito (제목) / Noto Sans KR (본문)

[Tone & Manner]
태어나 처음 집을 떠나는 아이와 불안한 부모를 따뜻하게 안아주는 동화 감성 톤. 영아 전담 교사·낮잠 환경·수유 공간 등 영아 특화 케어를 부모 눈높이로 설명. 제2의 집 같은 어린이집.

[Image Principles]
영아·아기 따뜻한 이미지. 라벤더+옐로우 동화 배색. 동글동글 캐릭터 일러스트. 아늑한 실내 환경 사진.

[Design Characteristics]
• 라벤더 + 옐로우 동화 배색
• 귀여운 캐릭터 일러스트
• 하루 일과 타임라인 카드
• 영아 발달 단계 인포그래픽
• 부모 안심 보장 배지

[Layout Guide]
- Title Slide : 라벤더 배경 + 아기 이미지 + 옐로우 포인트 제목
- Spec Slide : 영아반 하루 일과 타임라인 카드
- Comparison Slide : 연령별 (0세·1세·2세) 케어 프로그램 비교
- CTA Slide : 퍼플 버튼 + 원아 모집 신청 CTA
- Tone : Gentle / Nurturing / Magical
- Slide count : 7 pages
- Font size contrast : 제목 44pt 볼드 / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 대학 전용 7개 디자인 프롬프트 ─────────────────────────
const UNIVERSITY_PROMPTS = [
  {
    name: '대학 입학 브로슈어',
    type: 'University Admissions Brochure',
    colors: ['#001a6e', '#ffffff', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(0,26,110,0.08), rgba(255,214,0,0.06))',
    numBg: 'rgba(0,26,110,0.10)', numColor: '#001a6e',
    prompt: `[NotebookLM Slide Design Guide]

Role : 대학교 입학처 수험생·학부모 대상 입시 설명회 전문가
Industry : 대학
Type : 대학 입학 브로슈어 — 수험생·학부모를 위한 대학 입시 설명 자료

[Color Guide]
Background : #ffffff / #f0f4ff (라이트 블루 틴트)
Text Color : #0a1040 (딥 네이비) / #3a4a7a (블루 그레이)
Accent : #001a6e (유니버시티 네이비) / #ffd600 (골드)
Font : Noto Serif KR (제목) / Noto Sans KR (본문)

[Tone & Manner]
수험생의 미래를 열어주는 권위 있고 희망적인 대학 입학처 톤. 학과 소개·입시 결과·장학금·졸업 후 진로를 체계적으로 전달. 우리 대학이 당신의 가능성을 펼쳐드립니다.

[Image Principles]
대학 캠퍼스·강의실 이미지. 네이비+골드 권위 배색. 졸업생 취업 데이터. 동아리·캠퍼스 라이프 사진.

[Design Characteristics]
• 네이비 + 골드 대학 권위 배색
• 학과 아이콘 그리드
• 취업·진로 실적 인포그래픽
• 장학금 제도 카드
• 캠퍼스 갤러리 레이아웃

[Layout Guide]
- Title Slide : 화이트 + 캠퍼스 이미지 + 네이비 공식 대학명 제목
- Spec Slide : 모집 학과·전형·장학금 현황 카드 그리드
- Comparison Slide : 전형 유형별 (수시·정시·특기자) 지원 기준 비교
- CTA Slide : 네이비 버튼 + 입학 상담·원서 접수 CTA
- Tone : Prestigious / Hopeful / Informative
- Slide count : 7 pages
- Font size contrast : 제목 44pt 세리프 / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '연구 혁신 리포트',
    type: 'Research Innovation Report',
    colors: ['#f5f5f7', '#1d1d1f', '#0066cc'],
    cardBg: 'linear-gradient(135deg, rgba(0,102,204,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,102,204,0.10)', numColor: '#0066cc',
    prompt: `[NotebookLM Slide Design Guide]

Role : 대학 연구 성과·산학협력 발표 전문가
Industry : 대학
Type : 연구 혁신 리포트 — 대학 연구 역량·SCI 논문·기술이전 성과 발표 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이)
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #0066cc (리서치 블루) / #34c759 (그로스 그린)
Font : Noto Sans KR (제목·본문 공통, 웨이트 차등)

[Tone & Manner]
대학 연구 역량·SCI 논문·특허·기술이전 성과를 학계·산업계·정부에 전달하는 전문 학술 톤. 데이터와 수치가 연구 수준을 증명. 지식이 사회를 바꾼다.

[Image Principles]
연구실·실험 환경 이미지. 학술 데이터 차트. 블루 포인트 강조. 국제 협력 지도.

[Design Characteristics]
• 그레이 + 블루 학술 배색
• 연구 성과 KPI 대시보드
• SCI 논문·특허 수치 강조
• 연구 협력 네트워크 다이어그램
• 산학협력 성과 타임라인

[Layout Guide]
- Title Slide : 그레이 배경 + 연구 이미지 + 블루 리포트 제목
- Spec Slide : 연구 KPI (SCI 논문·특허·기술이전·연구비) 카드
- Comparison Slide : 연도별 연구 성과 성장 추이 차트
- CTA Slide : 블루 버튼 + 산학협력·연구 협업 문의 CTA
- Tone : Academic / Data-driven / Impactful
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '글로벌 캠퍼스',
    type: 'Global Campus Experience',
    colors: ['#e8f4fd', '#0057a8', '#ff9500'],
    cardBg: 'linear-gradient(135deg, rgba(0,87,168,0.08), rgba(255,149,0,0.06))',
    numBg: 'rgba(0,87,168,0.10)', numColor: '#0057a8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 대학 국제화·유학생 모집·해외 교류 슬라이드 전문가
Industry : 대학
Type : 글로벌 캠퍼스 — 해외 교환학생·유학생 모집·국제 협력 프레젠테이션

[Color Guide]
Background : #e8f4fd (글로벌 라이트 블루)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #0057a8 (글로벌 블루) / #ff9500 (어드벤처 오렌지)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
세계 속에 우뚝 선 글로벌 대학 이미지. 해외 파트너 대학 네트워크·교환학생 프로그램·외국인 유학생 지원 시스템을 글로벌 감각으로 포지셔닝. 세계가 우리 캠퍼스다.

[Image Principles]
해외 파트너 대학 이미지. 세계 지도 협력 네트워크. 다국적 학생 라이프 사진. 글로벌 아이콘.

[Design Characteristics]
• 글로벌 블루 + 오렌지 배색
• 세계 지도 협력 시각화
• 파트너 대학 로고 그리드
• 교환학생 후기 카드
• 언어·문화 프로그램 아이콘

[Layout Guide]
- Title Slide : 블루 배경 + 글로벌 캠퍼스 이미지 + 오렌지 포인트 제목
- Spec Slide : 글로벌 협력 현황 (협정 대학 수·국가·교환 인원)
- Comparison Slide : 국내 캠퍼스 vs 해외 교류 프로그램 비교
- CTA Slide : 블루 버튼 + 국제교류처 문의 CTA
- Tone : International / Adventurous / Connected
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '취업·진로 성과',
    type: 'Career Placement Results',
    colors: ['#fff8e1', '#ff8f00', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(255,143,0,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(255,143,0,0.12)', numColor: '#e65100',
    prompt: `[NotebookLM Slide Design Guide]

Role : 대학 취업지원센터 진로·취업 성과 발표 전문가
Industry : 대학
Type : 취업·진로 성과 — 취업률·연봉·진로 현황 대학 성과 자료

[Color Guide]
Background : #fff8e1 (선샤인 크림)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #ff8f00 (성공 오렌지) / #1565c0 (신뢰 블루)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
졸업 후 현실적 가치를 증명하는 취업·진로 성과 중심 톤. 취업률·평균 연봉·주요 취업 기업·대학원 진학률을 수험생·학부모에게 직접 어필. 졸업장이 곧 경쟁력이다.

[Image Principles]
취업 성공 졸업생 이미지. 기업 로고 그리드. 오렌지 성과 수치. 취업 분야 차트.

[Design Characteristics]
• 오렌지 성과 수치 대형 강조
• 취업 기업 로고 그리드
• 졸업생 인터뷰 카드
• 연봉 분포 인포그래픽
• 산업별 취업 현황 차트

[Layout Guide]
- Title Slide : 크림 배경 + 성공 졸업생 이미지 + 오렌지 성과 헤드라인
- Spec Slide : 취업 KPI 카드 (취업률·평균 연봉·주요 취업처)
- Comparison Slide : 학과별·전형별 취업 성과 비교 차트
- CTA Slide : 오렌지 버튼 + 학과 상담 예약 CTA
- Tone : Achievement / Practical / Results-driven
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 핵심 수치 72pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '사회공헌 ESG 대학',
    type: 'University Social Responsibility',
    colors: ['#e8f5e9', '#2e7d32', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 대학 사회적 책임·ESG 경영 보고 전문가
Industry : 대학
Type : 사회공헌 ESG 대학 — 지속가능 대학 운영·사회공헌 성과 보고

[Color Guide]
Background : #e8f5e9 (ESG 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (ESG 그린) / #1565c0 (책임 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
대학이 사회에 기여하는 가치를 측정하고 공개하는 투명한 ESG 보고 톤. 탄소중립·지역사회 기여·사회적 약자 지원·교육 기회 균등을 강조. 대학이 사회 변화의 엔진이다.

[Image Principles]
환경·봉사·지역사회 이미지. 그린 ESG 배색. 지속가능 성과 차트. 사회공헌 활동 사진.

[Design Characteristics]
• 그린 + 블루 ESG 배색
• ESG 3대 영역 인포그래픽
• 탄소중립 로드맵 타임라인
• 사회공헌 수치 강조
• 지속가능 인증 배지

[Layout Guide]
- Title Slide : 그린 배경 + 사회공헌 이미지 + 그린 ESG 제목
- Spec Slide : ESG 핵심 성과 KPI 카드
- Comparison Slide : 전년 vs 당년 ESG 성과 개선 비교
- CTA Slide : 그린 버튼 + 산학·사회협력 문의 CTA
- Tone : Responsible / Sustainable / Transparent
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '디지털 혁신 캠퍼스',
    type: 'Digital Innovation Campus',
    colors: ['#0a1628', '#7c3aed', '#00d4ff'],
    cardBg: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(0,212,255,0.06))',
    numBg: 'rgba(124,58,237,0.12)', numColor: '#7c3aed',
    prompt: `[NotebookLM Slide Design Guide]

Role : 대학 디지털 전환·스마트 캠퍼스 발표 전문가
Industry : 대학
Type : 디지털 혁신 캠퍼스 — AI·빅데이터 기반 스마트 캠퍼스 혁신 자료

[Color Guide]
Background : #0a1628 (딥 테크 블루)
Text Color : #e0f4ff / #7ab8d8 (아이스 블루)
Accent : #7c3aed (AI 퍼플) / #00d4ff (혁신 사이언)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI 기반 맞춤 학습·빅데이터 교육 분석·디지털 캠퍼스 인프라로 교육 혁신을 선도하는 대학 이미지. 4차 산업혁명 시대 인재 양성 플랫폼. 캠퍼스가 AI로 진화한다.

[Image Principles]
스마트 강의실·디지털 인프라. AI·데이터 HUD 오버레이. 퍼플·사이언 배색. 디지털 교육 플랫폼 UI.

[Design Characteristics]
• 다크 + 퍼플·사이언 배색
• 디지털 대시보드 UI 모티프
• AI 교육 플랫폼 플로우
• 기술 혁신 타임라인
• 특허·SW 인증 배지

[Layout Guide]
- Title Slide : 다크 배경 + 스마트 캠퍼스 이미지 + 퍼플 글로우 제목
- Spec Slide : 디지털 혁신 KPI (AI 수업 도입률·디지털 장학·플랫폼 이용자)
- Comparison Slide : 기존 캠퍼스 vs 스마트 캠퍼스 비교
- CTA Slide : 퍼플 버튼 + 스마트 캠퍼스 협력 문의 CTA
- Tone : Innovative / Forward-looking / Academic
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 21pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '대학원 인재 양성',
    type: 'Graduate School Talent',
    colors: ['#1a1a2e', '#e8c547', '#f5f5f0'],
    cardBg: 'linear-gradient(135deg, rgba(232,197,71,0.08), rgba(26,26,46,0.05))',
    numBg: 'rgba(232,197,71,0.12)', numColor: '#a08a20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 대학원 입학·연구 장학 프로그램 발표 전문가
Industry : 대학
Type : 대학원 인재 양성 — 석·박사 연구자 모집 및 연구 환경 소개 자료

[Color Guide]
Background : #1a1a2e (딥 스칼라 네이비)
Text Color : #f5f5f0 (크림 화이트) / #b0a8d0 (퍼플 그레이)
Accent : #e8c547 (스칼라 골드) / #6a8fff (아카데믹 블루)
Font : Cormorant Garamond (제목) / Noto Sans KR (본문)

[Tone & Manner]
학문 탐구와 연구의 열정을 가진 미래 학자를 향한 권위 있는 초대 톤. 연구비 지원·지도교수·논문 실적·졸업 후 진로를 체계적으로 제시. 지식의 최전선으로 오라.

[Image Principles]
연구자·실험실 이미지. 다크 배경 + 골드 포인트. 논문·특허 데이터. 국제 컨퍼런스 사진.

[Design Characteristics]
• 딥 네이비 + 스칼라 골드 배색
• 세리프 학술 타이포그래피
• 지도교수 프로필 카드 (골드 테두리)
• 연구 실적 데이터 차트
• 장학금·지원 조건 표

[Layout Guide]
- Title Slide : 딥 네이비 + 연구실 이미지 + 골드 세리프 대학원명
- Spec Slide : 연구 지원 패키지 (장학금·연구비·국제 학회 지원)
- Comparison Slide : 학과별 지도교수·연구 분야·취업 진로 비교
- CTA Slide : 골드 버튼 + 입학 상담·지원서류 안내 CTA
- Tone : Scholarly / Prestigious / Aspiring
- Slide count : 7 pages
- Font size contrast : 제목 46pt 세리프 / 소제목 20pt / 본문 13pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 직업훈련 전용 7개 디자인 프롬프트 ─────────────────────────
const VOCATIONAL_PROMPTS = [
  {
    name: '취업 성공 드라이브',
    type: 'Job Placement Drive',
    colors: ['#fff8f0', '#e65100', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(230,81,0,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(230,81,0,0.12)', numColor: '#bf4000',
    prompt: `[NotebookLM Slide Design Guide]

Role : 직업훈련원·기술학교 수강생 모집 슬라이드 전문가
Industry : 직업훈련
Type : 취업 성공 드라이브 — 취업률·연봉 실적을 전면에 내세운 직업훈련 모집 자료

[Color Guide]
Background : #fff8f0 (웜 크림)
Text Color : #1a0a00 (딥 브라운) / #5a3000 (브라운)
Accent : #e65100 (액션 오렌지) / #1565c0 (신뢰 블루)
Font : Oswald (제목) / Noto Sans KR (본문)

[Tone & Manner]
"훈련 후 반드시 취업시킨다"는 성과 보증 톤. 취업률·평균 연봉·수료 후 취업 기간을 수치로 증명. 인생 전환점을 찾는 사람들에게 새로운 가능성 제시. 기술이 삶을 바꾼다.

[Image Principles]
수료 후 취업 성공 이미지. 오렌지 성과 수치. 훈련 현장 실습 사진. 취업 기업 로고.

[Design Characteristics]
• 오렌지 성과 포인트 강조
• 취업 수치 초대형 타이포
• 수료생 후기 카드
• 취업 기업 로고 그리드
• 수강~취업 프로세스 플로우

[Layout Guide]
- Title Slide : 크림 배경 + 취업 성공 이미지 + 오렌지 대형 수치 헤드라인
- Spec Slide : 취업 성과 KPI (취업률·평균 연봉·취업 기간)
- Comparison Slide : 과정별 취업 성과 비교 차트
- CTA Slide : 오렌지 버튼 + 무료 상담 신청 CTA
- Tone : Results-driven / Empowering / Practical
- Slide count : 7 pages
- Font size contrast : 제목 50pt 볼드 / 핵심 수치 80pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'K-디지털 트레이닝',
    type: 'K-Digital Training',
    colors: ['#e8f0fe', '#1a73e8', '#00c896'],
    cardBg: 'linear-gradient(135deg, rgba(26,115,232,0.08), rgba(0,200,150,0.06))',
    numBg: 'rgba(26,115,232,0.10)', numColor: '#1a73e8',
    prompt: `[NotebookLM Slide Design Guide]

Role : K-디지털 트레이닝·부트캠프 수강생 모집 전문가
Industry : 직업훈련
Type : K-디지털 트레이닝 — AI·SW·클라우드 디지털 직업훈련 부트캠프 자료

[Color Guide]
Background : #e8f0fe (라이트 블루)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (디지털 블루) / #00c896 (부트캠프 민트)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI·클라우드·풀스택 개발 등 디지털 기술 인재를 양성하는 K-디지털 훈련 톤. 비전공자도 6개월 이내 IT 취업 가능한 실전 중심 커리큘럼 어필. 코딩 몰라도 괜찮다, 지금 시작하면 된다.

[Image Principles]
개발자 코딩 화면 이미지. 블루+민트 배색. 커리큘럼 로드맵. 취업 기업 로고.

[Design Characteristics]
• 라이트 블루 + 민트 배색
• 코딩 커리큘럼 로드맵 카드
• 취업 연계 기업 로고
• 훈련비 지원 혜택 박스
• 수강생 후기 배지

[Layout Guide]
- Title Slide : 블루 배경 + 코딩 이미지 + 민트 포인트 제목
- Spec Slide : 커리큘럼 단계 로드맵 (기초→심화→프로젝트→취업)
- Comparison Slide : 일반 학원 vs K-디지털 훈련 비용·성과 비교
- CTA Slide : 블루 버튼 + 무료 상담 신청 CTA
- Tone : Accessible / Digital / Career-focused
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '기능장 마스터',
    type: 'Master Craftsman Training',
    colors: ['#f4f4f4', '#333333', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,0,0.08), rgba(244,244,244,0.8))',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 국가기술자격·기능장 훈련과정 홍보 전문가
Industry : 직업훈련
Type : 기능장 마스터 — 용접·전기·기계 등 국가 기술자격 훈련 자료

[Color Guide]
Background : #f4f4f4 (라이트 그레이)
Text Color : #1a1a1a (차콜) / #555555 (미디엄 그레이)
Accent : #ff6b00 (기술 오렌지) / #333333 (스트롱 블랙)
Font : Roboto Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
국가기술자격 취득을 통한 현장 기술 전문가 양성 톤. 용접·전기·기계 등 실제 현장에서 통하는 기술 교육을 강조. 자격증이 곧 평생 경쟁력이다.

[Image Principles]
훈련 현장 실습 이미지. 오렌지 강조 포인트. 국가기술자격증 배지. 기술 스펙 비교.

[Design Characteristics]
• 그레이 + 오렌지 인더스트리얼 배색
• 자격증 취득 단계 카드
• 합격률 수치 대형 강조
• 훈련 시설 사진 갤러리
• 취업 분야 아이콘

[Layout Guide]
- Title Slide : 그레이 배경 + 현장 훈련 이미지 + 오렌지 제목
- Spec Slide : 자격 과정 카드 (용접·전기·정비·조리 분야별)
- Comparison Slide : 자격증 유무별 임금·취업 기회 비교
- CTA Slide : 오렌지 버튼 + 훈련 수강 신청 CTA
- Tone : Practical / Skilled / Industry-ready
- Slide count : 7 pages
- Font size contrast : 제목 46pt 컨덴스드 / 소제목 21pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '재취업 리부트',
    type: 'Reemployment Reboot',
    colors: ['#f3f3f3', '#37474f', '#4caf50'],
    cardBg: 'linear-gradient(135deg, rgba(76,175,80,0.08), rgba(243,243,243,0.8))',
    numBg: 'rgba(76,175,80,0.12)', numColor: '#2e7d32',
    prompt: `[NotebookLM Slide Design Guide]

Role : 경력단절·중장년 재취업 직업훈련 슬라이드 전문가
Industry : 직업훈련
Type : 재취업 리부트 — 경력 전환·중장년 재취업을 위한 직업훈련 공감 자료

[Color Guide]
Background : #f3f3f3 (소프트 그레이 화이트)
Text Color : #1a1a1a (차콜) / #555555 (미디엄 그레이)
Accent : #37474f (딥 슬레이트) / #4caf50 (리부트 그린)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
경력단절·이직·중장년의 재취업 도전을 응원하는 공감과 실용의 톤. 내일배움카드 활용·훈련 비용 지원·나이 상관없는 취업 성공 사례를 중심으로. 다시 시작하는 사람들을 위해.

[Image Principles]
다양한 연령대 훈련 이미지. 그린 리부트 배색. 성공 사례 포트레이트. 새 시작 희망 이미지.

[Design Characteristics]
• 그레이 + 그린 신뢰·희망 배색
• 재취업 성공 사례 카드
• 훈련 비용 지원 안내 박스
• 연령대별 취업 성공 통계
• 전·후 비교 스토리 카드

[Layout Guide]
- Title Slide : 그레이 배경 + 재취업 성공 이미지 + 그린 포인트 제목
- Spec Slide : 훈련비 지원·내일배움카드 혜택 안내 카드
- Comparison Slide : 훈련 전 vs 후 취업 현황 비교
- CTA Slide : 그린 버튼 + 무료 상담 신청 CTA
- Tone : Empathetic / Encouraging / Practical
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '창업 스쿨',
    type: 'Startup School',
    colors: ['#0d1117', '#f7c325', '#ff6b6b'],
    cardBg: 'linear-gradient(135deg, rgba(247,195,37,0.08), rgba(255,107,107,0.06))',
    numBg: 'rgba(247,195,37,0.12)', numColor: '#c49a00',
    prompt: `[NotebookLM Slide Design Guide]

Role : 창업 교육·스타트업 스쿨 수강생 모집 슬라이드 전문가
Industry : 직업훈련
Type : 창업 스쿨 — 예비창업자·1인기업 대상 실전 창업 교육 자료

[Color Guide]
Background : #0d1117 (스타트업 다크)
Text Color : #e6edf3 / #8b949e (그레이)
Accent : #f7c325 (창업 옐로우) / #ff6b6b (에너지 레드)
Font : Barlow Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
아이디어에서 매출까지, 창업의 모든 단계를 지원하는 실전 창업 교육 스쿨 톤. 아이디어·MVP·투자 유치·법인 설립까지 단계별 성공 경험 강조. 지금 당장 창업하라.

[Image Principles]
스타트업 팀워크 이미지. 다크 배경 + 옐로우·레드 포인트. 창업 단계 플로우. 투자 유치 수치.

[Design Characteristics]
• 다크 배경 + 옐로우 포인트 배색
• 창업 단계 로드맵 카드
• 투자 유치·매출 성과 수치
• 수료 스타트업 포트폴리오
• 멘토·강사 프로필 카드

[Layout Guide]
- Title Slide : 다크 배경 + 스타트업 이미지 + 옐로우 대형 헤드라인
- Spec Slide : 창업 단계별 커리큘럼 로드맵 카드
- Comparison Slide : 독립 창업 vs 창업 스쿨 지원 창업 성공률 비교
- CTA Slide : 옐로우 버튼 + 수강 신청 CTA
- Tone : Entrepreneurial / Bold / Action-driven
- Slide count : 7 pages
- Font size contrast : 제목 50pt 컨덴스드 / 소제목 21pt / 본문 14pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '국제 자격 취득',
    type: 'International Certification',
    colors: ['#e8f4fd', '#0057a8', '#ffd600'],
    cardBg: 'linear-gradient(135deg, rgba(0,87,168,0.08), rgba(255,214,0,0.06))',
    numBg: 'rgba(0,87,168,0.10)', numColor: '#0057a8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 국제 자격증·어학 자격 취득 훈련 마케팅 전문가
Industry : 직업훈련
Type : 국제 자격 취득 — PMP·CISA·오픽 등 국제 자격증 취득 과정 자료

[Color Guide]
Background : #e8f4fd (글로벌 블루 라이트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #0057a8 (글로벌 블루) / #ffd600 (자격 골드)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
PMP·CISA·OPIc·토익스피킹 등 국제 공인 자격증이 글로벌 커리어를 열어준다는 설득력 있는 톤. 합격률·수강 기간·비용 대비 효과를 명확히 제시. 자격증 하나가 연봉을 바꾼다.

[Image Principles]
글로벌 비즈니스 이미지. 자격증 배지 그리드. 블루+골드 배색. 연봉 향상 인포그래픽.

[Design Characteristics]
• 글로벌 블루 + 자격 골드 배색
• 자격증 배지 시스템
• 합격률 수치 대형 강조
• 수강~합격 로드맵 플로우
• 연봉 향상 인포그래픽

[Layout Guide]
- Title Slide : 블루 배경 + 글로벌 자격증 이미지 + 골드 포인트 제목
- Spec Slide : 자격증별 과정 카드 (기간·비용·합격률·연봉 효과)
- Comparison Slide : 자격증 취득 전 vs 후 연봉·직책 비교
- CTA Slide : 블루 버튼 + 무료 상담 신청 CTA
- Tone : Professional / Credentialed / Global
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '공공훈련 기관 IR',
    type: 'Public Training Institute IR',
    colors: ['#f5f5f7', '#1d1d1f', '#0071e3'],
    cardBg: 'linear-gradient(135deg, rgba(0,113,227,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(0,113,227,0.10)', numColor: '#0071e3',
    prompt: `[NotebookLM Slide Design Guide]

Role : 공공 직업훈련기관 성과 보고·예산 제안 전문가
Industry : 직업훈련
Type : 공공훈련 기관 IR — 고용부·지자체 보고용 직업훈련 성과 및 예산 제안 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #0071e3 (코퍼레이트 블루) / #34c759 (성과 그린)
Font : Noto Sans KR (제목·본문 공통, 웨이트 차등)

[Tone & Manner]
고용노동부·지자체 보고용 공공 직업훈련기관 성과 자료. 훈련생 수·취업률·예산 집행 현황을 투명하고 체계적으로 보고. 공익 가치와 효율적 예산 집행을 동시에 증명.

[Image Principles]
훈련 현장·성과 이미지. 정부 기관 공식 배색. 재무 성과 차트. 정책 연계 인포그래픽.

[Design Characteristics]
• 공공기관 화이트 + 블루 배색
• 재무·성과 KPI 대시보드
• 예산 집행 현황 차트
• 정책 연계 플로우차트
• 투명 보고 체계 레이아웃

[Layout Guide]
- Title Slide : 화이트 + 기관 로고 + 블루 공식 보고서 제목
- Spec Slide : 훈련 성과 KPI (훈련생 수·취업률·만족도·예산 집행률)
- Comparison Slide : 전년 대비 성과 지표 개선 비교 차트
- CTA Slide : 블루 배경 + 차기 예산·사업 제안 CTA
- Tone : Official / Transparent / Accountable
- Slide count : 7 pages
- Font size contrast : 제목 38pt 700w / 소제목 20pt 600w / 본문 13pt 400w
- Text per slide : 최대 65단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 의료기기 전용 7개 디자인 프롬프트 ─────────────────────────
const MEDDEVICE_PROMPTS = [
  {
    name: '정밀 메드테크',
    type: 'Precision Medical Technology',
    colors: ['#0a1628', '#00c8ff', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(0,200,255,0.08), rgba(124,58,237,0.06))',
    numBg: 'rgba(0,200,255,0.12)', numColor: '#0097c8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 의료기기 제품 발표 및 임상 데이터 슬라이드 전문가
Industry : 의료기기
Type : 정밀 메드테크 — 의료기기 정밀성·기술력·임상 근거 강조 발표 자료

[Color Guide]
Background : #0a1628 (딥 메드테크 블루)
Text Color : #e0f4ff / #7ab8d8 (아이스 블루)
Accent : #00c8ff (사이언 블루) / #7c3aed (테크 퍼플)
Font : Raleway (제목) / Noto Sans KR (본문)

[Tone & Manner]
의료기기의 정밀도·안전성·임상 근거를 전면에 내세운 전문가 톤. FDA·CE 인증·임상 결과 데이터를 의사·병원 구매담당에게 어필. 데이터가 생명을 구한다.

[Image Principles]
첨단 의료 장비 이미지. 사이언 HUD 오버레이. 임상 데이터 차트. 장비 내부 구조 다이어그램.

[Design Characteristics]
• 다크 배경 + 사이언 포인트
• 임상 데이터 HUD 레이아웃
• 인체 활용 다이어그램
• FDA·CE·KFDA 인증 배지
• 정밀 스펙 테이블

[Layout Guide]
- Title Slide : 다크 배경 + 의료기기 이미지 + 사이언 글로우 제목
- Spec Slide : 정확도·속도·안전성 HUD 스타일 카드
- Comparison Slide : 경쟁 제품 vs 자사 임상 결과 비교
- CTA Slide : 사이언 버튼 + 데모·구매 문의 CTA
- Tone : Precise / Evidence-based / Technical
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 22pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '글로벌 수출 메디컬',
    type: 'Global Medical Export',
    colors: ['#ffffff', '#0057a8', '#00a86b'],
    cardBg: 'linear-gradient(135deg, rgba(0,87,168,0.08), rgba(0,168,107,0.06))',
    numBg: 'rgba(0,87,168,0.10)', numColor: '#0057a8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 의료기기 수출·글로벌 마케팅 슬라이드 전문가
Industry : 의료기기
Type : 글로벌 수출 메디컬 — K-의료기기 글로벌 수출 마케팅 자료

[Color Guide]
Background : #ffffff / #f0f8ff (라이트 블루 틴트)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #0057a8 (글로벌 블루) / #00a86b (메디컬 그린)
Font : Helvetica Neue (제목) / Noto Sans KR (본문)

[Tone & Manner]
세계 시장을 겨냥한 K-의료기기의 기술력과 신뢰성. 해외 바이어·의료기관에게 어필하는 글로벌 감각의 제품 소개 자료. 세계가 K-메디컬을 선택한다.

[Image Principles]
제품 화이트 배경 컷. 글로벌 의료 환경 이미지. 블루·그린 아이콘. 수출 현황 지도.

[Design Characteristics]
• 화이트 배경 + 블루 포인트
• 제품 카탈로그 레이아웃
• 국제 인증 마크 (FDA·CE·KFDA)
• 글로벌 수출 현황 지도
• 스펙 비교 표

[Layout Guide]
- Title Slide : 화이트 + 제품 이미지 + 블루 글로벌 제목
- Spec Slide : 제품 스펙·인증 현황 표
- Comparison Slide : 타사 vs 자사 주요 성능 지표 비교
- CTA Slide : 블루 버튼 + 글로벌 파트너십 CTA
- Tone : Global / Credible / Quality-focused
- Slide count : 7 pages
- Font size contrast : 제목 40pt / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'AI 진단 솔루션',
    type: 'AI Diagnostic Solution',
    colors: ['#0d0d1a', '#7c3aed', '#00e5ff'],
    cardBg: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(0,229,255,0.06))',
    numBg: 'rgba(124,58,237,0.12)', numColor: '#7c3aed',
    prompt: `[NotebookLM Slide Design Guide]

Role : AI 의료기기·디지털 헬스 솔루션 발표 전문가
Industry : 의료기기
Type : AI 진단 솔루션 — 딥러닝 기반 AI 의료 진단 기기 혁신 기술 발표

[Color Guide]
Background : #0d0d1a (AI 다크)
Text Color : #e8e0ff (라이트 라벤더) / #a090cc (미디엄 퍼플)
Accent : #7c3aed (AI 퍼플) / #00e5ff (데이터 사이언)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI가 바꾸는 의료 진단의 미래를 선도하는 혁신 기업 톤. 딥러닝 기반 영상 판독·AI 예측 진단·디지털 병리 등 첨단 기술 전달. AI가 의사와 함께 생명을 구한다.

[Image Principles]
AI 진단 UI 이미지. 의료 영상 + AI 오버레이. 퍼플·사이언 글로우. 딥러닝 신경망 다이어그램.

[Design Characteristics]
• 다크 배경 + AI 퍼플·사이언
• 의료 영상 + AI 오버레이 레이아웃
• 정확도·AUC 지표 HUD
• 신경망 아키텍처 다이어그램
• FDA SaMD 인증 배지

[Layout Guide]
- Title Slide : 다크 배경 + AI 진단 이미지 + 퍼플 글로우 제목
- Spec Slide : AI 성능 지표 (정확도·민감도·특이도·AUC) HUD
- Comparison Slide : 의사 단독 vs AI 보조 진단 결과 비교
- CTA Slide : 퍼플 버튼 + 파일럿 도입 문의 CTA
- Tone : Innovative / Evidence-based / Futuristic
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 22pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '가정용 재활 기기',
    type: 'Home Rehabilitation Device',
    colors: ['#e8f5e9', '#2e7d32', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(46,125,50,0.08), rgba(21,101,192,0.06))',
    numBg: 'rgba(46,125,50,0.12)', numColor: '#2e7d32',
    prompt: `[NotebookLM Slide Design Guide]

Role : 가정용 재활·웰니스 의료기기 소비자 마케팅 전문가
Industry : 의료기기
Type : 가정용 재활 기기 — 가정 사용 재활·건강 관리 의료기기 B2C 자료

[Color Guide]
Background : #e8f5e9 (웰니스 그린 라이트)
Text Color : #1a2e10 (딥 그린 블랙) / #3a5a20 (미디엄 그린)
Accent : #2e7d32 (헬스 그린) / #1565c0 (케어 블루)
Font : Nunito (제목) / Noto Sans KR (본문)

[Tone & Manner]
가정에서 쉽게 사용하는 재활·건강 기기의 편의성과 효과를 일반 소비자에게 어필. 부모님 선물·재활 환자 자가 관리 감성. 집이 곧 병원이 된다.

[Image Principles]
가정 사용 라이프스타일 이미지. 그린·블루 건강 배색. 사용 방법 단계 일러스트. 효과 전·후 인포그래픽.

[Design Characteristics]
• 웰니스 그린 밝은 배색
• 사용 방법 스텝 카드
• 효과 비교 전·후 인포그래픽
• 고객 리뷰 별점 카드
• 가족 라이프스타일 그리드

[Layout Guide]
- Title Slide : 그린 배경 + 가정 사용 이미지 + 그린 제목
- Spec Slide : 주요 기능·효과 카드 그리드
- Comparison Slide : 병원 방문 vs 가정 관리 비용·편의성 비교
- CTA Slide : 그린 버튼 + 구매·무료 체험 신청 CTA
- Tone : Approachable / Effective / Home-friendly
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '수술 로봇 플랫폼',
    type: 'Surgical Robotics Platform',
    colors: ['#001a2e', '#00d4ff', '#c0c0c0'],
    cardBg: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(0,26,46,0.05))',
    numBg: 'rgba(0,212,255,0.12)', numColor: '#0097c8',
    prompt: `[NotebookLM Slide Design Guide]

Role : 수술 로봇·최소침습 수술 시스템 발표 전문가
Industry : 의료기기
Type : 수술 로봇 플랫폼 — 차세대 로봇 수술 시스템 병원 도입 제안 자료

[Color Guide]
Background : #001a2e (딥 서지컬 블루)
Text Color : #e0f4ff / #7ab8d8 (아이스 블루)
Accent : #00d4ff (로봇 사이언) / #c0c0c0 (스틸 실버)
Font : Barlow (제목) / Noto Sans KR (본문)

[Tone & Manner]
수술 정밀도와 환자 안전을 혁신하는 로봇 수술 시스템의 기술 우위 전달. 외과 의사·병원 경영진 모두를 설득하는 이중 커뮤니케이션. 로봇이 집도하는 미래.

[Image Principles]
수술 로봇 클로즈업. 수술실 첨단 환경. 사이언 HUD 오버레이. 수술 결과 임상 데이터.

[Design Characteristics]
• 딥 블루 배경 + 사이언 포인트
• 로봇 구조 다이어그램
• 수술 결과 임상 데이터 시각화
• ROI 분석 레이아웃
• 인증·특허 배지

[Layout Guide]
- Title Slide : 딥 블루 + 로봇 수술 이미지 + 사이언 글로우 제목
- Spec Slide : 로봇 스펙 + 임상 결과 HUD 카드
- Comparison Slide : 개복 vs 복강경 vs 로봇 수술 결과 비교
- CTA Slide : 사이언 버튼 + 병원 도입 상담 문의 CTA
- Tone : Precise / Advanced / Clinical
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 22pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '체외진단 IVD',
    type: 'In Vitro Diagnostics IVD',
    colors: ['#e3f2fd', '#0d47a1', '#f57c00'],
    cardBg: 'linear-gradient(135deg, rgba(13,71,161,0.08), rgba(245,124,0,0.06))',
    numBg: 'rgba(13,71,161,0.10)', numColor: '#0d47a1',
    prompt: `[NotebookLM Slide Design Guide]

Role : 체외진단기기(IVD)·현장 진단 솔루션 발표 전문가
Industry : 의료기기
Type : 체외진단 IVD — 진단 검사 솔루션·현장 진단(POCT) 발표 자료

[Color Guide]
Background : #e3f2fd (라이트 블루)
Text Color : #0a1a2e (딥 네이비) / #2a4a7a (미디엄 블루)
Accent : #0d47a1 (딥 블루) / #f57c00 (경고 오렌지)
Font : Source Sans Pro (제목) / Noto Sans KR (본문)

[Tone & Manner]
PCR·POCT·혈액검사 기기의 정확도와 신속성을 의료 현장에 전달. 코로나 이후 고성장 IVD 시장에서의 기술 경쟁력 강조. 빠르게, 정확하게, 어디서나.

[Image Principles]
검사 장비·키트 이미지. 검사 결과 데이터 차트. 오렌지·블루 진단 아이콘. 검사 프로세스 다이어그램.

[Design Characteristics]
• 라이트 블루 + 딥 블루 배색
• 검사 프로세스 플로우
• 정확도 임상 데이터 차트
• 현장 사용 사례 이미지
• 검사 결과 시각화

[Layout Guide]
- Title Slide : 라이트 블루 + 검사 장비 이미지 + 딥 블루 제목
- Spec Slide : 검사 정확도·시간·비용 비교 표
- Comparison Slide : 기존 검사 vs 신제품 성능 비교
- CTA Slide : 딥 블루 버튼 + 제품 시연 요청 CTA
- Tone : Accurate / Rapid / Clinical
- Slide count : 7 pages
- Font size contrast : 제목 40pt / 소제목 20pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '인허가 규제 전략',
    type: 'Regulatory Affairs Strategy',
    colors: ['#f5f5f7', '#1d1d1f', '#ff9500'],
    cardBg: 'linear-gradient(135deg, rgba(255,149,0,0.08), rgba(245,245,247,0.8))',
    numBg: 'rgba(255,149,0,0.12)', numColor: '#cc7700',
    prompt: `[NotebookLM Slide Design Guide]

Role : 의료기기 인허가·규제 대응 전략 발표 전문가
Industry : 의료기기
Type : 인허가 규제 전략 — 국내외 의료기기 인허가 전략 발표 자료

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #0071e3 (컴플라이언스 블루) / #ff9500 (경고 오렌지)
Font : Noto Sans KR (제목·본문 공통, 웨이트 차등)

[Tone & Manner]
규제 기관·기업 모두를 위한 정확·체계적인 인허가 전략 톤. MFDS·FDA·CE 인증 프로세스를 명확하게 시각화. 규제는 장벽이 아니라 신뢰의 증거다.

[Image Principles]
인증·문서 이미지. 규제 기관 공식 배지. 블루 코퍼레이트 다이어그램. 체크리스트 레이아웃.

[Design Characteristics]
• 화이트 + 블루 신뢰 배색
• 인허가 프로세스 플로우차트
• 규제 기관별 요건 비교
• 체크리스트·마일스톤
• 위험도 컬러 코딩 매트릭스

[Layout Guide]
- Title Slide : 화이트 + 인증 배지 + 블루 공식 제목
- Spec Slide : 인허가 단계별 타임라인 (MFDS·FDA·CE)
- Comparison Slide : 국내 vs 미국 vs EU 규제 요건 비교
- CTA Slide : 블루 배경 + 인허가 컨설팅 문의 CTA
- Tone : Regulatory / Precise / Strategic
- Slide count : 7 pages
- Font size contrast : 제목 40pt 700w / 소제목 20pt 600w / 본문 13pt 400w
- Text per slide : 최대 65단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 철강 전용 7개 디자인 프롬프트 ─────────────────────────
const STEEL_PROMPTS = [
  {
    name: '스틸 파워',
    type: 'Industrial Steel Power',
    colors: ['#1a1a1a', '#c0c0c0', '#ff6b00'],
    cardBg: 'linear-gradient(135deg, rgba(255,107,0,0.08), rgba(26,26,26,0.05))',
    numBg: 'rgba(255,107,0,0.12)', numColor: '#cc5500',
    prompt: `[NotebookLM Slide Design Guide]

Role : 철강 기업 B2B 영업·제품 카탈로그 슬라이드 전문가
Industry : 철강
Type : 스틸 파워 — 철강 소재의 강인함을 담은 인더스트리얼 프레젠테이션

[Color Guide]
Background : #1a1a1a (철강 블랙) / #2a2a2a (카드 배경)
Text Color : #f0f0f0 (소프트 화이트) / #c0c0c0 (스틸 실버)
Accent : #ff6b00 (용광로 오렌지) / #c0c0c0 (스틸 실버)
Font : Roboto Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
철강 산업의 강인함과 산업적 신뢰를 표현. POSCO·현대제철 수준 B2B 영업 자료. 제품 스펙·품질 인증·납기 신뢰성을 전면에 강조. 단단한 소재처럼 단단한 신뢰.

[Image Principles]
용광로·제강 공정 박력 있는 이미지. 철강 코일·열연 제품 사진. 오렌지 열기 글로우 효과. 메탈릭 텍스처 배경 요소.

[Design Characteristics]
• 다크 메탈릭 배경 + 오렌지 용광로 액센트
• 스틸 실버 구분선·테두리
• 산업용 스펙 비교 테이블
• 굵은 라인 섹션 구분자
• 측정값·강도 수치 대형 표시

[Layout Guide]
- Title Slide : 다크 배경 + 제강 공정 이미지 + 오렌지 포인트 대형 제목
- Spec Slide : 제품 규격·인장강도·항복강도 스펙 테이블 (오렌지 헤더행)
- Comparison Slide : 강종별 특성 비교 (SS400·STS304·MCR·고장력강)
- CTA Slide : 오렌지 배경 + 화이트 견적 문의 + 납기·MOQ 정보 CTA
- Tone : Strong / Industrial / Reliable
- Slide count : 7 pages
- Font size contrast : 제목 48pt 컨덴스드 / 소제목 22pt / 본문 13pt
- Text per slide : 최대 55단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '그린 스틸 ESG',
    type: 'Green Steel Sustainability',
    colors: ['#e8f5e9', '#1b5e20', '#0077b6'],
    cardBg: 'linear-gradient(135deg, rgba(27,94,32,0.08), rgba(0,119,182,0.06))',
    numBg: 'rgba(27,94,32,0.12)', numColor: '#1b5e20',
    prompt: `[NotebookLM Slide Design Guide]

Role : 철강 ESG·탄소중립 전략 발표 전문가
Industry : 철강
Type : 그린 스틸 ESG — 수소환원제철 등 친환경 철강 미래 비전 자료

[Color Guide]
Background : #f0fff4 (민트 화이트) / #e8f5e9 (그린 틴트)
Text Color : #1a2e1a (딥 그린 블랙) / #2e6b3e (미디엄 그린)
Accent : #1b5e20 (딥 에코 그린) / #0077b6 (블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
탄소중립을 향한 철강 산업 전환을 주도하는 혁신 기업 이미지. EU CBAM 대응·수소환원제철·RE100 ESG 이슈를 선제 대응하는 리더십. 친환경이 곧 미래 경쟁력이다.

[Image Principles]
수소 환원로·재생에너지 이미지. 그린 스틸 공정 인포그래픽. CO₂ 감축 수치 시각화. 친환경 제조 공정 플로우차트.

[Design Characteristics]
• 민트·그린 친환경 밝은 배색
• CO₂ 감축 로드맵 타임라인
• ESG 3대 영역(E·S·G) 아이콘 시스템
• 수소환원 공정 플로우차트
• 국제 친환경 인증 배지

[Layout Guide]
- Title Slide : 그린 배경 + 친환경 공장 이미지 + 에코 헤드라인
- Spec Slide : CO₂ 감축 목표 로드맵 타임라인 (연도별 마일스톤)
- Comparison Slide : 기존 고로(BF) 공법 vs 수소환원제철(HyREX) 탄소·비용 비교
- CTA Slide : 그린 배경 + ESG 협력·투자 파트너십 CTA
- Tone : Sustainable / Progressive / Responsible
- Slide count : 7 pages
- Font size contrast : 제목 44pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'IR 미니멀 레드',
    type: 'Investor Relations Minimal',
    colors: ['#f5f5f5', '#2c2c2c', '#e63946'],
    cardBg: 'linear-gradient(135deg, rgba(230,57,70,0.06), rgba(245,245,245,0.8))',
    numBg: 'rgba(230,57,70,0.10)', numColor: '#c42030',
    prompt: `[NotebookLM Slide Design Guide]

Role : 철강 기업 투자자·기관 IR 슬라이드 전문가
Industry : 철강
Type : IR 미니멀 레드 — 투자자를 위한 임팩트 있는 철강 IR 자료

[Color Guide]
Background : #f5f5f5 (라이트 그레이)
Text Color : #1a1a1a (차콜 블랙) / #555555 (미디엄 그레이)
Accent : #e63946 (액티브 레드) / #2c2c2c (딥 차콜)
Font : Helvetica Neue (제목) / Noto Sans KR (본문)

[Tone & Manner]
주주·기관투자자를 위한 명확·간결한 IR 톤. 매출·영업이익·EBITDA·수출액 등 핵심 재무 지표를 레드 강조로 임팩트 있게 전달. 단순하지만 강렬하다.

[Image Principles]
철강 공장 대표 이미지. 재무 데이터 차트 중심. 레드 포인트 강조 요소. 미니멀 비즈니스 아이콘.

[Design Characteristics]
• 라이트 그레이 배경 + 레드 임팩트 포인트
• 핵심 재무 수치 대형 강조 표시
• 얇은 그레이 구분선 미니멀 레이아웃
• 레드 배경 섹션 헤더 포인트
• 깔끔한 비즈니스 그리드 구성

[Layout Guide]
- Title Slide : 라이트 그레이 배경 + 기업 로고 + 레드 강조 하단선 + 공식 제목
- Spec Slide : 재무 KPI 4개 카드 (매출·영업이익·부채비율·배당수익률)
- Comparison Slide : 전년 vs 당년 분기별 실적 비교 바 차트 (레드 당기)
- CTA Slide : 레드 배경 + 화이트 IR 문의 + 공시 링크 CTA
- Tone : Clean / Financial / Impactful
- Slide count : 7 pages
- Font size contrast : 제목 40pt / 핵심 수치 68pt 볼드 / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '글로벌 수출 파워',
    type: 'Global Export Strategy',
    colors: ['#001233', '#d4af37', '#ffffff'],
    cardBg: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(0,18,51,0.05))',
    numBg: 'rgba(212,175,55,0.12)', numColor: '#8a7200',
    prompt: `[NotebookLM Slide Design Guide]

Role : 철강 수출·무역 전략 발표 전문가
Industry : 철강
Type : 글로벌 수출 파워 — 세계 시장 수출 전략 발표용 프레젠테이션

[Color Guide]
Background : #001233 (딥 오션 네이비)
Text Color : #ffffff / #aabcce (아이스 그레이)
Accent : #d4af37 (프레스티지 골드) / #4488cc (브라이트 블루)
Font : Bebas Neue (제목) / Noto Sans KR (본문)

[Tone & Manner]
글로벌 철강 시장을 공략하는 자신감 있는 전략 발표 톤. 미국·EU·동남아 수출 확대·수입산 대비 가격경쟁력·품질 우위를 강조. 세계가 K-스틸을 선택한다.

[Image Principles]
세계 지도 수출 현황 시각화. 글로벌 항구·물류 이미지. 골드 포인트 강조 요소. 수출 통계 차트 인포그래픽.

[Design Characteristics]
• 네이비 + 골드 프레스티지 배색
• 세계 수출 현황 지도 시각화
• 수출 물량·금액 대형 강조
• 국가·지역별 비교 인포그래픽
• 대담한 Bebas Neue 볼드 헤드라인

[Layout Guide]
- Title Slide : 딥 네이비 + 세계지도 배경 아웃라인 + 골드 대형 헤드라인
- Spec Slide : 국가별 수출 현황 수평 바 차트 (Top 10 시장)
- Comparison Slide : 국내 매출 vs 수출 매출 비중 변화 추이 비교
- CTA Slide : 골드 버튼 + 해외 파트너·에이전트 문의 CTA
- Tone : Strategic / Global / Ambitious
- Slide count : 7 pages
- Font size contrast : 제목 52pt 볼드 / 소제목 22pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스마트 팩토리 DX',
    type: 'Smart Factory Digital Transform',
    colors: ['#0a1628', '#00bcd4', '#7c3aed'],
    cardBg: 'linear-gradient(135deg, rgba(0,188,212,0.08), rgba(124,58,237,0.06))',
    numBg: 'rgba(0,188,212,0.12)', numColor: '#0097a7',
    prompt: `[NotebookLM Slide Design Guide]

Role : 철강 스마트팩토리·디지털 전환(DX) 발표 전문가
Industry : 철강
Type : 스마트 팩토리 DX — 철강 제조 디지털 전환 기술 프레젠테이션

[Color Guide]
Background : #0a1628 (딥 테크 네이비)
Text Color : #e0f4ff / #7ab8d8 (아이스 블루)
Accent : #00bcd4 (DX 사이언) / #7c3aed (AI 퍼플)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
스마트 센서·AI 품질 검사·디지털 트윈으로 혁신하는 철강 제조의 미래 발표. Industry 4.0 철강 생산 비전. 데이터가 쇳물보다 뜨겁다.

[Image Principles]
스마트 공장 자동화 로봇 이미지. AI 품질검사 시스템 화면. 사이언 HUD 데이터 오버레이. IoT 센서 네트워크 다이어그램.

[Design Characteristics]
• 다크 배경 + 사이언·퍼플 글로우 포인트
• 디지털 대시보드 UI 모티프
• AI·IoT 연결 노드 다이어그램
• 실시간 데이터 시각화 레이아웃
• 3D 공장 디지털 트윈 레이아웃

[Layout Guide]
- Title Slide : 다크 배경 + 스마트팩토리 이미지 + 사이언 글로우 제목
- Spec Slide : AI 검사 정확도·생산성·불량률 개선 HUD 스타일 카드
- Comparison Slide : 기존 아날로그 공정 vs 스마트팩토리 DX 이후 비교
- CTA Slide : 사이언 글로우 버튼 + DX 파트너십·솔루션 도입 문의 CTA
- Tone : Innovative / Digital / Efficient
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 22pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '제품 포트폴리오',
    type: 'Steel Product Catalogue',
    colors: ['#f8f9fa', '#1a1a1a', '#2196f3'],
    cardBg: 'linear-gradient(135deg, #e8f4ff, #f0f8ff)',
    numBg: 'rgba(33,150,243,0.10)', numColor: '#1565c0',
    prompt: `[NotebookLM Slide Design Guide]

Role : 철강 제품 포트폴리오 마케팅 전문가
Industry : 철강
Type : 제품 포트폴리오 — 철강 제품군 카탈로그형 B2B 마케팅 자료

[Color Guide]
Background : #f8f9fa (클린 화이트)
Text Color : #1a1a1a (차콜) / #555555 (미디엄 그레이)
Accent : #2196f3 (스틸 블루) / #37474f (다크 그레이)
Font : Source Sans Pro (제목) / Noto Sans KR (본문)

[Tone & Manner]
구매 담당자·엔지니어를 위한 명확·체계적 제품 카탈로그 톤. 열연·냉연·스테인레스·고장력강 등 제품군별 특성과 용도를 한눈에 파악할 수 있도록 구성. 고르기 쉽게, 결정하기 쉽게.

[Image Principles]
제품 실물 사진 (코일·판재·형강·강관). 최종 적용 제품 이미지 (자동차·조선·건설). 블루 포인트 강조. 제품 단면·규격 다이어그램.

[Design Characteristics]
• 화이트 배경 + 스틸 블루 포인트
• 제품 그리드 카탈로그 레이아웃
• 용도별 산업 아이콘 태그 시스템
• 규격 표·스펙 시트 스타일
• 활용 산업 분류 배지

[Layout Guide]
- Title Slide : 화이트 배경 + 제품 라인업 콜라주 + 블루 헤드라인
- Spec Slide : 제품 규격·인장강도·용도 비교 표 (블루 헤더행)
- Comparison Slide : 열연 vs 냉연 vs 스테인레스 특성·용도 비교
- CTA Slide : 블루 버튼 + 샘플·기술 자료·견적 문의 CTA
- Tone : Informative / Practical / B2B
- Slide count : 7 pages
- Font size contrast : 제목 40pt / 소제목 20pt / 본문 13pt
- Text per slide : 최대 70단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '안전보건 캠페인',
    type: 'Safety Health Campaign',
    colors: ['#fff3e0', '#e65100', '#1565c0'],
    cardBg: 'linear-gradient(135deg, rgba(230,81,0,0.07), rgba(255,243,224,0.6))',
    numBg: 'rgba(230,81,0,0.12)', numColor: '#bf4000',
    prompt: `[NotebookLM Slide Design Guide]

Role : 철강 고위험 공정 안전보건 관리 보고 전문가
Industry : 철강
Type : 안전보건 캠페인 — 용광로·고열 작업 환경 안전 관리 자료

[Color Guide]
Background : #fff3e0 (웜 크림)
Text Color : #1a0a00 (딥 브라운 블랙) / #5a3000 (브라운)
Accent : #e65100 (세이프티 오렌지) / #1565c0 (컴플라이언스 블루)
Font : Roboto Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
용광로·고열 작업 고위험 공정을 관리하는 안전 문화 조성 톤. 산업재해 예방·법적 컴플라이언스를 강조하는 진지하고 책임감 있는 보고 자료. 안전이 최우선 가치다.

[Image Principles]
안전장비 착용 작업자 이미지. 오렌지·레드 경고 아이콘 세트. 현장 안전 점검 이미지. 안전 통계 인포그래픽.

[Design Characteristics]
• 크림 배경 + 세이프티 오렌지 경고 포인트
• 안전 체크리스트 형식 레이아웃
• 무재해 일수 대형 카운터 강조
• 위험 등급 컬러 코딩 매트릭스
• 법령·규정 인용 강조 박스

[Layout Guide]
- Title Slide : 크림 배경 + 안전 아이콘 + 오렌지 대형 제목
- Spec Slide : 안전 KPI 대시보드 (무재해 일수·LTIR·교육 이수율)
- Comparison Slide : 전년 대비 안전 실적 개선 바 차트 비교
- CTA Slide : 오렌지 배경 + 연간 안전 목표 선언·서약 CTA
- Tone : Serious / Responsible / Safety-driven
- Slide count : 7 pages
- Font size contrast : 제목 42pt 컨덴스드 / 소제목 20pt / 본문 14pt
- Text per slide : 최대 65단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

// ── 조선 전용 7개 디자인 프롬프트 ─────────────────────────
const SHIPBUILDING_PROMPTS = [
  {
    name: '딥 오션 블루',
    type: 'Deep Ocean Maritime',
    colors: ['#001529', '#0077b6', '#90e0ef'],
    cardBg: 'linear-gradient(135deg, rgba(0,119,182,0.10), rgba(144,224,239,0.08))',
    numBg: 'rgba(0,119,182,0.12)', numColor: '#0077b6',
    prompt: `[NotebookLM Slide Design Guide]

Role : 조선·해운 산업 글로벌 수주 프레젠테이션 전문가
Industry : 조선
Type : 딥 오션 블루 — 대양의 웅장함을 담은 글로벌 조선사 프레젠테이션

[Color Guide]
Background : #001529 (딥 오션 네이비)
Text Color : #e0f0ff (아이스 블루 화이트) / #7ab8d8 (오션 블루)
Accent : #0077b6 (씨 블루) / #90e0ef (아쿠아 라이트)
Font : Barlow (제목) / Noto Sans KR (본문)

[Tone & Manner]
웅장하고 신뢰감 있는 글로벌 조선사 톤. HD현대·삼성중공업 수준의 권위. 선박 수주·기술력·친환경 선박 비전을 대형 스케일로 표현. 바다를 지배하는 기술력.

[Image Principles]
대형 선박 진수·항해 이미지에 오션 블루 오버레이. 조선소 드론 항공 뷰. 선박 단면 도면 다이어그램. 세계 수주 현황 지도.

[Design Characteristics]
• 딥 네이비 배경 + 아쿠아 라이트 포인트
• 파도·물결 형태 섹션 구분선
• 대형 수주 수치 (CGT·척 수) 강조
• 세계 지도 수주 현황 시각화
• 선박 실루엣 배경 요소

[Layout Guide]
- Title Slide : 딥 오션 배경 + 대형 선박 이미지 + 아쿠아 글로우 헤드라인
- Spec Slide : 선박 제원 카드 (전장·선폭·배수량·속력 수치 대형 표기)
- Comparison Slide : LNG선 vs 컨테이너선 vs 탱커 제원·수주 현황 비교
- CTA Slide : 오션 블루 배경 + 글로벌 파트너십 문의 CTA
- Tone : Grand / Trustworthy / Global
- Slide count : 7 pages
- Font size contrast : 제목 50pt / 소제목 22pt / 본문 13pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '그린십 에코',
    type: 'Green Ship Eco Future',
    colors: ['#f0fff4', '#1a7a4a', '#0077b6'],
    cardBg: 'linear-gradient(135deg, rgba(26,122,74,0.08), rgba(0,119,182,0.06))',
    numBg: 'rgba(26,122,74,0.12)', numColor: '#1a7a4a',
    prompt: `[NotebookLM Slide Design Guide]

Role : 친환경 선박·암모니아·LNG 추진 기술 발표 전문가
Industry : 조선
Type : 그린십 에코 — 탄소중립 시대 친환경 선박 기술 프레젠테이션

[Color Guide]
Background : #f0fff4 (민트 화이트) / #e8f5e9 (연두 틴트)
Text Color : #1a2e1a (딥 그린 블랙) / #2e6b3e (미디엄 그린)
Accent : #1a7a4a (에코 그린) / #0077b6 (씨 블루)
Font : Montserrat (제목) / Noto Sans KR (본문)

[Tone & Manner]
지속가능한 해운의 미래를 선도하는 혁신 기업 톤. IMO 2050 탄소중립·암모니아·수소 추진·스마트십 기술을 환경 의식 높은 선주에게 어필. 친환경이 곧 경쟁력이다.

[Image Principles]
친환경 선박 + 맑은 바다 이미지. 그린 에너지 아이콘 세트. CO₂ 절감 인포그래픽. 태양광·배터리 하이브리드 선박 다이어그램.

[Design Characteristics]
• 민트·그린 중심 밝은 배경
• CO₂ 절감 수치 대형 강조
• 친환경 인증 배지 (Green Award·IMO)
• 에너지 플로우 순환 다이어그램
• 바다·하늘 그라디언트 섹션 구분선

[Layout Guide]
- Title Slide : 밝은 그린 배경 + 친환경 선박 이미지 + 에코 헤드라인
- Spec Slide : 탄소 절감률·연료 효율 원형 게이지 차트 3개
- Comparison Slide : 기존 HFO 선박 vs 암모니아·LNG 선박 CO₂·비용 비교
- CTA Slide : 에코 그린 배경 + 친환경 조선 파트너십 CTA
- Tone : Sustainable / Forward-thinking / Eco-responsible
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 21pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '블루프린트 엔지니어링',
    type: 'Engineering Blueprint',
    colors: ['#0a1628', '#4fc3f7', '#ffffff'],
    cardBg: 'linear-gradient(135deg, rgba(79,195,247,0.08), rgba(10,22,40,0.05))',
    numBg: 'rgba(79,195,247,0.12)', numColor: '#0288d1',
    prompt: `[NotebookLM Slide Design Guide]

Role : 조선 기술·설계 엔지니어링 발표 전문가
Industry : 조선
Type : 블루프린트 엔지니어링 — 선박 설계·공법 정밀 기술 발표 자료

[Color Guide]
Background : #0a1628 (블루프린트 네이비)
Text Color : #e0f4ff / #a0d0e8 (아이스 블루)
Accent : #4fc3f7 (블루프린트 라이트) / #ffffff (도면 화이트)
Font : JetBrains Mono (수치) / Noto Sans KR (본문)

[Tone & Manner]
정밀 공학과 설계 전문성의 톤. 실제 블루프린트 도면에서 영감받은 레이아웃. 기술직·엔지니어링 청중을 위한 정확한 기술 정보 전달. 숫자와 도면이 신뢰를 만든다.

[Image Principles]
실제 블루프린트·CAD 선박 도면 이미지. 모노크롬 + 라이트 블루 라인. 용접·블록 조립 공정 사진. 선박 단면 구조 다이어그램.

[Design Characteristics]
• 네이비 배경 + 라이트 블루 도면 라인
• 그리드 도면 패턴 배경
• 모노스페이스 폰트 수치·스펙 강조
• 화살표·치수선 디테일
• 단면도 스타일 레이아웃

[Layout Guide]
- Title Slide : 블루프린트 도면 패턴 배경 + 라이트 블루 대형 제목
- Spec Slide : 선박 단면도 + 각 부위 라벨 다이어그램 스타일
- Comparison Slide : 공법 A vs 공법 B 도면 스타일 비교
- CTA Slide : 기술 협력·수주 문의 CTA (블루프린트 감성 유지)
- Tone : Technical / Precise / Engineering-grade
- Slide count : 7 pages
- Font size contrast : 제목 44pt 모노 / 수치 60pt / 본문 13pt
- Text per slide : 최대 60단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '글로벌 수주 전략',
    type: 'Global Order Strategy',
    colors: ['#001233', '#ffd60a', '#ffffff'],
    cardBg: 'linear-gradient(135deg, rgba(255,214,10,0.08), rgba(0,18,51,0.05))',
    numBg: 'rgba(255,214,10,0.12)', numColor: '#8a7200',
    prompt: `[NotebookLM Slide Design Guide]

Role : 조선사 글로벌 영업·수주 전략 발표 전문가
Industry : 조선
Type : 글로벌 수주 전략 — 세계 선주사 대상 영업 전략 프레젠테이션

[Color Guide]
Background : #001233 (딥 네이비)
Text Color : #ffffff / #aabcce (아이스 그레이)
Accent : #ffd60a (프레스티지 골드) / #4488cc (브라이트 블루)
Font : Bebas Neue (제목) / Noto Sans KR (본문)

[Tone & Manner]
글로벌 선주사·해운사를 타겟으로 한 전략적 영업 톤. 수주 실적·기술 경쟁력·납기 신뢰성을 핵심 메시지로 강조. 국제 조선 전시회 발표 감성. 세계가 인정한 K-조선.

[Image Principles]
세계 지도 수주 현황 시각화. 다양한 선종 라인업 사진. 조선소 전경 드론 뷰. 골드 포인트 강조 요소.

[Design Characteristics]
• 네이비 + 골드 프리미엄 배색
• 세계 지도 수주 시각화 인포그래픽
• 수주 실적 수치 대형 강조 (조 원·CGT)
• 선종별 라인업 그리드 카드
• 대담한 Bebas Neue 볼드 타이포

[Layout Guide]
- Title Slide : 딥 네이비 + 세계지도 배경 아웃라인 + 골드 대형 헤드라인
- Spec Slide : 연간 수주 실적 바 차트 (선종별 컬러 코딩)
- Comparison Slide : 글로벌 조선 빅4 시장 경쟁력 비교 매트릭스
- CTA Slide : 골드 버튼 + 수주·파트너십 문의 CTA
- Tone : Prestigious / Strategic / Global
- Slide count : 7 pages
- Font size contrast : 제목 54pt / 소제목 22pt / 본문 13pt
- Text per slide : 최대 45단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '스마트십 4.0',
    type: 'Smart Ship Industry 4.0',
    colors: ['#0d0d1a', '#7c3aed', '#00ffcc'],
    cardBg: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(0,255,204,0.06))',
    numBg: 'rgba(124,58,237,0.12)', numColor: '#7c3aed',
    prompt: `[NotebookLM Slide Design Guide]

Role : 스마트십·자율운항 선박 기술 발표 전문가
Industry : 조선
Type : 스마트십 4.0 — AI·IoT 기반 차세대 스마트 선박 기술 프레젠테이션

[Color Guide]
Background : #0d0d1a (테크 블랙)
Text Color : #e8e0ff (라이트 라벤더) / #a090cc (미디엄 퍼플)
Accent : #7c3aed (테크 퍼플) / #00ffcc (데이터 민트)
Font : Space Grotesk (제목) / Noto Sans KR (본문)

[Tone & Manner]
디지털 트윈·AI 항법·원격 모니터링 등 차세대 스마트십 기술을 혁신적으로 표현. 조선소 디지털 전환 비전 발표. 소프트웨어가 선박을 운항하는 시대.

[Image Principles]
디지털 트윈 3D 선박 시각화. IoT 센서 네트워크 다이어그램. 퍼플·민트 글로우 효과. 실시간 데이터 대시보드 UI 이미지.

[Design Characteristics]
• 다크 배경 + 퍼플·민트 네온 글로우
• 디지털 트윈 3D 뷰 레이아웃 모티프
• IoT 연결 노드 다이어그램
• 실시간 데이터 대시보드 UI 스타일
• 사이버 인터페이스 HUD 요소

[Layout Guide]
- Title Slide : 다크 배경 + 3D 디지털 선박 이미지 + 퍼플 글로우 제목
- Spec Slide : AI 자율운항 시스템 구성도 HUD 스타일
- Comparison Slide : 전통 운항 vs 스마트십 AI 운항 효율·비용 비교
- CTA Slide : 퍼플 글로우 버튼 + 스마트십 기술 도입 파트너십 CTA
- Tone : Innovative / Digital / Futuristic
- Slide count : 7 pages
- Font size contrast : 제목 46pt / 소제목 22pt / 본문 13pt
- Text per slide : 최대 40단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: 'HSE 안전 리포트',
    type: 'HSE Safety Report',
    colors: ['#fff8e1', '#e65100', '#0077b6'],
    cardBg: 'linear-gradient(135deg, rgba(230,81,0,0.07), rgba(255,248,225,0.5))',
    numBg: 'rgba(230,81,0,0.12)', numColor: '#bf4000',
    prompt: `[NotebookLM Slide Design Guide]

Role : 조선소 HSE·환경 관리 보고 전문가
Industry : 조선
Type : HSE 안전 리포트 — 조선소 안전·환경·규제 준수 보고 자료

[Color Guide]
Background : #fff8e1 (웜 크림)
Text Color : #1a0a00 (딥 브라운 블랙) / #5a3000 (브라운)
Accent : #e65100 (세이프티 오렌지) / #0077b6 (컴플라이언스 블루)
Font : Roboto Condensed (제목) / Noto Sans KR (본문)

[Tone & Manner]
안전을 최우선으로 하는 신뢰와 책임의 톤. IMO 규제·SOLAS 준수·무재해 실적 강조. 사내 안전 교육 및 규제 기관 보고 목적의 진지하고 체계적인 자료.

[Image Principles]
안전장비 착용 작업자 이미지. 오렌지 안전 경고 아이콘 세트. 체크리스트·점검표 스타일. 환경 모니터링 데이터 차트.

[Design Characteristics]
• 크림 배경 + 세이프티 오렌지 강조
• 경고·주의 아이콘 시스템
• 체크리스트 형식 레이아웃
• 무재해 일수 대형 카운터
• 규제 준수 인증 배지

[Layout Guide]
- Title Slide : 크림 배경 + 안전 헬멧 아이콘 + 오렌지 제목
- Spec Slide : 안전 KPI 대시보드 (무재해 일수·사고율·교육 시간)
- Comparison Slide : 전년 대비 안전 실적 개선 비교 차트
- CTA Slide : 오렌지 배경 + 안전 목표 선언·서약 CTA
- Tone : Responsible / Compliant / Safety-first
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 65단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  },
  {
    name: '코퍼레이트 애뉴얼',
    type: 'Corporate Annual Report',
    colors: ['#f5f5f7', '#1d1d1f', '#0071e3'],
    cardBg: 'linear-gradient(135deg, #e8f2ff, #f0f7ff)',
    numBg: 'rgba(0,113,227,0.10)', numColor: '#0071e3',
    prompt: `[NotebookLM Slide Design Guide]

Role : 조선 대기업 연간 경영 보고 슬라이드 전문가
Industry : 조선
Type : 코퍼레이트 애뉴얼 — 주주·이사회를 위한 연간 경영 성과 보고

[Color Guide]
Background : #f5f5f7 (라이트 그레이) / #ffffff
Text Color : #1d1d1f (딥 블랙) / #6e6e73 (미디엄 그레이)
Accent : #0071e3 (코퍼레이트 블루) / #34c759 (그로스 그린)
Font : Noto Sans KR (제목·본문 공통, 웨이트 차등)

[Tone & Manner]
주주·이사회를 위한 권위 있는 연간 보고 톤. 재무 실적·ESG 성과·중장기 전략을 체계적으로 정리. 증권거래소 공시 수준의 정확성과 전문성. 투명한 경영이 신뢰를 만든다.

[Image Principles]
기업 시설·전경 이미지. 깔끔한 재무 차트. 경영진 포트레이트. 블루 코퍼레이트 일러스트.

[Design Characteristics]
• 화이트+블루 권위 배색
• 재무 데이터 차트 중심 레이아웃
• 슬라이드 하단 코퍼레이트 푸터
• 섹션별 컬러 코딩 시스템
• 전문 비즈니스 그리드 레이아웃

[Layout Guide]
- Title Slide : 화이트 + 기업 로고 + 블루 연도·보고서 공식 제목
- Spec Slide : 4분면 재무·경영 KPI 대시보드 (매출·영업이익·수주잔고·ROE)
- Comparison Slide : 전년·당년 주요 실적 나란히 비교 바 차트
- CTA Slide : 블루 배경 + 중장기 전략 방향·비전 선언 CTA
- Tone : Authoritative / Transparent / Professional
- Slide count : 7 pages
- Font size contrast : 제목 38pt 700w / 소제목 20pt 600w / 본문 13pt 400w
- Text per slide : 최대 70단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
  }
];

