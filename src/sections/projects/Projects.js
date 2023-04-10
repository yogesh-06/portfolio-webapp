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

import kb1 from '../../assets/kb1.png';
import kb2 from '../../assets/kb2.png';
import kb3 from '../../assets/kb3.png';
import kb4 from '../../assets/kb4.png';
import kb5 from '../../assets/kb5.png';

import bmi1 from '../../assets/bmi1.png';
import bmi2 from '../../assets/bmi2.png';
import bmi3 from '../../assets/bmi3.png';
import bmi4 from '../../assets/bmi4.png';
import bmi5 from '../../assets/bmi5.png';

import wildvine1 from '../../assets/wildvine1.png';
import wildvine2 from '../../assets/wildvine2.png';
import wildvine3 from '../../assets/wildvine3.png';
import wildvine4 from '../../assets/wildvine4.png';

import nexus1 from '../../assets/nexus1.png';
import nexus2 from '../../assets/nexus2.png';
import nexus3 from '../../assets/nexus3.png';
import nexus4 from '../../assets/nexus4.png';

import portend from '../../assets/portend.png';
import portend1 from '../../assets/portend1.png';
import portend2 from '../../assets/portend2.png';
import portend3 from '../../assets/portend3.png';
import portend4 from '../../assets/portend4.png';

import meta1 from '../../assets/meta1.png';
import meta2 from '../../assets/meta2.png';
import meta3 from '../../assets/meta3.png';
import meta4 from '../../assets/meta4.png';
import meta5 from '../../assets/meta5.png';
import meta6 from '../../assets/meta6.png';

import Page from '../../components/Page.js';
import ProjectCard from './ProjectCard.js';

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
		gitrepo: '',
		livedemo: '',
	},
	{
		id: 1,
		title: 'Nexus',
		desc: 'Nexus is a website administrator is a technical professional who maintains websites. Website administrators typically have a thorough knowledge of web maintenance and web development that help a website function, as well as skills in front-end development that contribute to a websites appearance and usability.',
		images: [nexus1, nexus2, nexus3, nexus4],
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
		gitrepo: 'https://github.com/swapnil-archway/NexusUI',
		livedemo: 'https://dev-app.portend.io/availability',
	},
	{
		id: 1,
		title: 'Nexus Portend',
		desc: 'Nexus is a website administrator is a technical professional who maintains websites. Website administrators typically have a thorough knowledge of web maintenance and web development that help a website function, as well as skills in front-end development that contribute to a websites appearance and usability.',
		images: [portend, portend1, portend2, portend3, portend4],
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
		gitrepo: 'https://github.com/swapnil-archway/NexusUI',
		livedemo: 'https://dev-nexus.portend.io/news',
	},
	{
		id: 1,
		title: 'KisanBuddy',
		desc: 'KisanBuddy.in appears to be an online marketplace for agricultural products and services in India. It allows farmers to connect with potential buyers and suppliers of various agricultural inputs, such as seeds, fertilizers, and machinery. In short, KisanBuddy.in aims to simplify the agricultural supply chain and provide farmers with the tools and resources they need to succeed.',
		images: [kb1, kb2, kb3, kb4, kb5],
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
		gitrepo: 'https://localhost:3000',
		livedemo: 'https://github.com/yogesh-06/project_metaverse-main',
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
				return <ProjectCard project={project} index={index} />;
			})}
		</Container>
	);
};

export default Projects;
