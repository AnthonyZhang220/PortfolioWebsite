import { useEffect, useRef } from "react";
import "./Canvas.scss";


export default function Canvas() {
	const canvasRef = useRef(null);

	useEffect(() => {
		let canvas = canvasRef.current;
		let context = canvas.getContext("2d");

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		// adjusting the scaling of the canvas
		// const getPixelRatio = (context) => {
		// 	let backingStore =
		// 		context.backingStorePixelRatio ||
		// 		context.webkitBackingStorePixelRatio ||
		// 		context.mozBackingStorePixelRatio ||
		// 		context.msBackingStorePixelRatio ||
		// 		context.oBackingStorePixelRatio ||
		// 		context.backingStorePixelRatio ||
		// 		1;

		// 	return (window.devicePixelRatio || 1) / backingStore;
		// };
		// let ratio = getPixelRatio(context);
		// let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
		// let height = getComputedStyle(canvas)
		// 	.getPropertyValue("height")
		// 	.slice(0, -2);

		// canvas.width = width * ratio;
		// canvas.height = height * ratio;
		// canvas.style.width = `${width}px`;
		// canvas.style.height = `${height}px`;


		//declar variable

		//array that contains circles
		let circleArray = []
		//frames per second
		let FPS = 60;
		//number of circles
		let circleInitialNum = 30;
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
				dx: Math.random() - 0.5,
				dy: Math.random() - 0.5,
			})
		}

		//draw
		function draw() {
			// context.globalCompositeOperation = "lighter";

			//draw circle
			for (let i = 0; i < circleArray.length; i++) {

				let circle = circleArray[i]

				let color = "lightgrey";

				context.fillStyle = color;
				context.beginPath();
				context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
				context.fill();
				context.fillStyle = color;
				context.stroke();
			};

			//draw line
			context.beginPath();
			for (let i = 0; i < circleArray.length; i++) {
				let circleI = circleArray[i];
				context.moveTo(circleI.x, circleI.y);
				if (distance(mouse, circleI) < 300) {
					context.lineTo(mouse.x, mouse.y);
				}

				for (let j = 0; j < circleArray.length; j++) {
					let circleII = circleArray[j];
					if (distance(circleI, circleII) < 300) {
						//context.globalAlpha = (1 / 150 * distance(circleI, circleII).toFixed(1));
						context.lineTo(circleII.x, circleII.y);
					}
				}
			}
			context.lineWidth = 1;
			const gradientColor = function(){
				
			}
			context.strokeStyle = gradientColor;
			context.stroke();
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

				if (circle.x < 0 || circle.x > window.innerWidth) circle.dx = -circle.dx;
				if (circle.y < 0 || circle.y > window.innerHeight) circle.dy = -circle.dy;
			}

		};

		//get mouse position on canvas
		function getMousePos(canvas, event) {
			let rect = canvas.getBoundingClientRect();

			return {
				x: event.clientX - rect.left,
				y: event.clientY - rect.top,
			};

		}

		// canvas.addEventListener("mousemove", function (event) {
		// 	let mousePos = getMousePos(canvas, event);

		// 	mouse.x = mousePos.x;
		// 	mouse.y = mousePos.y;
		// })


		// mouse
		window.addEventListener("mousemove", function (event) {
			mouse.x = event.clientX;
			mouse.y = event.clientY - 40;
		})


		//click to add circle
		window.addEventListener("click", function (event) {
			console.log(event.clientX)
			circleArray.push({
				radius: Math.random() * 6 + 4,
				x: event.clientX,
				y: event.clientY -40,
				dx: Math.random() - 0.5,
				dy: Math.random() - 0.5,
			})
		})

		//resize window
		window.addEventListener("resize", function () {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		})

		let requestId;

		const animate = () => {
			context.clearRect(0, 0, canvas.width, canvas.height);

			draw();
			update();

			requestAnimationFrame(animate);

		};

		animate();


		return () => {
			cancelAnimationFrame(requestId);
		};

	});

	return <canvas id="canvas" ref={canvasRef}></canvas>;
}
