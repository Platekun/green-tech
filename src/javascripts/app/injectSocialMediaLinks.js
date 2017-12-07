import links from '../content/socialMediaLinks';

const SocialMediaLink = (socialMediaLinkDTO) =>
	`<li class="social-media__item">
    <a href="${socialMediaLinkDTO.url}">
      <i class="fa fa-${socialMediaLinkDTO.name}" aria-hidden="true"></i>
    </a>
  </li>`;

const SocialMediaLinkList = (socialMediaLinks) =>
  `<ul class="social-media">
    ${socialMediaLinks}
  </ul>`;

export default (containers) =>
  containers.forEach(
		(container) => (container.innerHTML += SocialMediaLinkList(links.map(SocialMediaLink).join('')))
	);
