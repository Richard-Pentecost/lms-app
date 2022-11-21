import { Text } from 'react-native';

const DataScreen = ({ route }) => {
  console.log('Data Screen *****');
  console.log(route.params);
  return <Text>Data Screen</Text>;
};

export default DataScreen;
