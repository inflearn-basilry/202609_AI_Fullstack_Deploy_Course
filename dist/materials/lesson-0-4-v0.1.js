// Public slide data only. Instructor originals are excluded from Git and deployment.
window.ORIENTATION = {
  "id": "0-4",
  "title": "강의 기준 툴과 비용·보안 원칙",
  "duration": "07:00",
  "description": "Work·Codex·VS Code·GitHub의 역할을 구분하고, 필수·선택 도구표와 파일 접근·비밀·비용의 기준을 작성합니다. 제품 정보는 2026-09-08 공식 문서 확인 기준이며 요금과 제공 범위는 계정에서 다시 확인합니다.",
  "sources": [
    {
      "title": "OpenAI — Get started with ChatGPT Work",
      "url": "https://learn.chatgpt.com/docs/get-started-with-work"
    },
    {
      "title": "OpenAI — ChatGPT Work·Codex pricing and shared usage",
      "url": "https://learn.chatgpt.com/docs/pricing"
    },
    {
      "title": "OpenAI API — Spend alerts and hard spend limits",
      "url": "https://developers.openai.com/api/docs/guides/spend-limits"
    },
    {
      "title": "OpenAI — Agent approvals and security",
      "url": "https://learn.chatgpt.com/docs/agent-approvals-security"
    },
    {
      "title": "OpenAI API — Production best practices and API keys",
      "url": "https://developers.openai.com/api/docs/guides/production-best-practices"
    },
    {
      "title": "GitHub — Removing sensitive data from a repository",
      "url": "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository"
    }
  ],
  "deckUrl": "2026-09-08_0-4_강의_기준_툴과_비용_보안_원칙_강의슬라이드_v0.1.html",
  "slides": [
    {
      "label": "TOOLING / 0-4",
      "title": "사용할 도구와 허용할 작업 범위",
      "time": "00:00–00:30",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">이번 수업에서 작성할 항목</p><h2>사용할 도구와<br><em>허용할 작업 범위</em></h2><div class=\"check-grid\"><p><b>01</b>필수·선택 도구표</p><p><b>02</b>파일 접근 범위</p><p><b>03</b>비밀 정보 보관 위치</p><p><b>04</b>사용 예산과 중단 조건</p></div>"
    },
    {
      "label": "01 / COURSE TOOLSET",
      "title": "강의에서 사용하는 도구와 역할",
      "time": "00:30–01:20",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">강의에서 사용하는 도구별 역할</p><h2>Work·Codex +<br>VS Code + GitHub</h2><div class=\"check-grid\"><p><b>WORK</b>기획안과 참고 자료 정리</p><p><b>CODEX</b>저장소의 코드 수정과 실행</p><p><b>VS CODE</b>파일·변경 내용 직접 확인</p><p><b>GITHUB</b>커밋·브랜치·검토 기록 공유</p></div><p class=\"footnote\">Work·Codex는 기능이 겹칩니다. 역할 구분은 강의의 진행 방식입니다.</p>"
    },
    {
      "label": "02 / REQUIRED AND OPTIONAL",
      "title": "시연 도구와 대체 도구의 선택 기준",
      "time": "01:20–02:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">필수·선택 도구표</p><h2>시연 도구와<br><em>대체 도구의 선택 기준</em></h2><table class=\"lesson-table\"><thead><tr><th>구분</th><th>도구</th><th>선택 기준</th></tr></thead><tbody><tr><td>본편 시연</td><td>Work·Codex·VS Code·GitHub</td><td>영상과 같은 흐름</td></tr><tr><td>대체 도구</td><td>Cursor·Windsurf·Claude</td><td>파일·실행·변경 검토 지원 확인</td></tr><tr><td>선택 부록</td><td>Orca–Cursor</td><td>본편 완료 후 여러 작업 조율</td></tr></tbody></table><p class=\"takeaway\">대체 도구를 써도 <b>완료 조건을 정하고 변경 내용을 검토한 뒤 테스트</b>합니다.</p>"
    },
    {
      "label": "03 / THREE COST LINES",
      "title": "개발 도구와 서비스 운영 비용",
      "time": "02:00–02:50",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">항목별 비용 확인</p><h2>개발 도구와<br>서비스 운영 비용</h2><div class=\"route\"><article><small>01 / 개발 도구</small><h3>구독·크레딧</h3><p>Work·Codex 사용량<br>현재 플랜·추가 구매</p></article><article><small>02 / 서비스의 AI 기능</small><h3>API 사용량</h3><p>SignalDesk가 보내는 요청<br>모델·입출력·호출 수</p></article><article><small>03 / 공개 서비스</small><h3>호스팅·DB</h3><p>배포 환경과 데이터 저장<br>무료 범위·초과 정책</p></article></div><p class=\"footnote\">가격·제공량은 바뀔 수 있습니다. 결제 화면의 날짜와 조건을 기록하세요.</p>"
    },
    {
      "label": "04 / SPEND CONTROL",
      "title": "예산 알림과 호출 차단 설정",
      "time": "02:50–03:45",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">실제 API 모드로 전환하기 전</p><h2>예산 알림과<br><em>호출 차단 설정</em></h2><div class=\"check-grid\"><p><b>01</b>실습 예산·기간 정하기</p><p><b>02</b>예산 알림과 강제 한도 구분</p><p><b>03</b>자동 충전·초과 구매 확인</p><p><b>04</b>호출 수·재시도·출력 제한</p></div><p class=\"takeaway\">예산 알림만으로는 호출이 멈추지 않습니다.<br>사용량 집계와 차단에는 지연이 있을 수 있으므로 예산에 여유를 둡니다.</p>"
    },
    {
      "label": "05 / LEAST PRIVILEGE",
      "title": "파일 접근과 명령 실행의 허용 범위",
      "time": "03:45–04:30",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">최소 권한 · 첫 작업의 범위</p><h2>파일 접근과<br>명령 실행의 허용 범위</h2><div class=\"check-grid\"><p><b>파일</b>이번 실습 폴더와 필요한 자료</p><p><b>명령</b>목적·대상·예상 결과 확인</p><p><b>연결</b>이번에 쓸 계정·저장소만</p><p><b>공개</b>push·배포 전에 변경 검토</p></div><p class=\"takeaway\">작업 규칙과 별도로 <b>파일 접근과 명령 실행 권한도 설정</b>합니다.</p>"
    },
    {
      "label": "06 / SECRETS",
      "title": "API 키와 비밀번호를 보관하는 위치",
      "time": "04:30–05:20",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">API 키 · DB 비밀번호 · 계정 토큰</p><h2>API 키와 비밀번호를<br><em>보관하는 위치</em></h2><div class=\"route\"><article><small>로컬</small><h3>환경 파일</h3><p>.env에 실제 값 보관<br>Git 추적 제외 확인</p></article><article><small>공유</small><h3>설정 예시</h3><p>.env.example에 변수 이름<br>실제 값은 비워 두기</p></article><article><small>배포</small><h3>비밀 설정</h3><p>호스팅의 secret 기능<br>서버에서만 사용</p></article></div><p class=\"takeaway\">유출한 키는 <b>먼저 폐기하고 재발급</b>합니다.<br>파일만 지워도 커밋 이력과 로그에는 남을 수 있습니다.</p>"
    },
    {
      "label": "07 / MOCK FIRST",
      "title": "mock 모드와 실제 API 모드의 차이",
      "time": "05:20–06:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">SignalDesk의 두 실행 모드</p><h2>mock 모드와<br>실제 API 모드의 차이</h2><table class=\"lesson-table\"><thead><tr><th>모드</th><th>응답을 얻는 곳</th><th>확인할 것</th></tr></thead><tbody><tr><td>mock · 기본</td><td>로컬 예시 응답</td><td>화면·저장·검증·실패 처리</td></tr><tr><td>real · 선택</td><td>외부 AI API</td><td>실제 품질·지연·사용 비용</td></tr></tbody></table><p class=\"takeaway\">mock 모드는 <b>외부 AI API를 호출하지 않고</b> 미리 준비한 응답을 사용합니다.<br>개발 도구 구독·호스팅 비용까지 무료라는 뜻은 아닙니다.</p>"
    },
    {
      "label": "08 / YOUR TOOL PLAN",
      "title": "사용할 도구와 예산 계획 작성",
      "time": "06:10–07:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">실습: 도구와 사용 조건 기록</p><h2>사용할 도구와<br><em>예산 계획 작성</em></h2><pre class=\"code-example\"><code>시연 기준 / 내가 사용할 도구:\n선택 도구 / 지금 필요한 이유:\nAI에 연결할 실습 폴더:\n비밀 보관 위치 / Git 제외 확인 방법:\n실행 모드 / 예산·기간 / 호출 중단 기준:</code></pre><p class=\"takeaway\">다음 수업에서는 <b>개발 도구를 설치하고 버전을 기록</b>합니다.</p>"
    }
  ]
};
