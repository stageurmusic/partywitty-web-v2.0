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
  
  export default function UserLoginPage() {
    
    const [artist,setArtist]=useState(false)
    const grad={background: "rgb(16,15,18)",
        background: "linear-gradient(17deg, rgba(16,15,18,0.6251750700280112) 46%, rgba(24,16,53,0.9753151260504201) 100%)"}
  
    return (
      <Stack style={grad}color={"white"} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
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