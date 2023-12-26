# Used-trade-website(중고거래 사이트 가격비교 사이트)

## 2023년 2학기 고급웹프로그래밍 프로젝트
## 21101160 강민재, 21101199 양효정 제작

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


* 기타 관련
1. SWR 설치(npm i swr --legacy-peer-deps)
2. iron-sesson 다운로드(npm install iron-session@6.3.1)




### 실행 환경
* 비주얼 코드
* 비주얼 코드 내의 기본적인 콘솔상 주소가 GitHub\Used-trade-website\used-trade-website




### 터미널1
pscale connect used-trade-website : url을 얻어서 컴퓨터와 planetscale 사이에 보안 tunnel 제작

### 터미널2
npx prisma studio : 데이터베이스 관리자 패널 보기

### 터미널3
npm run dev : 웹사이트 실행하기


### 웹사이트 사용 방법
1. localhost:3000/register에서 회원가입 진행. 만약 이미 존재하는 아이디/이메일주소라면 오류 메세지 생성
1. localhost:3000/enter에서 아이디 비번 입력
2. npx prisma studio에서 기존에 있는 아이디 비번이 일치하는지 확인함. 만일 일치하지 않는다면 오류메세지 생성
3. 로그인이 성공하면 쿠키가 만들어지며 localhost:3000/home으로 들어가짐
4. 메인홈에서는 중고나라, 번개장터에서 크롤링한 자료들이 보임
5. 마이페이지 버튼을 누르면 사용자의 이름, 이메일주소같은 정보를 수정할 수 있음


