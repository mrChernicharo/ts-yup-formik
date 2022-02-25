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
		console.log(id)
	}, [])

	useEffect(() => {
		console.log(name, ": ", currentState);
	}, [currentState]);

	return (
		<>
			{id && <div id={id} className={`${currentState} fade-container`}>
				{children}
			</div>}
			<div className={`${currentState} layer`}></div>
		</>
	);
};
