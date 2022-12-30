import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FarmInfoItem = ({ children, label, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome name={icon} color="green" size="19" />
        </View>
        <Text style={styles.text}>{label}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
};

export default FarmInfoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  labelContainer: {
    flexDirection: 'row',
    flex: 1,
    // borderWidth: 1,
  },
  iconContainer: {
    width: 50,
  },
  textContainer: {
    flex: 1,
    // borderWidth: 1,
    alignItems: 'flex-end',
    marginRight: 30,
  },
  text: {
    fontSize: 19,
  },
});
