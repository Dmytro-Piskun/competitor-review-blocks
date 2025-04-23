import { useBlockProps } from '@wordpress/block-editor';


export default function save({attributes}) {
	const { cards = [], globalHeading = '' } = attributes;

	const blockProps = useBlockProps.save({
		className: "competitor-review-review-carousel",
		"data-carousel": JSON.stringify(attributes)
	});

	return (
		<div {...blockProps}>
			<div className="reviews">
				<div className="reviews__title">{globalHeading}</div>

				<div className="reviews__slider swiper-initialized swiper-horizontal swiper-backface-hidden">
					<div className="reviews__fade reviews__fade--left"></div>
					<div className="reviews__fade reviews__fade--right"></div>

					<div className="swiper-wrapper">

						{cards.length === 0 && "No cards added"}
						{cards.map((card, index) => (
							<div key={index} className="swiper-slide">
								<div className="reviews__card">
									<div className="reviews__card-header">
										<img src={card.avatar} className="reviews__avatar" alt={`avatar`} />

										<div className="d-block w-100" style={{ width: "100%" }}>
											<div className="reviews__rating-container">
												<div className="reviews__rating">
													<span className="reviews__score">{card.rating}</span>
													<span className="reviews__star">
														<svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M9.0492 6.50678C9.34847 5.59149 10.6515 5.59149 10.9508 6.50678L12.6261 11.6305C12.76 12.0399 13.1438 12.317 13.5769 12.317H18.9984C19.9668 12.317 20.3695 13.5485 19.586 14.1142L15.2 17.2809C14.8496 17.5338 14.7029 17.9823 14.8368 18.3916L16.5121 23.5153C16.8114 24.4306 15.7572 25.1918 14.9737 24.6261L10.5876 21.4594C10.2372 21.2064 9.76276 21.2064 9.41237 21.4594L5.02634 24.6261C4.24284 25.1918 3.18864 24.4306 3.48791 23.5153L5.16322 18.3916C5.29706 17.9823 5.15044 17.5338 4.80005 17.2809L0.414021 14.1142C-0.369485 13.5485 0.0331862 12.317 1.00165 12.317H6.42308C6.85619 12.317 7.24004 12.0399 7.37388 11.6305L9.0492 6.50678Z" fill="#F75B11" />
														</svg>
													</span>
												</div>
												<div className="reviews__source">													
														{card.reviewSource}													
												</div>
											</div>
											<div className="reviews__author">
												<div className="reviews__author-name">{card.name}</div>
											</div>
										</div>
									</div>
									<div className="reviews__card-body">
										<div className="reviews__headline">
											{card.heading}
										</div>
										<div className="reviews__text">
											{card.text}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<div class="reviews__navigation"><button class="reviews__nav-button reviews__nav-button--prev"><span><svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.86957 0.820312L10.5 2.27486L3.65218 8.82031L10.5 15.3658L8.86957 16.8203L0.5 8.82031L8.86957 0.820312Z" fill="#0A083B"></path></svg></span></button><button class="reviews__nav-button reviews__nav-button--next"><span><svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.13043 16.8203L0.5 15.3658L7.34783 8.82031L0.5 2.27486L2.13043 0.820312L10.5 8.82031L2.13043 16.8203Z" fill="#0A083B"></path></svg></span></button></div>
				</div>
			</div>

		</div>
	);
}
