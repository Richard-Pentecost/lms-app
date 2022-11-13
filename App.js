import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import { authActions } from './store/slices/authSlice';
import { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { isTokenValid } from './utils/token-manager';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const { token } = useSelector((state) => state.authState);
  return (
    <NavigationContainer>
      {token ? <AuthenticatedStack /> : <LoginStack />}
    </NavigationContainer>
  );
};

const Root = () => {
  //   const [isTryingLogin, setIsTryingLogin] = useState(true);
  //   const { token } = useSelector((state) => state.authState);

  //   useEffect(() => {
  //     console.log('**** useEffect ****');
  //     const fetchToken = async () => {
  //       console.log(token);
  //       Boolean(token) && isTokenValid(token);
  //       console.log(isTokenValid(token));
  //       setIsTryingLogin(false);
  //     };

  //     fetchToken();
  //   }, []);

  //   if (isTryingLogin) {
  //     return <AppLoading />;
  //   }

  return <Navigation />;
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <Root />
      </Provider>
    </>
  );
}
