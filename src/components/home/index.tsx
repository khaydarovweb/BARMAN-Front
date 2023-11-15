import { default as Header } from './header';
import { default as Sec1 } from './section1';
import { default as Sec2 } from './section2';
import { default as Sec3 } from './section3';

function HomePage() {
	return (
		<div>
			<Header />
			<Sec1 />
			<Sec2 />
			<Sec3 />
		</div>
	);
}

export default HomePage;
