// material
import { styled } from '@mui/material/styles';
//
import Navbar from '../components/navbar/Navbar.jsx';
import Sidebar from '../sections/sidebar/Sidebar.jsx';
import SidebarMobile from '../sections/sidebar/SidebarMobile.jsx';
import MHidden from '../components/@material-extend/MHidden.js';
import { useEffect, useState } from 'react';
import Logo from '../assets/portfolio-webapp-logo.png';
import { Box } from '@mui/system';

// ----------------------------------------------------------------------

const APP_BAR_DESKTOP = 110;

const RootStyle = styled('div')({
	display: 'flex',
	minHeight: '100%',
	overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
	flexGrow: 1,
	overflow: 'hidden',
	minHeight: '100%',
	paddingTop: '70px',
	backgroundColor: '#0a192f',
	paddingBottom: theme.spacing(10),
	[theme.breakpoints.up('lg')]: {
		paddingTop: APP_BAR_DESKTOP,
		paddingLeft: theme.spacing(15),
		paddingRight: theme.spacing(2),
	},
}));

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
	const [open, setOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	function Overlay() {
		return (
			<div
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: '#0a192f',
					zIndex: 9999,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box boxShadow={20}>
					<img src={Logo} width={92} height={92} />
				</Box>
			</div>
		);
	}

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 20000);
	}, []);

	if (isLoading) return <Overlay />;

	return (
		<RootStyle>
			<Navbar onOpenSidebar={() => setOpen(true)} />
			<MHidden width="lgDown">
				<Sidebar />
			</MHidden>
			{/* <MHidden width="lgUp"> */}
			<SidebarMobile
				isOpenSidebar={open}
				onCloseSidebar={() => setOpen(false)}
			/>
			{/* </MHidden> */}
			<MainStyle>{children}</MainStyle>
		</RootStyle>
	);
}
