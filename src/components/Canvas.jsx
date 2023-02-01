import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Canvas = () => {
	const canvasRef = useRef(null);

	const [clicks, setClicks] = useState([]);

	function drawPolygon(ctx) {
		ctx.fillStyle = "rgba(100,100,100,0.5)";
		ctx.strokeStyle = "#df4b26";
		ctx.lineWidth = 1;

		if (clicks.length == 0) {
			return;
		}

		ctx.beginPath();
		ctx.moveTo(clicks[0].x, clicks[0].y);
		for (var i = 1; i < clicks.length; i++) {
			ctx.lineTo(clicks[i].x, clicks[i].y);
		}
		if (
			clicks.length > 2 &&
			clicks[clicks.length - 1].x < clicks[0].x + 20 &&
			clicks[clicks.length - 1].x > clicks[0].x - 20 &&
			clicks[clicks.length - 1].y < clicks[0].y + 20 &&
			clicks[clicks.length - 1].y > clicks[0].y - 20
		) {
			ctx.closePath();
			ctx.fill();
		}

		ctx.stroke();
	}

	const onMouseUp = (e) => {
		setClicks((prev) => [
			...prev,
			{
				x: e.clientX,
				y: e.clientY,
			},
		]);
	};

	const draw = (ctx) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.strokeStyle = "#df4b26";
		ctx.lineJoin = "round";
		ctx.lineWidth = 5;

		for (var i = 0; i < clicks.length; i++) {
			ctx.beginPath();
			ctx.arc(clicks[i].x, clicks[i].y, 3, 0, 2 * Math.PI, false);
			ctx.fillStyle = "#ffffff";
			ctx.fill();
			ctx.lineWidth = 5;
			ctx.stroke();
		}
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");

		//Our draw came here
		const render = () => {
			canvas.width = canvas.width; // Clears the canvas
			draw(context);
			drawPolygon(context);
		};
		render();
	}, [draw]);

	return (
		<Container>
			<canvas ref={canvasRef} width={500} height={500} onMouseUp={onMouseUp} />;
			<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				<polygon
					points={clicks.map((e) => `${e.x},${e.y} `).join("")}
					fill="blue"
					stroke="black"
				/>
			</svg>
		</Container>
	);
};

export default Canvas;

const Container = styled.div`
	width: 100%;
	height: 500px;
`;
