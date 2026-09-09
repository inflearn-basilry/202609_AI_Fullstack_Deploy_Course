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
      "title": "도구를 고르고 사용 범위를 정합니다",
      "time": "00:00–00:30",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">오늘 남길 결과</p><h2>어떤 도구에,<br><em>어디까지 맡길까요?</em></h2><div class=\"check-grid\"><p><b>01</b>필수·선택 도구표</p><p><b>02</b>파일 접근 범위</p><p><b>03</b>비밀 정보 보관 위치</p><p><b>04</b>사용 예산과 중단 조건</p></div>"
    },
    {
      "label": "01 / COURSE TOOLSET",
      "title": "강의 시연은 이 조합으로 진행합니다",
      "time": "00:30–01:20",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">강의 기준 조합 · 아래는 수업에서 맡길 역할</p><h2>Work·Codex +<br>VS Code + GitHub</h2><div class=\"check-grid\"><p><b>WORK</b>기획·자료를 검토할 결과로 정리</p><p><b>CODEX</b>저장소 작업·실행·수정</p><p><b>VS CODE</b>파일·변경 내용 직접 확인</p><p><b>GITHUB</b>커밋·브랜치·검토 기록 공유</p></div><p class=\"footnote\">Work·Codex는 기능이 겹칩니다. 역할 구분은 강의의 진행 방식입니다.</p>"
    },
    {
      "label": "02 / REQUIRED AND OPTIONAL",
      "title": "대안은 필요할 때 하나씩 선택합니다",
      "time": "01:20–02:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">필수·선택 도구표</p><h2>시연 기준과<br><em>대안 후보를 구분합니다.</em></h2><table class=\"lesson-table\"><thead><tr><th>구분</th><th>도구</th><th>선택 기준</th></tr></thead><tbody><tr><td>본편 시연</td><td>Work·Codex·VS Code·GitHub</td><td>영상과 같은 흐름</td></tr><tr><td>대안 후보</td><td>Cursor·Windsurf·Claude</td><td>파일·실행·변경 검토 지원 확인</td></tr><tr><td>선택 부록</td><td>Orca–Cursor</td><td>본편 완료 후 작업 조율 확장</td></tr></tbody></table><p class=\"takeaway\">대안을 써도 <b>완료 조건·변경 검토·테스트</b>는 그대로 가져갑니다.</p>"
    },
    {
      "label": "03 / THREE COST LINES",
      "title": "개발 도구 구독과 서비스 실행 비용은 다릅니다",
      "time": "02:00–02:50",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">비용을 확인할 세 곳</p><h2>구독료와 API 비용을<br>따로 기록합니다.</h2><div class=\"route\"><article><small>01 / 개발 도구</small><h3>구독·크레딧</h3><p>Work·Codex 사용량<br>현재 플랜·추가 구매</p></article><article><small>02 / 서비스의 AI 기능</small><h3>API 사용량</h3><p>SignalDesk가 보내는 요청<br>모델·입출력·호출 수</p></article><article><small>03 / 공개 서비스</small><h3>호스팅·DB</h3><p>배포 환경과 데이터 저장<br>무료 범위·초과 정책</p></article></div><p class=\"footnote\">가격·제공량은 바뀔 수 있습니다. 결제 화면의 날짜와 조건을 기록하세요.</p>"
    },
    {
      "label": "04 / SPEND CONTROL",
      "title": "알림과 실제 차단을 구분합니다",
      "time": "02:50–03:45",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">실제 API 모드로 전환하기 전</p><h2>예산을 적고,<br><em>멈추는 설정을 확인합니다.</em></h2><div class=\"check-grid\"><p><b>01</b>실습 예산·기간 정하기</p><p><b>02</b>알림과 hard limit 구분</p><p><b>03</b>자동 충전·초과 구매 확인</p><p><b>04</b>호출 수·재시도·출력 제한</p></div><p class=\"takeaway\">예산 알림만으로는 호출이 멈추지 않습니다.<br>차단 집계에도 지연이 있을 수 있으므로 여유를 둡니다.</p>"
    },
    {
      "label": "05 / LEAST PRIVILEGE",
      "title": "파일 범위와 행동 범위를 함께 좁힙니다",
      "time": "03:45–04:30",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">최소 권한 · 첫 작업의 범위</p><h2>실습 폴더를 열고,<br>필요한 작업만 허용합니다.</h2><div class=\"check-grid\"><p><b>파일</b>이번 실습 폴더와 필요한 자료</p><p><b>명령</b>목적·대상·예상 결과 확인</p><p><b>연결</b>이번에 쓸 계정·저장소만</p><p><b>공개</b>push·배포 전에 변경 검토</p></div><p class=\"takeaway\">작업 규칙은 지시이고, <b>접근 권한 설정은 기술적 제한</b>입니다.</p>"
    },
    {
      "label": "06 / SECRETS",
      "title": "비밀 값은 코드와 공유 자료에서 분리합니다",
      "time": "04:30–05:20",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">API 키 · DB 비밀번호 · 계정 토큰</p><h2>이름은 공유하고,<br><em>값은 비밀로 보관합니다.</em></h2><div class=\"route\"><article><small>로컬</small><h3>환경 파일</h3><p>.env에 실제 값 보관<br>Git 추적 제외 확인</p></article><article><small>공유</small><h3>설정 예시</h3><p>.env.example에 변수 이름<br>실제 값은 비워 두기</p></article><article><small>배포</small><h3>비밀 설정</h3><p>호스팅의 secret 기능<br>서버에서만 사용</p></article></div><p class=\"takeaway\">유출했다면 <b>키 폐기·재발급</b>부터.<br>파일만 지워도 커밋 이력과 로그에는 남을 수 있습니다.</p>"
    },
    {
      "label": "07 / MOCK FIRST",
      "title": "핵심 흐름은 mock 모드로 먼저 확인합니다",
      "time": "05:20–06:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">SignalDesk의 두 실행 경로</p><h2>API 키 없이도<br>구현과 검증을 진행합니다.</h2><table class=\"lesson-table\"><thead><tr><th>경로</th><th>응답을 얻는 곳</th><th>확인할 것</th></tr></thead><tbody><tr><td>mock · 기본</td><td>로컬 예시 응답</td><td>화면·저장·검증·실패 처리</td></tr><tr><td>real · 선택</td><td>외부 AI API</td><td>실제 품질·지연·사용 비용</td></tr></tbody></table><p class=\"takeaway\">mock은 <b>외부 AI API 호출 비용 없이</b> 연습하는 경로입니다.<br>개발 도구 구독·호스팅 비용까지 무료라는 뜻은 아닙니다.</p>"
    },
    {
      "label": "08 / YOUR TOOL PLAN",
      "title": "나의 도구표를 완성합니다",
      "time": "06:10–07:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">짧은 실습 · 메모 한 장</p><h2>시작 전에,<br><em>다섯 줄을 채워 주세요.</em></h2><pre class=\"code-example\"><code>시연 기준 / 내가 사용할 도구:\n선택 도구 / 지금 필요한 이유:\nAI에 연결할 실습 폴더:\n비밀 보관 위치 / Git 제외 확인 방법:\n실행 모드 / 예산·기간 / 호출 중단 기준:</code></pre><p class=\"takeaway\">다음 수업에서는 <b>개발 도구를 설치하고 버전을 기록</b>합니다.</p>"
    }
  ]
};
