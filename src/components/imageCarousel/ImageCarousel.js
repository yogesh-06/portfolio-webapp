import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useState, useRef, useEffect } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
//
import React from 'react';
import CarouselArrowIndex from '../imageCarousel/CarouselArrowIndex.js';
import Image from '../image/Image.js';

// ----------------------------------------------------------------------

const THUMB_SIZE = 54;

const RootStyle = styled('div')(({ theme }) => ({
	'& .slick-slide': {
		float: theme.direction === 'rtl' ? 'right' : 'left',
		'&:focus': { outline: 'none' },
	},
}));

// ----------------------------------------------------------------------

ImageCarousel.propTypes = {
	product: PropTypes.shape({
		images: PropTypes.arrayOf(PropTypes.string),
	}),
};

export default function ImageCarousel({ imgs }) {
	const [openLightbox, setOpenLightbox] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [photoIndex, setPhotoIndex] = useState(currentIndex);

	const [nav1, setNav1] = useState();

	const [nav2, setNav2] = useState();

	const slider1 = useRef(null);

	const slider2 = useRef(null);

	const imagesLightbox = imgs?.map((_image) => _image);

	const settings1 = {
		dots: false,
		arrows: false,
		slidesToShow: 1,
		draggable: false,
		slidesToScroll: 1,
		adaptiveHeight: true,
		beforeChange: (current, next) => setCurrentIndex(next),
		swipeToSlide: true,
	};

	const settings2 = {
		dots: false,
		arrows: false,
		centerMode: true,
		swipeToSlide: true,
		focusOnSelect: true,
		variableWidth: true,
		centerPadding: '0px',
		slidesToShow: imgs?.length > 3 ? 3 : imgs?.length,
		swipeToSlide: true,
	};

	useEffect(() => {
		if (slider1.current) {
			setNav1(slider1.current);
		}
		if (slider2.current) {
			setNav2(slider2.current);
		}
	}, []);

	const handlePrevious = () => {
		slider2.current?.slickPrev();
	};

	const handleNext = () => {
		slider2.current?.slickNext();
	};

	const handleClose = () => {
		setOpenLightbox(false);
		setPhotoIndex(0);
	};

	return (
		<RootStyle>
			<Box sx={{ p: 1 }}>
				<Box
					sx={{
						zIndex: 0,
						borderRadius: 2,
						overflow: 'hidden',
						position: 'relative',
					}}
				>
					<Slider {...settings1} asNavFor={nav2} ref={slider1}>
						{imgs?.map((img) => (
							<Image
								key={img}
								alt="large image"
								src={img}
								ratio="1/1"
								onClick={() => setOpenLightbox(true)}
								sx={{ cursor: 'zoom-in' }}
							/>
						))}
					</Slider>
					<CarouselArrowIndex
						index={currentIndex}
						total={imgs?.length}
						onNext={handleNext}
						onPrevious={handlePrevious}
					/>
				</Box>
			</Box>

			<Box
				sx={{
					mx: 'auto',
					'& .slick-current .isActive': { opacity: 1 },
					...(imgs?.length === 1 && { maxWidth: THUMB_SIZE * 1 + 16 }),
					...(imgs?.length === 2 && { maxWidth: THUMB_SIZE * 2 + 32 }),
					...(imgs?.length === 3 && { maxWidth: THUMB_SIZE * 3 + 48 }),
					...(imgs?.length === 4 && { maxWidth: THUMB_SIZE * 3 + 48 }),
					...(imgs?.length >= 5 && { maxWidth: THUMB_SIZE * 6 }),
					...(imgs?.length > 2 && {
						position: 'relative',
						'&:before, &:after': {
							top: 0,
							zIndex: 9,
							content: "''",
							height: '100%',
							position: 'absolute',
							width: (THUMB_SIZE * 2) / 3,
							backgroundImage: (theme) =>
								`linear-gradient(to left, ${alpha(
									theme.palette.background.paper,
									0,
								)} 0%, ${theme.palette.background.paper} 100%)`,
						},
						'&:after': { right: 0, transform: 'scaleX(-1)' },
					}),
				}}
			>
				<Slider {...settings2} asNavFor={nav1} ref={slider2}>
					{imgs?.map((img, index) => (
						<Box
							key={img}
							sx={{ px: 0.75 }}
							onClick={() => {
								setPhotoIndex(index);
							}}
						>
							{/* <Image
								disabledEffect
								alt="thumb image"
								src={img}
								sx={{
									width: THUMB_SIZE,
									height: THUMB_SIZE,
									borderRadius: 1.5,
									cursor: 'pointer',
									...(currentIndex === index && {
										border: (theme) =>
											`solid 3px ${theme.palette.primary.main}`,
									}),
								}}
							/> */}
						</Box>
					))}
				</Slider>
			</Box>
		</RootStyle>
	);
}
