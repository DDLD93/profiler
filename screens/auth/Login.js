import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Image } from "native-base";
import { useContext,useState } from "react";
import {CredentialsContext} from "../../context/authContext"
export default function Login() {
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const [isLoading, setisLoading] = useState(false)

    const persistLogin = (credentials, message, status) => {
        setStoredCredentials(credentials);
        // AsyncStorage.setItem('userAuth', JSON.stringify(credentials))
        //   .then(() => {
        //     // handleMessage(message, status);
        //   })
        //   .catch((error) => {
        //     handleMessage('Persisting login failed');
        //     console.log(error);
        //   });
      };
      function handleLogin() {
        setisLoading(true);
        setTimeout(() => {
            persistLogin({user:"umaru"})
            setisLoading(true);

        }, 500);
      }
    return <Center w="100%">
   <Image mt="10" size={150} borderRadius={100} source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" />        
    <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Welcome
            </Heading>
            <Heading mt="1" _dark={{
                color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
                Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email ID</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" />
                    <Link _text={{
                        fontSize: "xs",
                        fontWeight: "500",
                        color: "indigo.500"
                    }} alignSelf="flex-end" mt="1">
                        Forget Password?
                    </Link>
                </FormControl>
                <Button isLoading={isLoading} isLoadingText="Signing In..." onPress={handleLogin} mt="2" >
                    Sign in
                </Button>
                {/* <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }}>
                        I'm a new user.{" "}
                    </Text>
                    <Link _text={{
                        color: "indigo.500",
                        fontWeight: "medium",
                        fontSize: "sm"
                    }} href="#">
                        Sign Up
                    </Link>
                </HStack> */}
            </VStack>
        </Box>
    </Center>;
};

// import AsyncStorage from '@react-native-async-storage/async-storage';

  // const clearLogin = () => {
  //   AsyncStorage.removeItem('flowerCribCredentials')
  //     .then(() => {
  //       setStoredCredentials("");
  //     })
  //     .catch((error) => console.log(error));
  // };
