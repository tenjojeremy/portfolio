import React from 'react'
import { ThemeProvider } from 'styled-components'

export default ({ children }) => (
  <ThemeProvider theme={{ mediaQueries: { minWidth: [400, 1200], minHeight: [580] } }}>
    {children}
  </ThemeProvider>
)
