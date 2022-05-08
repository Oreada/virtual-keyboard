import '../css/style.css';
import '../scss/style.scss';

import { createElement } from './createElement';

const keyboardList = document.querySelector('.keyboard__list');

const keysAll = [
  {
    content: '`', code: 'Backquote', className: 'key_light key_twin', contentShift: '~',
  },
  {
    content: '1', code: 'Digit1', className: 'key_light key_twin', contentShift: '!',
  },
  {
    content: '2', code: 'Digit2', className: 'key_light key_twin', contentShift: '@',
  },
  {
    content: '3', code: 'Digit3', className: 'key_light key_twin', contentShift: '#',
  },
  {
    content: '4', code: 'Digit4', className: 'key_light key_twin', contentShift: '$',
  },
  {
    content: '5', code: 'Digit5', className: 'key_light key_twin', contentShift: '%',
  },
  {
    content: '6', code: 'Digit6', className: 'key_light key_twin', contentShift: '^',
  },
  {
    content: '7', code: 'Digit7', className: 'key_light key_twin', contentShift: '&',
  },
  {
    content: '8', code: 'Digit8', className: 'key_light key_twin', contentShift: '*',
  },
  {
    content: '9', code: 'Digit9', className: 'key_light key_twin', contentShift: '(',
  },
  {
    content: '0', code: 'Digit0', className: 'key_light key_twin', contentShift: ')',
  },
  {
    content: '-', code: 'Minus', className: 'key_light key_twin', contentShift: '_',
  },
  {
    content: '=', code: 'Equal', className: 'key_light key_twin', contentShift: '+',
  },
  { content: 'Backspace', code: 'Backspace', className: 'key_dark key_wide' },
  { content: 'Tab', code: 'Tab', className: 'key_dark' },
  {
    content: 'q', code: 'KeyQ', className: 'key_light', contentShift: 'Q',
  },
  {
    content: 'w', code: 'KeyW', className: 'key_light', contentShift: 'W',
  },
  {
    content: 'e', code: 'KeyE', className: 'key_light', contentShift: 'E',
  },
  {
    content: 'r', code: 'KeyR', className: 'key_light', contentShift: 'R',
  },
  {
    content: 't', code: 'KeyT', className: 'key_light', contentShift: 'T',
  },
  {
    content: 'y', code: 'KeyY', className: 'key_light', contentShift: 'Y',
  },
  {
    content: 'u', code: 'KeyU', className: 'key_light', contentShift: 'U',
  },
  {
    content: 'i', code: 'KeyI', className: 'key_light', contentShift: 'I',
  },
  {
    content: 'o', code: 'KeyO', className: 'key_light', contentShift: 'O',
  },
  {
    content: 'p', code: 'KeyP', className: 'key_light', contentShift: 'P',
  },
  {
    content: '[', code: 'BracketLeft', className: 'key_light key_twin', contentShift: '{',
  },
  {
    content: ']', code: 'BracketRight', className: 'key_light key_twin', contentShift: '}',
  },
  { content: 'DEL', code: 'Delete', className: 'key_dark key_wide' },
  { content: 'CapsLock', code: 'CapsLock', className: 'key_dark key_wide' },
  {
    content: 'a', code: 'KeyA', className: 'key_light', contentShift: 'A',
  },
  {
    content: 's', code: 'KeyS', className: 'key_light', contentShift: 'S',
  },
  {
    content: 'd', code: 'KeyD', className: 'key_light', contentShift: 'D',
  },
  {
    content: 'f', code: 'KeyF', className: 'key_light', contentShift: 'F',
  },
  {
    content: 'g', code: 'KeyG', className: 'key_light', contentShift: 'G',
  },
  {
    content: 'h', code: 'KeyH', className: 'key_light', contentShift: 'H',
  },
  {
    content: 'j', code: 'KeyJ', className: 'key_light', contentShift: 'J',
  },
  {
    content: 'k', code: 'KeyK', className: 'key_light', contentShift: 'K',
  },
  {
    content: 'l', code: 'KeyL', className: 'key_light', contentShift: 'L',
  },
  {
    content: ';', code: 'Semicolon', className: 'key_light key_twin', contentShift: ':',
  },
  {
    content: '\'', code: 'Quote', className: 'key_light key_twin', contentShift: '"',
  },
  { content: 'ENTER', code: 'Enter', className: 'key_dark key_wide' },
  { content: 'Shift', code: 'ShiftLeft', className: 'key_dark key_wide' },
  {
    content: '\\', code: 'IntlBackslash', className: 'key_light key_twin', contentShift: '|',
  },
  {
    content: 'z', code: 'KeyZ', className: 'key_light', contentShift: 'Z',
  },
  {
    content: 'x', code: 'KeyX', className: 'key_light', contentShift: 'X',
  },
  {
    content: 'c', code: 'KeyC', className: 'key_light', contentShift: 'C',
  },
  {
    content: 'v', code: 'KeyV', className: 'key_light', contentShift: 'V',
  },
  {
    content: 'b', code: 'KeyB', className: 'key_light', contentShift: 'B',
  },
  {
    content: 'n', code: 'KeyN', className: 'key_light', contentShift: 'N',
  },
  {
    content: 'm', code: 'KeyM', className: 'key_light', contentShift: 'M',
  },
  {
    content: ',', code: 'Comma', className: 'key_light key_twin', contentShift: '<',
  },
  {
    content: '.', code: 'Period', className: 'key_light key_twin', contentShift: '>',
  },
  {
    content: '/', code: 'Slash', className: 'key_light key_twin', contentShift: '?',
  },
  { content: '&uarr;', code: 'ArrowUp', className: 'key_dark' },
  { content: 'en/ru', code: 'LanguageSwitch', className: 'key_dark' },
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

keysAll.forEach((keyObj) => {
  const temp = keyObj;
  const className = `key ${keyObj.className}`;
  const button = createElement('li', className, keyObj.content, keyboardList);
  temp.element = button;

  if (button.classList.contains('key_twin')) {
    createElement('span', 'key__addition', keyObj.contentShift, button);
  }
});

// ========================================================================================

const textarea = document.querySelector('.main__textarea');
// const keysAllElements = document.querySelectorAll('.key');

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

function lightKey(event) {
  const element = getElementByCode(event.code);
  if (element) {
    element.classList.add('_light');
  }
}

function unlightKey(event) {
  const element = getElementByCode(event.code);
  if (element) {
    element.classList.remove('_light');
  }
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

let flagCapsLock = false;

function actionKey(event, obj) {
  console.log(obj);
  // addValueTextarea(textarea, obj.content);
  if (obj) {
    if (obj.code === 'Backspace' || obj.code === 'Delete') {
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
    } else if (event.shiftKey) {
      if (obj.code === 'Space') {
        addValueTextarea(textarea, obj.content);
      } else {
        addValueTextarea(textarea, obj.contentShift || '');
      }
    } else if (obj.code.startsWith('Key') && flagCapsLock) {
      addValueTextarea(textarea, obj.contentShift);
    } else {
      addValueTextarea(textarea, obj.content);
    }
  }
}

function pressKey(event) {
  const key = getKeyByCode(event.code);
  actionKey(event, key);

  // if (key) {
  //   if (event.code === 'Backspace' || event.code === 'Delete') {
  //     removeContentTextarea(event.code);
  //   } else if (event.code === 'Tab') {
  //     addValueTextarea(textarea, '\t');
  //   } else if (event.code === 'Enter') {
  //     addValueTextarea(textarea, '\n');
  //   } else if (event.code === 'CapsLock') {
  //     flagCapsLock = !flagCapsLock;
  //     if (flagCapsLock) {
  //       getElementByCode(event.code).classList.add('_light_capslock');
  //     } else {
  //       getElementByCode(event.code).classList.remove('_light_capslock');
  //     }
  //   } else if (event.code === 'CapsLock'
  //     || event.code === 'ControlLeft'
  //     || event.code === 'MetaLeft'
  //     || event.code === 'AltLeft'
  //     || event.code === 'AltRight'
  //     || event.code === 'ControlRight') {
  //     addValueTextarea(textarea, '');
  //   } else if (event.shiftKey) {
  //     if (event.code === 'Space') {
  //       addValueTextarea(textarea, key.content);
  //     } else {
  //       addValueTextarea(textarea, key.contentShift || '');
  //     }
  //   } else if (event.code.startsWith('Key') && flagCapsLock) {
  //     addValueTextarea(textarea, key.contentShift);
  //   } else {
  //     addValueTextarea(textarea, key.content);
  //   }
  // }
}

function stopPrint(event) {
  event.preventDefault();
}

document.addEventListener('keydown', lightKey);
document.addEventListener('keyup', unlightKey);
textarea.addEventListener('keydown', stopPrint);
document.addEventListener('keydown', pressKey);
keysAll.forEach((keyObj) => {
  keyObj.element.addEventListener('click', (event) => {
    actionKey(event, keyObj);
    textarea.focus();
  });
});
