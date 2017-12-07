import { containsClass } from './../utils';
import { INACTIVE_CLASS } from './../constants';

const isInactive = (element) => containsClass(element, INACTIVE_CLASS);

const hideMenu = (drawer, overlay) => {
	drawer.style.marginLeft = '-100%';
	overlay.classList.remove(INACTIVE_CLASS);
};

const showMenu = (drawer, overlay) => {
	drawer.style.marginLeft = '0%';
	overlay.classList.add(INACTIVE_CLASS);
};

export default (overlay, drawer) => {
	const onClickHandler = () => isInactive(overlay) ? hideMenu(drawer, overlay) : showMenu(drawer, overlay);

	return (element) => element.addEventListener('click', onClickHandler);
};
