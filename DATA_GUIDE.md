# 📊 일정 데이터 관리 가이드

## 🎯 개요

이 프로젝트의 모든 일정 데이터는 `lego_mockup.html` 파일 내부의 `SCHEDULE_DATA` 객체에서 중앙 관리됩니다.

**데이터를 한 곳에서만 수정하면 월별/주별/일별 뷰에 자동으로 반영됩니다.**

### 🔄 동적 생성 방식

- **월별 뷰**: 날짜별 사람 이름과 업무 툴팁이 자동 생성
- **주별 뷰**: 시간표 그리드가 데이터 기반으로 동적 생성
- **일별 뷰**: 선택한 날짜의 상세 일정이 동적 생성

모든 뷰가 **SCHEDULE_DATA를 유일한 데이터 소스**로 사용합니다!

---

## 📍 데이터 위치

파일: `lego_mockup.html`  
위치: `<script>` 태그 내부, **"데이터 관리 영역"** 섹션

```javascript
const SCHEDULE_DATA = {
    '2023-03-01': [
        { user: 'user-kim', category: 'planning', title: '요구사항 정리', ... }
    ]
};
```

---

## 📝 데이터 구조

### 1. 사용자 (USERS)

```javascript
const USERS = {
    'user-kim': { name: '김철수', team: 'dev' },
    'user-lee': { name: '이영희', team: 'dev' },
    'user-park': { name: '박명수', team: 'design' },
    'user-haha': { name: '하하', team: 'design' }
};
```

### 2. 업무 카테고리 (CATEGORIES)

```javascript
const CATEGORIES = {
    'planning': { name: '기획', color: 'blue', colorCode: '#3b82f6' },
    'development': { name: '개발', color: 'green', colorCode: '#22c55e' },
    'design': { name: '디자인', color: 'yellow', colorCode: '#eab308' }
};
```

### 3. 일정 데이터 (SCHEDULE_DATA)

```javascript
const SCHEDULE_DATA = {
    '날짜': [
        {
            user: 'user-kim',              // 사용자 ID (필수)
            category: 'planning',          // 업무 카테고리 (필수)
            title: '요구사항 정리',         // 업무 제목 (필수)
            startTime: '10:00',            // 시작 시간 (필수)
            endTime: '12:00',              // 종료 시간 (필수)
            note: '추가 설명'               // 메모 (선택사항)
        }
    ]
};
```

---

## 🔧 사용 방법

### ✅ 새로운 일정 추가

```javascript
'2023-03-15': [
    {
        user: 'user-kim',
        category: 'development',
        title: 'API 개발',
        startTime: '10:00',
        endTime: '12:00'
    },
    {
        user: 'user-lee',
        category: 'design',
        title: 'UI 디자인',
        startTime: '14:00',
        endTime: '16:00',
        note: '반응형 디자인'
    }
]
```

### ✅ 기존 일정 수정

해당 날짜의 배열에서 원하는 항목을 찾아 수정하면 됩니다.

```javascript
'2023-03-10': [
    {
        user: 'user-park',
        category: 'design',
        title: 'UI 컴포넌트 디자인',  // ← 제목 수정
        startTime: '10:00',
        endTime: '13:00'
    }
]
```

### ✅ 일정 삭제

해당 날짜의 배열에서 항목을 제거하거나, 날짜 전체를 삭제합니다.

```javascript
// 특정 일정만 삭제
'2023-03-10': [
    // 삭제하고 싶은 일정을 배열에서 제거
]

// 날짜 전체 삭제
// '2023-03-10': [...] ← 이 줄 전체를 삭제
```

---

## 🎨 카테고리별 색상 규칙

| 카테고리 | 색상 | 색상 코드 | 설명 |
|---------|------|----------|------|
| planning | 파랑 (blue) | #3b82f6 | 기획, 문서작성, 회의 등 |
| development | 초록 (green) | #22c55e | 개발, 코딩, 테스트 등 |
| design | 노랑 (yellow) | #eab308 | 디자인, UI/UX 작업 등 |

---

## 💡 팁

### 1. 한 사람이 여러 업무를 할 때

같은 날짜 배열에 여러 항목을 추가하면 됩니다:

```javascript
'2023-03-03': [
    { user: 'user-kim', category: 'planning', title: '기획서 작성', ... },
    { user: 'user-kim', category: 'design', title: '디자인 검토', ... },
    { user: 'user-lee', category: 'development', title: 'API 개발', ... }
]
```

### 2. 연속된 날짜에 일정 추가

각 날짜별로 배열을 만들면 됩니다:

```javascript
'2023-03-06': [ /* 월요일 일정 */ ],
'2023-03-07': [ /* 화요일 일정 */ ],
'2023-03-08': [ /* 수요일 일정 */ ],
```

### 3. 시간 형식

- HH:MM 형식 사용 (예: '09:00', '14:30')
- 24시간 형식
- 시작 시간이 종료 시간보다 이전이어야 함

---

## 🚀 현재 구현 상태 및 향후 개선 방향

### ✅ **현재 구현 완료**
- ✅ 중앙 집중식 데이터 관리 (`SCHEDULE_DATA`)
- ✅ 월별/주별/일별 뷰 자동 동적 생성
- ✅ 툴팁 자동 생성
- ✅ 팀/사원 필터링 연동
- ✅ 뷰 간 날짜 클릭 네비게이션

### 🔜 **향후 개선 가능**
1. **별도의 JSON 파일로 분리** (`schedule-data.json`)
2. **백엔드 API 연동** (실시간 데이터 동기화)
3. **엑셀 파일로 관리** (업로드 기능 활용)
4. **주 단위 네비게이션** (이전/다음 주 버튼)
5. **날짜 범위 선택** (월/주 선택 UI)

위 방식들로 전환 가능합니다.

---

## ❓ 문제 해결

### 데이터를 수정했는데 화면에 반영이 안 돼요

1. 브라우저를 새로고침하세요 (Ctrl/Cmd + R)
2. 캐시를 지우고 새로고침하세요 (Ctrl/Cmd + Shift + R)
3. JavaScript 문법 오류가 없는지 확인하세요 (브라우저 콘솔 확인)

### 날짜 형식을 잘못 입력했어요

- ✅ 올바름: `'2023-03-01'`
- ❌ 잘못됨: `'2023-3-1'`, `'2023/03/01'`, `'03-01-2023'`

### 사용자 ID를 잘못 입력했어요

USERS 객체에 정의된 ID를 사용해야 합니다:
- `'user-kim'` (O)
- `'김철수'` (X)

---

**📝 마지막 업데이트:** 2024년 12월 27일 (동적 생성 시스템 완료)

