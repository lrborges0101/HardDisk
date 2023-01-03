import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(() => ({
  body:{
    overflowY: 'auto',
  },  
  root: {
      maxWidth: '100%',
      margin:"10px",
      fontFamily:'arial',
    },
    
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
      margin:"1000px"
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
      
    },
  }));