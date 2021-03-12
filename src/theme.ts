import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff8b3d',
      light: '#ff9d5c'
    },
    secondary: {
      main: '#663a82'
    }
  },
  overrides: {
    MuiTypography: {
      h5: {
        textTransform: 'uppercase'
      }
    }
  }
})