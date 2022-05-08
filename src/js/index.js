import '../css/style.css';
import '../scss/style.scss';

import { createElement } from './createElement';

const keyboardList = document.querySelector('.keyboard__list');

const keysAll = [
  {
    content: '`', code: 'Backquote', className: 'key_light key_twin', contentShift: '~', contentRu: 'ё', contentShiftRu: 'Ё',
  },
  {
    content: '1', code: 'Digit1', className: 'key_light key_twin', contentShift: '!', contentRu: '1', contentShiftRu: '!',
  },
  {
    content: '2', code: 'Digit2', className: 'key_light key_twin', contentShift: '@', contentRu: '2', contentShiftRu: '"',
  },
  {
    content: '3', code: 'Digit3', className: 'key_light key_twin', contentShift: '#', contentRu: '3', contentShiftRu: '№',
  },
  {
    content: '4', code: 'Digit4', className: 'key_light key_twin', contentShift: '$', contentRu: '4', contentShiftRu: ';',
  },
  {
    content: '5', code: 'Digit5', className: 'key_light key_twin', contentShift: '%', contentRu: '5', contentShiftRu: '%',
  },
  {
    content: '6', code: 'Digit6', className: 'key_light key_twin', contentShift: '^', contentRu: '6', contentShiftRu: ':',
  },
  {
    content: '7', code: 'Digit7', className: 'key_light key_twin', contentShift: '&', contentRu: '7', contentShiftRu: '?',
  },
  {
    content: '8', code: 'Digit8', className: 'key_light key_twin', contentShift: '*', contentRu: '8', contentShiftRu: '*',
  },
  {
    content: '9', code: 'Digit9', className: 'key_light key_twin', contentShift: '(', contentRu: '9', contentShiftRu: '(',
  },
  {
    content: '0', code: 'Digit0', className: 'key_light key_twin', contentShift: ')', contentRu: '0', contentShiftRu: ')',
  },
  {
    content: '-', code: 'Minus', className: 'key_light key_twin', contentShift: '_', contentRu: '-', contentShiftRu: '_',
  },
  {
    content: '=', code: 'Equal', className: 'key_light key_twin', contentShift: '+', contentRu: '=', contentShiftRu: '+',
  },
  { content: 'Backspace', code: 'Backspace', className: 'key_dark key_wide' },
  { content: 'Tab', code: 'Tab', className: 'key_dark' },
  {
    content: 'q', code: 'KeyQ', className: 'key_light', contentShift: 'Q', contentRu: 'й', contentShiftRu: 'Й',
  },
  {
    content: 'w', code: 'KeyW', className: 'key_light', contentShift: 'W', contentRu: 'ц', contentShiftRu: 'Ц',
  },
  {
    content: 'e', code: 'KeyE', className: 'key_light', contentShift: 'E', contentRu: 'у', contentShiftRu: 'У',
  },
  {
    content: 'r', code: 'KeyR', className: 'key_light', contentShift: 'R', contentRu: 'к', contentShiftRu: 'К',
  },
  {
    content: 't', code: 'KeyT', className: 'key_light', contentShift: 'T', contentRu: 'е', contentShiftRu: 'Е',
  },
  {
    content: 'y', code: 'KeyY', className: 'key_light', contentShift: 'Y', contentRu: 'н', contentShiftRu: 'Н',
  },
  {
    content: 'u', code: 'KeyU', className: 'key_light', contentShift: 'U', contentRu: 'г', contentShiftRu: 'Г',
  },
  {
    content: 'i', code: 'KeyI', className: 'key_light', contentShift: 'I', contentRu: 'ш', contentShiftRu: 'Ш',
  },
  {
    content: 'o', code: 'KeyO', className: 'key_light', contentShift: 'O', contentRu: 'щ', contentShiftRu: 'Щ',
  },
  {
    content: 'p', code: 'KeyP', className: 'key_light', contentShift: 'P', contentRu: 'з', contentShiftRu: 'З',
  },
  {
    content: '[', code: 'BracketLeft', className: 'key_light key_twin', contentShift: '{', contentRu: 'х', contentShiftRu: 'Х',
  },
  {
    content: ']', code: 'BracketRight', className: 'key_light key_twin', contentShift: '}', contentRu: 'ъ', contentShiftRu: 'Ъ',
  },
  { content: 'DEL', code: 'Delete', className: 'key_dark key_wide' },
  { content: 'CapsLock', code: 'CapsLock', className: 'key_dark key_wide' },
  {
    content: 'a', code: 'KeyA', className: 'key_light', contentShift: 'A', contentRu: 'ф', contentShiftRu: 'Ф',
  },
  {
    content: 's', code: 'KeyS', className: 'key_light', contentShift: 'S', contentRu: 'ы', contentShiftRu: 'Ы',
  },
  {
    content: 'd', code: 'KeyD', className: 'key_light', contentShift: 'D', contentRu: 'в', contentShiftRu: 'В',
  },
  {
    content: 'f', code: 'KeyF', className: 'key_light', contentShift: 'F', contentRu: 'а', contentShiftRu: 'А',
  },
  {
    content: 'g', code: 'KeyG', className: 'key_light', contentShift: 'G', contentRu: 'п', contentShiftRu: 'П',
  },
  {
    content: 'h', code: 'KeyH', className: 'key_light', contentShift: 'H', contentRu: 'р', contentShiftRu: 'Р',
  },
  {
    content: 'j', code: 'KeyJ', className: 'key_light', contentShift: 'J', contentRu: 'о', contentShiftRu: 'О',
  },
  {
    content: 'k', code: 'KeyK', className: 'key_light', contentShift: 'K', contentRu: 'л', contentShiftRu: 'Л',
  },
  {
    content: 'l', code: 'KeyL', className: 'key_light', contentShift: 'L', contentRu: 'д', contentShiftRu: 'Д',
  },
  {
    content: ';', code: 'Semicolon', className: 'key_light key_twin', contentShift: ':', contentRu: 'ж', contentShiftRu: 'Ж',
  },
  {
    content: '\'', code: 'Quote', className: 'key_light key_twin', contentShift: '"', contentRu: 'э', contentShiftRu: 'Э',
  },
  { content: 'ENTER', code: 'Enter', className: 'key_dark key_wide' },
  {
    content: 'Shift', code: 'ShiftLeft', className: 'key_dark key_wide', state: false,
  },
  {
    content: '\\', code: 'IntlBackslash', className: 'key_light key_twin', contentShift: '|', contentRu: '\\', contentShiftRu: '/',
  },
  {
    content: 'z', code: 'KeyZ', className: 'key_light', contentShift: 'Z', contentRu: 'я', contentShiftRu: 'Я',
  },
  {
    content: 'x', code: 'KeyX', className: 'key_light', contentShift: 'X', contentRu: 'ч', contentShiftRu: 'Ч',
  },
  {
    content: 'c', code: 'KeyC', className: 'key_light', contentShift: 'C', contentRu: 'с', contentShiftRu: 'С',
  },
  {
    content: 'v', code: 'KeyV', className: 'key_light', contentShift: 'V', contentRu: 'м', contentShiftRu: 'М',
  },
  {
    content: 'b', code: 'KeyB', className: 'key_light', contentShift: 'B', contentRu: 'и', contentShiftRu: 'И',
  },
  {
    content: 'n', code: 'KeyN', className: 'key_light', contentShift: 'N', contentRu: 'т', contentShiftRu: 'Т',
  },
  {
    content: 'm', code: 'KeyM', className: 'key_light', contentShift: 'M', contentRu: 'ь', contentShiftRu: 'Ь',
  },
  {
    content: ',', code: 'Comma', className: 'key_light key_twin', contentShift: '<', contentRu: 'б', contentShiftRu: 'Б',
  },
  {
    content: '.', code: 'Period', className: 'key_light key_twin', contentShift: '>', contentRu: 'ю', contentShiftRu: 'Ю',
  },
  {
    content: '/', code: 'Slash', className: 'key_light key_twin', contentShift: '?', contentRu: '.', contentShiftRu: ',',
  },
  { content: '&uarr;', code: 'ArrowUp', className: 'key_dark' },
  {
    content: 'eng', code: 'LanguageSwitch', className: 'key_dark', lang: false, contentRu: 'рус',
  },
  { content: 'Ctrl', code: 'ControlLeft', className: 'key_dark' },
  { content: 'Win', code: 'MetaLeft', className: 'key_dark' },
  { content: 'Alt', code: 'AltLeft', className: 'key_dark' },
  { content: ' ', code: 'Space', className: 'key_light key_widest' },
  { content: 'Alt', code: 'AltRight', className: 'key_dark' },
  { content: 'Ctrl', code: 'ControlRight', className: 'key_dark' },
  { content: '&larr;', code: 'ArrowLeft', className: 'key_dark' },
  { content: '&darr;', code: 'ArrowDown', className: 'key_dark' },
  { content: '&rarr;', code: 'ArrowRight', className: 'key_dark' },
];

const textarea = document.querySelector('.main__textarea');
let flagCapsLock = false;

function addValueTextarea(elem, content) {
  const temp = elem;
  temp.value += content;
}

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

function unlightKey(code) {
  const element = getElementByCode(code);
  if (element) {
    element.classList.remove('_light');
  }
}

function unlightKeyEvent(event) {
  let curCode = event.code;
  if (curCode === 'ShiftRight') {
    curCode = 'ShiftLeft';
  }
  unlightKey(curCode);
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

function createKeyboard(language) {
  keyboardList.innerHTML = '';
  keysAll.forEach((keyObj) => {
    const temp = keyObj;
    const className = `key ${keyObj.className}`;
    if (language === 'eng') {
      const button = createElement('li', className, keyObj.content, keyboardList);
      temp.element = button;

      if (button.classList.contains('key_twin')) {
        createElement('span', 'key__addition', keyObj.contentShift, button);
      }
    } else {
      const button = createElement('li', className, keyObj.contentRu, keyboardList);
      temp.element = button;

      if (button.classList.contains('key_twin')) {
        createElement('span', 'key__addition', keyObj.contentShiftRu, button);
      }
    }
  });
}

function actionKey(objArg, source) {
  const obj = objArg;
  if (obj) {
    if (obj.code === 'LanguageSwitch') {
      obj.lang = !obj.lang;
      if (obj.lang) {
        createKeyboard('рус');
        keysAll.forEach((keyObj) => {
          keyObj.element.addEventListener('click', () => {
            actionKey(keyObj, 'mouse');
            textarea.focus();
          });
        });
      }
      if (!obj.lang) {
        createKeyboard('eng');
        keysAll.forEach((keyObj) => {
          keyObj.element.addEventListener('click', () => {
            actionKey(keyObj, 'mouse');
            textarea.focus();
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
    } else if (obj.code.startsWith('Key') && flagCapsLock) {
      addValueTextarea(textarea, obj.contentShift);
    } else if (obj.code === 'ShiftLeft') {
      if (source === 'mouse') {
        obj.state = !obj.state;
        if (obj.state) {
          lightKey(obj.code);
        } else {
          unlightKey(obj.code);
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
            unlightKey(shift.code);
          }
        }
        addValueTextarea(textarea, curContent);
      } else {
        let curContent = obj.contentRu;
        if (shift.state) {
          curContent = obj.contentShiftRu || obj.contentRu;
          if (source === 'mouse') {
            shift.state = false;
            unlightKey(shift.code);
          }
        }
        addValueTextarea(textarea, curContent);
      }
    }
  }
}

function pressKey(event) {
  let curCode = event.code;
  if (curCode === 'ShiftRight') {
    curCode = 'ShiftLeft';
  }
  const key = getKeyByCode(curCode);
  actionKey(key, 'keyboard');
}

function stopPrint(event) {
  event.preventDefault();
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

createKeyboard('eng');

keysAll.forEach((keyObj) => {
  keyObj.element.addEventListener('click', () => {
    actionKey(keyObj, 'mouse');
    textarea.focus();
  });
});

// ========================================================================================

document.addEventListener('keydown', lightKeyEvent);
document.addEventListener('keyup', unlightKeyEvent);
textarea.addEventListener('keydown', stopPrint);
document.addEventListener('keydown', pressKey);
document.addEventListener('keyup', unpressKey);
