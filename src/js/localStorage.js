function setLocalStorage(name, value) {
  localStorage.setItem(name, value);
}

function getLocalStorage(name, defaultValue = '') {
  return localStorage.getItem(name) || defaultValue;
}

export { setLocalStorage, getLocalStorage };
