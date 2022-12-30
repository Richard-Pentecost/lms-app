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

const DataScreen = ({ route }) => {
  // console.log('Data Screen *****');
  // console.log(route.params);

  const { data } = useSelector((state) => state.dataState);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    console.log('*** onChange ***');
    const currentDate = selectedDate || date;

    setDate(currentDate);
    setShow(Platform.OS === 'ios' ? true : false);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    let fTime =
      'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime);

    console.log(fDate + '(' + fTime + ')');
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    // <ScrollView style={{ flex: 1, borderWidth: 2, borderColor: 'black' }}>
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={{ margin: 20 }}>
        <Button title="DatePicker" onPress={() => showMode('date')} />
      </View>
      <View style={{ margin: 20 }}>
        <Button title="TimePicker" onPress={() => showMode('time')} />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          style={{
            width: '30%',
            height: 50,
            borderWidth: 1,
            borderColor: 'black',
            alignContent: 'flex-start',
          }}
        />
      )}
    </View>
    // </ScrollView>
  );
};

export default DataScreen;

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
  },
});
