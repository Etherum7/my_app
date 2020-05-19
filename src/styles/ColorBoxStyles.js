import chroma from 'chroma-js';
import sizes from './sizes';
export default {
	ColorBox: {
		width: '20%',
		height: (props) => (props.showFullPalette ? '25%' : '50%'),
		display: 'inline-block',
		cursor: 'pointer',
		margin: '0  auto',
		border:"none",
		position: 'relative',
		marginBottom: '-7px',
		'&:hover button': {
			opacity: '1',
			transition: '0.5s'
		},
		[sizes.down('lg')]: {
			width: '25%',
			height: (props) => (props.showFullPalette ? '20%' : '33.3333%')
		},
		[sizes.down('md')]: {
			width: '50%',
			height: (props) => (props.showFullPalette ? '10%' : '20%')
		},
		[sizes.down('xs')]: {
			width: '100%',
			height: (props) => (props.showFullPalette ? '5%' : '10%')
		},
		
	},
	copyText: {
		color: (props) => (chroma(props.background).luminance() <= 0.08 ? 'white' : 'black')
	},
	colorName: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white')
	},
	seeMore: {
		color: (props) => (chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'),
		backgroundColor: 'rgba(255,255,255,0.3)',
		position: 'absolute',
		right: '0',

		bottom: '0',
		border: 'none',
		width: '60px',
		height: '30px',
		lineHeight: '30px',
		textAlign: 'center',
		textTransform: 'uppercase'
	},
	copyButton: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white'),
		width: '100px',
		height: '30px',
		position: 'absolute',
		display: 'inline-block',
		top: '50%',
		left: '50%',
		marginTop: '-15px',
		marginLeft: '-50px',
		textAlign: 'center',
		outline: 'none',
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		fontSize: '1rem',
		textTransform: 'uppercase',
		lineHeight: '30px',
		border: 'none',
		opacity: '0',
		textDecoration: 'none'
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0px',
		bottom: '0px',
		padding: '5px',
		
		color: 'black',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px'
	},
	copyOverlay: {
		opacity: '0',
		width: '100%',
		height: '100%',
		zIndex: '0',
		transition: 'transform 0.6s ease-in-out',
		transform: 'scale(0.1)'
	},
	showOverlay: {
		opacity: '1',
		transform: 'scale(50)',
		zIndex: '10',
		position: 'absolute'
	},
	copyMsg: {
		position: 'fixed',
		right: '0',
		left: '0',
		bottom: '0',
		top: '0',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '4rem',
		transform: 'scale(0.1)',
		opacity: '0',
		color: 'white',
		'& h1': {
			fontWeight: '400',
			textShadow: '1px 2px black',
			background: 'rgba(255, 255, 255, 0.2)',
			width: '100%',
			textAlign: 'center',
			marginBottom: '0',
			textTransform: 'uppercase',
			padding: '1rem'
		},
		'& p': {
			fontSize: '2rem',
			fontWeight: '100'
		}
	},
	showMsg: {
		opacity: '1',
		transform: 'scale(1)',
		zIndex: '25',
		transition: 'all 0.4s ease-in-out',
		transitionDelay: '0.3s'
	}
};
