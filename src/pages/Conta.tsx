import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import CardInfo, { CardInfoPerso } from "../components/CardInfo"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { AppContext } from "../components/AppContext"
import Real from "../components/Moeda"

interface UserData{
    email: string
    password: string
    name: string
    balance: number
    id: string
  }

const Conta = () => {
    const [ userData, setUserData] = useState<null | UserData>()

    const { isLoggedIn } = useContext(AppContext)

    const {id} = useParams()
    const navigate = useNavigate() //Permite o preenchimento da URL

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        
        getData()
    }, [])
    
    const actualData = new Date()


    if(userData && id !== userData.id) {
        navigate('/')
    }

    return(
        <Box padding={25}>
            <SimpleGrid columns={2} spacing={8}>
                {
                    userData === undefined || userData === null ?
                    (
                        <Center>
                            <Spinner size='xl'/>
                        </Center>
                    ):
                    (
                        <>
                        <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData.getDay()}/ ${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}/>
                        <CardInfoPerso mainContent='Informações' content={`${userData.name}`} 
                        emailContent={`Email: ${userData.email}`}
                        balanceContent={`Saldo: ${Real(userData.balance)}`}
                            />
                        </>
                    )
                }
               
                
            </SimpleGrid>
        </Box>
    )
}

export default Conta