import { StyleSheet, Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ date, handleDateChange }) => {
  return (
    <View style={styles.dateInputContainer}>
      <Text style={styles.dateLabel}>Date:</Text>
      <View style={styles.datePickerContainer}>
        <DateTimePicker
          testID="datePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
          placeholder="Votes Due By"
          style={styles.datePicker}
        />
      </View>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    flex: 1,
    marginBottom: 16,
    borderRadius: 4,
  },
  dateLabel: {
    fontWeight: 'bold',
  },
  datePickerContainer: {
    width: '58%',
  },
  datePicker: {
    height: 30,
    // backgroundColor: 'white',
  },
});
