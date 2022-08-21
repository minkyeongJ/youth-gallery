# 🎨 youth-gallery(유스갤러리)

![배너_최종](https://user-images.githubusercontent.com/67677374/182035367-630267c3-940e-450e-9c4b-cbdbaa4ed3eb.png)

배포 URL: https://youth-gallery.vercel.app/
```
test id: sabit1997@test.com
test pw: abcdef
```

## 1. 소개와 기능

### 1.1 프로젝트 소개

**youth\-gallery**는 **미술 대학 학생들이 자신의 작품을 전시하고, 판매하고 있는 작품을 등록하여 홍보할 수 있는 SNS**입니다.

회원 가입과 로그인을 하면, 상품을 등록하지 않아도 작품과 일상을 공유하며 즐거운 SNS 활동을 할 수 있습니다.
사용자는 글과 사진과 함께 게시물을 작성하고, 이를 공유할 수 있습니다.
다른 사용자를 팔로우하면 팔로우한 사용자가 올린 게시물을 홈 피드에서 확인할 수도 있습니다.

피드를 구경하다가 마음에 드는 게시물을 발견했다면 좋아요를 누를 수 있고, 댓글을 남길 수도 있습니다.

### 1.2 팀원소개

|                                                    **FE 김수현**                                                    |                       **FE 김아름**                       |                                                    **FE 정예지**                                                    |                                                                                **FE 조민경**                                                                                |
| :-----------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **blog**: [bellnoona.log](https://velog.io/@tngusglaso) </br> **github**: [bellnoona](https://github.com/bellnoona) |      **github**: [areumz](https://github.com/areumz)      | **blog**: [sabit1997.log](https://yeahjjy.tistory.com/) </br> **github**: [sabit1997](https://github.com/sabit1997) |                                **blog**: [fenjo.log](https://velog.io/@fenjo) </br> **github**: [minkyeongJ](https://github.com/minkyeongJ)                                 |
|                              ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb)                              | ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb) |                              ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb)                              | ![FrontEnd](https://img.shields.io/badge/FrontEnd-3f97fb) ![Planning](https://img.shields.io/badge/-Planning-f67280) ![Design](https://img.shields.io/badge/-Design-orange) |

### 1.3 기능

1.3.1 기능 분류

    - 🔐 인증
        - 로그인
        - 회원가입
        - 회원 정보 수정
        - 유효성 평가

    - 🎨 상품
        - 상품 목록 / 등록 / 수정 / 삭제
        - 이미지 파일 업로드 / 수정 / 미리보기
        - 유효성 평가

    - 🏞 게시글
        - 게시글 목록 / 등록 / 수정 / 삭제
        - 다중 이미지 파일 업로드 / 수정 / 미리보기

    - 💬 댓글
        - 댓글 등록 / 삭제

    - 🔍 검색

    - 👩🏻‍🎨🧑🏻‍🎨 follow / unfollow

    - 💙 좋아요
        - 좋아요 등록 / 취소

    - 📰  소식
        - 미술계의 새소식 목록

1.3.2 UI Interaction

    - 이미지 슬라이드
    - 모달
    - splash animation
    - 버튼 활성화


## 2. 개발 환경 

-   Web Framework
    -   React.js
-   서비스 배포 환경
    -   vercel
-   형상관리 및 협업
    -   Git, GitHub, Notion, VSCode Live Share

## 3. 기술스택과 개발 방법 선택 이유

### 3.1 기술스택

-   Front-End
    -   React.js, HTML Living Standard, CSS, styled-components, JavaScript
-   Back-End
    -   제공된 API
-   Design
    -   Figma

### 3.2 개발 방법 선택 이유

-   브랜치 전략으로 `github-flow`를 선택한 이유?
    -   팀원 모두 git을 사용한 협업에 익숙한 편이 아니었고, 프로젝트 규모를 생각했을 때  
        규칙이 단순한 github-flow를 사용하기로 함
    -   main 브랜치에는 코드 리뷰를 받은 배포될 파일만 merge시키고, 그 외에 브랜치명 등은 규칙을  
        정하지 않고 진행함
-   CSS 스타일링으로 `styled-components`, `CSS Module`을 선택한 이유?
    -   작은 UI 컴포넌트는 css가 길지도 않고 간단하여 한 파일에서 작성하는게 좋다고 생각하여 `styled-components`를 사용함
    -   이후 보다 큰 단위의 페이지 작업으로 넘어가면서 코드의 양이 많아졌을 때 페이지 전환을 고려하여 렌더링 속도가 빠른 `CSS Module`을 사용함
-   문서관리 툴로 `Notion`을 선택한 이유?
    -   팀원 모두에게 익숙한 툴임
    -   회의 시 팀원들과 함께 실시간 동시 수정이 가능함
    -   어디서나 쉽게 접근할 수 있고 수정이 가능함
    -   방대한 양의 문서를 표로 간단하고 가시적으로 정리할 수 있음
    -   일정관리와 문서 관리가 동시에 가능함

## 4. 프로젝트 구조와 개발 일정

### 4.1 프로젝트 구조

```
assets : 이미지 파일 집합
components : 재사용 가능한 컴포넌트 집합
pages : 유저가 보는 실제 콘텐츠
style : 공통 스타일드 컴포넌트, reset.css, 프로젝트 컬러 상수화
hooks : 재사용을 위한 커스텀 훅의 집합

📦 youth-gallery
├─ .eslintrc.json
├─ .github
│  └─ PULL_REQUEST_TEMPLATE.md
├─ .gitignore
├─ .gitmessage.txt
├─ .prettierrc.json
├─ README.md
├─ README_Img
├─ package-lock.json
├─ package.json
├─ public
├─ src
│  ├─ App.js
│  ├─ App.test.js
│  ├─ assets
│  ├─ components
│  │  ├─ LoginInput.jsx
│  │  ├─ PostForm
│  │  ├─ Product.js
│  │  ├─ UserFollow.js
│  │  ├─ UserInfo.jsx
│  │  ├─ UserInfo.module.css
│  │  ├─ UserPost.jsx
│  │  ├─ button
│  │  ├─ comment
│  │  ├─ editProfile
│  │  ├─ join
│  │  ├─ loding
│  │  ├─ login
│  │  ├─ membership
│  │  ├─ modal
│  │  ├─ nav
│  │  ├─ search
│  │  └─ tab
│  ├─ font.css
│  ├─ hooks
│  ├─ index.js
│  ├─ pages
│  │  ├─ FollowersList.jsx
│  │  ├─ FollowersList.module.css
│  │  ├─ FollowingsList.jsx
│  │  ├─ FollowingsList.module.css
│  │  ├─ Home.jsx
│  │  ├─ NonFollowing.jsx
│  │  ├─ NotFound.jsx
│  │  ├─ PageRouter.jsx
│  │  ├─ Search.jsx
│  │  ├─ addProduct
│  │  ├─ news
│  │  ├─ postDetail
│  │  ├─ postEdit
│  │  ├─ postUpload
│  │  ├─ productEdit
│  │  └─ userprofile
│  ├─ reportWebVitals.js
│  ├─ setupTests.js
│  └─ styles
│     ├─ global.css
│     └─ reset.css
└─ yarn.lock
```

### 4.1 개발 일정(WBS)

-   2022.06.09 ~ 2022.08.01
-   기획: 2022.06.09 ~ 20022.07.03
-   1차 개발 일정  
    ![WBS](https://user-images.githubusercontent.com/67677374/181904267-4f4bcd4b-f024-4a8f-8a2a-c9088e59a70e.png)

-   코드 수정 : 20022.07.22 ~

## 5. 전체 UI 기획

-   피그마 캡쳐
<div style="background-color:#d3d3d3; padding-left:30px;">
    <img src="./README_Img/Frame15.png" width="70%">
    <img src="./README_Img/Frame16.png" width="70%">
    <img src="./README_Img/Frame19.png" width="70%">
    <img src="./README_Img/Frame14.png" width="70%">
    <img src="./README_Img/Frame18.png" width="70%">
</div>

## 6. 역할 분담

김수현 - splash / 로그인 / 회원가입 / 프로필 설정 / 마이 프로필 수정

김아름 - 게시글 작성 수정 삭제 / 댓글 리스트 / 댓글 작성 삭제 / 소식 페이지 / 게시글 상세

정예지 - 프로필 페이지 / 팔로워 목록 / 팔로잉 목록 / 팔로우 / 언팔로우 / 상품 등록

조민경 - 피드 / 검색 / 하단 탭 메뉴 / 좋아요 / 모달 / 404페이지 / 로딩페이지


## 7. 메인 기능

<div style="text-align: center">

| 0. Splash                                                                                                        | 1. 로그인                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ![splash](https://user-images.githubusercontent.com/76866502/182042870-fe37bf3d-7247-41a0-bd90-01b9362ae505.gif) | ![로그인](https://user-images.githubusercontent.com/76866502/182043014-494afaa0-96cf-44be-97ac-615f39a4e987.gif) |

| 2. 회원가입                                                                                                                                 | 3.로그아웃                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![회원가입+프로필설정](https://user-images.githubusercontent.com/76866502/182043029-f462bb13-7583-4f55-8820-dbe6bc8ba73b.gif) | ![로그아웃](https://user-images.githubusercontent.com/76866502/182043051-070fc39d-0fd8-4e37-bfec-1152c03135b7.gif) |

| 4.프로필수정 | 5.404페이지 |
| --------- | --------- |
| ![프로필수정](https://user-images.githubusercontent.com/76866502/182043064-e066e0ed-09e2-4c70-abd7-a4574f25febb.gif) | ![404페이지](https://user-images.githubusercontent.com/67677374/182022274-72cba4bf-8636-4d59-b276-8b27372bc436.gif) |

| 6.로딩화면                                                                                                        | 7.홈화면                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![loading](https://user-images.githubusercontent.com/67677374/182022297-c74dfeea-6855-4321-8966-99c691f48bbb.gif) | ![home](https://user-images.githubusercontent.com/67677374/182022283-6c91f807-432a-450d-bfde-eaaa7baee2c5.gif) |
|                                                                                                                   |

| 8.좋아요 등록/취소                                                                                                     | 9.이미지 슬라이드                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ![heart_button](https://user-images.githubusercontent.com/67677374/182022277-c003f4ce-b802-40f6-ac2a-64430e080845.gif) | ![img_slide](https://user-images.githubusercontent.com/67677374/182022294-5e4c2b0a-e27c-42d8-a2f0-2b4e7efb5a63.gif) |

| 10.모달기능                                                                                                      | 11.검색                                                                                                           |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| ![modal](https://user-images.githubusercontent.com/67677374/182022298-6eec57f6-5921-483d-9d55-6c5c8188f988.gif) | ![search](https://user-images.githubusercontent.com/67677374/182022302-7d46ceaa-a3c4-4cb1-acc8-e617092f789a.gif) |

| 12. 신고 | 13.소식                                                                                                               |
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| ![report](https://user-images.githubusercontent.com/67677374/182027191-b87cbe85-2587-47b8-919b-3b64177f52b2.gif) | ![리드미소식](https://user-images.githubusercontent.com/84116709/182017483-060ef4a5-f903-42f8-8ec9-caa16a1b16ee.gif) |

| 14-1.게시물 등록                                                                                                            | 14-2.게시물 수정                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![리드미게시물등록](https://user-images.githubusercontent.com/84116709/182017504-57ffe45a-e369-4211-81b8-c7d449bc049d.gif) | ![리드미게시물수정](https://user-images.githubusercontent.com/84116709/182017505-3dd74cf6-bcb9-4221-a073-e06e055eb0c6.gif) |

| 14-3.게시물 삭제                                                                                                            | 15-1.댓글 리스트                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![리드미게시물삭제](https://user-images.githubusercontent.com/84116709/182017506-769871b3-0a34-4cbe-b7a8-d48ada93654a.gif) | ![리드미댓글리스트](https://user-images.githubusercontent.com/84116709/182030791-a262f3fd-600d-41ff-aa18-5bba2e7f9cca.gif) |

| 15-2.댓글 등록                                                                                                            | 15-3.댓글 삭제                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| ![리드미댓글등록](https://user-images.githubusercontent.com/84116709/182035839-175227a6-7ea3-4bb4-82c6-3f8e195a4dd5.gif) |![리드미댓글삭제](https://user-images.githubusercontent.com/84116709/182017510-8509df39-09c5-4392-86da-aeb7792d3df0.gif)|

|16-1. 마이 프로필| 16-2. 유저 프로필 |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------- |
|![리드미마이프로필](https://user-images.githubusercontent.com/100986977/182018670-36b40771-6878-4a87-9260-fb646478703e.gif) |   ![리드미유저프로필](https://user-images.githubusercontent.com/100986977/182018666-05762faa-42e3-451a-baad-83f43f002f80.gif)    |

| 17-1. 팔로우 팔로윙 목록                                                                                                           | 17-2. 팔로우, 언팔로우                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ![리드미팔로잉팔로워리스트](https://user-images.githubusercontent.com/100986977/182035417-70e7fe58-78a4-4ed3-bda8-122f337b9a26.gif)| ![리드미팔로우언팔로우](https://user-images.githubusercontent.com/100986977/182018669-b477c60d-9e9d-4bb3-b0dc-4eaf1c997d01.gif) |

| 18-1. 상품 등록 | 18-2. 상품 수정                                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ![리드미상품등록](https://user-images.githubusercontent.com/100986977/182018676-6802b35c-213a-45ae-931d-369fb59fc012.gif)            | ![리드미상품수정](https://user-images.githubusercontent.com/100986977/182018665-f01dc26c-acd5-4b8e-b040-f9eb6743cae7.gif) |

| 18-3. 상품 삭제                                                                                                             | 18-4. 상품 웹사이트로 이동                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ![리드미상품삭제](https://user-images.githubusercontent.com/100986977/182018664-7f6c4e69-e550-485b-85c8-ef1e6e09aaab.gif) | ![리드미웹사이트이동](https://user-images.githubusercontent.com/100986977/182035452-12b7ccd2-730c-4ed7-a399-3bfe52a32193.gif)
 |

</div>

-   splash

    -   서비스 접속 초기 화면
    -   splash 화면이 잠시 나온 뒤 다음 페이지(로그인 x : 로그인 화면 / 로그인 o : 홈 피드)

-   로그인

    -   이메일과 비밀번호를 사용하여 로그인 할 수 있음
    -   이메일 주소와 로그인에 대한 유효성 검사를 진행하여 일치하지 않을 경우 경고 문구

-   회원 가입

    -   이메일 주소와 비밀번호를 입력하여 회원 가입 할 수 있음
    -   input창에 입력시 유효성 검사가 진행되며, 통과 시 프로필 설정으로 연결됨
    -   프로필 설정에 필요한 사진, 사용자 이름, 계정 id, 소개를 입력할 수 있음
        계정 id는 중복 불가

-   홈 피드

    -   사용자들이 올린 게시물이 표시됨
    -   자신이 팔로우한 사용자의 게시물만 확인 가능함
    -   팔로우한 사용자가 없을 경우 or 내가 팔로우한 사용자가 게시물이 없을 경우 검색하기 버튼이 뜸

-   검색

    -   홈 피드에 돋보기 버트검색 버튼 클리하면 표시되는 페이지
    -   사용자 이름을 검색하여 계정을 찾을 수 있음

-   사용자 프로필 페이지

    -   사용자 프로필 페이지에서는 사용자 이름, 계정 ID, 소개, 팔로워 및 팔로잉 수, 판매 상품,  
        사용자가 업로드한 게시글을 확인할 수 있음
    -   사용자 정보 하단에는 팔로우 버튼이 있고, 클릭할 때마다 팔로우 <-> 언팔로우로 상태 변경됨
    -   팔로워 및 팔로잉 수를 클릭하면 팔로워, 팔로잉 사용자 목록 표시
    -   판매 중인 상품 섹션은 등록한 상품이 없을 경우에는 표시 되지 않음
    -   게시글 섹션에서는 목록형과 앨범형으로 게시글을 확인할 수 있음  
        기본형은 목록형이며, 이미지가 없는 게시글인 경우 앨범에서는 표시되지 않음
    -   사용자가 올린 게시글이 없을 경우 게시글이 나타나지 않음
    -   나의 프로필 페이지일 경우 프로필 수정 버튼과 상품 등록 버튼이 표시됨

-   팔로워, 팔로잉 목록

    -   사용자 프로필 사진, 이름, 계정 ID, 팔로우 버튼으로 구성된 목록
    -   내가 팔로우한 사용자일 경우 취소 버튼이, 내가 팔로우 하지 않은 사용자의 경우 팔로우 버튼이 표시

-   내 프로필 수정
    -   나의 프로필 페이지에서 프로필 수정을 누르면 프로필 수정 페이지가 뜸
    -   입력창에 대한 명세는 회원 가입에서의 설정과 동일함
-   상품 등록

    -   상품 이미지, 상품명, 가격, 판매 링크를 입력할 수 있으며 모든 입력 완료시 저장 버튼 활성화됨
    -   상품명은 2~15자 이내로 입력되게 하고, 가격은 숫자를 입력하면 자동으로 원단위로 변환됨

-   게시글 댓글 페이지

    -   게시글 하단에 말풍선 아이콘을 클릭하면 댓글을 확인하고 입력할 수 있는 페이지가 뜸
    -   댓글 입력창에 텍스트를 입력하면 버튼이 활성화됨

-   게시글 작성 페이지

    -   하단 메뉴바에 게시글 작성을 누르면 페이지가 뜸
    -   글이 입력되거나 사진이 업로드되면 업로드 버튼이 활성화되고, 버튼을 누르면 게시글이 업로드됨
    -   사진은 우측 하단 버튼을 클릭하면 업로드할 수 있으며, 최대 3장까지 업로드 가능함

-   새로운 소식 페이지

    -   하단 메뉴바에 소식을 누르면 페이지가 뜸
    -   최신 미술계 소식을 볼 수 있음

-   하단 탭 메뉴

    -   하단 탭 메뉴는 홈, 채팅, 게시물 작성, 프로필 4개의 메뉴로 구성
    -   모든 페이지는 페이지에 해당하는 탭 메뉴가 활성화
    -   탭 메뉴 클릭 시 활성화 된 탭에 해당하는 페이지로 이동

-   좋아요 버튼

    -   게시글이 나타나는 모든 페이지에 해당
    -   게시글 하단에 하트 모양에 좋아요 버튼 위치
    -   빈 하트를 클릭하면 색이 칠해진 하트로 변경
    -   색이 칠해진 하트를 누르면 빈 하트로 변경
    -   좋아요 개수는 카운트 되어 하트모양 우측에 표시

-   모달

    -   헤더에 있는 버튼을 클릭하면 설정 및 개인정보와 로그아웃 표시
    -   게시글 우측 상단에 위치한 버튼을 클릭했을 경우
        -   내가 작성한 게시글일 경우 : 삭제, 수정 버튼
        -   다른 사용자가 작성한 게시글일 경우 : 신고하기 버튼
    -   댓글 우측 상단에 위치한 버튼을 클릭했을 경우
        -   내가 작성한 댓글일 경우 : 삭제 버튼
        -   다른 사용자가 작성한 댓글일 경우 : 신고하기 버튼
    -   로그아웃, 삭제, 신고 버튼을 누르면 확인 메시지 모달창이 나타나야 하고, 취소 버튼을 누르면 모달은 사라짐

## 8. 핵심 코드
### 8-1. 커스텀 훅
- 처음 페이지에 들어갔을 때, 댓글 작성시, 댓글 삭제시 총 3번 재렌더링
```
import axios from 'axios';
import { useState } from 'react';

const useComments = () => {
    const [commentList, setCommentList] = useState([]);

    async function renderComments(postId) {
        const url = 'https://mandarin.api.weniv.co.kr';
        const getToken = localStorage.getItem('token');
        try {
            const res = await axios.get(`${url}/post/${postId}/comments`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            });
            setCommentList(res.data.comments);
        } catch (error) {
            console.log(error);
        }
    }

    return [commentList, renderComments];
};

export default useComments;
```
### 8-2. Report API
- 홈피드 게시물 신고, 댓글 신고, 프로필 페이지에 있는 게시글 신고 총 3곳 신고 api
```
import axios from 'axios';

function axiosReport(url) {
    const getToken = localStorage.getItem('token');
    axios({
        method: 'POST',
        url: `https://mandarin.api.weniv.co.kr${url}`,
        headers: {
            'Authorization': `Bearer ${getToken}`,
            'Content-type': 'application/json',
        },
    })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
}

export default axiosReport;
```
### 8-3. axios
```
const handleButton = () => {
    if (isFollow) {
        axios.delete(
                    `https://mandarin.api.weniv.co.kr/profile/${accountname}/unfollow`,
                    {
                        headers: {
                            'Authorization': `Bearer ${getToken}`,
                            'Content-type': 'application/json',
                        },
                    }
                )
                .then((res) => {
                    const data = res.data.profile;
                    setFollowerCount(data.followerCount);
                    setFollowingCount(data.followingCount);
                    const isFollow = res.data.profile.isfollow;
                    setIsFollow(isFollow);
                    getFollowState(isFollow);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            axios
                .post(
                    `https://mandarin.api.weniv.co.kr/profile/${accountname}/follow`,
                    {},
                    {
                        headers: {
                            'Authorization': `Bearer ${getToken}`,
                            'Content-type': 'application/json',
                        },
                    }
                )
                .then((res) => {
                    const isFollow = res.data.profile.isfollow;
                    const data = res.data.profile;
                    setFollowerCount(data.followerCount);
                    setFollowingCount(data.followingCount);
                    setIsFollow(isFollow);
                    getFollowState(isFollow);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
```

## 9. 개발 문화

-   프로젝트 시작전 주간 회의 통해 기획, 환경 셋팅, 역할 분담
-   프로젝트 시작후 평일 오전 10시 작업 현황 브리핑
-   VSCode Live Share를 이용한 페어 코딩
-   브랜치 전략 : GitHub Branch  
     PR로 코드 리뷰 받고, main에 merge  
     PR시, 해결하지 못한 부분은 공유하고 페어프로그래밍 및 댓글로 함께 해결
-   공동 Notion에 회의록 작성, 작업 일정 google docs로 공유, 참고할 문서 공유
-   GitHub Projects의 대시 보드를 활용하여 PR 올린 내용들을 Todo / In Progress / Done으로  
    나누어 관리함  
    [GitHub Projects](https://github.com/orgs/youth-gallery/projects/1/views/1)

## 10. 개발하면서 겪은 이슈와 해결

-   각자 스타일이 너무 달라! **코딩 컨벤션, 커밋 컨벤션**
    -   각자 코드나 커밋 메세지를 적는 스타일이 다르기 때문에, 협업시 그 부분을 통일하기 위해 코딩 컨벤션과 커밋 컨벤션을 정함
    -   eslint, prettier, gitmessage 파일을 생성하여 자동 설정함
-   비동기 통신은 뭘 써야해? **axios vs fetch**
    -   비동기 통신에 있어서 axios를 선택함
    -   IE11을 지원, 브라우저 호환성이 axios가 더욱 뛰어나기 때문
    -   json으로 데이터를 자동변환해주어 사용이 용이
-   코드가 계속 충돌하려 한다! **오전 브리핑**
    - 각자 작업하는 부분이 겹칠 때가 있어 충돌이 일어남
    -   매일 오전 브리핑으로 작업 상황과 오늘 작업 예정을 공유하여, 겹치지 않도록 함
    -   매 작업 전 pull 받는 것을 필수로 함

## 11. 추후 진행 할 리팩토링 리스트

-   소식 페이지 내의 내용을 admin 계정에서 받아오고 있는데, github repo에서 받아오고  
    수정 사항은 PR로 관리할 수 있도록 하기
-   style 파일을 Styled Component로 모두 수정하여 분리
-   커스텀 훅을 사용하여 코드 모듈화
-   utils에 함수를 api로 분리하여 코드 모듈화
-   최적화를 통해 성능 개선
-   검색엔진 최적화(SEO) 진행

## 12. 개발하며 느낀점

| 이름                                                                     | 느낀 점                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 김수현                                                                   | 로그인, 회원가입, 프로필 등 맡은 파트 대부분이 유효성 검사를 하는 부분이었는데 조금이나마 익숙해질 수 있었고, 다른 페이지로 데이터를 넘겨주는 유기적인 동작에 대해 고민하는 과정에서 공부가 많이 되었던 것 같습니다. 그리고 **팀원과의 협업을 위해 맞춰가야하는 다양한 점에 대해 알았고, 팀워크의 중요성에 대해 배운 소중한 시간**이었습니다.🐥                         |
| 김아름                                                                   | 협업으로 프로젝트를 진행해본 것은 처음이었는데, 규칙 정하기나 개발 도구 선택 등 다양한 점을 의논하면서 작업해야하다보니 쉽지는 않았습니다. 하지만 한편으로는 보람 되고, **기술적으로나 협업 능력적으로 많이 성장할 수 있어서 좋은 시간이었습니다!🥰**                                                                                                                   |
| 정예지                                                                   | 서버에서 데이터를 받아와 작업하는 것은 처음이었는데 공부할 때보다 직접 해보며 오류에 직면하고 그 오류를 해결하며 더욱 많은 부분을 배워간 것 같습니다. 그리고 **처음인 협업이어서 미숙한 부분도 많았지만 팀원분들과 소통하며 하나하나 완성해가는 것이 뿌듯하고 즐거웠습니다.😁**                                                                                         |
| 조민경                                                                   | git을 사용하여 형상관리를 하며 **코드 충돌이 일어나고 그것을 다같이 해결하는 과정에서 이것이 협업이구나**를 느낄 수 있었습니다. 모달을 작업하면서 props에 이동에 대해 좀 더 깊게 이해할 수 있었습니다. 혼자였다면 한달이라는 기간동안 이정도의 성과를 이뤄내지 못했을 것입니다. 같이 할 수 있어서 더 뿌듯하고 열정을 다했던 것 같습니다! 너무 뜻깊은 시간이었습니다. 😉 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |                                                                                                                                                                                                                                                                                                                                                                     |
