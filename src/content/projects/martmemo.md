---
title: 마트메모 가격 데이터 파이프라인
summary: 한국소비자원 참가격 공공데이터를 GitHub Actions가 매주 받아 JSON으로 정리하고 GitHub Pages로 게시합니다. 마트메모 앱은 서버 없이 이 파일만 내려받습니다.
period: '2026'
kind: 개인 프로젝트
role: 데이터 수집 스크립트, 자동화 워크플로, 게시 구조 설계
stack:
  - Python
  - GitHub Actions
  - GitHub Pages
  - 공공데이터포털 API
highlights:
  - value: 주 1회
    label: GitHub Actions 자동 동기화
  - value: 0원
    label: 서버 없이 정적 파일로 운영
  - value: 약 3MB
    label: 조사일 하나의 전체 가격 데이터
github: https://github.com/novoodi/martmemo-data
demo: https://novoodi.github.io/martmemo-data/data/index.json
order: 8
---

## 무엇을 하는가

마트메모 앱이 쓰는 생필품 가격 데이터를 준비하는 부분입니다. 원본은 공공데이터포털이 제공하는 한국소비자원 참가격 가격 정보 API입니다.

이 API는 조사일 하나를 받는 데 약 604회 호출이 필요하고 일일 한도가 2,000회입니다. 그래서 앱이 직접 호출하지 않고, **미리 받아서 정적 파일로 게시**하는 구조로 만들었습니다.

## 구조

```
공공데이터포털 API
   │  GitHub Actions (매주 토요일 새벽)
   ▼
Python 스크립트가 JSON으로 정리 → 저장소에 커밋
   ▼
GitHub Pages로 게시
   ▼
마트메모 앱은 이 파일만 내려받음
```

- 앱은 API를 직접 호출하지 않고, 사용자 데이터도 이 저장소로 오지 않습니다.
- 인증키는 저장소 Secrets에만 있고 커밋이나 로그에 남지 않습니다.
- 수집 스크립트는 Python 표준 라이브러리만 사용합니다.

## 게시하는 파일

| 파일 | 내용 | 크기 |
|---|---|---|
| `data/index.json` | 판매점·상품 사전, 보유 조사일 목록, 최신 조사일 | 약 200KB |
| `data/prices/YYYYMMDD.json` | 조사일 하나의 전체 가격 | 약 3MB |
| `data/trend.json` | 상품별·조사일별·업태별 중앙값 (가격 추이용) | 작음 |

## 한계

- 원본 조사는 격주 금요일에 이뤄집니다.
- API가 2026년 6월 12일 이후 조사분만 제공하므로, 가격 이력은 이 저장소에 쌓인 만큼만 있습니다.
- 한 번 실행에서 받을 조사일 수를 제한해 일일 호출 한도 안에서 동작하게 했습니다.
