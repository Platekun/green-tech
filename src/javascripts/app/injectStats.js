import statsImage from '../../img/stats.png';

export default (container) => {
  const image = document.createElement('img');
  image.src = statsImage;
  image.alt = 'Graphic displaying information about green technologies.';
  container.appendChild(image);
}
