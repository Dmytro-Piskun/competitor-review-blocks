import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';


export default function save({ attributes }) {

	const { buttonsRow } = attributes;

	const blockProps = useBlockProps.save({
		className: "competitor-review-table-wrapper",
		'data-has-buttons-row': buttonsRow
	})

	return (
		<div {...blockProps}>

			<div className='competitor-review-table'>

				<InnerBlocks.Content />

			</div>

		</div>

	);
}
