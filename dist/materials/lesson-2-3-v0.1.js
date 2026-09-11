window.ORIENTATION = {
  "id": "2-3",
  "title": "제품·설계·작업 문서 분리",
  "duration": "09:00",
  "description": "커리큘럼 v0.4 기준. SignalDesk의 제품 기준, 설계 초안, 작업 상태를 별도 문서에 적고 AGENTS.md에서 참조합니다. 기준의 원본과 변경 순서, 문서 간 모순을 확인하는 방법을 익힙니다.",
  "sources": [
    {
      "title": "OpenAI: Custom instructions with AGENTS.md",
      "url": "https://learn.chatgpt.com/docs/agent-configuration/agents-md"
    }
  ],
  "deckUrl": "2026-09-11_2-3_제품_설계_작업_문서_분리_강의슬라이드_v0.1.html",
  "slides": [
    {
      "label": "01 · 이번 강의",
      "title": "제품·설계·작업 문서 분리",
      "time": "00:00–00:45",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">2-3 · 9분</p><h2>제품·설계·작업<br>문서 분리</h2><p class=\"lead\">1-4에서 작성한 PRD를 바탕으로, 제품의 기준과 구현 방법, 이번 작업의 상태를 나눠 적습니다.</p><div class=\"check-grid\"><p><b>01</b>1-2의 가정과 1-3의 범위를 제품 문서에 연결합니다.</p><p><b>02</b>SignalDesk의 담당자가 아침에 공지를 찾아 원문과 요약을 대조한다는 학습 가정을 유지합니다.</p><p><b>03</b>작업자는 각 문서의 역할과 기준이 있는 위치를 확인한 뒤 필요한 내용을 읽습니다.</p></div><p class=\"takeaway\">실습 대상은 별도의 SignalDesk 연습 저장소입니다. 이 강의 사이트의 설정을 바꾸는 작업은 아닙니다.</p>"
    },
    {
      "label": "02 · 문서 역할",
      "title": "문서 네 개의 역할",
      "time": "00:45–01:40",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">이 강의의 문서 구성</p><h2>문서 네 개의 역할</h2><table class=\"lesson-table\"><thead><tr><th>파일</th><th>다루는 질문</th><th>기록할 내용</th></tr></thead><tbody><tr><td>AGENTS.md</td><td>어떤 규칙으로 작업하나</td><td>작업 규칙과 참조 경로</td></tr><tr><td>docs/PRODUCT.md</td><td>누구에게 무엇을 왜 만드나</td><td>범위와 완료 조건</td></tr><tr><td>docs/ARCHITECTURE.md</td><td>어떻게 구현하나</td><td>설계 초안과 미정 사항</td></tr><tr><td>docs/TASKS.md</td><td>이번에 무엇을 하나</td><td>할 일과 상태 근거</td></tr></tbody></table><p class=\"takeaway\">docs의 세 파일명은 강의 규칙입니다. Codex 기본 설정의 자동 로딩 대상이 아니므로 AGENTS.md에 읽을 문서와 순서를 명시합니다.</p><p class=\"footnote\"><a href=\"https://learn.chatgpt.com/docs/agent-configuration/agents-md\">OpenAI · 지침 파일을 찾는 방식</a></p>"
    },
    {
      "label": "03 · 제품 문서",
      "title": "제품의 목적과 완료 조건",
      "time": "01:40–02:35",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">docs/PRODUCT.md · 골격 예시</p><h2>제품의 목적과<br>완료 조건</h2><pre class=\"code-example\"><code># PRODUCT\n대상: 아침에 지역 소식을 정리하는 담당자\n목적: 필요한 공지를 찾아 요약과 원문 대조\n범위: 검색, 목록, 상세, 고정 요약 표시\n완료 조건: 검색어와 분류를 모두 적용\n보류: 계정, 결제, 추천, 알림·공유 자동화, 외부 AI 호출</code></pre><p class=\"takeaway\">1-4의 PRD를 요약합니다. 완료 조건은 결과의 충족 여부를 판단하는 기준입니다. mock 요약은 미리 만든 고정 응답입니다.</p><p class=\"footnote\">목적과 대상은 학습 가정입니다. 사용자 조사나 앱 검증을 완료했다고 적지 않습니다.</p>"
    },
    {
      "label": "04 · 제품 기준",
      "title": "합성 공지와 검색 완료 조건",
      "time": "02:35–03:30",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">PRODUCT에 함께 둘 합성 자료</p><h2>합성 공지와<br>검색 완료 조건</h2><table class=\"lesson-table\"><thead><tr><th>공지 제목</th><th>식별자</th><th>분류</th></tr></thead><tbody><tr><td>동네 도서관, 금요일 야간 개방</td><td>E-001</td><td>생활</td></tr><tr><td>강변 자전거 도로 점검 안내</td><td>E-002</td><td>교통</td></tr><tr><td>주말 어린이 과학 체험 행사</td><td>E-003</td><td>교육</td></tr></tbody></table><p class=\"takeaway\">AC-01은 ‘도서관 + 생활’에 E-001 한 건입니다. AC-02는 ‘산악박물관’ 재검색 시 이전 결과를 지우고 0건 안내를 표시합니다.</p><p class=\"footnote\">E-001 합성 원문: “동네 도서관이 금요일에 열람실을 오후 9시까지 연장 운영합니다.” 상세에서는 이 공지의 원문과 mock 요약을 대조합니다.</p>"
    },
    {
      "label": "05 · 설계 문서",
      "title": "구현 방법의 초안과 미정 사항",
      "time": "03:30–04:25",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">docs/ARCHITECTURE.md · 골격 예시</p><h2>구현 방법의 초안과<br>미정 사항</h2><pre class=\"code-example\"><code># ARCHITECTURE\n기준: PRODUCT의 범위와 완료 조건\n입력: 제목 검색어와 분류\n출력: 두 조건에 맞는 공지 목록\n상세: 같은 식별자의 원문과 mock 요약\n미정: 빈 검색어 처리와 정렬 순서</code></pre><p class=\"takeaway\">결정과 미정 사항을 구분합니다. 첫 구현은 합성 데이터로 연결하며 기술 구성은 v0.4 계획을 따릅니다.</p><p class=\"footnote\">세부 파일 구조와 데이터베이스, MVC 역할, Zod 계약은 섹션 03에서 구체화합니다. 이 초안만으로 구현을 마쳤다고 적지 않습니다.</p>"
    },
    {
      "label": "06 · 작업 문서",
      "title": "이번 할 일과 확인 근거",
      "time": "04:25–05:20",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">docs/TASKS.md · 골격 예시</p><h2>이번 할 일과<br>확인 근거</h2><pre class=\"code-example\"><code># TASKS\nT-001: 제목 검색어와 분류 동시 적용\n기준: PRODUCT의 AC-01·AC-02\n수정 대상: 실제 파일을 확인한 뒤 확정\n상태: 미착수\n증거: 아직 실행하지 않음</code></pre><p class=\"takeaway\">작업에는 제품 기준을 참조하고 실제 진행 상태를 적습니다. 구현 뒤에는 바뀐 파일과 확인 결과를 연결합니다. 실행하지 않았다면 그 이유를 남깁니다.</p><p class=\"footnote\">코드와 테스트 경로, 실행 명령은 연습 저장소에서 확인한 뒤 기록합니다. 골격 작성 단계이므로 경로나 결과를 추측해 채우지 않습니다.</p>"
    },
    {
      "label": "07 · 상태 구분",
      "title": "작업 상태를 바꾸는 근거",
      "time": "05:20–06:15",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">TASKS에서 사용하는 상태</p><h2>작업 상태를 바꾸는 근거</h2><table class=\"lesson-table\"><thead><tr><th>상태</th><th>현재 의미</th><th>남길 근거</th></tr></thead><tbody><tr><td>미착수</td><td>작업을 시작하지 않음</td><td>대상과 완료 조건</td></tr><tr><td>진행 중</td><td>수정하거나 확인하는 중</td><td>바뀐 파일과 남은 일</td></tr><tr><td>검토 대기</td><td>결과를 검토할 수 있음</td><td>변경분과 확인 기록</td></tr><tr><td>완료</td><td>조건 충족과 검토 확인</td><td>검증 결과와 승인 기록</td></tr></tbody></table><p class=\"takeaway\">문서 생성과 검색 구현은 따로 기록합니다. 파일을 만들었다는 이유로 T-001을 완료로 바꾸지 않습니다. 조건을 확인하지 못했다면 남은 일을 적습니다.</p><p class=\"footnote\">이 상태는 실습의 작업 규칙입니다. 현재 앱 실행이나 테스트 통과 증거는 없습니다.</p>"
    },
    {
      "label": "08 · 변경 순서",
      "title": "한 기준의 원본과 변경 순서",
      "time": "06:15–07:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">제품 기준이 바뀌는 경우</p><h2>한 기준의 원본과<br>변경 순서</h2><p class=\"lead\">제품 범위와 완료 조건의 원본은 PRODUCT입니다. 다른 문서에는 기준의 위치를 적습니다.</p><div class=\"check-grid\"><p><b>01</b>담당자가 변경 이유와 영향을 검토하고 승인한 뒤 PRODUCT의 기준을 고칩니다.</p><p><b>02</b>설계자는 바뀐 기준이 처리 방법에 미치는 영향을 ARCHITECTURE에 반영합니다.</p><p><b>03</b>TASKS에서 해당 기준을 참조하는 작업과 확인 항목을 갱신합니다.</p></div><p class=\"takeaway\">PRD 전체를 네 곳에 복사하면 최신 기준을 찾기 어렵습니다. AGENTS에는 작업 규칙과 문서 참조를 두고, 규칙이 바뀔 때 수정합니다.</p>"
    },
    {
      "label": "09 · 모순 확인",
      "title": "검색 조건이 서로 다른 문서",
      "time": "07:10–08:05",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">문서 모순을 찾는 연습</p><h2>검색 조건이<br>서로 다른 문서</h2><div class=\"translation\"><article><small>PRODUCT의 문장</small><h3>두 조건을 모두 적용</h3><p>제목에 검색어가 있고 선택한 분류에 속하는 공지만 표시한다고 적었습니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>ARCHITECTURE의 문장</small><h3>한 조건만 맞아도 표시</h3><p>제목이나 분류 중 하나만 맞으면 목록에 넣는다고 적어 제품 기준과 다릅니다.</p></article></div><p class=\"takeaway\">‘도서관 + 교통’은 두 조건이 모두 맞아야 하면 0건, 하나라도 맞으면 2건입니다. 충돌을 알리고 승인받은 기준으로 문서를 맞춥니다.</p><p class=\"footnote\">구현자가 승인 전에 기준을 선택하거나 예상 결과를 조용히 바꾸지 않습니다.</p>"
    },
    {
      "label": "10 · 실습",
      "title": "세 문서의 초안과 참조 작성",
      "time": "08:05–09:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">실습 · 필요하면 일시 정지</p><h2>세 문서의 초안과<br>참조 작성</h2><p class=\"lead\">워크시트의 골격으로 연습 저장소에 둘 문서 초안을 작성합니다.</p><div class=\"check-grid\"><p><b>01</b>PRODUCT에 목적과 범위, 합성 자료, 검색 완료 조건을 적습니다.</p><p><b>02</b>ARCHITECTURE에 입력과 출력, 미정 사항을 나눠 적습니다.</p><p><b>03</b>TASKS에 T-001의 미착수 상태를 적고, AGENTS에서 세 문서를 참조합니다.</p></div><p class=\"takeaway\">두 조건을 모두 적용한다는 기준이 일치하는지 확인합니다. 다음 2-4에서는 문서를 읽고 작업할 역할과 책임을 나눕니다.</p><p class=\"footnote\"><a href=\"section02-context-workbook.md\" download>섹션 02 컨텍스트 워크시트 내려받기</a></p>"
    }
  ]
};
