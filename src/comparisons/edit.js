import { InspectorControls, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody, TextControl, PanelRow, Button,
} from '@wordpress/components';
import { __experimentalSpacer as Spacer } from '@wordpress/components';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const { cards } = attributes;

	const blockProps = useBlockProps({
		className: "competitor-review-comparisons"
	})

	return (
		<>
			<InspectorControls>
				{attributes.cards.map((card, index) => (
					<PanelBody
						title={`Card ${index + 1}`}
						initialOpen={index === 0}
						key={index}
					>
						<Spacer marginBottom={3} />
						<PanelRow>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => {
										const newCards = [...attributes.cards];
										newCards[index].image1 = media.url;
										setAttributes({ cards: newCards });
									}}
									allowedTypes={['image']}
									render={({ open }) => (
										<Button onClick={open} isSecondary>
											{card.image1 ? 'Change Image 1' : 'Upload Image 1'}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</PanelRow>
						<Spacer marginBottom={3} />
						<PanelRow>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => {
										const newCards = [...attributes.cards];
										newCards[index].image2 = media.url;
										setAttributes({ cards: newCards });
									}}
									allowedTypes={['image']}
									render={({ open }) => (
										<Button onClick={open} isSecondary>
											{card.image2 ? 'Change Image 2' : 'Upload Image 2'}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</PanelRow>
						<Spacer marginBottom={3} />
						<TextControl
							label="Link"
							value={card.link}
							onChange={(val) => {
								const newCards = [...attributes.cards];
								newCards[index].link = val;
								setAttributes({ cards: newCards });
							}}
						/>
					</PanelBody>
				))}
			</InspectorControls>


			<div {...blockProps}>
				{cards.map((card, index) => (
					<div className='competitor-review-comparisons-item' key={index}>

						<div className='competitor-review-comparisons-item-header'>

							<img src={card.image1} alt={`Logo 1`} />
							<span>X</span>
							<img src={card.image2} alt={`Logo 2`} />

						</div>

						<div class="competitor-review-comparisons-item-link">
							<a href={card.link} class="btn btn-lg nacked-btn">
								See comaparison
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
				))}
			</div>
		</>
	);
}
