
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save() {

	const blockProps = useBlockProps.save({
		className: "competitor-review-table-row-cell"
	})

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
