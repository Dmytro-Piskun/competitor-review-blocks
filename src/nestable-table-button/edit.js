import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	PanelRow,
	__experimentalSpacer as Spacer
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const { title, link } = attributes;

	const blockProps = useBlockProps({
		className: 'competitor-review-nestable-table-button btn btn-outline btn-rounded',
		href: link,
	})

	return (<>
		<InspectorControls>
			<PanelBody title="Button Settings" initialOpen={true}>
				<PanelRow>
					<TextControl
						label="Link"
						type="text"
						value={link}
						onChange={(val) => setAttributes({ link: val })}
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>

		<a {...blockProps}>
			<RichText
				tagName="span"
				value={title}
				onChange={(newVal) => setAttributes({ title: newVal })}
				placeholder="Enter title..."
			/>
		</a>
	</>);
}
