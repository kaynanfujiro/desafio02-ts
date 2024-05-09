import {Text, Flex, Image} from '@chakra-ui/react'

export const Header  = () => {
  return(
      <Flex
      justify={'center'}
      minH={'10vh'}
      bg={'#ff8a00'}
      color={'white'}
      py={{ base: 2 }}
      px={{ base: 10 }}
      align={'center'}
      >
      <Image
       boxSize={'50px'}
       src='https://www.svgrepo.com/show/9509/bank.svg' 
       alt='bank image'
      />
      
      <Flex 
      display='flex'
      justifyContent='Center'
      textColor='9413dc'
      margin='5px' 
      >
      <Text fontSize="xl">Dio Bank Login</Text>
      </Flex>
    </Flex>
  );
};
