// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section id="about" classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Get familiar"
					subTitle="I'm a software engineer based in Brisbane, Australia, who's passionate about everything technology. When I'm not coding, I'm in the gym. I love fitness, deep talks with loved ones, and learning about new topics I find interesting, whether that's philosophy or psychology. Once the caffeine hits my blood, and the post-workout endorphins kick in, remarkable things start happening."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="/img/portrait.jpeg" alt="Adam portrait" width={600} height={800} style={{ width: '100%' }} />
					</div>
					<div className={about.copy} >
						<BadgesBlock
							title="Skills soft as a feather"
							containerClass={about.container}
							list={methods}
							fullContainer="fullContainer"
							block="methods"
							icon="feather"
							copy="From the fiery passion for the work, to the growth mindset needed to overcome any challenge, meaningful values are essential to any successful endeavour. My soft skills will not only persevere your project, but will build a meaningful business relationship."
							// invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
						<CopyBlock
							title="It's all about you"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fat', 'hands']}
							copy="I'm all about you. My work as a software developer should precisely reflect your needs — that's why I'll go the extra mile to understand your requirements. Whether you'd like to improve the look of your website, or launch a brand new mobile app, I'll make your idea a reality."
						/>
					</div>
				</section>
			</Container>
		</Section>
	)
}

const methods = [
	{ key: 'balance-scale', name: 'Honesty', type: 'fad' },
	{ key: 'comment', name: 'Communication', type: 'fad' },
	{ key: 'handshake', name: 'Trust', type: 'fad' },
	{ key: 'sun', name: 'Positive outlook', type: 'fad' },
	{ key: 'cubes', name: 'Problem solving', type: 'fad' },
	{ key: 'solar-system', name: 'Efficiency', type: 'fad' },
]