// Public slide data only. Instructor originals are excluded from Git and deployment.
window.ORIENTATION = {
  "id": "0-6",
  "title": "Codex 앱·VS Code 연결과 환경 진단",
  "duration": "10:00",
  "description": "앱과 VS Code에서 같은 프로젝트와 브랜치를 열었는지 확인하고, 코드 복제·의존성 설치·DB 연결·테스트 순서로 실습 환경을 진단합니다. 강의용 starter와 pnpm doctor가 구현·배포된 뒤 실습할 수 있는 12장·10분 강의 자료입니다.",
  "sources": [
    {
      "title": "OpenAI — Quickstart: 데스크톱 로그인·폴더 선택·Codex 시작 (2026-09-08 확인)",
      "url": "https://learn.chatgpt.com/docs/quickstart"
    },
    {
      "title": "OpenAI — ChatGPT desktop app: 현재 데스크톱 앱 명칭 (2026-09-08 확인)",
      "url": "https://learn.chatgpt.com/docs/app"
    },
    {
      "title": "OpenAI — Codex IDE extension: VS Code 확장과 사이드바 (2026-09-08 확인)",
      "url": "https://learn.chatgpt.com/docs/codex/ide"
    },
    {
      "title": "OpenAI — Projects and chats: 로컬 폴더·IDE 워크스페이스·worktree (2026-09-08 확인)",
      "url": "https://learn.chatgpt.com/docs/projects"
    },
    {
      "title": "OpenAI — Agent approvals & security: 샌드박스와 승인 정책 (2026-09-08 확인)",
      "url": "https://learn.chatgpt.com/docs/agent-approvals-security"
    },
    {
      "title": "OpenAI — Integrated terminal: 프로젝트·worktree별 터미널 (2026-09-08 확인)",
      "url": "https://learn.chatgpt.com/docs/integrated-terminal"
    },
    {
      "title": "OpenAI — Windows app: 편집기 선택·에이전트와 터미널 환경 구분 (2026-09-08 확인)",
      "url": "https://learn.chatgpt.com/docs/windows/windows-app"
    },
    {
      "title": "OpenAI — Windows sandbox: 네이티브 실행과 권한 경계 (2026-09-08 확인)",
      "url": "https://learn.chatgpt.com/docs/windows/windows-sandbox"
    }
  ],
  "deckUrl": "2026-09-08_0-6_Codex_앱_VS_Code_연결과_환경_진단_강의슬라이드_v0.1.html",
  "slides": [
    {
      "label": "START / 0-6",
      "title": "프로젝트의 실습 환경 확인 항목",
      "time": "00:00–00:40",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">실습 환경 진단 / 확인할 항목</p><h2>프로젝트의<br><em>실습 환경 확인 항목</em></h2><div class=\"check-grid\"><p><b>01</b> 앱·VS Code의 폴더와 브랜치</p><p><b>02</b> 터미널의 Git·Node·pnpm</p><p><b>03</b> DB 연결과 기본 테스트</p><p><b>04</b> 진단 결과와 해결 기록</p></div><p class=\"footnote\">0-5 설치 완료 후 진행 · 다운로드·개인 실습 시간은 별도<br>이 자료실은 SignalDesk starter 저장소가 아닙니다. 실습에는 starter와 doctor 구현·배포가 필요합니다.</p>"
    },
    {
      "label": "01 / CLONE",
      "title": "실습 시작 코드 복제와 작업 브랜치",
      "time": "00:40–01:25",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">강의용 시작 코드(starter)를 받은 뒤 실행</p><h2>실습 시작 코드 복제와<br>작업 브랜치</h2><pre class=\"code-example\"><code>git clone --branch 00-starter \"STARTER_REPO_URL\" signal-desk\ncd signal-desk\ngit switch -c lesson/0-6\ngit status --short</code></pre><p class=\"takeaway\">URL은 <b>강사가 제공한 실제 주소</b>로 바꿉니다.</p><p class=\"footnote\">예시 기준: 00-starter 태그 · lesson/0-6 브랜치<br>STARTER_REPO_URL은 자리표시자입니다. 배포 태그와 명령은 starter README에서 확인하세요.</p>"
    },
    {
      "label": "02 / APP & PROJECT",
      "title": "Codex 로그인과 로컬 프로젝트 선택",
      "time": "01:25–02:20",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">계정 연결 후 로컬 프로젝트 선택</p><h2>Codex 로그인과<br><em>로컬 프로젝트 선택</em></h2><div class=\"project-grid\"><article><small>ACCOUNT</small><h3>로그인</h3><p>공식 앱의 계정 안내를 따라<br>직접 로그인합니다.</p></article><article><small>WORK MODE</small><h3>Codex</h3><p>코드 작업을 시작할 때<br>Codex를 선택합니다.</p></article><article><small>LOCAL FOLDER</small><h3>signal-desk</h3><p>방금 받은 프로젝트의<br>최상위 폴더를 선택합니다.</p></article></div><p class=\"footnote\">2026-09-08 공식 문서: ChatGPT 데스크톱 앱 안에서 Codex 사용<br>앱의 명칭·화면은 버전에 따라 다를 수 있습니다.</p>"
    },
    {
      "label": "03 / VS CODE",
      "title": "VS Code 폴더 열기와 Codex 확장",
      "time": "02:20–03:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">VS Code에서 같은 파일 확인</p><h2>VS Code 폴더 열기와<br>Codex 확장</h2><table class=\"lesson-table\"><thead><tr><th>연결 방식</th><th>확인할 것</th></tr></thead><tbody><tr><td>앱 → VS Code로 폴더 열기</td><td>앱 작업 경로와 열린 폴더가 같은가?</td></tr><tr><td>VS Code의 Codex 확장 사용</td><td>공식 확장 설치·로그인·워크스페이스 선택</td></tr><tr><td>두 곳에서 코드 확인</td><td>README · Git 루트 · 현재 브랜치</td></tr></tbody></table><p class=\"takeaway\">Codex 확장을 설치하면 <b>VS Code 안에서도 Codex를 사용할 수 있습니다.</b></p>"
    },
    {
      "label": "04 / PERMISSIONS",
      "title": "실습 폴더의 작업 권한과 승인 조건",
      "time": "03:10–04:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">0-3·0-4에서 정한 권한과 승인 기준 적용</p><h2>실습 폴더의 작업 권한과<br><em>승인 조건</em></h2><div class=\"check-grid\"><p><b>PATH</b> 쓰기 대상은 실습 폴더인가?</p><p><b>COMMAND</b> 어떤 명령을 실행하는가?</p><p><b>NETWORK</b> 어느 서버에 접속하는가?</p><p><b>SECRET</b> 비밀 값이 출력되는가?</p></div><p class=\"takeaway\">샌드박스는 <b>실행 범위</b>, 승인 정책은 <b>확인이 필요한 시점</b>을 정합니다.</p><p class=\"footnote\">계정·조직 정책·앱 버전에 따라 승인 방식이 다릅니다. 현재 작업에 적용된 권한을 확인하세요.</p>"
    },
    {
      "label": "05 / TERMINAL",
      "title": "앱과 VS Code의 작업 환경 비교",
      "time": "04:00–04:55",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">앱 터미널·VS Code 터미널에서 비교</p><h2>앱과 VS Code의<br>작업 환경 비교</h2><pre class=\"code-example\"><code>git rev-parse --show-toplevel\ngit branch --show-current\ngit status --short\ngit --version\nnode --version\npnpm --version</code></pre><p class=\"takeaway\">버전은 starter의 <b>.nvmrc · packageManager</b>와 대조합니다.</p><p class=\"footnote\">Windows: 에이전트 실행 환경과 터미널 종류는 별도 설정입니다.<br>PowerShell과 WSL의 설치·경로를 섞지 마세요.</p>"
    },
    {
      "label": "06 / INSTALL",
      "title": "정해진 버전과 잠금 파일로 설치",
      "time": "04:55–05:45",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">코드 복제 후 의존성 설치</p><h2>정해진 버전과<br><em>잠금 파일로 설치</em></h2><pre class=\"code-example\"><code>pnpm run\npnpm install --frozen-lockfile\ngit status --short</code></pre><div class=\"check-grid\"><p><b>01</b> package.json과 lockfile 확인</p><p><b>02</b> 설치 종료 코드·첫 오류 확인</p></div><p class=\"footnote\">pnpm run은 제공된 스크립트 목록 확인용입니다.<br>lockfile 오류가 나면 버전과 시작 태그를 확인하고 배포 자료와 일치하는지 비교합니다.</p>"
    },
    {
      "label": "07 / DATABASE",
      "title": "mock 설정과 실습 DB 연결 확인",
      "time": "05:45–06:40",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">의존성 설치 후 DB 연결 / starter에 제공할 명령 예시</p><h2>mock 설정과<br>실습 DB 연결 확인</h2><pre class=\"code-example\"><code>docker compose up -d db\ndocker compose ps\npnpm db:migrate\npnpm db:check</code></pre><p class=\"takeaway\"><b>.env.example을 .env로 복사</b>하고 mock 모드를 확인합니다.</p><p class=\"footnote\">새 .env가 없을 때만 복사 · 기존 값 보존 · .env의 Git 제외 여부 확인<br>db 서비스·db:migrate·db:check는 강의용 예시입니다. 실제 README와 일치할 때만 실행하세요.</p>"
    },
    {
      "label": "08 / TEST & DOCTOR",
      "title": "기본 테스트와 환경 진단 결과 확인",
      "time": "06:40–07:40",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">DB 연결 후 테스트 / starter에 구현해 제공할 명령</p><h2>기본 테스트와<br><em>환경 진단 결과 확인</em></h2><pre class=\"code-example\"><code>pnpm test:env\npnpm doctor</code></pre><div class=\"check-grid\"><p><b>TEST</b> 기본 실행·DB·mock 동작 확인</p><p><b>DOCTOR</b> 경로·버전·설정·연결 점검</p></div><p class=\"takeaway\"><b>pnpm doctor는 pnpm 기본 명령이 아닙니다.</b></p><p class=\"footnote\">package.json의 doctor 스크립트와 진단 구현이 있어야 실행됩니다.<br>필수 항목 실패·건너뜀·미실행은 통과로 처리하지 않습니다.</p>"
    },
    {
      "label": "09 / FAILURE ROUTES",
      "title": "처음 실패한 단계의 원인 확인",
      "time": "07:40–08:40",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">증상별 확인 항목과 조치</p><h2>처음 실패한 단계의<br>원인 확인</h2><table class=\"lesson-table\"><thead><tr><th>실패 지점</th><th>먼저 볼 것</th><th>다음 행동</th></tr></thead><tbody><tr><td>Git·Node·pnpm 인식 실패</td><td>실행 환경 · 명령 경로</td><td>새 터미널에서 환경·버전 비교</td></tr><tr><td>설치·스크립트 실패</td><td>첫 오류 · 시작 태그 · scripts</td><td>경로·배포 파일·네트워크 확인</td></tr><tr><td>DB 연결·인증 실패</td><td>실행 상태 · 대상 · 오류 종류</td><td>연결 거부와 인증 실패 구분</td></tr></tbody></table><p class=\"takeaway\">한 항목을 고친 뒤 <b>실패한 검사부터 다시 실행하고 전체 진단도 확인</b>합니다.</p>"
    },
    {
      "label": "10 / ASK FOR A DIAGNOSIS",
      "title": "실행 명령과 오류를 포함한 진단 요청",
      "time": "08:40–09:20",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">복사해서 쓰는 환경 진단 요청</p><h2>실행 명령과 오류를<br><em>포함한 진단 요청</em></h2><pre class=\"code-example\"><code>목표: 이 starter의 환경 오류를 진단해 줘.\n현재 폴더·브랜치·실행 환경과 README를 먼저 확인해.\n내가 실행한 명령: [명령]\n첫 오류와 종료 코드: [비밀 값을 지운 내용]\n코드·설정 변경이나 설치는 아직 하지 마.\n원인 가설, 근거, 다음 확인 명령을 정리해 줘.</code></pre><p class=\"takeaway\">AI가 사용한 <b>경로·명령·출력</b>을 직접 대조합니다.</p>"
    },
    {
      "label": "FINISH / EVIDENCE → 1-1",
      "title": "실습 환경의 진단 결과 기록",
      "time": "09:20–10:00",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">섹션 0에서 작성할 환경 진단 기록</p><h2>실습 환경의<br>진단 결과 기록</h2><div class=\"check-grid\"><p><b>CONTEXT</b> OS · 셸 · 브랜치 · 커밋</p><p><b>VERSIONS</b> Node · pnpm · Git 버전</p><p><b>RESULT</b> DB · 테스트 · doctor 결과</p><p><b>RECOVERY</b> 실패 원인 · 조치 · 재검사</p></div><p class=\"takeaway\">다음 1-1. <b>기능보다 사용자 행동부터 정하기</b></p><p class=\"footnote\">ENVIRONMENT_CHECKLIST.md에 날짜·실행 명령·종료 코드·미해결 항목 기록<br>API 키·접속 비밀번호·개인 경로는 공유 자료에서 제외합니다.</p>"
    }
  ]
};
