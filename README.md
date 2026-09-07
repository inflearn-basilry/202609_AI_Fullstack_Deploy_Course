# AI 에이전트로 프로덕션 풀스택 출시하기

인프런 강의 자료와 학생용 정적 자료실을 관리하는 저장소입니다.

## 학생용 사이트

- GitHub Pages: https://inflearn-basilry.github.io/202609_AI_Fullstack_Deploy_Course/
- `main` 브랜치에 변경사항을 올리면 GitHub Actions가 `dist/`를 자동 배포합니다.

## 구조

- `dist/index.html`: 학생용 자료실 첫 화면
- `dist/materials/`: 학생용 강의 슬라이드, 커리큘럼, 디자인 시스템
- `production/`: 제작용 스크립트·스토리보드. GitHub Pages 배포 대상에서 제외됩니다. 공개 저장소에서는 파일 자체가 공개될 수 있습니다.
- `.github/workflows/deploy-pages.yml`: GitHub Pages 자동 배포 설정
- `.openai/hosting.json`: 기존 ChatGPT Sites 배포 설정

## 현재 공개 강의

- 0-1. 이 강의가 해결하는 문제

강의 슬라이드는 방향키로 이동하며 `N` 키로 발표자 노트, `F` 키로 전체화면을 열 수 있습니다.

## 최신 커리큘럼

- [커리큘럼 v0.3](dist/materials/2026-09-07_AI_풀스택_서비스_출시_강의_커리큘럼_v0.3.html)
- 본편 17개 섹션 98강 · 18시간 6분, 선택 부록 12강 · 2시간 16분. 모두 제작 추정치입니다.
- 강사 소개·개발 기초 → 서비스 개발·배포 → 마케팅·사업신청·투자유치 개요로 구성합니다.
- v0.2 HTML 주소는 최신 v0.3으로 이동하며 기존 섹션 링크도 대응합니다. v0.1·v0.2 Markdown은 과거 기획 기록입니다.
- 커리큘럼의 계획과 실제 제공 중인 강의 자료를 구분합니다. 강사의 구체 경력·사업신청 사례는 본인이 제공한 자료로 제작합니다.
