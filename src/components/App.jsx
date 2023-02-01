import Canvas from "./Canvas";
import styled from "styled-components";
import React, { Component } from "react";

export default function App() {
	return (
		<Container>
			<Body>
				<Heading> Drawing Polygons</Heading>
				<Canvas />
			</Body>
		</Container>
	);
}

const Body = styled.div`
	display: flex;
	flex-direction: column;
	color: var(--black2);
`;

const Heading = styled.div``;

const Button = styled.div`
	background-color: var(--tuna);
	bottom: 26px;
	cursor: pointer;
	height: 32px;
	padding-left: 8px;
	padding-top: 8px;
	position: absolute;
	right: 16px;
	width: 32px;
	z-index: 12;

	svg {
		fill: var(--white);
	}

	&:hover {
		background-color: var(--charade);
	}

	&:active {
		background-color: var(--bright-turquoise);

		svg {
			fill: var(--black2);
		}
	}
`;

const Container = styled.div`
	background-color: var(--white);
	display: flex;
	flex-direction: column;
	height: 100vh;
	overflow-x: hidden;
	position: relative;
`;

const ChordContainer = styled.div`
	align-items: center;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	width: 50vw;
	height: 50vh;
`;
