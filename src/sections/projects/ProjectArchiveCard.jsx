import { Icon } from '@iconify/react';
import {
	Card,
	Grid,
	Link,
	ListItem,
	ListItemIcon,
	Tooltip,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	cardStyle: {
		borderRadius: 3,
		padding: 20,
		height: 330,
		background: '#112240',
		[theme.breakpoints.up('md')]: {
			width: 350,
			height: 330,
		},
	},
}));

const projects = [
	{
		title: 'KisanBuddy',
		desc: 'Aims to simplify the agricultural supply chain and provide farmers with the tools and resources they need to succeed.',
		technologies: [
			{
				title: 'Javascript (ES6+)',
				icon: 'skill-icons:javascript',
			},
			{
				title: 'Redux',
				icon: 'logos:redux',
			},
			{
				title: 'React-JS',
				icon: 'vscode-icons:file-type-reactjs',
			},
			{
				title: 'Node-JS',
				icon: 'logos:nodejs',
			},
			{
				title: 'MongoDB',
				icon: 'logos:mongodb-icon',
			},
			{
				title: 'Material UI',
				icon: 'logos:material-ui',
			},
		],
		gitrepo: '',
		livedemo: '',
	},
	{
		title: 'Time to have more fun!',
		desc: 'A single page web app for helping me to choose where to travel, built with Next-js, Firebase and Tailwind css.',
		githubRepo: 'https://github.com/bchiang7/time-to-have-more-fun',
		liveDemo: 'https://time-to-have-more-fun.vercel.app/',
		technologies: [
			{
				title: 'Next-JS',
				icon: 'file-icons:nextjs',
			},
			{
				title: 'Firebase',
				icon: 'logos:bootstrap',
			},
			{
				title: 'Tailwind css',
				icon: 'vscode-icons:file-type-tailwind',
			},
		],
	},
	{
		title: 'AirBNB clone',
		desc: 'A clone of vacation rental company AirBNB built for final year college project. Used technologies: Next-js, MongoDB and Tailwind css.',
		githubRepo: 'https://github.com/yogesh-06/airbnb-clone',
		liveDemo: '',
		technologies: [
			{
				title: 'Typescript',
				icon: 'devicon:typescript',
			},
			{
				title: 'Next-JS',
				icon: 'file-icons:nextjs',
			},
			{
				title: 'MongoDB',
				icon: 'logos:mongodb-icon',
			},
			{
				title: 'Tailwind css',
				icon: 'vscode-icons:file-type-tailwind',
			},
			{
				title: 'Git',
				icon: 'logos:git-icon',
			},
		],
	},

	{
		title: 'Currency converter',
		desc: 'A fast and intuitive web app built with JavaScript and Bootstrap for seamless currency conversion.',
		githubRepo: 'https://github.com/yogesh-06/currencyConverter',
		liveDemo: 'https://yogesh-06.github.io/currencyConverter/',
		technologies: [
			{
				title: 'Javascript (ES6+)',
				icon: 'skill-icons:javascript',
			},
			{
				title: 'Bootstrap',
				icon: 'logos:bootstrap',
			},
			{
				title: 'Git',
				icon: 'logos:git-icon',
			},
		],
	},
	{
		title: 'Snake Game',
		desc: 'Classic arcade game where you control a growing snake, aiming to eat food and avoid collision in a limited space.',
		githubRepo: 'https://github.com/yogesh-06/TicTacToe/',
		liveDemo: 'https://yogesh-06.github.io/TicTacToe/',
		technologies: [
			{
				title: 'Javascript (ES6+)',
				icon: 'skill-icons:javascript',
			},
			{
				title: 'Git',
				icon: 'logos:git-icon',
			},
		],
	},
	{
		title: 'Tic Tac Toe',
		desc: 'Engage in a classic game of strategy and skill. Play against friends or challenge the computer in this timeless battle for victory.',
		githubRepo: 'https://github.com/yogesh-06/SnakeGame/',
		liveDemo: 'https://yogesh-06.github.io/SnakeGame/',
		technologies: [
			{
				title: 'Javascript (ES6+)',
				icon: 'skill-icons:javascript',
			},
			{
				title: 'Git',
				icon: 'logos:git-icon',
			},
		],
	},
	{
		title: 'To Do List app',
		desc: 'Streamline your daily tasks with this app. Stay organized, prioritize tasks, and track progress effortlessly and achieve your goals with ease.',
		githubRepo: 'https://github.com/yogesh-06/Simple-to-do-list',
		liveDemo: 'https://yogesh-06.github.io/Simple-to-do-list/',
		technologies: [
			{
				title: 'Javascript (ES6+)',
				icon: 'skill-icons:javascript',
			},
			{
				title: 'Bootstrap',
				icon: 'logos:bootstrap',
			},
			{
				title: 'Git',
				icon: 'logos:git-icon',
			},
		],
	},
];

function ProjectArchiveCard() {
	const classes = useStyles();
	return (
		<Grid container spacing={2} sx={{ px: { xs: 3, sm: 3, md: 12 } }} mt={2}>
			{projects.map((project, index) => {
				return (
					<Grid
						key={index}
						display="flex"
						justifyContent="center"
						item
						xs={12}
						md={4}
						lg={4}
					>
						<Card className={classes.cardStyle}>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<Icon
									icon="ph:folder-simple-light"
									width={52}
									height={52}
									color="#f59816"
								/>
								<div>
									{project.githubRepo && (
										<Link
											target="_blank"
											href={project.githubRepo}
											sx={{
												mr: 1,
												color: 'gray',
												'&:hover': {
													color: '#f59816',
													transition: '0.2s',
												},
											}}
										>
											<Icon icon="iconoir:github" width={22} height={22} />
										</Link>
									)}
									{project.liveDemo && (
										<Link
											target="_blank"
											href={project.liveDemo}
											sx={{
												color: 'gray',
												'&:hover': {
													color: '#f59816',
													transition: '0.2s',
												},
											}}
										>
											<Icon
												icon="fluent:open-20-regular"
												width={24}
												height={24}
											/>
										</Link>
									)}
								</div>
							</Box>
							<Box sx={{ my: 2 }}>
								<Typography
									variant="h4"
									sx={{
										mb: 1,
										fontWeight: '650',
										color: '#ccd6f6',
										fontFamily: '-apple-system,system-ui',
									}}
								>
									{project.title}
								</Typography>
								<Typography
									variant="caption1"
									component="div"
									className={classes.summary}
									sx={{
										mb: 5,
										color: '#8892b0',
										fontFamily: '-apple-system,system-ui',
									}}
								>
									{project.desc}
								</Typography>

								<Grid container justifyContent="flex-start" alignItems="center">
									{project.technologies.map((item, index) => {
										const { title, icon } = item;
										return (
											<Grid key={index} item xs={2} sm={2} md={2}>
												<ListItem disablePadding>
													<ListItemIcon>
														<Tooltip title={title}>
															<Icon
																icon={icon}
																width={28}
																height={28}
																color="gray"
															/>
														</Tooltip>
													</ListItemIcon>
												</ListItem>
											</Grid>
										);
									})}
								</Grid>
							</Box>
						</Card>
					</Grid>
				);
			})}
		</Grid>
	);
}

export default ProjectArchiveCard;
