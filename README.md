# Used-trade-website

### 터미널1
pscale connect used-trade-website

### 터미널2
npx prisma studio

### 터미널3
npm run dev (여기 혹은 홈페이지f12에 console 내용들 뜸)

[로그인 방법]
1. localhost:3000/enter에서 아이디 비번 입력
2. npx prisma studio에서 뜨는 token 입력
3. 홈으로 들어가짐!
4. 마이 정보 보는법: localhost:3000/api/users/me

npx prisma db push했는데 오류가 떠서
prisma 업데이트 다시 하려면.. ((((근데 대부분 vscode 껐다키면 ㄱㅊ아짐!!!!))))
pscale auth login
pscale database create used-trade-website --region gcp-asia-northeast3
npm install @prisma/client

비주얼코드내 Prisma 다운받기(자바스크립트(or 타임스크립트)와 데이터베이스 사이의 다리(번역기 같은 느낌))
npm i prisma -D

push하기
pscale connect used-trade-website: url을 얻어서 컴퓨터와 planetscale 사이에 보안 tunnel 제작
npx prisma db push

npx prisma studio: 데이터베이스 관리자 패널 보기
npm install @prisma/client: client 설치
npx prisma generate: node_modules/@prisma/client에 prismaclient를 타입스크립트 형태로 생성

SWR 설치
npm i swr --legacy-peer-deps

iron-sesson 다운로드
npm install iron-session@6.3.1
