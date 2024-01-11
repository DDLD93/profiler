import React from 'react';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Login from '../screens/auth/Login';
import Private from './../screens/private/index';

const Stack = createStackNavigator();

// credentials context
import { CredentialsContext } from './../context/authContext';

const RootStack = () => {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: 'red' }}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: 'transparent',
              },
              //   headerTintColor: tertiary,
              headerTransparent: true,
              headerTitle: '',
              headerLeftContainerStyle: {
                paddingLeft: 20,
              },
            }}
          >
            {storedCredentials ? (
              <Stack.Screen
                options={{
                  //   headerTintColor: primary,
                  
                  }}
                name="Private"
                component={Private}
              />
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                {/* <Stack.Screen name="Signup" component={Signup} /> */}
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
};

export default RootStack;
