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

export default keysAll;
