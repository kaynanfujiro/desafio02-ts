import { ChakraProvider,} from '@chakra-ui/react';
import { MyForm } from './components/MyForm';
import { Layout } from './components/Layout';

function App() {


  return (
    <ChakraProvider>
      <Layout>
        <MyForm/>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
