import React, { useEffect, useRef, useState } from 'react';
import './index.css';
interface IFadeProps {
	fade: boolean;
	children: React.ReactNode;
}



export const Fade: React.FC<IFadeProps> = ({
	fade,
	children,
}: IFadeProps) => {
	const [elHeight, setElHeight] = useState<number | null>(null)
	const CSS: any = {}
	const elementRef = useRef<HTMLDivElement>(null)



	useEffect(() => {
		const { height, width } = elementRef.current?.getBoundingClientRect() as DOMRect
		CSS['--height'] = height + 'px'
		setElHeight(height)

		// elementRef.current?.style.height = fade ? '0px' : `${height}px`;
	}, [])


	useEffect(() => {
		// const { height, width } = elementRef.current?.getBoundingClientRect() as DOMRect
		if (!fade) {
			const { height, width } = elementRef.current?.getBoundingClientRect() as DOMRect
			CSS['--height'] = '0px'
			setElHeight(height)

		}
		if (!fade) {
			setElHeight(0)
		}
	}, [fade])

	return <div ref={elementRef} style={{ height: elHeight + 'px' }} className={'fade-container'}>{children}</div>;
};
