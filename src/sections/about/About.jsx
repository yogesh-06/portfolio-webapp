import { Icon } from '@iconify/react';
import { Grid, ListItem, ListItemIcon, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/system';
import React from 'react';
import Profile from '../../assets/profile.jpg';
import Page from '../../components/Page';
import './About.css';

const useStyles = makeStyles((theme) => ({
	summary: {
		fontSize: 16,
		[theme.breakpoints.up('md')]: {
			fontSize: 20,
		},
	},
	profileImage: {
		width: 300,
		height: 300,
		[theme.breakpoints.up('md')]: {
			width: 350,
			height: 350,
		},
	},
	imageBorder: {
		width: 300,
		height: 300,
		[theme.breakpoints.up('md')]: {
			width: 350,
			height: 350,
		},
	},
}));

const technologies = [
	{
		title: 'JS (ES6+)',
		icon: 'skill-icons:javascript',
	},
	{
		title: 'Redux',
		icon: 'logos:redux',
	},
	{
		title: 'StoryBook',
		icon: 'vscode-icons:file-type-storybook',
	},
	{
		title: 'React-JS',
		icon: 'vscode-icons:file-type-reactjs',
	},
	{
		title: 'Next-JS',
		icon: 'logos:nextjs',
		color: '#fff',
	},
	{
		title: 'Node-JS',
		icon: 'logos:nodejs',
	},
	{
		title: 'React Native',
		icon: 'logos:android-vertical',
	},
	{
		title: 'MongoDB',
		icon: 'logos:mongodb-icon',
	},
	{
		title: 'Git',
		icon: 'logos:git-icon',
	},
	{
		title: 'Bootstrap',
		icon: 'logos:bootstrap',
	},
	{
		title: 'Tailwind',
		icon: 'vscode-icons:file-type-tailwind',
	},
	{
		title: 'Material UI',
		icon: 'logos:material-ui',
	},
];

const About = () => {
	const classes = useStyles();
	return (
		<Container
			className=""
			id="about"
			maxWidth="xl"
			sx={{ px: { xs: 3, md: 15 }, pt: { md: 12, xs: 0 } }}
		>
			<Page num="01." title="About Me" xs={150} md={300} />
			<Grid
				container
				justifyContent="center"
				alignItems="flex-start"
				spacing={5}
			>
				<Grid item xs={12} md={7} lg={7}>
					<Typography
						variant="body1"
						component="div"
						className={classes.summary}
						sx={{
							mt: 3,
							width: { md: 400, lg: 700 },
							color: '#8892b0',
							fontFamily: '-apple-system,system-ui',
						}}
					>
						Hello! My name is Yogesh and I'm a React Developer with over 2 years
						of experience building scalable and user-friendly web applications.
						I'm passionate about creating responsive and functional interfaces
						using React, Redux, and other modern web technologies.
						<br /> <br /> As a freelancer, I also offer freelance services to
						college students to get their projects ready asap. I'm passionate
						about helping students turn their ideas into functional projects
						that meet their requirements and exceed their expectations.
						<br /> <br /> My main focus these days is building accessible,
						inclusive products and digital experiences at{' '}
						<span>
							<a
								href="https://www.weoto.in/"
								style={{ color: '#f59816', fontWeight: 'bold' }}
							>
								Weoto{' '}
							</a>
						</span>
						for a variety of clients.
						<br /> <br /> Here are a few technologies I’ve been working with
						recently:
					</Typography>

					<Grid
						container
						spacing={1}
						marginTop={2.5}
						// justifyContent="center"
						// alignItems="center"
					>
						{technologies.map((item, index) => {
							const { title } = item;
							return (
								<Grid item xs={4} sm={6} md={4}>
									<ListItem key={index} disablePadding>
										<ListItemIcon>
											<Icon
												icon="material-symbols:play-arrow-outline"
												width={18}
												height={18}
												color="#f59816"
											/>
										</ListItemIcon>
										<Typography
											color="#8892b0"
											sx={{
												fontSize: { xs: '12px', md: '16px' },
											}}
										>
											{title}
										</Typography>
									</ListItem>
								</Grid>
							);
						})}
					</Grid>
				</Grid>
				<Grid item xs={12} md={4} lg={5} sx={{ mt: { md: 5 }, p: 0 }}>
					<Grid container className="content" sx={{ margin: 'auto' }}>
						<Grid className="imgOverlay"></Grid>
						<img
							src={Profile}
							alt="Profile"
							width={350}
							height={350}
							style={{
								zIndex: 1,
								borderRadius: '5px',
							}}
						/>

						<Grid
							className="border"
							borderRadius="5px"
							position="relative"
							top={-330}
							left={22}
							border="3px solid #f59816"
							width={350}
							height={350}
						></Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default About;
