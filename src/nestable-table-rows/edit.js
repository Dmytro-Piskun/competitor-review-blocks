import {
	InnerBlocks,
	InspectorControls,
	useBlockProps
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	PanelRow,
	Button,
	ToggleControl,
	__experimentalSpacer as Spacer
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';

import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	

	const blockProps = useBlockProps({
		className: "competitor-review-table-rows",
		// 'data-has-buttons-row': buttonsRow
	});

	
	// const defaultTemplate = [

	// 	['competitor-review-blocks/nestable-table-row'],
	// 	['competitor-review-blocks/nestable-table-row']

	// ]


	return (

			<div {...blockProps}>
				yo
				<InnerBlocks
					// templateLock={false}
					// template={defaultTemplate}
					// allowedBlocks={['competitor-review-blocks/nestable-table-row']}
				/>
			</div>
	);
}
