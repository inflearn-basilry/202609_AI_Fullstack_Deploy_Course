window.ORIENTATION = {
  "id": "1-3",
  "title": "핵심 흐름 한 줄과 하지 않을 것",
  "duration": "09:00",
  "description": "커리큘럼 v0.4 기준. SignalDesk에서 공지 검색부터 원문과 요약 대조까지를 첫 구현 범위로 정하고, 보류할 기능과 이유를 작성합니다.",
  "sources": [
    {
      "title": "GOV.UK: Learning about users and their needs",
      "url": "https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs"
    }
  ],
  "deckUrl": "2026-09-10_1-3_핵심_흐름과_MVP_범위_강의슬라이드_v0.1.html",
  "slides": [
    {
      "label": "01 · 이번 강의",
      "title": "핵심 흐름 한 줄과 하지 않을 것",
      "time": "00:00–00:45",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">1-3 · 9분</p><h2>핵심 흐름 한 줄과<br>하지 않을 것</h2><p class=\"lead\">1-1의 문제 문장과 1-2의 가정표에서 이번에 구현할 작업의 시작과 끝을 정합니다.</p><div class=\"check-grid\"><p><b>01</b>지역 소식 정리 담당자가 아침에 공지를 검토한다는 학습 가정을 유지합니다.</p><p><b>02</b>여러 원문에서 필요한 소식을 찾아 대조하는 작업 중, 먼저 구현할 작업을 고릅니다.</p><p><b>03</b>작업 순서를 한 문장으로 쓰고, 포함할 기능과 보류할 이유를 적습니다.</p></div>"
    },
    {
      "label": "02 · 범위 수정",
      "title": "기능을 선택하는 기준",
      "time": "00:45–01:40",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">범위 수정 예시</p><h2>기능을 선택하는 기준</h2><div class=\"translation\"><article><small>수정 전</small><h3>로그인, 추천, 대시보드</h3><p>기능 이름은 있지만 어떤 공지를 확인하고 언제 작업이 끝나는지 빠져 있습니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>수정 후</small><h3>검색한 공지의 원문 대조</h3><p>필요한 공지를 검색하고 요약과 원문을 대조해 공유할 내용을 확인합니다.</p></article></div><p class=\"takeaway\">아침 공지 검토라는 목적에 맞춘 수정입니다. 이 작업의 필요성은 아직 학습 가정입니다.</p><p class=\"footnote\">참고: <a href=\"https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs\">GOV.UK · 사용자 요구와 사용자 스토리 연결</a></p>"
    },
    {
      "label": "03 · 핵심 흐름",
      "title": "검색부터 원문 대조까지",
      "time": "01:40–02:35",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">한 줄로 정한 구현 범위</p><h2>검색부터<br>원문 대조까지</h2><p class=\"lead\">담당자가 검색어와 분류로 공지를 찾고, 상세 화면에서 mock 요약과 원문을 대조해 공유할 내용을 확인합니다.</p><div class=\"check-grid\"><p><b>01</b>검색어 ‘도서관’과 분류 ‘생활’을 입력합니다.</p><p><b>02</b>‘동네 도서관, 금요일 야간 개방’을 선택합니다.</p><p><b>03</b>같은 공지의 원문과 미리 만든 요약 예시를 읽습니다.</p><p><b>04</b>사람이 공유할 내용을 판단하면 종료합니다. 자동 발송은 보류합니다.</p></div><p class=\"takeaway\">mock은 실제 응답 대신 쓰는 고정 예시입니다. 여기서는 요약 예시를 미리 만듭니다. 실제 AI가 생성한 결과는 아닙니다.</p>"
    },
    {
      "label": "04 · 세로 슬라이스",
      "title": "한 작업에 필요한 부분을 연결",
      "time": "02:35–03:30",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">세로 슬라이스의 의미</p><h2>한 작업에 필요한<br>부분을 연결</h2><p class=\"lead\">세로 슬라이스는 사용자 작업 하나를 끝내도록 화면, 처리, 데이터를 연결하는 구현 단위입니다.</p><table class=\"lesson-table\"><thead><tr><th>부분</th><th>첫 구현에서 할 일</th></tr></thead><tbody><tr><td>화면</td><td>검색 조건과 결과 목록, 상세의 원문과 요약 표시</td></tr><tr><td>처리</td><td>조건에 맞는 공지 검색과 식별자로 상세 조회</td></tr><tr><td>데이터</td><td>합성 공지와 연결된 mock 요약 준비</td></tr></tbody></table><p class=\"takeaway\">첫 구현에서는 데이터베이스 없이 검색과 상세 조회를 연결합니다. 결과 없음과 요약 실패도 표시합니다. 저장 기능은 뒤 강의에서 추가합니다.</p>"
    },
    {
      "label": "05 · 고정 입력",
      "title": "같은 입력으로 흐름 확인",
      "time": "03:30–04:25",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">학습용 합성 공지</p><h2>같은 입력으로<br>흐름 확인</h2><table class=\"lesson-table\"><thead><tr><th>제목</th><th>분류</th></tr></thead><tbody><tr><td>동네 도서관, 금요일 야간 개방</td><td>생활</td></tr><tr><td>강변 자전거 도로 점검 안내</td><td>교통</td></tr><tr><td>주말 어린이 과학 체험 행사</td><td>교육</td></tr></tbody></table><p class=\"takeaway\">제목에 ‘도서관’이 있고 분류가 ‘생활’인 공지는 1건입니다. ‘산악박물관’으로 검색하면 0건이어야 합니다. 이 값과 실행 결과를 비교합니다.</p><p class=\"footnote\">합성 원문: “동네 도서관이 금요일에 열람실을 오후 9시까지 연장 운영합니다.” 실제 기관의 공지가 아니며 검색 규칙도 실습 가정입니다.</p>"
    },
    {
      "label": "06 · MVP 범위",
      "title": "첫 구현에 포함할 기능과 이유",
      "time": "04:25–05:20",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">이번에 포함할 범위</p><h2>첫 구현에 포함할<br>기능과 이유</h2><table class=\"lesson-table\"><thead><tr><th>포함 기능</th><th>포함 이유</th></tr></thead><tbody><tr><td>검색어와 분류</td><td>조건에 맞는 공지만 표시합니다.</td></tr><tr><td>목록과 상세 선택</td><td>어떤 공지를 확인하는지 알 수 있습니다.</td></tr><tr><td>mock 요약과 원문 표시</td><td>운영 시간과 대상 공간을 원문과 대조합니다.</td></tr><tr><td>결과 없음과 실패 안내</td><td>자료가 없는 경우와 처리 실패를 구분합니다.</td></tr></tbody></table><p class=\"takeaway\">MVP는 핵심 기능만 구현해 사용자에게 필요한지 검증하는 제품입니다. 이 실습에서는 원문 대조 기능을 정하고, 사용자 검증은 이후에 진행합니다.</p>"
    },
    {
      "label": "07 · 보류 목록",
      "title": "보류 이유와 다시 검토할 조건",
      "time": "05:20–06:15",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">이번에 하지 않을 것</p><h2>보류 이유와<br>다시 검토할 조건</h2><table class=\"lesson-table\"><thead><tr><th>보류 기능</th><th>현재 이유</th><th>재검토 조건</th></tr></thead><tbody><tr><td>로그인</td><td>합성 공지 대조에 계정 불필요</td><td>개인별 저장 기능 검토</td></tr><tr><td>결제</td><td>수익 모델의 근거 없음</td><td>유료 제공 범위 검토</td></tr><tr><td>추천</td><td>검색으로 공지를 찾을 수 있음</td><td>검색의 한계 확인</td></tr><tr><td>공유 자동화</td><td>첫 목표는 사람의 내용 확인</td><td>검토 절차와 발송 대상 결정</td></tr></tbody></table><p class=\"takeaway\">각 기능을 왜 보류하는지, 언제 다시 검토할지 적습니다. 조건을 충족하면 필요성을 다시 판단하며, 구현을 미리 약속하지 않습니다.</p>"
    },
    {
      "label": "08 · 실패 경계",
      "title": "원문 대조를 막는 상태",
      "time": "06:15–07:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">실패 상태</p><h2>원문 대조를<br>막는 상태</h2><table class=\"lesson-table\"><thead><tr><th>상태</th><th>이번 흐름의 기대 동작</th></tr></thead><tbody><tr><td>검색 0건</td><td>결과 없음과 조건 변경 안내</td></tr><tr><td>원문과 요약 불일치</td><td>담당자가 요약과 대조하도록 원문 표시</td></tr><tr><td>요약 형식 검증 실패</td><td>필수 항목 누락 시 요약 오류 표시</td></tr><tr><td>시간초과</td><td>실패와 재시도 안내, 검색 조건과 원문 유지</td></tr></tbody></table><p class=\"takeaway\">형식 오류와 시간초과는 화면에 표시하고, 요약 내용의 오류는 사람이 원문과 대조해 확인합니다. 내용 오류의 자동 탐지는 제외합니다. 1-4에서 상태별 완료 조건을 작성합니다.</p>"
    },
    {
      "label": "09 · 전체 강의 연결",
      "title": "첫 흐름 이후의 확장 범위",
      "time": "07:10–08:05",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">전체 과정에서의 위치</p><h2>첫 흐름 이후의<br>확장 범위</h2><p class=\"lead\">검색과 원문 대조는 전체 서비스 중 먼저 구현할 부분입니다. 뒤 강의에서는 원문 대조 작업을 유지하며 기능을 확장합니다.</p><div class=\"check-grid\"><p><b>01</b>수집에서는 가져올 원문과 수집 실패를 다룹니다.</p><p><b>02</b>저장에서는 원문과 요약의 식별자와 데이터 구조를 다룹니다.</p><p><b>03</b>분석에서는 응답 형식과 오류 처리를 확인하고, 선택 실습에서 실제 API를 연결합니다.</p><p><b>04</b>운영에서는 반복 실행과 오류 확인을 다룹니다.</p></div><p class=\"takeaway\">확장 후에도 원문과 요약이 같은 공지에 속하는지 확인합니다.</p>"
    },
    {
      "label": "10 · 실습",
      "title": "범위 문장과 보류 이유 작성",
      "time": "08:05–09:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">실습 · 필요하면 일시 정지</p><h2>범위 문장과<br>보류 이유 작성</h2><p class=\"lead\">워크시트에 핵심 흐름과 포함 범위, 보류 항목의 이유를 작성합니다.</p><div class=\"translation\"><article><small>수정할 문장</small><h3>추천과 자동 공유까지 제공</h3><p>두 기능 없이도 담당자가 공유할 내용을 확인할 수 있는지 판단합니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>작성 예시</small><h3>검색 후 원문과 mock 요약 대조</h3><p>공유할 내용의 확인까지 포함합니다. 자동 공유는 검토 절차와 발송 대상을 정할 때 재검토합니다.</p></article></div><p class=\"takeaway\">다음 1-4에서 이 범위를 완료 조건이 있는 PRD에 옮깁니다.</p><p class=\"footnote\"><a href=\"section01-prd-workbook.md\" download>섹션 01 PRD 워크시트 내려받기</a></p>"
    }
  ]
};
