import { StyleSheet, View } from 'react-native';
import Input from './ui/Input';
import PrimaryButton from './ui/PrimaryButton';

const LoginForm = () => {
  return (
    <View style={styles.form}>
      <View>
        <Input>Email</Input>
        <Input>Password</Input>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton>Login</PrimaryButton>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    marginTop: 12,
  },
});
