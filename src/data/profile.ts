/**
 * 자기소개(About)와 이력서(CV) 페이지가 함께 쓰는 정보입니다.
 * 내용을 바꾸려면 이 파일만 고치면 됩니다.
 */

export const profile = {
  name: '김정현',
  nameEn: 'Jeong-Hyun Kim',
  handle: 'novoodi',
  github: 'https://github.com/novoodi',
  tagline: '측정 체계를 먼저 만들고, 개선을 수치로 증명합니다.',
  lead:
    '신한대학교 소프트웨어융합학과에서 온디바이스 LLM과 한국어 NLP를 공부하고 있습니다. ' +
    '모델을 호출하는 데서 그치지 않고, 출력을 검증하는 장치와 평가 기준을 먼저 만든 뒤 그 위에서 개선합니다.',
  about: [
    '모델의 출력을 그대로 믿는 대신 측정 체계를 먼저 만들고, 개선을 수치로 확인하는 방식으로 개발해 왔습니다. ' +
      '온디바이스 LLM 앱을 골든 테스트와 실기기 검증으로 만들었고, 스스로 찾아낸 data leakage 때문에 이미 보고한 성능 수치를 낮춰서 정정한 적도 있습니다.',
    '관심사는 AI 기능이 실제 사용자 손에 닿기까지의 전 과정입니다. 모델 학습과 파인튜닝, ONNX·TFLite·GGUF 변환과 양자화, ' +
      '그리고 휴대폰 안에서 돌아가는 앱까지 직접 만들어 봅니다.',
    '"고성능 모델을 무조건 적용하는 것이 항상 옳은가"를 실험으로 확인하는 일을 좋아합니다. ' +
      '영어로 학습된 노이즈 제거 모델이 한국어 음성 인식을 오히려 악화시킨다는 것을 측정한 연구로 우수논문상을 받았습니다.',
  ],
  interests: [
    '온디바이스 LLM (LiteRT-LM, llama.cpp)',
    'LLM 출력 검증 (Guardrail, Reflection, constrained decoding)',
    'RAG와 한국어 NLP',
    '모델 경량화와 모바일 배포',
    '실험 설계와 평가 체계',
  ],
};

export const education = [
  {
    school: '신한대학교',
    major: '소프트웨어융합학과',
    period: '2021.03 ~ 2027.02 (졸업 예정)',
    note: '4학년 재학',
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'LLM 엔지니어링',
    items: [
      '온디바이스 LLM (LiteRT-LM, Gemma 4, llama.cpp)',
      'Function Calling',
      '구조화 출력 · constrained decoding',
      'RAG (FAISS, 온디바이스 임베딩)',
      'Guardrail · Reflection',
      'PII 마스킹',
    ],
  },
  {
    group: 'ML · 실험',
    items: [
      'PyTorch',
      'TensorFlow/Keras',
      'HuggingFace Transformers',
      'LightGBM · CatBoost',
      'YOLOv8 · RT-DETR',
      '골든 테스트 · 회귀 평가',
    ],
  },
  {
    group: '경량화 · 배포',
    items: ['ONNX Runtime', 'INT8 동적 양자화', 'TFLite', 'GGUF 양자화', 'JNI 브리지 (C++)'],
  },
  {
    group: '언어 · 앱 · 인프라',
    items: [
      'Python (주력)',
      'Kotlin · Jetpack Compose',
      'Flutter/Dart',
      'TypeScript · React',
      'FastAPI',
      'Firebase',
      'Room',
      'GitHub Actions',
    ],
  },
];

export const awards: { date: string; title: string; detail: string; project?: string }[] = [
  {
    date: '2025.12',
    title: 'KCI 논문 게재 (제1저자)',
    detail:
      '한국소프트웨어감정평가학회 논문지(JSAV) 제21권 제4호, pp.197–209. ' +
      '「디지털 취약 계층의 디지털 사이니지 사용성 향상을 위한 음성-영상 기반 UI 파이프라인 설계」',
    project: 'digital-signage',
  },
  {
    date: '2025.11',
    title: '우수논문상 (제1저자)',
    detail:
      '한국소프트웨어감정평가학회 제43회 추계학술발표대회. ' +
      '「교통 약자의 디지털 사이니지 접근성 향상을 위한 음성-영상 기반 UI 파이프라인 설계」',
    project: 'digital-signage',
  },
  {
    date: '2025.11',
    title: '우수논문상 (공동저자)',
    detail:
      '(사)융복합지식학회 2025 추계학술대회. ' +
      '「딥러닝 이미지 분석과 LLM의 연계를 통한 외국인 문화 정보 제공 웹 시스템 구현」',
    project: 'forforeigner',
  },
];

export const activities: { date: string; title: string; detail: string; project?: string }[] = [
  {
    date: '2026.11',
    title: '2026 신한대학교 앱개발 경진대회 (앱 제작 부문) 출품',
    detail: '의정부 집을 내 기준으로 S~F 티어로 매기는 앱 "집티어". 개인 참가.',
    project: 'ziptier',
  },
  {
    date: '2026.08',
    title: 'LG Aimers 9기 × LG 트윈스 해커톤 참가',
    detail: 'KBO 투구 데이터로 다음 투구의 제구 성공 확률을 예측하는 대회. 개인 참가.',
  },
  {
    date: '2026.07',
    title: 'SCPC 2026 AI 챌린지 본선 진출',
    detail: '외부 LLM을 쓸 수 없는 조건에서 구조화 JSON 응답 하네스를 구현.',
  },
  {
    date: '2026.07',
    title: '2026 디지털 경진대회 SW부문 참가',
    detail: 'AI 옷장 비서 "D.O.T". 5인 팀에서 에이전트 파이프라인과 로컬 매칭을 담당.',
  },
];

export const certificates: { title: string; detail: string }[] = [
  { title: '정보처리기사', detail: '필기 합격, 실기 준비 중' },
];
