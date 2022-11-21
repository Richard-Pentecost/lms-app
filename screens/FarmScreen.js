import { Text, View } from 'react-native';

const FarmScreen = ({ route, navigation }) => {
  const { farm } = route.params;
  console.log(farm);
  return (
    <View>
      <Text>FarmScreen</Text>
    </View>
  );
};

export default FarmScreen;
