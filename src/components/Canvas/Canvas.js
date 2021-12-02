import { useEffect, useRef, useState } from "react";
import "./Canvas.scss";


export default function Canvas() {
    const canvasRef = useRef(null);
    // const [animation, setAnimation] = useState(null);
    
    
    useEffect(() => {
        
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const c = canvas.getContext('2d');

        class Circle {
            constructor(x, y, dx, radius) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.radius = radius;

                this.draw = function () {
                    c.beginPath();
                    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                    c.strokeStyle = "black";
                    c.stroke();
                    c.fill();
                };

                this.update = function () {
                    if (this.x > window.innerWidth) {
                        this.dx = -this.dx;
                    }

                    this.x += this.dx;

                    this.draw();
                };


            }
        }

        let circleArray = [];

        for (let i = 0; i < 50; i++) {
            // let circle = new Circle(200, 200, 3, 30);
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let dx = 30;
            let radius = 5;
            circleArray.push(new Circle(x, y, dx, radius))
        }

        const animate = () => {

            canvasRef.current = window.requestAnimationFrame(animate);

            c.clearRect(0, 0, window.innerWidth, window.innerHeight);

            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].update();
            }
        }

        canvasRef.current = window.requestAnimationFrame(animate);

    },[canvasRef]);


    return (
        <canvas id="canvas" ref={canvasRef}></canvas>
    )
};
