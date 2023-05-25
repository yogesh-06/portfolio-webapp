import {
	AppBar,
	Box,
	Button,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from '@mui/material';

// material
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import MHidden from '../@material-extend/MHidden';
import DownloadIcon from '@mui/icons-material/Download';
import Logo from '../../assets/portfolio-webapp-logo.png';
import Resume from '../../assets/yogesh-resume.jpg';
import { makeStyles } from '@mui/styles';
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 30;
const APPBAR_DESKTOP = 60;

const RootStyle = styled(AppBar)(({ theme }) => ({
	padding: 10,
	boxShadow: 'none',
	backgroundColor: '#0a192f',
	[theme.breakpoints.up('lg')]: {
		width: `(100% - ${DRAWER_WIDTH + 1}px)`,
		padding: 24,
	},
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
	minHeight: APPBAR_MOBILE,
	[theme.breakpoints.up('lg')]: {
		minHeight: APPBAR_DESKTOP,
		padding: theme.spacing(0, 3),
	},
}));

const useStyles = makeStyles((theme) => ({
	logoImg: {
		borderRadius: 3,
		width: 34,
		height: 32,
		[theme.breakpoints.up('md')]: {
			width: 44,
			height: 42,
		},
	},
}));
// ----------------------------------------------------------------------

const navItems = [
	{
		id: '#about',
		number: '01',
		title: 'About',
	},
	{
		id: '#experience',
		number: '02',
		title: 'Experience',
	},
	{
		id: '#work',
		number: '03',
		title: 'Work',
	},
	{
		id: '#contact',
		number: '04',
		title: 'Contact',
	},
];

export default function DashboardNavbar({ onOpenSidebar }) {
	const classes = useStyles();
	return (
		<RootStyle>
			<ToolbarStyle>
				<Box
					boxShadow={20}
					id="#home"
					sx={{ ml: { xs: 0, sm: 0, lg: -2, md: -2 } }}
				>
					<Link href="#home">
						<img className={classes.logoImg} alt="logo" src={Logo} />
					</Link>
				</Box>
				<Box sx={{ flexGrow: 100 }} />
				<MHidden width="lgUp">
					<IconButton
						color="primary"
						sx={{ p: 0 }}
						onClick={() => onOpenSidebar()}
					>
						<MenuIcon sx={{ width: 38, height: 38 }} />
					</IconButton>
				</MHidden>

				<Box sx={{ flexGrow: 1 }} />
				<Box
					sx={{
						display: {
							xs: 'none',
							md: 'flex',
							gap: '34px',
							alignItems: 'center',
						},
					}}
				>
					{navItems.map((item, index) => {
						const { id, number, title } = item;
						return (
							<Typography
								key={index}
								sx={{
									display: 'flex',
									alignItems: 'center',
									fontFamily: 'monospace',
								}}
							>
								<Box
									sx={{
										mr: 0.8,
										color: (theme) => theme.palette.primary.main,
									}}
								>
									{number}.
								</Box>
								<Link
									href={id}
									underline="none"
									style={{
										color: '#fff',
										'&:hover': {
											color: 'red',
											cursor: 'pointer',
										},
									}}
								>
									<Typography
										sx={{
											display: 'flex',
											fontFamily: 'monospace',
											color: '#fff',
											'&:hover': {
												color: (theme) => theme.palette.primary.main,
												cursor: 'pointer',
											},
										}}
									>
										{title}
									</Typography>
								</Link>
							</Typography>
						);
					})}
					<Link href={Resume} download>
						<Button
							variant="outlined"
							endIcon={<DownloadIcon />}
							sx={{
								px: 2,
								py: 1,
								color: 'primary',
								borderRadius: 0.7,
								border: '1.5px solid',
								fontFamily: 'monospace',
								'&:hover': {
									border: '1.5px solid',
								},
							}}
						>
							Resume
						</Button>
					</Link>
				</Box>
			</ToolbarStyle>
		</RootStyle>
	);
}
