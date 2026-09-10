window.ORIENTATION = {
  "id": "1-4",
  "title": "완료 조건이 있는 1페이지 PRD",
  "duration": "09:00",
  "description": "커리큘럼 v0.4 기준. SignalDesk PRD 예시로 기능과 품질 요구, 성공·실패의 확인 기준을 구분하고 구현에 필요한 1페이지 문서를 작성합니다.",
  "sources": [
    {
      "title": "Cucumber: Gherkin Reference",
      "url": "https://cucumber.io/docs/gherkin/reference/"
    }
  ],
  "deckUrl": "2026-09-10_1-4_완료_조건과_1페이지_PRD_강의슬라이드_v0.1.html",
  "slides": [
    {
      "label": "01 · 이번 강의",
      "title": "완료 조건이 있는 1페이지 PRD",
      "time": "00:00–00:45",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">1-4 · 9분</p><h2>완료 조건이 있는<br>1페이지 PRD</h2><p class=\"lead\">PRD는 무엇을 만들고 어떤 결과로 완료를 판단할지 적는 제품 요구사항 문서입니다.</p><div class=\"check-grid\"><p><b>01</b>1-1의 문제 문장과 1-2의 가정표에서 사용자와 상황을 가져옵니다.</p><p><b>02</b>1-3의 핵심 흐름과 보류 목록을 구현 범위로 옮깁니다.</p><p><b>03</b>각 요구의 완료를 판단할 조건인 ‘수용 기준’을 적습니다. 성공과 실패 상황을 모두 다룹니다.</p></div><p class=\"takeaway\">SignalDesk는 학습 예시이며, 문서 작성만으로 앱 구현이나 사용자 검증이 완료되지는 않습니다.</p>"
    },
    {
      "label": "02 · 요구 수정",
      "title": "확인할 수 있는 요구사항",
      "time": "00:45–01:40",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">요구사항의 구체성</p><h2>확인할 수 있는 요구사항</h2><div class=\"translation\"><article><small>수정 전</small><h3>정확하고 편리한 요약</h3><p>어느 공지의 무엇을 대조하고, 오류가 생기면 무엇을 보여줄지 빠져 있습니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>수정 후</small><h3>원문과 mock 요약 표시</h3><p>도서관 공지의 상세 화면에서 운영 요일과 종료 시간을 대조하도록 원문과 요약을 함께 보여줍니다.</p></article></div><p class=\"takeaway\">‘빠르다’는 요구에는 목표 응답 시간이 필요합니다. 실행 환경과 측정 방법을 정한 뒤 수치를 적습니다.</p>"
    },
    {
      "label": "03 · PRD 작성 예시",
      "title": "SignalDesk 첫 구현 PRD",
      "time": "01:40–02:35",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">1페이지 PRD 예시 · 학습 가정</p><h2>SignalDesk<br>첫 구현 PRD</h2><table class=\"lesson-table\"><thead><tr><th>항목</th><th>작성 내용</th></tr></thead><tbody><tr><td>사용자와 문제</td><td>지역 소식 담당자가 아침에 공지를 찾아 원문과 요약을 대조합니다.</td></tr><tr><td>기능과 범위</td><td>검색·상세·mock 요약. 계정·결제·추천·자동 공유는 보류합니다.</td></tr><tr><td>데이터와 품질</td><td>합성 공지 3건. 요약 실패 시 원문과 검색 조건을 유지합니다.</td></tr><tr><td>수용 기준</td><td>‘도서관’·‘생활’ 검색 1건, ‘산악박물관’ 검색 0건. 불일치, 형식 오류, 시간초과를 구분합니다.</td></tr></tbody></table><p class=\"takeaway\">다음 장에서 요구와 시나리오를 구체화합니다.</p>"
    },
    {
      "label": "04 · 요구 구분",
      "title": "기능 요구와 비기능 요구",
      "time": "02:35–03:30",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">동작과 품질의 구분</p><h2>기능 요구와<br>비기능 요구</h2><p class=\"lead\">기능 요구는 동작을, 비기능 요구는 동작 전반의 품질과 제약을 적습니다.</p><table class=\"lesson-table\"><thead><tr><th>구분</th><th>요구 예시</th><th>확인 방법</th></tr></thead><tbody><tr><td>기능</td><td>제목 검색어와 분류 동시 적용</td><td>결과 제목과 건수 비교</td></tr><tr><td>기능</td><td>선택한 공지의 원문과 요약 표시</td><td>목록과 상세의 제목 비교</td></tr><tr><td>비기능</td><td>API 키 등 실제 비밀값을 남기지 않음</td><td>파일·화면·로그 확인</td></tr><tr><td>비기능</td><td>주요 기능의 키보드 조작</td><td>Tab·Enter·초점 표시 확인</td></tr></tbody></table><p class=\"takeaway\">두 종류의 요구 모두 확인 방법이 필요합니다.</p>"
    },
    {
      "label": "05 · 성공 기준",
      "title": "전제, 행동, 관찰 가능한 결과",
      "time": "03:30–04:25",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">Given · When · Then</p><h2>전제, 행동,<br>관찰 가능한 결과</h2><p class=\"lead\">Given에는 시작 조건, When에는 행동, Then에는 관찰할 결과를 적습니다.</p><pre class=\"code-example\"><code>Given 합성 공지 3건이 준비되어 있다\nWhen ‘도서관’과 ‘생활’로 검색한다\nThen 결과는 1건이다\nAnd 제목은 ‘동네 도서관, 금요일 야간 개방’이다</code></pre><p class=\"takeaway\">검색어와 분류를 모두 만족해야 합니다. 결과의 건수와 제목으로 확인합니다. 자동 테스트로 실행하려면 각 단계를 코드로 연결해야 합니다.</p><p class=\"footnote\">참고: <a href=\"https://cucumber.io/docs/gherkin/reference/\">Cucumber · Given, When, Then과 단계 정의</a>. 자동 테스트는 앞으로 구현합니다.</p>"
    },
    {
      "label": "06 · 빈 결과",
      "title": "0건도 완료 조건에 포함",
      "time": "04:25–05:20",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">데이터가 없는 경우</p><h2>0건도<br>완료 조건에 포함</h2><p class=\"lead\">일치하는 공지가 없을 때 이전 결과가 남으면 현재 검색 결과로 오해할 수 있습니다.</p><pre class=\"code-example\"><code>Given 도서관 검색 결과가 표시되어 있다\nWhen 검색어를 ‘산악박물관’으로 바꿔 검색한다\nThen 결과는 0건이다\nAnd 이전 도서관 결과는 보이지 않는다\nAnd ‘검색 결과가 없습니다’ 안내가 보인다</code></pre><p class=\"takeaway\">검색어는 유지하고 조건을 바꾸도록 안내합니다. 검색 결과가 없는 경우와 처리 중 오류가 난 경우를 구분합니다.</p>"
    },
    {
      "label": "07 · 요약 오류",
      "title": "내용 불일치와 형식 오류의 차이",
      "time": "05:20–06:15",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">오류 종류별 기대 동작</p><h2>내용 불일치와<br>형식 오류의 차이</h2><div class=\"translation\"><article><small>내용 불일치</small><h3>오후 10시로 잘못 적힌 요약</h3><p>형식은 맞지만 운영 종료 시간이 틀립니다. 사람이 대조하도록 원문을 함께 표시합니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">↔</span><article><small>형식 검증 실패</small><h3>필수 요약 본문 누락</h3><p>이 실습의 응답에는 문자열 형태의 요약 본문이 필요합니다. 누락되면 요약 오류를 표시하고 원문을 유지합니다.</p></article></div><p class=\"takeaway\">형식 검사는 내용의 정확성을 보장하지 않습니다. 내용 불일치 자동 탐지는 이번 범위에서 제외합니다.</p><p class=\"footnote\">합성 원문: “동네 도서관이 금요일에 열람실을 오후 9시까지 연장 운영합니다.”</p>"
    },
    {
      "label": "08 · 재시도 기준",
      "title": "시간초과 이후의 화면과 재시도",
      "time": "06:15–07:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">응답을 받지 못한 경우</p><h2>시간초과 이후의<br>화면과 재시도</h2><pre class=\"code-example\"><code>Given 도서관 원문이 열린 상태다\nWhen mock 요약 요청이 시간초과로 끝난다\nThen 실패 안내와 재시도 버튼이 보인다\nAnd 검색 조건과 원문은 유지된다\nWhen 사용자가 재시도를 선택한다\nThen 같은 공지의 요약을 다시 요청한다</code></pre><p class=\"takeaway\">요청 중에는 재시도 버튼을 비활성화합니다. 자동 재시도는 보류합니다. 몇 초까지 기다릴지는 실행 환경을 정한 뒤 결정합니다.</p>"
    },
    {
      "label": "09 · 완료 판단",
      "title": "수용 기준과 실행 증거",
      "time": "07:10–08:05",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">문서 작성 이후에 남는 일</p><h2>수용 기준과<br>실행 증거</h2><p class=\"lead\">수용 기준은 구현이 요구사항을 만족하는지 확인할 조건입니다. 구현 후 실행 결과를 기록해야 완료를 판단할 수 있습니다.</p><table class=\"lesson-table\"><thead><tr><th>확인할 기준</th><th>구현 후 남길 증거</th></tr></thead><tbody><tr><td>검색과 상세</td><td>결과 제목과 건수, 연결된 원문을 확인한 기록</td></tr><tr><td>오류 상태 구분</td><td>형식 오류와 시간초과를 각각 재현한 결과</td></tr><tr><td>재시도</td><td>같은 공지 재요청과 입력 유지를 확인한 기록</td></tr></tbody></table><p class=\"takeaway\">현재는 기준 작성 단계입니다. 자동 테스트는 아직 구현하지 않았습니다. 구현 검증 이후에도 사용자에게 도움이 되는지는 별도로 조사해야 합니다.</p>"
    },
    {
      "label": "10 · 실습과 다음 단계",
      "title": "PRD 점검과 다음 작업",
      "time": "08:05–09:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">실습 · 필요하면 일시 정지</p><h2>PRD 점검과<br>다음 작업</h2><p class=\"lead\">워크시트에 문제와 가정, 작업 순서와 보류 범위를 옮기고 각 요구에 확인할 결과를 적습니다.</p><div class=\"translation\"><article><small>수정할 기준</small><h3>오류를 잘 처리한다</h3><p>어떤 실패를 만들고 무엇을 확인할지 빠져 있습니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>작성 예시</small><h3>본문 누락 시 원문 유지</h3><p>mock 요약에서 본문이 빠지면 오류 안내를 표시하고 도서관 공지 원문을 유지합니다.</p></article></div><p class=\"takeaway\">성공, 0건, 형식 오류, 시간초과 기준을 점검합니다. 다음 2-1에서는 PRD와 합성 데이터, 미정 사항을 AI가 참고할 저장소 문서로 정리합니다.</p><p class=\"footnote\"><a href=\"section01-prd-workbook.md\" download>섹션 01 PRD 워크시트 내려받기</a></p>"
    }
  ]
};
