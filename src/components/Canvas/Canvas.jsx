import { useEffect, useRef } from "react";
import "./Canvas.scss";

const getPixelRatio = (context) => {
	let backingStore =
		context.backingStorePixelRatio ||
		context.webkitBackingStorePixelRatio ||
		context.mozBackingStorePixelRatio ||
		context.msBackingStorePixelRatio ||
		context.oBackingStorePixelRatio ||
		context.backingStorePixelRatio ||
		1;

	return (window.devicePixelRatio || 1) / backingStore;
};

export default function Canvas() {
	const canvasRef = useRef(null);
	// const [animation, setAnimation] = useState(null);

	useEffect(() => {
		let canvas = canvasRef.current;
		// canvas.width = window.innerWidth;
		// canvas.height = window.innerHeight;
		let context = canvas.getContext("2d");

		// adjusting the scaling of our canvas
		let ratio = getPixelRatio(context);
		let width = getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
		let height = getComputedStyle(canvas)
			.getPropertyValue("height")
			.slice(0, -2);

		canvas.width = width * ratio;
		canvas.height = height * ratio;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;

		//mousemovement

		let mouse = {
			x: undefined,
			y: undefined,
		}
		let maxRadius = 30;
		let minRadius = 5;
		// let colorArray = [];
		let circleArray = [];

		window.addEventListener("mousemove", function (event) {
			mouse.x = event.x;
			mouse.y = event.y;
		})

		window.addEventListener("click", function (event) {

			// context.beginPath();
			// context.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2, false);
			// context.strokeStyle = "black";
			// context.stroke();
			// context.fill();
			let newCircle = new Circle(event.x, event.y, Math.random() - 0.5, Math.random() - 0.5, 3);

			// let newCircle = new Circle(mouse.x, mouse.y);
			newCircle.draw();

		})


		class Circle {
			constructor(x, y, dx, dy, radius) {
				this.x = x;
				this.y = y;
				this.dx = dx;
				this.dy = dy;
				this.radius = radius;

				this.draw = function () {
					let color = "#c4cbd0";
					context.beginPath();
					context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
					context.strokeStyle = color;
					context.fillStyle = color;
					context.stroke();
					context.fill();
				};

				this.update = function () {
					if (
						this.x + this.radius > window.innerWidth ||
						this.x - this.radius < 0
					) {
						this.dx = -this.dx;
					}
					if (
						this.y + this.radius > window.innerHeight ||
						this.y - this.radius < 0
					) {
						this.dy = -this.dy;
					}

					this.x += this.dx;
					this.y += this.dy;

					//interactivity hover
					if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
						if (this.radius < maxRadius)
							this.radius += 0.5;
					} else if (this.radius > minRadius) {
						this.radius -= 1;
					}
					// interactivity click

					this.draw();
				};
			}
		}


		for (let i = 0; i < 1000; i++) {
			// let circle = new Circle(200, 200, 3, 30);
			let radius = 5;
			let x = (Math.random() * window.innerWidth - radius * 2) * radius;
			let y = (Math.random() * window.innerHeight - radius * 2) * radius;
			let dx = Math.random() - 0.5;
			let dy = Math.random() - 0.5;
			circleArray.push(new Circle(x, y, dx, dy, radius));
		}

		let requestId;

		const animate = () => {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);

			for (let i = 0; i < circleArray.length; i++) {
				circleArray[i].update();
			}

			requestId = requestAnimationFrame(animate);

		};

		animate();

		return () => {
			cancelAnimationFrame(requestId);
		};
	}, []);

	return <canvas id="canvas" ref={canvasRef}></canvas>;
}
