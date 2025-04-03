## Next-Auth를 활용한 소셜 로그인
Next-Auth를 활용하여 구글과 네이버 소셜 로그인 기능을 구현한 웹 애플리케이션입니다.

## 프로젝트 구조
```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts        # NextAuth 설정 및 API 핸들러
│   ├── auth/
│   │   └── signin/
│   │       └── page.tsx            # 로그인 페이지
│   ├── page.tsx                    # 홈페이지
│   └── layout.tsx                  # 루트 레이아웃 (AuthProvider 포함)
├── components/
│   └── auth/
│       ├── AuthProvider.tsx        # NextAuth Provider 컴포넌트
│       ├── GoogleLoginButton.tsx   # 구글 로그인 버튼
│       └── NaverLoginButton.tsx    # 네이버 로그인 버튼
└── types/
    └── next-auth.d.ts              # NextAuth 타입 확장
```

## 구현된 기능

1. **인증 시스템 설정**

- NextAuth.js를 사용하여 소셜 로그인 시스템 구현. 현재 구글과 네이버 OAuth 제공자가 설정됨.
- 설정 파일: src/app/api/auth/[...nextauth]/route.ts
- 주요 내용:
    - Google, Naver Provider 구성
    - 커스텀 로그인 페이지 지정 (/auth/signin)
    - JWT 토큰 확장 (사용자 accessToken, provider 정보 추가)
    - 세션 정보 확장 (사용자 accessToken, provider 정보 추가)
<br>

2. **로그인 페이지**

- 사용자가 소셜 계정으로 로그인할 수 있는 전용 페이지 구현.
- 주요 내용:
    - 구글 로그인 버튼 (로그인 성공 후 /dashboard 페이지로 리디렉션)
    - 네이버 로그인 버튼 (로그인 성공 후 /dashboard 페이지로 리디렉션)
    - 홈으로 돌아가는 링크
<br>

3. **전역 인증 컨텍스트**
- NextAuth의 세션 제공자가 전체 애플리케이션에 설정됨. (AuthProvider.tsx) 

## 환경 설정
프로젝트는 다음과 같은 환경 변수를 사용함:

- `GOOGLE_CLIENT_ID`: 구글 OAuth 클라이언트 ID
- `GOOGLE_CLIENT_SECRET`: 구글 OAuth 클라이언트 시크릿
- `NAVER_CLIENT_ID`: 네이버 OAuth 클라이언트 ID
- `NAVER_CLIENT_SECRET`: 네이버 OAuth 클라이언트 시크릿

## TO-DO
- [ ] 이중 로그인 안되게 수정
- [ ] 로그인 상태에서 메인 화면에 로그아웃 버튼 추가
- [ ] 사용자 정보 활용 (DB 연결)
- [ ] 테스트 코드