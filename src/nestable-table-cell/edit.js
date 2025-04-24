
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl
} from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes,setAttributes}) {

	const {listMarkerStyle} = attributes

	const blockProps = useBlockProps({
		className: `competitor-review-table-row-cell${listMarkerStyle ? ` competitor-review-table-row-cell--${listMarkerStyle}` : ''}`
	})

	return (

		<>

			<InspectorControls>

				<PanelBody title="Cell Settings" initialOpen={true}>

							<SelectControl
								label="List Markers Style"
								value={listMarkerStyle}
								options={[
									{ value: '', label: 'Default'},
									{ value: 'list-red', label: 'Red' },
									{ value: 'list-green', label: 'Green' },
								]}
								onChange={(val) => setAttributes({listMarkerStyle:val})}
							/>

	
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<InnerBlocks templateLock={false} />
			</div>

		</>
	);
}
