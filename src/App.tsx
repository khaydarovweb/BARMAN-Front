import React from 'react';
import { Header } from './components/header';
import { default as Sec1 } from './components/sec1/section1';
import { default as Sec2 } from './components/sec2/section2';
import { default as Sec3 } from './components/sec3/section3';

function App() {
	return (
		<main className="Main">
			<Header />
			<Sec1 />
			<Sec2 />
			<Sec3 />
		</main>
	);
}

export default App;
