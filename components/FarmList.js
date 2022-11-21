import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, View } from 'react-native';
import FarmCard from './Farm/FarmCard';

const FarmList = ({ farms }) => {
  const navigation = useNavigation();

  const renderFarmCard = ({ item }) => {
    onPressHandler = () => {
      navigation.navigate('Farm', { farm: item });
    };

    const farmCardProps = {
      farmName: item.farmName,
      postcode: item.postcode,
      contactName: item.contactName,
      contactNumber: item.contactNumber,
    };
    return <FarmCard {...farmCardProps} onPress={onPressHandler} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={farms}
        keyExtractor={(item) => item.uuid}
        renderItem={renderFarmCard}
      />
    </View>
  );
};

export default FarmList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
