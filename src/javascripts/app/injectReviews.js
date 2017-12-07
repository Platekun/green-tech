import reviews, { featuredReview } from '../content/reviews';

const isEven = (number) => number % 2 === 0;

const FeaturedReview = (reviewDTO) =>
	`<article data-target="featured-review" class="reviews__featured-review">
    <div class="wrapper">
      <img src="${reviewDTO.photo}" class="reviews__reviewer-photo">
      <h3>${reviewDTO.name}</h3>
      <p class="reviews__reviewer-profile">${reviewDTO.profile} ${reviewDTO.company
      ? `at <span class="brand-text">${reviewDTO.company}</span>`
      : ''}</p>
      <p><q>${reviewDTO.review}</q></p>
    </div>
  </article>`;

const Review = (reviewDTO, index) =>
	`<li data-target="${isEven(index) ? 'even-review' : 'odd-review'}" class="reviews__review">
      <blockquote>
        <p class="reviewer-photo reviewer-photo--small"><img src="${reviewDTO.photo}" class="reviews__reviewer-photo"></p>
        <div class="reviews__reviewer-info">
          <h3 class="reviews__reviewer-name"><cite class="reviews__cite">${reviewDTO.name}</cite></h3>
          <p class="reviews__reviewer-profile">${reviewDTO.profile} ${reviewDTO.company
      ? `at <span class="brand-text">${reviewDTO.company}</span>`
      : ''}</p>
        </div>
        <p class="reviews__quote"><q>${reviewDTO.review}</q></p>
      </blockquote>
    </li>`;

const ReviewList = (reviews) =>
	`<ul class="reviews__reviews-list">
    ${reviews}
  </ul>`;

export default (container) =>
	(container.innerHTML += FeaturedReview(featuredReview) + ReviewList(reviews.map(Review).join('')));
