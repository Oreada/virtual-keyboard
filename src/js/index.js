import '../scss/style.scss';

import { createElement } from './createElement';

import { setLocalStorage, getLocalStorage } from './localStorage';

import keysAll from './keyAll';

const mainContent = `
<header class="header">
  <div class="header__container _container">
    <h1 class="header__title">RSS Virtual Keyboard</h1>
  </div>
</header>

<main class="main">
  <div class="main__container _container">

    <textarea class="main__textarea" name="textarea"></textarea>

    <div class="main__keyboard keyboard">
      <ul class="keyboard__list">
        
      </ul>
    </div>

  </div>
</main>

<footer class="footer">
  <div class="footer__container _container">
    <div class="footer__info info">
      <p class="info__os">OS Windows</p>
      <p class="info__switch">Switch language: Ctrl + Alt (left) or "eng/рус" button</p>
    </div>
  </div>
</footer>
`;

createElement('div', 'wrapper', mainContent, document.body);

const keyboardList = document.querySelector('.keyboard__list');

const textarea = document.querySelector('.main__textarea');
let flagCapsLock = false;

function getCursorPosTextarea(input) {
  return {
    start: input.selectionStart,
    end: input.selectionEnd,
  };
}

function setCursorPosTextarea(input, start) {
  const temp = input;
  setTimeout(() => {
    temp.selectionStart = start;
    temp.selectionEnd = start;
  }, 1);
}

function removeContentTextarea(usedKey) {
  const startCursor = getCursorPosTextarea(textarea).start;
  const endCursor = getCursorPosTextarea(textarea).end;
  let amounToDelete = endCursor - startCursor;
  if (usedKey === 'Backspace') {
    if (startCursor === endCursor) {
      amounToDelete = 1;
      const arr = textarea.value.split('');
      arr.splice(startCursor - 1, `${amounToDelete}`);
      textarea.value = arr.join('');
      setCursorPosTextarea(textarea, startCursor - 1);
    } else {
      const arr = textarea.value.split('');
      arr.splice(startCursor, `${amounToDelete}`);
      textarea.value = arr.join('');
      setCursorPosTextarea(textarea, startCursor);
    }
  } else if (usedKey === 'Delete') {
    if (startCursor === endCursor) {
      amounToDelete = 1;
      const arr = textarea.value.split('');
      arr.splice(startCursor, `${amounToDelete}`);
      textarea.value = arr.join('');
      setCursorPosTextarea(textarea, startCursor);
    } else {
      const arr = textarea.value.split('');
      arr.splice(startCursor, `${amounToDelete}`);
      textarea.value = arr.join('');
      setCursorPosTextarea(textarea, startCursor);
    }
  }
}

function addValueTextarea(elem, content) {
  const positionCursorObj = getCursorPosTextarea(textarea);
  const temp = elem;

  const val = temp.value;
  temp.value = val.slice(0, positionCursorObj.start) + content + val.slice(positionCursorObj.end);
  temp.selectionStart = positionCursorObj.end + content.length
    - (positionCursorObj.end - positionCursorObj.start);
  temp.selectionEnd = temp.selectionStart;
}

function getKeyByCode(code) {
  let found;
  keysAll.forEach((obj) => {
    if (obj.code === code) {
      found = obj;
    }
  });
  return found;
}

function getElementByCode(code) {
  return getKeyByCode(code)?.element;
}

function lightKey(code) {
  const key = getKeyByCode(code);
  if (key.element) {
    key.element.classList.add('_light');
  }
}

function lightKeyManual(code) {
  const element = getElementByCode(code);
  if (element) {
    element.classList.add('_light');
  }
}

function lightKeyEvent(event) {
  let curCode = event.code;
  if (curCode === 'ShiftRight') {
    curCode = 'ShiftLeft';
  }
  lightKey(curCode);
}

function unlightKey(code, event) {
  const key = getKeyByCode(code);
  if (key.element && (key.code !== 'ShiftLeft' || event)) {
    setTimeout(() => key.element.classList.remove('_light'), 150);
  }
}
function unlightKeyManual(code) {
  const key = getKeyByCode(code);
  if (key.element) {
    setTimeout(() => key.element.classList.remove('_light'), 150);
  }
}

function unlightKeyEvent(event) {
  let curCode = event.code;
  if (curCode === 'ShiftRight') {
    curCode = 'ShiftLeft';
  }
  unlightKey(curCode, event);
}

function createKeyboard(language) {
  setLocalStorage('lang', language);

  keyboardList.innerHTML = '';
  keysAll.forEach((keyObj) => {
    const temp = keyObj;
    const className = `key ${keyObj.className}`;
    const classNameRu = `key ${keyObj.classNameRu}`;

    if (temp.code === 'LanguageSwitch') {
      temp.lang = language !== 'eng';
    }

    if (language === 'eng') {
      const button = createElement('li', className, keyObj.content, keyboardList);
      temp.element = button;

      if (button.classList.contains('key_twin')) {
        createElement('span', 'key__addition', keyObj.contentShift, button);
      }
    } else {
      const button = createElement('li', classNameRu, keyObj.contentRu || keyObj.content, keyboardList);
      temp.element = button;

      if (button.classList.contains('key_twin')) {
        createElement('span', 'key__addition', keyObj.contentShiftRu || keyObj.contentShift, button);
      }
    }
  });
}

function actionKey(objArg, source) {
  const obj = objArg;
  if (obj) {
    if (obj.code === 'LanguageSwitch') {
      flagCapsLock = false;
      obj.lang = !obj.lang;
      if (obj.lang) {
        createKeyboard('рус');
        keysAll.forEach((keyObj) => {
          keyObj.element.addEventListener('click', () => {
            actionKey(keyObj, 'mouse');
          });
          keyObj.element.addEventListener('mousedown', () => {
            lightKey(keyObj.code);
          });
          keyObj.element.addEventListener('mouseup', () => {
            unlightKey(keyObj.code);
          });
          keyObj.element.addEventListener('mouseleave', () => {
            unlightKey(keyObj.code);
          });
        });
      }
      if (!obj.lang) {
        createKeyboard('eng');
        keysAll.forEach((keyObj) => {
          keyObj.element.addEventListener('click', () => {
            actionKey(keyObj, 'mouse');
          });
          keyObj.element.addEventListener('mousedown', () => {
            lightKey(keyObj.code);
          });
          keyObj.element.addEventListener('mouseup', () => {
            unlightKey(keyObj.code);
          });
          keyObj.element.addEventListener('mouseleave', () => {
            unlightKey(keyObj.code);
          });
        });
      }
    } else if (obj.code === 'Backspace' || obj.code === 'Delete') {
      removeContentTextarea(obj.code);
    } else if (obj.code === 'Tab') {
      addValueTextarea(textarea, '\t');
    } else if (obj.code === 'Enter') {
      addValueTextarea(textarea, '\n');
    } else if (obj.code === 'CapsLock') {
      flagCapsLock = !flagCapsLock;
      if (flagCapsLock) {
        obj.element.classList.add('_light_capslock');
      } else {
        obj.element.classList.remove('_light_capslock');
      }
    } else if (obj.code === 'CapsLock'
      || obj.code === 'ControlLeft'
      || obj.code === 'MetaLeft'
      || obj.code === 'AltLeft'
      || obj.code === 'AltRight'
      || obj.code === 'ControlRight') {
      addValueTextarea(textarea, '');
    } else if (flagCapsLock) {
      if ((!getKeyByCode('LanguageSwitch').lang)) {
        if (obj.code.startsWith('Key')) {
          addValueTextarea(textarea, obj.contentShift);
        } else if (obj.code.startsWith('Shift')) {
          addValueTextarea(textarea, '');
        } else {
          addValueTextarea(textarea, obj.content);
        }
      } else if ((getKeyByCode('LanguageSwitch').lang)) {
        if ((obj.code.startsWith('Key')
          || obj.code === 'Backquote'
          || obj.code === 'BracketLeft'
          || obj.code === 'BracketRight'
          || obj.code === 'Semicolon'
          || obj.code === 'Quote'
          || obj.code === 'Comma'
          || obj.code === 'Period')) {
          addValueTextarea(textarea, obj.contentShiftRu);
        } else if (obj.code.startsWith('Shift')) {
          addValueTextarea(textarea, '');
        } else {
          addValueTextarea(textarea, obj.contentRu);
        }
      }
    } else if (obj.code === 'ShiftLeft') {
      if (source === 'mouse') {
        obj.state = !obj.state;
        if (obj.state) {
          lightKeyManual(obj.code);
        } else {
          unlightKeyManual(obj.code);
        }
      } else if (source === 'keyboard') {
        obj.state = true;
      }
    } else {
      const shift = getKeyByCode('ShiftLeft');
      const langSwitcher = getKeyByCode('LanguageSwitch');
      if (!langSwitcher.lang) {
        let curContent = obj.content;
        if (shift.state) {
          curContent = obj.contentShift || obj.content;
          if (source === 'mouse') {
            shift.state = false;
            unlightKeyManual(shift.code);
          }
        }
        addValueTextarea(textarea, curContent);
      } else {
        let curContent = obj.contentRu;
        if (shift.state) {
          curContent = obj.contentShiftRu || obj.contentRu;
          if (source === 'mouse') {
            shift.state = false;
            unlightKeyManual(shift.code);
          }
        }
        addValueTextarea(textarea, curContent);
      }
    }
    textarea.focus();
  }
}

function pressKey(event) {
  let curCode = event.code;
  if (curCode === 'ShiftRight') {
    curCode = 'ShiftLeft';
  }
  if (event.altKey && (event.ctrlKey || event.metaKey) && ['AltLeft', 'ControlLeft'].indexOf(event.code) !== -1) {
    if (!event.repeat) {
      curCode = 'LanguageSwitch';
      const key = getKeyByCode(curCode);
      setTimeout(() => {
        actionKey(key, 'keyboard');
      }, 200);
    }
  } else {
    const key = getKeyByCode(curCode);
    actionKey(key, 'keyboard');
  }
}

function unpressKey(event) {
  let curCode = event.code;
  if (curCode === 'ShiftRight') {
    curCode = 'ShiftLeft';
  }
  if (curCode === 'ShiftLeft') {
    const key = getKeyByCode(curCode);
    if (key) {
      key.state = false;
      unlightKey(key.code);
    }
  }
}

function stopPrint(event) {
  event.preventDefault();
}

createKeyboard(getLocalStorage('lang', 'eng'));

keysAll.forEach((keyObj) => {
  keyObj.element.addEventListener('click', () => {
    actionKey(keyObj, 'mouse');
  });
  keyObj.element.addEventListener('mousedown', () => {
    lightKey(keyObj.code);
  });
  keyObj.element.addEventListener('mouseup', () => {
    unlightKey(keyObj.code);
  });
  keyObj.element.addEventListener('mouseleave', () => {
    unlightKey(keyObj.code);
  });
});

// ========================================================================================

document.addEventListener('keydown', lightKeyEvent);
document.addEventListener('keyup', unlightKeyEvent);
textarea.addEventListener('keydown', stopPrint);
document.addEventListener('keydown', pressKey);
document.addEventListener('keyup', unpressKey);

// ========================================================================================
