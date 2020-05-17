import sizes from './sizes'
export default {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    PaletteColors: {
        height: "90%"
    },
    goBack: {
        width: "20%",
        height: "50%",
        display: "inline-block",
        cursor: "pointer",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-5px",
        opacity: "1",
        backgroundColor: "black",
        textDecoration: "none",
        "& a": {
            color: "white",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginTop: "-15px",
            marginLeft: "-50px",
            textAlign: "center",
            outline: "none",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            fontSize: "1rem",
            textTransform: "uppercase",
            lineHeight: "30px",
            border: "none",
            opacity: "1",
            textDecoration: "none"
        },
        [sizes.down('lg')]: {
			width: '25%',
			height: '33.3333%'
		}, 
		[sizes.down('md')]: {
			width: '50%',
			height: '20%'
		},
		[sizes.down('xs')]: {
			width: '100%',
			height:'10%'
		},




    }

}