import { Box, Text, Heading, VStack, useColorMode, Switch, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import NativeBaseIcon from "../../components/NativeBaseIcon";
import { Platform } from "react-native";
import MenuDrawer from "../../components/MenuDrawer";
import NavBar from "../../components/NavBar";
export default function Home() {
    return   <Center
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "blueGray.50" }}
    flex={1}
    justifyContent="flex-start"
  >
    <NavBar/>
      <Box mt="30" height="150" width="250" maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "blueGray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0,
      backgroundColor: "blueGray.700"
    }} _light={{
      backgroundColor: "blueGray.700"
    }}>

    </Box>
    <VStack space={5} backgroundColor={"black"}  alignItems="center">
  
      {/* <Heading size="lg">Welcome to Home</Heading>
      <HStack space={2} alignItems="center">
        <Text>Edit</Text>
        <Box
          _web={{
            _text: {
              fontFamily: "monospace",
              fontSize: "sm",
            },
          }}
          px={2}
          py={1}
          _dark={{ bg: "blueGray.800" }}
          _light={{ bg: "blueGray.200" }}
        >
          App.js
        </Box>
        <Text>and save to reload.</Text>
      </HStack>
      <Link href="https://docs.nativebase.io" isExternal>
        <Text color="primary.500" underline fontSize={"xl"}>
          Learn NativeBase
        </Text>
      </Link> */}
      <ToggleDarkMode />
    </VStack>
    
  </Center> 
   
};


// Color Switch Component
function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <HStack space={2} alignItems="center">
        <Text>Dark</Text>
        <Switch
          isChecked={colorMode === "light"}
          onToggle={toggleColorMode}
          aria-label={
            colorMode === "light" ? "switch to dark mode" : "switch to light mode"
          }
        />
        <Text>Light</Text>
      </HStack>
    );
  }