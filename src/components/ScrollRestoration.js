import { useEffect } from 'react';
import { usePath } from 'hookrouter';

const ScrollRestoration = () => {
	const pathaname = usePath();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathaname]);

	return null;
};

export default ScrollRestoration;