const roundness = function (cx, cy, r) {
	// for text path <path
	//    d="
	//    M cx cy
	//    m -r, 0
	//    a r,r 0 1,1 (r *2),0
	//    a r,r 0 1,1 -(r * 2),0
	//    "
	return `M ${cx},${cy} m -${r},0 a ${r},${r} 0 1,1 ${
		r * 2
	},0 a ${r},${r} 0 1,1 -${r * 2},0`;
};

const colorHex = function () {
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	var hex = "#";
	const letters = ["a", "b", "c", "d", "e", "f"];
	const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
	for (let i = 0; i < 6; i++) {
		if (getRandomInt(2) === 1) {
			hex += letters[getRandomInt(letters.length)];
		} else {
			hex += numbers[getRandomInt(numbers.length)];
		}
	}
	return hex;
};

const setDur = function (s) {
	return `${s}s`;
};

const cirlce = document.getElementById("circle1");
const fill = document.getElementById("secondary__logo__animate__fill");
const stroke = document.getElementById("secondary__logo__animate__stroke");
const acidGreenCX = document.getElementsByClassName(
	"green-acid-gradient-transform-cx"
);
const acidGreenCY = document.getElementsByClassName(
	"green-acid-gradient-transform-cy"
);
const acidGreenCR = document.getElementsByClassName(
	"green-acid-gradient-transform-cr"
);
let startEnd = colorHex();
let middle = colorHex();
const dur = setDur(3);
const acidGreenDur = setDur(6);

// cirlce.setAttribute("d", roundness(105, 105, 72));
// fill.setAttribute("values", `${startEnd};${middle};${startEnd}`);
// stroke.setAttribute("values", `${middle};${startEnd};${middle}`);
// fill.setAttribute("dur", dur);
// stroke.setAttribute("dur", dur);

for (let i = 0; i < acidGreenCX.length; i++) {
	acidGreenCX[i].setAttribute("values", "-100;100");
	acidGreenCX[i].setAttribute("dur", acidGreenDur);
	acidGreenCY[i].setAttribute("values", "690;950");
	acidGreenCY[i].setAttribute("dur", acidGreenDur);
	acidGreenCR[i].setAttribute("values", "90");
	acidGreenCR[i].setAttribute("dur", acidGreenDur);
}
