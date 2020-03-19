import 'styled-components'

declare module '@material-ui/core/styles/createMuiTheme' {
  export interface ThemeOptions {
    borderRadius?: string,
  }
}