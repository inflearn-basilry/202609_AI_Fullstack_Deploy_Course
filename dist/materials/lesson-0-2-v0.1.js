// Public slide data only. Instructor originals are excluded from Git and deployment.
window.ORIENTATION = {
  "id": "0-2",
  "title": "SignalDesk 완성본 둘러보기",
  "duration": "07:00",
  "description": "앞으로 완성할 SignalDesk의 목록·검색·상세·분석·운영 흐름과 출시 증거를 살펴봅니다. 현재 자료는 합성 데이터를 사용하는 목표 화면과 개념도이며, 완성된 앱이나 실제 실행 결과를 보여 주는 자료가 아닙니다.",
  "sources": [
    {
      "title": "Zod 공식 문서 — 입력 검증과 검증 실패 처리",
      "url": "https://zod.dev/basics"
    },
    {
      "title": "Playwright 공식 문서 — 테스트 결과 리포트",
      "url": "https://playwright.dev/docs/test-reporters"
    }
  ],
  "deckUrl": "2026-09-08_0-2_SignalDesk_완성본_둘러보기_강의슬라이드_v0.1.html",
  "slides": [
    {
      "label": "PREVIEW / 0-2",
      "title": "우리가 완성할 SignalDesk",
      "time": "00:00–00:35",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">SignalDesk / 완성 목표 미리보기</p><h2>이벤트 한 건이<br><em>브리핑이 되기까지.</em></h2><p class=\"lead\">찾고 · 읽고 · 분석을 확인하고<br>문제가 생기면 원인을 찾는 서비스</p><p class=\"takeaway\">이번 자료는 <b>목표 화면·합성 예시</b>입니다.<br>실제 앱 시연과 실행 증거는 구현 후 촬영합니다.</p>"
    },
    {
      "label": "01 / USER JOURNEY",
      "title": "다섯 화면을 하나의 흐름으로 연결합니다",
      "time": "00:35–01:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">사용자 흐름 / 개념도</p><h2>다섯 화면을<br>하나의 흐름으로 연결합니다.</h2><div class=\"pipeline\"><article><small>01</small><h3>목록</h3><p>들어온 소식<br>한눈에 보기</p></article><article><small>02</small><h3>검색</h3><p>검색어·분류로<br>범위 줄이기</p></article><article><small>03</small><h3>상세</h3><p>선택한 소식의<br>원문 확인</p></article><article><small>04</small><h3>분석</h3><p>요약·핵심 포인트<br>처리 상태 확인</p></article><article><small>05</small><h3>운영</h3><p>관리자가<br>실행 이력 확인</p></article></div><p class=\"takeaway\">화면 뒤에서는 <b>수집 → 정규화 → 중복 방지 → 저장</b>이 이어집니다.</p>"
    },
    {
      "label": "02 / LIST & SEARCH",
      "title": "목록에서 필요한 소식을 찾습니다",
      "time": "01:10–01:55",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">목록·검색 목표 화면 / 강의용 합성 데이터</p><h2>“도서관” 소식만<br><em>찾아볼까요?</em></h2><table class=\"lesson-table\"><thead><tr><th>이벤트 제목</th><th>카테고리</th></tr></thead><tbody><tr><td>동네 도서관, 금요일 야간 개방</td><td>생활</td></tr><tr><td>강변 자전거 도로 점검 안내</td><td>교통</td></tr><tr><td>주말 어린이 과학 체험 행사</td><td>교육</td></tr></tbody></table><p class=\"takeaway\">검색어 <b>도서관</b> + 카테고리 <b>생활</b> → 예시 결과 1건<br>검색 결과가 없으면 ‘검색 결과가 없습니다’를 표시합니다.</p>"
    },
    {
      "label": "03 / EVENT DETAIL",
      "title": "상세에서 원문과 분석을 구분합니다",
      "time": "01:55–02:35",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">상세 목표 화면 / 강의용 합성 이벤트 E-001</p><h2>원문을 확인할 수 있어야<br>요약도 판단할 수 있습니다.</h2><div class=\"translation\"><article><small>원문 / 합성 데이터</small><h3>금요일은<br>오후 9시까지 개방</h3><p>동네 도서관이 금요일에<br>열람실을 연장 운영합니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>별도로 표시할 정보</small><h3>출처·시각<br>카테고리·분석 상태</h3><p>분석 결과는 아래 영역에서<br>원문과 나누어 보여 줍니다.</p></article></div><p class=\"takeaway\">목록에서 고른 <b>같은 이벤트</b>가 열리는지 확인합니다.</p>"
    },
    {
      "label": "04 / AI BRIEF",
      "title": "AI 응답을 확인한 뒤 화면에 사용합니다",
      "time": "02:35–03:20",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">분석 목표 화면 / 미리 작성한 mock 응답 예시</p><h2>요약과 핵심 포인트를<br><em>정해진 형식으로 받습니다.</em></h2><div class=\"translation\"><article><small>요약 예시</small><h3>금요일 열람실을<br>오후 9시까지 운영</h3><p>핵심 포인트: 운영 요일 · 종료 시각</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>사용 전 확인</small><h3>필수 항목·자료형<br>원문과의 일치</h3><p>형식 검증과 내용 확인을<br>각각 수행합니다.</p></article></div><p class=\"takeaway\">mock는 <b>미리 준비한 응답</b>입니다. 실제 모델이 생성한 결과와 구분합니다.</p>"
    },
    {
      "label": "05 / FAILURE STATES",
      "title": "분석이 실패해도 상태를 알 수 있어야 합니다",
      "time": "03:20–04:00",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">실패 처리 목표 / 개념도</p><h2>실패를 숨기지 않고<br>다음 행동을 안내합니다.</h2><div class=\"project-grid\"><article><small>응답 형식 오류</small><h3>검증 실패</h3><p>필수 항목 누락<br>잘린 응답</p><b>성공 결과로 저장하지 않기</b></article><article><small>응답 지연</small><h3>시간 초과</h3><p>대기 종료<br>실패 원인 기록</p><b>무한 대기·무한 재시도 막기</b></article><article><small>같은 요청 반복</small><h3>중복 확인</h3><p>같은 이벤트의<br>기존 처리 상태 조회</p><b>불필요한 재호출 줄이기</b></article></div>"
    },
    {
      "label": "06 / OPERATIONS",
      "title": "운영자는 실행 한 건을 따라갑니다",
      "time": "04:00–04:45",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">최소 운영 화면 / 표시할 항목의 설계</p><h2>“왜 실패했지?”에<br><em>답할 기록을 남깁니다.</em></h2><div class=\"check-grid\"><p><b>01</b> 실행 ID · 이벤트 ID</p><p><b>02</b> mock/real · 모델 · 프롬프트 버전</p><p><b>03</b> 처리 상태 · 오류 유형 · 시각</p><p><b>04</b> 호출 수 · 비용 추정치</p></div><p class=\"takeaway\">예상 비용과 실제 청구 금액은 구분하고,<br>비밀값은 화면과 로그에 남기지 않습니다.</p>"
    },
    {
      "label": "07 / TEST EVIDENCE",
      "title": "화면을 본 뒤 자동 테스트로 확인합니다",
      "time": "04:45–05:25",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">완성 기준 / 실제 실행 결과로 남길 증거</p><h2>같은 동작을 다시 확인할<br>테스트를 남깁니다.</h2><div class=\"route\"><article><small>단위 테스트</small><h3>작은 규칙</h3><p>날짜 변환<br>응답 형식 검증</p></article><article><small>통합 테스트</small><h3>연결된 동작</h3><p>DB 저장·조회<br>API 응답 계약</p></article><article><small>E2E 테스트</small><h3>사용자 흐름</h3><p>목록 → 검색 → 상세<br>분석 상태 확인</p></article></div><p class=\"takeaway\">실행한 코드 버전 · 명령 · 결과 · 실패 원인을 함께 저장합니다.</p>"
    },
    {
      "label": "08 / DEPLOYMENT",
      "title": "공개 주소에서도 핵심 흐름을 확인합니다",
      "time": "05:25–06:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">배포 완료 조건 / 현재 공개 URL 미확보</p><h2>배포한 버전과<br><em>확인한 결과를 연결합니다.</em></h2><div class=\"check-grid\"><p><b>01</b> 접속 가능한 공개 URL</p><p><b>02</b> 배포된 커밋 해시</p><p><b>03</b> 공개 환경의 핵심 흐름 확인</p><p><b>04</b> 비밀값을 제외한 설정 목록</p></div><p class=\"takeaway\">최종 제출에는 <b>실제로 확인한 주소와 코드 버전</b>을 적습니다.</p>"
    },
    {
      "label": "09 / RUNBOOK",
      "title": "내일 문제가 나도 확인할 순서를 남깁니다",
      "time": "06:00–06:35",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">운영 런북 / 작성할 문서 예시</p><h2>장애가 났을 때<br>무엇부터 볼지 적어 둡니다.</h2><div class=\"route\"><article><small>01 / 확인</small><h3>어디서 실패?</h3><p>증상 · 환경<br>실행 ID · 오류 유형</p></article><article><small>02 / 대응</small><h3>계속해도 될까?</h3><p>추가 호출 중지 조건<br>재시도 가능 여부</p></article><article><small>03 / 복구</small><h3>돌아왔을까?</h3><p>수정·롤백 절차<br>핵심 흐름 재확인</p></article></div><p class=\"takeaway\">런북은 <b>다른 사람이 따라 할 수 있는 확인·복구 순서</b>입니다.</p>"
    },
    {
      "label": "10 / YOUR COMPLETION CHECK",
      "title": "나의 완성 기준 네 줄을 남깁니다",
      "time": "06:35–07:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">실습 체크 / 개인 완성 기준표</p><h2>내 프로젝트에도<br><em>이 네 줄을 적어 주세요.</em></h2><div class=\"check-grid\"><p><b>01</b> 사용자가 끝낼 핵심 흐름</p><p><b>02</b> 다시 실행할 자동 테스트</p><p><b>03</b> 공개 URL · 배포한 코드 버전</p><p><b>04</b> 실패 이력 · 확인·복구 문서</p></div><p class=\"takeaway\">다음 수업 / 0-3. AI가 할 일과 사람이 책임질 일</p>"
    }
  ]
};
