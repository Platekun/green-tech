import { containsClass } from './../utils';
import { HIDDEN_CLASS } from './../constants';

const isHidden = (element) => containsClass(element, HIDDEN_CLASS);
const hasNextSibling = (element) => !!element.nextElementSibling;
const isAList = (element) => element.tagName.toLowerCase() === 'ul';
const visuallyShow = (element) => element.classList.remove(HIDDEN_CLASS);
const visuallyHide = (element) => element.classList.add(HIDDEN_CLASS);

const showSubCategories = (subCategories) =>
	isHidden(subCategories) ? visuallyShow(subCategories) : visuallyHide(subCategories);

export default (menuItems) =>
  [...menuItems]
    .filter((category) => hasNextSibling(category))
    .filter((category) => isAList(category.nextElementSibling))
    .map((category) => [ category, category.nextElementSibling ])
    .forEach(([ category, subCategories ]) =>
      category.addEventListener('click', () => showSubCategories(subCategories))
    );
