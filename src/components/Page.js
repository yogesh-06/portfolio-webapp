import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';

const Page = ({ num, title, xs, md }) => {
	return (
		<Grid sx={{ display: 'flex', alignItems: 'center' }}>
			<Typography
				variant="h3"
				sx={{
					mr: 1,
					fontWeight: 300,
					color: (theme) => theme.palette.primary.main,
				}}
			>
				{num}
			</Typography>
			<Typography
				variant="h3"
				sx={{
					display: 'flex',
					fontFamily: '-apple-system, system-ui',
					color: '#fff',
					'&:hover': {
						cursor: 'pointer',
					},
				}}
			>
				{title}
			</Typography>
			<Divider
				sx={{
					mt: 1,
					ml: { xs: '15px', md: '20px' },
					width: { xs: xs, md: md },
					border: '1.1px solid rgb(47 70 93 / 81%)',
				}}
			/>
		</Grid>
	);
};

export default Page;
