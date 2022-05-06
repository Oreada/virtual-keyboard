function createImage(url, container) {
	const image = document.createElement('img');
	image.className = 'image';
	image.src = url;
	image.alt = 'picture'
	container.appendChild(image);
}

function createElement(type, className, container) {
	const element = document.createElement(type);
	element.className = className;

	container.appendChild(element);
}

export { createImage, createElement };
