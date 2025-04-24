import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	PanelRow,
	__experimentalSpacer as Spacer,
	SelectControl
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const { title, link, target } = attributes;

	const blockProps = useBlockProps({
		className: 'competitor-review-nestable-table-button btn btn-outline btn-rounded',
		href: link,
		target: target || "_self",
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
				<Spacer marginBottom={4} />
				<PanelRow>
					<SelectControl
						label="Target"
						value={target}
						options={[
							{ value: '', label: 'Default' },
							{ value: '_blank', label: 'Blank' },
						]}
						onChange={(val) => setAttributes({ target: val })}
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
