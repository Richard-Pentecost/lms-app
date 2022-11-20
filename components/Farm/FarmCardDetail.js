import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colours } from '../../constants/colours';

const FarmCardDetail = ({ children, icon }) => {
  return (
    <View style={styles.detailContainer}>
      <FontAwesome name={icon} size={16} color={Colours.grey100} />
      <Text style={styles.detailText}>{children}</Text>
    </View>
  );
};

export default FarmCardDetail;

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 4,
  },
  detailText: {
    color: Colours.grey100,
    paddingLeft: 8,
  },
});
