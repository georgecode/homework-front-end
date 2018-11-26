import { createMuiTheme } from "@material-ui/core/styles";

export default props => {
  return createMuiTheme({

    typography: {
      useNextVariants: true
      //fontFamily: '"Assistant", sans-serif'
    },
    palette: {
      primary: { main: "#9360A8" },
      myGreen: "#7A9F35"
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    }
  });
};
