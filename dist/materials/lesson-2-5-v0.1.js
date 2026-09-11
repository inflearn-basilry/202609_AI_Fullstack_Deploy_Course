window.ORIENTATION = {
  "id": "2-5",
  "title": "작은 diff와 승인 게이트",
  "duration": "08:00",
  "description": "커리큘럼 v0.4 기준. SignalDesk 검색 규칙을 작업 티켓으로 나누고, 변경 전후의 차이와 승인 범위, 수용 기준에 연결된 검증 근거로 완료를 판단합니다.",
  "sources": [
    {
      "title": "Git: git-diff Documentation",
      "url": "https://git-scm.com/docs/git-diff"
    },
    {
      "title": "Git: git-status Documentation",
      "url": "https://git-scm.com/docs/git-status"
    },
    {
      "title": "Google Engineering Practices: Small CLs",
      "url": "https://google.github.io/eng-practices/review/developer/small-cls.html"
    }
  ],
  "deckUrl": "2026-09-11_2-5_작은_diff와_승인_게이트_강의슬라이드_v0.1.html",
  "slides": [
    {
      "label": "01 · 이번 강의",
      "title": "작은 diff와 승인 게이트",
      "time": "00:00–00:40",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">2-5 · 8분</p><h2>작은 diff와<br>승인 게이트</h2><p class=\"lead\">diff는 두 상태 사이에서 무엇을 더하고 지웠는지 보여주는 변경 내역입니다.</p><div class=\"check-grid\"><p><b>목표</b>한 작업에는 검토할 목표 하나를 적습니다. 관련 코드와 테스트를 함께 봅니다.</p><p><b>크기</b>정해진 줄 수보다 변경 목적과 영향을 사람이 설명할 수 있는지가 중요합니다.</p></div><p class=\"takeaway\">SignalDesk의 검색 규칙 하나를 예로 들어 변경 범위와 승인 시점을 정합니다. 구현과 테스트 실행은 후속 작업입니다.</p><p class=\"footnote\">참고: <a href=\"https://google.github.io/eng-practices/review/developer/small-cls.html\">Google · 목적이 분명한 작은 변경</a></p>"
    },
    {
      "label": "02 · 작업 티켓",
      "title": "T-001의 목표와 허용 범위",
      "time": "00:40–01:30",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">docs/TASKS.md · 티켓 예시</p><h2>T-001의 목표와<br>허용 범위</h2><table class=\"lesson-table\"><thead><tr><th>항목</th><th>합의할 내용</th></tr></thead><tbody><tr><td>목표</td><td>제목 검색어와 분류 동시 적용.</td></tr><tr><td>관련 기준</td><td>PRODUCT.md의 AC-01·AC-02를 참조합니다.</td></tr><tr><td>변경 허용</td><td>검색 조건 처리와 해당 테스트 파일.</td></tr><tr><td>변경 금지</td><td>계정·결제·추천·알림 및 공유 자동화·외부 AI 실호출 보류.</td></tr></tbody></table><p class=\"takeaway\">구현 전에 실제 파일 위치를 확인해 티켓에 적습니다. 기준의 원문은 PRODUCT.md에 유지합니다.</p><p class=\"footnote\">예정 경로 예시: server/services/search.ts, tests/search.test.ts. 현재 미확정 경로입니다.</p>"
    },
    {
      "label": "03 · 합성 데이터",
      "title": "검색 규칙을 확인할 공지 3건",
      "time": "01:30–02:20",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">학습 가정 · 지역 소식 담당자의 아침 공지 검토</p><h2>검색 규칙을 확인할<br>공지 3건</h2><table class=\"lesson-table\"><thead><tr><th>ID와 분류</th><th>공지 제목 또는 검색 조건</th></tr></thead><tbody><tr><td>E-001 · 생활</td><td>동네 도서관, 금요일 야간 개방</td></tr><tr><td>E-002 · 교통</td><td>강변 자전거 도로 점검 안내</td></tr><tr><td>E-003 · 교육</td><td>주말 어린이 과학 체험 행사</td></tr><tr><td>AC-02 · 0건 예상</td><td>‘산악박물관’ 검색 시 이전 결과를 지우고 ‘검색 결과가 없습니다’ 표시.</td></tr></tbody></table><p class=\"takeaway\">AC-01은 ‘도서관’·‘생활’로 E-001 한 건을 예상합니다. 두 기준 모두 미실행입니다.</p><p class=\"footnote\">공지와 AC는 docs/PRODUCT.md에 적습니다. 합성 자료입니다.</p>"
    },
    {
      "label": "04 · 변경 전후",
      "title": "OR와 AND에 따른 검색 결과",
      "time": "02:20–03:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">가상의 실패 사례 · 의사 코드</p><h2>OR와 AND에 따른<br>검색 결과</h2><p class=\"lead\">‘동시에 적용’은 두 조건을 모두 만족한다는 뜻입니다. 아래 코드는 판단 규칙만 보여줍니다.</p><pre class=\"code-example\"><code>- 포함 = 제목에 검색어가 있음 OR 분류가 같음\n+ 포함 = 제목에 검색어가 있음 AND 분류가 같음</code></pre><p class=\"takeaway\">‘도서관’과 ‘교통’을 넣으면 OR는 E-001과 E-002를 포함합니다. 합의한 AND 규칙의 예상값은 0건입니다. 이 사례를 추가하면 조건 하나만 맞는 공지를 걸러내는지 확인할 수 있습니다.</p><p class=\"footnote\">실제 버그 보고가 아닙니다. −는 제거할 내용, +는 추가할 내용입니다.</p>"
    },
    {
      "label": "05 · 승인 시점",
      "title": "범위 확대 전에 받는 승인",
      "time": "03:10–04:00",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">티켓의 중단 조건과 승인자</p><h2>범위 확대 전에<br>받는 승인</h2><table class=\"lesson-table\"><thead><tr><th>중단 조건</th><th>사람에게 판단받을 내용</th></tr></thead><tbody><tr><td>제품 범위 확대</td><td>추천 기능 등 새 요구의 필요성과 영향</td></tr><tr><td>새 의존성·API 호출</td><td>추가 패키지의 목적과 외부 호출 비용</td></tr><tr><td>DB 구조 변경</td><td>스키마 변경 이유와 기존 데이터 영향</td></tr><tr><td>실제 키·삭제·외부 전송</td><td>비밀값을 제외한 권한 정보, 정확한 대상과 처리 범위</td></tr></tbody></table><p class=\"takeaway\">승인 게이트는 범위를 넓히기 전 사람이 판단하는 시점입니다. 작업을 멈추고 필요한 변경과 대안을 티켓의 승인자에게 요청합니다.</p><p class=\"footnote\">승인자 예시: 제품 담당자 역할의 수강생. ‘진행해’는 합의한 범위 안에서 해석합니다.</p>"
    },
    {
      "label": "06 · 승인 구분",
      "title": "제품 승인과 도구 실행 권한",
      "time": "04:00–04:45",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">이 강의의 작업 운영 기준</p><h2>제품 승인과<br>도구 실행 권한</h2><div class=\"translation\"><article><small>제품 담당자의 판단</small><h3>무엇을 바꿀지 승인</h3><p>검색 작업에 외부 AI 요약을 더할지 결정합니다. 범위와 비용을 검토한 답을 티켓에 남깁니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">↔</span><article><small>실행 환경의 권한</small><h3>명령 실행을 허용</h3><p>도구가 요청한 파일 접근이나 명령을 실행할 수 있는지 정합니다. 허용된 실행도 티켓 범위를 확인합니다.</p></article></div><p class=\"takeaway\">도구 사용 허용을 제품 범위 확대 승인으로 해석하지 않습니다. 승인자의 답이 모호하면 필요한 변경을 구체적으로 적고 답을 받은 뒤 해당 작업을 이어갑니다.</p>"
    },
    {
      "label": "07 · diff 확인",
      "title": "변경 파일과 내용을 읽는 명령",
      "time": "04:45–05:35",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">읽기 전용 점검</p><h2>변경 파일과 내용을<br>읽는 명령</h2><pre class=\"code-example\"><code>git status --short   # 파일 상태와 새 파일\ngit diff --stat      # 스테이징 전 파일별 규모\ngit diff             # 스테이징 전 변경 내용\ngit diff --cached    # 스테이징한 변경 내용</code></pre><p class=\"takeaway\">스테이징은 다음 커밋에 담을 변경을 고르는 단계입니다. 추적하지 않는 새 파일은 기본 diff 본문에 없으므로 따로 열어 봅니다. 파일 목록을 티켓의 허용 경로와 대조합니다.</p><p class=\"footnote\">별도 SignalDesk 연습 저장소에서 사용합니다. 참고: <a href=\"https://git-scm.com/docs/git-diff\">Git diff</a>, <a href=\"https://git-scm.com/docs/git-status\">Git status</a></p>"
    },
    {
      "label": "08 · 검증 방법",
      "title": "티켓에 적는 검증 방법",
      "time": "05:35–06:25",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">T-001의 검증 계획</p><h2>티켓에 적는<br>검증 방법</h2><div class=\"check-grid\"><p><b>명령 확인</b>실제 연습 저장소의 README와 package.json scripts를 읽고 실행할 검증 명령을 고릅니다.</p><p><b>조건 준비</b>합성 공지 3건으로 AC-01의 1건과 AC-02의 0건을 확인합니다. 조건 불일치 사례도 넣습니다.</p><p><b>결과 기록</b>실행한 명령과 관찰한 결과를 남깁니다. 실행하지 못했으면 미실행 상태와 사유를 적습니다.</p></div><p class=\"takeaway\">검증 명령이 없거나 환경 준비가 범위를 넘으면 중단 조건에 따라 필요한 작업을 요청합니다. 빈 검색어·정렬·타임아웃은 미정으로 남깁니다.</p>"
    },
    {
      "label": "09 · 완료 검토",
      "title": "수용 기준, diff, 실행 근거",
      "time": "06:25–07:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">구현 후 완료 점검</p><h2>수용 기준, diff,<br>실행 근거</h2><table class=\"lesson-table\"><thead><tr><th>검토 질문</th><th>티켓에 연결할 근거</th></tr></thead><tbody><tr><td>무엇을 만족해야 하나?</td><td>AC-01의 1건, AC-02의 0건 화면 상태</td></tr><tr><td>어느 변경이 관련되나?</td><td>검색 조건 처리와 테스트의 diff, 새 파일 본문</td></tr><tr><td>실제로 확인했나?</td><td>실행 명령과 결과, 실패·미실행 사유</td></tr></tbody></table><p class=\"takeaway\">검토자는 기준과 실행 근거로 완료를 판단합니다. 함수가 0건을 반환해도 AC-02의 화면 검증은 남습니다. 표시 코드가 준비되면 이전 결과 제거와 0건 안내를 확인합니다.</p><p class=\"footnote\">앱 구현과 테스트는 아직 실행 전입니다. 예상값을 실행 증거로 제출하지 않습니다.</p>"
    },
    {
      "label": "10 · 미션 2",
      "title": "컨텍스트 팩과 새 세션 점검",
      "time": "07:10–08:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">미션 2 · 필요하면 일시 정지</p><h2>컨텍스트 팩과<br>새 세션 점검</h2><p class=\"lead\">별도 SignalDesk 연습 저장소용 문서 네 개를 준비하고 새 AI 세션에 읽을 범위를 지정합니다.</p><pre class=\"code-example\"><code>AGENTS.md\ndocs/PRODUCT.md\ndocs/ARCHITECTURE.md\ndocs/TASKS.md</code></pre><p class=\"takeaway\">새 세션에 지정 파일 조회만 허용하고 제품 범위, 금지사항 다섯 가지, T-001의 기준과 미정 사항을 설명해 달라고 요청합니다. 수정·구현·외부 요청은 하지 않습니다. 답을 문서와 대조합니다.</p><p class=\"footnote\"><a href=\"section02-context-workbook.md\" download>섹션 02 컨텍스트 워크시트 내려받기</a></p>"
    }
  ]
};
