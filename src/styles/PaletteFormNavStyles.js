import { DRAWER_WIDTH } from '../constants';
import sizes from './sizes'
const drawerWidth = DRAWER_WIDTH;
const styles = theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        [sizes.down('xs')]: {
			
            height: "54px"
		},
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    navBtns: {
        marginRight: '1rem',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",

        "& :Link": {
            marginRight: '0.5rem',
            textDecoration: "none"
        }

        
    }
   
})
export default styles;