import sizes from './sizes';
export default {
    NavBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh'
},
logo: {
    marginRight:'15px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto',
    height: '100%',
    "& a":{
        textDecoration: 'none',
        color: 'black'
    },
    [sizes.down('xs')]:{
      display: 'none'
    }


},

SelectContainer :{
    marginLeft: 'auto',
    marginRight: '1rem'
}

}