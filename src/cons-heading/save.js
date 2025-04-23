
import { useBlockProps} from '@wordpress/block-editor';
import { ReactComponent as CrossIcon } from '../../assets/red-cross.svg'

export default function save() {

	const blockProps = useBlockProps.save({
		className: 'competitor-review-pros-and-cons-heading'
	})

	return (<>

		<div {...blockProps}>
			<CrossIcon />
			<span>Cons</span>
		</div>

	</>);
}
