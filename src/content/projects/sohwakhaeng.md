---
title: 소확행 감정 분류 모델
summary: 한국어 문장의 감정을 6가지로 분류하는 KoELECTRA 모델을 파인튜닝하고, 경량화해서 모바일 앱 안에서 돌아가게 만들었습니다. 스스로 찾은 data leakage로 성능 수치를 낮춰 정정했습니다.
period: 2025 하반기
kind: 팀 프로젝트
role: AI 전담 (데이터 처리, 파인튜닝, 양자화, 앱 탑재용 변환)
stack:
  - PyTorch
  - HuggingFace Transformers
  - KoELECTRA
  - ONNX Runtime
  - TFLite
  - Flutter
highlights:
  - value: '0.7265'
    label: Macro F1 (누수 정정 후 held-out 기준)
  - value: 7회
    label: 하이퍼파라미터 실험 (dropout, scheduler, loss 조합)
  - value: 4단계
    label: PyTorch → ONNX → INT8 양자화 → TFLite
github: https://github.com/novoodi/KOELECTRATLET-ONNX
order: 7
---

## 풀려던 문제

사용자가 쓴 글에서 감정을 바로 분류하고 싶었습니다. 다만 개인적인 글이므로 서버로 보내지 않고, 인터넷이 없어도 동작하도록 **기기 안에서** 추론해야 했습니다.

## 내가 한 일

### 모델 학습

- AI-Hub 한국어 감정 대화 데이터셋으로 KoELECTRA-small-v3를 6감정(분노, 슬픔, 불안, 상처, 당황, 기쁨) 분류기로 파인튜닝했습니다.
- PyTorch 학습 파이프라인을 직접 구현하고, dropout, 스케줄러, 손실 함수 조합을 바꿔 가며 7회 실험했습니다. 분류기 dropout 0.3, linear 스케줄러, 클래스 가중치 조합이 가장 좋았습니다.

### 성능 수치 정정

처음에는 Macro F1 0.7584로 보고했습니다. 그런데 early stopping에 쓴 검증셋으로 최종 성능까지 재고 있었다는 것을 나중에 스스로 발견했습니다. 모델 선택에 쓴 데이터로 성능을 재면 수치가 실제보다 좋게 나옵니다.

held-out 테스트셋을 따로 분리하고, 시드를 고정하고, 층화 분할을 적용해 다시 측정했습니다. 결과는 **Macro F1 0.7265**였고, 낮아진 수치로 다시 보고하면서 과정을 저장소 README에 기록했습니다.

### 경량화와 배포

- PyTorch → ONNX 변환 → INT8 동적 양자화 → TFLite 변환의 4단계 파이프라인을 만들었습니다.
- 변환 단계마다 출력이 원본과 일치하는지 검증하고 추론 속도를 측정했습니다.
- 최종 모델은 팀이 만든 Flutter 앱 "소확행"에 온디바이스로 들어갔습니다.
