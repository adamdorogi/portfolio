// Section structure scss
import sections from '../../styles/structure/section.module.scss';

/**
 * Structural Component
 * 
 * Section / Container / Componenents / Blocks / Utils
 * ¯¯¯¯¯¯¯¯         
 * @param {string}	classProp template literals of classes for contain
 * @param {jsx} 	children children elements
 * @returns {jsx}	<Section />
 */
export default function Section({ id, classProp, children }) {

	const _class = classProp ? classProp : '';

	return (
		<div id={id} className={`${sections.default} ${_class}`}>
			{children}
		</div>
	);
}