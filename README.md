# AI 에이전트로 프로덕션 풀스택 출시하기

인프런 강의 자료와 학생용 정적 자료실을 관리하는 저장소입니다.

## 학생용 사이트

- GitHub Pages: https://inflearn-basilry.github.io/202609_AI_Fullstack_Deploy_Course/
- `main` 브랜치에 변경사항을 올리면 GitHub Actions가 `dist/`를 자동 배포합니다.

## 구조

- `dist/index.html`: 학생용 자료실 첫 화면
- `dist/materials/`: 강의 슬라이드, 스크립트·스토리보드, 커리큘럼, 디자인 시스템
- `.github/workflows/deploy-pages.yml`: GitHub Pages 자동 배포 설정
- `.openai/hosting.json`: 기존 ChatGPT Sites 배포 설정

## 현재 공개 강의

- 0-1. 이 강의가 해결하는 문제

강의 슬라이드는 방향키로 이동하며 `N` 키로 발표자 노트, `F` 키로 전체화면을 열 수 있습니다.
