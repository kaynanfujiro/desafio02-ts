import { Center, Input, Box, Text, Stack, FormControl, FormLabel } from '@chakra-ui/react';
import { useState } from 'react';
import { BtnLogin } from './BtnLogin';
import {Login} from '../services/login'
import { Inputs } from './Inputs';

export const MyForm = () => {

	const [showPassword] = useState(false);
	const [input, setInput] = useState('');

	const handleInputChange = (e: {
		target: { value: React.SetStateAction<string> };
	}) => setInput(e.target.value);

  return(
  <>
    <Box w='60vw'
    display='flex'
    justifyContent='center'
    alignItems='center'
    margin='25px'>
      
      <Box w='50%'
      backgroundColor='#ff8a00'
      borderRadius='25px'
      padding='15px'>
        		<FormControl color='white' id='name'>
						  <FormLabel>Nome</FormLabel>
						<Inputs type='name' value={input} onChange={handleInputChange} />
					</FormControl>

        <FormControl color='white' id='mail'>
            <FormLabel>Email</FormLabel>
            <Input type='email'/>
        </FormControl>

        <FormControl color='white' id='password'>
          <FormLabel>Senha</FormLabel>
          <Input  type={showPassword ? 'text' : 'password'} />
        </FormControl>

      <Stack spacing={5} pt={2}>
          <BtnLogin onClick={() => Login(input)}>Entrar</BtnLogin>
      </Stack>
      </Box>
    </Box>

  </>
  )
}
