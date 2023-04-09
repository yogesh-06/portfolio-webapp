import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './Home.css';
// import ScrollDown from './ScrollDown';

const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: 46,
		fontWeight: 640,
		// '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
		[theme.breakpoints.up('md')]: {
			fontSize: 90,
			fontWeight: 550,
		},
	},
	subtitle: {
		fontSize: 38,
		[theme.breakpoints.up('md')]: {
			fontSize: 70,
			fontWeight: 650,
		},
	},
	summary: {
		fontSize: 17,
		[theme.breakpoints.up('md')]: {
			fontSize: 20,
			// fontWeight: 650,
		},
	},
}));

const Home = () => {
	const classes = useStyles();
	const mediumViewport = useMediaQuery('(min-width:460px)');
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [displayedLetters, setDisplayedLetters] = useState([]);

	const words = ['Web....', 'Mobile....', 'Students....', 'Everything....'];

	useEffect(() => {
		const intervalId = setInterval(() => {
			const word = words[currentWordIndex];
			const newDisplayedLetters = displayedLetters.concat(
				word[displayedLetters.length],
			);

			if (newDisplayedLetters.length === word.length) {
				clearInterval(intervalId);
				setTimeout(() => {
					const nextIndex = (currentWordIndex + 1) % words.length;
					setCurrentWordIndex(nextIndex);
					setDisplayedLetters([]);
				}, 2000);
			} else {
				setDisplayedLetters(newDisplayedLetters);
			}
		}, 150);

		return () => clearInterval(intervalId);
	}, [currentWordIndex, displayedLetters]);

	return (
		<Container
			className="home"
			id="home"
			maxWidth="xl"
			sx={{ px: { xs: 3, md: 15 }, pt: { md: 20, xs: 5 } }}
		>
			<Grid className="">
				<Typography
					variant="caption"
					sx={{
						color: (theme) => theme.palette.primary.main,
						ml: 1,
					}}
				>
					Hi, my name is
				</Typography>
				<Typography
					variant="h1"
					className={classes.title}
					sx={{
						color: '#ccd6f6',
						fontFamily: 'system-ui',
						marginTop: 2,
					}}
				>
					Pawar Yogesh.
				</Typography>
				<Typography
					className={classes.subtitle}
					variant="h2"
					sx={{
						color: '#8892b0',
						fontFamily: '-apple-system,system-ui',
					}}
				>
					I build things for the {!mediumViewport && <br />}
					{displayedLetters.map((letter, index) => (
						<span
							key={index}
							style={{ color: (theme) => theme.palette.primary.main }}
						>
							{letter}
						</span>
					))}
				</Typography>
				<Typography
					variant="body1"
					component="div"
					className={classes.summary}
					sx={{
						mt: 3,
						width: { xs: 350, md: 400, lg: 600 },
						color: '#8892b0',
						fontFamily: '-apple-system,system-ui',
					}}
				>
					I’m a software engineer specializing in building (and occasionally
					designing) exceptional digital experiences. Currently, I’m focused on
					building accessible, human-centered products at{' '}
					<span>
						<a
							href="https://www.weoto.in/"
							style={{ color: '#f59816', fontWeight: 'bold' }}
						>
							Weoto.
						</a>
					</span>
				</Typography>
				{/* <ScrollDown /> */}
				<Button
					variant="outlined"
					sx={{
						p: 2,
						px: 3,
						mt: 7,
						borderRadius: 0.7,
						border: '1.5px solid',
						'&:hover': {
							border: '1.5px solid',
						},
					}}
				>
					Check out my Linked-in!
				</Button>
			</Grid>
		</Container>
	);
};

export default Home;
