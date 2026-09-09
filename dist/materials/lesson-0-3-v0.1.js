// Public slide data only. Instructor originals are excluded from Git and deployment.
window.ORIENTATION = {
  "id": "0-3",
  "title": "AI가 할 일과 사람이 책임질 일",
  "duration": "05:00",
  "description": "AI에게 맡길 조사·대안·작은 변경과 사람이 정할 목표·범위·권한·승인의 경계를 구체적인 작업 지시와 거절 사례로 익힙니다. 네 개의 승인 게이트는 이 강의의 작업 운영 규칙입니다.",
  "sources": [
    {
      "title": "GitHub 공식 문서 — 코드 변경 검토와 승인·변경 요청",
      "url": "https://docs.github.com/en/pull-requests/reference/pull-request-reviews"
    }
  ],
  "deckUrl": "2026-09-08_0-3_AI가_할_일과_사람이_책임질_일_강의슬라이드_v0.1.html",
  "slides": [
    {
      "label": "RESPONSIBILITY / 0-3",
      "title": "AI에게 일을 맡기기 전에 정할 것",
      "time": "00:00–00:25",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">이번 수업의 결과 / 역할과 승인 기준</p><h2>무엇을 맡길지,<br><em>어디서 판단할지 정합니다.</em></h2><p class=\"lead\">AI는 조사하고 제안하고 구현합니다.<br>사람은 목표·범위·권한과 채택 여부를 결정합니다.</p><p class=\"takeaway\">‘알아서 완성해 줘’를 <b>확인 가능한 작업</b>으로 바꿔 보겠습니다.</p>"
    },
    {
      "label": "01 / WHAT AI DOES",
      "title": "조사·대안·작은 변경을 맡깁니다",
      "time": "00:25–01:00",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">AI에게 맡길 일</p><h2>결과를 비교하고<br>확인할 수 있는 일을 맡깁니다.</h2><div class=\"project-grid\"><article><small>조사</small><h3>현재 상태 파악</h3><p>관련 코드 찾기<br>공식 문서 확인</p><b>출처와 근거를 함께 받기</b></article><article><small>대안</small><h3>선택지 비교</h3><p>구현 방법 두 가지<br>비용·복잡도 비교</p><b>추천 이유와 약점 받기</b></article><article><small>작은 변경</small><h3>한 목표 구현</h3><p>검색 결과 0건일 때<br>안내 문구 표시</p><b>변경 내용과 검증 결과 받기</b></article></div>"
    },
    {
      "label": "02 / WHAT PEOPLE DECIDE",
      "title": "사람은 목적과 허용 범위를 정합니다",
      "time": "01:00–01:35",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">사람이 책임질 결정</p><h2>“잘 만들어 줘”보다<br><em>네 가지를 먼저 정합니다.</em></h2><div class=\"check-grid\"><p><b>목표</b> 사용자가 무엇을 끝내야 할까?</p><p><b>범위</b> 이번에 어디까지 바꿀까?</p><p><b>권한</b> 어떤 환경·데이터를 써도 될까?</p><p><b>승인</b> 어떤 증거를 보고 채택할까?</p></div><p class=\"takeaway\">예: 검색 0건 안내 · 목록 화면 범위 · 로컬 mock 환경 · 동작 확인 후 채택</p>"
    },
    {
      "label": "03 / FOUR APPROVAL GATES",
      "title": "네 지점에서 다음 단계로 갈지 확인합니다",
      "time": "01:35–02:20",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">이 강의의 운영 규칙 / 승인 게이트 4개</p><h2>다음 단계로 가기 전에<br>무엇을 확인할까요?</h2><table class=\"lesson-table\"><thead><tr><th>시점</th><th>사람이 확인할 것</th></tr></thead><tbody><tr><td>① 목표·범위 확정</td><td>핵심 행동 · 완료 조건 · 보류 기능</td></tr><tr><td>② 구조·계약 확정</td><td>데이터 · API · 실패 처리 · 선택 이유</td></tr><tr><td>③ 변경 통합 전</td><td>diff · 실제 테스트 결과 · 범위 밖 변경</td></tr><tr><td>④ 외부 실행 전</td><td>배포·유료 호출·운영 데이터의 대상과 한도</td></tr></tbody></table><p class=\"takeaway\">정한 범위 안의 작은 로컬 변경은 이어서 진행합니다.<br><b>범위·권한·위험이 바뀌면</b> 다시 확인합니다.</p>"
    },
    {
      "label": "04 / A CLEAR TASK",
      "title": "한 번에 확인할 수 있는 작업 지시",
      "time": "02:20–03:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">복사해서 바꿔 쓸 작업 지시 예시</p><h2>목표와 확인 방법을<br><em>같은 지시에 담습니다.</em></h2><pre class=\"code-example\"><code>목표: 검색 결과가 0건이면 안내 문구를 보여 주세요.\n범위: 목록 화면과 해당 동작의 테스트만 수정합니다.\n환경: 로컬 mock 데이터로 확인합니다.\n완료: 0건 안내와 기존 검색 결과가 모두 동작해야 합니다.\n증거: 변경 요약, diff, 테스트 명령과 실제 결과를 남겨 주세요.\n중단: API·DB 계약 변경이나 유료 호출이 필요하면 먼저 설명해 주세요.</code></pre><p class=\"takeaway\">한 작업의 완료 조건은 <b>직접 확인할 수 있는 동작</b>으로 씁니다.</p>"
    },
    {
      "label": "05 / A PROPOSAL TO REJECT",
      "title": "검사를 지워서 통과시키자는 제안은 거절합니다",
      "time": "03:00–03:35",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">거절 사례 / 설명을 위한 가상 제안</p><h2>실패 원인을 고쳐야<br>완료 조건을 지킬 수 있습니다.</h2><div class=\"translation\"><article><small>AI 제안 예시</small><h3>“빈 결과 테스트가 깨지니<br>검사를 삭제하겠습니다.”</h3></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>사람의 피드백</small><h3>“빈 결과 안내는<br>완료 조건입니다.”</h3><p>구현과 기대 결과를 비교하고<br>실패 원인을 먼저 설명해 주세요.</p></article></div><p class=\"takeaway\">요구사항을 바꿀 때는 이유와 영향을 검토하고 결정합니다.</p>"
    },
    {
      "label": "06 / EVIDENCE BEFORE ACCEPTANCE",
      "title": "완료 보고에서 세 가지를 확인합니다",
      "time": "03:35–04:05",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">변경 통합 전 / 확인할 증거</p><h2>“완료했습니다” 다음에<br><em>근거를 확인합니다.</em></h2><div class=\"project-grid\"><article><small>변경</small><h3>무엇이 바뀌었나</h3><p>요청 범위의 diff<br>관련 없는 변경 여부</p></article><article><small>실행</small><h3>무엇을 확인했나</h3><p>테스트 명령·결과<br>핵심 동작 확인</p></article><article><small>미확인</small><h3>무엇이 남았나</h3><p>미실행 항목<br>확인하지 못한 이유</p></article></div>"
    },
    {
      "label": "07 / QUICK PRACTICE",
      "title": "어디까지 바로 진행해도 될까요?",
      "time": "04:05–04:40",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">실습 / 로컬 검색 안내 작업이 승인된 상황</p><h2>진행할 일과<br>다시 확인할 일을 골라 보세요.</h2><div class=\"translation\"><article><small>A / 제안</small><h3>로컬 mock로<br>검색 0건 안내 확인</h3></article><span class=\"arrow\" aria-hidden=\"true\">?</span><article><small>B / 제안</small><h3>운영 데이터를 지우고<br>외부 API로 다시 수집</h3></article></div><p class=\"takeaway\">판단 기준: <b>목표 · 범위 · 권한 · 완료 증거</b></p>"
    },
    {
      "label": "08 / YOUR WORKING RULES",
      "title": "내 작업에도 네 승인 지점을 남깁니다",
      "time": "04:40–05:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">실습 체크 / 역할·승인 기준 기록</p><h2>다음 작업에 쓸 기준을<br><em>메모에 남겨 주세요.</em></h2><div class=\"check-grid\"><p><b>01</b> 목표·범위 확정</p><p><b>02</b> 구조·계약 확정</p><p><b>03</b> diff·검증 후 변경 통합</p><p><b>04</b> 대상·권한 확인 후 외부 실행</p></div><p class=\"takeaway\">완료 체크: 네 게이트와 작업 지시 한 개를 적었습니다.<br>다음 수업 / 0-4. 강의 기준 툴과 비용·보안 원칙</p>"
    }
  ]
};
