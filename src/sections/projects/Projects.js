import { Box, Container } from '@mui/system';
import React from 'react';

import bmi1 from '../../assets/bmi1.png';
import bmi2 from '../../assets/bmi2.png';
import bmi3 from '../../assets/bmi3.png';
import bmi4 from '../../assets/bmi4.png';
import bmi5 from '../../assets/bmi5.png';

import wildvine1 from '../../assets/wildvine1.png';
import wildvine2 from '../../assets/wildvine2.png';
import wildvine3 from '../../assets/wildvine3.png';
import wildvine4 from '../../assets/wildvine4.png';

import meta1 from '../../assets/meta1.png';
import meta2 from '../../assets/meta2.png';
import meta3 from '../../assets/meta3.png';
import meta4 from '../../assets/meta4.png';
import meta5 from '../../assets/meta5.png';
import meta6 from '../../assets/meta6.png';

import Page from '../../components/Page.js';
import ProjectCard from './ProjectCard.js';
import { Typography } from '@mui/material';
import ProjectArchiveCard from './ProjectArchiveCard';

const projects = [
	{
		id: 0,
		title: 'BMI Calculator',
		desc: 'This is a BMI (Body Mass Index) calculator website. It allows you to calculate your BMI by entering your weight and height, and it displays the result along with a visual representation of the BMI ranges.',
		images: [bmi1, bmi2, bmi3, bmi4, bmi5],
		technologies: [
			{
				title: 'Javascript (ES6+)',
				icon: 'skill-icons:javascript',
			},
			{
				title: 'React-JS',
				icon: 'vscode-icons:file-type-reactjs',
			},
			{
				title: 'Bootstrap',
				icon: 'logos:bootstrap',
			},
		],
		gitrepo: 'https://github.com/yogesh-06/BMICalculator',
		livedemo: 'https://yogesh-06.github.io/BMICalculator/',
	},
	{
		id: 3,
		title: 'Metaversus',
		desc: 'Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like its really real, you can feel what you feel in this metaverse world, because this is really the madness of the metaverse of today, using only VR devices you can easily explore the metaverse world you want, turn your dreams into reality.',
		images: [meta1, meta2, meta3, meta4, meta5, meta6],
		technologies: [
			{
				title: 'Javascript (ES6+)',
				icon: 'skill-icons:javascript',
			},
			{
				title: 'React-JS',
				icon: 'vscode-icons:file-type-reactjs',
			},
			{
				title: 'Material UI',
				icon: 'logos:material-ui',
			},
			{
				title: 'Tailwind',
				icon: 'vscode-icons:file-type-tailwind',
			},
		],
		gitrepo: 'https://github.com/yogesh-06/project_metaverse-main',
		livedemo: 'https://project-metaverse-main-yogesh-06.vercel.app/',
	},
	{
		id: 2,
		title: 'Wildvine',
		desc: 'website raises funds for wildlife conservation. Help us protect endangered species and their habitats by donating today.',
		images: [wildvine1, wildvine2, wildvine3, wildvine4],
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
		gitrepo: 'https://github.com/yogesh-06/wildvine-master',
		livedemo: 'https://yogesh-06.github.io/wildvine-master/',
	},
];

const Projects = () => {
	return (
		<Container
			id="work"
			maxWidth="xl"
			sx={{ px: { xs: 3, md: 15 }, pt: { md: 12, xs: 0 } }}
		>
			<Page num="03." title="Things I’ve Built" xs={80} md={300} />
			{projects.map((project, index) => {
				return <ProjectCard key={index} project={project} index={index} />;
			})}
			<Box
				sx={{
					mt: 12,
				}}
			>
				<Typography
					variant="h4"
					sx={{
						display: 'flex',
						justifyContent: 'center',
						fontFamily: '-apple-system, system-ui',
						color: '#fff',
						'&:hover': {
							cursor: 'pointer',
						},
					}}
				>
					Other Noteworthy Projects
				</Typography>
				<Typography
					variant="body2"
					sx={{
						display: 'flex',
						justifyContent: 'center',
						color: (theme) => theme.palette.primary.main,
					}}
				>
					view the archive
				</Typography>
			</Box>
			<ProjectArchiveCard />
		</Container>
	);
};

export default Projects;
