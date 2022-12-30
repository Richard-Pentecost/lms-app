import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Div } from 'react-native-magnus';
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
    <Div>
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        data={farms}
        keyExtractor={(item) => item.uuid}
        renderItem={renderFarmCard}
      />
    </Div>
  );
};

export default FarmList;
