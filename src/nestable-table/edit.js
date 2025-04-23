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
import { useState, useEffect } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { createBlock, createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';

import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const { columns, rows, buttonsRow } = attributes;

	const [columnsAmount, setColumsAmount] = useState(columns);
	const [rowsAmount, setRowAmount] = useState(rows);

	const blockProps = useBlockProps({
		className: "competitor-review-table",
		'data-has-buttons-row': buttonsRow
	});

	const { getBlocks } = useSelect((select) => ({
		getBlocks: select(blockEditorStore).getBlocks(clientId),
	}));
	const { insertBlock, removeBlock } = useDispatch(blockEditorStore);

	useEffect(() => {

		console.log("test", buttonsRow)

		const blocks = getBlocks;
		const lastBlock = blocks[blocks.length - 1];
		const buttonRowBlock = blocks.find((block) => block.name === 'competitor-review-blocks/nestable-table-buttons-row');

		if (buttonsRow) {
			if (!buttonRowBlock) {
				const newBlock = createBlock('competitor-review-blocks/nestable-table-buttons-row');
				insertBlock(newBlock, blocks.length, clientId);
			} else {
				if (lastBlock?.clientId !== buttonRowBlock.clientId) {
					removeBlock(buttonRowBlock.clientId);
					insertBlock(buttonRowBlock, blocks.length, clientId);

				}
			}
		} else {
			if (buttonRowBlock) {
				removeBlock(buttonRowBlock.clientId);
			}
		}
	}, [buttonsRow, getBlocks]);

	//move to rows block 

	// const { replaceInnerBlocks } = useDispatch('core/block-editor');

	// const generateTableTemplate = () => {
	// 	const template = [];

	// 	for (let r = 0; r < rowsAmount; r++) {
	// 		template.push(['competitor-review-blocks/nestable-table-row']);
	// 	}

	// 	return template;
	// };

	// const newTemplate = generateTableTemplate();
	// 	const newBlocks = createBlocksFromInnerBlocksTemplate(newTemplate);
	// 	replaceInnerBlocks(clientId, newBlocks, false);

	//move to rows block 

	const generateTable = () => {
		setAttributes({
			columns: parseInt(columnsAmount),
			rows: parseInt(rowsAmount)
		});


	};


	const defaultTemplate = [

		['competitor-review-blocks/nestable-table-rows'],
		// ['competitor-review-blocks/nestable-table-buttons-row']

	]


	return (
		<>
			<InspectorControls>
				<PanelBody title="Table Settings" initialOpen={true}>
					<Spacer marginBottom={4} />
					<PanelRow>
						<TextControl
							label="Columns"
							type="number"
							value={columnsAmount}
							onChange={(val) => setColumsAmount(val)}
						/>
					</PanelRow>
					<Spacer marginBottom={4} />
					<PanelRow>
						<TextControl
							label="Rows"
							type="number"
							value={rowsAmount}
							onChange={(val) => setRowAmount(val)}
						/>
					</PanelRow>
					<Spacer marginBottom={8} />

					<Button variant="primary" onClick={generateTable}>
						Confirm changes
					</Button>

					<Spacer marginBottom={8} />
					<PanelRow>
						<ToggleControl

							label="Make Last Row A Buttons Row"
							checked={buttonsRow}
							onChange={(val) => setAttributes({ buttonsRow: val })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className='competitor-review-table-instruction'>
					Insert table rows below
				</div>

				<InnerBlocks
					templateLock={false}
					template={defaultTemplate}
					allowedBlocks={[
						'competitor-review-blocks/nestable-table-row',
						'competitor-review-blocks/nestable-table-buttons-row',
					]}
				/>
			</div>
		</>
	);
}
