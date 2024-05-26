function CreateMainMenu() {
  const mainMenuBar = document.createElement('div');
  mainMenuBar.id = 'MainMenu';
  mainMenuBar.style.width = '100%';
  mainMenuBar.style.height = '80px';
  mainMenuBar.style.backgroundColor = 'rgb(99, 167, 122)';
  mainMenuBar.style.display = 'inline-block';
  mainMenuBar.style.position = 'fixed';

  mainMenuBar.style.zIndex = '15';
  // mainMenuBar 요소를 body에 추가합니다.
  document.body.appendChild(mainMenuBar);
}

Textnum = 0;

function CreateMainMenuText(content = 'test', myFunction = undefined) {
  const mainMenuBar = document.getElementById('MainMenu');
  if (!mainMenuBar) return;

  const Text = document.createElement('div');
  Text.id = 'MainMenuText' + Textnum;
  Textnum++;

  Text.style.display = 'inline-block';
  Text.style.margin = '15px';
  Text.style.width = '150px';
  Text.style.height = '50px';
  Text.style.textAlign = 'center';
  Text.style.placeContent = 'center';
  Text.style.fontSize = '24px';
  Text.style.color = 'white';
  Text.style.textDecoration = 'none';

  Text.addEventListener('mouseenter', function () {
    Text.style.cursor = 'pointer';
    Text.style.outline = '2px solid White';
  });
  Text.addEventListener('mouseleave', function () {
    Text.style.cursor = 'default';
    Text.style.outline = '';
  });

  Text.innerText = content;

  if (myFunction != undefined) {
    Text.addEventListener('click', myFunction);
  }

  mainMenuBar.appendChild(Text);
}

function GetMainMenuTextId(FindNum) {
  return 'MainMenuText' + FindNum;
}
