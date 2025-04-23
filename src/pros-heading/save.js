
import { useBlockProps} from '@wordpress/block-editor';
import { ReactComponent as CheckIcon } from '../../assets/green-check.svg'

export default function save() {

	const blockProps = useBlockProps.save({
		className: 'competitor-review-pros-and-cons-heading'
	})

	return (<>

		<div {...blockProps}>
			<CheckIcon />
			<span>Pros</span>
		</div>

	</>);
}
