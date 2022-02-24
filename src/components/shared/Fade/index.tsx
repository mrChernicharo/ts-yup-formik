import { useState } from 'react';

interface IFadeProps {
	shouldHide: boolean;
	children: React.ReactNode;
}

export const Fade: React.FC<IFadeProps> = ({
	shouldHide,
	children,
}: IFadeProps) => {
	const [isHidden, setIsHidden] = useState(false);

	return (
		<div className={shouldHide ? 'fading' : ''}>
			{!shouldHide && children}
		</div>
	);
};
