import { StyleSheet, View } from 'react-native';
import DataForm from '../components/Farm/DataForm';
import Header from '../components/ui/Header';

const AddDataScreen = () => {
  return (
    <View style={styles.container}>
      <Header>Add Data</Header>
      <DataForm />
    </View>
  );
};

export default AddDataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
