import '../scss/style.scss';

import { createElement } from './createElement';

import { setLocalStorage, getLocalStorage } from './localStorage';

const keyboardList = document.querySelector('.keyboard__list');

const keysAll = [
  {
    content: '`', code: 'Backquote', className: 'key_light key_twin', contentShift: '~', classNameRu: 'key_light', contentRu: 'ё', contentShiftRu: 'Ё',
  },
  {
    content: '1', code: 'Digit1', className: 'key_light key_twin', contentShift: '!', classNameRu: 'key_light key_twin', contentRu: '1', contentShiftRu: '!',
  },
  {
    content: '2', code: 'Digit2', className: 'key_light key_twin', contentShift: '@', classNameRu: 'key_light key_twin', contentRu: '2', contentShiftRu: '"',
  },
  {
    content: '3', code: 'Digit3', className: 'key_light key_twin', contentShift: '#', classNameRu: 'key_light key_twin', contentRu: '3', contentShiftRu: '№',
  },
  {
    content: '4', code: 'Digit4', className: 'key_light key_twin', contentShift: '$', classNameRu: 'key_light key_twin', contentRu: '4', contentShiftRu: ';',
  },
  {
    content: '5', code: 'Digit5', className: 'key_light key_twin', contentShift: '%', classNameRu: 'key_light key_twin', contentRu: '5', contentShiftRu: '%',
  },
  {
    content: '6', code: 'Digit6', className: 'key_light key_twin', contentShift: '^', classNameRu: 'key_light key_twin', contentRu: '6', contentShiftRu: ':',
  },
  {
    content: '7', code: 'Digit7', className: 'key_light key_twin', contentShift: '&', classNameRu: 'key_light key_twin', contentRu: '7', contentShiftRu: '?',
  },
  {
    content: '8', code: 'Digit8', className: 'key_light key_twin', contentShift: '*', classNameRu: 'key_light key_twin', contentRu: '8', contentShiftRu: '*',
  },
  {
    content: '9', code: 'Digit9', className: 'key_light key_twin', contentShift: '(', classNameRu: 'key_light key_twin', contentRu: '9', contentShiftRu: '(',
  },
  {
    content: '0', code: 'Digit0', className: 'key_light key_twin', contentShift: ')', classNameRu: 'key_light key_twin', contentRu: '0', contentShiftRu: ')',
  },
  {
    content: '-', code: 'Minus', className: 'key_light key_twin', contentShift: '_', classNameRu: 'key_light key_twin', contentRu: '-', contentShiftRu: '_',
  },
  {
    content: '=', code: 'Equal', className: 'key_light key_twin', contentShift: '+', classNameRu: 'key_light key_twin', contentRu: '=', contentShiftRu: '+',
  },
  {
    content: 'Backspace', code: 'Backspace', className: 'key_dark key_wide', classNameRu: 'key_dark key_wide',
  },
  {
    content: 'Tab', code: 'Tab', className: 'key_dark', classNameRu: 'key_dark',
  },
  {
    content: 'q', code: 'KeyQ', className: 'key_light', contentShift: 'Q', classNameRu: 'key_light', contentRu: 'й', contentShiftRu: 'Й',
  },
  {
    content: 'w', code: 'KeyW', className: 'key_light', contentShift: 'W', classNameRu: 'key_light', contentRu: 'ц', contentShiftRu: 'Ц',
  },
  {
    content: 'e', code: 'KeyE', className: 'key_light', contentShift: 'E', classNameRu: 'key_light', contentRu: 'у', contentShiftRu: 'У',
  },
  {
    content: 'r', code: 'KeyR', className: 'key_light', contentShift: 'R', classNameRu: 'key_light', contentRu: 'к', contentShiftRu: 'К',
  },
  {
    content: 't', code: 'KeyT', className: 'key_light', contentShift: 'T', classNameRu: 'key_light', contentRu: 'е', contentShiftRu: 'Е',
  },
  {
    content: 'y', code: 'KeyY', className: 'key_light', contentShift: 'Y', classNameRu: 'key_light', contentRu: 'н', contentShiftRu: 'Н',
  },
  {
    content: 'u', code: 'KeyU', className: 'key_light', contentShift: 'U', classNameRu: 'key_light', contentRu: 'г', contentShiftRu: 'Г',
  },
  {
    content: 'i', code: 'KeyI', className: 'key_light', contentShift: 'I', classNameRu: 'key_light', contentRu: 'ш', contentShiftRu: 'Ш',
  },
  {
    content: 'o', code: 'KeyO', className: 'key_light', contentShift: 'O', classNameRu: 'key_light', contentRu: 'щ', contentShiftRu: 'Щ',
  },
  {
    content: 'p', code: 'KeyP', className: 'key_light', contentShift: 'P', classNameRu: 'key_light', contentRu: 'з', contentShiftRu: 'З',
  },
  {
    content: '[', code: 'BracketLeft', className: 'key_light key_twin', contentShift: '{', classNameRu: 'key_light', contentRu: 'х', contentShiftRu: 'Х',
  },
  {
    content: ']', code: 'BracketRight', className: 'key_light key_twin', contentShift: '}', classNameRu: 'key_light', contentRu: 'ъ', contentShiftRu: 'Ъ',
  },
  {
    content: 'DEL', code: 'Delete', className: 'key_dark key_wide', classNameRu: 'key_dark key_wide',
  },
  {
    content: 'CapsLock', code: 'CapsLock', className: 'key_dark key_wide', classNameRu: 'key_dark key_wide',
  },
  {
    content: 'a', code: 'KeyA', className: 'key_light', contentShift: 'A', classNameRu: 'key_light', contentRu: 'ф', contentShiftRu: 'Ф',
  },
  {
    content: 's', code: 'KeyS', className: 'key_light', contentShift: 'S', classNameRu: 'key_light', contentRu: 'ы', contentShiftRu: 'Ы',
  },
  {
    content: 'd', code: 'KeyD', className: 'key_light', contentShift: 'D', classNameRu: 'key_light', contentRu: 'в', contentShiftRu: 'В',
  },
  {
    content: 'f', code: 'KeyF', className: 'key_light', contentShift: 'F', classNameRu: 'key_light', contentRu: 'а', contentShiftRu: 'А',
  },
  {
    content: 'g', code: 'KeyG', className: 'key_light', contentShift: 'G', classNameRu: 'key_light', contentRu: 'п', contentShiftRu: 'П',
  },
  {
    content: 'h', code: 'KeyH', className: 'key_light', contentShift: 'H', classNameRu: 'key_light', contentRu: 'р', contentShiftRu: 'Р',
  },
  {
    content: 'j', code: 'KeyJ', className: 'key_light', contentShift: 'J', classNameRu: 'key_light', contentRu: 'о', contentShiftRu: 'О',
  },
  {
    content: 'k', code: 'KeyK', className: 'key_light', contentShift: 'K', classNameRu: 'key_light', contentRu: 'л', contentShiftRu: 'Л',
  },
  {
    content: 'l', code: 'KeyL', className: 'key_light', contentShift: 'L', classNameRu: 'key_light', contentRu: 'д', contentShiftRu: 'Д',
  },
  {
    content: ';', code: 'Semicolon', className: 'key_light key_twin', contentShift: ':', classNameRu: 'key_light', contentRu: 'ж', contentShiftRu: 'Ж',
  },
  {
    content: '\'', code: 'Quote', className: 'key_light key_twin', contentShift: '"', classNameRu: 'key_light', contentRu: 'э', contentShiftRu: 'Э',
  },
  {
    content: 'ENTER', code: 'Enter', className: 'key_dark key_wide', classNameRu: 'key_dark key_wide',
  },
  {
    content: 'Shift', code: 'ShiftLeft', className: 'key_dark key_wide', state: false, classNameRu: 'key_dark key_wide',
  },
  {
    content: '\\', code: 'IntlBackslash', className: 'key_light key_twin', contentShift: '|', classNameRu: 'key_light key_twin', contentRu: '\\', contentShiftRu: '/',
  },
  {
    content: 'z', code: 'KeyZ', className: 'key_light', contentShift: 'Z', classNameRu: 'key_light', contentRu: 'я', contentShiftRu: 'Я',
  },
  {
    content: 'x', code: 'KeyX', className: 'key_light', contentShift: 'X', classNameRu: 'key_light', contentRu: 'ч', contentShiftRu: 'Ч',
  },
  {
    content: 'c', code: 'KeyC', className: 'key_light', contentShift: 'C', classNameRu: 'key_light', contentRu: 'с', contentShiftRu: 'С',
  },
  {
    content: 'v', code: 'KeyV', className: 'key_light', contentShift: 'V', classNameRu: 'key_light', contentRu: 'м', contentShiftRu: 'М',
  },
  {
    content: 'b', code: 'KeyB', className: 'key_light', contentShift: 'B', classNameRu: 'key_light', contentRu: 'и', contentShiftRu: 'И',
  },
  {
    content: 'n', code: 'KeyN', className: 'key_light', contentShift: 'N', classNameRu: 'key_light', contentRu: 'т', contentShiftRu: 'Т',
  },
  {
    content: 'm', code: 'KeyM', className: 'key_light', contentShift: 'M', classNameRu: 'key_light', contentRu: 'ь', contentShiftRu: 'Ь',
  },
  {
    content: ',', code: 'Comma', className: 'key_light key_twin', contentShift: '<', classNameRu: 'key_light', contentRu: 'б', contentShiftRu: 'Б',
  },
  {
    content: '.', code: 'Period', className: 'key_light key_twin', contentShift: '>', classNameRu: 'key_light', contentRu: 'ю', contentShiftRu: 'Ю',
  },
  {
    content: '/', code: 'Slash', className: 'key_light key_twin', contentShift: '?', classNameRu: 'key_light key_twin', contentRu: '.', contentShiftRu: ',',
  },
  {
    content: '↑', code: 'ArrowUp', className: 'key_dark', classNameRu: 'key_dark', contentRu: '↑',
  },
  {
    content: 'eng', code: 'LanguageSwitch', className: 'key_dark', lang: false, classNameRu: 'key_dark', contentRu: 'рус',
  },
  {
    content: 'Ctrl', code: 'ControlLeft', className: 'key_dark', classNameRu: 'key_dark',
  },
  {
    content: 'Win', code: 'MetaLeft', className: 'key_dark', classNameRu: 'key_dark',
  },
  {
    content: 'Alt', code: 'AltLeft', className: 'key_dark', classNameRu: 'key_dark',
  },
  {
    content: ' ', code: 'Space', className: 'key_light key_widest', classNameRu: 'key_light key_widest', contentRu: ' ',
  },
  {
    content: 'Alt', code: 'AltRight', className: 'key_dark', classNameRu: 'key_dark',
  },
  {
    content: 'Ctrl', code: 'ControlRight', className: 'key_dark', classNameRu: 'key_dark',
  },
  {
    content: '←', code: 'ArrowLeft', className: 'key_dark', classNameRu: 'key_dark', contentRu: '←',
  },
  {
    content: '↓', code: 'ArrowDown', className: 'key_dark', classNameRu: 'key_dark', contentRu: '↓',
  },
  {
    content: '→', code: 'ArrowRight', className: 'key_dark', classNameRu: 'key_dark', contentRu: '→',
  },
];

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
    setTimeout(() => element.classList.remove('_light'), 150);
  }
}

function unlightKeyEvent(event) {
  let curCode = event.code;
  if (curCode === 'ShiftRight') {
    curCode = 'ShiftLeft';
  }
  unlightKey(curCode);
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
});

// ========================================================================================

document.addEventListener('keydown', lightKeyEvent);
document.addEventListener('keyup', unlightKeyEvent);
textarea.addEventListener('keydown', stopPrint);
document.addEventListener('keydown', pressKey);
document.addEventListener('keyup', unpressKey);

// ========================================================================================
