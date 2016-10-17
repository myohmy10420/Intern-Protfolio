var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
var HERO_MOVEMENT = 3;

var lastLoopRun = 0;

var hero = new Object();
hero.element = 'hero';
hero.x = 250;
hero.y = 460;
hero.h = 20;
hero.w = 20;

var controller = new Object();

function toggleKey(keyCode, isPressed) {
	if (keyCode == LEFT_KEY) {
		controller.left = isPressed;
	}
	if (keyCode == UP_KEY) {
		controller.up = isPressed;
	}
	if (keyCode == RIGHT_KEY) {
		controller.right = isPressed;
	}
	if (keyCode == DOWN_KEY) {
		controller.down = isPressed;
	}
}

function ensureBounds (sprite) {
	if (sprite.x < 20) {
		sprite.x = 20;
	}
	if (sprite.y < 20) {
		sprite.y = 20;
	}
	if (sprite.x + sprite.w > 480) {
		sprite.x = 480 - sprite.w;
	}
	if (sprite.y +sprite.h > 480) {
		sprite.y = 480 - sprite.h;
	}
}

function setPosition(sprite) {
	var e = document.getElementById(sprite.element);
	e.style.left = sprite.x + 'px';
	e.style.top = sprite.y + 'px';
}

function handleControls () {
	if (controller.up){
		hero.y -= HERO_MOVEMENT;
	}
	if (controller.down) {
		hero.y += HERO_MOVEMENT;
	}
	if (controller.left) {
		hero.x -= HERO_MOVEMENT;
	}
	if (controller.right) {
		hero.x += HERO_MOVEMENT;
	}
	ensureBounds (hero);
}

function showSprites () {
	setPosition(hero);
}

function loop () {
	if (new Date().getTime() - lastLoopRun > 40) {
		handleControls();
  		showSprites();

		lastLoopRun = new Date().getTime();
	}
	setTimeout('loop();', 2);
}

document.onkeydown = function (evt) {
	toggleKey(evt.keyCode, true);
};

document.onkeyup = function (evt) {
	toggleKey(evt.keyCode, false);
};

loop();
