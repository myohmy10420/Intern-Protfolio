var hero = new Object();
hero.element = 'hero';
hero.x = 250;
hero.y = 460;

function toggleKey(keyCode, isPressed) {
	console.log(keyCode);
}

function setPosition(sprite) {
	var e = document.getElementById(sprite.element);
	e.style.left = sprite.x + 'px';
	e.style.top = sprite.y + 'px';
}

document.onkeydown = function (evt) {
	toggleKey(evt.keyCode, true);
};

document.onkeyup = function (evt) {
	toggleKey(evt.keyCode, true);
};

setPosition(hero);
