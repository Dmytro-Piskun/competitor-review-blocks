import {
	InspectorControls, useBlockProps, MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody, TextControl, PanelRow, Button,
	SelectControl,
	CheckboxControl,
} from '@wordpress/components';
import { __experimentalSpacer as Spacer } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const { cards } = attributes;

	const blockProps = useBlockProps({
		className: "competitor-review-rating-comparison"
	})

	const updateCard = (index, key, value) => {
		const updatedCards = structuredClone(cards);
		updatedCards[index][key] = value;
		setAttributes({ cards: updatedCards });
	};

	const updateRating = (cardIndex, ratingIndex, key, value) => {
		const updatedCards = structuredClone(cards);
		updatedCards[cardIndex].ratings[ratingIndex][key] = value;
		setAttributes({ cards: updatedCards });
	};


	return (
		<>
			<InspectorControls>
				{cards.map((card, index) => (
					<PanelBody
						title={`Card ${index + 1}`}
						initialOpen={index === 0}
						key={index}
					>
						<Spacer marginBottom={3} />
						<PanelRow>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) =>
										updateCard(index, 'image', media.url)
									}
									allowedTypes={['image']}
									render={({ open }) => (
										<Button onClick={open} isSecondary>
											{card.image ? 'Change Image' : 'Upload Image'}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</PanelRow>
						<Spacer marginBottom={3} />
						<TextControl
							label="Overall Rating"
							value={card.overallRating}
							onChange={(val) =>
								updateCard(index, 'overallRating', val)
							}
						/>

						{card.ratings.map((rating, rIndex) => (
							<PanelBody
								title={`Rating ${rIndex + 1}`}
								initialOpen={false}
								key={rIndex}
							>
								<TextControl
									label="Reviewer"
									value={rating.reviewer}
									onChange={(val) =>
										updateRating(index, rIndex, 'reviewer', val)
									}
								/>
								<TextControl
									label="Rating"
									value={rating.rating}
									onChange={(val) =>
										updateRating(index, rIndex, 'rating', val)
									}
								/>
							</PanelBody>
						))}
						<Spacer marginBottom={3} />
						<TextControl
							label="Link"
							value={card.link}
							onChange={(val) => updateCard(index, 'link', val)}
						/>
						<Spacer marginBottom={3} />
						<PanelRow>
							<SelectControl
								label="Target"
								value={card.target}
								options={[
									{ value: '', label: 'Default' },
									{ value: '_blank', label: 'Blank' },
								]}
								onChange={(val) => updateCard(index, 'target', val)}
							/>
						</PanelRow>
						<Spacer marginBottom={3} />
						<PanelRow>
							<CheckboxControl
								label="Nofollow"
								checked={card.isNofollow}
								onChange={(val) => updateCard(index, 'isNofollow', val)}
							/>
						</PanelRow>
					</PanelBody>

				))}
			</InspectorControls>

			<div {...blockProps}>

				{cards.map((card) => {

					return (

						<div className='competitor-review-rating-comparison-card'>

							<img src={card.image} className="competitor-review-rating-comparison-logo" alt='Logo goes here' />

							<div className='competitor-review-rating-comparison-border' />

							<div class="competitor-review-rating-comparison-rating">
								<div class="competitor-review-rating-comparison-rating-overall-container">
									<div class="competitor-review-rating-comparison-rating-header">
										Overall rating:
									</div>

									<div class="competitor-review-rating-comparison-rating-overall">
										<div>
											<div>{card.overallRating}</div>
											<div> /5</div>
										</div>
										<img class="competitor-review-rating-comparison-rating-star" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDQ5MiAxLjE5OTE2QzkuMzQ4NDcgMC4yODM4NzEgMTAuNjUxNSAwLjI4Mzg3NCAxMC45NTA4IDEuMTk5MTdMMTIuNjI2MSA2LjMyMjkyQzEyLjc2IDYuNzMyMjUgMTMuMTQzOCA3LjAwOTM5IDEzLjU3NjkgNy4wMDkzOUgxOC45OTg0QzE5Ljk2NjggNy4wMDkzOSAyMC4zNjk1IDguMjQwOTEgMTkuNTg2IDguODA2NTlMMTUuMiAxMS45NzMyQzE0Ljg0OTYgMTIuMjI2MiAxNC43MDI5IDEyLjY3NDYgMTQuODM2OCAxMy4wODRMMTYuNTEyMSAxOC4yMDc3QzE2LjgxMTQgMTkuMTIzIDE1Ljc1NzIgMTkuODg0MSAxNC45NzM3IDE5LjMxODVMMTAuNTg3NiAxNi4xNTE4QzEwLjIzNzIgMTUuODk4OCA5Ljc2Mjc2IDE1Ljg5ODggOS40MTIzNyAxNi4xNTE4TDUuMDI2MzQgMTkuMzE4NUM0LjI0Mjg0IDE5Ljg4NDEgMy4xODg2NCAxOS4xMjMgMy40ODc5MSAxOC4yMDc3TDUuMTYzMjIgMTMuMDg0QzUuMjk3MDYgMTIuNjc0NiA1LjE1MDQ0IDEyLjIyNjIgNC44MDAwNSAxMS45NzMyTDAuNDE0MDIxIDguODA2NTlDLTAuMzY5NDg1IDguMjQwOSAwLjAzMzE4NjIgNy4wMDkzOSAxLjAwMTY1IDcuMDA5MzlINi40MjMwOEM2Ljg1NjE5IDcuMDA5MzkgNy4yNDAwNCA2LjczMjI1IDcuMzczODggNi4zMjI5Mkw5LjA0OTIgMS4xOTkxNloiIGZpbGw9IiNGNzVCMTEiLz4KPC9zdmc+Cg==" alt="rating star" />
									</div>
								</div>
								<div class="competitor-review-rating-comparison-rating-list">
									{
										card.ratings.map((rating) =>
											<div class="competitor-review-rating-comparison-rating-list-item">

												<div>{rating.reviewer}:</div>

												<div>
													<span>{rating.rating}</span>
													<img class="competitor-review-rating-comparison-rating-star" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDQ5MiAxLjE5OTE2QzkuMzQ4NDcgMC4yODM4NzEgMTAuNjUxNSAwLjI4Mzg3NCAxMC45NTA4IDEuMTk5MTdMMTIuNjI2MSA2LjMyMjkyQzEyLjc2IDYuNzMyMjUgMTMuMTQzOCA3LjAwOTM5IDEzLjU3NjkgNy4wMDkzOUgxOC45OTg0QzE5Ljk2NjggNy4wMDkzOSAyMC4zNjk1IDguMjQwOTEgMTkuNTg2IDguODA2NTlMMTUuMiAxMS45NzMyQzE0Ljg0OTYgMTIuMjI2MiAxNC43MDI5IDEyLjY3NDYgMTQuODM2OCAxMy4wODRMMTYuNTEyMSAxOC4yMDc3QzE2LjgxMTQgMTkuMTIzIDE1Ljc1NzIgMTkuODg0MSAxNC45NzM3IDE5LjMxODVMMTAuNTg3NiAxNi4xNTE4QzEwLjIzNzIgMTUuODk4OCA5Ljc2Mjc2IDE1Ljg5ODggOS40MTIzNyAxNi4xNTE4TDUuMDI2MzQgMTkuMzE4NUM0LjI0Mjg0IDE5Ljg4NDEgMy4xODg2NCAxOS4xMjMgMy40ODc5MSAxOC4yMDc3TDUuMTYzMjIgMTMuMDg0QzUuMjk3MDYgMTIuNjc0NiA1LjE1MDQ0IDEyLjIyNjIgNC44MDAwNSAxMS45NzMyTDAuNDE0MDIxIDguODA2NTlDLTAuMzY5NDg1IDguMjQwOSAwLjAzMzE4NjIgNy4wMDkzOSAxLjAwMTY1IDcuMDA5MzlINi40MjMwOEM2Ljg1NjE5IDcuMDA5MzkgNy4yNDAwNCA2LjczMjI1IDcuMzczODggNi4zMjI5Mkw5LjA0OTIgMS4xOTkxNloiIGZpbGw9IiNGNzVCMTEiLz4KPC9zdmc+Cg==" alt="rating star" />
												</div>

											</div>
										)
									}

								</div>
								<div class="competitor-review-rating-comparison-rating-link">
									<a href={card.link} target={card.target || "_self"} rel={card.isNofollow ? "nofollow" : ""} class="btn btn-lg nacked-btn">
										See all Mailerlite alternatives
										<span class="btn-icon">
											<svg class="svg-icon" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9.3 0L7.9 1.4L12.2 5.7H0V7.7H12.2L7.9 12L9.3 13.4L16 6.7L9.3 0Z" fill="currentColor"></path>
											</svg>
											<svg class="svg-icon" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9.3 0L7.9 1.4L12.2 5.7H0V7.7H12.2L7.9 12L9.3 13.4L16 6.7L9.3 0Z" fill="currentColor"></path>
											</svg>
										</span>
									</a>
								</div>
							</div>
						</div>
					);

				})}

			</div>

		</>
	);
}
