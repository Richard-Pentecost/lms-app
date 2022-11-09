import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colours } from '../../constants/colours';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colours.green100,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
