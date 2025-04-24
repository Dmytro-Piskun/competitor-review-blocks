
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {

	const { title, link, target } = attributes;

	const blockProps = useBlockProps.save({
		className: 'competitor-review-nestable-table-button btn btn-outline btn-rounded',
		href: link,
		target: target || "_self",
	})


	return (
		<a {...blockProps}>
			<RichText.Content tagName="span" value={title} />
		</a>
	);
}
