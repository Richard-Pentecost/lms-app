import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = ({
  children,
  keyboardType,
  onUpdateValue,
  value,
  secure,
  isInvalid,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {children}:
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
        secureTextEntry={secure}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: 'black',
    marginBotton: 4,
  },
  labelInvalid: {
    color: 'red',
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: '#ccc',
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: 'red',
  },
});
