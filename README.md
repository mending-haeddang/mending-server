# ❄️ 멜팅 Melting ❄️

 아이스한 분위기 멜팅으로 녹여봐요 🧊 🔥

처음 만난 사람들이 어색한 분위기를 풀고 싶을 때,

아이스 브레이킹을 위한 질문과 답변 공간을 제공한다.


## 담당 API

장서현 : main - 답변 작성하기, 답변 보여주기

박정현 : main - 팀 정보 입력, 팀원 접속 확인, 팀 코드 입력 완료

## Code Convention
> eslint, prettier 사용

## Commit Message Convention
```
[CHORE] : 코드 수정, 내부 파일 수정
[FEAT] : 새로운 기능 구현
[FIX] : 버그, 오류 해결
[DEL] : 쓸모없는 코드 삭제
[DOCS] : README나 WIKI 등의 문서 개정
[MOVE] : 프로젝트 내 파일이나 코드의 이동
[RENAME] : 파일 이름 변경이 있을 때 사용합니다.
[REFACTOR] : 전면 수정이 있을 때 사용합니다
[MERGE]: 다른브렌치를 merge 할 때 사용합니다.
[style]: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
```

## Git Branch
- main 브랜치 - 프로젝트 초기 셋팅, default branch
- 할 일 issue 등록 후 issue 번호로 브랜치 생성 후 작업
    - feature/#이슈넘버
- PR ➡️ 코드리뷰 ➡️ 머지( → main)
- 머지 후 feature 브랜치 삭제
- 브랜치 생성 전 main 최신화
```
- main
- feature
   ├── #1
   ├── #2
   └── #3
```

## Directory Structure
```
Melting_server
|
|- .gitignore
|- .firebaserc
|- .firebase.json
|
|- functions
	|- node_modules
	|- package.json
	|- package-lock.json
	|- index
	|- api
	|- config
	|- constants
	|- db
	|- lib
```