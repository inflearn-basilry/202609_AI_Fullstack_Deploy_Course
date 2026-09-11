window.ORIENTATION = {
  "id": "2-4",
  "title": "역할을 나눠도 책임은 섞지 않기",
  "duration": "09:00",
  "description": "커리큘럼 v0.4 기준. SignalDesk의 T-001 검색 작업으로 기획자, 설계자, 구현자, 테스터, 리뷰어의 입력과 출력, 결정 범위를 구분합니다. 같은 변경분의 인수인계와 사람의 최종 승인을 다룹니다.",
  "sources": [
    {
      "title": "Google Engineering Practices: What to look for in a code review",
      "url": "https://google.github.io/eng-practices/review/reviewer/looking-for.html"
    }
  ],
  "deckUrl": "2026-09-11_2-4_역할별_입력과_출력_강의슬라이드_v0.1.html",
  "slides": [
    {
      "label": "01 · 이번 강의",
      "title": "역할을 나눠도 책임은 섞지 않기",
      "time": "00:00–00:45",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">2-4 · 9분</p><h2>역할을 나눠도<br>책임은 섞지 않기</h2><p class=\"lead\">2-3의 문서를 바탕으로, T-001 ‘제목 검색어와 분류 동시 적용’을 다섯 역할이 어떻게 다룰지 정합니다.</p><div class=\"check-grid\"><p><b>01</b>기획자와 설계자는 제품 기준과 구현 방법을 정리합니다.</p><p><b>02</b>구현자는 허용된 범위를 수정하고, 테스터와 리뷰어는 결과를 확인합니다.</p><p><b>03</b>각 역할이 받을 자료와 돌려줄 결과, 직접 바꾸지 않을 결정을 적습니다.</p></div><p class=\"takeaway\">한 사람이나 하나의 AI가 역할을 순서대로 맡아도 됩니다. 여러 AI를 동시에 실행할 필요는 없으며, 최종 승인과 실행 권한은 별도로 정합니다.</p>"
    },
    {
      "label": "02 · 기획과 설계",
      "title": "기획자와 설계자의 결정 범위",
      "time": "00:45–01:40",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">T-001 · 기준과 방법</p><h2>기획자와 설계자의<br>결정 범위</h2><div class=\"translation\"><article><small>기획자</small><h3>제품 기준 정리</h3><p>입력은 1-4의 PRD와 사용자 가정입니다.</p><p>출력은 ‘검색어와 분류를 모두 적용’이라는 PRODUCT의 완료 조건입니다.</p><p>설계와 구현의 세부 파일은 정하지 않습니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>설계자</small><h3>입력과 출력 정리</h3><p>입력은 승인한 PRODUCT의 범위와 완료 조건입니다.</p><p>출력은 검색어와 분류를 받아 일치하는 공지 목록을 돌려주는 초안입니다.</p><p>완료 조건을 임의로 바꾸지 않습니다.</p></article></div><p class=\"takeaway\">빈 검색어 처리와 정렬 순서는 미정으로 남겨 확인합니다. 상세 설계는 섹션 03에서 구체화합니다.</p>"
    },
    {
      "label": "03 · 구현과 테스트",
      "title": "구현자와 테스터의 입력과 출력",
      "time": "01:40–02:35",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">T-001 · 변경과 확인</p><h2>구현자와 테스터의<br>입력과 출력</h2><div class=\"translation\"><article><small>구현자</small><h3>허용한 파일 수정</h3><p>승인한 기준과 설계, 허용 파일을 받습니다.</p><p>파일과 변경분, 확인 결과 또는 미실행 사유를 반환합니다.</p><p>완료 조건을 완화하거나 범위를 늘리지 않습니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>테스터</small><h3>기대 결과와 대조</h3><p>같은 코드 버전과 완료 조건, 합성 자료를 받습니다.</p><p>‘도서관 + 생활’은 E-001 한 건, ‘산악박물관’은 0건인지 확인해 기록합니다.</p><p>기대 결과를 임의로 고치지 않습니다.</p></article></div><p class=\"takeaway\">AC-02는 화면의 0건 안내와 이전 결과 제거도 확인합니다. 함수 결과만으로 완료하지 않습니다.</p>"
    },
    {
      "label": "04 · 리뷰",
      "title": "리뷰어가 확인할 내용",
      "time": "02:35–03:30",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">T-001 · 리뷰</p><h2>리뷰어가 확인할 내용</h2><p class=\"lead\">입력은 승인한 문서와 같은 버전의 변경분, 테스트 기록입니다. 구현 설명과 실제 변경을 대조합니다.</p><div class=\"check-grid\"><p><b>01</b>검색어와 분류를 모두 적용하는지, 두 조건이 다른 경우도 읽습니다.</p><p><b>02</b>파일이 허용 범위에 속하는지, 테스트가 잘못된 구현을 잡는지 확인합니다.</p><p><b>03</b>출력은 문제의 위치와 근거, 수정 요청입니다. 미확인 부분도 적습니다.</p></div><p class=\"takeaway\">리뷰어는 제품 범위나 배포 권한을 스스로 추가하지 않습니다. 검토 결과를 최종 승인 담당자에게 전달합니다.</p><p class=\"footnote\">참고: <a href=\"https://google.github.io/eng-practices/review/reviewer/looking-for.html\">Google · 기능과 테스트의 적절성 검토</a></p>"
    },
    {
      "label": "05 · 권한 구분",
      "title": "작업 계획과 실행 권한",
      "time": "03:30–04:25",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">T-001 · 시작 전에 정할 범위</p><h2>작업 계획과<br>실행 권한</h2><div class=\"translation\"><article><small>작성할 계획</small><h3>두 검색 조건 동시 적용</h3><p>어떤 기준을 구현할지 설명하고 수정할 파일과 확인 방법을 제안합니다.</p><p>경로와 실행 명령은 연습 저장소에서 확인해 채웁니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>확인할 권한</small><h3>허용한 변경 범위</h3><p>담당자는 수정할 파일과 실행 가능한 작업을 확인합니다.</p><p>범위를 넘어선 변경이 필요하면 이유와 영향을 알리고 권한을 확인합니다.</p></article></div><p class=\"takeaway\">계획을 작성하거나 검토받았다는 이유로 모든 실행을 허용받는 것은 아닙니다. 계정, 결제, 추천, 알림·공유 자동화, 외부 AI 호출은 보류합니다.</p>"
    },
    {
      "label": "06 · 기준 유지",
      "title": "테스트를 통과시키는 잘못된 수정",
      "time": "04:25–05:20",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">T-001 · 합성 자료로 비교</p><h2>테스트를 통과시키는<br>잘못된 수정</h2><div class=\"translation\"><article><small>잘못된 대응 예시</small><h3>구현에 맞춰 기준 변경</h3><p>‘도서관 + 교통’에 E-001과 E-002를 표시한 뒤, 완료 조건을 ‘한 조건만 맞아도 됨’으로 바꿉니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>기준에 맞춘 대응</small><h3>기준에 맞춰 구현 수정</h3><p>승인한 기준은 두 조건의 동시 적용입니다. 기대 결과를 0건으로 유지하고 검색 처리를 고칩니다.</p></article></div><p class=\"takeaway\">‘도서관 + 생활’만 확인하면 잘못된 구현도 통과할 수 있습니다. 분류가 다른 사례와 기준 변경 여부도 확인합니다.</p><p class=\"footnote\">학습용 오류 사례입니다. 실제 앱의 실행 결과는 아닙니다.</p>"
    },
    {
      "label": "07 · 작업 분리",
      "title": "공유 파일의 동시 수정과 통합",
      "time": "05:20–06:15",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">여러 담당자가 작업하는 경우</p><h2>공유 파일의<br>동시 수정과 통합</h2><div class=\"translation\"><article><small>충돌하기 쉬운 분담</small><h3>같은 검색 함수를 수정</h3><p>한 담당자는 검색어를, 다른 담당자는 분류를 처리하며 같은 파일을 동시에 고칩니다.</p><p>나중 수정이 앞선 조건을 지울 수 있습니다.</p></article><span class=\"arrow\" aria-hidden=\"true\">→</span><article><small>확인하기 쉬운 분담</small><h3>수정 담당자 한 명 지정</h3><p>구현자는 검색을 처리하고, 테스터는 별도로 기대 결과와 확인 사례를 작성합니다.</p><p>공유 파일은 통합 담당자가 반영합니다.</p></article></div><p class=\"takeaway\">실제 파일을 확인해 담당 범위를 정합니다. 합칠 때 텍스트 충돌이 없어도 두 검색 조건이 모두 남았는지 변경분과 결과를 확인합니다.</p>"
    },
    {
      "label": "08 · 인수인계",
      "title": "같은 변경분을 확인하는 인수인계",
      "time": "06:15–07:10",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">T-001 · 인수인계 기록 예시</p><h2>같은 변경분을 확인하는<br>인수인계</h2><pre class=\"code-example\"><code>작업: T-001, 기준: AC-01·AC-02\n버전: 코드·문서 revision과 미커밋 변경분\n변경 내용: 파일 목록과 diff\n확인 결과: 실행한 테스트 명령과 출력\n미실행 사유: 실행하지 않았다면 이유 작성\n미정 사항: 빈 검색어 처리와 정렬 순서</code></pre><p class=\"takeaway\">revision은 검토할 버전이고 diff는 변경분입니다. 미커밋 수정도 전달하고 마지막 수정 뒤의 확인 결과를 연결합니다.</p><p class=\"footnote\">구현 전엔 버전 값이나 통과 출력을 채우지 않습니다. 이전 결과를 새 변경의 증거로 쓰지 않습니다.</p>"
    },
    {
      "label": "09 · 최종 판단",
      "title": "검토 결과와 사람의 최종 승인",
      "time": "07:10–08:05",
      "theme": "paper",
      "content": "<p class=\"eyebrow\">검토를 마친 뒤의 책임</p><h2>검토 결과와<br>사람의 최종 승인</h2><p class=\"lead\">새 대화창에서 리뷰해도 독립 검증을 보장하지는 않습니다. 검토자가 같은 코드와 기준을 직접 확인해야 합니다.</p><div class=\"check-grid\"><p><b>01</b>리뷰어는 구현자의 요약만 읽지 않고 변경분과 확인 근거를 대조합니다.</p><p><b>02</b>문제가 남으면 위치와 영향을 적어 돌려주고, 수정 후 바뀐 부분을 다시 확인합니다.</p><p><b>03</b>사람이 완료 조건과 미확인 사항을 보고 승인 여부를 정합니다.</p></div><p class=\"takeaway\">최종 승인 담당자는 수행 범위와 권한, 위험이 달라지는 변경을 판단합니다. 리뷰 의견을 보류한 외부 호출이나 배포의 승인으로 보지 않습니다.</p>"
    },
    {
      "label": "10 · 실습",
      "title": "T-001 역할과 인수인계 작성",
      "time": "08:05–09:00",
      "theme": "navy",
      "content": "<p class=\"eyebrow\">실습 · 필요하면 일시 정지</p><h2>T-001 역할과<br>인수인계 작성</h2><p class=\"lead\">워크시트에서 T-001의 다섯 역할을 나누고, 받을 자료와 돌려줄 결과를 적습니다.</p><div class=\"check-grid\"><p><b>01</b>기획자와 설계자의 참조 문서, 구현자의 허용 범위를 작성합니다.</p><p><b>02</b>테스터의 정상·0건 사례와 리뷰어의 기준 변경 확인 항목을 적습니다.</p><p><b>03</b>같은 변경분을 전달할 인수인계 기록과 사람의 최종 승인 항목을 채웁니다.</p></div><p class=\"takeaway\">실행하지 않은 항목은 미실행으로 남깁니다. 다음 2-5에서는 작은 변경분을 요청하고 검토하는 흐름을 다룹니다.</p><p class=\"footnote\"><a href=\"section02-context-workbook.md\" download>섹션 02 컨텍스트 워크시트 내려받기</a></p>"
    }
  ]
};
