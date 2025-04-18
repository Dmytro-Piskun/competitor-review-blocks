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
	const { columns, rows, buttonsRow } = attributes;

	const [columnsAmount, setColumsAmount] = useState(columns);
	const [rowsAmount, setRowAmount] = useState(rows);

	const blockProps = useBlockProps({
		className: "competitor-review-table",
		'data-has-buttons-row': buttonsRow
	});

	const { replaceInnerBlocks } = useDispatch('core/block-editor');

	const generateTableTemplate = () => {
		const template = [];

		for (let r = 0; r < rowsAmount; r++) {
			template.push(['competitor-review-blocks/nestable-table-row']);
		}

		return template;
	};

	const generateTable = () => {
		setAttributes({
			columns: parseInt(columnsAmount),
			rows: parseInt(rowsAmount)
		});

		const newTemplate = generateTableTemplate();
		const newBlocks = createBlocksFromInnerBlocksTemplate(newTemplate);
		replaceInnerBlocks(clientId, newBlocks, false);
	};

	const defaultTemplate = [

		['competitor-review-blocks/nestable-table-row'],
		['competitor-review-blocks/nestable-table-row']

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
					allowedBlocks={['competitor-review-blocks/nestable-table-row']}
				/>
			</div>
		</>
	);
}
