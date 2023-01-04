import { Div, Input, Text } from 'react-native-magnus';

const InputField = ({
  label,
  keyboardType,
  value,
  field,
  errors,
  touched,
  formik,
}) => (
  <>
    <Text fontSize="md" mt="xl">
      {label}
    </Text>
    <Input
      mt="sm"
      py="lg"
      placeholder={label}
      autoCapitalize={false}
      keyboardType={keyboardType}
      value={value}
      onChangeText={formik.handleChange(field)}
      onBlur={formik.handleBlur(field)}
      borderColor={touched && errors ? 'red500' : 'gray400'}
    />
    <Div>
      <Div position="absolute" top={0} zIndex={1}>
        <Text color="red500" fontSize="md" mt="sm">
          {touched && errors}
        </Text>
      </Div>
    </Div>
  </>
);

export default InputField;
