import React, { useState } from 'react';
import { Container } from '@mui/system';
import {
	Divider,
	Grid,
	Typography,
	Tabs,
	Tab,
	Box,
	useMediaQuery,
	ListItem,
	ListItemIcon,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Icon } from '@iconify/react';
import Page from '../../components/Page';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ ml: { xs: 0, md: 3 } }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

// TabPanel.propTypes = {
// 	children: PropTypes.node,
// 	index: PropTypes.number.isRequired,
// 	value: PropTypes.number.isRequired,
// };

const useStyles = makeStyles((theme) => ({
	tabLabel: {
		fontSize: 16,
		[theme.breakpoints.down('md')]: {
			fontSize: 16,
		},
	},
	summary: {
		fontSize: 16,
		[theme.breakpoints.up('md')]: {
			fontSize: 20,
		},
	},
}));

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const Experience = () => {
	const mediumViewport = useMediaQuery('(min-width:800px)');
	const [value, setValue] = useState(0);
	const classes = useStyles();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Container
			id="experience"
			maxWidth="xl"
			sx={{ px: { xs: 3, md: 15 }, py: { md: 30, xs: 15 } }}
		>
			<Page num="02." title="Where I’ve Worked" xs={50} md={300} />
			<Grid
				justifyContent="center"
				alignItems="flex-start"
				spacing={5}
				my={{ xs: 3, md: 5 }}
			>
				<Box
					sx={{
						flexGrow: 1,
						bgcolor: 'primary',
						color: '#fff',
						display: { xs: 'block', md: 'flex' },
						height: 230,
					}}
				>
					<Tabs
						orientation={mediumViewport ? 'vertical' : 'horizontal'}
						variant={mediumViewport ? '' : 'scrollable'}
						value={value}
						onChange={handleChange}
						aria-label="Vertical tabs example"
						className={classes.tabStyles}
						sx={{
							borderLeft: { xs: 0, md: '2px solid rgb(47 70 93 / 81%)' },
							borderBottom: { xs: '1px solid rgb(47 70 93 / 81%)', md: 0 },
							borderColor: 'divider',
							mb: { xs: 3, md: 0 },
						}}
					>
						<Tab
							label={<span className={classes.tabLabel}>Brittania</span>}
							{...a11yProps(0)}
						/>
						<Tab
							label={<span className={classes.tabLabel}>Haier</span>}
							{...a11yProps(1)}
						/>
						<Tab
							label={<span className={classes.tabLabel}>Weoto </span>}
							{...a11yProps(2)}
						/>
						<Tab
							label={<span className={classes.tabLabel}>Weoto </span>}
							{...a11yProps(3)}
						/>
					</Tabs>
					<TabPanel value={value} index={0}>
						<Typography
							variant="h6"
							component="div"
							className={classes.summary}
							sx={{
								fontWeight: '650',
								color: '#ccd6f6',
								fontFamily: '-apple-system,system-ui',
							}}
						>
							{' '}
							Quality Assurence @{' '}
							<span>
								<a href="http://britannia.co.in/" style={{ color: '#f59816' }}>
									Brittania Industries
								</a>
							</span>
						</Typography>
						<Typography
							color="#8892b0"
							sx={{
								fontSize: { xs: '12px', md: '16px' },
							}}
						>
							Oct 2019 - Nov 2020 <br />
							Pune, India <br />
							<br />
						</Typography>

						<Grid item xs={6} sm={6} md={4}>
							<ListItem disablePadding>
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
									Gained experience to work with them in the fields of
									Production.
								</Typography>
							</ListItem>
							<ListItem disablePadding>
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
									Gained Ideas about the food products and their shelf life.
								</Typography>
							</ListItem>
							<ListItem disablePadding>
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
									Learned the importance of timeliness and meeting deadlines.
								</Typography>
							</ListItem>
							<ListItem disablePadding>
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
									Learned executive leadership skill
								</Typography>
							</ListItem>
						</Grid>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Typography
							variant="h6"
							component="div"
							className={classes.summary}
							sx={{
								fontWeight: '650',
								color: '#ccd6f6',
								fontFamily: '-apple-system,system-ui',
							}}
						>
							{' '}
							Machine Operator @{' '}
							<span>
								<a href="http://britannia.co.in/" style={{ color: '#f59816' }}>
									Haier Appliances
								</a>
							</span>
						</Typography>
						<Typography
							color="#8892b0"
							sx={{
								fontSize: { xs: '12px', md: '16px' },
							}}
						>
							Nov 2020 - Feb 2021 <br />
							Pune, India <br />
							<br />
						</Typography>

						<Grid item xs={6} sm={6} md={4}>
							<ListItem disablePadding>
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
									Quality control: Ensured products met quality standards by
									monitoring output and identifying defects.
								</Typography>
							</ListItem>
							<ListItem disablePadding>
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
									Safety: Maintained a strong focus on safety protocols and safe
									machine operation.
								</Typography>
							</ListItem>
							<ListItem disablePadding>
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
									Efficiency: Optimized production speed, minimized waste, and
									reduced downtime.
								</Typography>
							</ListItem>
						</Grid>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Typography
							variant="h6"
							component="div"
							className={classes.summary}
							sx={{
								fontWeight: '650',
								color: '#ccd6f6',
								fontFamily: '-apple-system,system-ui',
							}}
						>
							{' '}
							Student Intern @{' '}
							<span>
								<a href="https://www.weoto.in/" style={{ color: '#f59816' }}>
									Weoto Techlabs
								</a>
							</span>
						</Typography>
						<Typography
							color="#8892b0"
							sx={{
								fontSize: { xs: '12px', md: '16px' },
							}}
						>
							Feb 2021 - Jan 2022 <br />
							Nashik, India <br />
							<br />
						</Typography>
						<Grid item xs={6} sm={6} md={4}>
							<ListItem disablePadding>
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
									Exceptional learning experience.
								</Typography>
							</ListItem>
							<ListItem disablePadding>
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
									Got opportunities to apply my knowledge and experience
									wherever possible.
								</Typography>
							</ListItem>
							<ListItem disablePadding>
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
									Learned the importance of timeliness and meeting deadlines.
								</Typography>
							</ListItem>
							<ListItem disablePadding>
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
									Collaborated in a cross-functional team of 5 interns
								</Typography>
							</ListItem>
						</Grid>
					</TabPanel>
					<TabPanel value={value} index={3}>
						<Typography
							variant="h6"
							component="div"
							className={classes.summary}
							sx={{
								fontWeight: '650',
								color: '#ccd6f6',
								fontFamily: '-apple-system,system-ui',
							}}
						>
							{' '}
							Frontend Developer @{' '}
							<span>
								<a href="https://www.weoto.in/" style={{ color: '#f59816' }}>
									Weoto Technologies
								</a>
							</span>
						</Typography>
						<Typography
							color="#8892b0"
							sx={{
								fontSize: { xs: '12px', md: '16px' },
							}}
						>
							Jan 2022 - Present <br />
							Nashik, India <br />
							<br />
						</Typography>
						<Grid item xs={6} sm={6} md={4}>
							<ListItem disablePadding>
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
									Handled special projects designated by senior developer.
								</Typography>
							</ListItem>
							<ListItem disablePadding>
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
									Managed complaints with calm, clear communication and
									problem-solving.
								</Typography>
							</ListItem>
							<ListItem disablePadding>
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
									Explored and created new ways to resolve problems with
									processes and technology.
								</Typography>
							</ListItem>
							<ListItem disablePadding>
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
									Contributed to back-end experience and collaborated on APIs.
								</Typography>
							</ListItem>
							<ListItem disablePadding>
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
									Built reusable code to utilise for other projects and to
									minimise costs.
								</Typography>
							</ListItem>
						</Grid>
					</TabPanel>
				</Box>
			</Grid>
		</Container>
	);
};

export default Experience;
