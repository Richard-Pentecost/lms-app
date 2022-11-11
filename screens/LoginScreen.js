import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginUser } from '../store/actions/authActions';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const loginHandler = (data) => {
    dispatch(loginUser(data));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.screenContainer}>
      <LoginForm loginUser={loginHandler} />
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 200,
  },
});
