import navBarItems from '../content/navBarItems';

const NavDrawerItem = (navBarItemDTO, rootLevel = false) =>
	`<li ${rootLevel ? 'data-target="navigation-drawer-category" class="navigation-drawer__category"' : 'class="navigation-drawer__subcategory"'}>
    <a href="${navBarItemDTO.url}" class="navigation-drawer__link">
      ${navBarItemDTO.name}
    </a>
  </li>
  ${navBarItemDTO.subSections ? NavDrawerSubList(navBarItemDTO.subSections.map((item) => NavDrawerItem(item, false)).join('')) : ''}`;

const NavDrawerSubList = (navBarSubItem) =>
	`<ul class="visuallyhidden">
    ${navBarSubItem}
  </ul>`;

const NavDrawer = (navDrawerItems) =>
	`<ul>
    ${navDrawerItems}
  </ul>`;

export default (container) =>
	(container.innerHTML += NavDrawer(navBarItems.map((navBarItem) => NavDrawerItem(navBarItem, true)).join('')));
