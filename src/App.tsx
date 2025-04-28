import { mantineTheme } from './theme'
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from "react-router";
import { app_router } from './app-router';

function App() {
  return (
    <MantineProvider theme={mantineTheme}>
      <RouterProvider router={app_router} />
    </MantineProvider>
  )
}

export default App
