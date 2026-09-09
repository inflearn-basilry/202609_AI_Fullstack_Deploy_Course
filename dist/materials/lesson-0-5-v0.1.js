// Public slide data only. Instructor originals are excluded from Git and deployment.
window.ORIENTATION = {
  "id": "0-5",
  "title": "Windows·macOS 개발 환경 설치와 버전 고정",
  "duration": "12:00",
  "description": "운영체제에 맞게 Git·Node.js LTS·pnpm·VS Code·Docker·브라우저를 준비하고, 새 연습 폴더에서 버전 기록과 PostgreSQL 연결을 확인합니다. 2026-09-08 공식 문서 확인 기준입니다. 12분은 설명·시연 편집 분량이며 다운로드·설치·재부팅 시간은 별도입니다.",
  "sources": [
    {
      "title": "Git — Install for Windows",
      "url": "https://git-scm.com/install/windows"
    },
    {
      "title": "Git — Install for macOS",
      "url": "https://git-scm.com/install/mac"
    },
    {
      "title": "Node.js — Releases and LTS status",
      "url": "https://nodejs.org/en/about/previous-releases"
    },
    {
      "title": "Node.js — Official downloads",
      "url": "https://nodejs.org/en/download"
    },
    {
      "title": "pnpm — Installation and compatibility",
      "url": "https://pnpm.io/installation"
    },
    {
      "title": "pnpm — package.json and package manager pinning",
      "url": "https://pnpm.io/package_json"
    },
    {
      "title": "nvm — .nvmrc behavior",
      "url": "https://github.com/nvm-sh/nvm#nvmrc"
    },
    {
      "title": "VS Code — Windows setup",
      "url": "https://code.visualstudio.com/docs/setup/windows"
    },
    {
      "title": "VS Code — macOS setup and code command",
      "url": "https://code.visualstudio.com/docs/setup/mac"
    },
    {
      "title": "Google — Chrome download",
      "url": "https://www.google.com/chrome/"
    },
    {
      "title": "Docker — Desktop on Windows",
      "url": "https://docs.docker.com/desktop/setup/install/windows-install/"
    },
    {
      "title": "Microsoft — WSL installation",
      "url": "https://learn.microsoft.com/en-us/windows/wsl/install"
    },
    {
      "title": "Docker — Desktop on Mac",
      "url": "https://docs.docker.com/desktop/setup/install/mac-install/"
    },
    {
      "title": "Docker — Official PostgreSQL image",
      "url": "https://hub.docker.com/_/postgres"
    },
    {
      "title": "PostgreSQL — Supported versions",
      "url": "https://www.postgresql.org/support/versioning/"
    },
    {
      "title": "Docker — Compose variable interpolation",
      "url": "https://docs.docker.com/compose/how-tos/environment-variables/variable-interpolation/"
    },
    {
      "title": "Docker — compose config validation",
      "url": "https://docs.docker.com/reference/cli/docker/compose/config/"
    },
    {
      "title": "Docker — compose stop",
      "url": "https://docs.docker.com/reference/cli/docker/compose/stop/"
    },
    {
      "title": "PostgreSQL — pg_isready",
      "url": "https://www.postgresql.org/docs/current/app-pg-isready.html"
    }
  ],
  "deckUrl": "2026-09-08_0-5_Windows_macOS_개발환경_설치와_버전_고정_강의슬라이드_v0.1.html",
  "slides": [
    {
      "label": "SETUP / 0-5",
      "title": "설치 결과를 명령으로 확인합니다",
      "time": "00:00–00:30",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">오늘 남길 결과</p><h2>설치하고,<br><em>같은 환경을 기록합니다.</em></h2><div class=\"check-grid\"><p><b>실행</b>Git·Node.js·pnpm</p><p><b>확인</b>VS Code·브라우저</p><p><b>연결</b>Docker·PostgreSQL</p><p><b>기록</b>.nvmrc·packageManager</p></div><p class=\"footnote\">다운로드·재부팅 때는 일시정지하세요. 설치 시간은 컴퓨터마다 다릅니다.</p>"
    },
    {
      "label": "01 / ONE SHELL AT A TIME",
      "title": "내 운영체제의 안내를 따라갑니다",
      "time": "00:30–01:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">설치 전에 확인</p><h2>운영체제와 터미널을<br>먼저 맞춥니다.</h2><table class=\"lesson-table\"><thead><tr><th>사용 환경</th><th>이 수업의 터미널</th><th>먼저 확인</th></tr></thead><tbody><tr><td>Windows</td><td>PowerShell</td><td>시스템 종류: x64 / ARM64</td></tr><tr><td>macOS</td><td>터미널 · zsh</td><td>칩: Apple Silicon / Intel</td></tr><tr><td>공통</td><td>OS 표기가 없는 명령</td><td>공식 설치 파일·기존 설치 경로</td></tr></tbody></table><p class=\"takeaway\">이 실습에서는 <b>Windows의 Node.js와 WSL의 Node.js를 섞지 않습니다.</b></p>"
    },
    {
      "label": "02 / WINDOWS — GIT AND NODE",
      "title": "Windows에서 Git과 Node.js를 준비합니다",
      "time": "01:10–02:05",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">Windows · PowerShell</p><h2>Git과 Node.js LTS를<br><em>설치합니다.</em></h2><pre class=\"code-example\"><code>git --version\nnode --version\nnpm --version\nwhere.exe git\nwhere.exe node</code></pre><p class=\"takeaway\">공식 설치 파일 실행 → 터미널을 새로 열기 → 버전·경로 확인</p><p class=\"footnote\">2026-09-08 기준 Node.js 24가 LTS입니다. 세부 버전은 설치 후 기록합니다.</p>"
    },
    {
      "label": "03 / MACOS — GIT AND NODE",
      "title": "macOS에서 Git과 Node.js를 준비합니다",
      "time": "02:05–03:00",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">macOS · 터미널 zsh</p><h2>같은 도구를,<br>Mac에 맞게 설치합니다.</h2><pre class=\"code-example\"><code>git --version\n# Git이 없을 때만\nxcode-select --install\n\nnode --version\nnpm --version\nwhich -a node</code></pre><p class=\"takeaway\">Node.js 공식 LTS 설치 파일 또는 기존 버전 관리자 중 <b>한 경로</b>를 사용합니다.</p>"
    },
    {
      "label": "04 / EDITOR AND BROWSER",
      "title": "파일을 보고 결과를 확인할 도구를 설치합니다",
      "time": "03:00–03:40",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">VS Code · Chromium 계열 브라우저</p><h2>편집기와 브라우저를<br><em>열어 봅니다.</em></h2><div class=\"check-grid\"><p><b>WIN</b>VS Code User Setup 설치</p><p><b>MAC</b>VS Code를 응용 프로그램에 추가</p><p><b>FOLDER</b>새 signaldesk-env-check 폴더 열기</p><p><b>WEB</b>Chrome 설치·개발자 도구 열기</p></div><p class=\"footnote\">연습용 새 폴더를 만듭니다. 이름이 겹치면 다른 새 이름을 사용하세요.</p>"
    },
    {
      "label": "05 / PNPM",
      "title": "pnpm을 설치하고 버전을 확인합니다",
      "time": "03:40–04:30",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">공통 · Windows PowerShell / macOS zsh</p><h2>Node.js 확인 후<br>pnpm을 설치합니다.</h2><pre class=\"code-example\"><code>node --version\nnpm --version\nnpx get-pnpm\npnpm --version</code></pre><p class=\"takeaway\">설치 후 새 터미널에서 확인합니다.<br>이미 pnpm이 있다면 <b>버전 확인부터</b> 진행하세요.</p><p class=\"footnote\">2026-09-08 pnpm 공식 설치 안내 기준. 설치 방식이 바뀌면 공식 페이지를 확인합니다.</p>"
    },
    {
      "label": "06 / PIN THE ENVIRONMENT",
      "title": "실제 버전 값을 파일에 기록합니다",
      "time": "04:30–05:25",
      "theme": "navy",
      "layout": "mixed-content",
      "content": "<p class=\"eyebrow\">새 연습 폴더 · VS Code에서 저장</p><h2>버전은<br><em>출력된 값으로 고정합니다.</em></h2><pre class=\"code-example\"><code>npm init -y\nnode -p &quot;process.versions.node&quot;\npnpm --version</code></pre><table class=\"lesson-table\"><thead><tr><th>파일</th><th>저장할 값</th></tr></thead><tbody><tr><td>.nvmrc</td><td>Node.js 숫자 버전 한 줄</td></tr><tr><td>package.json</td><td>packageManager: pnpm@뒤에 실제 버전</td></tr></tbody></table><p class=\"footnote\">예: pnpm 출력이 12.0.0이면 문자열은 \"pnpm@12.0.0\". 실제 출력값을 사용합니다.</p>"
    },
    {
      "label": "07 / WINDOWS — DOCKER",
      "title": "Windows의 Docker 실행 조건을 확인합니다",
      "time": "05:25–06:20",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">Windows · PowerShell · Docker Desktop</p><h2>Docker가 사용할<br>WSL 2를 확인합니다.</h2><pre class=\"code-example\"><code>wsl --version\nwsl --status\n\ndocker version\ndocker compose version</code></pre><p class=\"takeaway\">공식 요구사항 확인 → Docker Desktop 설치 → 엔진 시작 확인</p><p class=\"footnote\">WSL이 없을 때는 공식 설치 절차를 따릅니다. 필요한 경우 관리자 권한·재부팅이 필요합니다.</p>"
    },
    {
      "label": "08 / MACOS — DOCKER",
      "title": "Mac의 칩에 맞는 Docker를 설치합니다",
      "time": "06:20–07:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">macOS · 터미널 zsh · Docker Desktop</p><h2>칩에 맞게 설치하고,<br><em>엔진을 실행합니다.</em></h2><div class=\"check-grid\"><p><b>CHIP</b>Apple Silicon / Intel 선택</p><p><b>APP</b>Docker를 응용 프로그램에 추가</p><p><b>START</b>앱 실행 후 엔진 준비 확인</p><p><b>VERIFY</b>Client·Server·Compose 확인</p></div><pre class=\"code-example\"><code>docker version\ndocker compose version</code></pre>"
    },
    {
      "label": "09 / LOCAL ENV FILES",
      "title": "연습용 DB 설정과 비밀을 분리합니다",
      "time": "07:00–07:55",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">공통 · 새 연습 폴더 안에서</p><h2>비밀번호는<br>로컬 .env에 둡니다.</h2><table class=\"lesson-table\"><thead><tr><th>파일</th><th>직접 작성할 내용</th></tr></thead><tbody><tr><td>.env</td><td>POSTGRES_PASSWORD에 본인의 연습용 값</td></tr><tr><td>.env.example</td><td>POSTGRES_PASSWORD= · 값은 비우기</td></tr><tr><td>.gitignore</td><td>.env 한 줄</td></tr></tbody></table><p class=\"takeaway\">로컬 접속은 <b>127.0.0.1:5433</b>을 사용합니다.<br>5433이 이미 사용 중이면 다른 빈 포트를 고릅니다.</p>"
    },
    {
      "label": "10 / COMPOSE FILE",
      "title": "PostgreSQL 실행 구성을 파일로 만듭니다",
      "time": "07:55–09:05",
      "theme": "navy",
      "layout": "dense-code",
      "content": "<p class=\"eyebrow\">공통 · compose.yaml · 새 연습 폴더</p><h2>DB 실행 구성을 저장합니다.</h2><pre class=\"code-example\"><code>services:\n  db:\n    image: postgres:17.11\n    environment:\n      POSTGRES_DB: signaldesk\n      POSTGRES_USER: learner\n      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:?required}\n    ports:\n      - &quot;127.0.0.1:5433:5432&quot;\n    volumes:\n      - pgdata:/var/lib/postgresql/data\nvolumes:\n  pgdata:</code></pre><p class=\"footnote\">17.11은 2026-09-08 확인한 지원 버전의 예시입니다. 기존 DB에 덮어 적용하지 않습니다.</p>"
    },
    {
      "label": "11 / START AND VERIFY",
      "title": "DB가 실제로 응답하는지 확인합니다",
      "time": "09:05–10:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">공통 · compose.yaml이 있는 폴더</p><h2>실행 상태와<br>쿼리 응답을 확인합니다.</h2><pre class=\"code-example\"><code>docker compose config --quiet\ndocker compose up -d db\ndocker compose ps\ndocker compose exec db pg_isready -U learner -d signaldesk\ndocker compose exec db psql -U learner -d signaldesk -c &quot;SELECT 1;&quot;</code></pre><p class=\"takeaway\">기대 결과: 실행 중 → accepting connections → 숫자 <b>1</b></p><p class=\"footnote\">실습을 마치고 잠시 끌 때: docker compose stop db · 데이터는 유지됩니다.</p>"
    },
    {
      "label": "12 / TROUBLESHOOTING",
      "title": "막히면 원인을 좁혀 확인합니다",
      "time": "10:10–11:15",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">오류를 볼 때의 확인 순서</p><h2>오류 메시지에서<br><em>막힌 지점을 찾습니다.</em></h2><table class=\"lesson-table\"><thead><tr><th>증상</th><th>먼저 확인</th><th>다음 행동</th></tr></thead><tbody><tr><td>명령을 찾지 못함</td><td>설치 경로·현재 터미널</td><td>터미널·VS Code 재시작</td></tr><tr><td>권한·정책 오류</td><td>막힌 파일·조직 정책</td><td>사용자 설치·공식 안내 확인</td></tr><tr><td>Docker Server 없음</td><td>Desktop·가상화·WSL 상태</td><td>엔진 시작·공식 진단</td></tr><tr><td>포트 사용 중</td><td>5433의 기존 사용 여부</td><td>연습용 호스트 포트 변경</td></tr><tr><td>DB 접속 실패</td><td>DB·사용자·포트·초기 설정</td><td>상태·로그에서 원인 확인</td></tr></tbody></table>"
    },
    {
      "label": "13 / ENVIRONMENT CHECKLIST",
      "title": "완료 기준과 실제 버전을 남깁니다",
      "time": "11:15–12:00",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">설치 체크리스트 · 직접 확인한 항목만 표시</p><h2>여섯 가지를 확인하면<br>다음 수업으로 갑니다.</h2><div class=\"check-grid\"><p><b>01</b>Git·Node.js·pnpm 버전 출력</p><p><b>02</b>.nvmrc·packageManager 기록</p><p><b>03</b>VS Code에서 연습 폴더 열기</p><p><b>04</b>브라우저 개발자 도구 열기</p><p><b>05</b>Docker Server·Compose 확인</p><p><b>06</b>DB 준비 완료·SELECT 1 성공</p></div><p class=\"takeaway\">다음 수업: <b>Codex 앱과 같은 프로젝트 폴더를 연결</b>합니다.</p>"
    }
  ]
};
