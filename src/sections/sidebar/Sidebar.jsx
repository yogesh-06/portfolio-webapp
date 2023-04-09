import React, { useState } from 'react';
// import Logo from '../../assets/logo.png';
import './Sidebar.css';

import Divider from '@mui/material/Divider';
// or
import { Icon } from '@iconify/react';
import { Grid, Link, List, ListItem, ListItemIcon } from '@mui/material';
import { styled } from '@mui/system';
// import { Icon } from '@iconify/react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { makeStyles } from '@mui/styles';
const ListItemIconStyle = styled(ListItemIcon)({
	height: 56,
	display: 'flex',
	alignItems: 'flex-end',
	justifyContent: 'center',
});

const useStyles = makeStyles((theme) => ({
	iconHover: {},
}));

const SidebarIcons = [
	{
		title: 'Github',
		color: '#7c35e2',
		icon: 'ph:github-logo-light',
		href: 'https://github.com/yogesh-06',
	},
	{
		title: 'Instagram',
		color: '#E1306C',
		icon: 'ph:instagram-logo-light',
		href: 'https://www.instagram.com/',
	},
	{
		title: 'Twitter',
		color: '#1DA1F2',
		icon: 'ph:twitter-logo-light',
		href: 'https://twitter.com/_____pathfinder',
	},
	{
		title: 'Linkedin',
		color: '#0077B5',
		icon: 'ph:linkedin-logo-light',
		href: 'https://www.linkedin.com/in/pathfinder06/',
	},
	{
		title: 'Discord',
		color: '#5865F2',
		icon: 'ph:discord-logo-light',
		href: '',
	},
];

const Sidebar = () => {
	const classes = useStyles();
	const [isHover, setIsHover] = useState(false);
	return (
		<aside className="aside">
			<a href="#home" className="nav_logo">
				{/* <img src={Logo} alt="" /> */}
			</a>

			<div className="nav_footer">
				<nav className="nav">
					<div className="nav_menu">
						<List>
							{SidebarIcons.map((item, index) => (
								<ListItem key={index} disablePadding>
									<ListItemIconStyle>
										<Link href={item.href}>
											<Grid
												className={classes.iconHover}
												sx={{
													color: '#FFF',
													pb: 0,
													transition: 'padding-bottom 0.3s ease-in-out',
													'&:hover': {
														cursor: 'pointer',
														color: item.color,
														pb: 0.8,
													},
												}}
											>
												<Icon icon={item.icon} width={30} height={30} />
											</Grid>
										</Link>
									</ListItemIconStyle>
								</ListItem>
							))}
						</List>

						<Divider
							sx={{
								marginTop: '20px',
								marginLeft: '14px',
								height: '120px',
								borderLeft: '1.3px solid #8892b0',
							}}
						/>
					</div>
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
