
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {

	const { heading } = attributes;

	const blockProps = useBlockProps.save({
		className: 'competitor-review-accordion-item'
	})


	return (
		<div {...blockProps}>
			<div className='competitor-review-accordion-item-header'>
				<RichText.Content tagName="div" value={heading} />
				<div>+</div>
			</div>
			<div className='competitor-review-accordion-item-content'>

				<InnerBlocks.Content />

			</div>
		</div>
	);
}
