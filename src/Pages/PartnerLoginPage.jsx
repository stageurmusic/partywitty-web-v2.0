import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  Box
} from '@chakra-ui/react';

import { useState } from 'react';

export default function PartnerLoginPage() {
  
  const [artist,setArtist]=useState(false)
    const grad={background: "rgb(20,10,41)",
      background: "radial-gradient(circle, rgba(20,10,41,0.6251750700280112) 0%, rgba(29,16,73,1) 76%);"}

  return (
    <Stack style={grad} color={"white"} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
            {/* Inner Div Artist or Club */}
        <Flex borderRadius={"2em"} p="2" backdropFilter="blur(6.5px)" justifyContent="space-around" w={{base:"10em",md:"12em",lg:"14em"}} h="" border="1px solid" top={{base:"150",lg:"300"}} left={{base:"170",lg:"250"}} position={"absolute"} >
          <Flex onClick={()=>setArtist(true)} alignItems={"center"} flexDirection={"column"} w="50%">
          <Image _hover={{transform:"scale(0.8)", transition:"transform 0.5s"}} w="80%" src="Images/band.png"/>
          <Text fontSize={{base:"15",md:"20",lg:"25"}} color={artist?"pink.400":"white"} fontWeight={"bold"}>Artist</Text>
          </Flex>
          <Flex onClick={()=>setArtist(false)} alignItems={"center"} w="50%"  flexDirection={"column"}>
          <Image _hover={{transform:"scale(0.8)", transition:"transform 0.5s"}} w="80%" src="Images/bar-counter.png"/>
          <Text fontSize={{base:"15",md:"20",lg:"25"}} color={artist?'white':"pink.400"}  fontWeight={"bold"}>Business</Text>
          </Flex>
        </Flex>
        <Image
        borderRadius={"0em 3em 3em 0em"}
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            artist?
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2ljaWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60':
            "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          }
        />
      </Flex>
      
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack align={"center"} spacing={4} w={'full'} maxW={'md'}>
          <Image w={{base:"8em", md:"12em", lg:"16em"}} src="https://partywitty.com/public/assets/img/logo.png"/>
          <Heading fontSize={'2xl'}>Welcome {artist?"Artist":"Club"}, Please Log In</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'pink.500'}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={'pink'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}