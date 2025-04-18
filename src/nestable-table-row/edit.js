import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';

import './editor.scss';

export default function Edit({ context, attributes, setAttributes, clientId }) {
	const columns = context['nestable-table/columns'];
	const prevColumns = useRef(attributes.columns);

	const { replaceInnerBlocks } = useDispatch('core/block-editor');

	const generateTableTemplate = () => {
		const template = [];

		for (let i = 0; i < columns; i++) {
			template.push(['competitor-review-blocks/nestable-table-cell']);
		}

		return template;
	};

	useEffect(() => {
		if (attributes.columns !== columns) {
			setAttributes({ columns });

			if (prevColumns.current !== columns) {
				const newTemplate = generateTableTemplate();
				const newBlocks = createBlocksFromInnerBlocksTemplate(newTemplate);
				replaceInnerBlocks(clientId, newBlocks, false);
				prevColumns.current = columns;
			}
		}
	}, [columns]);

	const blockProps = useBlockProps({
		className: `competitor-review-table-row`,
		style: {
			gridTemplateColumns: `repeat(${columns}, 1fr)`
		}
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		orientation: 'horizontal',
		templateLock: "insert",
		allowedBlocks: ['competitor-review-blocks/nestable-table-cell']
	});

	return <div {...innerBlocksProps} />;
}
