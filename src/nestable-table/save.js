import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';


export default function save({ attributes }) {

	const { buttonsRow } = attributes;

	const blockProps = useBlockProps.save({
		className: "competitor-review-table-wrapper",
	})

	return (
		<div {...blockProps}>

			<div className='competitor-review-table' data-has-buttons-row={buttonsRow}>
				<InnerBlocks.Content />

{/* add button row here  */}

			</div>

		</div>

	);
}
