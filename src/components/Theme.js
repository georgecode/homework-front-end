import { createMuiTheme } from "@material-ui/core/styles";

export default props => {
  return createMuiTheme({
  // 	overrides: {
  //   li: { // Name of the component ⚛️ / style sheet
  //     root: { // Name of the rule
  //       //color: 'white', // Some CSS
  //       listStyle: "none"
  //     },
  //   },
  // },
    typography: {
    	useNextVariants: true,
      //fontFamily: '"Assistant", sans-serif'
    },
    palette: {
      myGreen:"#7A9F35"
    },

  });
};

//"list-style: none"