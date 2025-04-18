import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';


export default function save({attributes}) {

	const { buttonsRow} = attributes;

	const blockProps = useBlockProps.save({
		className: "competitor-review-table",
		'data-has-buttons-row': buttonsRow
	})

	return (
		<div {...blockProps}>

			<InnerBlocks.Content />

		</div>

	);
}
