# AI 에이전트로 프로덕션 풀스택 출시하기

인프런 강의 자료와 학생용 정적 자료실을 관리하는 저장소입니다.

## 학생용 사이트

- GitHub Pages: https://inflearn-basilry.github.io/202609_AI_Fullstack_Deploy_Course/
- main에 푸시하면 네 가지 검사 후 dist/만 배포합니다.
- 공개 자료는 슬라이드·커리큘럼·디자인 시스템이며 스크립트·발표자 노트는 제외합니다.

## 파일과 원본 관리

- dist/index.html: 챕터만 접고 펼치는 자료실. 강의별 슬라이드 열기와 수강 완료 체크.
- dist/materials/: 대본·녹화 지시·스크립트 URL을 제외한 공개 HTML·JS.
- .private/instructor/site/: 에셋을 포함한 로컬 강사용 자료실. 대본과 발표자 노트 원본 보존.
- .private/instructor/: 제작 메모와 기존 production 원본도 보존.
- .gitignore: .private/와 production/을 Git 추적에서 제외.
- docs/: 경쟁 조사, 가격 전략, 제작 기록.
- .github/workflows/deploy-pages.yml: 검사 후 dist/만 배포.
- .openai/hosting.json: 기존 Sites 설정. 이번 작업에서는 변경하지 않음.

비공개 원본은 로컬에만 존재하며 새 clone에 포함되지 않습니다. 별도 안전한 백업이 필요합니다. 강제 추가하거나 저장소 전체를 웹 서버로 제공하지 마세요.

과거 원격 Git 이력은 재작성하지 않았으므로 이미 공개한 원문이나 복사본은 남을 수 있습니다. 아직 푸시하지 않았던 새 대본은 새 커밋 이력에서도 제외했습니다. OAuth는 도입하지 않았습니다.

## 현재 슬라이드

학생용 자료실·커리큘럼·디자인 가이드·전체 75장에 Linen Blue v1을 적용했습니다. 공통 색상은 dist/assets/course-theme.css, Pretendard Variable은 로컬 WOFF2와 OFL 라이선스로 제공합니다. 작은 화면에서는 슬라이드를 세로로 읽고, 데스크톱과 전체화면에서는 16:9 구성을 유지합니다.

코드·번호·영문 라벨은 D2Coding을 사용합니다. 일반/굵은 WOFF2 원본은 [네이버 공식 저장소](https://github.com/naver/d2-coding-font/tree/9d6f0559691ebe670a23fbf7b72a8dc42362f1fb/site/fonts)에서 가져왔으며 글꼴을 수정하지 않았습니다. dist/assets/fonts/D2Coding-OFL.txt에 라이선스를 함께 제공합니다. 제목·본문 Pretendard와 기존 텍스트는 유지합니다.

제작된 0-0~0-6은 v0.2 편성 기준의 7개 강의·75장·목표 편집 분량 56분입니다. v0.4 커리큘럼과 수업 구성·시간이 다르며 재편집은 별도 작업입니다. 0-2는 목표 화면·합성 예시이고 0-6의 starter·doctor는 구현·배포가 필요한 실습 계약입니다.

방향키 이동과 F 전체화면, 제목 우측의 슬라이드 열기·수강 완료를 유지합니다. 스크립트 버튼과 N 발표자 노트 기능은 공개 화면에서 제거했습니다.

수강 완료는 기존 강의 번호별 localStorage 키를 유지하며 같은 브라우저·출처의 자료실과 슬라이드에서 공유합니다. 로그인이나 기기 간 동기화는 아닙니다.

## 최신 커리큘럼

- [AI 풀스택 출시 실전 v0.4](dist/materials/2026-09-07_AI_풀스택_서비스_출시_강의_커리큘럼_v0.4.html)
- 본편 9개 섹션 46강·7시간 38분, Orca 선택 부록 3강·30분. 제작 추정치이며 실습 시간은 별도입니다.
- 개발 기초와 사업화는 독립 과정입니다. 본편에서는 필요한 시점에 짧게 복습합니다.
- v0.2·v0.3 HTML은 v0.4로 이동합니다. 과거 Markdown은 이전 기획 기록입니다.

독립 과정은 기존 원격 작업의 상위 /Users/basilry/Projects/02030_inflearn 루트에서 관리하며 이 저장소·학생용 배포에 포함하지 않습니다.

- 2026-09-07_개발_기초_독립_커리큘럼_v1.0.md
- 2026-09-07_출시_이후_사업화_독립_커리큘럼_v1.0.md
- 2026-09-07_강의_3개_과정_구성안.md

## 확인과 운영

- node tests/validate-orientation.cjs
- node tests/validate-section00.cjs
- node tests/validate-public-boundary.cjs
- node tests/validate-linen-theme.cjs
- 공개 미리보기: python -m http.server 8765 --bind 127.0.0.1 --directory dist
- 강사용 로컬 미리보기: python -m http.server 8766 --bind 127.0.0.1 --directory .private/instructor/site

HTML의 noindex와 robots.txt는 접근 제어가 아닙니다. 프로젝트 경로의 robots.txt는 도메인 루트 정책으로 작동하지 않습니다.

- [경쟁 강의 조사 및 가격 전략](docs/2026-09-08_경쟁강의_및_가격전략.md)
- [섹션 00 제작·수강 기록](docs/2026-09-08_섹션00_자료와_수강기록.md)
