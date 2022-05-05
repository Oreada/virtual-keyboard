function createImage(url, container) {
	const image = document.createElement('img');
	image.className = 'image';
	image.src = url;
	image.alt = 'picture';

	container.appendChild(image);
}

export { createImage };