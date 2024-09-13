// Default core packages
import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Load custom scripts in <Head>
 * 
 * @returns <Html>
 */
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="description" content="Launch next-generation applications with incredible performance. Beautiful websites, powerful mobile apps, crafted for you." />
				<meta name="keywords" content="brisbane, queensland, australia, software, application, app, developer, designer, engineer, contractor, freelancer" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" sizes="any" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}