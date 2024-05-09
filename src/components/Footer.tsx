import { Flex, Text } from "@chakra-ui/react"

export const Footer  = () => {
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
    <Text>Footer</Text>
    </Flex>
  )
}
