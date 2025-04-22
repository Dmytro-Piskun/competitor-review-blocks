
import { useBlockProps } from '@wordpress/block-editor';


export default function save({ attributes }) {

	const { cards = [] } = attributes

	const blockProps = useBlockProps.save({
		className: "competitor-review-comparisons"
	})


	return (
		<div {...blockProps}>
				{cards.map((card, index) => (
					<div className='competitor-review-comparisons-item' key={index}>

						<div className='competitor-review-comparisons-item-header'>

							<img src={card.image1 || ""} alt={`Logo 1`} />
							<span>X</span>
							<img src={card.image2 || ""} alt={`Logo 2`} />

						</div>

						<div className="competitor-review-comparisons-item-link">
							<a href={card.link || '#'} className="btn btn-lg nacked-btn">
								See comparison
								<span className="btn-icon">
									<svg className="svg-icon" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.3 0L7.9 1.4L12.2 5.7H0V7.7H12.2L7.9 12L9.3 13.4L16 6.7L9.3 0Z" fill="currentColor"></path>
									</svg>
									<svg className="svg-icon" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.3 0L7.9 1.4L12.2 5.7H0V7.7H12.2L7.9 12L9.3 13.4L16 6.7L9.3 0Z" fill="currentColor"></path>
									</svg>
								</span>
							</a>
						</div>
					</div>
				))}
			</div>
	);
}
