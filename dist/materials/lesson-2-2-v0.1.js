window.ORIENTATION = {
  "id": "2-2",
  "title": "저장소 규칙과 금지사항 작성",
  "duration": "09:00",
  "description": "커리큘럼 v0.4 기준. 별도 SignalDesk 연습 저장소에 적용할 AGENTS.md 예시를 작성하며 참조 문서, 수정 범위, 금지사항, 승인 조건과 작업 후 증거를 정리합니다.",
  "sources": [
    {
      "title": "OpenAI: Custom instructions with AGENTS.md",
      "url": "https://learn.chatgpt.com/docs/agent-configuration/agents-md"
    },
    {
      "title": "OpenAI: Agent approvals & security",
      "url": "https://learn.chatgpt.com/docs/agent-approvals-security"
    }
  ],
  "deckUrl": "2026-09-11_2-2_저장소_규칙과_금지사항_강의슬라이드_v0.1.html",
  "slides": [
    {
      "label": "01 · 이번 강의",
      "title": "저장소 규칙과 금지사항 작성",
      "time": "00:00–00:40",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">2-2 · 9분</p><h2>저장소 규칙과<br>금지사항 작성</h2><p class=\"lead\">SignalDesk 연습 저장소에서 반복 적용할 작업 지침을 AGENTS.md에 정리합니다.</p><div class=\"check-grid\"><p><b>01</b>기존 지침을 읽고, 이번 실습에 필요한 규칙을 추가합니다.</p><p><b>02</b>참조 문서와 수정 범위를 정하고, 작업 후 확인할 증거를 적습니다.</p></div><p class=\"takeaway\">실습 대상은 별도 연습 저장소입니다. 현재 강의 자료 사이트의 AGENTS.md를 덮어쓰지 않습니다.</p>"
    },
    {
      "label": "02 · 지침 탐색",
      "title": "Codex가 지침을 찾는 범위",
      "time": "00:40–01:35",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">프로젝트 안에서의 기본 탐색</p><h2>Codex가 지침을<br>찾는 범위</h2><table class=\"lesson-table\"><thead><tr><th>구분</th><th>기본 동작</th></tr></thead><tbody><tr><td>탐색 경로</td><td>시작 시 프로젝트 루트부터 현재 작업 폴더까지 확인</td></tr><tr><td>같은 폴더</td><td>비어 있지 않은 AGENTS.override.md를 AGENTS.md보다 우선</td></tr><tr><td>지침 결합</td><td>루트부터 읽고, 현재 폴더에 가까운 지침이 앞선 지침을 재정의</td></tr></tbody></table><p class=\"takeaway\">각 폴더에서 최대 한 파일을 선택합니다. 이 실습은 연습 저장소 루트의 AGENTS.md부터 작성합니다.</p><p class=\"footnote\">참고: <a href=\"https://learn.chatgpt.com/docs/agent-configuration/agents-md\">OpenAI · AGENTS.md 탐색과 우선순위</a></p>"
    },
    {
      "label": "03 · 참조 문서",
      "title": "경로와 읽을 목적의 명시",
      "time": "01:35–02:35",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">AGENTS.md에 넣을 예시</p><h2>경로와 읽을 목적의 명시</h2><pre class=\"code-example\"><code># SignalDesk 작업 지침\n작업 전에 다음 문서를 읽는다.\n- docs/PRODUCT.md: PRD, 합성 공지, 완료 조건\n- docs/ARCHITECTURE.md: 구조 초안과 미정 사항\n- docs/TASKS.md: 현재 작업과 검증 항목\n문서가 없거나 서로 충돌하면 해당 내용을 알린다.</code></pre><p class=\"takeaway\">예제 경로를 실제 파일 경로에 맞춥니다. PRODUCT.md 등의 이름만으로 문서 전체가 자동 로딩된다고 가정하지 않습니다.</p><p class=\"footnote\">참고: <a href=\"https://learn.chatgpt.com/docs/agent-configuration/agents-md\">OpenAI · 프로젝트 지침</a></p>"
    },
    {
      "label": "04 · 수정 범위",
      "title": "수정할 경로와 보존할 파일",
      "time": "02:35–03:30",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">실제 저장소를 확인한 뒤 채울 항목</p><h2>수정할 경로와<br>보존할 파일</h2><pre class=\"code-example\"><code>수정 허용: &lt;이번 작업의 실제 폴더 경로&gt;\n변경 금지: &lt;보존할 실제 파일 경로&gt;\n허용 범위 밖의 변경은 먼저 대상과 이유를 알린다.\n기존 AGENTS.md의 지침을 읽고 필요한 규칙만 추가한다.</code></pre><p class=\"takeaway\">꺾쇠 항목을 그대로 제출하지 않습니다. 현재 폴더와 파일을 확인해 채우며, 예제 경로를 이미 있는 폴더로 단정하지 않습니다.</p><p class=\"footnote\">소스와 테스트 폴더의 구조 결정은 섹션 03에서 다룹니다. 구조가 미정이면 그 상태를 문서에 남깁니다.</p>"
    },
    {
      "label": "05 · 보류 범위",
      "title": "추가하지 않을 다섯 기능",
      "time": "03:30–04:25",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">첫 구현 범위에 대한 구체적인 금지사항</p><h2>추가하지 않을<br>다섯 기능</h2><pre class=\"code-example\"><code>계정 생성과 인증 기능을 추가하지 않는다.\n결제 기능을 추가하지 않는다.\n개인화 추천을 구현하지 않는다.\n알림을 발송하거나 공지를 자동 공유·게시하지 않는다.\n외부 AI API를 실제 호출하지 않는다.</code></pre><p class=\"takeaway\">첫 구현은 공지 검색과 목록, 상세 원문과 mock 요약의 대조까지입니다. mock은 미리 준비한 고정 예시입니다.</p><p class=\"footnote\">학습용 범위 결정입니다. 보류한 기능은 필요성과 조건을 검토한 뒤 별도 작업으로 정합니다.</p>"
    },
    {
      "label": "06 · 데이터와 기존 변경",
      "title": "키와 사용자 작업의 보호",
      "time": "04:25–05:20",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">AGENTS.md에 추가할 예시 규칙</p><h2>키와 사용자 작업의 보호</h2><table class=\"lesson-table\"><thead><tr><th>대상</th><th>지침 예시</th></tr></thead><tbody><tr><td>실제 API 키</td><td>코드, 문서, 예시와 응답에 실제 키를 적지 않는다.</td></tr><tr><td>사용자 변경</td><td>기존 수정 내용을 확인하고, 요청과 무관한 변경을 되돌리지 않는다.</td></tr><tr><td>합성 데이터</td><td>실제 개인정보를 넣지 않는다. 공지 ID와 원문을 임의로 바꾸지 않는다.</td></tr></tbody></table><p class=\"takeaway\">합성 공지의 값을 바꾸면 검색 결과와 원문 대조 기준도 달라집니다. 변경이 필요한 경우 이유와 영향부터 확인합니다.</p>"
    },
    {
      "label": "07 · 승인 조건",
      "title": "추가 승인이 필요한 작업",
      "time": "05:20–06:15",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">이번 요청에 포함되지 않은 작업</p><h2>추가 승인이<br>필요한 작업</h2><table class=\"lesson-table\"><thead><tr><th>작업</th><th>승인 전에 설명할 내용</th></tr></thead><tbody><tr><td>의존성 추가 또는 교체</td><td>필요한 이유와 기존 기능에 미칠 영향</td></tr><tr><td>파일 삭제 또는 범위 밖 변경</td><td>정확한 경로와 복구 방법</td></tr><tr><td>배포 또는 외부 전송</td><td>공개할 내용, 전송 대상과 발생할 비용</td></tr></tbody></table><p class=\"takeaway\">이 연습에서는 요청에 없는 추가 작업을 실행하기 전에 대상과 영향을 설명하고 승인을 받도록 적습니다. 이미 승인한 작업 범위도 함께 확인합니다.</p>"
    },
    {
      "label": "08 · 작업 후 증거",
      "title": "확인한 명령과 결과의 기록",
      "time": "06:15–07:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">검증 규칙 예시</p><h2>확인한 명령과<br>결과의 기록</h2><table class=\"lesson-table\"><thead><tr><th>확인할 것</th><th>작업 후 남길 증거</th></tr></thead><tbody><tr><td>현재 설정</td><td>패키지 설정과 README에서 확인한 실제 명령</td></tr><tr><td>수정 범위</td><td>변경 파일 목록과 변경 이유</td></tr><tr><td>완료 조건</td><td>실행 결과 또는 미실행 항목과 이유</td></tr></tbody></table><p class=\"takeaway\">T-001은 제목 검색어와 분류를 함께 적용하는 작업입니다. ‘도서관’과 ‘생활’의 E-001 한 건, ‘산악박물관’의 0건을 확인합니다.</p><p class=\"footnote\">저장소에서 확인하지 않은 빌드·테스트 명령이나 패키지 버전을 만들어 쓰지 않습니다.</p>"
    },
    {
      "label": "09 · 실행 권한",
      "title": "텍스트 지침과 권한 설정",
      "time": "07:10–08:05",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">AGENTS.md의 역할과 한계</p><h2>텍스트 지침과<br>권한 설정</h2><table class=\"lesson-table\"><thead><tr><th>구분</th><th>역할</th></tr></thead><tbody><tr><td>AGENTS.md</td><td>작업 방식과 금지사항을 AI에 전달하는 텍스트 지침</td></tr><tr><td>sandbox</td><td>파일과 네트워크 등의 접근 범위를 실행 환경에서 제한</td></tr><tr><td>승인 정책</td><td>실행 전 승인을 요구할 조건을 관리</td></tr></tbody></table><p class=\"takeaway\">AGENTS.md는 실행 권한을 차단하는 보안 장치가 아닙니다. ‘외부 호출 금지’라고 적어도 네트워크 권한과 승인 설정을 별도로 확인해야 합니다.</p><p class=\"footnote\">참고: <a href=\"https://learn.chatgpt.com/docs/agent-approvals-security\">OpenAI · sandbox와 승인 정책</a></p>"
    },
    {
      "label": "10 · 실습",
      "title": "저장소 지침 작성과 확인",
      "time": "08:05–09:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">실습 · 필요하면 일시 정지</p><h2>저장소 지침 작성과 확인</h2><p class=\"lead\">워크시트의 AGENTS.md 양식을 본인 SignalDesk 연습 저장소에 맞춰 작성합니다.</p><div class=\"check-grid\"><p><b>01</b>기존 AGENTS.md를 보존하고 참조 경로와 실제 수정 범위를 채웁니다.</p><p><b>02</b>다섯 보류 기능과 실제 키 금지, 승인 조건, 작업 후 증거를 적습니다.</p><p><b>03</b>새 세션에서 지침과 참조 문서의 읽기 전용 요약을 요청하고, 빠진 규칙을 원본과 대조합니다.</p></div><p class=\"takeaway\">새 세션의 점검에서는 파일 조회만 허용하고 구현·수정·커밋·외부 요청은 하지 않습니다. 다음 강의에서는 제품 설명과 구조 문서의 내용을 구체화합니다.</p><p class=\"footnote\"><a href=\"section02-context-workbook.md\" download>섹션 02 컨텍스트 워크시트 내려받기</a></p>"
    }
  ]
};
