window.ORIENTATION = {
  "id": "2-1",
  "title": "프롬프트보다 컨텍스트가 먼저다",
  "duration": "10:00",
  "description": "커리큘럼 v0.4 기준. SignalDesk의 가상 응답을 비교하며 작업에 필요한 문서와 완료 조건을 고르고, 새 세션에서 읽기 전용 요약으로 컨텍스트를 점검합니다.",
  "sources": [
    {
      "title": "OpenAI: Prompting",
      "url": "https://learn.chatgpt.com/docs/prompting"
    },
    {
      "title": "OpenAI: Custom instructions with AGENTS.md",
      "url": "https://learn.chatgpt.com/docs/agent-configuration/agents-md"
    },
    {
      "title": "OpenAI: Agent approvals & security",
      "url": "https://learn.chatgpt.com/docs/agent-approvals-security"
    }
  ],
  "deckUrl": "2026-09-11_2-1_프롬프트와_저장소_컨텍스트_강의슬라이드_v0.1.html",
  "slides": [
    {
      "label": "01 · 이번 강의",
      "title": "프롬프트보다 컨텍스트가 먼저다",
      "time": "00:00–00:45",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">2-1 · 10분</p><h2>프롬프트보다<br>컨텍스트가 먼저다</h2><p class=\"lead\">‘공지 검색 만들어줘’라는 요청에 어떤 정보가 더 필요한지 살펴봅니다.</p><div class=\"check-grid\"><p><b>01</b>SignalDesk는 지역 소식 담당자가 아침에 공지를 검토한다는 가정으로 설계한 학습용 서비스입니다.</p><p><b>02</b>PRD와 합성 공지에서 구현 범위와 완료 조건을 찾아 요청에 연결합니다.</p></div><p class=\"takeaway\">뒤의 응답 비교는 설명을 위해 만든 가상 예시입니다. 실제 AI 실험 결과가 아닙니다.</p>"
    },
    {
      "label": "02 · 정보가 빠진 요청",
      "title": "짧은 요청에 남은 빈칸",
      "time": "00:45–01:45",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">가상 요청과 가상 응답</p><h2>짧은 요청에<br>남은 빈칸</h2><div class=\"translation\"><article><small>요청</small><h3>공지 검색 만들어줘</h3><p>사용자와 검색 조건, 쓸 데이터, 완료 기준을 적지 않았습니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>가능한 가상 응답</small><h3>계정별 추천 공지 화면</h3><p>로그인과 추천을 제안하지만, 아침 공지 검토에 필요한 검색과 원문 대조는 구체적이지 않습니다.</p></article></div><p class=\"takeaway\">AI가 반드시 이렇게 답한다는 뜻은 아닙니다. 빠진 조건 때문에 요청자가 원한 범위를 판단하기 어렵다는 예시입니다.</p>"
    },
    {
      "label": "03 · 컨텍스트",
      "title": "작업에 필요한 관련 정보",
      "time": "01:45–02:40",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">컨텍스트의 뜻</p><h2>작업에 필요한<br>관련 정보</h2><table class=\"lesson-table\"><thead><tr><th>정보</th><th>SignalDesk에서 확인할 내용</th></tr></thead><tbody><tr><td>현재 파일</td><td>이미 작성한 문서와 관련 코드</td></tr><tr><td>규칙</td><td>수정할 범위와 보류할 기능</td></tr><tr><td>목표</td><td>검색한 공지의 원문과 mock 요약 대조</td></tr><tr><td>미정 사항</td><td>아직 정하지 않은 폴더 구조와 구현 방식</td></tr></tbody></table><p class=\"takeaway\">모든 파일을 읽거나 요청을 길게 쓰는 것만으로 좋은 결과를 보장할 수는 없습니다. 이번 판단에 영향을 주는 정보를 고릅니다.</p><p class=\"footnote\">참고: <a href=\"https://learn.chatgpt.com/docs/prompting\">OpenAI · 필요한 컨텍스트와 작업 경계</a></p>"
    },
    {
      "label": "04 · 참조 문서",
      "title": "문서별로 확인할 내용",
      "time": "02:40–03:40",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">연습 저장소의 문서 구성 예시</p><h2>문서별로<br>확인할 내용</h2><table class=\"lesson-table\"><thead><tr><th>예제 경로</th><th>이번 요청에서 읽을 내용</th></tr></thead><tbody><tr><td>docs/PRODUCT.md</td><td>PRD의 사용자 가정, 합성 공지와 완료 조건</td></tr><tr><td>docs/ARCHITECTURE.md</td><td>구조 초안과 아직 정하지 않은 항목</td></tr><tr><td>docs/TASKS.md</td><td>이번 작업 T-001의 검색 조건</td></tr></tbody></table><p class=\"takeaway\">AGENTS.md에 문서 경로와 읽을 목적을 적습니다. 파일 이름만으로 참조 문서 전체가 자동 로딩된다고 가정하지 않습니다.</p><p class=\"footnote\">예제 경로는 실제 저장소에 맞춥니다. 구조 결정은 섹션 03에서 다룹니다. 참고: <a href=\"https://learn.chatgpt.com/docs/agent-configuration/agents-md\">OpenAI · 프로젝트 지침</a></p>"
    },
    {
      "label": "05 · 합성 공지",
      "title": "검색에 사용할 고정 자료",
      "time": "03:40–04:40",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">PRODUCT.md에 넣을 학습용 데이터</p><h2>검색에 사용할<br>고정 자료</h2><table class=\"lesson-table\"><thead><tr><th>제목</th><th>분류와 ID</th></tr></thead><tbody><tr><td>동네 도서관, 금요일 야간 개방</td><td>생활 (E-001)</td></tr><tr><td>강변 자전거 도로 점검 안내</td><td>교통 (E-002)</td></tr><tr><td>주말 어린이 과학 체험 행사</td><td>교육 (E-003)</td></tr></tbody></table><p class=\"takeaway\">검색어는 제목에 포함된 글자로 찾고, 분류를 함께 적용합니다. ‘도서관’과 ‘생활’에 맞는 공지는 E-001 한 건입니다.</p><p class=\"footnote\">E-001 합성 원문: “동네 도서관이 금요일에 열람실을 오후 9시까지 연장 운영합니다.” 실제 기관의 공지가 아닙니다.</p>"
    },
    {
      "label": "06 · 완료 조건",
      "title": "입력과 기대 결과의 연결",
      "time": "04:40–05:40",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">PRD에서 가져올 확인 기준</p><h2>입력과 기대 결과의 연결</h2><table class=\"lesson-table\"><thead><tr><th>입력 또는 행동</th><th>기대 결과</th></tr></thead><tbody><tr><td>제목 ‘도서관’ + 분류 ‘생활’</td><td>E-001 한 건을 목록에 표시</td></tr><tr><td>제목 ‘산악박물관’ 검색</td><td>0건과 결과 없음 안내</td></tr><tr><td>E-001 상세 선택</td><td>같은 공지의 원문과 mock 요약 표시</td></tr></tbody></table><p class=\"takeaway\">mock은 미리 준비한 고정 예시입니다. 상세 화면에서 원문의 ‘금요일’, ‘열람실’, ‘오후 9시’를 요약 예시와 대조합니다.</p><p class=\"footnote\">학습용 완료 조건이며, 앱을 구현하거나 이 조건을 실행해 통과했다는 뜻은 아닙니다.</p>"
    },
    {
      "label": "07 · 컨텍스트가 있는 요청",
      "title": "자료와 범위를 지정한 요청",
      "time": "05:40–06:50",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">앞의 짧은 요청에 조건 추가</p><h2>자료와 범위를<br>지정한 요청</h2><pre class=\"code-example\"><code>공지 검색 만들어줘.\nAGENTS.md와 참조 문서를 먼저 읽어줘.\nPRODUCT.md의 합성 공지와 완료 조건을 적용해줘.\n검색, 목록, 상세의 원문과 mock 요약 대조까지 구현해줘.\n계정, 결제, 추천, 알림·공유 자동화, 외부 AI 실호출은 제외해줘.\n정하지 않은 구조와 확인할 내용을 먼저 알려줘.</code></pre><p class=\"takeaway\">문서 경로는 AGENTS.md에서 지정합니다. 보류한 다섯 항목과 완료 조건을 요청에서도 확인합니다.</p><p class=\"footnote\">참고: <a href=\"https://learn.chatgpt.com/docs/prompting\">OpenAI · 목표, 자료와 작업 경계</a></p>"
    },
    {
      "label": "08 · 가상 응답 비교",
      "title": "조건을 반영한 가상 작업안",
      "time": "06:50–07:55",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">같은 목표에 자료를 추가한 경우</p><h2>조건을 반영한<br>가상 작업안</h2><div class=\"translation\"><article><small>정보가 빠진 요청의 가상 응답</small><h3>계정별 추천 화면</h3><p>검색 조건과 상세 화면의 대조 기준이 빠진 상태입니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>자료를 준 요청의 가상 응답</small><h3>합성 공지 검색과 대조</h3><p>‘도서관’과 ‘생활’은 E-001 한 건, ‘산악박물관’은 0건으로 확인합니다. 상세는 원문과 고정 요약을 표시합니다.</p></article></div><p class=\"takeaway\">폴더 구조는 미정으로 남기고 확인을 요청합니다. 이 비교는 설명용이며, 실제 응답의 개선 정도를 측정한 결과가 아닙니다.</p>"
    },
    {
      "label": "09 · 새 세션 점검",
      "title": "구현 전 읽기 전용 요약",
      "time": "07:55–09:00",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">수강생이 실행할 컨텍스트 점검</p><h2>구현 전 읽기 전용 요약</h2><p class=\"lead\">별도 SignalDesk 연습 저장소에서 새 세션을 열고 아래 요청으로 확인합니다.</p><pre class=\"code-example\"><code>AGENTS.md와 명시한 참조 문서를 읽어줘.\n사용자와 첫 구현 범위를 요약해줘.\n완료 조건, 보류 기능 5개, 미정 사항을 적어줘.\n읽은 파일 경로와 찾지 못한 자료도 알려줘.\n파일 조회만 허용하고 수정, 구현, 커밋, 외부 요청은 하지 마.</code></pre><p class=\"takeaway\">요약 요청과 함께 읽기 전용 권한도 확인합니다. 요청 문장은 sandbox와 승인 설정을 대신하지 않습니다.</p><p class=\"footnote\">참고: <a href=\"https://learn.chatgpt.com/docs/agent-approvals-security\">OpenAI · sandbox와 승인 정책</a></p>"
    },
    {
      "label": "10 · 실습",
      "title": "요약과 원본 문서의 대조",
      "time": "09:00–10:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">실습 · 필요하면 일시 정지</p><h2>요약과 원본 문서의 대조</h2><p class=\"lead\">워크시트에서 빠진 자료를 채우고 새 세션의 요약을 원본 문서와 비교합니다.</p><div class=\"check-grid\"><p><b>01</b>보류 기능 다섯 개가 있는지 확인합니다. 계정, 결제, 추천, 알림·공유 자동화, 외부 AI 실호출입니다.</p><p><b>02</b>E-001 한 건, 검색 0건, 상세 원문과 mock 대조가 완료 조건에 있는지 확인합니다.</p><p><b>03</b>누락과 임의로 추가한 기능을 기록하고, 관련 문서 또는 참조 지침을 수정합니다.</p></div><p class=\"takeaway\">다음 2-2에서 반복 적용할 규칙을 연습 저장소의 AGENTS.md에 정리합니다.</p><p class=\"footnote\"><a href=\"section02-context-workbook.md\" download>섹션 02 컨텍스트 워크시트 내려받기</a></p>"
    }
  ]
};
