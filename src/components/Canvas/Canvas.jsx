import { useEffect, useRef, useState } from "react";
import "./Canvas.scss";


export default function Canvas() {
	const backgroundRef = useRef(null);
	const topRef = useRef(null);

	const [color, getColor] = useState("")

	let colorArray = ["#ACDDDE", "#CAF1DE", "#E1F8DC", "#FEF8DD", "#FFE7C7", "#F7D8BA"];

	function randomColor() {
		return colorArray[Math.floor(Math.random() * colorArray.length)];
	}

	useEffect(() => {
		let background = backgroundRef.current;
		let top = topRef.current;
		let bgcontext = background.getContext("2d");
		let topcontext = top.getContext("2d");
		let alpha = 0.5;

		top.style.opacity = alpha;
		background.globalAlpha = 1;

		bgcontext.drawImage(top,0,0);
		


		background.width = window.innerWidth;
		background.height = window.innerHeight;

		// adjusting the scaling of the background
		// const getPixelRatio = (bgcontext) => {
		// 	let backingStore =
		// 		bgcontext.backingStorePixelRatio ||
		// 		bgcontext.webkitBackingStorePixelRatio ||
		// 		bgcontext.mozBackingStorePixelRatio ||
		// 		bgcontext.msBackingStorePixelRatio ||
		// 		bgcontext.oBackingStorePixelRatio ||
		// 		bgcontext.backingStorePixelRatio ||
		// 		1;

		// 	return (window.devicePixelRatio || 1) / backingStore;
		// };
		// let ratio = getPixelRatio(bgcontext);
		// let width = getComputedStyle(background).getPropertyValue("width").slice(0, -2);
		// let height = getComputedStyle(background)
		// 	.getPropertyValue("height")
		// 	.slice(0, -2);

		// background.width = width * ratio;
		// background.height = height * ratio;
		// background.style.width = `${width}px`;
		// background.style.height = `${height}px`;


		//declar variable

		//array that contains circles
		let circleArray = []
		//frames per second
		let FPS = 60;
		//number of circles
		let circleInitialNum = 15;
		let mouse = {
			x: undefined,
			y: undefined,
		}

		//push each circle to array
		for (let i = 0; i < circleInitialNum; i++) {
			circleArray.push({
				radius: Math.random() * 6 + 4,
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight,
				dx: Math.random() - 0.4,
				dy: Math.random() - 0.4,
			})
		}

		//draw
		function draw() {

			//draw circle
			for (let i = 0; i < circleArray.length; i++) {

				let circle = circleArray[i]


				bgcontext.beginPath();
				bgcontext.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
				// bgcontext.stroke();
				bgcontext.fillStyle = "rgb(192,192,192)";
				bgcontext.fill();
			};



			//draw line
			bgcontext.beginPath();
			for (let i = 0; i < circleArray.length; i++) {
				let circleI = circleArray[i];
				// bgcontext.moveTo(circleI.x, circleI.y);

				// if (distance(mouse, circleI) < 300) {
				// 	bgcontext.lineTo(mouse.x, mouse.y);
				// }

				for (let j = 0; j < circleArray.length; j++) {
					let circleII = circleArray[j];
					if (distance(circleI, circleII) < 350) {
						// bgcontext.globalAlpha = (1 / 150 * distance(circleI, circleII).toFixed(1));

						bgcontext.lineTo(circleII.x, circleII.y);

						// bgcontext.globalAlpha = 0.5 - lineOpacity(circleI,circleII);
					}
				}
			}


			bgcontext.lineWidth = 2;
			bgcontext.strokeStyle = "rgb(192,192,192,0.5)";
			bgcontext.stroke();
		}


		//change opacity according to distance between two circles
		function lineOpacity(circle1, circle2) {
			let d = distance(circle1, circle2);
			let screen = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2))
			let ratio = d / screen;
			return ratio;
		}



		function distance(point1, point2) {
			let xs = 0;
			let ys = 0;

			xs = point2.x - point1.x;
			xs = xs * xs;

			ys = point2.y - point1.y;
			ys = ys * ys;

			return Math.sqrt(xs + ys);
		};


		//update circle locations
		function update() {
			for (let i = 0; i < circleArray.length; i++) {
				let circle = circleArray[i];

				circle.x += circle.dx;
				circle.y += circle.dy;

				let boundary = 50;

				if (circle.x < -boundary || circle.x > window.innerWidth + boundary) circle.dx = -circle.dx;
				if (circle.y < -boundary || circle.y > window.innerHeight + boundary) circle.dy = -circle.dy;
			}

		};

		//get mouse position on background
		function getMousePos(background, event) {
			let rect = background.getBoundingClientRect();

			return {
				x: event.clientX - rect.left,
				y: event.clientY - rect.top,
			};

		}


		// mouse
		window.addEventListener("mousemove", function (event) {
			mouse.x = event.clientX;
			mouse.y = event.clientY;
		})


		//click to add circle
		window.addEventListener("click", function (event) {
			if (circleArray.length < 25) {
				circleArray.push({
					radius: Math.random() * 6 + 4,
					x: event.clientX,
					y: event.clientY,
					dx: Math.random() - 0.5,
					dy: Math.random() - 0.5,
				})
			}
		})

		//resize window
		window.addEventListener("resize", function () {
			background.width = window.innerWidth;
			background.height = window.innerHeight;
		})

		let requestId;

		const animate = () => {
			bgcontext.clearRect(0, 0, background.width, background.height);

			draw();
			update();

			requestAnimationFrame(animate);

		};

		animate();


		return () => {
			cancelAnimationFrame(requestId);
		};

	});

	return (
		<div className="canvas" id="canvas">
			<canvas id="background" ref={backgroundRef}></canvas>
			<canvas id="top" ref={topRef}></canvas>
		</div>
	);
}
