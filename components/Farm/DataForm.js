import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import DataInput from '../ui/DataInput';
import PrimaryButton from '../ui/PrimaryButton';
import TextArea from '../ui/TextArea';
import DatePicker from '../ui/DatePicker';
import Select from '../ui/Select';

const DataForm = () => {
  const [date, setDate] = useState(new Date());
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (inputType, enteredValue) => {
    setFormValues({ ...formValues, [inputType]: enteredValue });
  };

  const handleDateChange = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const onPressHandler = () => {
    console.log(formValues);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <DatePicker date={date} handleDateChange={handleDateChange} />
        <DataInput
          onUpdateValue={handleInputChange.bind(this, 'noOfCows')}
          value={formValues.noOfCows}
          keyboardType="number-pad"
        >
          Number of Cows
        </DataInput>
        <DataInput
          onUpdateValue={handleInputChange.bind(this, 'quantity')}
          value={formValues.quantity}
          keyboardType="decimal-pad"
        >
          Quantity
        </DataInput>
        <DataInput
          onUpdateValue={handleInputChange.bind(this, 'meterReading')}
          value={formValues.meterReading}
          keyboardType="decimal-pad"
        >
          Meter reading
        </DataInput>
        <DataInput
          onUpdateValue={handleInputChange.bind(this, 'waterUsage')}
          value={formValues.waterUsage}
          keyboardType="number-pad"
        >
          Water usage
        </DataInput>
        <DataInput
          onUpdateValue={handleInputChange.bind(this, 'pumpDial')}
          value={formValues.pumpDial}
          keyboardType="number-pad"
        >
          Pump dial
        </DataInput>
        <DataInput
          onUpdateValue={handleInputChange.bind(this, 'floatBeforeDelivery')}
          value={formValues.floatBeforeDelivery}
          keyboardType="number-pad"
        >
          Float before delivery
        </DataInput>
        <DataInput
          onUpdateValue={handleInputChange.bind(this, 'targetFeedRage')}
          value={formValues.targetFeedRate}
          keyboardType="number-pad"
        >
          Target feed rate
        </DataInput>
        <DataInput
          onUpdateValue={handleInputChange.bind(this, 'floatAfterDelivery')}
          value={formValues.floatAfterDelivery}
          keyboardType="number-pad"
        >
          Float after delivery
        </DataInput>
        <Select />
        <TextArea
          onUpdateValue={handleInputChange.bind(this, 'comments')}
          value={formValues.comments}
          noOfLines="4"
        >
          Comments
        </TextArea>
        <PrimaryButton onPress={onPressHandler}>Add data</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default DataForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    padding: 10,
  },
});
