import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

const DateExampleScreen = ({ route }) => {
  // console.log('Data Screen *****');
  // console.log(route.params);

  const [date, setDate] = useState(new Date());
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);
  // const [text, setText] = useState('Empty');

  const onChangeVotingDeadline = (event, selectedDate) => {
    console.log('event endTimeChange +++', selectedDate);
    const currentDate = selectedDate || date;
    // const showFlag = Platform.OS === 'ios';
    // this.setState({ show: showFlag });
    setDate(selectedDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.indInputContainer}>
        <Text style={styles.text}>Votes Due By: </Text>
        <View style={styles.dateTimePicker}>
          <DateTimePicker
            testID="datePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChangeVotingDeadline}
            placeholder="Votes Due By"
            style={{
              height: 40,
              borderWidth: 1,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DateExampleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 1,
  },
  indInputContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    // marginBottom: 20,
    marginTop: 20,
    color: '#000000',
    alignItems: 'center',
    // justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#DADADA',
    padding: 5,
    width: 320,
    shadowOffset: { width: 5, height: 6 },
    shadowColor: '#DADADA',
    shadowOpacity: 0.9,
    elevation: 3,
    backgroundColor: '#ffffff',
  },
  dateTimePicker: {
    width: 120,
    // borderWidth: 2
  },
});
