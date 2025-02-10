import { Routes, Route } from "react-router-dom";
import Home from "./samuel's-portfolio/home";
import About from "./samuel's-portfolio/about";
import Portfolio from "./samuel's-portfolio/portfolio";
import Project from "./samuel's-portfolio/project";
import Skills from "./samuel's-portfolio/skills";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/portfolio' element={<Portfolio />} />
			<Route path='/skills' element={<Skills />} />
			<Route path='/project' element={<Project />} />

		</Routes>
	);
}

export default App;
