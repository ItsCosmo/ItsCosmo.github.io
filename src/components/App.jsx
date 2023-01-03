import { useState } from 'react'
import { Grommet, grommet, Page, PageContent } from 'grommet';
import { BrowserRouter, useNavigate, useLocation  } from 'react-router-dom'
import { deepMerge } from 'grommet/utils'
import GlobalHeader from './GlobalHeader'
import ChildRoutes from './ChildRoutes';

const theme = deepMerge(grommet, {
  global: {
    font: {
      family: "Inter, Avenir, Helvetica, Arial, sans-serif",
      size: "16px",
      height: "24px",
      weight: "normal"
    },
  },
  anchor: {
    fontWeight: "normal",
    color: {
      dark: "#f8f8f8",
      light: "black"
    }
  }
});

const App = () => {
  return (
    <Grommet theme={theme} full themeMode="auto">
      <Page kind="narrow">
        <GlobalHeader />
        <PageContent>
          <ChildRoutes />
        </PageContent>
      </Page>
    </Grommet>
  )
}

export default App
