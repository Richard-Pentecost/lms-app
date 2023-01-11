import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet } from 'react-native';
import { Div, Text } from 'react-native-magnus';

const DatePicker = ({ date, touched, errors, formik }) => {
  const handleChange = (_, selectedDate) => {
    formik.setFieldValue('date', selectedDate);
  };

  return (
    <>
      <Text fontSize="md" mt="lg">
        Date
      </Text>
      <Div
        mt="sm"
        bg="#fff"
        borderColor={touched && errors ? 'red500' : 'gray400'}
        borderWidth={1}
        rounded="md"
      >
        <Div w={110} rounded="md">
          <DateTimePicker
            testID="datePicker"
            value={date}
            mode="date"
            display="default"
            onBlur={formik.handleBlur('date')}
            onChange={handleChange}
            style={styles.datepicker}
          />
        </Div>
      </Div>
      {touched && errors && (
        <Div>
          <Text color="red500" fontSize="md" mt="sm">
            {touched && errors}
          </Text>
        </Div>
      )}
    </>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  datepicker: {
    borderRadius: 6,
  },
});
