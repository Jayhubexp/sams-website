import { Routes, Route } from "react-router-dom";
import Home from "./samuel's-portfolio/home";
import About from "./samuel's-portfolio/about";
import Portfolio from "./samuel's-portfolio/portfolio";


function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			{/* <Route path='/project' element={<Project />} /> */}
			<Route path='/portfolio' element={<Portfolio />} />
			{/* <Route path='/skills' element={<Skills />} /> */}


		</Routes>
	);
}

export default App;
