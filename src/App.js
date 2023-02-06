import "./App.css";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Cta from "./Components/Cta";
import Specials from "./Components/Specials";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Cta />
				<Specials />
				<Testimonials />
			</main>
			<Footer />
		</>
	);
}

export default App;
