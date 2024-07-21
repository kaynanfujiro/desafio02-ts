import {Text, Flex, Image, Button, Spacer} from '@chakra-ui/react'
import { useContext } from 'react';
import { AppContext } from './AppContext';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../services/storage';


export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn} = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    setIsLoggedIn(false)
    changeLocalStorage({login: false})
    navigate('/')
  }
  
  return(
      <Flex justify={'center'} minH={'10vh'} bg={'#ff8a00'} color={'white'} py={{ base: 2 }} px={{ base: 10 }} align={'center'}>
        <Image boxSize={'50px'} src='https://www.svgrepo.com/show/9509/bank.svg'  alt='bank image'/>
        <Flex display='flex' justifyContent='Center' textColor='9413dc' margin='5px' >
          <Text fontSize="xl">Dio Bank</Text>
        </Flex>
        {
        isLoggedIn && (
          <>
          <Spacer/>
          <Button bg={'#ff8a00'} color={'white'} _hover={{ bg: '#FFFF',color:'#000' }} onClick={() => logout()}>Sair</Button>
          </>
        )}

    </Flex>
  );
};
