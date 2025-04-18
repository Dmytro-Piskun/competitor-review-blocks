import { useBlockProps } from "@wordpress/block-editor";
import { ReactComponent as CheckIcon } from '../../assets/green-check.svg'
import { ReactComponent as CrossIcon } from '../../assets/red-cross.svg'

export default function save({ attributes }) {
    const { pros = "", cons = "" } = attributes;

    const blockProps = useBlockProps.save({
        className: 'competitor-review-pros-and-cons'
    })

	const prosArray = pros.split("\n").filter(Boolean);
	const consArray = cons.split("\n").filter(Boolean);

    return (
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
    );
}
