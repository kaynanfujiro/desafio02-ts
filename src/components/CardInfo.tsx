import { Box, Center, Flex, Text, Image } from "@chakra-ui/react"
import contentImage from '../images/1683731867525.jpg'

interface ICardInfo{
    mainContent: string,
    content: string,
    emailContent?: string
    balanceContent?: string
    imageContent?: string
}

const CardInfo = ({mainContent, content}: ICardInfo) => {
    return(
            <Box padding={5} textAlign='justify' paddingTop={15} backgroundColor='white' width={350} height='120px' border='2px solid' boxShadow='2px 3px 3px' borderRadius='25px'>
                <Text fontSize='2xl' fontWeight='bold'> 
                    {mainContent} </Text>
                <Text fontSize='xl'> {content} </Text>
            </Box>
    )
}

export const CardInfoPerso = ({mainContent, content, emailContent, balanceContent, imageContent}: ICardInfo) => {
    return(
            <Flex>
                <Box display='flex' flexDirection='row' padding={5} textAlign='justify' paddingTop={15} backgroundColor='white' width={450} height='auto' border='2px solid' boxShadow='2px 3px 3px' borderRadius='25px'>
                    <Box padding='15px'>
                        <Image
                        boxSize='150px' 
                        src={contentImage} alt='teste'/>
                    </Box>
                    <Box>
                        <Center flexDirection='column' >
                            <Text fontSize='2xl' fontWeight='bold'> 
                                {mainContent} </Text>
                        </Center>
                        <Text fontSize='xl' fontWeight={500}> {content} </Text>
                        <Box display='flex' flexDirection='column'>
                            <Text fontSize='md'> {emailContent} </Text>
                            <Text fontSize='md'> {balanceContent} </Text>
                    </Box>
                    </Box>
                </Box>
            </Flex>
    )
}

export default CardInfo
