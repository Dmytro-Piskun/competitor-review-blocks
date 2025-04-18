
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';


export default function save({attributes}) {

	const {columns} = attributes;

	const blockProps = useBlockProps.save({
		className: 'competitor-review-table-row',
		style: {
			gridTemplateColumns: `repeat(${columns}, 1fr)`
		}
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps, {
		orientation: 'horizontal',
	});

	return (
		<div {...innerBlocksProps}>


		</div>
	);
}
