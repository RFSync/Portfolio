// confetti
function randomInRange(min, max) {
	return Math.random() * (max - min) + min;
}

const popConfetti = function () {
	console.log("popConfetti");
	confetti({
		angle: 270,
		spread: randomInRange(150, 200),
		particleCount: randomInRange(80, 150),
		origin: { y: 0.1 },
		colors: ["a3a3a3", "fcba03", "dea302"],
	});
};

popConfetti();
