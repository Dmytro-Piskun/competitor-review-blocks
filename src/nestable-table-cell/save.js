
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {

	const {listMarkerStyle} = attributes;

	const blockProps = useBlockProps.save({
		className: `competitor-review-table-row-cell${listMarkerStyle ? ` competitor-review-table-row-cell--${listMarkerStyle}` : ''}`
	})

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
