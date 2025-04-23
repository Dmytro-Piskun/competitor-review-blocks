import { useBlockProps } from '@wordpress/block-editor';
import { ReactComponent as CrossIcon } from '../../assets/red-cross.svg'

import './editor.scss';

export default function Edit() {



	const blockProps = useBlockProps({
		className: 'competitor-review-pros-and-cons-heading'
	})

	return (<>

		<div {...blockProps}>
			<CrossIcon />
			<span>Cons</span>
		</div>

	</>);
}
