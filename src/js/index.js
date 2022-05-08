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

function addValueTextarea(elem, content) {
  const temp = elem;
  temp.value += content;
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

function getElemenByCode(code) {
  return getKeyByCode(code)?.element;
}

function lightKey(event) {
  const element = getElemenByCode(event.code);
  if (element) {
    element.classList.add('_light');
  }
}

function unlightKey(event) {
  const element = getElemenByCode(event.code);
  if (element) {
    element.classList.remove('_light');
  }
}

let flagCapsLock = false;

function print(event) {
  const key = getKeyByCode(event.code);

  if (key) {
    if (event.code === 'Tab') {
      addValueTextarea(textarea, '    ');
    } else if (event.code === 'CapsLock') {
      flagCapsLock = !flagCapsLock;
      if (flagCapsLock) {
        getElemenByCode(event.code).classList.add('_light_caps');
      } else {
        getElemenByCode(event.code).classList.remove('_light_caps');
      }
    } else if (event.code === 'CapsLock'
      || event.code === 'ControlLeft'
      || event.code === 'MetaLeft'
      || event.code === 'AltLeft'
      || event.code === 'AltRight'
      || event.code === 'ControlRight') {
      addValueTextarea(textarea, '');
    } else if (event.shiftKey) {
      if (event.code === 'Space') {
        addValueTextarea(textarea, key.content);
      } else {
        addValueTextarea(textarea, key.contentShift || '');
      }
    } else if (event.code.startsWith('Key') && flagCapsLock) {
      addValueTextarea(textarea, key.contentShift);
    } else {
      addValueTextarea(textarea, key.content);
    }
  }

  console.log(textarea.cols, textarea.rows);
}

function stopPrint(event) {
  event.preventDefault();
}

document.addEventListener('keydown', lightKey);
document.addEventListener('keyup', unlightKey);
textarea.addEventListener('keydown', stopPrint);
document.addEventListener('keydown', print);
