import {
	Box,
	Divider,
	Drawer,
	Link,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
// material
import { useEffect } from 'react';
// components

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 330;

const useStyles = makeStyles((theme) => ({}));

const RootStyle = styled('div')(({ theme }) => ({
	[theme.breakpoints.up('lg')]: {
		flexShrink: 0,
		width: 290,
	},
}));

// ----------------------------------------------------------------------

export default function SidebarMobile({ isOpenSidebar, onCloseSidebar }) {
	const sideItems = [
		{
			id: '#about',
			number: '01',
			title: 'About',
		},
		{
			id: '#experience',
			number: '02',
			title: 'Experience',
		},
		{
			id: '#work',
			number: '03',
			title: 'Work',
		},
		{
			id: '#contact',
			number: '04',
			title: 'Contact',
		},
	];

	const renderContent = sideItems.map(({ id, number, title, index }) => (
		<>
			<Divider sx={{ mb: 2.5 }} />
			<Typography
				sx={{
					borderRadius: 1,
					minHeight: 52,
					px: 1,
					display: 'flex',
					fontFamily: 'monospace',
				}}
			>
				<Box
					sx={{
						mr: 0.8,
						color: (theme) => theme.palette.primary.main,
					}}
				>
					{number}.
				</Box>
				<Link href={id} underline="none" onClick={onCloseSidebar}>
					{title}
				</Link>
			</Typography>
		</>
	));

	return (
		<>
			<div style={{ width: '0px' }}>
				<RootStyle>
					{/* <MHidden width="lgUp"> */}
					<Drawer
						open={isOpenSidebar}
						onClose={onCloseSidebar}
						PaperProps={{
							sx: {
								width: DRAWER_WIDTH,
								background: '#112240',
								boxShadow: 'none',
							},
						}}
					>
						{renderContent}
					</Drawer>
					{/* </MHidden> */}
				</RootStyle>
			</div>
		</>
	);
}
