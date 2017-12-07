import navBarItems from '../content/navBarItems'

const NavBarItem = (navBarItemDTO) =>
  `<li class="nav-bar__item">
    <a href="${navBarItemDTO.url}" class="nav-bar__link">
      ${navBarItemDTO.name}
    </a>
  </li>`;

const NavBarMenu = (navBarItems) =>
  `<ul class="nav-bar__links-collection">
    ${navBarItems}
  </ul>`;

export default (container) => container.innerHTML += NavBarMenu(navBarItems.map(NavBarItem).join(''));
