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
    breakpoints: { 
    	values: {
    		xs: 0,
  			sm: 600,
  			md: 960,
  			lg: 1280,
  			xl: 1920,
    	}
    }

  });
};

//"list-style: none"

// const breakpointValues = {
//   xs: 0,
//   sm: 576,
//   md: 768,
//   lg: 992,
//   xl: 1200,
// };

// const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });