import {
	InspectorControls, useBlockProps
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextareaControl,
	__experimentalSpacer as Spacer
} from '@wordpress/components';
import { ReactComponent as CheckIcon } from '../../assets/green-check.svg'
import { ReactComponent as CrossIcon } from '../../assets/red-cross.svg'
import './editor.scss'

export default function Edit({ attributes, setAttributes }) {
	const { pros, cons } = attributes;

	const blockProps = useBlockProps({
		className: 'competitor-review-pros-and-cons'
	})

	const prosArray = pros.split("\n").filter(Boolean);
	const consArray = cons.split("\n").filter(Boolean);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Pros and Cons" initialOpen={true}>
					<TextareaControl
						label="Pros"
						value={attributes.pros}
						onChange={(val) => setAttributes({ pros: val })}
						rows={7}
					/>
					<Spacer marginBottom={3} />
					<TextareaControl
						label="Cons"
						value={attributes.cons}
						onChange={(val) => setAttributes({ cons: val })}
						rows={7}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="competitor-review-pros-and-cons-pros">
					<div className="competitor-review-pros-and-cons-heading">
						<CheckIcon />
						<span>Pros</span>
					</div>
					<ul>
						{prosArray.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div className="competitor-review-pros-and-cons-border"></div>
				<div className="competitor-review-pros-and-cons-cons">
					<div className="competitor-review-pros-and-cons-heading">
						<CrossIcon />
						<span>Cons</span>
					</div>
					<ul>
						{consArray.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
