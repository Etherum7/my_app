import {DRAWER_WIDTH} from '../constants';
import sizes from './sizes'
const drawerWidth= DRAWER_WIDTH;
const styles = theme => ({
    root: {
        display: 'flex',
        [sizes.down('xs')]: {
			
            overflow: 'scroll'
		},
    },

    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        display: "flex",
        alignItems: "center"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        width:"100%",
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: "calc(100vh)",
        overflow: "hidden",
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    container: {
        width: "90%",
        height: "calc(100vh-54px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        
    },
    concon: {
        height: "100%",
        marginTop: "0"
    },
    buttons: {
        width: "100%"
    },
    button: {
        width: "50%"
    }

});
export default styles;