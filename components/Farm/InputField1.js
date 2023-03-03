import { StyleSheet } from 'react-native';
import { Div, Text } from 'react-native-magnus';
import { TextInput } from 'react-native-paper';
import { Colours } from '../../constants/colours';

const InputField1 = ({
  label,
  keyboardType,
  value,
  field,
  errors,
  touched,
  formik,
  noOfLines,
}) => (
  <Div my={5}>
    <TextInput
      label={label}
      keyboardType={keyboardType}
      value={value}
      onChangeText={formik.handleChange(field)}
      onBlur={formik.handleBlur(field)}
      mode="outlined"
      outlineColor={Colours.grey400}
      style={styles.inputStyle}
      dense
      error={errors && touched}
      multiline={!!noOfLines}
      numberOfLines={noOfLines}
      theme={{
        colors: {
          error: Colours.red500,
        },
      }}
    />
    {touched && errors && (
      <Div>
        <Text color="red500" fontSize="md" mt="sm">
          {touched && errors}
        </Text>
      </Div>
    )}
  </Div>
);

export default InputField1;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#fff',
  },
  errorStyle: {
    borderColor: Colours.red500,
  },
});
