import { Flex } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <Header />
        <Flex
          justifyContent='center' 
          margin='0'
          padding='0'
          minHeight='80vh'
          bg='#white'
          >
        {children}
        </Flex>
      <Footer/>
    </>
  );
};
