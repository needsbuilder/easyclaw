<p align="center">
  <img src="resources/icon.png" width="120" alt="EasyClaw Logo">
</p>

<h1 align="center">EasyClaw</h1>

<p align="center">
  <strong>OpenClaw AI 에이전트를 원클릭으로 설치하세요</strong>
</p>

<p align="center">
  <a href="README.md">English</a> · <a href="README.ja.md">日本語</a> · <a href="README.zh.md">中文</a>
</p>

<p align="center">
  <a href="https://github.com/ybgwon96/easyclaw/releases/latest"><img src="https://img.shields.io/github/v/release/ybgwon96/easyclaw?color=f97316&style=flat-square" alt="Release"></a>
  <a href="https://github.com/ybgwon96/easyclaw/releases"><img src="https://img.shields.io/github/downloads/ybgwon96/easyclaw/total?color=34d399&style=flat-square" alt="Downloads"></a>
  <img src="https://img.shields.io/badge/platform-macOS%20%7C%20Windows-blue?style=flat-square" alt="Platform">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-8b5cf6?style=flat-square" alt="License"></a>
</p>

<p align="center">
  <a href="https://easyclaw.kr">홈페이지</a> · <a href="https://github.com/ybgwon96/easyclaw/releases/latest">다운로드</a> · <a href="https://open.kakao.com/o/gbBkPehi">커뮤니티</a> · <a href="https://github.com/openclaw/openclaw">OpenClaw</a>
</p>

---

<p align="center">
  <img src="docs/screenshots/welcome.png" width="270" alt="시작 화면">
  &nbsp;&nbsp;
  <img src="docs/screenshots/env-check.png" width="270" alt="환경 검사">
  &nbsp;&nbsp;
  <img src="docs/screenshots/done.png" width="270" alt="설치 완료">
</p>

## 소개

[OpenClaw](https://github.com/openclaw/openclaw) AI 에이전트를 **복잡한 터미널 작업 없이** 설치할 수 있는 데스크톱 인스톨러입니다.

**다운로드 → 실행 → API 키 입력**, 3단계면 끝.

> **참고**: EasyClaw는 OpenClaw 프로젝트와 제휴 관계가 없고 승인도 받지 않은 비공식 설치 도구입니다. 마스코트 출처와 라이선스 고지는 [NOTICE](NOTICE)에 있습니다.

## 주요 기능

- **원클릭 설치** — WSL, Node.js, OpenClaw 등 필요한 환경을 자동 감지 및 설치
- **AI 제공사 선택** — Anthropic, Google Gemini, OpenAI, MiniMax, GLM 지원
- **텔레그램 연동** — 텔레그램 봇을 통해 어디서든 AI 에이전트 사용
- **크로스 플랫폼** — macOS (Intel + Apple Silicon) / Windows 지원

## 다운로드

| OS      | 파일   | 링크                                                                                          |
| ------- | ------ | --------------------------------------------------------------------------------------------- |
| macOS   | `.dmg` | [다운로드](https://github.com/ybgwon96/easyclaw/releases/latest/download/easy-claw.dmg)       |
| Windows | `.exe` | [다운로드](https://github.com/ybgwon96/easyclaw/releases/latest/download/easy-claw-setup.exe) |

[easyclaw.kr](https://easyclaw.kr)에서도 OS에 맞는 파일이 자동으로 선택됩니다.

## Windows 보안 경고 안내

Windows 코드 서명 인증서 발급을 진행 중입니다. 현재는 설치 시 보안 경고가 나타날 수 있습니다.

> - [VirusTotal 검사 결과](https://www.virustotal.com/gui/url/800de679ba1d63c29023776989a531d27c4510666a320ae3b440c7785b2ab149) — 94개 백신 엔진에서 탐지 0건
> - 소스코드 전체 공개 — 누구나 코드를 직접 검증 가능
> - GitHub Actions CI/CD로 빌드 — 빌드 과정이 투명하게 공개

<details>
<summary><b>"Windows의 PC 보호" 경고가 나타나면</b></summary>

1. **"추가 정보"** 클릭
2. **"실행"** 클릭

</details>

## 설치·세팅 대행 🛠️

설치 중에 막히셨거나, 처음부터 끝까지 세팅을 맡기고 싶으신가요? EasyClaw 제작자가 직접 **원격 설치 대행**을 해드립니다 — 설치, API 키 설정, 텔레그램 봇 연동, 기본 사용법 안내까지. 약 40분, 회당 5만 원.

📧 [hello@needslab.ai](mailto:hello@needslab.ai) — 제목에 "EasyClaw 설치 대행"이라고 적어주세요.

## 후원하기 ☕

EasyClaw는 1인 개발자가 만들고 유지하는 무료 오픈소스입니다. 터미널과 씨름할 시간을 아끼셨다면, 커피 한 잔 후원이 다음 업데이트를 만듭니다.

**[☕ 커피 한 잔 후원하기](https://qr.kakaopay.com/281006011000066615032016)**

## 기술 스택

| 영역       | 기술                                                     |
| ---------- | -------------------------------------------------------- |
| 프레임워크 | Electron + electron-vite                                 |
| 프론트엔드 | React 19 + Tailwind CSS 4                                |
| 언어       | TypeScript                                               |
| 빌드/배포  | electron-builder + GitHub Actions                        |
| 코드 서명  | Apple Notarization (macOS) / SignPath (Windows, 진행 중) |

## 개발

```bash
npm install    # 의존성 설치
npm run dev    # 개발 모드 (electron-vite dev)
npm run build  # 타입 체크 + 빌드
npm run lint   # ESLint
npm run format # Prettier
```

플랫폼별 패키징:

```bash
npm run build:mac-local  # macOS 로컬 빌드
npm run build:win-local  # Windows 로컬 빌드
```

> **참고**: macOS 코드 서명/공증을 위해 `APPLE_ID`, `APPLE_APP_SPECIFIC_PASSWORD`, `APPLE_TEAM_ID`, `CSC_LINK`, `CSC_KEY_PASSWORD` 환경변수가 필요합니다. 없으면 서명 없이 빌드됩니다.

## 프로젝트 구조

```
src/
├── main/             # Main process (Node.js)
│   ├── services/     # 환경 체크, 설치, 온보딩, 게이트웨이
│   └── ipc-handlers  # IPC 채널 라우터
├── preload/          # contextBridge (IPC API 노출)
└── renderer/         # React UI (7단계 위자드)
api/                  # Vercel 서버리스 함수
docs/                 # 랜딩 페이지 (easyclaw.kr)
```

## 기여하기

기여를 환영합니다! [CONTRIBUTING.md](CONTRIBUTING.md)를 참고해주세요.

## 크레딧

- EasyClaw가 설치하는 [OpenClaw](https://github.com/openclaw/openclaw)는 [openclaw](https://github.com/openclaw) 팀이 개발한 별도의 오픈소스 프로젝트입니다(MIT License). EasyClaw는 OpenClaw 팀이 만든 것이 아닙니다.
- EasyClaw 마스코트는 OpenClaw 마스코트 그림(MIT 라이선스인 [openclaw/openclaw](https://github.com/openclaw/openclaw) 저장소의 [`ui/public/favicon.svg`](https://github.com/openclaw/openclaw/blob/02576615cb4c1382abf1d0aee10ed10f1f676e78/ui/public/favicon.svg))을 변형한 것입니다. 원본 출처와 라이선스 전문은 [NOTICE](NOTICE)에 있습니다.

## 라이선스

[MIT](LICENSE)
