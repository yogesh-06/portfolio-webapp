import {
	Card,
	Grid,
	ImageList,
	ImageListItem,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { Container } from '@mui/system';
import React, { useRef, useState } from 'react';
import Cert from '../../assets/cert.jpg';
import Cert2 from '../../assets/cert2.jpg';
import Cert3 from '../../assets/cert3.png';
import Cert4 from '../../assets/cert4.png';
import Cert5 from '../../assets/cert5.jpg';
import Cert6 from '../../assets/cert6.jpg';
import Cert7 from '../../assets/udemy-cert.jpeg';
import Gdg from '../../assets/gdg.jpg';
import Hackathon from '../../assets/hackathon.jpeg';
import Swex from '../../assets/swex.jpg';
import present from '../../assets/presantation.jpg';
import { Icon } from '@iconify/react';
import { makeStyles } from '@mui/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Award from '../../assets/award.png';
import Award2 from '../../assets/award2.png';
export default function Recognition() {
	const sliderRef = useRef();
	const mediumViewport = useMediaQuery('(min-width:460px)');
	const [isHover, setHover] = useState(false);
	const [isGalleryOpen, setGalleryOpen] = useState(false);
	const ShowMore = () => {
		return (
			<Card
				onMouseEnter={() => setHover(true)}
				onMouseOut={() => setHover(false)}
				onClick={() => setGalleryOpen(!isGalleryOpen)}
				sx={{
					border: '1px solid white',
					backgroundColor: 'transparent',
					height: isGalleryOpen ? '300px' : '200px',
					width: isGalleryOpen ? '400px' : '300px',
					borderRadius: isGalleryOpen ? '0' : 'auto',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					transition: '0.3s',
					margin: '0 auto',
					alignItems: 'center',
					'&:hover': {
						backgroundColor: '#022C43',
						border: '1px solid gray',
						cursor: 'pointer',
						transition: '0.3s',
					},
				}}
			>
				<Icon
					icon="icon-park-outline:more-app"
					height={isHover ? 36 : 32}
					width={isHover ? 36 : 32}
					color="orange"
				/>
				<Typography
					variant={isHover ? 'h4' : 'h5'}
					transition="0.5s"
					color={!isHover ? 'gray' : '#8892b0'}
					// fontFamily="-apple-system,system-ui"
					sx={{
						mt: 2,
					}}
				>
					{isGalleryOpen ? 'See Less' : 'See More'}
				</Typography>
			</Card>
		);
	};

	const awards = [
		Cert,
		Cert2,
		Award,
		Award2,
		Cert7,
		Cert3,
		Cert5,
		Cert6,
		Cert4,
	];
	const Images = [
		Cert,
		Cert2,
		Award,
		Award2,
		Cert7,
		Cert3,
		Cert5,
		Cert6,
		Cert4,
		Swex,
		present,
		Hackathon,
		Gdg,
	];

	const settings = {
		// dots: true,
		infinite: false,
		draggable: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		useTransform: false,
		autoplay: false,
		speed: 1200,
		pauseOnHover: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};

	return (
		<>
			<Container
				id="recognition"
				maxWidth="xl"
				sx={{
					px: { xs: 3, md: 15 },
					pt: { md: 15, xs: 12 },
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
					Awards and achievements
				</Typography>
				<Grid mt={5} sx={{ display: isGalleryOpen && 'none' }}>
					<Slider {...settings} ref={sliderRef}>
						{awards.map((award, index) => {
							return (
								<Grid key={index}>
									<img
										src={award}
										style={{
											height: '200px',
											objectFit: 'cover',
											margin: '0 auto',
											border: '0.5px solid white',
										}}
									/>
								</Grid>
							);
						})}
						<ShowMore />
					</Slider>
				</Grid>
			</Container>
			<Grid mt={5} sx={{ display: !isGalleryOpen && 'none' }}>
				<ImageList
					sx={{ width: { sm: 400, lg: 1200 }, height: 500 }}
					cols={!mediumViewport ? 1 : 3}
					rowHeight={300}
					gap={15}
				>
					{Images.map((item, index) => (
						<ImageListItem key={index}>
							<img
								src={item}
								style={{
									height: '200px',
									objectFit: 'fill',
									margin: '0 auto',
									border: '0.5px solid white',
								}}
							/>
						</ImageListItem>
					))}
					<ImageListItem>
						<ShowMore />
					</ImageListItem>
				</ImageList>
			</Grid>
		</>
	);
}
