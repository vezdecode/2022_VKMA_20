import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';

import '../styles/globals.css';
import '../styles/font.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<html>
			<Head>
				<title>
					VKMA20
				</title>
			</Head>
			<Component {...pageProps} />
		</html>
	);
};

export default App;
