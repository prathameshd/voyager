import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import AppRouter from './router/AppRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* TODO adding this is causing styling issues add back later */}
    {/* <StyledEngineProvider enableCssLayer> */}
      {/* <GlobalStyles styles="@layer theme, base, mui, components, utilities;" /> */}
      <AppRouter />
    {/* </StyledEngineProvider> */}
  </StrictMode>,
)
