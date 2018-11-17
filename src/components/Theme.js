import { createMuiTheme } from "@material-ui/core/styles";

export default props => {
  return createMuiTheme({
    typography: {
    	useNextVariants: true,
      //fontFamily: '"Assistant", sans-serif'
    },
    palette: {
      myGreen:"#7A9F35"
    },

  });
};