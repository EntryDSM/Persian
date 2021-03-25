# Entry INIT

- [https://init.entrydsm.hs.kr](https://init.entrydsm.hs.kr)
- 대덕소프트웨어마이스터고등학교 내부에서 하는 활동들을 외부 사람들에게 공유하는 커뮤니티 웹앱<br />
  <img src="https://avatars.githubusercontent.com/u/26157097?s=400&v=4" alt="DSM" width="200" height="200" />

## 목차

1. [기획 배경](#기획-배경)
2. [프로젝트 소개](#프로젝트-소개)
3. [개발팀 구성](#개발팀-구성)
4. [규칙](#규칙)

## 기획 배경

### 문제점 및 바라는점

1. 대덕소프트웨어마이스터고등학교에 입학하고 싶어하는 학생들은 [대덕소프트웨어마이스터고등학교 홈페이지](https://dsmhs.djsch.kr)에 접속하여 학교에 대한 정보를 확인합니다. 하지만 복잡한 UI/UX와 재학생 로그인을 해야만 확인 가능하다는 점이 불편할것 이라고 판단을 했고, 실제 신입생 인터뷰 결과 실제 학교에서 진행하는 전공 동아리 활동이나 스포츠 클럽, 프로젝트 등 에 대한 정보를 알지 못한 학생이 대부분입니다.
2. 대덕소프트웨어마이스터고등학교를 졸업한 졸업생과 재학생의 접점이 없습니다. 실제로 졸업생에게 물어보니 재학생 멘토링에 대해 관심을 갖고 있지만 접점이 없어 하지 못한다는 점을 아쉬워합니다.
3. 대덕소프트웨어마이스터고등학교 졸업생들은 서로의 소식을 궁금해합니다.
4. 대덕소프트웨어마이스터고등학교 재학생들은 취업에 나가 종사하고 계신 졸업생들의 실제 재직중인 회사 문화와 장단점, 현업에 관한 내용 등을 궁금해합니다.

### 해결방안

이러한 [문제점 및 바라는점](#문제점-및-바라는점)을 해결하기 위해 궁극적인 해결방안으로 대덕소프트웨어마이스터고등학교 **커뮤니케이션 활성화**를 생각해 냈습니다.

## 프로젝트 소개

### INIT

- 현재 [https://init.entrydsm.hs.kr](https://init.entrydsm.hs.kr)에서 이용 가능합니다.
- 대덕소프트웨어마이스터고등학교 내부에서 하는 활동들을 외부 사람들에게 공유하는 커뮤니티 웹앱
- Skills: Next.js, TypeScript, Emotion, PWA, Docker, Github Actions

#### v1.0.0

- 게시글
  - 카테고리 별 리스트 조회
- 게시글 상세 페이지
  - 조회

### INIT CMS

- 어드민 계정을 통해 이용 가능합니다.

## 개발팀 구성

| GitHub                                         | 역할               | 이름             | 설명                                                          |
| ---------------------------------------------- | ------------------ | ---------------- | ------------------------------------------------------------- |
| [강석진](https://github.com/panleeee)          | 멘토               | DSM 1기 - 강석진 | 프로젝트 관리 및 멘토링을 도와주셨습니다.                     |
| [Joonmo](https://github.com/engolder)          | 멘토               | DSM 3기 - 연준모 | 프로젝트 관리 및 멘토링을 도와주셨습니다.                     |
| [\_uchanlee](https://github.com/woochanleee)   | 프론트엔드 웹앱    | DSM 5기 - 이우찬 | INIT 프론트엔드 개발을 담당하였습니다.                        |
| [Jeong woo yeong](https://github.com/o-ozogie) | 백엔드, 프론트엔드 | DSM 5기 - 정우영 | INIT 어드민 인프라, 백엔드 개발 및 CMS 개발을 담당하였습니다. |
| [임서영](https://github.com/lliimm318)         | 백엔드             | DSM 6기 - 임서영 | INIT 백엔드 개발을 담당하였습니다.                            |

## 프로젝트 관리

- 소통, 코드 리뷰, 이슈 관리, 보드 관리는 [space](https://www.jetbrains.com/ko-kr/space)를 사용한다.

  ![space](https://resources.jetbrains.com/storage/products/space/img/meta/logo.png)

## 규칙

### Git Branch Naming

- master // 
- development // 개발
- feature
  - `<ISSUE-UNIQUE-ID>`
  - ENTRYINIT-T-5
- release
  - v1.0.0

### Git Commit Message

- <ISSUE-UNIQUE-ID> <ISSUE-SUMMARY> <description>
  - ENTRYINIT-T-5 프로젝트 세팅
  - ISSUE-UNIQUE-ID: 스페이스에서 생성한 이슈 고유번호
  - ISSUE-SUMMARY: 스페이스에서 생성한 이슈 서머리
  - description: 부가 설명
- <decription>
  - 이슈와는 관련이 없는데 파일이 수정되었을때 사용한다.

### HTML

- 링크로 이동하는 경우는 클릭되는 element들의 가장 바깥을 `a` 태그로 감싼다.
- 시맨틱 구조를 준수한다.
- `img` 태그에 `alt` 속성을 필수로 부여한다.
- [Can I use](https://caniuse.com) 사이트를 이용하여 사파리 및 안드로이드의 크로스 브라우징 이슈가 안나게 한다.
- WAI(Web Accessibility Initiative)-ARIA(Accessible Rich Internet Applications)를 준수하여 웹 접근성을 지킨다.

### CSS

- margin과 padding은 같은 방향으로 적용한다.
  - vertical: element 기준 위로 또는 아래 만
  - horizontal: element 기준 왼쪽 또는 오른쪽 만
- 색상은 16진수로 한다.
  - rgb 제외

### Emotion

- jsx에 `css` props로 스타일링 하는 것은 지양한다. ` <div css={css``}/> ` `import { css } from '@emotion/react';`
  - 컴포넌트가 리렌더링 될때 매번 `css`를 호출하기 때문에 성능적 이슈가 발생할 수 있다.
- `styled`를 사용하여 스타일드 컴포넌트 사용을 지향한다. `import styled from '@emotion/styled';`
- 모든 element를 스타일드 컴포넌트로 만드는 것은 지양한다.
  - 컴포넌트의 최상위 wrapper element를 스타일드 컴포넌트로 만들며 네이밍은 \<Component Name> + Wrapper 로 작성한다. `<HeaderWrapper />`
  - Wrapper 스타일드 컴포넌트에서 자식 선택자를 사용하여 스타일링 한다.
  - 자식 선택자의 depth가 2 이상일 경우 `className`을 사용하여 해결하거나 스타일드 컴포넌트를 새로 생성한다.

### TypeScript

- 타이핑: `interface` 말고 `type`을 사용한다.
- 변수명: camelCase, getItem
- 상수: 대문자 + 언더바, THUMBNAIL_WIDTH

### Next.js

- 컴포넌트: function component 사용. `function App() { ... }`
- export: `export function App() { ... }` 처럼 사용하여 `import { App } from './App'` import 할때 컴포넌트명 자동완성이 가능하게 하고 컴포넌트명을 강제한다.
- import: import 구문은 npm 패키지와 본인이 작성한 파일 유형별로 줄바꿈하여 직관적으로 한다.

  ```tsx
  import Link from 'next/link';

  import { css } from '@emotion/react';

  import { Header } from 'components/header/Header.tsx';
  ```

### Folder Structure

```
/web-app
├─ components // view에만 관심을 둔다. props의 값을 그대로 렌더링 한다.
│  └─ <큰 범위의 명사, post>
│     └─ <컴포넌트명, Header>
│        ├─ style.ts
│        └─ index.tsx
├─ hooks
│  └─ domain // 비지니스 로직
├─ layouts
│  └─ <PasCal Case, MobileLayout.tsx>
├─ mock
├─ pages
├─ public
│  ├─ images
│  └─ icons
└─ utils
   ├─ api
   ├─ contextAPI
   ├─ function
   └─ hook
```
