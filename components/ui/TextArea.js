import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextArea = ({ children, onUpdateValue, value, noOfLines }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{children}:</Text>
      <TextInput
        style={[styles.input, noOfLines && styles.textArea]}
        onChangeText={onUpdateValue}
        value={value}
        multiline={!!noOfLines}
        numberOfLines={noOfLines}
      />
    </View>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: 'black',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
  },
  textArea: {
    height: 60,
  },
});
