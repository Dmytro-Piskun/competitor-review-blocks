import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const { heading } = attributes;

	const blockProps = useBlockProps({
		className:'competitor-review-accordion-item'
	})

	return (
		<div {...blockProps}>
			<div className='competitor-review-accordion-item-header'>
				<RichText
					tagName="div"
					value={heading}
					onChange={(newVal) => setAttributes({ heading: newVal })}
					placeholder="Enter heading..."
				/>
				<div>+</div>
			</div>
			<div className='competitor-review-accordion-item-content'>

				<InnerBlocks />

			</div>
		</div>
	);
}
