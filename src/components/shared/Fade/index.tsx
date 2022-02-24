import React, { useEffect, useState } from 'react';
import './index.css';
interface IFadeProps {
	shouldHide: boolean;
	children: React.ReactNode;
}

export const Fade: React.FC<IFadeProps> = ({
	shouldHide,
	children,
}: IFadeProps) => {
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		shouldHide
			? setIsHidden(shouldHide)
			: setTimeout(() => setIsHidden(shouldHide), 400);
	}, [shouldHide]);

	return <div className={!isHidden ? 'fading' : 'appearing'}>{children}</div>;
};
