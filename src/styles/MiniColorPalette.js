export default  {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        border:"1px solid black",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
            opacity:"1"
        }


    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "100px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        padding:"0px",
        margin: "0 auto",
        marginBottom: "-7px",
        border: "none",
        position: "relative",
        boxSizing: "content-box"

    },
    
    deleteIcon:{
        color:"white",
        backgroundColor:"#ed3d30",
        width:"30px",
        height:"30px",
        position:"absolute",
        right:"0px",
        top:"0px",
        zIndex:"10",
        padding:"5px",
        opacity:"0",
       

    }


}