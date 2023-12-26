# Used-trade-website

### 사전 설치 리스트
콘솔상 주소가 GitHub\Used-trade-website\used-trade-website인지 확인하기

* 터미널1 관련
1. 비주얼코드 콘솔에서 Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
2. 비주얼코드 콘솔에서 irm get.scoop.sh | iex
3. 비주얼코드 콘솔에서 scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
4. 비주얼코드 콘솔에서 scoop install pscale mysql
5. 비주얼코드 콘솔에서 pscale auth login 입력하고 planetscale 로그인


* 터미널2 관련
1. 비주얼코드내 콘솔에서 Prisma 다운받기(npm i prisma -D)
2. 비주얼코드 콘솔에서 npm install @prisma/client 입력


* 터미널3 관련
1. node.js 설치(https://nodejs.org/en)
3. npm install next 콘솔에 입력하여 설치




### 실행 환경
* 비주얼 코드
* 비주얼 코드 내의 기본적인 콘솔상 주소가 GitHub\Used-trade-website\used-trade-website




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
