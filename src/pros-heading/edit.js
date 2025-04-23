import { useBlockProps } from '@wordpress/block-editor';
import { ReactComponent as CheckIcon } from '../../assets/green-check.svg'

import './editor.scss';

export default function Edit() {



	const blockProps = useBlockProps({
		className: 'competitor-review-pros-and-cons-heading'
	})

	return (<>

		<div {...blockProps}>
			<CheckIcon />
			<span>Pros</span>
		</div>

	</>);
}
