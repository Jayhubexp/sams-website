import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/portfolio" element={<ProjectsPage />} />
			<Route path="/projects" element={<ProjectsPage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="*" element={<HomePage />} />
		</Routes>
	);
}

export default App;

