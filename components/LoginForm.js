import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/authActions';
import Input from './ui/Input';
import PrimaryButton from './ui/PrimaryButton';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const updateInputHandler = (inputType, enteredValue) => {
    switch (inputType) {
      case 'email':
        setEmail(enteredValue);
        break;
      case 'password':
        setPassword(enteredValue);
        break;
    }
  };

  const onPress = () => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <View style={styles.form}>
      <View>
        <Input
          onUpdateValue={updateInputHandler.bind(this, 'email')}
          value={email}
          keyboardType="email-address"
        >
          Email
        </Input>
        <Input
          onUpdateValue={updateInputHandler.bind(this, 'password')}
          value={password}
          secure
        >
          Password
        </Input>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onPress}>Login</PrimaryButton>
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
