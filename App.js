import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { authActions } from './store/slices/authSlice';
import { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { getToken, isTokenValid } from './utils/token-manager';
import { authenticate } from './store/actions/authActions';

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
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      dispatch(authenticate());
      setIsTryingLogin(false);
    };

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

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
