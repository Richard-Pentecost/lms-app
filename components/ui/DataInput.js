import { StyleSheet, Text, TextInput, View } from 'react-native';

const DataInput = ({
  children,
  keyboardType,
  onUpdateValue,
  value,
  isInvalid,
  noOfLines,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {children}:
      </Text>
      <TextInput
        style={[
          styles.input,
          isInvalid && styles.inputInvalid,
          noOfLines && styles.textArea,
        ]}
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
        multiline={!!noOfLines}
        numberOfLines={noOfLines}
      />
    </View>
  );
};

export default DataInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
    flexDirection: 'row',
    // borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
  },
  label: {
    color: 'black',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  labelInvalid: {
    color: 'red',
  },
  input: {
    width: '60%',
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 4,
  },
  inputInvalid: {
    backgroundColor: 'red',
  },
  textArea: {
    height: 100,
  },
});
