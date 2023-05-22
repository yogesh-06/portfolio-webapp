import { Icon } from '@iconify/react';
import { Alert, IconButton, Snackbar, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import DashboardLayout from './layouts/DashboardLayout';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import Experience from './sections/experience/Experience';
import Home from './sections/home/Home.jsx';
import Projects from './sections/projects/Projects';
import ThemeConfig from './theme';
function App() {
	const [open, setOpen] = useState(false);
	const mediumViewport = useMediaQuery('(min-width:460px)');

	const action = (
		<IconButton
			size="small"
			aria-label="close"
			color="inherit"
			onClick={() => setOpen(false)}
		>
			<Icon icon="ic:baseline-close" />
		</IconButton>
	);

	useEffect(() => {
		setTimeout(() => {
			setOpen(true);
		}, 10000);
	}, []);
	return (
		<ThemeConfig>
			<DashboardLayout>
				<Home />
				<About />
				<Experience />
				<Projects />
				<Contact />
				{!mediumViewport && (
					<Snackbar
						open={open}
						autoHideDuration={10000}
						onClose={() => setOpen(false)}
						action={action}
					>
						<Alert
							onClose={() => setOpen(false)}
							severity="success"
							sx={{ width: '100%' }}
						>
							Try desktop computer for better experience.
						</Alert>
					</Snackbar>
				)}
			</DashboardLayout>
		</ThemeConfig>
	);
}

export default App;
