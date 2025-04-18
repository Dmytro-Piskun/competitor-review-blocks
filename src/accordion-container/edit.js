import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {

const blockProps = useBlockProps({ className: 'competitor-review-accordion-container' });

	return (
		<div {...blockProps}>
			<div>Drop accordion items here</div>
			<InnerBlocks allowedBlocks={['competitor-review-blocks/accordion-item']}/>
		</div>
	)

}
