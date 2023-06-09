import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	title: {
		fontSize: 42,
		fontWeight: 640,
		// '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
		[theme.breakpoints.up('md')]: {
			fontSize: 90,
			fontWeight: 550,
		},
	},
	subtitle: {
		// fontSize: 35,
		[theme.breakpoints.up('md')]: {
			// fontSize: 70,
			fontWeight: 650,
		},
	},
	summary: {
		fontSize: 16,
		[theme.breakpoints.up('md')]: {
			fontSize: 20,
			// fontWeight: 650,
		},
	},
	textfield: {
		fontFamily: '-apple-system,system-ui',
		color: '#fff',
		fontSize: 18,
		[theme.breakpoints.up('md')]: {
			fontSize: 20,
			// fontWeight: 650,
		},
	},
}));

const ContactForm = () => {
	const classes = useStyles();

	return (
		<form
			action="https://formsubmit.co/2eb9226bf7d806f79c7fc0c21dfb99dd"
			method="POST"
		>
			<Grid container spacing={1}>
				<input type="hidden" name="_subject" value="New e-mail!" />
				{/* <input type="hidden" name="_captcha" value="false" /> */}
				<Grid item xs={12} marginTop={2} md={12} sm={12}>
					<TextField
						required
						name="name"
						type="text"
						fullWidth
						label="Full Name"
						variant="filled"
						InputProps={{
							classes: {
								input: classes.textfield,
							},
						}}
					/>
				</Grid>
				<Grid item xs={12} marginTop={2} md={6} sm={12}>
					<TextField
						required
						type="email"
						fullWidth
						name="email"
						label="E-mail"
						variant="filled"
						InputProps={{
							classes: {
								input: classes.textfield,
							},
						}}
					/>
				</Grid>
				<Grid item xs={12} marginTop={2} md={6} sm={12}>
					<TextField
						required
						fullWidth
						type="number"
						name="phoneNumber"
						label="Phone No."
						variant="filled"
						max="10"
						pattern="[1-9]{1}[0-9]{9}"
						InputProps={{
							classes: {
								input: classes.textfield,
							},
						}}
					/>
				</Grid>
				<input
					type="hidden"
					name="_next"
					value="https://yogesh-06.github.io/portfolio-webapp/#contact"
				/>
				<input
					type="hidden"
					name="_autoresponse"
					value="Thank you for connect with me!"
				/>
				<input type="hidden" name="_template" value="table" />

				<Grid item xs={12} marginTop={2} md={12} sm={12}>
					<TextField
						type="text"
						fullWidth
						name="message"
						label="Message"
						variant="filled"
						InputProps={{
							classes: {
								input: classes.textfield,
							},
						}}
					/>
				</Grid>
				<Grid item xs={12} marginTop={1} md={12} sm={12} textAlign="end">
					<Button
						sx={{ width: '50%', fontFamily: 'system-ui', fontSize: 20 }}
						variant="outlined"
						type="submit"
						loading
					>
						Submit
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default ContactForm;
