import { Box, Center, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { MyForm } from "../components/MyForm";
import { BtnLogin } from "../components/BtnLogin";
import { useContext, useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [ email, setEmail] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    
    const validateUser = async (email:string, password:string) => {
        const loggedIn = await login(email, password)


        if(!loggedIn){
            return alert('Email ou Senha Inválidos')
        }
        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate('/conta/1')
    }

    return(
        <MyForm>
             <Box w='50%' backgroundColor='#ff8a00' borderRadius='25px'padding='15px'>
                <Center color='white'>Faça Login</Center>
                    <FormControl color='white' id='mail'>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </FormControl>

                    <FormControl color='white' id='password'>
                    <FormLabel>Senha</FormLabel>
                    <Input  type='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </FormControl>

                <Stack spacing={5} pt={2}>
                    <BtnLogin onClick={() => validateUser(email, password)}>Entrar</BtnLogin>
                </Stack>
            </Box>
        </MyForm>
    );
}

export default Home;