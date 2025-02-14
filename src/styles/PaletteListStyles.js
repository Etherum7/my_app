import sizes from './sizes';


export default {
    "@global":{
        
      '.fade-exit':{
          opacity:1
      },
      '.fade-exit-active':{
          opacity:0,
          transition:"opacity 500ms ease-out"
      }
    },
    root: {
       
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow:"scroll",
        backgroundColor: "#1018aa",

        
    },
    container: {
        width: "50%",
        display: "flex",
        justifyContent:"center",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
       

    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems:"center",
        color: "white",
        "& a":{
            color:"white"
        },
        
  
       
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "5%",
        
         [sizes.down('sm')]:{
            gridTemplateColumns: "repeat(2,50%)"
        },
         [sizes.down('xs')]:{
            gridTemplateColumns: "repeat(1,100%)"
        },
    }
}