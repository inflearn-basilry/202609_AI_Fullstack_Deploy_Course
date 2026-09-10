window.ORIENTATION = {
  "id": "1-2",
  "title": "AI와 검토하되 결정은 넘기지 않기",
  "duration": "09:00",
  "description": "커리큘럼 v0.4 기준. SignalDesk 예제로 대안과 반례를 요청하고, 원문으로 확인할 사실과 사용자에게 확인할 가정을 나누어 아이디어·가정표를 작성합니다.",
  "sources": [
    {
      "title": "GOV.UK Service Manual · Start by learning user needs",
      "url": "https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs"
    }
  ],
  "deckUrl": "2026-09-10_1-2_AI_대안_검토와_가정_분리_강의슬라이드_v0.1.html",
  "slides": [
    {
      "label": "1-2 · 학습 목표",
      "title": "AI와 검토하되 결정은 넘기지 않기",
      "time": "00:00–00:40",
      "theme": "navy",
      "content": "<p class='eyebrow'>1-2 · 9분</p><h2>AI와 검토하되<br>결정은 넘기지 않기</h2><p class='lead'>같은 문제의 해결 방법을 비교하고 AI 답변을 검토합니다. 원문으로 확인할 오류와 사용자에게 물어볼 가정을 구분합니다.</p><p class='takeaway'>실습 결과물은 선택 이유와 확인 방법을 담은 아이디어·가정표입니다.</p><p class='footnote'>SignalDesk는 강의용 사례입니다. 실제 사용자 조사, 완성 앱, 실험 결과는 없습니다.</p>"
    },
    {
      "label": "공통 사례",
      "title": "담당자의 아침 공지 검토",
      "time": "00:40–01:30",
      "theme": "paper",
      "content": "<p class='eyebrow'>학습용 사용자 가정</p><h2>담당자의<br>아침 공지 검토</h2><p class='lead'>사용자는 지역 소식 정리 담당자이며, 아침에 여러 공지 원문을 찾아 대조한다고 가정합니다.</p><div class='translation'><article><small>현재 작업 가정</small><h3>여러 원문 찾아 대조</h3><p>담당자는 공지의 날짜와 운영 조건을 확인하고, 공유할 내용을 직접 판단합니다.</p></article><span class='arrow' aria-hidden='true'>→</span><article><small>SignalDesk의 학습 목표</small><h3>검색한 공지 검토</h3><p>공지를 검색하고 상세 화면에서 요약과 원문을 대조해 공유할 내용을 확인합니다.</p></article></div><p class='takeaway'>이 작업 설명도 아직 사용자에게 확인하지 않은 가정입니다.</p>"
    },
    {
      "label": "대안 생성",
      "title": "같은 작업을 해결하는 대안 요청",
      "time": "01:30–02:25",
      "theme": "paper",
      "content": "<p class='eyebrow'>AI 요청 예시</p><h2>같은 작업을 해결하는<br>대안 요청</h2><p class='lead'>같은 작업을 해결하는 방법을 비교하고, 각 방법에 추가로 드는 일을 묻습니다.</p><pre class='code-example'><code>사용자: 지역 소식 정리 담당자라고 가정한다.\n작업: 아침에 공지 원문을 찾아 대조한다.\n목표: 공유할 내용을 확인한다.\n해결 대안 두 개와 현재 방식 유지를 비교해 줘.\n각 대안의 이점, 추가 작업, 미확인 가정을 써 줘.\n사용자 조사 결과나 수치를 만들어 넣지 마.</code></pre><p class='takeaway'>AI 답변을 받으면 공유할 내용을 확인하는 데 도움이 될 차이를 표시합니다.</p>"
    },
    {
      "label": "대안 비교",
      "title": "대안별 이점과 추가 작업",
      "time": "02:25–03:20",
      "theme": "paper",
      "content": "<p class='eyebrow'>가상 AI 제안 · 효과 미검증</p><h2>대안별 이점과 추가 작업</h2><p class='lead'>각 방법이 공지 검토를 어떻게 돕고 어떤 작업을 추가하는지 비교합니다. 실제 효과는 아직 확인하지 않았습니다.</p><table class='lesson-table'><thead><tr><th>대안</th><th>예상 이점</th><th>추가로 할 일</th></tr></thead><tbody><tr><td>현재 방식 유지</td><td>새 도구를 배우지 않음</td><td>여러 원문을 따로 찾음</td></tr><tr><td>검색 후 원문·요약 대조</td><td>찾은 공지의 요약과 원문을 확인</td><td>담당자가 조건 일치를 판단</td></tr><tr><td>새 공지 알림</td><td>직접 검색하지 않고 새 공지 확인</td><td>알림을 읽고 원문을 다시 검토</td></tr></tbody></table><p class='takeaway'>이번 실습에서는 검색 후 원문과 요약을 대조하는 방법을 선택합니다. 알림이 필요한지는 사용자에게 확인합니다.</p>"
    },
    {
      "label": "반례 요청",
      "title": "선택한 대안이 실패하는 조건",
      "time": "03:20–04:10",
      "theme": "navy",
      "content": "<p class='eyebrow'>AI 후속 요청</p><h2>선택한 대안이<br>실패하는 조건</h2><p class='lead'>반례는 선택한 방법이 도움이 되지 않는 사례입니다. 아래 상황은 약점을 검토하려고 만든 가정입니다.</p><pre class='code-example'><code>검색 후 원문과 요약을 대조하려고 한다.\n이 방식이 아침 공지 검토에 도움이 안 되는\n상황 두 개를 제시해 줘.\n각 상황에서 무엇을 확인할지 적어 줘.</code></pre><div class='check-grid'><p><b>가상 반례 1</b>검색어가 원문 표현과 다르면 필요한 공지를 놓칠 수 있습니다.</p><p><b>가상 반례 2</b>요약에 요일이 잘못 적히면 담당자가 잘못 공유할 수 있습니다.</p></div><p class='takeaway'>다음 예제에서는 두 번째 반례를 원문 대조로 검토합니다.</p>"
    },
    {
      "label": "오류 검토",
      "title": "원문과 다른 가상 AI 답변",
      "time": "04:10–05:10",
      "theme": "paper",
      "content": "<p class='eyebrow'>합성 공지 · 가상 오류</p><h2>원문과 다른<br>가상 AI 답변</h2><p class='lead'>제목은 ‘동네 도서관, 금요일 야간 개방’, 분류는 ‘생활’입니다. 이 원문으로 요약을 요청했을 때 나올 수 있는 오류를 살펴봅니다.</p><div class='translation'><article><small>AI 요청에 쓸 원문</small><h3>금요일에 연장 운영</h3><p>동네 도서관이 금요일에 열람실을 오후 9시까지 연장 운영합니다.</p></article><span class='arrow' aria-hidden='true'>→</span><article><small>가상 AI 답변의 오류</small><h3>매일 21시까지</h3><p>동네 도서관 열람실은 매일 21시까지 운영합니다. 담당자는 알림을 원할 것입니다.</p></article></div><p class='takeaway'>‘매일’은 원문과 어긋나는 요약 오류입니다. ‘알림을 원한다’는 원문만으로 판단할 수 없는 수요 가정입니다.</p>"
    },
    {
      "label": "판단 수정",
      "title": "사실 오류와 수요 가정의 확인 방법",
      "time": "05:10–06:05",
      "theme": "paper",
      "content": "<p class='eyebrow'>검토자의 수정 예시</p><h2>사실 오류와 수요 가정의<br>확인 방법</h2><p class='lead'>문장마다 확인할 근거가 다릅니다.</p><table class='lesson-table'><thead><tr><th>문장</th><th>검토자의 판단</th><th>다음 확인</th></tr></thead><tbody><tr><td>매일 21시까지 운영</td><td>금요일에 열람실을 오후 9시까지 연장 운영한다고 수정</td><td>요일, 대상 공간, 종료 시각을 원문과 대조</td></tr><tr><td>담당자는 알림을 원함</td><td>미확인 수요 가정으로 기록</td><td>실제 담당자의 최근 공지 확인 과정 관찰</td></tr></tbody></table><p class='takeaway'>원문 대조로 요약의 오류를 확인할 수 있습니다. 알림이 필요한지는 사용자에게 별도로 확인해야 합니다.</p>"
    },
    {
      "label": "가정표 예시",
      "title": "아이디어·가정표에 남길 판단",
      "time": "06:05–07:05",
      "theme": "paper",
      "content": "<p class='eyebrow'>작성 예시 · 확인 전</p><h2>아이디어·가정표에<br>남길 판단</h2><p class='lead'>선택한 아이디어의 가정도 기록하고 확인 방법을 정합니다.</p><table class='lesson-table'><thead><tr><th>아이디어</th><th>미확인 가정</th><th>확인 방법</th></tr></thead><tbody><tr><td>검색 후 원문·요약 대조</td><td>요약과 원문을 함께 보면 대조하기 쉬움</td><td>담당자에게 공지 조건을 찾고 대조하게 함</td></tr><tr><td>새 공지 알림</td><td>담당자가 직접 검색하기보다 알림 받기를 원함</td><td>최근 공지를 언제 어떻게 발견했는지 질문</td></tr></tbody></table><p class='takeaway'>예시 결정: 원문과 요약을 함께 표시합니다. 알림은 사용자에게 필요한지 확인한 뒤 결정합니다.</p><p class='footnote'>사용자에게 확인하지 않은 제안은 검증할 가정으로 다룹니다. <a href='https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs'>GOV.UK 사용자 요구 조사 지침</a></p>"
    },
    {
      "label": "직접 실습",
      "title": "가정표 실습과 완료 기준",
      "time": "07:05–08:20",
      "theme": "paper",
      "content": "<p class='eyebrow'>실습 · 필요하면 일시 정지</p><h2>가정표 실습과 완료 기준</h2><p class='lead'>대안을 요청하고 답변을 검토해 표를 작성합니다. AI를 쓸 수 없으면 앞의 가상 답변을 활용합니다.</p><div class='check-grid'><p><b>대안 비교</b>같은 사용자 작업에 대한 대안 두 개와 각 방법에 추가로 드는 일을 기록합니다.</p><p><b>오류 수정</b>가상 답변의 ‘매일’을 고치고, 근거가 된 원문의 요일을 표시합니다.</p><p><b>가정 기록</b>선택한 대안의 가정과 알림 수요 가정을 각각 한 행에 씁니다.</p><p><b>판단 완료</b>각 행에 선택 또는 보류 이유와 실제 확인할 행동·질문을 적습니다.</p></div><p class='takeaway'>‘사용자에게 물어보기’를 어떤 최근 행동을 묻거나 관찰할지 구체적인 질문으로 바꿉니다.</p>"
    },
    {
      "label": "다음 강의 연결",
      "title": "1-3강에서 정할 구현 범위",
      "time": "08:20–09:00",
      "theme": "navy",
      "content": "<p class='eyebrow'>1-3강 준비</p><h2>1-3강에서 정할<br>구현 범위</h2><p class='lead'>작성한 표를 바탕으로 다음 강의에서 첫 구현에 포함할 기능과 보류할 기능을 정합니다.</p><div class='translation'><article><small>핵심 작업 후보</small><h3>검색 후 원문·요약 대조</h3><p>검색한 공지의 원문과 미리 만든 요약 예시를 대조합니다. 담당자가 공유할 내용을 판단합니다.</p></article><span class='arrow' aria-hidden='true'>→</span><article><small>보류 목록 후보</small><h3>추가 기능 검토</h3><p>계정, 결제, 추천, 공유 자동화는 보류합니다. 알림도 확인할 수요 가정과 함께 남깁니다.</p></article></div><p class='takeaway'><a href='section01-prd-workbook.md' download>워크시트</a>를 내려받아 아이디어·가정표를 작성하고, 선택 이유를 한 문장으로 정리합니다.</p>"
    }
  ]
};
