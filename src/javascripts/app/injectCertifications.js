import certifications from '../content/certifications';

const Certification = (certificationDTO) =>
  `<p class="certifications__image-container">
    <img src="${certificationDTO.logo}" alt="${certificationDTO.issuer}">
  </p>`;

export default (container) => container.innerHTML += certifications.map(Certification).join('');
