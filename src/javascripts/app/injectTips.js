import tips from '../content/tips';

const Tip = (tipDTO) =>
  `<div class="carousel-cell">
    <img src="${tipDTO.photo}" alt="${tipDTO.title}" class="tips__slide-image">
    <h3 class="brand-text tips__slide-title">${tipDTO.title}</h3>
    <p class="tips__slide-text">${tipDTO.content}</p>
  </div>`;

const TipList = (tips) =>
  `<div data-target="tips-carousel">
    ${tips}
  </div>`;

export default (container) => container.innerHTML += TipList(tips.map(Tip).join(''));
