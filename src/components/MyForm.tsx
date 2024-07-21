import { Box } from '@chakra-ui/react';

export const MyForm = ({children}: any) => {

  return(
  <>
    <Box w='60vw' display='flex' justifyContent='center' alignItems='center' margin='25px'>
      {children}
    </Box>

  </>
  )
}
