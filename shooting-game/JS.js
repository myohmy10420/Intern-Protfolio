var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;

var hero = new Object();
hero.element = 'hero';
hero.x = 250;
hero.y = 460;

var controller = new Object();

function toggleKey(keyCode, isPressed) {
	if (keyCode == LEFT_KEY) {
		controller.left = isPressed;
	}
	if (keyCode == UP_KEY) {
		controller.left = isPressed;
	}
	if (keyCode == RIGHT_KEY) {
		controller.left = isPressed;
	}
	if (keyCode == DOWN_KEY) {
		controller.left = isPressed;
	}
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
