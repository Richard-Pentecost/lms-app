import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colours } from '../../constants/colours';
import FarmCardDetail from './FarmCardDetail';

const FarmCard = ({ farmName, postcode, contactName, contactNumber }) => {
  return (
    <Pressable
      onPress={() => {}}
      style={({ pressed }) => [styles.farmCard, pressed && styles.pressed]}
    >
      <View style={styles.headingContainer}>
        <Text style={styles.farmNameText}>{farmName}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <FarmCardDetail icon={'address-card-o'}>{postcode}</FarmCardDetail>
        <FarmCardDetail icon={'user'}>{contactName}</FarmCardDetail>
        <FarmCardDetail icon={'phone-square'}>{contactNumber}</FarmCardDetail>
      </View>
    </Pressable>
  );
};

export default FarmCard;

const styles = StyleSheet.create({
  farmCard: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colours.grey30,
  },
  pressed: {
    opacity: 0.7,
  },
  headingContainer: {
    borderBottomWidth: 1,
    paddingBottom: 4,
    borderBottomColor: Colours.grey30,
  },
  farmNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colours.grey100,
  },
  detailsContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
});
