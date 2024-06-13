<h1>자바스크립트를 사용한 간단한 메인 메뉴 만들기</h1>


메인메뉴 예시

![메인메뉴 예시](https://github.com/kjejhk37/SimpleMainMenu/assets/118964808/da3f0d9e-9022-4132-a03a-2d6600754ef8)

<hr/>

<h2>CreateMainMenu()</h2> 
스크롤 위치에 영향을 받지 않는 메인 메뉴 박스를 만듭니다.
메인 메뉴 박스의 id는 MainMenu로 고정입니다.

<hr/>

<h2>CreateMainMenuText(content, myFunction)</h2>

메인 메뉴에 글자를 생성합니다.


<b>content</b> : 메인 메뉴에 추가할 글자입니다.

<b>myFunction</b> : 해당 글자를 클릭했을 때 발생할 이벤트 입니다. 각 글자는 생성한 순서에 따라 'MainMenuText' + 번호를 id로 할당받습니다.

<b>예시</b> : 첫번째로 만든 text.id = MainMenuText0;
       두번째로 만든 text.id = MainMenuText1; ....

