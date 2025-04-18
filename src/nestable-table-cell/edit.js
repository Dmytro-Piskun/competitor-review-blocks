
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit() {

	const blockProps = useBlockProps({
		className: "competitor-review-table-row-cell"
	})

	return (
		<div {...blockProps}>
			<InnerBlocks templateLock={false} />
		</div>
	);
}
