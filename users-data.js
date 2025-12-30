// 사용자 데이터 (users.json을 JavaScript로 변환)
const USERS_DATA = {
  "users": [
    {
      "id": "admin",
      "name": "관리자",
      "password": "admin123",
      "team": "admin",
      "role": "admin",
      "department": "관리",
      "affiliation": "관리팀",
      "userId": "admin",
      "redirectUrl": "admin.html"
    },
    {
      "id": "teamlead1",
      "name": "팀장1",
      "password": "team123",
      "team": "dev",
      "role": "teamlead",
      "department": "개발",
      "affiliation": "개발팀",
      "userId": "teamlead1",
      "redirectUrl": "teamlead.html"
    },
    {
      "id": "user-kim",
      "name": "이경수",
      "password": "user123",
      "team": "dev",
      "role": "user",
      "department": "백엔드",
      "affiliation": "개발팀",
      "userId": "user-kim",
      "redirectUrl": "my_calendar.html"
    },
    {
      "id": "user-lee",
      "name": "문정석",
      "password": "user123",
      "team": "dev",
      "role": "user",
      "department": "백엔드",
      "affiliation": "개발팀",
      "userId": "user-lee",
      "redirectUrl": "my_calendar.html"
    },
    {
      "id": "user-park",
      "name": "박명수",
      "password": "user123",
      "team": "design",
      "role": "user",
      "department": "UI/UX",
      "affiliation": "디자인팀",
      "userId": "user-park",
      "redirectUrl": "my_calendar.html"
    },
    {
      "id": "user-haha",
      "name": "하하",
      "password": "user123",
      "team": "design",
      "role": "user",
      "department": "UI/UX",
      "affiliation": "디자인팀",
      "userId": "user-haha",
      "redirectUrl": "my_calendar.html"
    },
    {
      "id": "user-jisung",
      "name": "박지성",
      "password": "user123",
      "team": "dev",
      "role": "user",
      "department": "백엔드",
      "affiliation": "개발팀",
      "userId": "user-jisung",
      "redirectUrl": "my_calendar.html"
    },
    {
      "id": "user-minsu",
      "name": "최민수",
      "password": "user123",
      "team": "dev",
      "role": "user",
      "department": "프론트엔드",
      "affiliation": "개발팀",
      "userId": "user-minsu",
      "redirectUrl": "my_calendar.html"
    },
    {
      "id": "user-dongwon",
      "name": "강동원",
      "password": "user123",
      "team": "dev",
      "role": "user",
      "department": "모바일",
      "affiliation": "개발팀",
      "userId": "user-dongwon",
      "redirectUrl": "my_calendar.html"
    },
    {
      "id": "user-minjae",
      "name": "김민재",
      "password": "user123",
      "team": "dev",
      "role": "user",
      "department": "AI",
      "affiliation": "개발팀",
      "userId": "user-minjae",
      "redirectUrl": "my_calendar.html"
    },
    {
      "id": "user-hoyoung",
      "name": "정호영",
      "password": "user123",
      "team": "planning",
      "role": "user",
      "department": "서비스기획",
      "affiliation": "기획팀",
      "userId": "user-hoyoung",
      "redirectUrl": "my_calendar.html"
    }
  ],
  "categories": {
    "planning": {
      "name": "기획",
      "color": "blue",
      "colorCode": "#3b82f6"
    },
    "development": {
      "name": "개발",
      "color": "green",
      "colorCode": "#22c55e"
    },
    "design": {
      "name": "디자인",
      "color": "yellow",
      "colorCode": "#eab308"
    }
  }
};

