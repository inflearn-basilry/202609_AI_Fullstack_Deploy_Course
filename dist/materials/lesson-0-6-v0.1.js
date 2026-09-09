// Public slide data only. Instructor originals are excluded from Git and deployment.
window.ORIENTATION = {
  "id": "0-6",
  "title": "Codex 앱·VS Code 연결과 환경 진단",
  "duration": "10:00",
  "description": "같은 프로젝트와 브랜치를 앱·VS Code에서 확인하고, clone → install → DB → test 순서로 실습 환경을 진단합니다. 강의용 starter와 pnpm doctor 구현·배포를 전제로 한 12장·10분 스크립트입니다.",
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
      "title": "설치한 도구가 이 프로젝트에서 동작하는지",
      "time": "00:00–00:40",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">오늘 끝낼 결과 / 실습 환경 진단</p><h2>설치는 끝났습니다.<br><em>이 프로젝트에서 확인해 봅시다.</em></h2><div class=\"check-grid\"><p><b>01</b> 앱·VS Code의 폴더와 브랜치</p><p><b>02</b> 터미널의 Git·Node·pnpm</p><p><b>03</b> DB 연결과 기본 테스트</p><p><b>04</b> 진단 결과와 해결 기록</p></div><p class=\"footnote\">0-5 설치 완료 후 진행 · 다운로드·개인 실습 시간은 별도<br>현재 자료실과 SignalDesk starter는 별도 저장소입니다. starter·doctor 배포 준비가 필요합니다.</p>"
    },
    {
      "label": "01 / CLONE",
      "title": "강의용 시작점과 내 작업 브랜치",
      "time": "00:40–01:25",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">강의용 starter가 배포된 뒤 실행</p><h2>시작점을 받은 뒤<br>내 브랜치를 만듭니다.</h2><pre class=\"code-example\"><code>git clone --branch 00-starter \"STARTER_REPO_URL\" signal-desk\ncd signal-desk\ngit switch -c lesson/0-6\ngit status --short</code></pre><p class=\"takeaway\">URL은 <b>강사가 제공한 실제 주소</b>로 바꿉니다.</p><p class=\"footnote\">예시 계약: 00-starter 태그 · lesson/0-6 브랜치<br>STARTER_REPO_URL은 자리표시자입니다. 배포 태그와 명령은 starter README에서 확인하세요.</p>"
    },
    {
      "label": "02 / APP & PROJECT",
      "title": "로그인한 뒤 로컬 폴더를 지정",
      "time": "01:25–02:20",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">계정 연결 → 코드 작업 → 로컬 프로젝트</p><h2>Codex가 작업할<br><em>폴더를 직접 지정합니다.</em></h2><div class=\"project-grid\"><article><small>ACCOUNT</small><h3>로그인</h3><p>공식 앱의 계정 안내를 따라<br>직접 로그인합니다.</p></article><article><small>WORK MODE</small><h3>Codex</h3><p>코드 작업을 시작할 때<br>Codex를 선택합니다.</p></article><article><small>LOCAL FOLDER</small><h3>signal-desk</h3><p>방금 받은 프로젝트의<br>루트 폴더를 연결합니다.</p></article></div><p class=\"footnote\">2026-09-08 공식 문서: ChatGPT 데스크톱 앱 안에서 Codex 사용<br>앱의 명칭·화면은 버전에 따라 다를 수 있습니다.</p>"
    },
    {
      "label": "03 / VS CODE",
      "title": "폴더 열기와 IDE 확장은 별도",
      "time": "02:20–03:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">VS Code에서 같은 파일 확인</p><h2>같은 폴더를 열고,<br>필요하면 확장을 연결합니다.</h2><table class=\"lesson-table\"><thead><tr><th>연결 방식</th><th>확인할 것</th></tr></thead><tbody><tr><td>앱 → VS Code로 폴더 열기</td><td>앱 작업 경로와 열린 폴더가 같은가?</td></tr><tr><td>VS Code의 Codex 확장 사용</td><td>공식 확장 설치·로그인·워크스페이스 선택</td></tr><tr><td>두 곳에서 코드 확인</td><td>README · Git 루트 · 현재 브랜치</td></tr></tbody></table><p class=\"takeaway\">VS Code 확장은 <b>편집기 안에서 Codex를 쓰는 별도 진입점</b>입니다.</p>"
    },
    {
      "label": "04 / PERMISSIONS",
      "title": "작업 범위와 승인 조건을 확인",
      "time": "03:10–04:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">0-3·0-4의 책임 경계를 실제 설정에 적용</p><h2>무엇을 할 수 있고,<br><em>언제 승인이 필요한지 확인합니다.</em></h2><div class=\"check-grid\"><p><b>PATH</b> 쓰기 대상은 실습 폴더인가?</p><p><b>COMMAND</b> 어떤 명령을 실행하는가?</p><p><b>NETWORK</b> 어느 서버에 접속하는가?</p><p><b>SECRET</b> 비밀 값이 출력되는가?</p></div><p class=\"takeaway\">샌드박스는 <b>실행 범위</b>, 승인 정책은 <b>확인이 필요한 시점</b>을 정합니다.</p><p class=\"footnote\">계정·조직 정책·앱 버전에 따라 승인 방식이 다릅니다. 현재 작업에 적용된 권한을 확인하세요.</p>"
    },
    {
      "label": "05 / TERMINAL",
      "title": "앱의 실행 환경에서도 도구가 보이는가",
      "time": "04:00–04:55",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">앱 터미널·VS Code 터미널에서 비교</p><h2>같은 폴더,<br>같은 브랜치와 도구인가요?</h2><pre class=\"code-example\"><code>git rev-parse --show-toplevel\ngit branch --show-current\ngit status --short\ngit --version\nnode --version\npnpm --version</code></pre><p class=\"takeaway\">버전은 starter의 <b>.nvmrc · packageManager</b>와 대조합니다.</p><p class=\"footnote\">Windows: 에이전트 실행 환경과 터미널 종류는 별도 설정입니다.<br>PowerShell과 WSL의 설치·경로를 섞지 마세요.</p>"
    },
    {
      "label": "06 / INSTALL",
      "title": "버전을 맞춘 뒤 잠금 파일대로 설치",
      "time": "04:55–05:45",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">clone → install</p><h2>설치할 내용은<br><em>저장소가 정해 둡니다.</em></h2><pre class=\"code-example\"><code>pnpm run\npnpm install --frozen-lockfile\ngit status --short</code></pre><div class=\"check-grid\"><p><b>01</b> package.json과 lockfile 확인</p><p><b>02</b> 설치 종료 코드·첫 오류 확인</p></div><p class=\"footnote\">pnpm run은 제공된 스크립트 목록 확인용입니다.<br>lockfile 오류가 나면 버전·시작 태그를 확인하고 배포 자료의 정합성을 점검합니다.</p>"
    },
    {
      "label": "07 / DATABASE",
      "title": "mock 설정과 실습 DB 연결",
      "time": "05:45–06:40",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">install → DB / 아래는 starter에 제공할 명령 계약</p><h2>실습용 DB를 준비하고<br>연결을 확인합니다.</h2><pre class=\"code-example\"><code>docker compose up -d db\ndocker compose ps\npnpm db:migrate\npnpm db:check</code></pre><p class=\"takeaway\">먼저 <b>.env.example → .env</b>를 복사하고 mock 모드를 확인합니다.</p><p class=\"footnote\">새 .env가 없을 때만 복사 · 기존 값 보존 · .env의 Git 제외 여부 확인<br>db 서비스·db:migrate·db:check는 강의용 예시입니다. 실제 README와 일치할 때만 실행하세요.</p>"
    },
    {
      "label": "08 / TEST & DOCTOR",
      "title": "기본 테스트와 환경 진단 실행",
      "time": "06:40–07:40",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">DB → test / starter에 구현해 제공할 스크립트</p><h2>테스트와 진단의<br><em>실제 결과를 확인합니다.</em></h2><pre class=\"code-example\"><code>pnpm test:env\npnpm doctor</code></pre><div class=\"check-grid\"><p><b>TEST</b> 기본 실행·DB·mock 동작 확인</p><p><b>DOCTOR</b> 경로·버전·설정·연결 점검</p></div><p class=\"takeaway\"><b>pnpm doctor는 pnpm 기본 명령이 아닙니다.</b></p><p class=\"footnote\">package.json의 doctor 스크립트와 진단 구현이 있어야 실행됩니다.<br>필수 항목 실패·건너뜀·미실행은 통과로 처리하지 않습니다.</p>"
    },
    {
      "label": "09 / FAILURE ROUTES",
      "title": "처음 실패한 단계에서 갈라서 확인",
      "time": "07:40–08:40",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">증상 → 확인 → 다음 행동</p><h2>첫 실패를 좁히면<br>다음 행동이 보입니다.</h2><table class=\"lesson-table\"><thead><tr><th>실패 지점</th><th>먼저 볼 것</th><th>다음 행동</th></tr></thead><tbody><tr><td>Git·Node·pnpm 인식 실패</td><td>실행 환경 · 명령 경로</td><td>새 터미널 → 환경·버전 대조</td></tr><tr><td>설치·스크립트 실패</td><td>첫 오류 · 시작 태그 · scripts</td><td>경로·배포 파일·네트워크 확인</td></tr><tr><td>DB 연결·인증 실패</td><td>실행 상태 · 대상 · 오류 종류</td><td>연결 거부와 인증 실패 구분</td></tr></tbody></table><p class=\"takeaway\">한 항목을 고친 뒤 <b>실패한 검사 → 전체 진단</b> 순서로 다시 확인합니다.</p>"
    },
    {
      "label": "10 / ASK FOR A DIAGNOSIS",
      "title": "AI에게 근거와 다음 확인을 요청",
      "time": "08:40–09:20",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">복사해서 쓰는 환경 진단 요청</p><h2>“안 돼요”에<br><em>확인할 근거를 더합니다.</em></h2><pre class=\"code-example\"><code>목표: 이 starter의 환경 오류를 진단해 줘.\n현재 폴더·브랜치·실행 환경과 README를 먼저 확인해.\n내가 실행한 명령: [명령]\n첫 오류와 종료 코드: [비밀 값을 지운 내용]\n코드·설정 변경이나 설치는 아직 하지 마.\n원인 가설, 근거, 다음 확인 명령을 정리해 줘.</code></pre><p class=\"takeaway\">AI가 사용한 <b>경로·명령·출력</b>을 직접 대조합니다.</p>"
    },
    {
      "label": "FINISH / EVIDENCE → 1-1",
      "title": "완료 증거를 남기고 사용자 행동으로",
      "time": "09:20–10:00",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">섹션 0의 마지막 산출물</p><h2>환경 진단 결과를<br>기록하고 넘어갑니다.</h2><div class=\"check-grid\"><p><b>CONTEXT</b> OS · 셸 · 브랜치 · 커밋</p><p><b>VERSIONS</b> Node · pnpm · Git 버전</p><p><b>RESULT</b> DB · 테스트 · doctor 결과</p><p><b>RECOVERY</b> 실패 원인 · 해결 · 재검사</p></div><p class=\"takeaway\">다음 1-1. <b>기능보다 사용자 행동부터 정하기</b></p><p class=\"footnote\">ENVIRONMENT_CHECKLIST.md에 날짜·실행 명령·종료 코드·미해결 항목 기록<br>API 키·접속 비밀번호·개인 경로는 공유 자료에서 제외합니다.</p>"
    }
  ]
};
