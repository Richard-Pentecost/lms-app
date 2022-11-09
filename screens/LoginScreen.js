import { StyleSheet, View } from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <LoginForm />
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
