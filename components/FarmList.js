import { FlatList, StyleSheet, Text, View } from 'react-native';
import FarmCard from './Farm/FarmCard';

const FarmList = ({ farms }) => {
  const renderFarmCard = ({ item }) => {
    const farmCardProps = {
      farmName: item.farmName,
      postcode: item.postcode,
      contactName: item.contactName,
      contactNumber: item.contactNumber,
    };
    return <FarmCard {...farmCardProps} />;
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
