import { Layout } from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './routes';
import { createLocalStorage, getAlllocalStorage } from './services/storage';

function App() {

    !getAlllocalStorage() && createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes/>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
