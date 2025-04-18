import { useBlockProps, InnerBlocks} from '@wordpress/block-editor';

export default function save() {

	const blockProps = useBlockProps.save({ className: 'competitor-review-accordion-container' });

	return (
		<div {...blockProps}>
			<InnerBlocks.Content/>
		</div>
	);
}
