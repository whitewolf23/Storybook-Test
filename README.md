# 스토리북을 이용한 컴포넌트 설계 및 테스트 



# 업데이트 

## 2019 11 22 (금)
* react youtube clone 을 참고하여 playlist 작성
* inline 함수를 이용하면, 리렌더링 될때마다 새 함수가 만들어 지기 때문에 성능 저하 발생 -> 필요할 때가 이니면 되도록 회피 

* playlist 클릭 -> 비디오플레이어가 update 되는 부분 난항 . -> react-video-js-player 라이브러리 오류 

참고 : https://github.com/karan101292/react-video-js-player/commit/b17ee4aa71cbbda2f7c0af9bd425c899dc4254cc

## 2019 11 21 (목)
* 클래스 컴포넌트를 이용한 이벤트 바인딩과 state 초기화관련 이슈 공부 

* 스토리북으로 테스트 시 react-router-dom 사용 하려면  BrowserRouter 로 감싸고 진행해야하는데 storybook-react-route 요거 설치 후에 해당 스토리에 decorator 추가하시면 간단하게 가능


## 2019 11 20 (수)
* storybook 설치 및 간단한 연동 테스트 시작 
* TaskItem 부분을 styled-components 를 이용하여 변경함.


# 목적
* 플레이어 개발을 위해 storybook 사용법을 숙지하고 이용해 볼 것. 

