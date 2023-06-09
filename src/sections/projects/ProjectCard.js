import {
	Button,
	Card,
	Divider,
	Grid,
	Link,
	ListItem,
	ListItemIcon,
	Tooltip,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import ImageCarousel from '../../components/imageCarousel/ImageCarousel.js';

import { Icon } from '@iconify/react';

const useStyles = makeStyles((theme) => ({
	summary: {
		fontSize: 16,
		[theme.breakpoints.up('md')]: {
			fontSize: 20,
		},
	},
	cardStyle: {
		borderRadius: 3,
		marginTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		height: 200,
		background: '#112240',
		[theme.breakpoints.up('md')]: {
			marginTop: 10,
			width: 700,
			height: 150,
			marginLeft: -500,
		},
	},
	rightCardStyle: {
		borderRadius: 3,
		marginTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		height: 330,
		background: '#112240',
		zIndex: 200,
		[theme.breakpoints.up('md')]: {
			marginTop: 10,
			width: 730,
			height: 180,
			marginRight: -500,
		},
	},
}));

const ProjectCard = ({ project, index }) => {
	const classes = useStyles();
	const { title, desc, images, technologies, gitrepo, livedemo } = project;
	const isLeft = index % 2 === 0;
	return (
		<>
			<Grid
				container
				justifyContent="space-around"
				alignItems="center"
				spacing={5}
				sx={{ my: 4 }}
			>
				{isLeft && (
					<Grid
						item
						xs={12}
						md={4}
						lg={5}
						display={{ xs: 'none', md: 'block' }}
					>
						<ImageCarousel imgs={images} />
					</Grid>
				)}
				<Grid item xs={12} md={4} lg={4}>
					<Grid
						container
						direction="column"
						justifyContent="end"
						alignItems={{
							xs: 'flex-start',
							md: isLeft ? 'flex-end' : 'flex-start',
						}}
					>
						<Typography
							variant="caption"
							sx={{
								color: (theme) => theme.palette.primary.main,
							}}
						>
							Featured Project
						</Typography>
						<Typography
							variant="h3"
							sx={{
								fontWeight: '650',
								color: '#ccd6f6',
								fontFamily: '-apple-system,system-ui',
							}}
						>
							{title}
						</Typography>
						<Card
							className={isLeft ? classes.cardStyle : classes.rightCardStyle}
							// sx={{ width: 1000, height: 200, ml: -100 }}
						>
							<Typography
								variant="body1"
								component="div"
								className={classes.summary}
								sx={{
									my: 2,
									color: '#8892b0',
									fontFamily: '-apple-system,system-ui',
									textAlign: { xs: 'left', md: 'right' },
								}}
							>
								{desc}
							</Typography>
						</Card>

						<Grid
							container
							marginTop={{ md: 3, xs: -5 }}
							marginLeft={!isLeft && 2}
							justifyContent={isLeft ? 'flex-end' : 'flex-start'}
							alignItems="center"
							zIndex={201}
						>
							{technologies.map((item, index) => {
								const { title, icon } = item;
								return (
									<Grid item xs={2} sm={2} md={2}>
										<ListItem key={index} disablePadding>
											<ListItemIcon>
												<Tooltip title={title}>
													<Icon
														icon={icon}
														width={28}
														height={28}
														color="#f59816"
													/>
												</Tooltip>
											</ListItemIcon>
										</ListItem>
									</Grid>
								);
							})}
						</Grid>
						<Divider
							sx={{
								mt: 3,
								ml: isLeft && -90,
								// mr: !isLeft && 90,
								width: 600,
								border: '1.1px solid rgb(47 70 93 / 81%)',
							}}
						/>
						<Grid
							container
							display="flex"
							justifyContent={{
								xs: 'center',
								md: isLeft ? 'flex-end' : 'flex-start',
							}}
							alignItems="center"
							sx={{ mt: 3 }}
							gap={3}
						>
							<Link href={gitrepo} target="_blank" underline="none">
								<Button variant="outlined">Github Repo</Button>
							</Link>
							<Link href={livedemo} target="_blank" underline="none">
								<Button variant="outlined">Live Demo</Button>
							</Link>
						</Grid>
					</Grid>
				</Grid>
				{!isLeft && (
					<Grid
						item
						xs={12}
						md={4}
						lg={5}
						display={{ xs: 'none', md: 'block' }}
					>
						<ImageCarousel imgs={images} />
					</Grid>
				)}
			</Grid>
		</>
	);
};

export default ProjectCard;
