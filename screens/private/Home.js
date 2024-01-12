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
      <Box mt="30" height="170" width="90%" maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "blueGray.200"
    }} _web={{
      shadow: 2,
      borderWidth: 0,
      backgroundColor: "blueGray.200"
    }} _light={{
      backgroundColor: "blueGray.200"
    }}>

    </Box>
    <VStack space={5} backgroundColor={"black"}  alignItems="center">
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