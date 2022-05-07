import '../css/style.css';
import '../scss/style.scss';

import { createElement } from './createElement';

const keyboardList = document.querySelector('.keyboard__list');

const keysAll = [
  {
    content: '`', code: 'Backquote', className: 'key_light key_twin', contentTwin: '~',
  },
  {
    content: '1', code: 'Digit1', className: 'key_light key_twin', contentTwin: '!',
  },
  {
    content: '2', code: 'Digit2', className: 'key_light key_twin', contentTwin: '@',
  },
  {
    content: '3', code: 'Digit3', className: 'key_light key_twin', contentTwin: '#',
  },
  {
    content: '4', code: 'Digit4', className: 'key_light key_twin', contentTwin: '$',
  },
  {
    content: '5', code: 'Digit5', className: 'key_light key_twin', contentTwin: '%',
  },
  {
    content: '6', code: 'Digit6', className: 'key_light key_twin', contentTwin: '^',
  },
  {
    content: '7', code: 'Digit7', className: 'key_light key_twin', contentTwin: '&',
  },
  {
    content: '8', code: 'Digit8', className: 'key_light key_twin', contentTwin: '*',
  },
  {
    content: '9', code: 'Digit9', className: 'key_light key_twin', contentTwin: '(',
  },
  {
    content: '0', code: 'Digit0', className: 'key_light key_twin', contentTwin: ')',
  },
  {
    content: '-', code: 'Minus', className: 'key_light key_twin', contentTwin: '_',
  },
  {
    content: '=', code: 'Equal', className: 'key_light key_twin', contentTwin: '+',
  },
  { content: 'Backspace', code: 'Backspace', className: 'key_dark key_wide' },
  { content: 'Tab', code: 'Tab', className: 'key_dark' },
  { content: 'q', code: 'KeyQ', className: 'key_light' },
  { content: 'w', code: 'KeyW', className: 'key_light' },
  { content: 'e', code: 'KeyE', className: 'key_light' },
  { content: 'r', code: 'KeyR', className: 'key_light' },
  { content: 't', code: 'KeyT', className: 'key_light' },
  { content: 'y', code: 'KeyY', className: 'key_light' },
  { content: 'u', code: 'KeyU', className: 'key_light' },
  { content: 'i', code: 'KeyI', className: 'key_light' },
  { content: 'o', code: 'KeyO', className: 'key_light' },
  { content: 'p', code: 'KeyP', className: 'key_light' },
  {
    content: '[', code: 'BracketLeft', className: 'key_light key_twin', contentTwin: '{',
  },
  {
    content: ']', code: 'BracketRight', className: 'key_light key_twin', contentTwin: '}',
  },
  {
    content: '\\', code: 'IntlBackslash', className: 'key_light key_twin', contentTwin: '|',
  },
  { content: 'DEL', code: 'Delete', className: 'key_dark' },
  { content: 'CapsLock', code: 'CapsLock', className: 'key_dark key_wide' },
  { content: 'a', code: 'KeyA', className: 'key_light' },
  { content: 's', code: 'KeyS', className: 'key_light' },
  { content: 'd', code: 'KeyD', className: 'key_light' },
  { content: 'f', code: 'KeyF', className: 'key_light' },
  { content: 'g', code: 'KeyG', className: 'key_light' },
  { content: 'h', code: 'KeyH', className: 'key_light' },
  { content: 'j', code: 'KeyJ', className: 'key_light' },
  { content: 'k', code: 'KeyK', className: 'key_light' },
  { content: 'l', code: 'KeyL', className: 'key_light' },
  {
    content: ';', code: 'Semicolon', className: 'key_light key_twin', contentTwin: ':',
  },
  {
    content: '\'', code: 'Quote', className: 'key_light key_twin', contentTwin: '"',
  },
  { content: 'ENTER', code: 'Enter', className: 'key_dark key_wide' },
  { content: 'Shift', code: 'ShiftLeft', className: 'key_dark key_wide' },
  {
    content: '\\', code: 'IntlBackslash', className: 'key_light key_twin', contentTwin: '|',
  },
  { content: 'z', code: 'KeyZ', className: 'key_light' },
  { content: 'x', code: 'KeyX', className: 'key_light' },
  { content: 'c', code: 'KeyC', className: 'key_light' },
  { content: 'v', code: 'KeyV', className: 'key_light' },
  { content: 'b', code: 'KeyB', className: 'key_light' },
  { content: 'n', code: 'KeyN', className: 'key_light' },
  { content: 'm', code: 'KeyM', className: 'key_light' },
  {
    content: ',', code: 'Comma', className: 'key_light key_twin', contentTwin: '<',
  },
  {
    content: '.', code: 'Period', className: 'key_light key_twin', contentTwin: '>',
  },
  {
    content: '/', code: 'Slash', className: 'key_light key_twin', contentTwin: '?',
  },
  { content: '&uarr;', code: 'ArrowUp', className: 'key_dark' },
  { content: 'Shift', code: 'ShiftRight', className: 'key_dark' },
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
    createElement('span', 'key__addition', keyObj.contentTwin, button);
  }
});

// ========================================================================================

// const keysAllElements = document.querySelectorAll('.key');
const textarea = document.querySelector('.main__textarea');

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
  return getKeyByCode(code).element;
}

function lightKey(event) {
  const element = getElemenByCode(event.code);
  if (element) {
    element.classList.add('_light');
  }
}

function addValueTextarea(elem, content) {
  const temp = elem;
  temp.value += content;
}

function unlightKey(event) {
  const element = getElemenByCode(event.code);
  if (element) {
    element.classList.remove('_light');
  }
}

function print(event) {
  const key = getKeyByCode(event.code);

  addValueTextarea(textarea, key.content);
}

document.addEventListener('keydown', lightKey);
document.addEventListener('keyup', unlightKey);
document.addEventListener('keydown', print);
