import { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import store from './store';
import { authenticate, logoutUser } from './store/actions/authActions';
import { Colours } from './constants/colours';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FarmScreen from './screens/FarmScreen';
import DataScreen from './screens/DataScreen';
import IconButton from './components/ui/IconButton';
import AddDataScreen from './screens/AddDataScreen';
import DateExampleScreen from './screens/DateExampleScreen';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

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
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerRight: () => (
          <IconButton
            icon={'sign-out'}
            color={Colours.green100}
            size={24}
            onPress={logoutHandler}
          />
        ),
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Farm" component={FarmTabNavigation} />
    </Stack.Navigator>
  );
};

const FarmTabNavigation = ({ route, navigation }) => {
  const { farm } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: farm.farmName });
  }, [farm]);

  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="Information"
        component={FarmScreen}
        initialParams={{ farm }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="info" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Data"
        component={DataScreen}
        initialParams={{ farm }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="table" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Example"
        component={DateExampleScreen}
        initialParams={{ farm }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="table" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Add Data"
        component={AddDataScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
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
