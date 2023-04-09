import './App.css';
import DashboardLayout from './layouts/DashboardLayout';
import ThemeConfig from './theme';
import Home from './sections/home/Home.jsx';
import About from './sections/about/About';
import Experience from './sections/experience/Experience';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';
function App() {
	return (
		<ThemeConfig>
			<DashboardLayout>
				<Home />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</DashboardLayout>
		</ThemeConfig>
	);
}

export default App;
