import Hero from '../components/sections/index/hero'
import About from '../components/sections/index/about'
import FeaturedProjects from '../components/sections/projects/featured'

import Color from '../components/utils/page.colors.util'

import colors from '../content/index/_colors.json'
import Services from '../components/sections/projects/services'
import Contact from '../components/sections/index/contact'


export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			<Hero />
			<About />
			<FeaturedProjects />
			<Services />
			<Contact />
		</>
	);
}