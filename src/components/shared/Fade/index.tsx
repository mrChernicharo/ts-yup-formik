import { nanoid } from "nanoid";
import React, { useCallback, useEffect, useState } from "react";
import "./index.css";
interface IFadeProps {
	id: string;
	fade: boolean;
	name: string;
	children: React.ReactNode;
}
export const Fade: React.FC<IFadeProps> = ({
	id = '',
	fade,
	name,
	children,
}: IFadeProps) => {
	const [currentState, setCurrentState] = useState("building");
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		setCurrentState(fade ? "building" : "fading");
		return () => {
			setTimeout(() => {
				setCurrentState(fade ? "faded" : "built");
			}, 600);
		};
	}, [fade]);

	useEffect(() => {
		setCurrentState(!fade ? "faded" : "built");
		const el = document.querySelector(`#${id}`)
		if (el) {
			const { height, width } = el.getBoundingClientRect() as DOMRect
			console.log(height, width)
			setWidth(width)
			setHeight(height)
		}
	}, [])

	useEffect(() => {
		console.log(name, ": ", currentState);
	}, [currentState]);

	return (
		<>
			{id && <div id={id} className={`${currentState} fade-container`}>
				<>
					{children}
				</>
				<div style={{ height, width }} className={`${currentState} layer`}></div>
			</div>}
		</>
	);
};
