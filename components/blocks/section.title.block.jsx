// Section scss
import section from '../../styles/blocks/section.title.module.scss'
import Badges from '../utils/badge.list.util'

/**
 * Section header component
 * 
 * @param {string} * strings for header
 * @returns 
 */
export default function SectionTitle({ preTitle, title, subTitle, badges }) {
	return (
		<>
			<div className={`${section.title}`}>
				<h4>{preTitle}</h4>
				<h2>{title}</h2>
				<p>{subTitle}</p>
				{badges && <span style={{ margin: 'auto' }}><Badges list={badges} /></span>}
			</div>
		</>
	)

}