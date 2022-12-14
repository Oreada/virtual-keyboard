function createImage(url, container) {
  const image = document.createElement('img');
  image.className = 'image';
  image.src = url;
  image.alt = 'picture';
  container.appendChild(image);
}

function createElement(type, className, content, container) {
  const element = document.createElement(type);
  element.className = className;
  element.insertAdjacentHTML('beforeend', content);

  container.appendChild(element);
  return element;
}

export { createImage, createElement };
