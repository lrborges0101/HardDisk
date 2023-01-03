import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container:{
    display:'flex',
    

  },

  leftMenu:{
   marginTop:'70px',
   width:'40vw',
   boxShadow: '10px 4px 5px -7px rgba(0,0,0,0.29)',
  },

  search:{
    width:'18vw',
    marginBottom:'20px',
  },
  cats:{
    color:'#555',
  },
  cat:{
   margin:'20px',
   color:'#555',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
   
  },
  headline:{
    color:'#3F3C3C',
  },
  root: {
    flexGrow: 1,
  },
}));