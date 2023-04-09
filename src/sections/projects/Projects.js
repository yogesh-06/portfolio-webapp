import {
	Button,
	Card,
	Divider,
	Grid,
	ListItem,
	ListItemIcon,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/system';
import React from 'react';
import ImageCarousel from '../../components/imageCarousel/ImageCarousel.js';
import work1 from '../../assets/work-1.svg';
import work2 from '../../assets/work-2.svg';
import work3 from '../../assets/work-3.svg';
import work4 from '../../assets/project1.png';

import { Icon } from '@iconify/react';
import Page from '../../components/Page.js';
import ProjectCard from './ProjectCard.js';

const projects = [
	{
		title: 'BMI Calculator',
		desc: 'This is a BMI (Body Mass Index) calculator website. It allows you to calculate your BMI by entering your weight and height, and it displays the result along with a visual representation of the BMI ranges.',
		images: [work1, work2, work3, work4],
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
		gitrepo: '',
		livedemo: '',
	},
	{
		title: 'KisanBuddy',
		desc: 'KisanBuddy.in appears to be an online marketplace for agricultural products and services in India. It allows farmers to connect with potential buyers and suppliers of various agricultural inputs, such as seeds, fertilizers, and machinery. In short, KisanBuddy.in aims to simplify the agricultural supply chain and provide farmers with the tools and resources they need to succeed.',
		images: [work1, work2, work3, work4],
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
		livedemo: 'kisanbuddy.in',
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
				// console.log('project=>', project);
				return <ProjectCard project={project} index={index} />;
			})}
		</Container>
	);
};

export default Projects;
