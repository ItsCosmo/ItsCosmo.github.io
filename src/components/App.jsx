import { useState } from 'react'
import { Grommet, grommet, Page, PageContent, PageHeader } from 'grommet';
import { deepMerge } from 'grommet/utils'
import MainHeader from './MainHeader'
import MainContent from './MainContent'

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
    fontWeight: "normal"
  }
});

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Grommet theme={theme} full themeMode="auto">
      <Page kind="narrow">
        <MainHeader />
        <PageContent>
          <MainContent />
        </PageContent>
      </Page>
    </Grommet>
  )
}

export default App
